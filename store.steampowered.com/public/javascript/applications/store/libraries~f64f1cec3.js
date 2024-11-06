/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7259],
  {
    82715: (t, e, s) => {
      s.d(e, { tH: () => J });
      const n = "8.27.0",
        r = globalThis;
      function i(t, e, s) {
        const i = s || r,
          o = (i.__SENTRY__ = i.__SENTRY__ || {}),
          c = (o[n] = o[n] || {});
        return c[t] || (c[t] = e());
      }
      function o() {
        return c(r), r;
      }
      function c(t) {
        const e = (t.__SENTRY__ = t.__SENTRY__ || {});
        return (e.version = e.version || n), (e[n] = e[n] || {});
      }
      const a = Object.prototype.toString;
      function u(t, e) {
        return a.call(t) === `[object ${e}]`;
      }
      function h(t) {
        return u(t, "Object");
      }
      function p(t, e) {
        try {
          return t instanceof e;
        } catch (t) {
          return !1;
        }
      }
      function l() {
        const t = r,
          e = t.crypto || t.msCrypto;
        let s = () => 16 * Math.random();
        try {
          if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
          e &&
            e.getRandomValues &&
            (s = () => {
              const t = new Uint8Array(1);
              return e.getRandomValues(t), t[0];
            });
        } catch (t) {}
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (t) =>
          (t ^ ((15 & s()) >> (t / 4))).toString(16),
        );
      }
      function d() {
        return { traceId: l(), spanId: l().substring(16) };
      }
      const _ = 1e3;
      function f() {
        return Date.now() / _;
      }
      const g = (function () {
        const { performance: t } = r;
        if (!t || !t.now) return f;
        const e = Date.now() - t.now(),
          s = null == t.timeOrigin ? e : t.timeOrigin;
        return () => (s + t.now()) / _;
      })();
      let m;
      (() => {
        const { performance: t } = r;
        if (!t || !t.now) return void (m = "none");
        const e = 36e5,
          s = t.now(),
          n = Date.now(),
          i = t.timeOrigin ? Math.abs(t.timeOrigin + s - n) : e,
          o = i < e,
          c = t.timing && t.timing.navigationStart,
          a = "number" == typeof c ? Math.abs(c + s - n) : e;
        o || a < e
          ? i <= a
            ? ((m = "timeOrigin"), t.timeOrigin)
            : (m = "navigationStart")
          : (m = "dateNow");
      })();
      const b = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        v = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        S = {};
      function y(t) {
        if (!("console" in r)) return t();
        const e = r.console,
          s = {},
          n = Object.keys(S);
        n.forEach((t) => {
          const n = S[t];
          (s[t] = e[t]), (e[t] = n);
        });
        try {
          return t();
        } finally {
          n.forEach((t) => {
            e[t] = s[t];
          });
        }
      }
      const E = (function () {
        let t = !1;
        const e = {
          enable: () => {
            t = !0;
          },
          disable: () => {
            t = !1;
          },
          isEnabled: () => t,
        };
        return (
          b
            ? v.forEach((s) => {
                e[s] = (...e) => {
                  t &&
                    y(() => {
                      r.console[s](`Sentry Logger [${s}]:`, ...e);
                    });
                };
              })
            : v.forEach((t) => {
                e[t] = () => {};
              }),
          e
        );
      })();
      function w(t, e = {}) {
        if (
          (e.user &&
            (!t.ipAddress &&
              e.user.ip_address &&
              (t.ipAddress = e.user.ip_address),
            t.did ||
              e.did ||
              (t.did = e.user.id || e.user.email || e.user.username)),
          (t.timestamp = e.timestamp || g()),
          e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
          e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
          e.sid && (t.sid = 32 === e.sid.length ? e.sid : l()),
          void 0 !== e.init && (t.init = e.init),
          !t.did && e.did && (t.did = `${e.did}`),
          "number" == typeof e.started && (t.started = e.started),
          t.ignoreDuration)
        )
          t.duration = void 0;
        else if ("number" == typeof e.duration) t.duration = e.duration;
        else {
          const e = t.timestamp - t.started;
          t.duration = e >= 0 ? e : 0;
        }
        e.release && (t.release = e.release),
          e.environment && (t.environment = e.environment),
          !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
          !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
          "number" == typeof e.errors && (t.errors = e.errors),
          e.status && (t.status = e.status);
      }
      function x(t, e, s) {
        try {
          Object.defineProperty(t, e, {
            value: s,
            writable: !0,
            configurable: !0,
          });
        } catch (s) {
          b &&
            E.log(`Failed to add non-enumerable property "${e}" to object`, t);
        }
      }
      const I = "_sentrySpan";
      function k(t, e) {
        e ? x(t, I, e) : delete t[I];
      }
      function C(t) {
        return t[I];
      }
      class R {
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
            (this._propagationContext = d());
        }
        clone() {
          const t = new R();
          return (
            (t._breadcrumbs = [...this._breadcrumbs]),
            (t._tags = { ...this._tags }),
            (t._extra = { ...this._extra }),
            (t._contexts = { ...this._contexts }),
            (t._user = this._user),
            (t._level = this._level),
            (t._session = this._session),
            (t._transactionName = this._transactionName),
            (t._fingerprint = this._fingerprint),
            (t._eventProcessors = [...this._eventProcessors]),
            (t._requestSession = this._requestSession),
            (t._attachments = [...this._attachments]),
            (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
            (t._propagationContext = { ...this._propagationContext }),
            (t._client = this._client),
            (t._lastEventId = this._lastEventId),
            k(t, C(this)),
            t
          );
        }
        setClient(t) {
          this._client = t;
        }
        setLastEventId(t) {
          this._lastEventId = t;
        }
        getClient() {
          return this._client;
        }
        lastEventId() {
          return this._lastEventId;
        }
        addScopeListener(t) {
          this._scopeListeners.push(t);
        }
        addEventProcessor(t) {
          return this._eventProcessors.push(t), this;
        }
        setUser(t) {
          return (
            (this._user = t || {
              email: void 0,
              id: void 0,
              ip_address: void 0,
              username: void 0,
            }),
            this._session && w(this._session, { user: t }),
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
        setRequestSession(t) {
          return (this._requestSession = t), this;
        }
        setTags(t) {
          return (
            (this._tags = { ...this._tags, ...t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setTag(t, e) {
          return (
            (this._tags = { ...this._tags, [t]: e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtras(t) {
          return (
            (this._extra = { ...this._extra, ...t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtra(t, e) {
          return (
            (this._extra = { ...this._extra, [t]: e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setFingerprint(t) {
          return (this._fingerprint = t), this._notifyScopeListeners(), this;
        }
        setLevel(t) {
          return (this._level = t), this._notifyScopeListeners(), this;
        }
        setTransactionName(t) {
          return (
            (this._transactionName = t), this._notifyScopeListeners(), this
          );
        }
        setContext(t, e) {
          return (
            null === e ? delete this._contexts[t] : (this._contexts[t] = e),
            this._notifyScopeListeners(),
            this
          );
        }
        setSession(t) {
          return (
            t ? (this._session = t) : delete this._session,
            this._notifyScopeListeners(),
            this
          );
        }
        getSession() {
          return this._session;
        }
        update(t) {
          if (!t) return this;
          const e = "function" == typeof t ? t(this) : t,
            [s, n] =
              e instanceof O
                ? [e.getScopeData(), e.getRequestSession()]
                : h(e)
                  ? [t, t.requestSession]
                  : [],
            {
              tags: r,
              extra: i,
              user: o,
              contexts: c,
              level: a,
              fingerprint: u = [],
              propagationContext: p,
            } = s || {};
          return (
            (this._tags = { ...this._tags, ...r }),
            (this._extra = { ...this._extra, ...i }),
            (this._contexts = { ...this._contexts, ...c }),
            o && Object.keys(o).length && (this._user = o),
            a && (this._level = a),
            u.length && (this._fingerprint = u),
            p && (this._propagationContext = p),
            n && (this._requestSession = n),
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
            k(this, void 0),
            (this._attachments = []),
            (this._propagationContext = d()),
            this._notifyScopeListeners(),
            this
          );
        }
        addBreadcrumb(t, e) {
          const s = "number" == typeof e ? e : 100;
          if (s <= 0) return this;
          const n = { timestamp: f(), ...t },
            r = this._breadcrumbs;
          return (
            r.push(n),
            (this._breadcrumbs = r.length > s ? r.slice(-s) : r),
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
        addAttachment(t) {
          return this._attachments.push(t), this;
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
            span: C(this),
          };
        }
        setSDKProcessingMetadata(t) {
          return (
            (this._sdkProcessingMetadata = {
              ...this._sdkProcessingMetadata,
              ...t,
            }),
            this
          );
        }
        setPropagationContext(t) {
          return (this._propagationContext = t), this;
        }
        getPropagationContext() {
          return this._propagationContext;
        }
        captureException(t, e) {
          const s = e && e.event_id ? e.event_id : l();
          if (!this._client)
            return (
              E.warn(
                "No client configured on scope - will not capture exception!",
              ),
              s
            );
          const n = new Error("Sentry syntheticException");
          return (
            this._client.captureException(
              t,
              {
                originalException: t,
                syntheticException: n,
                ...e,
                event_id: s,
              },
              this,
            ),
            s
          );
        }
        captureMessage(t, e, s) {
          const n = s && s.event_id ? s.event_id : l();
          if (!this._client)
            return (
              E.warn(
                "No client configured on scope - will not capture message!",
              ),
              n
            );
          const r = new Error(t);
          return (
            this._client.captureMessage(
              t,
              e,
              {
                originalException: t,
                syntheticException: r,
                ...s,
                event_id: n,
              },
              this,
            ),
            n
          );
        }
        captureEvent(t, e) {
          const s = e && e.event_id ? e.event_id : l();
          return this._client
            ? (this._client.captureEvent(t, { ...e, event_id: s }, this), s)
            : (E.warn(
                "No client configured on scope - will not capture event!",
              ),
              s);
        }
        _notifyScopeListeners() {
          this._notifyingListeners ||
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((t) => {
              t(this);
            }),
            (this._notifyingListeners = !1));
        }
      }
      const O = R;
      class $ {
        constructor(t, e) {
          let s, n;
          (s = t || new O()),
            (n = e || new O()),
            (this._stack = [{ scope: s }]),
            (this._isolationScope = n);
        }
        withScope(t) {
          const e = this._pushScope();
          let s;
          try {
            s = t(e);
          } catch (t) {
            throw (this._popScope(), t);
          }
          return (
            (n = s),
            Boolean(n && n.then && "function" == typeof n.then)
              ? s.then(
                  (t) => (this._popScope(), t),
                  (t) => {
                    throw (this._popScope(), t);
                  },
                )
              : (this._popScope(), s)
          );
          var n;
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
          const t = this.getScope().clone();
          return this._stack.push({ client: this.getClient(), scope: t }), t;
        }
        _popScope() {
          return !(this._stack.length <= 1) && !!this._stack.pop();
        }
      }
      function D() {
        const t = c(o());
        return (t.stack =
          t.stack ||
          new $(
            i("defaultCurrentScope", () => new O()),
            i("defaultIsolationScope", () => new O()),
          ));
      }
      function L(t) {
        return D().withScope(t);
      }
      function N(t, e) {
        const s = D();
        return s.withScope(() => ((s.getStackTop().scope = t), e(t)));
      }
      function U(t) {
        return D().withScope(() => t(D().getIsolationScope()));
      }
      function j(t) {
        const e = c(t);
        return e.acs
          ? e.acs
          : {
              withIsolationScope: U,
              withScope: L,
              withSetScope: N,
              withSetIsolationScope: (t, e) => U(e),
              getCurrentScope: () => D().getScope(),
              getIsolationScope: () => D().getIsolationScope(),
            };
      }
      function M() {
        return j(o()).getCurrentScope();
      }
      new WeakMap();
      function q(t) {
        if (t)
          return (function (t) {
            return t instanceof O || "function" == typeof t;
          })(t) ||
            (function (t) {
              return Object.keys(t).some((t) => P.includes(t));
            })(t)
            ? { captureContext: t }
            : t;
      }
      const P = [
        "user",
        "level",
        "extra",
        "contexts",
        "tags",
        "fingerprint",
        "requestSession",
        "propagationContext",
      ];
      function T() {
        return j(o()).getIsolationScope().lastEventId();
      }
      const Q =
        /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
      function B(t) {
        return {
          protocol: t.protocol,
          publicKey: t.publicKey || "",
          pass: t.pass || "",
          host: t.host,
          port: t.port || "",
          path: t.path || "",
          projectId: t.projectId,
        };
      }
      function H(t) {
        const e =
          "string" == typeof t
            ? (function (t) {
                const e = Q.exec(t);
                if (!e)
                  return void y(() => {
                    console.error(`Invalid Sentry Dsn: ${t}`);
                  });
                const [s, n, r = "", i = "", o = "", c = ""] = e.slice(1);
                let a = "",
                  u = c;
                const h = u.split("/");
                if (
                  (h.length > 1 &&
                    ((a = h.slice(0, -1).join("/")), (u = h.pop())),
                  u)
                ) {
                  const t = u.match(/^\d+/);
                  t && (u = t[0]);
                }
                return B({
                  host: i,
                  pass: r,
                  path: a,
                  projectId: u,
                  port: o,
                  protocol: s,
                  publicKey: n,
                });
              })(t)
            : B(t);
        if (
          e &&
          (function (t) {
            if (!b) return !0;
            const { port: e, projectId: s, protocol: n } = t;
            return !(
              ["protocol", "publicKey", "host", "projectId"].find(
                (e) =>
                  !t[e] && (E.error(`Invalid Sentry Dsn: ${e} missing`), !0),
              ) ||
              (s.match(/^\d+$/)
                ? (function (t) {
                    return "http" === t || "https" === t;
                  })(n)
                  ? e &&
                    isNaN(parseInt(e, 10)) &&
                    (E.error(`Invalid Sentry Dsn: Invalid port ${e}`), 1)
                  : (E.error(`Invalid Sentry Dsn: Invalid protocol ${n}`), 1)
                : (E.error(`Invalid Sentry Dsn: Invalid projectId ${s}`), 1))
            );
          })(e)
        )
          return e;
      }
      function A(t) {
        const e = t.protocol ? `${t.protocol}:` : "",
          s = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${s}${t.path ? `/${t.path}` : ""}/api/`;
      }
      const Y = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        G = r;
      function K(t = {}) {
        if (!G.document)
          return void (
            Y && E.error("Global document not defined in showReportDialog call")
          );
        const e = M(),
          s = e.getClient(),
          n = s && s.getDsn();
        if (!n)
          return void (
            Y && E.error("DSN not configured for showReportDialog call")
          );
        if ((e && (t.user = { ...e.getUser(), ...t.user }), !t.eventId)) {
          const e = T();
          e && (t.eventId = e);
        }
        const r = G.document.createElement("script");
        (r.async = !0),
          (r.crossOrigin = "anonymous"),
          (r.src = (function (t, e) {
            const s = H(t);
            if (!s) return "";
            const n = `${A(s)}embed/error-page/`;
            let r = `dsn=${(function (t, e = !1) {
              const {
                host: s,
                path: n,
                pass: r,
                port: i,
                projectId: o,
                protocol: c,
                publicKey: a,
              } = t;
              return `${c}://${a}${e && r ? `:${r}` : ""}@${s}${i ? `:${i}` : ""}/${n ? `${n}/` : n}${o}`;
            })(s)}`;
            for (const t in e)
              if ("dsn" !== t && "onClose" !== t)
                if ("user" === t) {
                  const t = e.user;
                  if (!t) continue;
                  t.name && (r += `&name=${encodeURIComponent(t.name)}`),
                    t.email && (r += `&email=${encodeURIComponent(t.email)}`);
                } else
                  r += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`;
            return `${n}?${r}`;
          })(n, t)),
          t.onLoad && (r.onload = t.onLoad);
        const { onClose: i } = t;
        if (i) {
          const t = (e) => {
            if ("__sentry_reportdialog_closed__" === e.data)
              try {
                i();
              } finally {
                G.removeEventListener("message", t);
              }
          };
          G.addEventListener("message", t);
        }
        const o = G.document.head || G.document.body;
        o
          ? o.appendChild(r)
          : Y &&
            E.error(
              "Not injecting report dialog. No injection point found in HTML",
            );
      }
      s(904);
      var F = s(90626);
      const V = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      function W(t, { componentStack: e }, s) {
        if (
          (function (t) {
            const e = t.match(/^([^.]+)/);
            return null !== e && parseInt(e[0]) >= 17;
          })(F.version) &&
          (function (t) {
            switch (a.call(t)) {
              case "[object Error]":
              case "[object Exception]":
              case "[object DOMException]":
                return !0;
              default:
                return p(t, Error);
            }
          })(t) &&
          e
        ) {
          const s = new Error(t.message);
          (s.name = `React ErrorBoundary ${t.name}`),
            (s.stack = e),
            (function (t, e) {
              const s = new WeakSet();
              !(function t(e, n) {
                if (!s.has(e))
                  return e.cause
                    ? (s.add(e), t(e.cause, n))
                    : void (e.cause = n);
              })(t, e);
            })(t, s);
        }
        return (function (t, e) {
          return M().captureException(t, q(e));
        })(t, {
          ...s,
          captureContext: { contexts: { react: { componentStack: e } } },
        });
      }
      const z = { componentStack: null, error: null, eventId: null };
      class J extends F.Component {
        constructor(t) {
          super(t),
            J.prototype.__init.call(this),
            (this.state = z),
            (this._openFallbackReportDialog = !0);
          const e = M().getClient();
          e &&
            t.showDialog &&
            ((this._openFallbackReportDialog = !1),
            (this._cleanupHook = e.on("afterSendEvent", (e) => {
              !e.type &&
                this._lastEventId &&
                e.event_id === this._lastEventId &&
                K({ ...t.dialogOptions, eventId: this._lastEventId });
            })));
        }
        componentDidCatch(t, e) {
          const { componentStack: s } = e,
            n = null == s ? void 0 : s,
            {
              beforeCapture: r,
              onError: i,
              showDialog: c,
              dialogOptions: a,
            } = this.props;
          !(function (...t) {
            const e = j(o());
            if (2 === t.length) {
              const [s, n] = t;
              return s ? e.withSetScope(s, n) : e.withScope(n);
            }
            e.withScope(t[0]);
          })((o) => {
            r && r(o, t, n);
            const u = W(t, e, {
              mechanism: { handled: !!this.props.fallback },
            });
            i && i(t, n, u),
              c &&
                ((this._lastEventId = u),
                this._openFallbackReportDialog && K({ ...a, eventId: u })),
              this.setState({ error: t, componentStack: s, eventId: u });
          });
        }
        componentDidMount() {
          const { onMount: t } = this.props;
          t && t();
        }
        componentWillUnmount() {
          const { error: t, componentStack: e, eventId: s } = this.state,
            { onUnmount: n } = this.props;
          n && n(t, e, s),
            this._cleanupHook &&
              (this._cleanupHook(), (this._cleanupHook = void 0));
        }
        __init() {
          this.resetErrorBoundary = () => {
            const { onReset: t } = this.props,
              { error: e, componentStack: s, eventId: n } = this.state;
            t && t(e, s, n), this.setState(z);
          };
        }
        render() {
          const { fallback: t, children: e } = this.props,
            s = this.state;
          if (s.error) {
            let e;
            return (
              (e =
                "function" == typeof t
                  ? F.createElement(t, {
                      error: s.error,
                      componentStack: s.componentStack,
                      resetError: this.resetErrorBoundary,
                      eventId: s.eventId,
                    })
                  : t),
              F.isValidElement(e)
                ? e
                : (t &&
                    V &&
                    E.warn("fallback did not produce a valid ReactElement"),
                  null)
            );
          }
          return "function" == typeof e ? e() : e;
        }
      }
    },
    54806: (t, e, s) => {
      s.d(e, { E: () => f });
      var n = s(90626),
        r = s(86709),
        i = s(45747),
        o = s(74500),
        c = s(57168);
      function a(t, e) {
        return t.filter((t) => !e.includes(t));
      }
      var u = class extends o.Q {
          #t;
          #e;
          #s;
          #n;
          #r;
          #i;
          #o;
          constructor(t, e, s) {
            super(),
              (this.#t = t),
              (this.#s = []),
              (this.#n = []),
              (this.#e = []),
              this.setQueries(e);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#n.forEach((t) => {
                t.subscribe((e) => {
                  this.#c(t, e);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#n.forEach((t) => {
                t.destroy();
              });
          }
          setQueries(t, e, s) {
            (this.#s = t),
              r.j.batch(() => {
                const t = this.#n,
                  e = this.#a(this.#s);
                e.forEach((t) =>
                  t.observer.setOptions(t.defaultedQueryOptions, s),
                );
                const n = e.map((t) => t.observer),
                  r = n.map((t) => t.getCurrentResult()),
                  i = n.some((e, s) => e !== t[s]);
                (t.length !== n.length || i) &&
                  ((this.#n = n),
                  (this.#e = r),
                  this.hasListeners() &&
                    (a(t, n).forEach((t) => {
                      t.destroy();
                    }),
                    a(n, t).forEach((t) => {
                      t.subscribe((e) => {
                        this.#c(t, e);
                      });
                    }),
                    this.#u()));
              });
          }
          getCurrentResult() {
            return this.#e;
          }
          getQueries() {
            return this.#n.map((t) => t.getCurrentQuery());
          }
          getObservers() {
            return this.#n;
          }
          getOptimisticResult(t, e) {
            const s = this.#a(t),
              n = s.map((t) =>
                t.observer.getOptimisticResult(t.defaultedQueryOptions),
              );
            return [
              n,
              (t) => this.#h(t ?? n, e),
              () =>
                s.map((t, e) => {
                  const r = n[e];
                  return t.defaultedQueryOptions.notifyOnChangeProps
                    ? r
                    : t.observer.trackResult(r, (t) => {
                        s.forEach((e) => {
                          e.observer.trackProp(t);
                        });
                      });
                }),
            ];
          }
          #h(t, e) {
            return e
              ? ((this.#r && this.#e === this.#o && e === this.#i) ||
                  ((this.#i = e),
                  (this.#o = this.#e),
                  (this.#r = (0, c.BH)(this.#r, e(t)))),
                this.#r)
              : t;
          }
          #a(t) {
            const e = this.#n,
              s = new Map(e.map((t) => [t.options.queryHash, t])),
              n = t.map((t) => this.#t.defaultQueryOptions(t)),
              r = n.flatMap((t) => {
                const e = s.get(t.queryHash);
                return null != e
                  ? [{ defaultedQueryOptions: t, observer: e }]
                  : [];
              }),
              o = new Set(r.map((t) => t.defaultedQueryOptions.queryHash)),
              c = n.filter((t) => !o.has(t.queryHash)),
              a = (t) => {
                const e = this.#t.defaultQueryOptions(t);
                return (
                  this.#n.find((t) => t.options.queryHash === e.queryHash) ??
                  new i.$(this.#t, e)
                );
              },
              u = c.map((t) => ({ defaultedQueryOptions: t, observer: a(t) }));
            return r
              .concat(u)
              .sort(
                (t, e) =>
                  n.indexOf(t.defaultedQueryOptions) -
                  n.indexOf(e.defaultedQueryOptions),
              );
          }
          #c(t, e) {
            const s = this.#n.indexOf(t);
            -1 !== s &&
              ((this.#e = (function (t, e, s) {
                const n = t.slice(0);
                return (n[e] = s), n;
              })(this.#e, s, e)),
              this.#u());
          }
          #u() {
            r.j.batch(() => {
              this.listeners.forEach((t) => {
                t(this.#e);
              });
            });
          }
        },
        h = s(75233),
        p = s(22730),
        l = s(43424),
        d = s(19086),
        _ = s(44407);
      function f({ queries: t, ...e }, s) {
        const o = (0, h.jE)(s),
          c = (0, p.w)(),
          a = (0, l.h)(),
          f = n.useMemo(
            () =>
              t.map((t) => {
                const e = o.defaultQueryOptions(t);
                return (
                  (e._optimisticResults = c ? "isRestoring" : "optimistic"), e
                );
              }),
            [t, o, c],
          );
        f.forEach((t) => {
          (0, _.tu)(t), (0, d.LJ)(t, a);
        }),
          (0, d.wZ)(a);
        const [g] = n.useState(() => new u(o, f, e)),
          [m, b, v] = g.getOptimisticResult(f, e.combine);
        n.useSyncExternalStore(
          n.useCallback(
            (t) => (c ? () => {} : g.subscribe(r.j.batchCalls(t))),
            [g, c],
          ),
          () => g.getCurrentResult(),
          () => g.getCurrentResult(),
        ),
          n.useEffect(() => {
            g.setQueries(f, e, { listeners: !1 });
          }, [f, e, g]);
        const S = m.some((t, e) => (0, _.EU)(f[e], t))
          ? m.flatMap((t, e) => {
              const s = f[e];
              if (s) {
                const e = new i.$(o, s);
                if ((0, _.EU)(s, t)) return (0, _.iL)(s, e, a);
                (0, _.nE)(t, c) && (0, _.iL)(s, e, a);
              }
              return [];
            })
          : [];
        if (S.length > 0) throw Promise.all(S);
        const y = m.find((t, e) => {
          const s = f[e];
          return (
            s &&
            (0, d.$1)({
              result: t,
              errorResetBoundary: a,
              throwOnError: s.throwOnError,
              query: o.getQueryCache().get(s.queryHash),
            })
          );
        });
        if (y?.error) throw y.error;
        return b(v());
      }
    },
  },
]);

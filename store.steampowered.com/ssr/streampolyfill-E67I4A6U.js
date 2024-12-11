const CLSTAMP = 9404702;

import { b as G, d as Q } from "./chunk-GK2ITS7J.js";
var H = G((exports, module) => {
  "use strict";
  (function () {
    "use strict";
    let state_ = Symbol("state_"),
      storedError_ = Symbol("storedError_");
    function isInteger(t) {
      if (!isFinite(t)) return !1;
      let e = Math.abs(t);
      return Math.floor(e) === e;
    }
    function isFiniteNonNegativeNumber(t) {
      return !(typeof t != "number" || !isFinite(t)) && t >= 0;
    }
    function isAbortSignal(t) {
      if (typeof t != "object" || t === null) return !1;
      try {
        return (
          Object.getOwnPropertyDescriptor(
            AbortSignal.prototype,
            "aborted",
          ).get.call(t),
          !0
        );
      } catch {
        return !1;
      }
    }
    function invokeOrNoop(t, e, a) {
      let i = t[e];
      if (i !== void 0) return Function.prototype.apply.call(i, t, a);
    }
    function cloneArrayBuffer(t, e, a, i) {
      return t.slice(e, e + a);
    }
    function transferArrayBuffer(t) {
      return t.slice(0);
    }
    function copyDataBlockBytes(t, e, a, i, n) {
      new Uint8Array(t, e, n).set(new Uint8Array(a, i, n));
    }
    let objectCloneMemo = new WeakMap(),
      sharedArrayBufferSupported_;
    function supportsSharedArrayBuffer() {
      if (sharedArrayBufferSupported_ === void 0)
        try {
          new SharedArrayBuffer(16), (sharedArrayBufferSupported_ = !0);
        } catch {
          sharedArrayBufferSupported_ = !1;
        }
      return sharedArrayBufferSupported_;
    }
    function cloneValue(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "boolean":
        case "undefined":
        case "bigint":
          return t;
        case "object": {
          if (objectCloneMemo.has(t)) return objectCloneMemo.get(t);
          if (t === null) return t;
          if (t instanceof Date) return new Date(t.valueOf());
          if (t instanceof RegExp) return new RegExp(t);
          if (supportsSharedArrayBuffer() && t instanceof SharedArrayBuffer)
            return t;
          if (t instanceof ArrayBuffer) {
            let i = cloneArrayBuffer(t, 0, t.byteLength);
            return objectCloneMemo.set(t, i), i;
          }
          if (ArrayBuffer.isView(t)) {
            let i = cloneValue(t.buffer),
              n;
            return (
              (n = t instanceof DataView ? t.byteLength : t.length),
              new t.constructor(i, t.byteOffset, n)
            );
          }
          if (t instanceof Map) {
            let i = new Map();
            return (
              objectCloneMemo.set(t, i),
              t.forEach((n, o) => i.set(o, cloneValue(n))),
              i
            );
          }
          if (t instanceof Set) {
            let i = new Map();
            return (
              objectCloneMemo.set(t, i),
              t.forEach((n, o) => i.set(o, cloneValue(n))),
              i
            );
          }
          let e = {};
          objectCloneMemo.set(t, e);
          let a = Object.getOwnPropertyNames(t);
          for (let i of a) e[i] = cloneValue(t[i]);
          return e;
        }
        case "symbol":
        case "function":
        default:
          throw new DOMException(
            "Uncloneable value in stream",
            "DataCloneError",
          );
      }
    }
    function promiseCall(t, e, a) {
      try {
        let i = Function.prototype.apply.call(t, e, a);
        return Promise.resolve(i);
      } catch (i) {
        return Promise.reject(i);
      }
    }
    function createAlgorithmFromUnderlyingMethod(t, e, a) {
      let i = t[e];
      if (i === void 0) return () => Promise.resolve(void 0);
      if (typeof i != "function")
        throw new TypeError(`Field "${e}" is not a function.`);
      return function (...n) {
        return promiseCall(i, t, n.concat(a));
      };
    }
    function validateAndNormalizeHighWaterMark(t) {
      let e = Number(t);
      if (isNaN(e) || e < 0)
        throw new RangeError(
          "highWaterMark must be a valid, non-negative integer.",
        );
      return e;
    }
    function makeSizeAlgorithmFromSizeFunction(t) {
      if (typeof t != "function" && t !== void 0)
        throw new TypeError("size function must be undefined or a function");
      return function (e) {
        return typeof t == "function" ? t(e) : 1;
      };
    }
    function createControlledPromise() {
      let t = { state: 0 };
      return (
        (t.promise = new Promise(function (e, a) {
          (t.resolve = function (i) {
            (t.state = 1), e(i);
          }),
            (t.reject = function (i) {
              (t.state = 2), a(i);
            });
        })),
        t
      );
    }
    let CHUNK_SIZE = 16384;
    class QueueImpl {
      constructor() {
        (this.chunks_ = [[]]),
          (this.readChunk_ = this.writeChunk_ = this.chunks_[0]),
          (this.length_ = 0);
      }
      push(e) {
        this.writeChunk_.push(e),
          (this.length_ += 1),
          this.writeChunk_.length === CHUNK_SIZE &&
            ((this.writeChunk_ = []), this.chunks_.push(this.writeChunk_));
      }
      front() {
        if (this.length_ !== 0) return this.readChunk_[0];
      }
      shift() {
        if (this.length_ === 0) return;
        let e = this.readChunk_.shift();
        return (
          (this.length_ -= 1),
          this.readChunk_.length === 0 &&
            this.readChunk_ !== this.writeChunk_ &&
            (this.chunks_.shift(), (this.readChunk_ = this.chunks_[0])),
          e
        );
      }
      get length() {
        return this.length_;
      }
    }
    let queue_ = Symbol("queue_"),
      queueTotalSize_ = Symbol("queueTotalSize_");
    function dequeueValue(t) {
      let e = t[queue_].shift(),
        a = t[queueTotalSize_] - e.size;
      return (t[queueTotalSize_] = Math.max(0, a)), e.value;
    }
    function enqueueValueWithSize(t, e, a) {
      if (!isFiniteNonNegativeNumber(a))
        throw new RangeError(
          "Chunk size must be a non-negative, finite numbers",
        );
      t[queue_].push({ value: e, size: a }), (t[queueTotalSize_] += a);
    }
    function peekQueueValue(t) {
      return t[queue_].front().value;
    }
    function resetQueue(t) {
      (t[queue_] = new QueueImpl()), (t[queueTotalSize_] = 0);
    }
    let controlledReadableStream_ = Symbol("controlledReadableStream_"),
      pullAlgorithm_ = Symbol("pullAlgorithm_"),
      cancelAlgorithm_ = Symbol("cancelAlgorithm_"),
      strategySizeAlgorithm_ = Symbol("strategySizeAlgorithm_"),
      strategyHWM_ = Symbol("strategyHWM_"),
      started_ = Symbol("started_"),
      closeRequested_ = Symbol("closeRequested_"),
      pullAgain_ = Symbol("pullAgain_"),
      pulling_ = Symbol("pulling_"),
      cancelSteps_ = Symbol("cancelSteps_"),
      pullSteps_ = Symbol("pullSteps_"),
      autoAllocateChunkSize_ = Symbol("autoAllocateChunkSize_"),
      byobRequest_ = Symbol("byobRequest_"),
      controlledReadableByteStream_ = Symbol("controlledReadableByteStream_"),
      pendingPullIntos_ = Symbol("pendingPullIntos_"),
      closedPromise_ = Symbol("closedPromise_"),
      ownerReadableStream_ = Symbol("ownerReadableStream_"),
      readRequests_ = Symbol("readRequests_"),
      readIntoRequests_ = Symbol("readIntoRequests_"),
      associatedReadableByteStreamController_ = Symbol(
        "associatedReadableByteStreamController_",
      ),
      view_ = Symbol("view_"),
      reader_ = Symbol("reader_"),
      readableStreamController_ = Symbol("readableStreamController_");
    function initializeReadableStream(t) {
      (t[state_] = "readable"),
        (t[reader_] = void 0),
        (t[storedError_] = void 0),
        (t[readableStreamController_] = void 0);
    }
    function isReadableStream(t) {
      return (
        typeof t == "object" && t !== null && readableStreamController_ in t
      );
    }
    function isReadableStreamLocked(t) {
      return t[reader_] !== void 0;
    }
    function readableStreamGetNumReadIntoRequests(t) {
      let e = t[reader_];
      return e === void 0 ? 0 : e[readIntoRequests_].length;
    }
    function readableStreamGetNumReadRequests(t) {
      let e = t[reader_];
      return e === void 0 ? 0 : e[readRequests_].length;
    }
    function readableStreamCreateReadResult(t, e, a) {
      let i = a ? Object.prototype : null,
        n = Object.create(i);
      return (n.value = t), (n.done = e), n;
    }
    function readableStreamAddReadIntoRequest(t, e) {
      let a = t[reader_],
        i = createControlledPromise();
      return (i.forAuthorCode = e), a[readIntoRequests_].push(i), i.promise;
    }
    function readableStreamAddReadRequest(t, e) {
      let a = t[reader_],
        i = createControlledPromise();
      return (i.forAuthorCode = e), a[readRequests_].push(i), i.promise;
    }
    function readableStreamHasBYOBReader(t) {
      return isReadableStreamBYOBReader(t[reader_]);
    }
    function readableStreamHasDefaultReader(t) {
      return isReadableStreamDefaultReader(t[reader_]);
    }
    function readableStreamCancel(t, e) {
      return t[state_] === "closed"
        ? Promise.resolve(void 0)
        : t[state_] === "errored"
          ? Promise.reject(t[storedError_])
          : (readableStreamClose(t),
            t[readableStreamController_][cancelSteps_](e).then((a) => {}));
    }
    function readableStreamClose(t) {
      t[state_] = "closed";
      let e = t[reader_];
      if (
        e !== void 0 &&
        (e[closedPromise_].resolve(),
        e[closedPromise_].promise.catch(() => {}),
        isReadableStreamDefaultReader(e))
      ) {
        for (let a of e[readRequests_])
          a.resolve(
            readableStreamCreateReadResult(void 0, !0, a.forAuthorCode),
          );
        e[readRequests_] = [];
      }
    }
    function readableStreamError(t, e) {
      if (t[state_] !== "readable")
        throw new RangeError("Stream is in an invalid state");
      (t[state_] = "errored"), (t[storedError_] = e);
      let a = t[reader_];
      if (a !== void 0)
        if ((a[closedPromise_].reject(e), isReadableStreamDefaultReader(a))) {
          for (let i of a[readRequests_]) i.reject(e);
          a[readRequests_] = [];
        } else {
          let i = a[readIntoRequests_];
          for (let n of i) n.reject(e);
          a[readIntoRequests_] = [];
        }
    }
    function isReadableStreamDefaultReader(t) {
      return typeof t == "object" && t !== null && readRequests_ in t;
    }
    function isReadableStreamBYOBReader(t) {
      return typeof t == "object" && t !== null && readIntoRequests_ in t;
    }
    function readableStreamReaderGenericInitialize(t, e) {
      (t[ownerReadableStream_] = e), (e[reader_] = t);
      let a = e[state_];
      (t[closedPromise_] = createControlledPromise()),
        a === "readable" ||
          (a === "closed"
            ? t[closedPromise_].resolve(void 0)
            : (t[closedPromise_].reject(e[storedError_]),
              t[closedPromise_].promise.catch(() => {})));
    }
    function readableStreamReaderGenericRelease(t) {
      let e = t[ownerReadableStream_];
      if (e === void 0)
        throw new TypeError("Reader is in an inconsistent state");
      e[state_] === "readable" ||
        (t[closedPromise_] = createControlledPromise()),
        t[closedPromise_].reject(new TypeError()),
        t[closedPromise_].promise.catch(() => {}),
        (e[reader_] = void 0),
        (t[ownerReadableStream_] = void 0);
    }
    function readableStreamBYOBReaderRead(t, e, a = !1) {
      let i = t[ownerReadableStream_];
      return i[state_] === "errored"
        ? Promise.reject(i[storedError_])
        : readableByteStreamControllerPullInto(
            i[readableStreamController_],
            e,
            a,
          );
    }
    function readableStreamDefaultReaderRead(t, e = !1) {
      let a = t[ownerReadableStream_];
      return a[state_] === "closed"
        ? Promise.resolve(readableStreamCreateReadResult(void 0, !0, e))
        : a[state_] === "errored"
          ? Promise.reject(a[storedError_])
          : a[readableStreamController_][pullSteps_](e);
    }
    function readableStreamFulfillReadIntoRequest(t, e, a) {
      let i = t[reader_][readIntoRequests_].shift();
      i.resolve(readableStreamCreateReadResult(e, a, i.forAuthorCode));
    }
    function readableStreamFulfillReadRequest(t, e, a) {
      let i = t[reader_][readRequests_].shift();
      i.resolve(readableStreamCreateReadResult(e, a, i.forAuthorCode));
    }
    function setUpReadableStreamDefaultController(t, e, a, i, n, o, s) {
      (e[controlledReadableStream_] = t),
        resetQueue(e),
        (e[started_] = !1),
        (e[closeRequested_] = !1),
        (e[pullAgain_] = !1),
        (e[pulling_] = !1),
        (e[strategySizeAlgorithm_] = s),
        (e[strategyHWM_] = o),
        (e[pullAlgorithm_] = i),
        (e[cancelAlgorithm_] = n),
        (t[readableStreamController_] = e);
      let l = a();
      Promise.resolve(l).then(
        (h) => {
          (e[started_] = !0),
            readableStreamDefaultControllerCallPullIfNeeded(e);
        },
        (h) => {
          readableStreamDefaultControllerError(e, h);
        },
      );
    }
    function isReadableStreamDefaultController(t) {
      return (
        typeof t == "object" && t !== null && controlledReadableStream_ in t
      );
    }
    function readableStreamDefaultControllerHasBackpressure(t) {
      return !readableStreamDefaultControllerShouldCallPull(t);
    }
    function readableStreamDefaultControllerCanCloseOrEnqueue(t) {
      let e = t[controlledReadableStream_][state_];
      return t[closeRequested_] === !1 && e === "readable";
    }
    function readableStreamDefaultControllerGetDesiredSize(t) {
      let e = t[controlledReadableStream_][state_];
      return e === "errored"
        ? null
        : e === "closed"
          ? 0
          : t[strategyHWM_] - t[queueTotalSize_];
    }
    function readableStreamDefaultControllerClose(t) {
      t[closeRequested_] = !0;
      let e = t[controlledReadableStream_];
      t[queue_].length === 0 &&
        (readableStreamDefaultControllerClearAlgorithms(t),
        readableStreamClose(e));
    }
    function readableStreamDefaultControllerEnqueue(t, e) {
      let a = t[controlledReadableStream_];
      if (isReadableStreamLocked(a) && readableStreamGetNumReadRequests(a) > 0)
        readableStreamFulfillReadRequest(a, e, !1);
      else {
        let i;
        try {
          i = t[strategySizeAlgorithm_](e);
        } catch (n) {
          throw (readableStreamDefaultControllerError(t, n), n);
        }
        try {
          enqueueValueWithSize(t, e, i);
        } catch (n) {
          throw (readableStreamDefaultControllerError(t, n), n);
        }
      }
      readableStreamDefaultControllerCallPullIfNeeded(t);
    }
    function readableStreamDefaultControllerError(t, e) {
      let a = t[controlledReadableStream_];
      a[state_] === "readable" &&
        (resetQueue(t),
        readableStreamDefaultControllerClearAlgorithms(t),
        readableStreamError(a, e));
    }
    function readableStreamDefaultControllerCallPullIfNeeded(t) {
      if (readableStreamDefaultControllerShouldCallPull(t))
        if (t[pulling_]) t[pullAgain_] = !0;
        else {
          if (t[pullAgain_])
            throw new RangeError("Stream controller is in an invalid state.");
          (t[pulling_] = !0),
            t[pullAlgorithm_](t).then(
              (e) => {
                (t[pulling_] = !1),
                  t[pullAgain_] &&
                    ((t[pullAgain_] = !1),
                    readableStreamDefaultControllerCallPullIfNeeded(t));
              },
              (e) => {
                readableStreamDefaultControllerError(t, e);
              },
            );
        }
    }
    function readableStreamDefaultControllerShouldCallPull(t) {
      let e = t[controlledReadableStream_];
      if (
        !readableStreamDefaultControllerCanCloseOrEnqueue(t) ||
        t[started_] === !1
      )
        return !1;
      if (isReadableStreamLocked(e) && readableStreamGetNumReadRequests(e) > 0)
        return !0;
      let a = readableStreamDefaultControllerGetDesiredSize(t);
      if (a === null) throw new RangeError("Stream is in an invalid state.");
      return a > 0;
    }
    function readableStreamDefaultControllerClearAlgorithms(t) {
      (t[pullAlgorithm_] = void 0),
        (t[cancelAlgorithm_] = void 0),
        (t[strategySizeAlgorithm_] = void 0);
    }
    function setUpReadableByteStreamController(t, e, a, i, n, o, s) {
      if (t[readableStreamController_] !== void 0)
        throw new TypeError("Cannot reuse streams");
      if (s !== void 0 && (!isInteger(s) || s <= 0))
        throw new RangeError(
          "autoAllocateChunkSize must be a positive, finite integer",
        );
      (e[controlledReadableByteStream_] = t),
        (e[pullAgain_] = !1),
        (e[pulling_] = !1),
        readableByteStreamControllerClearPendingPullIntos(e),
        resetQueue(e),
        (e[closeRequested_] = !1),
        (e[started_] = !1),
        (e[strategyHWM_] = validateAndNormalizeHighWaterMark(o)),
        (e[pullAlgorithm_] = i),
        (e[cancelAlgorithm_] = n),
        (e[autoAllocateChunkSize_] = s),
        (e[pendingPullIntos_] = []),
        (t[readableStreamController_] = e);
      let l = a();
      Promise.resolve(l).then(
        (h) => {
          (e[started_] = !0), readableByteStreamControllerCallPullIfNeeded(e);
        },
        (h) => {
          readableByteStreamControllerError(e, h);
        },
      );
    }
    function isReadableStreamBYOBRequest(t) {
      return (
        typeof t == "object" &&
        t !== null &&
        associatedReadableByteStreamController_ in t
      );
    }
    function isReadableByteStreamController(t) {
      return (
        typeof t == "object" && t !== null && controlledReadableByteStream_ in t
      );
    }
    function readableByteStreamControllerCallPullIfNeeded(t) {
      readableByteStreamControllerShouldCallPull(t) &&
        (t[pulling_]
          ? (t[pullAgain_] = !0)
          : ((t[pulling_] = !0),
            t[pullAlgorithm_](t).then(
              (e) => {
                (t[pulling_] = !1),
                  t[pullAgain_] &&
                    ((t[pullAgain_] = !1),
                    readableByteStreamControllerCallPullIfNeeded(t));
              },
              (e) => {
                readableByteStreamControllerError(t, e);
              },
            )));
    }
    function readableByteStreamControllerClearAlgorithms(t) {
      (t[pullAlgorithm_] = void 0), (t[cancelAlgorithm_] = void 0);
    }
    function readableByteStreamControllerClearPendingPullIntos(t) {
      readableByteStreamControllerInvalidateBYOBRequest(t),
        (t[pendingPullIntos_] = []);
    }
    function readableByteStreamControllerClose(t) {
      let e = t[controlledReadableByteStream_];
      if (t[queueTotalSize_] > 0) t[closeRequested_] = !0;
      else {
        if (
          t[pendingPullIntos_].length > 0 &&
          t[pendingPullIntos_][0].bytesFilled > 0
        ) {
          let a = new TypeError();
          throw (readableByteStreamControllerError(t, a), a);
        }
        readableByteStreamControllerClearAlgorithms(t), readableStreamClose(e);
      }
    }
    function readableByteStreamControllerCommitPullIntoDescriptor(t, e) {
      let a = !1;
      t[state_] === "closed" && (a = !0);
      let i = readableByteStreamControllerConvertPullIntoDescriptor(e);
      e.readerType === "default"
        ? readableStreamFulfillReadRequest(t, i, a)
        : readableStreamFulfillReadIntoRequest(t, i, a);
    }
    function readableByteStreamControllerConvertPullIntoDescriptor(t) {
      let { bytesFilled: e, elementSize: a } = t;
      return new t.ctor(t.buffer, t.byteOffset, e / a);
    }
    function readableByteStreamControllerEnqueue(t, e) {
      let a = t[controlledReadableByteStream_],
        { buffer: i, byteOffset: n, byteLength: o } = e,
        s = transferArrayBuffer(i);
      readableStreamHasDefaultReader(a)
        ? readableStreamGetNumReadRequests(a) === 0
          ? readableByteStreamControllerEnqueueChunkToQueue(t, s, n, o)
          : readableStreamFulfillReadRequest(a, new Uint8Array(s, n, o), !1)
        : readableStreamHasBYOBReader(a)
          ? (readableByteStreamControllerEnqueueChunkToQueue(t, s, n, o),
            readableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(t))
          : readableByteStreamControllerEnqueueChunkToQueue(t, s, n, o),
        readableByteStreamControllerCallPullIfNeeded(t);
    }
    function readableByteStreamControllerEnqueueChunkToQueue(t, e, a, i) {
      t[queue_].push({ buffer: e, byteOffset: a, byteLength: i }),
        (t[queueTotalSize_] += i);
    }
    function readableByteStreamControllerError(t, e) {
      let a = t[controlledReadableByteStream_];
      a[state_] === "readable" &&
        (readableByteStreamControllerClearPendingPullIntos(t),
        resetQueue(t),
        readableByteStreamControllerClearAlgorithms(t),
        readableStreamError(a, e));
    }
    function readableByteStreamControllerFillHeadPullIntoDescriptor(t, e, a) {
      readableByteStreamControllerInvalidateBYOBRequest(t),
        (a.bytesFilled += e);
    }
    function readableByteStreamControllerFillPullIntoDescriptorFromQueue(t, e) {
      let a = e.elementSize,
        i = e.bytesFilled - (e.bytesFilled % a),
        n = Math.min(t[queueTotalSize_], e.byteLength - e.bytesFilled),
        o = e.bytesFilled + n,
        s = o - (o % a),
        l = n,
        h = !1;
      s > i && ((l = s - e.bytesFilled), (h = !0));
      let f = t[queue_];
      for (; l > 0; ) {
        let m = f.front(),
          w = Math.min(l, m.byteLength),
          D = e.byteOffset + e.bytesFilled;
        copyDataBlockBytes(e.buffer, D, m.buffer, m.byteOffset, w),
          m.byteLength === w
            ? f.shift()
            : ((m.byteOffset += w), (m.byteLength -= w)),
          (t[queueTotalSize_] -= w),
          readableByteStreamControllerFillHeadPullIntoDescriptor(t, w, e),
          (l -= w);
      }
      return h;
    }
    function readableByteStreamControllerGetDesiredSize(t) {
      let e = t[controlledReadableByteStream_][state_];
      return e === "errored"
        ? null
        : e === "closed"
          ? 0
          : t[strategyHWM_] - t[queueTotalSize_];
    }
    function readableByteStreamControllerHandleQueueDrain(t) {
      t[queueTotalSize_] === 0 && t[closeRequested_]
        ? (readableByteStreamControllerClearAlgorithms(t),
          readableStreamClose(t[controlledReadableByteStream_]))
        : readableByteStreamControllerCallPullIfNeeded(t);
    }
    function readableByteStreamControllerInvalidateBYOBRequest(t) {
      let e = t[byobRequest_];
      e !== void 0 &&
        ((e[associatedReadableByteStreamController_] = void 0),
        (e[view_] = void 0),
        (t[byobRequest_] = void 0));
    }
    function readableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(
      t,
    ) {
      let e = t[pendingPullIntos_];
      for (; e.length > 0; ) {
        if (t[queueTotalSize_] === 0) return;
        let a = e[0];
        readableByteStreamControllerFillPullIntoDescriptorFromQueue(t, a) &&
          (readableByteStreamControllerShiftPendingPullInto(t),
          readableByteStreamControllerCommitPullIntoDescriptor(
            t[controlledReadableByteStream_],
            a,
          ));
      }
    }
    function readableByteStreamControllerPullInto(t, e, a) {
      let i = t[controlledReadableByteStream_],
        n = e.BYTES_PER_ELEMENT || 1,
        o = e.constructor,
        s = e.byteOffset,
        l = e.byteLength,
        h = {
          buffer: transferArrayBuffer(e.buffer),
          byteOffset: s,
          byteLength: l,
          bytesFilled: 0,
          elementSize: n,
          ctor: o,
          readerType: "byob",
        };
      if (t[pendingPullIntos_].length > 0)
        return (
          t[pendingPullIntos_].push(h), readableStreamAddReadIntoRequest(i, a)
        );
      if (i[state_] === "closed") {
        let m = new o(h.buffer, h.byteOffset, 0);
        return Promise.resolve(readableStreamCreateReadResult(m, !0, a));
      }
      if (t[queueTotalSize_] > 0) {
        if (readableByteStreamControllerFillPullIntoDescriptorFromQueue(t, h)) {
          let m = readableByteStreamControllerConvertPullIntoDescriptor(h);
          return (
            readableByteStreamControllerHandleQueueDrain(t),
            Promise.resolve(readableStreamCreateReadResult(m, !1, a))
          );
        }
        if (t[closeRequested_]) {
          let m = new TypeError();
          return readableByteStreamControllerError(t, m), Promise.reject(m);
        }
      }
      t[pendingPullIntos_].push(h);
      let f = readableStreamAddReadIntoRequest(i, a);
      return readableByteStreamControllerCallPullIfNeeded(t), f;
    }
    function readableByteStreamControllerRespond(t, e) {
      if (!isFiniteNonNegativeNumber((e = Number(e))))
        throw new RangeError(
          "bytesWritten must be a finite, non-negative number",
        );
      readableByteStreamControllerRespondInternal(t, e);
    }
    function readableByteStreamControllerRespondInClosedState(t, e) {
      e.buffer = transferArrayBuffer(e.buffer);
      let a = t[controlledReadableByteStream_];
      if (readableStreamHasBYOBReader(a))
        for (; readableStreamGetNumReadIntoRequests(a) > 0; )
          readableByteStreamControllerCommitPullIntoDescriptor(
            a,
            readableByteStreamControllerShiftPendingPullInto(t),
          );
    }
    function readableByteStreamControllerRespondInReadableState(t, e, a) {
      if (a.bytesFilled + e > a.byteLength) throw new RangeError();
      if (
        (readableByteStreamControllerFillHeadPullIntoDescriptor(t, e, a),
        a.bytesFilled < a.elementSize)
      )
        return;
      readableByteStreamControllerShiftPendingPullInto(t);
      let i = a.bytesFilled % a.elementSize;
      if (i > 0) {
        let n = a.byteOffset + a.bytesFilled,
          o = cloneArrayBuffer(a.buffer, n - i, i);
        readableByteStreamControllerEnqueueChunkToQueue(t, o, 0, o.byteLength);
      }
      (a.buffer = transferArrayBuffer(a.buffer)),
        (a.bytesFilled = a.bytesFilled - i),
        readableByteStreamControllerCommitPullIntoDescriptor(
          t[controlledReadableByteStream_],
          a,
        ),
        readableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(t);
    }
    function readableByteStreamControllerRespondInternal(t, e) {
      let a = t[pendingPullIntos_][0];
      if (t[controlledReadableByteStream_][state_] === "closed") {
        if (e !== 0) throw new TypeError();
        readableByteStreamControllerRespondInClosedState(t, a);
      } else readableByteStreamControllerRespondInReadableState(t, e, a);
      readableByteStreamControllerCallPullIfNeeded(t);
    }
    function readableByteStreamControllerRespondWithNewView(t, e) {
      let a = t[pendingPullIntos_][0];
      if (a.byteOffset + a.bytesFilled !== e.byteOffset) throw new RangeError();
      if (a.byteLength !== e.byteLength) throw new RangeError();
      (a.buffer = e.buffer),
        readableByteStreamControllerRespondInternal(t, e.byteLength);
    }
    function readableByteStreamControllerShiftPendingPullInto(t) {
      let e = t[pendingPullIntos_].shift();
      return readableByteStreamControllerInvalidateBYOBRequest(t), e;
    }
    function readableByteStreamControllerShouldCallPull(t) {
      let e = t[controlledReadableByteStream_];
      return e[state_] !== "readable" || t[closeRequested_] || !t[started_]
        ? !1
        : (readableStreamHasDefaultReader(e) &&
              readableStreamGetNumReadRequests(e) > 0) ||
            (readableStreamHasBYOBReader(e) &&
              readableStreamGetNumReadIntoRequests(e) > 0)
          ? !0
          : readableByteStreamControllerGetDesiredSize(t) > 0;
    }
    function setUpReadableStreamBYOBRequest(t, e, a) {
      if (!isReadableByteStreamController(e)) throw new TypeError();
      if (!ArrayBuffer.isView(a)) throw new TypeError();
      (t[associatedReadableByteStreamController_] = e), (t[view_] = a);
    }
    let backpressure_ = Symbol("backpressure_"),
      closeRequest_ = Symbol("closeRequest_"),
      inFlightWriteRequest_ = Symbol("inFlightWriteRequest_"),
      inFlightCloseRequest_ = Symbol("inFlightCloseRequest_"),
      pendingAbortRequest_ = Symbol("pendingAbortRequest_"),
      writableStreamController_ = Symbol("writableStreamController_"),
      writer_ = Symbol("writer_"),
      writeRequests_ = Symbol("writeRequests_"),
      abortAlgorithm_ = Symbol("abortAlgorithm_"),
      closeAlgorithm_ = Symbol("closeAlgorithm_"),
      controlledWritableStream_ = Symbol("controlledWritableStream_"),
      started_$1 = Symbol("started_"),
      strategyHWM_$1 = Symbol("strategyHWM_"),
      strategySizeAlgorithm_$1 = Symbol("strategySizeAlgorithm_"),
      writeAlgorithm_ = Symbol("writeAlgorithm_"),
      ownerWritableStream_ = Symbol("ownerWritableStream_"),
      closedPromise_$1 = Symbol("closedPromise_"),
      readyPromise_ = Symbol("readyPromise_"),
      errorSteps_ = Symbol("errorSteps_"),
      abortSteps_ = Symbol("abortSteps_");
    function initializeWritableStream(t) {
      (t[state_] = "writable"),
        (t[storedError_] = void 0),
        (t[writer_] = void 0),
        (t[writableStreamController_] = void 0),
        (t[inFlightWriteRequest_] = void 0),
        (t[closeRequest_] = void 0),
        (t[inFlightCloseRequest_] = void 0),
        (t[pendingAbortRequest_] = void 0),
        (t[writeRequests_] = []),
        (t[backpressure_] = !1);
    }
    function isWritableStream(t) {
      return (
        typeof t == "object" && t !== null && writableStreamController_ in t
      );
    }
    function isWritableStreamLocked(t) {
      return t[writer_] !== void 0;
    }
    function writableStreamAbort(t, e) {
      let a = t[state_];
      if (a === "closed" || a === "errored") return Promise.resolve(void 0);
      let i = t[pendingAbortRequest_];
      if (i !== void 0) return i.promise;
      let n = !1;
      a === "erroring" && ((n = !0), (e = void 0)),
        (i = { reason: e, wasAlreadyErroring: n });
      let o = new Promise((s, l) => {
        (i.resolve = s), (i.reject = l);
      });
      return (
        (i.promise = o),
        (t[pendingAbortRequest_] = i),
        n || writableStreamStartErroring(t, e),
        o
      );
    }
    function writableStreamAddWriteRequest(t) {
      let e = createControlledPromise();
      return t[writeRequests_].push(e), e.promise;
    }
    function writableStreamDealWithRejection(t, e) {
      t[state_] !== "writable"
        ? writableStreamFinishErroring(t)
        : writableStreamStartErroring(t, e);
    }
    function writableStreamStartErroring(t, e) {
      let a = t[writableStreamController_];
      (t[state_] = "erroring"), (t[storedError_] = e);
      let i = t[writer_];
      i !== void 0 &&
        writableStreamDefaultWriterEnsureReadyPromiseRejected(i, e),
        !writableStreamHasOperationMarkedInFlight(t) &&
          a[started_$1] &&
          writableStreamFinishErroring(t);
    }
    function writableStreamFinishErroring(t) {
      t[state_] = "errored";
      let e = t[writableStreamController_];
      e[errorSteps_]();
      let a = t[storedError_];
      for (let n of t[writeRequests_]) n.reject(a);
      t[writeRequests_] = [];
      let i = t[pendingAbortRequest_];
      if (i === void 0)
        return void writableStreamRejectCloseAndClosedPromiseIfNeeded(t);
      if (((t[pendingAbortRequest_] = void 0), i.wasAlreadyErroring))
        return (
          i.reject(a), void writableStreamRejectCloseAndClosedPromiseIfNeeded(t)
        );
      e[abortSteps_](i.reason).then(
        (n) => {
          i.resolve(), writableStreamRejectCloseAndClosedPromiseIfNeeded(t);
        },
        (n) => {
          i.reject(n), writableStreamRejectCloseAndClosedPromiseIfNeeded(t);
        },
      );
    }
    function writableStreamFinishInFlightWrite(t) {
      t[inFlightWriteRequest_].resolve(void 0),
        (t[inFlightWriteRequest_] = void 0);
    }
    function writableStreamFinishInFlightWriteWithError(t, e) {
      t[inFlightWriteRequest_].reject(e),
        (t[inFlightWriteRequest_] = void 0),
        writableStreamDealWithRejection(t, e);
    }
    function writableStreamFinishInFlightClose(t) {
      t[inFlightCloseRequest_].resolve(void 0),
        (t[inFlightCloseRequest_] = void 0),
        t[state_] === "erroring" &&
          ((t[storedError_] = void 0),
          t[pendingAbortRequest_] !== void 0 &&
            (t[pendingAbortRequest_].resolve(),
            (t[pendingAbortRequest_] = void 0))),
        (t[state_] = "closed");
      let e = t[writer_];
      e !== void 0 && e[closedPromise_$1].resolve(void 0);
    }
    function writableStreamFinishInFlightCloseWithError(t, e) {
      t[inFlightCloseRequest_].reject(e),
        (t[inFlightCloseRequest_] = void 0),
        t[pendingAbortRequest_] !== void 0 &&
          (t[pendingAbortRequest_].reject(e),
          (t[pendingAbortRequest_] = void 0)),
        writableStreamDealWithRejection(t, e);
    }
    function writableStreamCloseQueuedOrInFlight(t) {
      return t[closeRequest_] !== void 0 || t[inFlightCloseRequest_] !== void 0;
    }
    function writableStreamHasOperationMarkedInFlight(t) {
      return (
        t[inFlightWriteRequest_] !== void 0 ||
        t[inFlightCloseRequest_] !== void 0
      );
    }
    function writableStreamMarkCloseRequestInFlight(t) {
      (t[inFlightCloseRequest_] = t[closeRequest_]),
        (t[closeRequest_] = void 0);
    }
    function writableStreamMarkFirstWriteRequestInFlight(t) {
      let e = t[writeRequests_].shift();
      t[inFlightWriteRequest_] = e;
    }
    function writableStreamRejectCloseAndClosedPromiseIfNeeded(t) {
      let e = t[closeRequest_];
      e !== void 0 && (e.reject(t[storedError_]), (t[closeRequest_] = void 0));
      let a = t[writer_];
      a !== void 0 &&
        (a[closedPromise_$1].reject(t[storedError_]),
        a[closedPromise_$1].promise.catch(() => {}));
    }
    function writableStreamUpdateBackpressure(t, e) {
      let a = t[writer_];
      a !== void 0 &&
        e !== t[backpressure_] &&
        (e
          ? (a[readyPromise_] = createControlledPromise())
          : a[readyPromise_].resolve(void 0)),
        (t[backpressure_] = e);
    }
    function isWritableStreamDefaultWriter(t) {
      return typeof t == "object" && t !== null && ownerWritableStream_ in t;
    }
    function writableStreamDefaultWriterAbort(t, e) {
      return writableStreamAbort(t[ownerWritableStream_], e);
    }
    function writableStreamDefaultWriterClose(t) {
      let e = t[ownerWritableStream_],
        a = e[state_];
      if (a === "closed" || a === "errored")
        return Promise.reject(
          new TypeError("Writer stream is already closed or errored"),
        );
      let i = createControlledPromise();
      return (
        (e[closeRequest_] = i),
        e[backpressure_] &&
          a === "writable" &&
          t[readyPromise_].resolve(void 0),
        writableStreamDefaultControllerClose(e[writableStreamController_]),
        i.promise
      );
    }
    function writableStreamDefaultWriterCloseWithErrorPropagation(t) {
      let e = t[ownerWritableStream_],
        a = e[state_];
      return writableStreamCloseQueuedOrInFlight(e) || a === "closed"
        ? Promise.resolve(void 0)
        : a === "errored"
          ? Promise.reject(e[storedError_])
          : writableStreamDefaultWriterClose(t);
    }
    function writableStreamDefaultWriterEnsureClosedPromiseRejected(t, e) {
      let a = t[closedPromise_$1];
      a.state === 0
        ? a.reject(e)
        : ((t[closedPromise_$1] = createControlledPromise()),
          t[closedPromise_$1].reject(e)),
        t[closedPromise_$1].promise.catch(() => {});
    }
    function writableStreamDefaultWriterEnsureReadyPromiseRejected(t, e) {
      let a = t[readyPromise_];
      a.state === 0
        ? a.reject(e)
        : ((t[readyPromise_] = createControlledPromise()),
          t[readyPromise_].reject(e)),
        t[readyPromise_].promise.catch(() => {});
    }
    function writableStreamDefaultWriterGetDesiredSize(t) {
      let e = t[ownerWritableStream_],
        a = e[state_];
      return a === "errored" || a === "erroring"
        ? null
        : a === "closed"
          ? 0
          : writableStreamDefaultControllerGetDesiredSize(
              e[writableStreamController_],
            );
    }
    function writableStreamDefaultWriterRelease(t) {
      let e = t[ownerWritableStream_],
        a = new TypeError();
      writableStreamDefaultWriterEnsureReadyPromiseRejected(t, a),
        writableStreamDefaultWriterEnsureClosedPromiseRejected(t, a),
        (e[writer_] = void 0),
        (t[ownerWritableStream_] = void 0);
    }
    function writableStreamDefaultWriterWrite(t, e) {
      let a = t[ownerWritableStream_],
        i = a[writableStreamController_],
        n = writableStreamDefaultControllerGetChunkSize(i, e);
      if (t[ownerWritableStream_] !== a) return Promise.reject(new TypeError());
      let o = a[state_];
      if (o === "errored") return Promise.reject(a[storedError_]);
      if (writableStreamCloseQueuedOrInFlight(a) || o === "closed")
        return Promise.reject(
          new TypeError("Cannot write to a closing or closed stream"),
        );
      if (o === "erroring") return Promise.reject(a[storedError_]);
      let s = writableStreamAddWriteRequest(a);
      return writableStreamDefaultControllerWrite(i, e, n), s;
    }
    function setUpWritableStreamDefaultController(t, e, a, i, n, o, s, l) {
      if (!isWritableStream(t)) throw new TypeError();
      if (t[writableStreamController_] !== void 0) throw new TypeError();
      (e[controlledWritableStream_] = t),
        (t[writableStreamController_] = e),
        resetQueue(e),
        (e[started_$1] = !1),
        (e[strategySizeAlgorithm_$1] = l),
        (e[strategyHWM_$1] = s),
        (e[writeAlgorithm_] = i),
        (e[closeAlgorithm_] = n),
        (e[abortAlgorithm_] = o);
      let h = writableStreamDefaultControllerGetBackpressure(e);
      writableStreamUpdateBackpressure(t, h);
      let f = a();
      Promise.resolve(f).then(
        (m) => {
          (e[started_$1] = !0),
            writableStreamDefaultControllerAdvanceQueueIfNeeded(e);
        },
        (m) => {
          (e[started_$1] = !0), writableStreamDealWithRejection(t, m);
        },
      );
    }
    function isWritableStreamDefaultController(t) {
      return (
        typeof t == "object" && t !== null && controlledWritableStream_ in t
      );
    }
    function writableStreamDefaultControllerClearAlgorithms(t) {
      (t[writeAlgorithm_] = void 0),
        (t[closeAlgorithm_] = void 0),
        (t[abortAlgorithm_] = void 0),
        (t[strategySizeAlgorithm_$1] = void 0);
    }
    function writableStreamDefaultControllerClose(t) {
      enqueueValueWithSize(t, "close", 0),
        writableStreamDefaultControllerAdvanceQueueIfNeeded(t);
    }
    function writableStreamDefaultControllerGetChunkSize(t, e) {
      let a;
      try {
        a = t[strategySizeAlgorithm_$1](e);
      } catch (i) {
        writableStreamDefaultControllerErrorIfNeeded(t, i), (a = 1);
      }
      return a;
    }
    function writableStreamDefaultControllerGetDesiredSize(t) {
      return t[strategyHWM_$1] - t[queueTotalSize_];
    }
    function writableStreamDefaultControllerWrite(t, e, a) {
      try {
        enqueueValueWithSize(t, { chunk: e }, a);
      } catch (n) {
        return void writableStreamDefaultControllerErrorIfNeeded(t, n);
      }
      let i = t[controlledWritableStream_];
      !writableStreamCloseQueuedOrInFlight(i) &&
        i[state_] === "writable" &&
        writableStreamUpdateBackpressure(
          i,
          writableStreamDefaultControllerGetBackpressure(t),
        ),
        writableStreamDefaultControllerAdvanceQueueIfNeeded(t);
    }
    function writableStreamDefaultControllerAdvanceQueueIfNeeded(t) {
      if (!t[started_$1]) return;
      let e = t[controlledWritableStream_];
      if (e[inFlightWriteRequest_] !== void 0) return;
      let a = e[state_];
      if (a === "closed" || a === "errored") return;
      if (a === "erroring") return void writableStreamFinishErroring(e);
      if (t[queue_].length === 0) return;
      let i = peekQueueValue(t);
      i === "close"
        ? writableStreamDefaultControllerProcessClose(t)
        : writableStreamDefaultControllerProcessWrite(t, i.chunk);
    }
    function writableStreamDefaultControllerErrorIfNeeded(t, e) {
      t[controlledWritableStream_][state_] === "writable" &&
        writableStreamDefaultControllerError(t, e);
    }
    function writableStreamDefaultControllerProcessClose(t) {
      let e = t[controlledWritableStream_];
      writableStreamMarkCloseRequestInFlight(e), dequeueValue(t);
      let a = t[closeAlgorithm_]();
      writableStreamDefaultControllerClearAlgorithms(t),
        a.then(
          (i) => {
            writableStreamFinishInFlightClose(e);
          },
          (i) => {
            writableStreamFinishInFlightCloseWithError(e, i);
          },
        );
    }
    function writableStreamDefaultControllerProcessWrite(t, e) {
      let a = t[controlledWritableStream_];
      writableStreamMarkFirstWriteRequestInFlight(a),
        t[writeAlgorithm_](e).then(
          (i) => {
            writableStreamFinishInFlightWrite(a);
            let n = a[state_];
            if (
              (dequeueValue(t),
              !writableStreamCloseQueuedOrInFlight(a) && n === "writable")
            ) {
              let o = writableStreamDefaultControllerGetBackpressure(t);
              writableStreamUpdateBackpressure(a, o);
            }
            writableStreamDefaultControllerAdvanceQueueIfNeeded(t);
          },
          (i) => {
            a[state_] === "writable" &&
              writableStreamDefaultControllerClearAlgorithms(t),
              writableStreamFinishInFlightWriteWithError(a, i);
          },
        );
    }
    function writableStreamDefaultControllerGetBackpressure(t) {
      return writableStreamDefaultControllerGetDesiredSize(t) <= 0;
    }
    function writableStreamDefaultControllerError(t, e) {
      let a = t[controlledWritableStream_];
      writableStreamDefaultControllerClearAlgorithms(t),
        writableStreamStartErroring(a, e);
    }
    class ReadableStreamDefaultReader {
      constructor(e) {
        if (!isReadableStream(e)) throw new TypeError();
        if (isReadableStreamLocked(e))
          throw new TypeError("The stream is locked.");
        readableStreamReaderGenericInitialize(this, e),
          (this[readRequests_] = []);
      }
      get closed() {
        return isReadableStreamDefaultReader(this)
          ? this[closedPromise_].promise
          : Promise.reject(new TypeError());
      }
      cancel(e) {
        if (!isReadableStreamDefaultReader(this))
          return Promise.reject(new TypeError());
        let a = this[ownerReadableStream_];
        return a === void 0
          ? Promise.reject(
              new TypeError("Reader is not associated with a stream"),
            )
          : readableStreamCancel(a, e);
      }
      read() {
        return isReadableStreamDefaultReader(this)
          ? this[ownerReadableStream_] === void 0
            ? Promise.reject(
                new TypeError("Reader is not associated with a stream"),
              )
            : readableStreamDefaultReaderRead(this, !0)
          : Promise.reject(new TypeError());
      }
      releaseLock() {
        if (!isReadableStreamDefaultReader(this)) throw new TypeError();
        if (this[ownerReadableStream_] !== void 0) {
          if (this[readRequests_].length !== 0)
            throw new TypeError(
              "Cannot release a stream with pending read requests",
            );
          readableStreamReaderGenericRelease(this);
        }
      }
    }
    class WritableStreamDefaultWriter {
      constructor(e) {
        if (!isWritableStream(e)) throw new TypeError();
        if (isWritableStreamLocked(e))
          throw new TypeError("Stream is already locked");
        (this[ownerWritableStream_] = e), (e[writer_] = this);
        let a = createControlledPromise(),
          i = createControlledPromise();
        (this[readyPromise_] = a), (this[closedPromise_$1] = i);
        let n = e[state_];
        if (n === "writable")
          (!writableStreamCloseQueuedOrInFlight(e) && e[backpressure_]) ||
            a.resolve(void 0);
        else if (n === "erroring")
          a.reject(e[storedError_]), a.promise.catch(() => {});
        else if (n === "closed") a.resolve(void 0), i.resolve(void 0);
        else {
          let o = e[storedError_];
          a.reject(o),
            a.promise.catch(() => {}),
            i.reject(o),
            i.promise.catch(() => {});
        }
      }
      abort(e) {
        return isWritableStreamDefaultWriter(this)
          ? this[ownerWritableStream_] === void 0
            ? Promise.reject(
                new TypeError("Writer is not connected to a stream"),
              )
            : writableStreamDefaultWriterAbort(this, e)
          : Promise.reject(new TypeError());
      }
      close() {
        if (!isWritableStreamDefaultWriter(this))
          return Promise.reject(new TypeError());
        let e = this[ownerWritableStream_];
        return e === void 0
          ? Promise.reject(new TypeError("Writer is not connected to a stream"))
          : writableStreamCloseQueuedOrInFlight(e)
            ? Promise.reject(new TypeError())
            : writableStreamDefaultWriterClose(this);
      }
      releaseLock() {
        this[ownerWritableStream_] !== void 0 &&
          writableStreamDefaultWriterRelease(this);
      }
      write(e) {
        return isWritableStreamDefaultWriter(this)
          ? this[ownerWritableStream_] === void 0
            ? Promise.reject(
                new TypeError("Writer is not connected to a stream"),
              )
            : writableStreamDefaultWriterWrite(this, e)
          : Promise.reject(new TypeError());
      }
      get closed() {
        return isWritableStreamDefaultWriter(this)
          ? this[closedPromise_$1].promise
          : Promise.reject(new TypeError());
      }
      get desiredSize() {
        if (!isWritableStreamDefaultWriter(this)) throw new TypeError();
        if (this[ownerWritableStream_] === void 0)
          throw new TypeError("Writer is not connected to stream");
        return writableStreamDefaultWriterGetDesiredSize(this);
      }
      get ready() {
        return isWritableStreamDefaultWriter(this)
          ? this[readyPromise_].promise
          : Promise.reject(new TypeError());
      }
    }
    function pipeTo(t, e, a) {
      let i = !!a.preventClose,
        n = !!a.preventAbort,
        o = !!a.preventCancel,
        s = a.signal,
        l = !1,
        h = Promise.resolve(),
        f = createControlledPromise(),
        m = new ReadableStreamDefaultReader(t),
        w = new WritableStreamDefaultWriter(e),
        D;
      function k(b, P, E) {
        b[state_] === "errored" ? E(b[storedError_]) : P.catch(E);
      }
      if (
        (s !== void 0 &&
          ((D = () => {
            let b = new DOMException("Aborted", "AbortError"),
              P = [];
            n === !1 &&
              P.push(() =>
                e[state_] === "writable"
                  ? writableStreamAbort(e, b)
                  : Promise.resolve(),
              ),
              o === !1 &&
                P.push(() =>
                  t[state_] === "readable"
                    ? readableStreamCancel(t, b)
                    : Promise.resolve(),
                ),
              d(() => Promise.all(P.map((E) => E())).then((E) => {}), {
                actualError: b,
              });
          }),
          s.aborted === !0 ? D() : s.addEventListener("abort", D)),
        k(t, m[closedPromise_].promise, (b) => {
          d(n ? void 0 : () => writableStreamAbort(e, b), { actualError: b });
        }),
        k(e, w[closedPromise_$1].promise, (b) => {
          d(o ? void 0 : () => readableStreamCancel(t, b), { actualError: b });
        }),
        (function (P, E, C) {
          P[state_] === "closed" ? C() : E.then(C);
        })(t, m[closedPromise_].promise, () => {
          i
            ? d()
            : d(() => writableStreamDefaultWriterCloseWithErrorPropagation(w));
        }),
        writableStreamCloseQueuedOrInFlight(e) || e[state_] === "closed")
      ) {
        let b = new TypeError();
        d(o ? void 0 : () => readableStreamCancel(t, b), { actualError: b });
      }
      function B() {
        let b = h;
        return h.then(() => (b === h ? void 0 : B()));
      }
      function T() {
        return e[state_] !== "writable" ||
          writableStreamCloseQueuedOrInFlight(e)
          ? void 0
          : B();
      }
      function d(b, P) {
        if (l) return;
        function E() {
          b().then(
            (y) => _(P),
            (y) => _({ actualError: y }),
          );
        }
        (l = !0), b === void 0 && (b = () => Promise.resolve());
        let C = T();
        C ? C.then(E) : E();
      }
      function _(b) {
        writableStreamDefaultWriterRelease(w),
          readableStreamReaderGenericRelease(m),
          s && D && s.removeEventListener("abort", D),
          b ? f.reject(b.actualError) : f.resolve(void 0);
      }
      return (
        (function b() {
          l ||
            w[readyPromise_].promise.then(() => {
              readableStreamDefaultReaderRead(m).then(
                ({ value: P, done: E }) => {
                  E ||
                    ((h = writableStreamDefaultWriterWrite(w, P).catch(
                      () => {},
                    )),
                    b());
                },
                (P) => {
                  h = Promise.resolve();
                },
              );
            });
        })(),
        f.promise
      );
    }
    class ReadableStreamDefaultController {
      constructor() {
        throw new TypeError();
      }
      get desiredSize() {
        return readableStreamDefaultControllerGetDesiredSize(this);
      }
      close() {
        if (!isReadableStreamDefaultController(this)) throw new TypeError();
        if (!readableStreamDefaultControllerCanCloseOrEnqueue(this))
          throw new TypeError(
            "Cannot close, the stream is already closing or not readable",
          );
        readableStreamDefaultControllerClose(this);
      }
      enqueue(e) {
        if (!isReadableStreamDefaultController(this)) throw new TypeError();
        if (!readableStreamDefaultControllerCanCloseOrEnqueue(this))
          throw new TypeError(
            "Cannot enqueue, the stream is closing or not readable",
          );
        readableStreamDefaultControllerEnqueue(this, e);
      }
      error(e) {
        if (!isReadableStreamDefaultController(this)) throw new TypeError();
        readableStreamDefaultControllerError(this, e);
      }
      [cancelSteps_](e) {
        resetQueue(this);
        let a = this[cancelAlgorithm_](e);
        return readableStreamDefaultControllerClearAlgorithms(this), a;
      }
      [pullSteps_](e) {
        let a = this[controlledReadableStream_];
        if (this[queue_].length > 0) {
          let n = dequeueValue(this);
          return (
            this[closeRequested_] && this[queue_].length === 0
              ? (readableStreamDefaultControllerClearAlgorithms(this),
                readableStreamClose(a))
              : readableStreamDefaultControllerCallPullIfNeeded(this),
            Promise.resolve(readableStreamCreateReadResult(n, !1, e))
          );
        }
        let i = readableStreamAddReadRequest(a, e);
        return readableStreamDefaultControllerCallPullIfNeeded(this), i;
      }
    }
    function setUpReadableStreamDefaultControllerFromUnderlyingSource(
      t,
      e,
      a,
      i,
    ) {
      let n = Object.create(ReadableStreamDefaultController.prototype),
        o = createAlgorithmFromUnderlyingMethod(e, "pull", [n]),
        s = createAlgorithmFromUnderlyingMethod(e, "cancel", []);
      setUpReadableStreamDefaultController(
        t,
        n,
        () => invokeOrNoop(e, "start", [n]),
        o,
        s,
        a,
        i,
      );
    }
    class ReadableStreamBYOBRequest {
      constructor() {
        throw new TypeError();
      }
      get view() {
        if (!isReadableStreamBYOBRequest(this)) throw new TypeError();
        return this[view_];
      }
      respond(e) {
        if (!isReadableStreamBYOBRequest(this)) throw new TypeError();
        if (this[associatedReadableByteStreamController_] === void 0)
          throw new TypeError();
        return readableByteStreamControllerRespond(
          this[associatedReadableByteStreamController_],
          e,
        );
      }
      respondWithNewView(e) {
        if (!isReadableStreamBYOBRequest(this)) throw new TypeError();
        if (this[associatedReadableByteStreamController_] === void 0)
          throw new TypeError();
        if (!ArrayBuffer.isView(e))
          throw new TypeError("view parameter must be a TypedArray");
        return readableByteStreamControllerRespondWithNewView(
          this[associatedReadableByteStreamController_],
          e,
        );
      }
    }
    class ReadableByteStreamController {
      constructor() {
        throw new TypeError();
      }
      get byobRequest() {
        if (!isReadableByteStreamController(this)) throw new TypeError();
        if (
          this[byobRequest_] === void 0 &&
          this[pendingPullIntos_].length > 0
        ) {
          let e = this[pendingPullIntos_][0],
            a = new Uint8Array(
              e.buffer,
              e.byteOffset + e.bytesFilled,
              e.byteLength - e.bytesFilled,
            ),
            i = Object.create(ReadableStreamBYOBRequest.prototype);
          setUpReadableStreamBYOBRequest(i, this, a), (this[byobRequest_] = i);
        }
        return this[byobRequest_];
      }
      get desiredSize() {
        if (!isReadableByteStreamController(this)) throw new TypeError();
        return readableByteStreamControllerGetDesiredSize(this);
      }
      close() {
        if (!isReadableByteStreamController(this)) throw new TypeError();
        if (this[closeRequested_])
          throw new TypeError("Stream is already closing");
        if (this[controlledReadableByteStream_][state_] !== "readable")
          throw new TypeError("Stream is closed or errored");
        readableByteStreamControllerClose(this);
      }
      enqueue(e) {
        if (!isReadableByteStreamController(this)) throw new TypeError();
        if (this[closeRequested_])
          throw new TypeError("Stream is already closing");
        if (this[controlledReadableByteStream_][state_] !== "readable")
          throw new TypeError("Stream is closed or errored");
        if (!ArrayBuffer.isView(e))
          throw new TypeError("chunk must be a valid ArrayBufferView");
        return readableByteStreamControllerEnqueue(this, e);
      }
      error(e) {
        if (!isReadableByteStreamController(this)) throw new TypeError();
        readableByteStreamControllerError(this, e);
      }
      [cancelSteps_](e) {
        this[pendingPullIntos_].length > 0 &&
          (this[pendingPullIntos_][0].bytesFilled = 0),
          resetQueue(this);
        let a = this[cancelAlgorithm_](e);
        return readableByteStreamControllerClearAlgorithms(this), a;
      }
      [pullSteps_](e) {
        let a = this[controlledReadableByteStream_];
        if (this[queueTotalSize_] > 0) {
          let o = this[queue_].shift();
          (this[queueTotalSize_] -= o.byteLength),
            readableByteStreamControllerHandleQueueDrain(this);
          let s = new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
          return Promise.resolve(readableStreamCreateReadResult(s, !1, e));
        }
        let i = this[autoAllocateChunkSize_];
        if (i !== void 0) {
          let o;
          try {
            o = new ArrayBuffer(i);
          } catch (l) {
            return Promise.reject(l);
          }
          let s = {
            buffer: o,
            byteOffset: 0,
            byteLength: i,
            bytesFilled: 0,
            elementSize: 1,
            ctor: Uint8Array,
            readerType: "default",
          };
          this[pendingPullIntos_].push(s);
        }
        let n = readableStreamAddReadRequest(a, e);
        return readableByteStreamControllerCallPullIfNeeded(this), n;
      }
    }
    function setUpReadableByteStreamControllerFromUnderlyingSource(t, e, a) {
      let i = Object.create(ReadableByteStreamController.prototype),
        n = createAlgorithmFromUnderlyingMethod(e, "pull", [i]),
        o = createAlgorithmFromUnderlyingMethod(e, "cancel", []),
        s = e.autoAllocateChunkSize;
      if (s !== void 0 && ((s = Number(s)), !isInteger(s) || s <= 0))
        throw new RangeError(
          "autoAllocateChunkSize must be a positive, finite integer",
        );
      setUpReadableByteStreamController(
        t,
        i,
        () => invokeOrNoop(e, "start", [i]),
        n,
        o,
        a,
        s,
      );
    }
    class SDReadableStreamBYOBReader {
      constructor(e) {
        if (!isReadableStream(e)) throw new TypeError();
        if (!isReadableByteStreamController(e[readableStreamController_]))
          throw new TypeError();
        if (isReadableStreamLocked(e))
          throw new TypeError("The stream is locked.");
        readableStreamReaderGenericInitialize(this, e),
          (this[readIntoRequests_] = []);
      }
      get closed() {
        return isReadableStreamBYOBReader(this)
          ? this[closedPromise_].promise
          : Promise.reject(new TypeError());
      }
      cancel(e) {
        if (!isReadableStreamBYOBReader(this))
          return Promise.reject(new TypeError());
        let a = this[ownerReadableStream_];
        return a === void 0
          ? Promise.reject(
              new TypeError("Reader is not associated with a stream"),
            )
          : readableStreamCancel(a, e);
      }
      read(e) {
        return isReadableStreamBYOBReader(this)
          ? this[ownerReadableStream_] === void 0
            ? Promise.reject(
                new TypeError("Reader is not associated with a stream"),
              )
            : ArrayBuffer.isView(e)
              ? e.byteLength === 0
                ? Promise.reject(
                    new TypeError("supplied buffer view must be > 0 bytes"),
                  )
                : readableStreamBYOBReaderRead(this, e, !0)
              : Promise.reject(
                  new TypeError(
                    "view argument must be a valid ArrayBufferView",
                  ),
                )
          : Promise.reject(new TypeError());
      }
      releaseLock() {
        if (!isReadableStreamBYOBReader(this)) throw new TypeError();
        if (this[ownerReadableStream_] === void 0)
          throw new TypeError("Reader is not associated with a stream");
        if (this[readIntoRequests_].length > 0) throw new TypeError();
        readableStreamReaderGenericRelease(this);
      }
    }
    class SDReadableStream {
      constructor(e = {}, a = {}) {
        initializeReadableStream(this);
        let i = a.size,
          n = a.highWaterMark,
          o = e.type;
        if (o === void 0) {
          let s = makeSizeAlgorithmFromSizeFunction(i);
          setUpReadableStreamDefaultControllerFromUnderlyingSource(
            this,
            e,
            validateAndNormalizeHighWaterMark(n === void 0 ? 1 : n),
            s,
          );
        } else {
          if (String(o) !== "bytes")
            throw new RangeError(
              "The underlying source's `type` field must be undefined or 'bytes'",
            );
          if (i !== void 0)
            throw new RangeError(
              "bytes streams cannot have a strategy with a `size` field",
            );
          setUpReadableByteStreamControllerFromUnderlyingSource(
            this,
            e,
            validateAndNormalizeHighWaterMark(n === void 0 ? 0 : n),
          );
        }
      }
      get locked() {
        return isReadableStreamLocked(this);
      }
      getReader(e) {
        if (!isReadableStream(this)) throw new TypeError();
        e === void 0 && (e = {});
        let { mode: a } = e;
        if (a === void 0) return new ReadableStreamDefaultReader(this);
        if (String(a) === "byob") return new SDReadableStreamBYOBReader(this);
        throw RangeError("mode option must be undefined or `byob`");
      }
      cancel(e) {
        return isReadableStream(this)
          ? isReadableStreamLocked(this)
            ? Promise.reject(new TypeError("Cannot cancel a locked stream"))
            : readableStreamCancel(this, e)
          : Promise.reject(new TypeError());
      }
      tee() {
        return readableStreamTee(this, !1);
      }
      pipeThrough(e, a = {}) {
        let { readable: i, writable: n } = e;
        if (!isReadableStream(this)) throw new TypeError();
        if (!isWritableStream(n))
          throw new TypeError("writable must be a WritableStream");
        if (!isReadableStream(i))
          throw new TypeError("readable must be a ReadableStream");
        if (a.signal !== void 0 && !isAbortSignal(a.signal))
          throw new TypeError("options.signal must be an AbortSignal instance");
        if (isReadableStreamLocked(this))
          throw new TypeError("Cannot pipeThrough on a locked stream");
        if (isWritableStreamLocked(n))
          throw new TypeError("Cannot pipeThrough to a locked stream");
        return pipeTo(this, n, a).catch(() => {}), i;
      }
      pipeTo(e, a = {}) {
        return isReadableStream(this)
          ? isWritableStream(e)
            ? a.signal === void 0 || isAbortSignal(a.signal)
              ? isReadableStreamLocked(this)
                ? Promise.reject(
                    new TypeError("Cannot pipe from a locked stream"),
                  )
                : isWritableStreamLocked(e)
                  ? Promise.reject(
                      new TypeError("Cannot pipe to a locked stream"),
                    )
                  : pipeTo(this, e, a)
              : Promise.reject(
                  new TypeError(
                    "options.signal must be an AbortSignal instance",
                  ),
                )
            : Promise.reject(
                new TypeError("destination must be a WritableStream"),
              )
          : Promise.reject(new TypeError());
      }
    }
    function createReadableStream(t, e, a, i, n) {
      i === void 0 && (i = 1), n === void 0 && (n = () => 1);
      let o = Object.create(SDReadableStream.prototype);
      return (
        initializeReadableStream(o),
        setUpReadableStreamDefaultController(
          o,
          Object.create(ReadableStreamDefaultController.prototype),
          t,
          e,
          a,
          i,
          n,
        ),
        o
      );
    }
    function readableStreamTee(t, e) {
      if (!isReadableStream(t)) throw new TypeError();
      let a = new ReadableStreamDefaultReader(t),
        i,
        n,
        o,
        s,
        l,
        h = !1,
        f = !1,
        m = !1,
        w = new Promise((B) => (l = B)),
        D = () =>
          readableStreamDefaultReaderRead(a).then(({ value: B, done: T }) => {
            if (
              (T &&
                !h &&
                (f ||
                  readableStreamDefaultControllerClose(
                    o[readableStreamController_],
                  ),
                m ||
                  readableStreamDefaultControllerClose(
                    s[readableStreamController_],
                  ),
                (h = !0)),
              h)
            )
              return;
            let d = B,
              _ = B;
            f ||
              readableStreamDefaultControllerEnqueue(
                o[readableStreamController_],
                d,
              ),
              m ||
                (e && (_ = cloneValue(_)),
                readableStreamDefaultControllerEnqueue(
                  s[readableStreamController_],
                  _,
                ));
          }),
        k = () => {};
      return (
        (o = createReadableStream(k, D, (B) => {
          if (((f = !0), (i = B), m)) {
            let T = readableStreamCancel(t, [i, n]);
            l(T);
          }
          return w;
        })),
        (s = createReadableStream(k, D, (B) => {
          if (((m = !0), (n = B), f)) {
            let T = readableStreamCancel(t, [i, n]);
            l(T);
          }
          return w;
        })),
        a[closedPromise_].promise.catch((B) => {
          h ||
            (readableStreamDefaultControllerError(
              o[readableStreamController_],
              B,
            ),
            readableStreamDefaultControllerError(
              s[readableStreamController_],
              B,
            ),
            (h = !0));
        }),
        [o, s]
      );
    }
    class WritableStreamDefaultController {
      constructor() {
        throw new TypeError();
      }
      error(e) {
        if (!isWritableStreamDefaultController(this)) throw new TypeError();
        this[controlledWritableStream_][state_] === "writable" &&
          writableStreamDefaultControllerError(this, e);
      }
      [abortSteps_](e) {
        let a = this[abortAlgorithm_](e);
        return writableStreamDefaultControllerClearAlgorithms(this), a;
      }
      [errorSteps_]() {
        resetQueue(this);
      }
    }
    function setUpWritableStreamDefaultControllerFromUnderlyingSink(
      t,
      e,
      a,
      i,
    ) {
      let n = Object.create(WritableStreamDefaultController.prototype),
        o = createAlgorithmFromUnderlyingMethod(e, "write", [n]),
        s = createAlgorithmFromUnderlyingMethod(e, "close", []),
        l = createAlgorithmFromUnderlyingMethod(e, "abort", []);
      setUpWritableStreamDefaultController(
        t,
        n,
        function () {
          return invokeOrNoop(e, "start", [n]);
        },
        o,
        s,
        l,
        a,
        i,
      );
    }
    class WritableStream {
      constructor(e = {}, a = {}) {
        initializeWritableStream(this);
        let i = a.size,
          n = a.highWaterMark;
        if (e.type !== void 0)
          throw new RangeError(
            "The type of an underlying sink must be undefined",
          );
        let o = makeSizeAlgorithmFromSizeFunction(i);
        setUpWritableStreamDefaultControllerFromUnderlyingSink(
          this,
          e,
          validateAndNormalizeHighWaterMark(n === void 0 ? 1 : n),
          o,
        );
      }
      get locked() {
        if (!isWritableStream(this)) throw new TypeError();
        return isWritableStreamLocked(this);
      }
      abort(e) {
        return isWritableStream(this)
          ? isWritableStreamLocked(this)
            ? Promise.reject(new TypeError("Cannot abort a locked stream"))
            : writableStreamAbort(this, e)
          : Promise.reject(new TypeError());
      }
      getWriter() {
        if (!isWritableStream(this)) throw new TypeError();
        return new WritableStreamDefaultWriter(this);
      }
    }
    function createWritableStream(t, e, a, i, n, o) {
      n === void 0 && (n = 1), o === void 0 && (o = () => 1);
      let s = Object.create(WritableStream.prototype);
      return (
        initializeWritableStream(s),
        setUpWritableStreamDefaultController(
          s,
          Object.create(WritableStreamDefaultController.prototype),
          t,
          e,
          a,
          i,
          n,
          o,
        ),
        s
      );
    }
    let backpressure_$1 = Symbol("backpressure_"),
      backpressureChangePromise_ = Symbol("backpressureChangePromise_"),
      readable_ = Symbol("readable_"),
      transformStreamController_ = Symbol("transformStreamController_"),
      writable_ = Symbol("writable_"),
      controlledTransformStream_ = Symbol("controlledTransformStream_"),
      flushAlgorithm_ = Symbol("flushAlgorithm_"),
      transformAlgorithm_ = Symbol("transformAlgorithm_");
    function isTransformStream(t) {
      return (
        typeof t == "object" && t !== null && transformStreamController_ in t
      );
    }
    function initializeTransformStream(t, e, a, i, n, o) {
      let s = function () {
        return e;
      };
      (t[writable_] = createWritableStream(
        s,
        function (l) {
          return transformStreamDefaultSinkWriteAlgorithm(t, l);
        },
        function () {
          return transformStreamDefaultSinkCloseAlgorithm(t);
        },
        function (l) {
          return transformStreamDefaultSinkAbortAlgorithm(t, l);
        },
        a,
        i,
      )),
        (t[readable_] = createReadableStream(
          s,
          function () {
            return transformStreamDefaultSourcePullAlgorithm(t);
          },
          function (l) {
            return (
              transformStreamErrorWritableAndUnblockWrite(t, l),
              Promise.resolve(void 0)
            );
          },
          n,
          o,
        )),
        (t[backpressure_$1] = void 0),
        (t[backpressureChangePromise_] = void 0),
        transformStreamSetBackpressure(t, !0),
        (t[transformStreamController_] = void 0);
    }
    function transformStreamError(t, e) {
      readableStreamDefaultControllerError(
        t[readable_][readableStreamController_],
        e,
      ),
        transformStreamErrorWritableAndUnblockWrite(t, e);
    }
    function transformStreamErrorWritableAndUnblockWrite(t, e) {
      transformStreamDefaultControllerClearAlgorithms(
        t[transformStreamController_],
      ),
        writableStreamDefaultControllerErrorIfNeeded(
          t[writable_][writableStreamController_],
          e,
        ),
        t[backpressure_$1] && transformStreamSetBackpressure(t, !1);
    }
    function transformStreamSetBackpressure(t, e) {
      t[backpressure_$1] !== void 0 &&
        t[backpressureChangePromise_].resolve(void 0),
        (t[backpressureChangePromise_] = createControlledPromise()),
        (t[backpressure_$1] = e);
    }
    function isTransformStreamDefaultController(t) {
      return (
        typeof t == "object" && t !== null && controlledTransformStream_ in t
      );
    }
    function setUpTransformStreamDefaultController(t, e, a, i) {
      (e[controlledTransformStream_] = t),
        (t[transformStreamController_] = e),
        (e[transformAlgorithm_] = a),
        (e[flushAlgorithm_] = i);
    }
    function transformStreamDefaultControllerClearAlgorithms(t) {
      (t[transformAlgorithm_] = void 0), (t[flushAlgorithm_] = void 0);
    }
    function transformStreamDefaultControllerEnqueue(t, e) {
      let a = t[controlledTransformStream_],
        i = a[readable_][readableStreamController_];
      if (!readableStreamDefaultControllerCanCloseOrEnqueue(i))
        throw new TypeError();
      try {
        readableStreamDefaultControllerEnqueue(i, e);
      } catch (n) {
        throw (
          (transformStreamErrorWritableAndUnblockWrite(a, n),
          a[readable_][storedError_])
        );
      }
      readableStreamDefaultControllerHasBackpressure(i) !==
        a[backpressure_$1] && transformStreamSetBackpressure(a, !0);
    }
    function transformStreamDefaultControllerError(t, e) {
      transformStreamError(t[controlledTransformStream_], e);
    }
    function transformStreamDefaultControllerPerformTransform(t, e) {
      return t[transformAlgorithm_](e).catch((a) => {
        throw (transformStreamError(t[controlledTransformStream_], a), a);
      });
    }
    function transformStreamDefaultControllerTerminate(t) {
      let e = t[controlledTransformStream_],
        a = e[readable_][readableStreamController_];
      readableStreamDefaultControllerCanCloseOrEnqueue(a) &&
        readableStreamDefaultControllerClose(a),
        transformStreamErrorWritableAndUnblockWrite(
          e,
          new TypeError("The transform stream has been terminated"),
        );
    }
    function transformStreamDefaultSinkWriteAlgorithm(t, e) {
      let a = t[transformStreamController_];
      return t[backpressure_$1]
        ? t[backpressureChangePromise_].promise.then((i) => {
            let n = t[writable_];
            if (n[state_] === "erroring") throw n[storedError_];
            return transformStreamDefaultControllerPerformTransform(a, e);
          })
        : transformStreamDefaultControllerPerformTransform(a, e);
    }
    function transformStreamDefaultSinkAbortAlgorithm(t, e) {
      return transformStreamError(t, e), Promise.resolve(void 0);
    }
    function transformStreamDefaultSinkCloseAlgorithm(t) {
      let e = t[readable_],
        a = t[transformStreamController_],
        i = a[flushAlgorithm_]();
      return (
        transformStreamDefaultControllerClearAlgorithms(a),
        i.then(
          (n) => {
            if (e[state_] === "errored") throw e[storedError_];
            let o = e[readableStreamController_];
            readableStreamDefaultControllerCanCloseOrEnqueue(o) &&
              readableStreamDefaultControllerClose(o);
          },
          (n) => {
            throw (transformStreamError(t, n), e[storedError_]);
          },
        )
      );
    }
    function transformStreamDefaultSourcePullAlgorithm(t) {
      return (
        transformStreamSetBackpressure(t, !1),
        t[backpressureChangePromise_].promise
      );
    }
    class TransformStreamDefaultController {
      constructor() {
        throw new TypeError();
      }
      get desiredSize() {
        if (!isTransformStreamDefaultController(this)) throw new TypeError();
        return readableStreamDefaultControllerGetDesiredSize(
          this[controlledTransformStream_][readable_][
            readableStreamController_
          ],
        );
      }
      enqueue(e) {
        if (!isTransformStreamDefaultController(this)) throw new TypeError();
        transformStreamDefaultControllerEnqueue(this, e);
      }
      error(e) {
        if (!isTransformStreamDefaultController(this)) throw new TypeError();
        transformStreamDefaultControllerError(this, e);
      }
      terminate() {
        if (!isTransformStreamDefaultController(this)) throw new TypeError();
        transformStreamDefaultControllerTerminate(this);
      }
    }
    class TransformStream$1 {
      constructor(e = {}, a = {}, i = {}) {
        let n = a.size,
          o = a.highWaterMark,
          s = i.size,
          l = i.highWaterMark;
        if (e.writableType !== void 0)
          throw new RangeError(
            "The transformer's `writableType` field must be undefined",
          );
        let h = makeSizeAlgorithmFromSizeFunction(n),
          f = validateAndNormalizeHighWaterMark(o === void 0 ? 1 : o);
        if (e.readableType !== void 0)
          throw new RangeError(
            "The transformer's `readableType` field must be undefined",
          );
        let m = makeSizeAlgorithmFromSizeFunction(s),
          w = validateAndNormalizeHighWaterMark(l === void 0 ? 0 : l),
          D = createControlledPromise();
        initializeTransformStream(this, D.promise, f, h, w, m),
          setUpTransformStreamDefaultControllerFromTransformer(this, e);
        let k = invokeOrNoop(e, "start", [this[transformStreamController_]]);
        D.resolve(k);
      }
      get readable() {
        if (!isTransformStream(this)) throw new TypeError();
        return this[readable_];
      }
      get writable() {
        if (!isTransformStream(this)) throw new TypeError();
        return this[writable_];
      }
    }
    function setUpTransformStreamDefaultControllerFromTransformer(t, e) {
      let a = Object.create(TransformStreamDefaultController.prototype),
        i,
        n = e.transform;
      if (n !== void 0) {
        if (typeof n != "function")
          throw new TypeError(
            "`transform` field of the transformer must be a function",
          );
        i = (s) => promiseCall(n, e, [s, a]);
      } else
        i = function (s) {
          try {
            transformStreamDefaultControllerEnqueue(a, s);
          } catch (l) {
            return Promise.reject(l);
          }
          return Promise.resolve(void 0);
        };
      let o = createAlgorithmFromUnderlyingMethod(e, "flush", [a]);
      setUpTransformStreamDefaultController(t, a, i, o);
    }
    class ByteLengthQueuingStrategy {
      constructor(e) {
        this.highWaterMark = e.highWaterMark;
      }
      size(e) {
        return e.byteLength;
      }
    }
    class CountQueuingStrategy {
      constructor(e) {
        this.highWaterMark = e.highWaterMark;
      }
      size() {
        return 1;
      }
    }
    function wrapReadableStream(t, e) {
      let a;
      return new e({
        start(i) {
          (a = t.getReader()),
            a.closed.catch((n) => {
              i.error(n);
            });
        },
        pull: (i) =>
          a.read().then(
            ({ value: n, done: o }) => {
              o ? i.close() : i.enqueue(n);
            },
            (n) => {
              i.error(n);
            },
          ),
        cancel(i) {
          a.cancel(i);
        },
      });
    }
    function getMIMETypeFromHeadersInit(t) {
      let e = "Content-Type";
      if (t === void 0) return "";
      if (t instanceof Headers) return t.get(e) || "";
      if (Array.isArray(t)) {
        let a = t.find((i) => Array.isArray(i) && i.length === 2 && i[0] === e);
        return a ? a[1] : "";
      }
      return t[e] || "";
    }
    function resolveRequestInitStream(t, e, a) {
      if (t === void 0) return Promise.resolve(t);
      let i = t.body,
        n;
      if (
        (i &&
          typeof i == "object" &&
          ((e && i instanceof e) || i instanceof a) &&
          (n = i),
        !n)
      )
        return Promise.resolve(t);
      let o = getMIMETypeFromHeadersInit(t.headers);
      return readAllBytesFromStream(n.getReader(), o).then(
        (s) => ((t.body = s), t),
      );
    }
    function createAdaptedFetch(t, e, a, i, n) {
      return function (s, l) {
        return resolveRequestInitStream(l, a, i).then((h) =>
          t.call(void 0, s, h).then((f) => {
            if ("body" in f) {
              let m = f,
                w,
                D;
              f = new Proxy(m, {
                get(k, B, T) {
                  let d;
                  return (
                    B === "body"
                      ? (w === void 0 && (w = wrapReadableStream(m.body, i)),
                        (d = w))
                      : B === "clone"
                        ? (D === void 0 &&
                            (D = function () {
                              let [_, b] = n(f.body, !0);
                              return (
                                (w = _),
                                createResponseProxyWithStreamBody(e, n, b, l)
                              );
                            }),
                          (d = D))
                        : (d = k[B]),
                    typeof d == "function"
                      ? function (..._) {
                          return d.apply(k, _);
                        }
                      : d
                  );
                },
              });
            } else
              (f.body = new i({
                pull: (m) =>
                  f.arrayBuffer().then(
                    (w) => {
                      m.enqueue(new Uint8Array(w)), m.close();
                    },
                    (w) => {
                      m.error(w);
                    },
                  ),
              })),
                (f.clone = function () {
                  let [m, w] = n(f.body, !0);
                  return (
                    (f.body = m), createResponseProxyWithStreamBody(e, n, w, l)
                  );
                });
            return f;
          }),
        );
      };
    }
    function readAllBytesFromStream(t, e) {
      return new Promise((a, i) => {
        let n = [];
        (function o() {
          t.read().then(
            ({ value: s, done: l }) => {
              l
                ? (function () {
                    n.length === 0 && n.push(new Uint8Array(0));
                    let f = new Blob(n, { type: e });
                    a(f);
                  })()
                : s instanceof Uint8Array
                  ? (n.push(s), o())
                  : i(
                      new TypeError(
                        "A ReadableStream body must only yield Uint8Array values",
                      ),
                    );
            },
            (s) => {
              i(s);
            },
          );
        })();
      });
    }
    function createResponseProxyWithStreamBody(t, e, a, i) {
      let n = new t("fake", i),
        o = getMIMETypeFromHeadersInit(n.headers),
        s,
        l = !1;
      function h() {
        return (
          s === void 0 &&
            (s = new Promise((f, m) => {
              if (((l = !0), a.locked))
                return m(new TypeError("The ReadableStream is locked"));
              readAllBytesFromStream(a.getReader(), o)
                .then((w) => {
                  f(new t(w, i));
                })
                .catch((w) => {
                  m(w);
                });
            })),
          s
        );
      }
      return new (class {
        get type() {
          return n.type;
        }
        get url() {
          return n.url;
        }
        get redirected() {
          return n.redirected;
        }
        get status() {
          return n.status;
        }
        get ok() {
          return n.ok;
        }
        get statusText() {
          return n.statusText;
        }
        get headers() {
          return n.headers;
        }
        clone() {
          let [m, w] = e(a, !0);
          return (a = m), createResponseProxyWithStreamBody(t, e, w, i);
        }
        get body() {
          return a;
        }
        get bodyUsed() {
          return l;
        }
        arrayBuffer() {
          return h().then((m) => m.arrayBuffer());
        }
        blob() {
          return h().then((m) => m.blob());
        }
        formData() {
          return h().then((m) => m.formData());
        }
        json() {
          return h().then((m) => m.json());
        }
        text() {
          return h().then((m) => m.text());
        }
      })();
    }
    function createAdaptedResponse(t, e, a, i) {
      let n = function (o, s) {
        if (o instanceof a) {
          if (e === void 0 || !("body" in t))
            return createResponseProxyWithStreamBody(t, i, o, s);
          o = wrapReadableStream(o, e);
        }
        return new t(o, s);
      };
      return (n.prototype = t.prototype), n;
    }
    let decDecoder = Symbol("decDecoder"),
      decTransform = Symbol("decTransform");
    class TextDecodeTransformer {
      constructor(e) {
        this.decoder_ = e;
      }
      transform(e, a) {
        if (!(e instanceof ArrayBuffer || ArrayBuffer.isView(e)))
          throw new TypeError("Input data must be a BufferSource");
        let i = this.decoder_.decode(e, { stream: !0 });
        i.length !== 0 && a.enqueue(i);
      }
      flush(e) {
        let a = this.decoder_.decode();
        a.length !== 0 && e.enqueue(a);
      }
    }
    class TextDecoderStream {
      constructor(e, a) {
        (this[decDecoder] = new TextDecoder(e, a)),
          (this[decTransform] = new TransformStream(
            new TextDecodeTransformer(this[decDecoder]),
          ));
      }
      get encoding() {
        return this[decDecoder].encoding;
      }
      get fatal() {
        return this[decDecoder].fatal;
      }
      get ignoreBOM() {
        return this[decDecoder].ignoreBOM;
      }
      get readable() {
        return this[decTransform].readable;
      }
      get writable() {
        return this[decTransform].writable;
      }
    }
    let encEncoder = Symbol("encEncoder"),
      encTransform = Symbol("encTransform");
    class TextEncodeTransformer {
      constructor(e) {
        (this.encoder_ = e), (this.partial_ = void 0);
      }
      transform(e, a) {
        let i = String(e);
        this.partial_ !== void 0 &&
          ((i = this.partial_ + i), (this.partial_ = void 0));
        let n = i.length - 1,
          o = i.charCodeAt(n);
        o >= 55296 &&
          o < 56320 &&
          ((this.partial_ = String.fromCharCode(o)), (i = i.substring(0, n)));
        let s = this.encoder_.encode(i);
        s.length !== 0 && a.enqueue(s);
      }
      flush(e) {
        this.partial_ &&
          (e.enqueue(this.encoder_.encode(this.partial_)),
          (this.partial_ = void 0));
      }
    }
    class TextEncoderStream {
      constructor() {
        (this[encEncoder] = new TextEncoder()),
          (this[encTransform] = new TransformStream(
            new TextEncodeTransformer(this[encEncoder]),
          ));
      }
      get encoding() {
        return this[encEncoder].encoding;
      }
      get readable() {
        return this[encTransform].readable;
      }
      get writable() {
        return this[encTransform].writable;
      }
    }
    let PRESET_DICT = 32,
      Z_DEFLATED = 8,
      GZIP_ID1 = 31,
      GZIP_ID2 = 139,
      inflate_mask = [
        0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383,
        32767, 65535,
      ],
      swap32 = (t) =>
        (((t >>> 24) & 255) |
          ((t >>> 8) & 65280) |
          ((65280 & t) << 8) |
          ((255 & t) << 24)) >>>
        0;
    function u8ArrayFromBufferSource(t) {
      return t instanceof ArrayBuffer
        ? new Uint8Array(t)
        : ArrayBuffer.isView(t)
          ? t instanceof Uint8Array
            ? t
            : new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
          : void 0;
    }
    function adler32(t, e = 1) {
      let a = u8ArrayFromBufferSource(t);
      if (!a) throw new TypeError("source must be a BufferSource");
      return computeAdler32(a, e);
    }
    let BASE = 65521,
      NMAX = 5552;
    function computeAdler32(t, e = 1) {
      let a = (e >>> 16) & 65535;
      e &= 65535;
      let i = t.length,
        n = 0;
      for (; i >= NMAX; ) {
        i -= NMAX;
        let o = NMAX / 16;
        do
          (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]);
        while (--o);
        (e %= BASE), (a += BASE);
      }
      if (i) {
        for (; i >= 16; )
          (i -= 16),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]),
            (a += e += t[n++]);
        for (; i--; ) a += e += t[n++];
        (e %= BASE), (a %= BASE);
      }
      return e | (a << 16);
    }
    function crc32(t, e = 0) {
      let a = u8ArrayFromBufferSource(t);
      if (!a) throw new TypeError("source must be a BufferSource");
      return computeCRC32(a, e);
    }
    let endian = new Uint32Array([1]),
      endianCheck = new Uint8Array(endian.buffer, 0, 1)[0],
      computeCRC32 = endianCheck === 1 ? computeCRC32Little : computeCRC32Big;
    function computeCRC32Little(t, e = 0) {
      let a = ~e,
        i = t.byteOffset,
        n = 0,
        o = t.byteLength,
        s = crcTables[0],
        l = crcTables[1],
        h = crcTables[2],
        f = crcTables[3];
      for (; o && 3 & i; ) (a = s[255 & (a ^ t[n++])] ^ (a >>> 8)), o--, i++;
      let m = new Uint32Array(t.buffer, i, o >>> 2),
        w = 0;
      for (; o >= 32; )
        (a ^= m[w++]),
          (a =
            f[255 & a] ^
            h[(a >>> 8) & 255] ^
            l[(a >>> 16) & 255] ^
            s[a >>> 24]),
          (a ^= m[w++]),
          (a =
            f[255 & a] ^
            h[(a >>> 8) & 255] ^
            l[(a >>> 16) & 255] ^
            s[a >>> 24]),
          (a ^= m[w++]),
          (a =
            f[255 & a] ^
            h[(a >>> 8) & 255] ^
            l[(a >>> 16) & 255] ^
            s[a >>> 24]),
          (a ^= m[w++]),
          (a =
            f[255 & a] ^
            h[(a >>> 8) & 255] ^
            l[(a >>> 16) & 255] ^
            s[a >>> 24]),
          (a ^= m[w++]),
          (a =
            f[255 & a] ^
            h[(a >>> 8) & 255] ^
            l[(a >>> 16) & 255] ^
            s[a >>> 24]),
          (a ^= m[w++]),
          (a =
            f[255 & a] ^
            h[(a >>> 8) & 255] ^
            l[(a >>> 16) & 255] ^
            s[a >>> 24]),
          (a ^= m[w++]),
          (a =
            f[255 & a] ^
            h[(a >>> 8) & 255] ^
            l[(a >>> 16) & 255] ^
            s[a >>> 24]),
          (a ^= m[w++]),
          (a =
            f[255 & a] ^
            h[(a >>> 8) & 255] ^
            l[(a >>> 16) & 255] ^
            s[a >>> 24]),
          (o -= 32);
      for (; o >= 4; )
        (a ^= m[w++]),
          (a =
            f[255 & a] ^
            h[(a >>> 8) & 255] ^
            l[(a >>> 16) & 255] ^
            s[a >>> 24]),
          (o -= 4);
      if (o) {
        n += 4 * w;
        do a = s[255 & (a ^ t[n++])] ^ (a >>> 8);
        while (--o);
      }
      return (a = ~a), a;
    }
    function computeCRC32Big(t, e = 0) {
      let a = ~swap32(e),
        i = t.byteOffset,
        n = 0,
        o = t.byteLength,
        s = crcTables[4],
        l = crcTables[5],
        h = crcTables[6],
        f = crcTables[7];
      for (; o && 3 & i; ) (a = s[(a >>> 24) ^ t[n++]] ^ (a << 8)), o--, i++;
      let m = new Uint32Array(t.buffer, i, o >>> 2),
        w = 0;
      for (; o >= 32; )
        (a ^= m[w++]),
          (a =
            s[255 & a] ^
            l[(a >>> 8) & 255] ^
            h[(a >>> 16) & 255] ^
            f[a >>> 24]),
          (a ^= m[w++]),
          (a =
            s[255 & a] ^
            l[(a >>> 8) & 255] ^
            h[(a >>> 16) & 255] ^
            f[a >>> 24]),
          (a ^= m[w++]),
          (a =
            s[255 & a] ^
            l[(a >>> 8) & 255] ^
            h[(a >>> 16) & 255] ^
            f[a >>> 24]),
          (a ^= m[w++]),
          (a =
            s[255 & a] ^
            l[(a >>> 8) & 255] ^
            h[(a >>> 16) & 255] ^
            f[a >>> 24]),
          (a ^= m[w++]),
          (a =
            s[255 & a] ^
            l[(a >>> 8) & 255] ^
            h[(a >>> 16) & 255] ^
            f[a >>> 24]),
          (a ^= m[w++]),
          (a =
            s[255 & a] ^
            l[(a >>> 8) & 255] ^
            h[(a >>> 16) & 255] ^
            f[a >>> 24]),
          (a ^= m[w++]),
          (a =
            s[255 & a] ^
            l[(a >>> 8) & 255] ^
            h[(a >>> 16) & 255] ^
            f[a >>> 24]),
          (a ^= m[w++]),
          (a =
            s[255 & a] ^
            l[(a >>> 8) & 255] ^
            h[(a >>> 16) & 255] ^
            f[a >>> 24]),
          (o -= 32);
      for (; o >= 4; )
        (a ^= m[w++]),
          (a =
            s[255 & a] ^
            l[(a >>> 8) & 255] ^
            h[(a >>> 16) & 255] ^
            f[a >>> 24]),
          (o -= 4);
      if (o) {
        n += 4 * w;
        do a = s[(a >>> 24) ^ t[n++]] ^ (a << 8);
        while (--o);
      }
      return (a = ~a), swap32(a);
    }
    function makeCRCTables() {
      let t = new ArrayBuffer(8192),
        e = [
          new Uint32Array(t, 0, 256),
          new Uint32Array(t, 1024, 256),
          new Uint32Array(t, 2048, 256),
          new Uint32Array(t, 3072, 256),
          new Uint32Array(t, 4096, 256),
          new Uint32Array(t, 5120, 256),
          new Uint32Array(t, 6144, 256),
          new Uint32Array(t, 7168, 256),
        ];
      for (let a = 0; a < 256; a++) {
        let i = a;
        for (let n = 0; n < 8; n++)
          i = 1 & i ? 3988292384 ^ (i >>> 1) : i >>> 1;
        (e[0][a] = i), (e[4][a] = swap32(i));
      }
      for (let a = 0; a < 256; a++) {
        let i = e[0][a];
        for (let n = 1; n < 4; n++)
          (i = e[0][255 & i] ^ (i >>> 8)),
            (e[n][a] = i),
            (e[n + 4][a] = swap32(i));
      }
      return e;
    }
    let crcTables = makeCRCTables(),
      OUTPUT_BUFSIZE = 16384;
    class ZStream {
      constructor() {
        (this.avail_in = 0),
          (this.next_in_index = 0),
          (this.next_out = new Uint8Array(OUTPUT_BUFSIZE)),
          (this.avail_out = this.next_out.byteLength),
          (this.next_out_index = 0),
          (this.total_in = this.total_out = 0),
          (this.msg = "");
      }
      append(e) {
        (this.next_in = e),
          (this.avail_in = e.length),
          (this.next_in_index = 0);
      }
      read_buf(e, a) {
        return this.next_in.subarray(e, e + a);
      }
      read_into_buf(e, a, i) {
        let n = this.avail_in;
        return (
          n > i && (n = i),
          n === 0
            ? 0
            : (e.set(
                this.next_in.subarray(
                  this.next_in_index,
                  this.next_in_index + n,
                ),
                a,
              ),
              (this.avail_in -= n),
              (this.next_in_index += n),
              (this.total_in += n),
              n)
        );
      }
      flush_pending(e) {
        var a = e.pending;
        a > this.avail_out && (a = this.avail_out),
          a !== 0 &&
            (this.next_out.set(
              e.pending_buf.subarray(e.pending_out, e.pending_out + a),
              this.next_out_index,
            ),
            (this.next_out_index += a),
            (e.pending_out += a),
            (this.total_out += a),
            (this.avail_out -= a),
            (e.pending -= a),
            e.pending === 0 && (e.pending_out = 0));
      }
    }
    function InfCodes() {
      let t,
        e,
        a,
        i,
        n = 0,
        o = 0,
        s = 0,
        l = 0,
        h = 0,
        f = 0,
        m = 0,
        w = 0,
        D = 0,
        k = 0;
      function B(T, d, _, b, P, E, C, y) {
        let S, p, q, R, A, g, F, M, z, N, j, L, I, U, O, W;
        (F = y.next_in_index),
          (M = y.avail_in),
          (A = C.bitb),
          (g = C.bitk),
          (z = C.write),
          (N = z < C.read ? C.read - z - 1 : C.end - z),
          (j = inflate_mask[T]),
          (L = inflate_mask[d]);
        do {
          for (; g < 20; ) M--, (A |= (255 & y.next_in[F++]) << g), (g += 8);
          if (
            ((S = A & j),
            (p = _),
            (q = b),
            (W = 3 * (q + S)),
            (R = p[W]),
            R !== 0)
          )
            for (;;) {
              if (((A >>= p[W + 1]), (g -= p[W + 1]), (16 & R) != 0)) {
                for (
                  R &= 15,
                    I = p[W + 2] + (A & inflate_mask[R]),
                    A >>= R,
                    g -= R;
                  g < 15;
                )
                  M--, (A |= (255 & y.next_in[F++]) << g), (g += 8);
                for (S = A & L, p = P, q = E, W = 3 * (q + S), R = p[W]; ; ) {
                  if (((A >>= p[W + 1]), (g -= p[W + 1]), (16 & R) != 0)) {
                    for (R &= 15; g < R; )
                      M--, (A |= (255 & y.next_in[F++]) << g), (g += 8);
                    if (
                      ((U = p[W + 2] + (A & inflate_mask[R])),
                      (A >>= R),
                      (g -= R),
                      (N -= I),
                      z >= U)
                    )
                      (O = z - U),
                        (C.window[z++] = C.window[O++]),
                        (C.window[z++] = C.window[O++]),
                        (I -= 2);
                    else {
                      O = z - U;
                      do O += C.end;
                      while (O < 0);
                      if (((R = C.end - O), I > R)) {
                        I -= R;
                        do C.window[z++] = C.window[O++];
                        while (--R != 0);
                        O = 0;
                      }
                    }
                    do C.window[z++] = C.window[O++];
                    while (--I != 0);
                    break;
                  }
                  if (64 & R)
                    return (
                      (y.msg = "invalid distance code"),
                      (I = y.avail_in - M),
                      (I = g >> 3 < I ? g >> 3 : I),
                      (M += I),
                      (F -= I),
                      (g -= I << 3),
                      (C.bitb = A),
                      (C.bitk = g),
                      (y.avail_in = M),
                      (y.total_in += F - y.next_in_index),
                      (y.next_in_index = F),
                      (C.write = z),
                      -3
                    );
                  (S += p[W + 2]),
                    (S += A & inflate_mask[R]),
                    (W = 3 * (q + S)),
                    (R = p[W]);
                }
                break;
              }
              if (64 & R)
                return 32 & R
                  ? ((I = y.avail_in - M),
                    (I = g >> 3 < I ? g >> 3 : I),
                    (M += I),
                    (F -= I),
                    (g -= I << 3),
                    (C.bitb = A),
                    (C.bitk = g),
                    (y.avail_in = M),
                    (y.total_in += F - y.next_in_index),
                    (y.next_in_index = F),
                    (C.write = z),
                    1)
                  : ((y.msg = "invalid literal/length code"),
                    (I = y.avail_in - M),
                    (I = g >> 3 < I ? g >> 3 : I),
                    (M += I),
                    (F -= I),
                    (g -= I << 3),
                    (C.bitb = A),
                    (C.bitk = g),
                    (y.avail_in = M),
                    (y.total_in += F - y.next_in_index),
                    (y.next_in_index = F),
                    (C.write = z),
                    -3);
              if (
                ((S += p[W + 2]),
                (S += A & inflate_mask[R]),
                (W = 3 * (q + S)),
                (R = p[W]),
                R === 0)
              ) {
                (A >>= p[W + 1]),
                  (g -= p[W + 1]),
                  (C.window[z++] = p[W + 2]),
                  N--;
                break;
              }
            }
          else
            (A >>= p[W + 1]), (g -= p[W + 1]), (C.window[z++] = p[W + 2]), N--;
        } while (N >= 258 && M >= 10);
        return (
          (I = y.avail_in - M),
          (I = g >> 3 < I ? g >> 3 : I),
          (M += I),
          (F -= I),
          (g -= I << 3),
          (C.bitb = A),
          (C.bitk = g),
          (y.avail_in = M),
          (y.total_in += F - y.next_in_index),
          (y.next_in_index = F),
          (C.write = z),
          0
        );
      }
      return {
        init: function (d, _, b, P, E, C) {
          (t = 0), (m = d), (w = _), (a = b), (D = P), (i = E), (k = C);
        },
        proc: function (d, _, b) {
          let P,
            E,
            C,
            y,
            S,
            p,
            q,
            R = 0,
            A = 0,
            g = 0;
          for (
            g = _.next_in_index,
              y = _.avail_in,
              R = d.bitb,
              A = d.bitk,
              S = d.write,
              p = S < d.read ? d.read - S - 1 : d.end - S;
            ;
          )
            switch (t) {
              case 0:
                if (
                  p >= 258 &&
                  y >= 10 &&
                  ((d.bitb = R),
                  (d.bitk = A),
                  (_.avail_in = y),
                  (_.total_in += g - _.next_in_index),
                  (_.next_in_index = g),
                  (d.write = S),
                  (b = B(m, w, a, D, i, k, d, _)),
                  (g = _.next_in_index),
                  (y = _.avail_in),
                  (R = d.bitb),
                  (A = d.bitk),
                  (S = d.write),
                  (p = S < d.read ? d.read - S - 1 : d.end - S),
                  b !== 0)
                ) {
                  t = b === 1 ? 7 : 9;
                  break;
                }
                (s = m), (e = a), (o = D), (t = 1);
              case 1:
                for (P = s; A < P; ) {
                  if (y === 0)
                    return (
                      (d.bitb = R),
                      (d.bitk = A),
                      (_.avail_in = y),
                      (_.total_in += g - _.next_in_index),
                      (_.next_in_index = g),
                      (d.write = S),
                      d.inflate_flush(_, b)
                    );
                  (b = 0), y--, (R |= (255 & _.next_in[g++]) << A), (A += 8);
                }
                if (
                  ((E = 3 * (o + (R & inflate_mask[P]))),
                  (R >>>= e[E + 1]),
                  (A -= e[E + 1]),
                  (C = e[E]),
                  C === 0)
                ) {
                  (l = e[E + 2]), (t = 6);
                  break;
                }
                if (16 & C) {
                  (h = 15 & C), (n = e[E + 2]), (t = 2);
                  break;
                }
                if (!(64 & C)) {
                  (s = C), (o = E / 3 + e[E + 2]);
                  break;
                }
                if (32 & C) {
                  t = 7;
                  break;
                }
                return (
                  (t = 9),
                  (_.msg = "invalid literal/length code"),
                  (b = -3),
                  (d.bitb = R),
                  (d.bitk = A),
                  (_.avail_in = y),
                  (_.total_in += g - _.next_in_index),
                  (_.next_in_index = g),
                  (d.write = S),
                  d.inflate_flush(_, b)
                );
              case 2:
                for (P = h; A < P; ) {
                  if (y === 0)
                    return (
                      (d.bitb = R),
                      (d.bitk = A),
                      (_.avail_in = y),
                      (_.total_in += g - _.next_in_index),
                      (_.next_in_index = g),
                      (d.write = S),
                      d.inflate_flush(_, b)
                    );
                  (b = 0), y--, (R |= (255 & _.next_in[g++]) << A), (A += 8);
                }
                (n += R & inflate_mask[P]),
                  (R >>= P),
                  (A -= P),
                  (s = w),
                  (e = i),
                  (o = k),
                  (t = 3);
              case 3:
                for (P = s; A < P; ) {
                  if (y === 0)
                    return (
                      (d.bitb = R),
                      (d.bitk = A),
                      (_.avail_in = y),
                      (_.total_in += g - _.next_in_index),
                      (_.next_in_index = g),
                      (d.write = S),
                      d.inflate_flush(_, b)
                    );
                  (b = 0), y--, (R |= (255 & _.next_in[g++]) << A), (A += 8);
                }
                if (
                  ((E = 3 * (o + (R & inflate_mask[P]))),
                  (R >>= e[E + 1]),
                  (A -= e[E + 1]),
                  (C = e[E]),
                  (16 & C) != 0)
                ) {
                  (h = 15 & C), (f = e[E + 2]), (t = 4);
                  break;
                }
                if (!(64 & C)) {
                  (s = C), (o = E / 3 + e[E + 2]);
                  break;
                }
                return (
                  (t = 9),
                  (_.msg = "invalid distance code"),
                  (b = -3),
                  (d.bitb = R),
                  (d.bitk = A),
                  (_.avail_in = y),
                  (_.total_in += g - _.next_in_index),
                  (_.next_in_index = g),
                  (d.write = S),
                  d.inflate_flush(_, b)
                );
              case 4:
                for (P = h; A < P; ) {
                  if (y === 0)
                    return (
                      (d.bitb = R),
                      (d.bitk = A),
                      (_.avail_in = y),
                      (_.total_in += g - _.next_in_index),
                      (_.next_in_index = g),
                      (d.write = S),
                      d.inflate_flush(_, b)
                    );
                  (b = 0), y--, (R |= (255 & _.next_in[g++]) << A), (A += 8);
                }
                (f += R & inflate_mask[P]), (R >>= P), (A -= P), (t = 5);
              case 5:
                for (q = S - f; q < 0; ) q += d.end;
                for (; n !== 0; ) {
                  if (
                    p === 0 &&
                    (S === d.end &&
                      d.read !== 0 &&
                      ((S = 0), (p = S < d.read ? d.read - S - 1 : d.end - S)),
                    p === 0 &&
                      ((d.write = S),
                      (b = d.inflate_flush(_, b)),
                      (S = d.write),
                      (p = S < d.read ? d.read - S - 1 : d.end - S),
                      S === d.end &&
                        d.read !== 0 &&
                        ((S = 0),
                        (p = S < d.read ? d.read - S - 1 : d.end - S)),
                      p === 0))
                  )
                    return (
                      (d.bitb = R),
                      (d.bitk = A),
                      (_.avail_in = y),
                      (_.total_in += g - _.next_in_index),
                      (_.next_in_index = g),
                      (d.write = S),
                      d.inflate_flush(_, b)
                    );
                  (d.window[S++] = d.window[q++]),
                    p--,
                    q === d.end && (q = 0),
                    n--;
                }
                t = 0;
                break;
              case 6:
                if (
                  p === 0 &&
                  (S === d.end &&
                    d.read !== 0 &&
                    ((S = 0), (p = S < d.read ? d.read - S - 1 : d.end - S)),
                  p === 0 &&
                    ((d.write = S),
                    (b = d.inflate_flush(_, b)),
                    (S = d.write),
                    (p = S < d.read ? d.read - S - 1 : d.end - S),
                    S === d.end &&
                      d.read !== 0 &&
                      ((S = 0), (p = S < d.read ? d.read - S - 1 : d.end - S)),
                    p === 0))
                )
                  return (
                    (d.bitb = R),
                    (d.bitk = A),
                    (_.avail_in = y),
                    (_.total_in += g - _.next_in_index),
                    (_.next_in_index = g),
                    (d.write = S),
                    d.inflate_flush(_, b)
                  );
                (b = 0), (d.window[S++] = l), p--, (t = 0);
                break;
              case 7:
                if (
                  (A > 7 && ((A -= 8), y++, g--),
                  (d.write = S),
                  (b = d.inflate_flush(_, b)),
                  (S = d.write),
                  (p = S < d.read ? d.read - S - 1 : d.end - S),
                  d.read !== d.write)
                )
                  return (
                    (d.bitb = R),
                    (d.bitk = A),
                    (_.avail_in = y),
                    (_.total_in += g - _.next_in_index),
                    (_.next_in_index = g),
                    (d.write = S),
                    d.inflate_flush(_, b)
                  );
                t = 8;
              case 8:
                return (
                  (b = 1),
                  (d.bitb = R),
                  (d.bitk = A),
                  (_.avail_in = y),
                  (_.total_in += g - _.next_in_index),
                  (_.next_in_index = g),
                  (d.write = S),
                  d.inflate_flush(_, b)
                );
              case 9:
                return (
                  (b = -3),
                  (d.bitb = R),
                  (d.bitk = A),
                  (_.avail_in = y),
                  (_.total_in += g - _.next_in_index),
                  (_.next_in_index = g),
                  (d.write = S),
                  d.inflate_flush(_, b)
                );
              default:
                return (
                  (b = -2),
                  (d.bitb = R),
                  (d.bitk = A),
                  (_.avail_in = y),
                  (_.total_in += g - _.next_in_index),
                  (_.next_in_index = g),
                  (d.write = S),
                  d.inflate_flush(_, b)
                );
            }
        },
      };
    }
    let fixed_bl = 9,
      fixed_bd = 5,
      fixed_tl = [
        96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8,
        48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0, 0, 8,
        128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83,
        7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40,
        0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84,
        0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7,
        13, 0, 8, 100, 0, 8, 36, 0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9,
        232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124, 0,
        8, 60, 0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12,
        0, 8, 140, 0, 8, 76, 0, 9, 248, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8,
        163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 196, 81, 7, 11, 0, 8, 98, 0,
        8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 228, 80, 7, 7, 0,
        8, 90, 0, 8, 26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212,
        82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8, 138, 0, 8,
        74, 0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8,
        118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 172, 0,
        8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0,
        9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110,
        0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7,
        256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0,
        9, 194, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0,
        8, 65, 0, 9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0,
        8, 121, 0, 8, 57, 0, 9, 210, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178,
        0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21,
        80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8,
        101, 0, 8, 37, 0, 9, 170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80,
        7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0,
        9, 218, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141,
        0, 8, 77, 0, 9, 250, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7,
        35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9,
        166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 230, 80, 7, 7, 0, 8, 91, 0, 8,
        27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7, 19, 0,
        8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 246,
        80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55,
        0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 174, 0, 8, 7, 0, 8,
        135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 158, 84,
        7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111, 0, 8, 47,
        0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256, 0, 8,
        80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 193, 80,
        7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0,
        9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8, 120,
        0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8,
        0, 8, 136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8,
        227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0,
        8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0,
        8, 92, 0, 8, 28, 0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217,
        82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8,
        76, 0, 9, 249, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0,
        8, 114, 0, 8, 50, 0, 9, 197, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165,
        0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 229, 80, 7, 7, 0, 8, 90, 0, 8, 26,
        0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 213, 82, 7, 19, 0, 8,
        106, 0, 8, 42, 0, 9, 181, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 245, 80,
        7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0,
        9, 205, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 173, 0, 8, 6, 0, 8, 134,
        0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 157, 84, 7, 99,
        0, 8, 126, 0, 8, 62, 0, 9, 221, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9,
        189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0,
        8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 195, 80, 7, 10,
        0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 227,
        80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8, 57,
        0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8,
        137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83,
        7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37,
        0, 9, 171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93,
        0, 8, 29, 0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7,
        23, 0, 8, 109, 0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9,
        251, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0,
        8, 51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0,
        8, 131, 0, 8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151,
        84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8, 107, 0, 8,
        43, 0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8,
        87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 207, 81,
        7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0,
        9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 159, 84, 7, 99, 0, 8, 127,
        0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 191, 0, 8,
        15, 0, 8, 143, 0, 8, 79, 0, 9, 255,
      ],
      fixed_td = [
        80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85,
        5, 65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5, 8193, 82,
        5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83,
        5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5, 24577, 80,
        5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86,
        5, 193, 192, 5, 24577,
      ],
      cplens = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
      ],
      cplext = [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0, 112, 112,
      ],
      cpdist = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
      ],
      cpdext = [
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13,
      ],
      BMAX = 15,
      v,
      hn = [0],
      c = new Int32Array(BMAX + 1),
      r = new Int32Array(3),
      u = new Int32Array(BMAX),
      x = new Int32Array(BMAX + 1);
    function huft_build(t, e, a, i, n, o, s, l, h, f, m) {
      let w, D, k, B, T, d, _, b, P, E, C, y, S, p, q;
      (E = 0), (T = a);
      do c[t[e + E]]++, E++, T--;
      while (T !== 0);
      if (c[0] === a) return (s[0] = -1), (l[0] = 0), 0;
      for (b = l[0], d = 1; d <= BMAX && c[d] === 0; d++);
      for (_ = d, b < d && (b = d), T = BMAX; T !== 0 && c[T] === 0; T--);
      for (k = T, b > T && (b = T), l[0] = b, p = 1 << d; d < T; d++, p <<= 1)
        if (((p -= c[d]), p < 0)) return -3;
      if (((p -= c[T]), p < 0)) return -3;
      for (c[T] += p, x[1] = d = 0, E = 1, S = 2; --T != 0; )
        (x[S] = d += c[E]), S++, E++;
      (T = 0), (E = 0);
      do (d = t[e + E]), d !== 0 && (m[x[d]++] = T), E++;
      while (++T < a);
      for (
        a = x[k], x[0] = T = 0, E = 0, B = -1, y = -b, u[0] = 0, C = 0, q = 0;
        _ <= k;
        _++
      )
        for (w = c[_]; w-- != 0; ) {
          for (; _ > y + b; ) {
            if (
              (B++,
              (y += b),
              (q = k - y),
              (q = q > b ? b : q),
              (D = 1 << (d = _ - y)),
              D > w + 1 && ((D -= w + 1), (S = _), d < q))
            )
              for (; ++d < q && ((D <<= 1), !(D <= c[++S])); ) D -= c[S];
            if (((q = 1 << d), f[0] + q > 1400)) return -3;
            (u[B] = C = f[0]),
              (f[0] += q),
              B !== 0
                ? ((x[B] = T),
                  (r[0] = d),
                  (r[1] = b),
                  (d = T >>> (y - b)),
                  (r[2] = C - u[B - 1] - d),
                  h.set(r, 3 * (u[B - 1] + d)))
                : (s[0] = C);
          }
          for (
            r[1] = _ - y,
              E >= a
                ? (r[0] = 192)
                : m[E] < i
                  ? ((r[0] = m[E] < 256 ? 0 : 96), (r[2] = m[E++]))
                  : ((r[0] = o[m[E] - i] + 16 + 64), (r[2] = n[m[E++] - i])),
              D = 1 << (_ - y),
              d = T >>> y;
            d < q;
            d += D
          )
            h.set(r, 3 * (C + d));
          for (d = 1 << (_ - 1); T & d; d >>>= 1) T ^= d;
          for (T ^= d, P = (1 << y) - 1; (T & P) !== x[B]; )
            B--, (y -= b), (P = (1 << y) - 1);
        }
      return p !== 0 && k !== 1 ? -5 : 0;
    }
    function initWorkArea(t) {
      v = new Int32Array(t);
      for (let e = 0; e < BMAX + 1; e++) (c[e] = 0), (u[e] = 0), (x[e] = 0);
      for (let e = 0; e < 3; e++) r[e] = 0;
    }
    function inflate_trees_bits(t, e, a, i, n) {
      initWorkArea(19), (hn[0] = 0);
      let o = huft_build(t, 0, 19, 19, null, null, a, e, i, hn, v);
      return (
        o === -3
          ? (n.msg = "oversubscribed dynamic bit lengths tree")
          : (o !== -5 && e[0] !== 0) ||
            ((n.msg = "incomplete dynamic bit lengths tree"), (o = -3)),
        o
      );
    }
    function inflate_trees_dynamic(t, e, a, i, n, o, s, l, h) {
      initWorkArea(288), (hn[0] = 0);
      let f = huft_build(a, 0, t, 257, cplens, cplext, o, i, l, hn, v);
      return f !== 0 || i[0] === 0
        ? (f === -3
            ? (h.msg = "oversubscribed literal/length tree")
            : ((h.msg = "incomplete literal/length tree"), (f = -3)),
          f)
        : (initWorkArea(288),
          (f = huft_build(a, t, e, 0, cpdist, cpdext, s, n, l, hn, v)),
          f !== 0 || (n[0] === 0 && t > 257)
            ? (f === -3
                ? (h.msg = "oversubscribed distance tree")
                : f === -5
                  ? ((h.msg = "incomplete distance tree"), (f = -3))
                  : ((h.msg = "empty distance tree with lengths"), (f = -3)),
              f)
            : 0);
    }
    function inflate_trees_fixed(t, e, a, i) {
      return (
        (t[0] = fixed_bl),
        (e[0] = fixed_bd),
        (a[0] = fixed_tl),
        (i[0] = fixed_td),
        0
      );
    }
    let border = [
      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
    ];
    class InfBlocks {
      constructor(e) {
        (this.codes = InfCodes()),
          (this.hufts = new Int32Array(4200)),
          (this.mode = 0),
          (this.bitk = 0),
          (this.bitb = 0),
          (this.read = 0),
          (this.write = 0),
          (this.last = 0),
          (this.end = e),
          (this.window = new Uint8Array(e));
      }
      reset() {
        (this.bitk = 0),
          (this.bitb = 0),
          (this.read = 0),
          (this.write = 0),
          (this.last = 0);
      }
      inflate_flush(e, a) {
        let i, n, o;
        return (
          (n = e.next_out_index),
          (o = this.read),
          (i = (o <= this.write ? this.write : this.end) - o),
          i > e.avail_out && (i = e.avail_out),
          i !== 0 && a === -5 && (a = 0),
          (e.avail_out -= i),
          (e.total_out += i),
          e.next_out.set(this.window.subarray(o, o + i), n),
          (n += i),
          (o += i),
          o === this.end &&
            ((o = 0),
            this.write === this.end && (this.write = 0),
            (i = this.write - o),
            i > e.avail_out && (i = e.avail_out),
            i !== 0 && a === -5 && (a = 0),
            (e.avail_out -= i),
            (e.total_out += i),
            e.next_out.set(this.window.subarray(o, o + i), n),
            (n += i),
            (o += i)),
          (e.next_out_index = n),
          (this.read = o),
          a
        );
      }
      proc(e, a) {
        let i,
          n,
          o,
          s,
          l,
          h,
          f,
          m,
          w = 0,
          D = 0,
          k = 0,
          B = new Uint8Array(320),
          T = [0],
          d = [0],
          _ = this.codes,
          b = this.hufts;
        for (
          s = e.next_in_index,
            l = e.avail_in,
            n = this.bitb,
            o = this.bitk,
            h = this.write,
            f = h < this.read ? this.read - h - 1 : this.end - h;
          ;
        )
          switch (this.mode) {
            case 0:
              if (this.last) return 1;
              for (; o < 3; ) {
                if (l === 0)
                  return (
                    (this.bitb = n),
                    (this.bitk = o),
                    (e.avail_in = l),
                    (e.total_in += s - e.next_in_index),
                    (e.next_in_index = s),
                    (this.write = h),
                    this.inflate_flush(e, a)
                  );
                (a = 0), l--, (n |= (255 & e.next_in[s++]) << o), (o += 8);
              }
              switch (((i = 7 & n), (this.last = 1 & i), i >>> 1)) {
                case 0:
                  (n >>>= 3),
                    (o -= 3),
                    (i = 7 & o),
                    (n >>>= i),
                    (o -= i),
                    (this.mode = 1);
                  break;
                case 1:
                  let S = [0],
                    p = [0],
                    q = [[]],
                    R = [[]];
                  inflate_trees_fixed(S, p, q, R),
                    _.init(S[0], p[0], q[0], 0, R[0], 0),
                    (n >>>= 3),
                    (o -= 3),
                    (this.mode = 6);
                  break;
                case 2:
                  (n >>>= 3), (o -= 3), (this.mode = 3);
                  break;
                case 3:
                  return (
                    (n >>>= 3),
                    (o -= 3),
                    (this.mode = 9),
                    (e.msg = "invalid block type"),
                    (a = -3),
                    (this.bitb = n),
                    (this.bitk = o),
                    (e.avail_in = l),
                    (e.total_in += s - e.next_in_index),
                    (e.next_in_index = s),
                    (this.write = h),
                    this.inflate_flush(e, a)
                  );
              }
              break;
            case 1:
              for (; o < 32; ) {
                if (l === 0)
                  return (
                    (this.bitb = n),
                    (this.bitk = o),
                    (e.avail_in = l),
                    (e.total_in += s - e.next_in_index),
                    (e.next_in_index = s),
                    (this.write = h),
                    this.inflate_flush(e, a)
                  );
                (a = 0), l--, (n |= (255 & e.next_in[s++]) << o), (o += 8);
              }
              if (((~n >>> 16) & 65535) != (65535 & n))
                return (
                  (this.mode = 9),
                  (e.msg = "invalid stored block lengths"),
                  (a = -3),
                  (this.bitb = n),
                  (this.bitk = o),
                  (e.avail_in = l),
                  (e.total_in += s - e.next_in_index),
                  (e.next_in_index = s),
                  (this.write = h),
                  this.inflate_flush(e, a)
                );
              (w = 65535 & n),
                (n = o = 0),
                (this.mode = w !== 0 ? 2 : this.last !== 0 ? 7 : 0);
              break;
            case 2:
              if (l === 0)
                return (
                  (this.bitb = n),
                  (this.bitk = o),
                  (e.avail_in = l),
                  (e.total_in += s - e.next_in_index),
                  (e.next_in_index = s),
                  (this.write = h),
                  this.inflate_flush(e, a)
                );
              if (
                f === 0 &&
                (h === this.end &&
                  this.read !== 0 &&
                  ((h = 0),
                  (f = h < this.read ? this.read - h - 1 : this.end - h)),
                f === 0 &&
                  ((this.write = h),
                  (a = this.inflate_flush(e, a)),
                  (h = this.write),
                  (f = h < this.read ? this.read - h - 1 : this.end - h),
                  h === this.end &&
                    this.read !== 0 &&
                    ((h = 0),
                    (f = h < this.read ? this.read - h - 1 : this.end - h)),
                  f === 0))
              )
                return (
                  (this.bitb = n),
                  (this.bitk = o),
                  (e.avail_in = l),
                  (e.total_in += s - e.next_in_index),
                  (e.next_in_index = s),
                  (this.write = h),
                  this.inflate_flush(e, a)
                );
              if (
                ((a = 0),
                (i = w),
                i > l && (i = l),
                i > f && (i = f),
                this.window.set(e.read_buf(s, i), h),
                (s += i),
                (l -= i),
                (h += i),
                (f -= i),
                (w -= i),
                w !== 0)
              )
                break;
              this.mode = this.last !== 0 ? 7 : 0;
              break;
            case 3:
              for (; o < 14; ) {
                if (l === 0)
                  return (
                    (this.bitb = n),
                    (this.bitk = o),
                    (e.avail_in = l),
                    (e.total_in += s - e.next_in_index),
                    (e.next_in_index = s),
                    (this.write = h),
                    this.inflate_flush(e, a)
                  );
                (a = 0), l--, (n |= (255 & e.next_in[s++]) << o), (o += 8);
              }
              if (((D = i = 16383 & n), (31 & i) > 29 || ((i >> 5) & 31) > 29))
                return (
                  (this.mode = 9),
                  (e.msg = "too many length or distance symbols"),
                  (a = -3),
                  (this.bitb = n),
                  (this.bitk = o),
                  (e.avail_in = l),
                  (e.total_in += s - e.next_in_index),
                  (e.next_in_index = s),
                  (this.write = h),
                  this.inflate_flush(e, a)
                );
              for (i = 258 + (31 & i) + ((i >> 5) & 31), m = 0; m < i; m++)
                B[m] = 0;
              for (
                n >>>= 14, o -= 14, k = 0, this.mode = 4;
                k < 4 + (D >>> 10);
              ) {
                for (; o < 3; ) {
                  if (l === 0)
                    return (
                      (this.bitb = n),
                      (this.bitk = o),
                      (e.avail_in = l),
                      (e.total_in += s - e.next_in_index),
                      (e.next_in_index = s),
                      (this.write = h),
                      this.inflate_flush(e, a)
                    );
                  (a = 0), l--, (n |= (255 & e.next_in[s++]) << o), (o += 8);
                }
                (B[border[k++]] = 7 & n), (n >>>= 3), (o -= 3);
              }
              for (; k < 19; ) B[border[k++]] = 0;
              if (
                ((T[0] = 7), (i = inflate_trees_bits(B, T, d, b, e)), i !== 0)
              )
                return (
                  (a = i) === -3 && (this.mode = 9),
                  (this.bitb = n),
                  (this.bitk = o),
                  (e.avail_in = l),
                  (e.total_in += s - e.next_in_index),
                  (e.next_in_index = s),
                  (this.write = h),
                  this.inflate_flush(e, a)
                );
              for (
                k = 0, this.mode = 5;
                (i = D), !(k >= 258 + (31 & i) + ((i >> 5) & 31));
              ) {
                let S, p;
                for (i = T[0]; o < i; ) {
                  if (l === 0)
                    return (
                      (this.bitb = n),
                      (this.bitk = o),
                      (e.avail_in = l),
                      (e.total_in += s - e.next_in_index),
                      (e.next_in_index = s),
                      (this.write = h),
                      this.inflate_flush(e, a)
                    );
                  (a = 0), l--, (n |= (255 & e.next_in[s++]) << o), (o += 8);
                }
                if (
                  ((i = b[3 * (d[0] + (n & inflate_mask[i])) + 1]),
                  (p = b[3 * (d[0] + (n & inflate_mask[i])) + 2]),
                  p < 16)
                )
                  (n >>>= i), (o -= i), (B[k++] = p);
                else {
                  for (
                    m = p === 18 ? 7 : p - 14, S = p === 18 ? 11 : 3;
                    o < i + m;
                  ) {
                    if (l === 0)
                      return (
                        (this.bitb = n),
                        (this.bitk = o),
                        (e.avail_in = l),
                        (e.total_in += s - e.next_in_index),
                        (e.next_in_index = s),
                        (this.write = h),
                        this.inflate_flush(e, a)
                      );
                    (a = 0), l--, (n |= (255 & e.next_in[s++]) << o), (o += 8);
                  }
                  if (
                    ((n >>>= i),
                    (o -= i),
                    (S += n & inflate_mask[m]),
                    (n >>>= m),
                    (o -= m),
                    (m = k),
                    (i = D),
                    m + S > 258 + (31 & i) + ((i >> 5) & 31) ||
                      (p === 16 && m < 1))
                  )
                    return (
                      (this.mode = 9),
                      (e.msg = "invalid bit length repeat"),
                      (a = -3),
                      (this.bitb = n),
                      (this.bitk = o),
                      (e.avail_in = l),
                      (e.total_in += s - e.next_in_index),
                      (e.next_in_index = s),
                      (this.write = h),
                      this.inflate_flush(e, a)
                    );
                  p = p === 16 ? B[m - 1] : 0;
                  do B[m++] = p;
                  while (--S != 0);
                  k = m;
                }
              }
              d[0] = -1;
              let P = [9],
                E = [6],
                C = [0],
                y = [0];
              if (
                ((i = inflate_trees_dynamic(
                  257 + (31 & i),
                  1 + ((i >> 5) & 31),
                  B,
                  P,
                  E,
                  C,
                  y,
                  b,
                  e,
                )),
                i !== 0)
              )
                return (
                  i === -3 && (this.mode = 9),
                  (a = i),
                  (this.bitb = n),
                  (this.bitk = o),
                  (e.avail_in = l),
                  (e.total_in += s - e.next_in_index),
                  (e.next_in_index = s),
                  (this.write = h),
                  this.inflate_flush(e, a)
                );
              _.init(P[0], E[0], b, C[0], b, y[0]), (this.mode = 6);
            case 6:
              if (
                ((this.bitb = n),
                (this.bitk = o),
                (e.avail_in = l),
                (e.total_in += s - e.next_in_index),
                (e.next_in_index = s),
                (this.write = h),
                (a = _.proc(this, e, a)) !== 1)
              )
                return this.inflate_flush(e, a);
              if (
                ((a = 0),
                (s = e.next_in_index),
                (l = e.avail_in),
                (n = this.bitb),
                (o = this.bitk),
                (h = this.write),
                (f = h < this.read ? this.read - h - 1 : this.end - h),
                this.last === 0)
              ) {
                this.mode = 0;
                break;
              }
              this.mode = 7;
            case 7:
              if (
                ((this.write = h),
                (a = this.inflate_flush(e, a)),
                (h = this.write),
                (f = h < this.read ? this.read - h - 1 : this.end - h),
                this.read !== this.write)
              )
                return (
                  (this.bitb = n),
                  (this.bitk = o),
                  (e.avail_in = l),
                  (e.total_in += s - e.next_in_index),
                  (e.next_in_index = s),
                  (this.write = h),
                  this.inflate_flush(e, a)
                );
              this.mode = 8;
            case 8:
              return (
                (a = 1),
                (this.bitb = n),
                (this.bitk = o),
                (e.avail_in = l),
                (e.total_in += s - e.next_in_index),
                (e.next_in_index = s),
                (this.write = h),
                this.inflate_flush(e, a)
              );
            case 9:
              return (
                (a = -3),
                (this.bitb = n),
                (this.bitk = o),
                (e.avail_in = l),
                (e.total_in += s - e.next_in_index),
                (e.next_in_index = s),
                (this.write = h),
                this.inflate_flush(e, a)
              );
            default:
              return (
                (a = -2),
                (this.bitb = n),
                (this.bitk = o),
                (e.avail_in = l),
                (e.total_in += s - e.next_in_index),
                (e.next_in_index = s),
                (this.write = h),
                this.inflate_flush(e, a)
              );
          }
      }
      set_dictionary(e, a, i) {
        this.window.set(e.subarray(a, a + i), 0), (this.read = this.write = i);
      }
    }
    class Inflate {
      constructor(e) {
        (this.isGZip = !1),
          (this.method = 0),
          (this.gflags = 0),
          (this.name = ""),
          (this.mtime = 0),
          (this.xlen = 0),
          (this.dictChecksum = 0),
          (this.fullChecksum = 0),
          (this.inflatedSize = 0),
          (this.wbits = 0),
          (this.wbits = 15),
          (this.blocks = new InfBlocks(1 << this.wbits)),
          (this.mode = e ? 22 : 0);
      }
      get isComplete() {
        let { blocks: e } = this,
          a = (e.mode === 0 || e.mode === 8) && e.bitb === 0 && e.bitk === 0;
        return this.mode === 31 && a;
      }
      get fileName() {
        return this.name;
      }
      get modDate() {
        if (this.mtime !== 0) return new Date(1e3 * this.mtime);
      }
      get checksum() {
        return this.fullChecksum;
      }
      get fullSize() {
        return this.inflatedSize;
      }
      get containerFormat() {
        return this.isGZip ? 2 : this.method === 0 ? 0 : 1;
      }
      inflate(e) {
        let a;
        if (!e || !e.next_in) return -2;
        let i = -5;
        for (;;)
          switch (this.mode) {
            case 0:
              if (e.avail_in === 0) return i;
              if (((a = e.next_in[e.next_in_index]), a !== GZIP_ID1)) {
                this.mode = 2;
                break;
              }
              (this.mode = 1),
                (i = 0),
                e.avail_in--,
                e.total_in++,
                e.next_in_index++;
            case 1:
              if (e.avail_in === 0) return i;
              if (
                ((i = 0),
                e.avail_in--,
                e.total_in++,
                (a = e.next_in[e.next_in_index++]),
                a !== GZIP_ID2)
              ) {
                (this.mode = 32), (e.msg = "invalid gzip id");
                break;
              }
              (this.isGZip = !0), (this.mode = 2);
            case 2:
              if (e.avail_in === 0) return i;
              if (
                ((i = 0),
                e.avail_in--,
                e.total_in++,
                (this.method = e.next_in[e.next_in_index++]),
                (15 & this.method) !== Z_DEFLATED)
              ) {
                (this.mode = 32), (e.msg = "unknown compression method");
                break;
              }
              if (8 + (this.method >> 4) > this.wbits) {
                (this.mode = 32), (e.msg = "invalid window size");
                break;
              }
              this.mode = 3;
            case 3:
              if (e.avail_in === 0) return i;
              if (
                ((i = 0),
                e.avail_in--,
                e.total_in++,
                (a = 255 & e.next_in[e.next_in_index++]),
                this.isGZip)
              ) {
                (this.gflags = a), (this.mode = 9);
                break;
              }
              if (((this.method << 8) + a) % 31 != 0) {
                (this.mode = 32), (e.msg = "incorrect header check");
                break;
              }
              if (!(a & PRESET_DICT)) {
                this.mode = 22;
                break;
              }
              this.mode = 4;
            case 4:
              if (e.avail_in === 0) return i;
              (i = 0),
                e.avail_in--,
                e.total_in++,
                (this.dictChecksum =
                  ((255 & e.next_in[e.next_in_index++]) << 24) & 4278190080),
                (this.mode = 5);
            case 5:
              if (e.avail_in === 0) return i;
              (i = 0),
                e.avail_in--,
                e.total_in++,
                (this.dictChecksum |=
                  ((255 & e.next_in[e.next_in_index++]) << 16) & 16711680),
                (this.mode = 6);
            case 6:
              if (e.avail_in === 0) return i;
              (i = 0),
                e.avail_in--,
                e.total_in++,
                (this.dictChecksum |=
                  ((255 & e.next_in[e.next_in_index++]) << 8) & 65280),
                (this.mode = 7);
            case 7:
              return e.avail_in === 0
                ? i
                : ((i = 0),
                  e.avail_in--,
                  e.total_in++,
                  (this.dictChecksum |= 255 & e.next_in[e.next_in_index++]),
                  (this.mode = 8),
                  2);
            case 8:
              return (this.mode = 32), (e.msg = "need dictionary"), -2;
            case 9:
            case 10:
            case 11:
            case 12:
              if (e.avail_in === 0) return i;
              if (
                ((i = 0),
                e.avail_in--,
                e.total_in++,
                (a = 255 & e.next_in[e.next_in_index++]),
                (this.mtime = (this.mtime >>> 8) | (a << 24)),
                this.mode !== 12)
              ) {
                this.mode++;
                break;
              }
              this.mode = 13;
            case 13:
            case 14:
            case 20:
            case 21:
              if (e.avail_in === 0) return i;
              (i = 0),
                e.avail_in--,
                e.total_in++,
                e.next_in_index++,
                this.mode === 14
                  ? 4 & this.gflags
                    ? (this.mode = 15)
                    : 8 & this.gflags
                      ? (this.mode = 18)
                      : 16 & this.gflags
                        ? (this.mode = 19)
                        : 2 & this.gflags
                          ? (this.mode = 20)
                          : (this.mode = 22)
                  : this.mode++;
              break;
            case 15:
            case 16:
              if (e.avail_in === 0) return i;
              if (
                ((i = 0),
                e.avail_in--,
                e.total_in++,
                (a = 255 & e.next_in[e.next_in_index++]),
                (this.xlen = (this.xlen >>> 8) | (a << 24)),
                this.mode === 15)
              )
                break;
              this.xlen = this.xlen >>> 16;
            case 17:
              if (e.avail_in === 0) return i;
              (i = 0),
                e.avail_in--,
                e.total_in++,
                e.next_in_index++,
                this.xlen--,
                this.xlen === 0 &&
                  (8 & this.gflags
                    ? (this.mode = 18)
                    : 16 & this.gflags
                      ? (this.mode = 19)
                      : 2 & this.gflags
                        ? (this.mode = 20)
                        : (this.mode = 22));
              break;
            case 18:
            case 19:
              if (e.avail_in === 0) return i;
              (i = 0),
                e.avail_in--,
                e.total_in++,
                (a = 255 & e.next_in[e.next_in_index++]),
                a !== 0
                  ? this.mode === 18 && (this.name += String.fromCharCode(a))
                  : this.mode !== 19 && 16 & this.gflags
                    ? (this.mode = 19)
                    : 2 & this.gflags
                      ? (this.mode = 20)
                      : (this.mode = 22);
              break;
            case 22:
              if (((i = this.blocks.proc(e, i)), i === -3)) {
                this.mode = 32;
                break;
              }
              if (i !== 1) return i;
              if (((i = 0), this.blocks.reset(), this.method === 0)) {
                this.mode = 31;
                break;
              }
              this.mode = 23;
            case 23:
            case 24:
            case 25:
            case 26:
              if (e.avail_in === 0) return i;
              (i = 0),
                e.avail_in--,
                e.total_in++,
                (a = 255 & e.next_in[e.next_in_index++]),
                this.isGZip
                  ? (this.fullChecksum = (this.fullChecksum >>> 8) | (a << 24))
                  : (this.fullChecksum = (this.fullChecksum << 8) | a),
                this.mode++,
                this.mode !== 27 || this.isGZip || (this.mode = 31);
              break;
            case 27:
            case 28:
            case 29:
            case 30:
              if (e.avail_in === 0) return i;
              (i = 0),
                e.avail_in--,
                e.total_in++,
                (a = 255 & e.next_in[e.next_in_index++]),
                (this.inflatedSize = (this.inflatedSize >>> 8) | (a << 24)),
                this.mode++;
              break;
            case 31:
              return 1;
            case 32:
              return -3;
            default:
              return -2;
          }
      }
      inflateSetDictionary(e) {
        if (this.mode !== 8) return -2;
        let a = u8ArrayFromBufferSource(e);
        if (!a) return -3;
        let i = 0,
          n = a.byteLength;
        return (
          n >= 1 << this.wbits &&
            ((n = (1 << this.wbits) - 1), (i = a.byteLength - n)),
          adler32(a) !== this.dictChecksum
            ? -3
            : (this.blocks.set_dictionary(a, i, n), (this.mode = 22), 0)
        );
      }
    }
    class Inflater {
      constructor(e) {
        let a = e?.raw;
        if (a !== void 0 && a !== !0 && a !== !1)
          throw new TypeError("options.raw must be undefined or true or false");
        let i = a !== void 0 && a,
          n = e?.dictionary;
        if (n !== void 0) {
          if (i)
            throw new RangeError(
              "options.dictionary cannot be set when options.raw is true",
            );
          if (u8ArrayFromBufferSource(n) === void 0)
            throw new TypeError(
              "options.dictionary must be undefined or a buffer or a buffer view",
            );
          this.customDict = n;
        }
        (this.inflate = new Inflate(i)), (this.z = new ZStream());
      }
      append(e) {
        let a = u8ArrayFromBufferSource(e);
        if (!(a instanceof Uint8Array))
          throw new TypeError("data must be an ArrayBuffer or buffer view");
        if (a.length === 0) return [];
        let { inflate: i, z: n } = this,
          o = [],
          s = !1;
        n.append(a);
        do {
          (n.next_out_index = 0),
            (n.avail_out = OUTPUT_BUFSIZE),
            n.avail_in !== 0 || s || ((n.next_in_index = 0), (s = !0));
          let l = i.inflate(n);
          if (s && l === -5) {
            if (n.avail_in !== 0) throw new Error("inflate error: bad input");
          } else if (l === 2) {
            if (!this.customDict)
              throw new Error("Custom dictionary required for this data");
            if (i.inflateSetDictionary(this.customDict) !== 0)
              throw new Error("Custom dictionary is not valid for this data");
          } else if (l !== 0 && l !== 1)
            throw new Error("inflate error: " + n.msg);
          if ((s || l === 1) && n.avail_in === a.length)
            throw new Error("inflate error: bad input data");
          if (n.next_out_index) {
            let h = new Uint8Array(n.next_out.subarray(0, n.next_out_index)),
              f = i.containerFormat === 2;
            this.checksum === void 0 && (this.checksum = f ? 0 : 1),
              (this.checksum = f
                ? crc32(h, this.checksum)
                : adler32(h, this.checksum)),
              o.push(h);
          }
        } while (n.avail_in > 0 || n.avail_out === 0);
        return o;
      }
      finish() {
        let e = this.inflate.checksum,
          a = this.inflate.fullSize,
          i = this.inflate.isComplete,
          n =
            e === 0 ? "unchecked" : e === this.checksum ? "match" : "mismatch",
          o =
            a === 0
              ? "unchecked"
              : a === this.z.total_out
                ? "match"
                : "mismatch";
        return {
          success: i && n !== "mismatch" && o !== "mismatch",
          complete: i,
          checksum: n,
          fileSize: o,
          fileName: this.inflate.fileName,
          modDate: this.inflate.modDate,
        };
      }
    }
    let D_CODES = 30,
      BL_CODES = 19,
      LENGTH_CODES = 29,
      LITERALS = 256,
      L_CODES = LITERALS + 1 + LENGTH_CODES,
      HEAP_SIZE = 2 * L_CODES + 1,
      MAX_BL_BITS = 7,
      _dist_code = [
        0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8,
        9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
        11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
        12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13,
        13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13,
        13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14,
        14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
        14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
        14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
        14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
        15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
        15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
        15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17,
        18, 18, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22,
        22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
        25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26,
        26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26,
        26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27,
        27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28,
        28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
        28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
        28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
        28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,
        29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,
        29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,
        29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,
      ];
    class Tree {
      constructor(e, a) {
        (this.dyn_tree = e), (this.stat_desc = a), (this.max_code = 0);
      }
      gen_bitlen(e) {
        var a,
          i,
          n,
          o,
          s,
          l,
          h = this.dyn_tree,
          f = this.stat_desc.static_tree,
          m = this.stat_desc.extra_bits,
          w = this.stat_desc.extra_base,
          D = this.stat_desc.max_length,
          k = 0;
        for (o = 0; o <= 15; o++) e.bl_count[o] = 0;
        for (
          h[2 * e.heap[e.heap_max] + 1] = 0, a = e.heap_max + 1;
          a < HEAP_SIZE;
          a++
        )
          (o = h[2 * h[2 * (i = e.heap[a]) + 1] + 1] + 1) > D && ((o = D), k++),
            (h[2 * i + 1] = o),
            i > this.max_code ||
              (e.bl_count[o]++,
              (s = 0),
              i >= w && (s = m[i - w]),
              (l = h[2 * i]),
              (e.opt_len += l * (o + s)),
              f && (e.static_len += l * (f[2 * i + 1] + s)));
        if (k !== 0) {
          do {
            for (o = D - 1; e.bl_count[o] === 0; ) o--;
            e.bl_count[o]--,
              (e.bl_count[o + 1] += 2),
              e.bl_count[D]--,
              (k -= 2);
          } while (k > 0);
          for (o = D; o !== 0; o--)
            for (i = e.bl_count[o]; i !== 0; )
              (n = e.heap[--a]) > this.max_code ||
                (h[2 * n + 1] != o &&
                  ((e.opt_len += (o - h[2 * n + 1]) * h[2 * n]),
                  (h[2 * n + 1] = o)),
                i--);
        }
      }
      bi_reverse(e, a) {
        let i = 0;
        do (i |= 1 & e), (e >>>= 1), (i <<= 1);
        while (--a > 0);
        return i >>> 1;
      }
      gen_codes(e, a, i) {
        let n = new Uint16Array(16),
          o = 0;
        for (let s = 1; s <= 15; s++) n[s] = o = (o + i[s - 1]) << 1;
        for (let s = 0; s <= a; s++) {
          let l = e[2 * s + 1];
          l !== 0 && (e[2 * s] = this.bi_reverse(n[l]++, l));
        }
      }
      build_tree(e) {
        var a,
          i,
          n,
          o = this.dyn_tree,
          s = this.stat_desc.static_tree,
          l = this.stat_desc.elems,
          h = -1;
        for (e.heap_len = 0, e.heap_max = HEAP_SIZE, a = 0; a < l; a++)
          o[2 * a] !== 0
            ? ((e.heap[++e.heap_len] = h = a), (e.depth[a] = 0))
            : (o[2 * a + 1] = 0);
        for (; e.heap_len < 2; )
          (o[2 * (n = e.heap[++e.heap_len] = h < 2 ? ++h : 0)] = 1),
            (e.depth[n] = 0),
            e.opt_len--,
            s && (e.static_len -= s[2 * n + 1]);
        for (this.max_code = h, a = Math.floor(e.heap_len / 2); a >= 1; a--)
          e.pqdownheap(o, a);
        n = l;
        do
          (a = e.heap[1]),
            (e.heap[1] = e.heap[e.heap_len--]),
            e.pqdownheap(o, 1),
            (i = e.heap[1]),
            (e.heap[--e.heap_max] = a),
            (e.heap[--e.heap_max] = i),
            (o[2 * n] = o[2 * a] + o[2 * i]),
            (e.depth[n] = Math.max(e.depth[a], e.depth[i]) + 1),
            (o[2 * a + 1] = o[2 * i + 1] = n),
            (e.heap[1] = n++),
            e.pqdownheap(o, 1);
        while (e.heap_len >= 2);
        (e.heap[--e.heap_max] = e.heap[1]),
          this.gen_bitlen(e),
          this.gen_codes(o, this.max_code, e.bl_count);
      }
      static d_code(e) {
        return e < 256 ? _dist_code[e] : _dist_code[256 + (e >>> 7)];
      }
    }
    (Tree._length_code = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13,
      13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16,
      16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19,
      19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
      20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
      21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
      22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24,
      24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
      24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25,
      25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
      25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26,
      26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26,
      26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27,
      27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27,
      28,
    ]),
      (Tree.base_length = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56,
        64, 80, 96, 112, 128, 160, 192, 224, 0,
      ]),
      (Tree.base_dist = [
        0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384,
        512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576,
      ]),
      (Tree.extra_lbits = [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0,
      ]),
      (Tree.extra_dbits = [
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13,
      ]),
      (Tree.extra_blbits = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
      ]),
      (Tree.bl_order = [
        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
      ]);
    class StaticTree {
      constructor(e, a, i, n, o) {
        (this.static_tree = e),
          (this.extra_bits = a),
          (this.extra_base = i),
          (this.elems = n),
          (this.max_length = o);
      }
    }
    (StaticTree.static_ltree = new Uint16Array([
      12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156,
      8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8, 194,
      8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178,
      8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8, 106, 8,
      234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8,
      134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22, 8, 150, 8, 86,
      8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8,
      46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222, 8, 62, 8, 190,
      8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225,
      8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113, 8, 241, 8, 9, 8, 137,
      8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8,
      217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8, 69, 8, 197, 8, 37, 8,
      165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117,
      8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8, 173, 8, 109, 8, 237, 8,
      29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275,
      9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9, 51, 9, 307, 9, 179, 9,
      435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75,
      9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9, 427, 9, 107, 9, 363, 9,
      235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475,
      9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9,
      263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167,
      9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9,
      87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375,
      9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9,
      463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31,
      9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9,
      191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7,
      16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88, 7, 56,
      7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8,
      131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8,
    ])),
      (StaticTree.static_dtree = new Uint16Array([
        0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5,
        26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5,
        13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5,
      ])),
      (StaticTree.static_l_desc = new StaticTree(
        StaticTree.static_ltree,
        Tree.extra_lbits,
        LITERALS + 1,
        L_CODES,
        15,
      )),
      (StaticTree.static_d_desc = new StaticTree(
        StaticTree.static_dtree,
        Tree.extra_dbits,
        0,
        D_CODES,
        15,
      )),
      (StaticTree.static_bl_desc = new StaticTree(
        null,
        Tree.extra_blbits,
        0,
        BL_CODES,
        MAX_BL_BITS,
      ));
    let makeConfig = (t, e, a, i, n) => ({
        good_length: t,
        max_lazy: e,
        nice_length: a,
        max_chain: i,
        func: n,
      }),
      config_table = [
        makeConfig(0, 0, 0, 0, 0),
        makeConfig(4, 4, 8, 4, 1),
        makeConfig(4, 5, 16, 8, 1),
        makeConfig(4, 6, 32, 32, 1),
        makeConfig(4, 4, 16, 16, 2),
        makeConfig(8, 16, 32, 32, 2),
        makeConfig(8, 16, 128, 128, 2),
        makeConfig(8, 32, 128, 256, 2),
        makeConfig(32, 128, 258, 1024, 2),
        makeConfig(32, 258, 258, 4096, 2),
      ];
    function smaller(t, e, a, i) {
      let n = t[2 * e],
        o = t[2 * a];
      return n < o || (n == o && i[e] <= i[a]);
    }
    let END_BLOCK = 256,
      REP_3_6 = 16,
      REPZ_3_10 = 17,
      REPZ_11_138 = 18,
      STORED_BLOCK = 0,
      STATIC_TREES = 1,
      DYN_TREES = 2,
      MIN_MATCH = 3,
      MAX_MATCH = 258,
      MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1,
      hash_bits = 15,
      hash_size = 1 << hash_bits,
      hash_mask = hash_size - 1,
      hash_shift = Math.floor((hash_bits + MIN_MATCH - 1) / MIN_MATCH),
      lit_bufsize = 16384,
      pending_buf_size = 4 * lit_bufsize,
      d_buf = Math.floor(lit_bufsize / 2),
      l_buf = 3 * lit_bufsize,
      window_size = 65536;
    class Deflate {
      constructor(e, a = 6, i = 0) {
        if (
          ((this.status = 1),
          (this.pending_buf = new Uint8Array(pending_buf_size)),
          (this.pending = 0),
          (this.pending_out = 0),
          (this.last_flush = 0),
          (this.window = new Uint8Array(window_size)),
          (this.prev = new Uint16Array(32768)),
          (this.head = new Uint16Array(hash_size)),
          (this.ins_h = 0),
          (this.block_start = 0),
          (this.match_length = MIN_MATCH - 1),
          (this.match_available = !1),
          (this.strstart = 0),
          (this.match_start = 0),
          (this.lookahead = 0),
          (this.prev_length = MIN_MATCH - 1),
          (this.dyn_ltree = new Uint16Array(2 * HEAP_SIZE)),
          (this.dyn_dtree = new Uint16Array(2 * (2 * D_CODES + 1))),
          (this.bl_tree = new Uint16Array(2 * (2 * BL_CODES + 1))),
          (this.l_desc = new Tree(this.dyn_ltree, StaticTree.static_l_desc)),
          (this.d_desc = new Tree(this.dyn_dtree, StaticTree.static_d_desc)),
          (this.bl_desc = new Tree(this.bl_tree, StaticTree.static_bl_desc)),
          (this.depth = new Uint16Array(2 * L_CODES + 1)),
          (this.last_lit = 0),
          (this.matches = 0),
          (this.opt_len = 0),
          (this.static_len = 0),
          (this.last_eob_len = 8),
          (this.bi_buf = 0),
          (this.bi_valid = 0),
          (this.bl_count = new Uint16Array(16)),
          (this.heap = new Uint16Array(2 * L_CODES + 1)),
          (this.heap_len = 0),
          (this.heap_max = HEAP_SIZE),
          a < 0 || a > 9 || i < 0 || i > 2)
        )
          throw RangeError("level or strategy is out of range");
        (this.strm = e),
          (this.level = a),
          (this.strategy = i),
          (e.msg = ""),
          (e.total_in = e.total_out = 0),
          this.init_block();
        for (let n = 0; n < hash_size; ++n) this.head[n] = 0;
        (this.max_lazy_match = config_table[a].max_lazy),
          (this.good_match = config_table[a].good_length),
          (this.nice_match = config_table[a].nice_length),
          (this.max_chain_length = config_table[a].max_chain);
      }
      init_block() {
        for (let e = 0; e < L_CODES; e++) this.dyn_ltree[2 * e] = 0;
        for (let e = 0; e < D_CODES; e++) this.dyn_dtree[2 * e] = 0;
        for (let e = 0; e < BL_CODES; e++) this.bl_tree[2 * e] = 0;
        (this.dyn_ltree[2 * END_BLOCK] = 1),
          (this.opt_len = this.static_len = 0),
          (this.last_lit = this.matches = 0);
      }
      pqdownheap(e, a) {
        let i = this.heap,
          n = i[a],
          o = a << 1;
        for (
          ;
          o <= this.heap_len &&
          (o < this.heap_len && smaller(e, i[o + 1], i[o], this.depth) && o++,
          !smaller(e, n, i[o], this.depth));
        )
          (i[a] = i[o]), (a = o), (o <<= 1);
        i[a] = n;
      }
      scan_tree(e, a) {
        var i,
          n = -1,
          o = e[1],
          s = 0,
          l = 7,
          h = 4;
        o === 0 && ((l = 138), (h = 3)), (e[2 * (a + 1) + 1] = 65535);
        for (let f = 0; f <= a; f++)
          (i = o),
            (o = e[2 * (f + 1) + 1]),
            (++s < l && i == o) ||
              (s < h
                ? (this.bl_tree[2 * i] += s)
                : i !== 0
                  ? (i != n && this.bl_tree[2 * i]++,
                    this.bl_tree[2 * REP_3_6]++)
                  : s <= 10
                    ? this.bl_tree[2 * REPZ_3_10]++
                    : this.bl_tree[2 * REPZ_11_138]++,
              (s = 0),
              (n = i),
              o === 0
                ? ((l = 138), (h = 3))
                : i == o
                  ? ((l = 6), (h = 3))
                  : ((l = 7), (h = 4)));
      }
      build_bl_tree() {
        let e;
        for (
          this.scan_tree(this.dyn_ltree, this.l_desc.max_code),
            this.scan_tree(this.dyn_dtree, this.d_desc.max_code),
            this.bl_desc.build_tree(this),
            e = BL_CODES - 1;
          e >= 3 && this.bl_tree[2 * Tree.bl_order[e] + 1] === 0;
          e--
        );
        return (this.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
      }
      put_short(e) {
        (this.pending_buf[this.pending++] = 255 & e),
          (this.pending_buf[this.pending++] = (e >>> 8) & 255);
      }
      send_bits(e, a) {
        if (this.bi_valid > 16 - a) {
          this.bi_buf |= (e << this.bi_valid) & 65535;
          let i = this.pending;
          (this.pending_buf[i] = this.bi_buf),
            (this.pending_buf[i + 1] = this.bi_buf >>> 8),
            (this.pending = i + 2),
            (this.bi_buf = e >>> (16 - this.bi_valid)),
            (this.bi_valid += a - 16);
        } else
          (this.bi_buf |= (e << this.bi_valid) & 65535), (this.bi_valid += a);
      }
      send_code(e, a) {
        let i = 2 * e;
        this.send_bits(65535 & a[i], 65535 & a[i + 1]);
      }
      send_tree(e, a) {
        var i,
          n = -1,
          o = e[1],
          s = 0,
          l = 7,
          h = 4;
        o === 0 && ((l = 138), (h = 3));
        for (let f = 0; f <= a; f++)
          if (((i = o), (o = e[2 * (f + 1) + 1]), !(++s < l && i == o))) {
            if (s < h)
              do this.send_code(i, this.bl_tree);
              while (--s != 0);
            else
              i !== 0
                ? (i != n && (this.send_code(i, this.bl_tree), s--),
                  this.send_code(REP_3_6, this.bl_tree),
                  this.send_bits(s - 3, 2))
                : s <= 10
                  ? (this.send_code(REPZ_3_10, this.bl_tree),
                    this.send_bits(s - 3, 3))
                  : (this.send_code(REPZ_11_138, this.bl_tree),
                    this.send_bits(s - 11, 7));
            (s = 0),
              (n = i),
              o === 0
                ? ((l = 138), (h = 3))
                : i == o
                  ? ((l = 6), (h = 3))
                  : ((l = 7), (h = 4));
          }
      }
      send_all_trees(e, a, i) {
        this.send_bits(e - 257, 5),
          this.send_bits(a - 1, 5),
          this.send_bits(i - 4, 4);
        for (let n = 0; n < i; n++)
          this.send_bits(this.bl_tree[2 * Tree.bl_order[n] + 1], 3);
        this.send_tree(this.dyn_ltree, e - 1),
          this.send_tree(this.dyn_dtree, a - 1);
      }
      bi_flush() {
        this.bi_valid === 16
          ? (this.put_short(this.bi_buf),
            (this.bi_buf = 0),
            (this.bi_valid = 0))
          : this.bi_valid >= 8 &&
            ((this.pending_buf[this.pending++] = this.bi_buf),
            (this.bi_buf >>>= 8),
            (this.bi_valid -= 8));
      }
      _tr_align() {
        this.send_bits(STATIC_TREES << 1, 3),
          this.send_code(END_BLOCK, StaticTree.static_ltree),
          this.bi_flush(),
          1 + this.last_eob_len + 10 - this.bi_valid < 9 &&
            (this.send_bits(STATIC_TREES << 1, 3),
            this.send_code(END_BLOCK, StaticTree.static_ltree),
            this.bi_flush()),
          (this.last_eob_len = 7);
      }
      _tr_tally(e, a) {
        if (
          ((this.pending_buf[d_buf + 2 * this.last_lit] = (e >>> 8) & 255),
          (this.pending_buf[d_buf + 2 * this.last_lit + 1] = 255 & e),
          (this.pending_buf[l_buf + this.last_lit] = 255 & a),
          this.last_lit++,
          e === 0
            ? this.dyn_ltree[2 * a]++
            : (this.matches++,
              e--,
              this.dyn_ltree[2 * (Tree._length_code[a] + LITERALS + 1)]++,
              this.dyn_dtree[2 * Tree.d_code(e)]++),
          (8191 & this.last_lit) == 0 && this.level > 2)
        ) {
          let i = 8 * this.last_lit,
            n = this.strstart - this.block_start;
          for (let o = 0; o < D_CODES; o++)
            i += this.dyn_dtree[2 * o] * (5 + Tree.extra_dbits[o]);
          if (
            ((i >>>= 3),
            this.matches < Math.floor(this.last_lit / 2) &&
              i < Math.floor(n / 2))
          )
            return !0;
        }
        return this.last_lit === lit_bufsize - 1;
      }
      compress_block(e, a) {
        let i = 0;
        if (this.last_lit !== 0)
          do {
            let n =
                ((this.pending_buf[d_buf + 2 * i] << 8) & 65280) |
                (255 & this.pending_buf[d_buf + 2 * i + 1]),
              o = 255 & this.pending_buf[l_buf + i];
            if ((i++, n === 0)) this.send_code(o, e);
            else {
              let s = Tree._length_code[o];
              this.send_code(s + LITERALS + 1, e);
              let l = Tree.extra_lbits[s];
              l !== 0 && ((o -= Tree.base_length[s]), this.send_bits(o, l)),
                n--,
                (s = Tree.d_code(n)),
                this.send_code(s, a),
                (l = Tree.extra_dbits[s]),
                l !== 0 && ((n -= Tree.base_dist[s]), this.send_bits(n, l));
            }
          } while (i < this.last_lit);
        this.send_code(END_BLOCK, e),
          (this.last_eob_len = e[2 * END_BLOCK + 1]);
      }
      bi_windup() {
        this.bi_valid > 8
          ? this.put_short(this.bi_buf)
          : this.bi_valid > 0 &&
            (this.pending_buf[this.pending++] = this.bi_buf),
          (this.bi_buf = 0),
          (this.bi_valid = 0);
      }
      copy_block(e, a, i) {
        this.bi_windup(),
          (this.last_eob_len = 8),
          i && (this.put_short(a), this.put_short(~a)),
          this.pending_buf.set(this.window.subarray(e, e + a), this.pending),
          (this.pending += a);
      }
      _tr_stored_block(e, a, i) {
        this.send_bits((STORED_BLOCK << 1) + (i ? 1 : 0), 3),
          this.copy_block(e, a, !0);
      }
      _tr_flush_block(e, a, i) {
        let n,
          o,
          s = 0;
        this.level > 0
          ? (this.l_desc.build_tree(this),
            this.d_desc.build_tree(this),
            (s = this.build_bl_tree()),
            (n = (this.opt_len + 3 + 7) >>> 3),
            (o = (this.static_len + 3 + 7) >>> 3),
            o <= n && (n = o))
          : (n = o = a + 5),
          a + 4 <= n && e !== -1
            ? this._tr_stored_block(e, a, i)
            : o == n
              ? (this.send_bits((STATIC_TREES << 1) + (i ? 1 : 0), 3),
                this.compress_block(
                  StaticTree.static_ltree,
                  StaticTree.static_dtree,
                ))
              : (this.send_bits((DYN_TREES << 1) + (i ? 1 : 0), 3),
                this.send_all_trees(
                  this.l_desc.max_code + 1,
                  this.d_desc.max_code + 1,
                  s + 1,
                ),
                this.compress_block(this.dyn_ltree, this.dyn_dtree)),
          this.init_block(),
          i && this.bi_windup();
      }
      flush_block_only(e) {
        this._tr_flush_block(
          this.block_start >= 0 ? this.block_start : -1,
          this.strstart - this.block_start,
          e,
        ),
          (this.block_start = this.strstart),
          this.strm.flush_pending(this);
      }
      fill_window() {
        do {
          let e = window_size - this.lookahead - this.strstart;
          if (e === 0 && this.strstart === 0 && this.lookahead === 0) e = 32768;
          else if (e === -1) e--;
          else if (this.strstart >= 65536 - MIN_LOOKAHEAD) {
            this.window.set(this.window.subarray(32768, 65536), 0),
              (this.match_start -= 32768),
              (this.strstart -= 32768),
              (this.block_start -= 32768);
            let i = hash_size,
              n = i;
            do {
              let o = 65535 & this.head[--n];
              this.head[n] = o >= 32768 ? o - 32768 : 0;
            } while (--i != 0);
            (i = 32768), (n = i);
            do {
              let o = 65535 & this.prev[--n];
              this.prev[n] = o >= 32768 ? o - 32768 : 0;
            } while (--i != 0);
            e += 32768;
          }
          if (this.strm.avail_in === 0) return;
          let a = this.strm.read_into_buf(
            this.window,
            this.strstart + this.lookahead,
            e,
          );
          (this.lookahead += a),
            this.lookahead >= MIN_MATCH &&
              ((this.ins_h = 255 & this.window[this.strstart]),
              (this.ins_h =
                ((this.ins_h << hash_shift) ^
                  (255 & this.window[this.strstart + 1])) &
                hash_mask));
        } while (this.lookahead < MIN_LOOKAHEAD && this.strm.avail_in !== 0);
      }
      deflate_stored(e) {
        let a = 65535;
        for (a > pending_buf_size - 5 && (a = pending_buf_size - 5); ; ) {
          if (this.lookahead <= 1) {
            if ((this.fill_window(), this.lookahead === 0 && e === 0)) return 0;
            if (this.lookahead === 0) break;
          }
          (this.strstart += this.lookahead), (this.lookahead = 0);
          let i = this.block_start + a;
          if (
            ((this.strstart === 0 || this.strstart >= i) &&
              ((this.lookahead = this.strstart - i),
              (this.strstart = i),
              this.flush_block_only(!1),
              this.strm.avail_out === 0)) ||
            (this.strstart - this.block_start >= 32768 - MIN_LOOKAHEAD &&
              (this.flush_block_only(!1), this.strm.avail_out === 0))
          )
            return 0;
        }
        return (
          this.flush_block_only(e === 4),
          this.strm.avail_out === 0 ? (e === 4 ? 2 : 0) : e === 4 ? 3 : 1
        );
      }
      longest_match(e) {
        let a = this.max_chain_length,
          i = this.strstart,
          n = this.prev_length,
          o =
            this.strstart > 32768 - MIN_LOOKAHEAD
              ? this.strstart - (32768 - MIN_LOOKAHEAD)
              : 0,
          s = this.nice_match,
          l = this.window,
          h = this.strstart + MAX_MATCH,
          f = l[i + n - 1],
          m = l[i + n],
          w = l[i],
          D = l[i + 1];
        this.prev_length >= this.good_match && (a >>= 2),
          s > this.lookahead && (s = this.lookahead);
        do {
          let k = e,
            B = !0;
          for (;;) {
            if (((k = e), l[k + n] !== m || l[k + n - 1] !== f)) {
              if ((e = this.prev[32767 & e]) > o && --a != 0) continue;
              B = !1;
            }
            break;
          }
          if (!B) break;
          if (l[k] !== w || l[k + 1] !== D) continue;
          (i += 2), (k += 2);
          do {
            let d =
              ((l[i] << 24) | (l[i + 1] << 16) | (l[i + 2] << 8) | l[i + 3]) ^
              ((l[k] << 24) | (l[k + 1] << 16) | (l[k + 2] << 8) | l[k + 3]);
            if (d) {
              let _ = Math.clz32(d) >> 3;
              (i += _), (k += _);
              break;
            }
            (i += 4), (k += 4);
          } while (i < h);
          i > h && (i = h);
          let T = MAX_MATCH - (h - i);
          if (((i = h - MAX_MATCH), T > n)) {
            if (((this.match_start = e), (n = T), T >= s)) break;
            (f = l[i + n - 1]), (m = l[i + n]);
          }
        } while ((e = this.prev[32767 & e]) > o && --a != 0);
        return n <= this.lookahead ? n : this.lookahead;
      }
      deflate_fast(e) {
        let a,
          i = 0;
        for (;;) {
          if (this.lookahead < MIN_LOOKAHEAD) {
            if ((this.fill_window(), this.lookahead < MIN_LOOKAHEAD && e === 0))
              return 0;
            if (this.lookahead === 0) break;
          }
          if (
            (this.lookahead >= MIN_MATCH &&
              ((this.ins_h =
                ((this.ins_h << hash_shift) ^
                  (255 & this.window[this.strstart + (MIN_MATCH - 1)])) &
                hash_mask),
              (i = 65535 & this.head[this.ins_h]),
              (this.prev[32767 & this.strstart] = this.head[this.ins_h]),
              (this.head[this.ins_h] = this.strstart)),
            i !== 0 &&
              ((this.strstart - i) & 65535) <= 32768 - MIN_LOOKAHEAD &&
              this.strategy !== 2 &&
              (this.match_length = this.longest_match(i)),
            this.match_length >= MIN_MATCH)
          )
            if (
              ((a = this._tr_tally(
                this.strstart - this.match_start,
                this.match_length - MIN_MATCH,
              )),
              (this.lookahead -= this.match_length),
              this.match_length <= this.max_lazy_match &&
                this.lookahead >= MIN_MATCH)
            ) {
              this.match_length--;
              do
                this.strstart++,
                  (this.ins_h =
                    ((this.ins_h << hash_shift) ^
                      (255 & this.window[this.strstart + (MIN_MATCH - 1)])) &
                    hash_mask),
                  (i = 65535 & this.head[this.ins_h]),
                  (this.prev[32767 & this.strstart] = this.head[this.ins_h]),
                  (this.head[this.ins_h] = this.strstart);
              while (--this.match_length != 0);
              this.strstart++;
            } else
              (this.strstart += this.match_length),
                (this.match_length = 0),
                (this.ins_h = 255 & this.window[this.strstart]),
                (this.ins_h =
                  ((this.ins_h << hash_shift) ^
                    (255 & this.window[this.strstart + 1])) &
                  hash_mask);
          else
            (a = this._tr_tally(0, 255 & this.window[this.strstart])),
              this.lookahead--,
              this.strstart++;
          if (a && (this.flush_block_only(!1), this.strm.avail_out === 0))
            return 0;
        }
        return (
          this.flush_block_only(e === 4),
          this.strm.avail_out === 0 ? (e === 4 ? 2 : 0) : e === 4 ? 3 : 1
        );
      }
      deflate_slow(e) {
        let a,
          i,
          n,
          o = 0;
        for (;;) {
          if (this.lookahead < MIN_LOOKAHEAD) {
            if ((this.fill_window(), this.lookahead < MIN_LOOKAHEAD && e === 0))
              return 0;
            if (this.lookahead === 0) break;
          }
          if (
            (this.lookahead >= MIN_MATCH &&
              ((this.ins_h =
                ((this.ins_h << hash_shift) ^
                  (255 & this.window[this.strstart + (MIN_MATCH - 1)])) &
                hash_mask),
              (o = 65535 & this.head[this.ins_h]),
              (this.prev[32767 & this.strstart] = this.head[this.ins_h]),
              (this.head[this.ins_h] = this.strstart)),
            (this.prev_length = this.match_length),
            (n = this.match_start),
            (this.match_length = MIN_MATCH - 1),
            o !== 0 &&
              this.prev_length < this.max_lazy_match &&
              ((this.strstart - o) & 65535) <= 32768 - MIN_LOOKAHEAD &&
              (this.strategy !== 2 &&
                (this.match_length = this.longest_match(o)),
              this.match_length <= 5 &&
                (this.strategy === 1 ||
                  (this.match_length === MIN_MATCH &&
                    this.strstart - this.match_start > 4096)) &&
                (this.match_length = MIN_MATCH - 1)),
            this.prev_length >= MIN_MATCH &&
              this.match_length <= this.prev_length)
          ) {
            (i = this.strstart + this.lookahead - MIN_MATCH),
              (a = this._tr_tally(
                this.strstart - 1 - n,
                this.prev_length - MIN_MATCH,
              )),
              (this.lookahead -= this.prev_length - 1),
              (this.prev_length -= 2);
            do
              ++this.strstart <= i &&
                ((this.ins_h =
                  ((this.ins_h << hash_shift) ^
                    (255 & this.window[this.strstart + (MIN_MATCH - 1)])) &
                  hash_mask),
                (o = 65535 & this.head[this.ins_h]),
                (this.prev[32767 & this.strstart] = this.head[this.ins_h]),
                (this.head[this.ins_h] = this.strstart));
            while (--this.prev_length != 0);
            if (
              ((this.match_available = !1),
              (this.match_length = MIN_MATCH - 1),
              this.strstart++,
              a && (this.flush_block_only(!1), this.strm.avail_out === 0))
            )
              return 0;
          } else if (this.match_available) {
            if (
              ((a = this._tr_tally(0, 255 & this.window[this.strstart - 1])),
              a && this.flush_block_only(!1),
              this.strstart++,
              this.lookahead--,
              this.strm.avail_out === 0)
            )
              return 0;
          } else (this.match_available = !0), this.strstart++, this.lookahead--;
        }
        return (
          this.match_available &&
            ((a = this._tr_tally(0, 255 & this.window[this.strstart - 1])),
            (this.match_available = !1)),
          this.flush_block_only(e === 4),
          this.strm.avail_out === 0 ? (e === 4 ? 2 : 0) : e === 4 ? 3 : 1
        );
      }
      deflateSetDictionary(e) {
        let a = e.byteLength,
          i,
          n = a,
          o = 0;
        if (!e || this.status !== 1) return -2;
        if (n < MIN_MATCH) return 0;
        for (
          n > 32768 - MIN_LOOKAHEAD &&
            ((n = 32768 - MIN_LOOKAHEAD), (o = a - n)),
            this.window.set(e.subarray(o, o + n), 0),
            this.strstart = n,
            this.block_start = n,
            this.ins_h = 255 & this.window[0],
            this.ins_h =
              ((this.ins_h << hash_shift) ^ (255 & this.window[1])) & hash_mask,
            i = 0;
          i <= n - MIN_MATCH;
          i++
        )
          (this.ins_h =
            ((this.ins_h << hash_shift) ^
              (255 & this.window[i + (MIN_MATCH - 1)])) &
            hash_mask),
            (this.prev[32767 & i] = this.head[this.ins_h]),
            (this.head[this.ins_h] = i);
        return 0;
      }
      deflate(e) {
        if (e > 4 || e < 0) return -2;
        let { strm: a } = this;
        if (
          !a.next_out ||
          (!a.next_in && a.avail_in !== 0) ||
          (this.status === 3 && e != 4)
        )
          return -2;
        if (a.avail_out === 0) return -5;
        let i = this.last_flush;
        if (
          ((this.last_flush = e),
          this.status === 1 && (this.status = 2),
          this.pending !== 0)
        ) {
          if ((a.flush_pending(this), a.avail_out === 0))
            return (this.last_flush = -1), 0;
        } else if (a.avail_in === 0 && e <= i && e !== 4) return -5;
        if (this.status === 3 && a.avail_in !== 0) return -5;
        if (
          a.avail_in !== 0 ||
          this.lookahead !== 0 ||
          (e !== 0 && this.status !== 3)
        ) {
          let n;
          switch (config_table[this.level].func) {
            case 0:
              n = this.deflate_stored(e);
              break;
            case 1:
              n = this.deflate_fast(e);
              break;
            case 2:
            default:
              n = this.deflate_slow(e);
          }
          if (((n != 2 && n !== 3) || (this.status = 3), n === 0 || n === 2))
            return a.avail_out === 0 && (this.last_flush = -1), 0;
          if (n === 1) {
            if (e === 1) this._tr_align();
            else if ((this._tr_stored_block(0, 0, !1), e === 3))
              for (let o = 0; o < hash_size; o++) this.head[o] = 0;
            if ((a.flush_pending(this), a.avail_out === 0))
              return (this.last_flush = -1), 0;
          }
        }
        return e !== 4 ? 0 : 1;
      }
    }
    class Deflater {
      constructor(e) {
        var a, i;
        (this.checksum = 1), (this.origSize = 0), (this.dictChecksum = 0);
        let n = (a = e?.level) !== null && a !== void 0 ? a : 6,
          o = (i = e?.format) !== null && i !== void 0 ? i : "deflate",
          s = e?.dictionary,
          l = e?.fileName;
        if (typeof n != "number" || n < 1 || n > 9)
          throw new RangeError("level must be between 1 and 9, inclusive");
        if (o !== "gzip" && o !== "raw" && o !== "deflate")
          throw new RangeError(
            "container must be one of `raw`, `deflate`, `gzip`",
          );
        if (l !== void 0 && typeof l != "string")
          throw new TypeError("fileName must be a string");
        if (
          ((this.fileName = l || ""),
          (this.z = new ZStream()),
          (this.deflate = new Deflate(this.z, n, 0)),
          s)
        ) {
          if (o !== "deflate")
            throw new TypeError(
              "Can only provide a dictionary for `deflate` containers.",
            );
          let h = u8ArrayFromBufferSource(s);
          if (!h)
            throw new TypeError(
              "dictionary must be an ArrayBuffer or buffer view",
            );
          (this.dictChecksum = adler32(h)),
            this.deflate.deflateSetDictionary(h);
        }
        (this.format = o), this.format === "gzip" && (this.checksum = 0);
      }
      buildZlibHeader() {
        let e = 2,
          a = 1;
        this.dictChecksum !== 0 && ((e += 4), (a = PRESET_DICT));
        let i = new ArrayBuffer(e),
          n = new DataView(i);
        return (
          n.setUint16(0, 30720 | a),
          this.dictChecksum !== 0 && n.setUint32(2, this.dictChecksum),
          new Uint8Array(i)
        );
      }
      buildGZipHeader() {
        let e = 0,
          a = [];
        this.fileName.length > 0 &&
          ((e |= 8),
          (a = Array.from(this.fileName).map((l) => {
            let h = l.charCodeAt(0);
            return h > 255 ? 95 : h;
          })),
          a.push(0));
        let i = new ArrayBuffer(10 + a.length),
          n = new DataView(i);
        n.setUint16(0, (GZIP_ID1 << 8) | GZIP_ID2),
          n.setUint16(2, (Z_DEFLATED << 8) | e);
        let o = Math.floor(Date.now() / 1e3);
        n.setUint32(4, o, !0), n.setUint16(8, 255);
        let s = new Uint8Array(i);
        return a.length && s.set(a, 10), s;
      }
      buildTrailer() {
        let e = this.format === "gzip",
          a = new ArrayBuffer(e ? 8 : 4),
          i = new DataView(a);
        return (
          i.setUint32(0, this.checksum, e),
          e && i.setUint32(4, this.origSize, !0),
          new Uint8Array(a)
        );
      }
      append(e) {
        let a = [],
          i = u8ArrayFromBufferSource(e);
        if (!(i instanceof Uint8Array))
          throw new TypeError("data must be an ArrayBuffer or buffer view");
        if (!i.length) return a;
        this.format !== "gzip"
          ? (this.checksum = adler32(i, this.checksum))
          : (this.checksum = crc32(i, this.checksum)),
          (this.origSize += i.length);
        let { deflate: n, z: o } = this;
        (o.next_in_index = 0),
          (o.next_in = i),
          (o.avail_in = i.length),
          n.status === 1 &&
            (this.format === "deflate"
              ? a.push(this.buildZlibHeader())
              : this.format === "gzip" && a.push(this.buildGZipHeader()));
        do {
          if (
            ((o.next_out_index = 0),
            (o.avail_out = OUTPUT_BUFSIZE),
            n.deflate(0) !== 0)
          )
            throw new Error("deflating: " + o.msg);
          o.next_out_index &&
            a.push(new Uint8Array(o.next_out.subarray(0, o.next_out_index)));
        } while (o.avail_in > 0 || o.avail_out === 0);
        return a;
      }
      finish() {
        let e = [],
          { deflate: a, z: i } = this;
        if (a.status === 1)
          throw new Error(
            "Cannot call finish before at least 1 call to append",
          );
        do {
          (i.next_out_index = 0), (i.avail_out = OUTPUT_BUFSIZE);
          let n = a.deflate(4);
          if (n !== 1 && n !== 0) throw new Error("deflating: " + i.msg);
          OUTPUT_BUFSIZE - i.avail_out > 0 &&
            e.push(new Uint8Array(i.next_out.subarray(0, i.next_out_index)));
        } while (i.avail_in > 0 || i.avail_out === 0);
        return this.format !== "raw" && e.push(this.buildTrailer()), e;
      }
    }
    let decContext = Symbol("decContext"),
      decTransform$1 = Symbol("decTransform");
    class DecompressionTransformer {
      constructor(e) {
        this.inflater_ = e;
      }
      transform(e, a) {
        if (!(e instanceof ArrayBuffer || ArrayBuffer.isView(e)))
          throw new TypeError("Input data must be a BufferSource");
        let i = this.inflater_.append(e);
        for (let n of i) a.enqueue(n);
      }
      flush(e) {
        let a = this.inflater_.finish();
        if (!a.success)
          throw a.complete
            ? a.checksum === "mismatch"
              ? new Error("Data integrity check failed")
              : a.fileSize === "mismatch"
                ? new Error("Data size check failed")
                : new Error("Decompression error")
            : new Error("Unexpected EOF during decompression");
      }
    }
    class DecompressionStream {
      constructor(e) {
        if (e !== "deflate" && e !== "gzip")
          throw new TypeError("format must be one of `deflate`, `gzip`");
        (this[decContext] = new Inflater()),
          (this[decTransform$1] = new TransformStream(
            new DecompressionTransformer(this[decContext]),
          ));
      }
      get readable() {
        return this[decTransform$1].readable;
      }
      get writable() {
        return this[decTransform$1].writable;
      }
    }
    let comContext = Symbol("comContext"),
      comTransform = Symbol("comTransform");
    class CompressionTransformer {
      constructor(e) {
        this.deflater_ = e;
      }
      transform(e, a) {
        if (!(e instanceof ArrayBuffer || ArrayBuffer.isView(e)))
          throw new TypeError("Input data must be a BufferSource");
        let i = this.deflater_.append(e);
        for (let n of i) a.enqueue(n);
      }
      flush(e) {
        let a = this.deflater_.finish();
        for (let i of a) e.enqueue(i);
      }
    }
    class CompressionStream {
      constructor(e) {
        if (e !== "deflate" && e !== "gzip")
          throw new TypeError("format must be one of `deflate`, `gzip`");
        (this[comContext] = new Deflater({ format: e })),
          (this[comTransform] = new TransformStream(
            new CompressionTransformer(this[comContext]),
          ));
      }
      get readable() {
        return this[comTransform].readable;
      }
      get writable() {
        return this[comTransform].writable;
      }
    }
    function getGlobal() {
      return typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
          ? self
          : typeof window < "u"
            ? window
            : typeof global < "u"
              ? global
              : void 0;
    }
    function getGlobalValue(t) {
      let e = getGlobal(),
        a;
      return e !== void 0 && (a = e[t]), a;
    }
    function getGlobalOrContextualValue(name) {
      let global = getGlobal(),
        value;
      if ((global !== void 0 && (value = global[name]), value === void 0))
        try {
          value = eval(name);
        } catch (t) {}
      return value;
    }
    function hasCompleteStreamsImplementation() {
      let t = getGlobalValue("ReadableStream"),
        e = getGlobalValue("WritableStream"),
        a = getGlobalValue("TransformStream"),
        i = getGlobalValue("ByteLengthQueuingStrategy"),
        n = getGlobalValue("CountQueuingStrategy"),
        o = (s) => typeof s == "function";
      if (!(o(t) && o(e) && o(a) && o(i) && o(n))) return !1;
      try {
        let s = new t({ type: "bytes" }).getReader({ mode: "byob" });
        if (s == null || typeof s != "object") return !1;
      } catch {
        return !1;
      }
      return !0;
    }
    function installStardazedStreams() {
      let t = getGlobal();
      if (!t || hasCompleteStreamsImplementation()) return !1;
      let e = getGlobalOrContextualValue("fetch"),
        a = getGlobalOrContextualValue("Response"),
        i = getGlobalValue("ReadableStream");
      if (e && a) {
        let n = createAdaptedFetch(
            e,
            a,
            i,
            SDReadableStream,
            readableStreamTee,
          ),
          o = createAdaptedResponse(a, i, SDReadableStream, readableStreamTee);
        (t.fetch = n), (t.Response = o);
      }
      return (
        (t.ReadableStream = SDReadableStream),
        (t.WritableStream = WritableStream),
        (t.TransformStream = TransformStream$1),
        (t.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy),
        (t.CountQueuingStrategy = CountQueuingStrategy),
        !0
      );
    }
    function installEncodingStreams(t) {
      let e = getGlobal();
      if (!e) return;
      let a = getGlobalValue("TextDecoderStream");
      (t || typeof a != "function") &&
        (e.TextDecoderStream = TextDecoderStream);
      let i = getGlobalValue("TextEncoderStream");
      (t || typeof i != "function") &&
        (e.TextEncoderStream = TextEncoderStream);
    }
    function installCompressionStreams(t) {
      let e = getGlobal();
      if (!e) return;
      let a = getGlobalValue("CompressionStream");
      (t || typeof a != "function") &&
        (e.CompressionStream = CompressionStream);
      let i = getGlobalValue("DecompressionStream");
      (t || typeof i != "function") &&
        (e.DecompressionStream = DecompressionStream);
    }
    let overwritten = installStardazedStreams();
    installEncodingStreams(overwritten), installCompressionStreams(overwritten);
  })();
});
var Z = Q(H(), 1);

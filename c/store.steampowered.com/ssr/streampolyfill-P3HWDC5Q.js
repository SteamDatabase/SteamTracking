import { _, _ } from "./chunk-XXXXXXXX.js";
var _ = _((exports, module) => {
  "use strict";
  (function () {
    "use strict";
    let state_ = Symbol("state_"),
      storedError_ = Symbol("storedError_");
    function isInteger(_) {
      if (!isFinite(_)) return !1;
      let _ = Math.abs(_);
      return Math.floor(_) === _;
    }
    function isFiniteNonNegativeNumber(_) {
      return !(typeof _ != "number" || !isFinite(_)) && _ >= 0;
    }
    function isAbortSignal(_) {
      if (typeof _ != "object" || _ === null) return !1;
      try {
        return (
          Object.getOwnPropertyDescriptor(
            AbortSignal.prototype,
            "aborted",
          ).get.call(_),
          !0
        );
      } catch {
        return !1;
      }
    }
    function invokeOrNoop(_, _, _) {
      let _ = _[_];
      if (_ !== void 0) return Function.prototype.apply.call(_, _, _);
    }
    function cloneArrayBuffer(_, _, _, _) {
      return _.slice(_, _ + _);
    }
    function transferArrayBuffer(_) {
      return _.slice(0);
    }
    function copyDataBlockBytes(_, _, _, _, _) {
      new Uint8Array(_, _, _).set(new Uint8Array(_, _, _));
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
    function cloneValue(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "boolean":
        case "undefined":
        case "bigint":
          return _;
        case "object": {
          if (objectCloneMemo.has(_)) return objectCloneMemo.get(_);
          if (_ === null) return _;
          if (_ instanceof Date) return new Date(_.valueOf());
          if (_ instanceof RegExp) return new RegExp(_);
          if (supportsSharedArrayBuffer() && _ instanceof SharedArrayBuffer)
            return _;
          if (_ instanceof ArrayBuffer) {
            let _ = cloneArrayBuffer(_, 0, _.byteLength);
            return objectCloneMemo.set(_, _), _;
          }
          if (ArrayBuffer.isView(_)) {
            let _ = cloneValue(_.buffer),
              _;
            return (
              (_ = _ instanceof DataView ? _.byteLength : _.length),
              new _.constructor(_, _.byteOffset, _)
            );
          }
          if (_ instanceof Map) {
            let _ = new Map();
            return (
              objectCloneMemo.set(_, _),
              _.forEach((_, _) => _.set(_, cloneValue(_))),
              _
            );
          }
          if (_ instanceof Set) {
            let _ = new Map();
            return (
              objectCloneMemo.set(_, _),
              _.forEach((_, _) => _.set(_, cloneValue(_))),
              _
            );
          }
          let _ = {};
          objectCloneMemo.set(_, _);
          let _ = Object.getOwnPropertyNames(_);
          for (let _ of _) _[_] = cloneValue(_[_]);
          return _;
        }
        default:
          throw new DOMException(
            "Uncloneable value in stream",
            "DataCloneError",
          );
      }
    }
    function promiseCall(_, _, _) {
      try {
        let _ = Function.prototype.apply.call(_, _, _);
        return Promise.resolve(_);
      } catch (_) {
        return Promise.reject(_);
      }
    }
    function createAlgorithmFromUnderlyingMethod(_, _, _) {
      let _ = _[_];
      if (_ === void 0) return () => Promise.resolve(void 0);
      if (typeof _ != "function")
        throw new TypeError(`Field "${_}" is not a function.`);
      return function (..._) {
        return promiseCall(_, _, _.concat(_));
      };
    }
    function validateAndNormalizeHighWaterMark(_) {
      let _ = Number(_);
      if (isNaN(_) || _ < 0)
        throw new RangeError(
          "highWaterMark must be a valid, non-negative integer.",
        );
      return _;
    }
    function makeSizeAlgorithmFromSizeFunction(_) {
      if (typeof _ != "function" && _ !== void 0)
        throw new TypeError("size function must be undefined or a function");
      return function (_) {
        return typeof _ == "function" ? _(_) : 1;
      };
    }
    function createControlledPromise() {
      let _ = {
        state: 0,
      };
      return (
        (_.promise = new Promise(function (_, _) {
          (_.resolve = function (_) {
            (_.state = 1), _(_);
          }),
            (_.reject = function (_) {
              (_.state = 2), _(_);
            });
        })),
        _
      );
    }
    let CHUNK_SIZE = 16384;
    class QueueImpl {
      constructor() {
        (this.chunks_ = [[]]),
          (this.readChunk_ = this.writeChunk_ = this.chunks_[0]),
          (this.length_ = 0);
      }
      push(_) {
        this.writeChunk_.push(_),
          (this.length_ += 1),
          this.writeChunk_.length === CHUNK_SIZE &&
            ((this.writeChunk_ = []), this.chunks_.push(this.writeChunk_));
      }
      front() {
        if (this.length_ !== 0) return this.readChunk_[0];
      }
      shift() {
        if (this.length_ === 0) return;
        let _ = this.readChunk_.shift();
        return (
          (this.length_ -= 1),
          this.readChunk_.length === 0 &&
            this.readChunk_ !== this.writeChunk_ &&
            (this.chunks_.shift(), (this.readChunk_ = this.chunks_[0])),
          _
        );
      }
      get length() {
        return this.length_;
      }
    }
    let queue_ = Symbol("queue_"),
      queueTotalSize_ = Symbol("queueTotalSize_");
    function dequeueValue(_) {
      let _ = _[queue_].shift(),
        _ = _[queueTotalSize_] - _.size;
      return (_[queueTotalSize_] = Math.max(0, _)), _.value;
    }
    function enqueueValueWithSize(_, _, _) {
      if (!isFiniteNonNegativeNumber(_))
        throw new RangeError(
          "Chunk size must be a non-negative, finite numbers",
        );
      _[queue_].push({
        value: _,
        size: _,
      }),
        (_[queueTotalSize_] += _);
    }
    function peekQueueValue(_) {
      return _[queue_].front().value;
    }
    function resetQueue(_) {
      (_[queue_] = new QueueImpl()), (_[queueTotalSize_] = 0);
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
    function initializeReadableStream(_) {
      (_[state_] = "readable"),
        (_[reader_] = void 0),
        (_[storedError_] = void 0),
        (_[readableStreamController_] = void 0);
    }
    function isReadableStream(_) {
      return (
        typeof _ == "object" && _ !== null && readableStreamController_ in _
      );
    }
    function isReadableStreamLocked(_) {
      return _[reader_] !== void 0;
    }
    function readableStreamGetNumReadIntoRequests(_) {
      let _ = _[reader_];
      return _ === void 0 ? 0 : _[readIntoRequests_].length;
    }
    function readableStreamGetNumReadRequests(_) {
      let _ = _[reader_];
      return _ === void 0 ? 0 : _[readRequests_].length;
    }
    function readableStreamCreateReadResult(_, _, _) {
      let _ = _ ? Object.prototype : null,
        _ = Object.create(_);
      return (_.value = _), (_.done = _), _;
    }
    function readableStreamAddReadIntoRequest(_, _) {
      let _ = _[reader_],
        _ = createControlledPromise();
      return (_.forAuthorCode = _), _[readIntoRequests_].push(_), _.promise;
    }
    function readableStreamAddReadRequest(_, _) {
      let _ = _[reader_],
        _ = createControlledPromise();
      return (_.forAuthorCode = _), _[readRequests_].push(_), _.promise;
    }
    function readableStreamHasBYOBReader(_) {
      return isReadableStreamBYOBReader(_[reader_]);
    }
    function readableStreamHasDefaultReader(_) {
      return isReadableStreamDefaultReader(_[reader_]);
    }
    function readableStreamCancel(_, _) {
      return _[state_] === "closed"
        ? Promise.resolve(void 0)
        : _[state_] === "errored"
          ? Promise.reject(_[storedError_])
          : (readableStreamClose(_),
            _[readableStreamController_][cancelSteps_](_).then((_) => {}));
    }
    function readableStreamClose(_) {
      _[state_] = "closed";
      let _ = _[reader_];
      if (
        _ !== void 0 &&
        (_[closedPromise_].resolve(),
        _[closedPromise_].promise.catch(() => {}),
        isReadableStreamDefaultReader(_))
      ) {
        for (let _ of _[readRequests_])
          _.resolve(
            readableStreamCreateReadResult(void 0, !0, _.forAuthorCode),
          );
        _[readRequests_] = [];
      }
    }
    function readableStreamError(_, _) {
      if (_[state_] !== "readable")
        throw new RangeError("Stream is in an invalid state");
      (_[state_] = "errored"), (_[storedError_] = _);
      let _ = _[reader_];
      if (_ !== void 0)
        if ((_[closedPromise_].reject(_), isReadableStreamDefaultReader(_))) {
          for (let _ of _[readRequests_]) _.reject(_);
          _[readRequests_] = [];
        } else {
          let _ = _[readIntoRequests_];
          for (let _ of _) _.reject(_);
          _[readIntoRequests_] = [];
        }
    }
    function isReadableStreamDefaultReader(_) {
      return typeof _ == "object" && _ !== null && readRequests_ in _;
    }
    function isReadableStreamBYOBReader(_) {
      return typeof _ == "object" && _ !== null && readIntoRequests_ in _;
    }
    function readableStreamReaderGenericInitialize(_, _) {
      (_[ownerReadableStream_] = _), (_[reader_] = _);
      let _ = _[state_];
      (_[closedPromise_] = createControlledPromise()),
        _ === "readable" ||
          (_ === "closed"
            ? _[closedPromise_].resolve(void 0)
            : (_[closedPromise_].reject(_[storedError_]),
              _[closedPromise_].promise.catch(() => {})));
    }
    function readableStreamReaderGenericRelease(_) {
      let _ = _[ownerReadableStream_];
      if (_ === void 0)
        throw new TypeError("Reader is in an inconsistent state");
      _[state_] === "readable" ||
        (_[closedPromise_] = createControlledPromise()),
        _[closedPromise_].reject(new TypeError()),
        _[closedPromise_].promise.catch(() => {}),
        (_[reader_] = void 0),
        (_[ownerReadableStream_] = void 0);
    }
    function readableStreamBYOBReaderRead(_, _, _ = !1) {
      let _ = _[ownerReadableStream_];
      return _[state_] === "errored"
        ? Promise.reject(_[storedError_])
        : readableByteStreamControllerPullInto(
            _[readableStreamController_],
            _,
            _,
          );
    }
    function readableStreamDefaultReaderRead(_, _ = !1) {
      let _ = _[ownerReadableStream_];
      return _[state_] === "closed"
        ? Promise.resolve(readableStreamCreateReadResult(void 0, !0, _))
        : _[state_] === "errored"
          ? Promise.reject(_[storedError_])
          : _[readableStreamController_][pullSteps_](_);
    }
    function readableStreamFulfillReadIntoRequest(_, _, _) {
      let _ = _[reader_][readIntoRequests_].shift();
      _.resolve(readableStreamCreateReadResult(_, _, _.forAuthorCode));
    }
    function readableStreamFulfillReadRequest(_, _, _) {
      let _ = _[reader_][readRequests_].shift();
      _.resolve(readableStreamCreateReadResult(_, _, _.forAuthorCode));
    }
    function setUpReadableStreamDefaultController(_, _, _, _, _, _, _) {
      (_[controlledReadableStream_] = _),
        resetQueue(_),
        (_[started_] = !1),
        (_[closeRequested_] = !1),
        (_[pullAgain_] = !1),
        (_[pulling_] = !1),
        (_[strategySizeAlgorithm_] = _),
        (_[strategyHWM_] = _),
        (_[pullAlgorithm_] = _),
        (_[cancelAlgorithm_] = _),
        (_[readableStreamController_] = _);
      let _ = _();
      Promise.resolve(_).then(
        (_) => {
          (_[started_] = !0),
            readableStreamDefaultControllerCallPullIfNeeded(_);
        },
        (_) => {
          readableStreamDefaultControllerError(_, _);
        },
      );
    }
    function isReadableStreamDefaultController(_) {
      return (
        typeof _ == "object" && _ !== null && controlledReadableStream_ in _
      );
    }
    function readableStreamDefaultControllerHasBackpressure(_) {
      return !readableStreamDefaultControllerShouldCallPull(_);
    }
    function readableStreamDefaultControllerCanCloseOrEnqueue(_) {
      let _ = _[controlledReadableStream_][state_];
      return _[closeRequested_] === !1 && _ === "readable";
    }
    function readableStreamDefaultControllerGetDesiredSize(_) {
      let _ = _[controlledReadableStream_][state_];
      return _ === "errored"
        ? null
        : _ === "closed"
          ? 0
          : _[strategyHWM_] - _[queueTotalSize_];
    }
    function readableStreamDefaultControllerClose(_) {
      _[closeRequested_] = !0;
      let _ = _[controlledReadableStream_];
      _[queue_].length === 0 &&
        (readableStreamDefaultControllerClearAlgorithms(_),
        readableStreamClose(_));
    }
    function readableStreamDefaultControllerEnqueue(_, _) {
      let _ = _[controlledReadableStream_];
      if (isReadableStreamLocked(_) && readableStreamGetNumReadRequests(_) > 0)
        readableStreamFulfillReadRequest(_, _, !1);
      else {
        let _;
        try {
          _ = _[strategySizeAlgorithm_](_);
        } catch (_) {
          throw (readableStreamDefaultControllerError(_, _), _);
        }
        try {
          enqueueValueWithSize(_, _, _);
        } catch (_) {
          throw (readableStreamDefaultControllerError(_, _), _);
        }
      }
      readableStreamDefaultControllerCallPullIfNeeded(_);
    }
    function readableStreamDefaultControllerError(_, _) {
      let _ = _[controlledReadableStream_];
      _[state_] === "readable" &&
        (resetQueue(_),
        readableStreamDefaultControllerClearAlgorithms(_),
        readableStreamError(_, _));
    }
    function readableStreamDefaultControllerCallPullIfNeeded(_) {
      if (readableStreamDefaultControllerShouldCallPull(_))
        if (_[pulling_]) _[pullAgain_] = !0;
        else {
          if (_[pullAgain_])
            throw new RangeError("Stream controller is in an invalid state.");
          (_[pulling_] = !0),
            _[pullAlgorithm_](_).then(
              (_) => {
                (_[pulling_] = !1),
                  _[pullAgain_] &&
                    ((_[pullAgain_] = !1),
                    readableStreamDefaultControllerCallPullIfNeeded(_));
              },
              (_) => {
                readableStreamDefaultControllerError(_, _);
              },
            );
        }
    }
    function readableStreamDefaultControllerShouldCallPull(_) {
      let _ = _[controlledReadableStream_];
      if (
        !readableStreamDefaultControllerCanCloseOrEnqueue(_) ||
        _[started_] === !1
      )
        return !1;
      if (isReadableStreamLocked(_) && readableStreamGetNumReadRequests(_) > 0)
        return !0;
      let _ = readableStreamDefaultControllerGetDesiredSize(_);
      if (_ === null) throw new RangeError("Stream is in an invalid state.");
      return _ > 0;
    }
    function readableStreamDefaultControllerClearAlgorithms(_) {
      (_[pullAlgorithm_] = void 0),
        (_[cancelAlgorithm_] = void 0),
        (_[strategySizeAlgorithm_] = void 0);
    }
    function setUpReadableByteStreamController(_, _, _, _, _, _, _) {
      if (_[readableStreamController_] !== void 0)
        throw new TypeError("Cannot reuse streams");
      if (_ !== void 0 && (!isInteger(_) || _ <= 0))
        throw new RangeError(
          "autoAllocateChunkSize must be a positive, finite integer",
        );
      (_[controlledReadableByteStream_] = _),
        (_[pullAgain_] = !1),
        (_[pulling_] = !1),
        readableByteStreamControllerClearPendingPullIntos(_),
        resetQueue(_),
        (_[closeRequested_] = !1),
        (_[started_] = !1),
        (_[strategyHWM_] = validateAndNormalizeHighWaterMark(_)),
        (_[pullAlgorithm_] = _),
        (_[cancelAlgorithm_] = _),
        (_[autoAllocateChunkSize_] = _),
        (_[pendingPullIntos_] = []),
        (_[readableStreamController_] = _);
      let _ = _();
      Promise.resolve(_).then(
        (_) => {
          (_[started_] = !0), readableByteStreamControllerCallPullIfNeeded(_);
        },
        (_) => {
          readableByteStreamControllerError(_, _);
        },
      );
    }
    function isReadableStreamBYOBRequest(_) {
      return (
        typeof _ == "object" &&
        _ !== null &&
        associatedReadableByteStreamController_ in _
      );
    }
    function isReadableByteStreamController(_) {
      return (
        typeof _ == "object" && _ !== null && controlledReadableByteStream_ in _
      );
    }
    function readableByteStreamControllerCallPullIfNeeded(_) {
      readableByteStreamControllerShouldCallPull(_) &&
        (_[pulling_]
          ? (_[pullAgain_] = !0)
          : ((_[pulling_] = !0),
            _[pullAlgorithm_](_).then(
              (_) => {
                (_[pulling_] = !1),
                  _[pullAgain_] &&
                    ((_[pullAgain_] = !1),
                    readableByteStreamControllerCallPullIfNeeded(_));
              },
              (_) => {
                readableByteStreamControllerError(_, _);
              },
            )));
    }
    function readableByteStreamControllerClearAlgorithms(_) {
      (_[pullAlgorithm_] = void 0), (_[cancelAlgorithm_] = void 0);
    }
    function readableByteStreamControllerClearPendingPullIntos(_) {
      readableByteStreamControllerInvalidateBYOBRequest(_),
        (_[pendingPullIntos_] = []);
    }
    function readableByteStreamControllerClose(_) {
      let _ = _[controlledReadableByteStream_];
      if (_[queueTotalSize_] > 0) _[closeRequested_] = !0;
      else {
        if (
          _[pendingPullIntos_].length > 0 &&
          _[pendingPullIntos_][0].bytesFilled > 0
        ) {
          let _ = new TypeError();
          throw (readableByteStreamControllerError(_, _), _);
        }
        readableByteStreamControllerClearAlgorithms(_), readableStreamClose(_);
      }
    }
    function readableByteStreamControllerCommitPullIntoDescriptor(_, _) {
      let _ = !1;
      _[state_] === "closed" && (_ = !0);
      let _ = readableByteStreamControllerConvertPullIntoDescriptor(_);
      _.readerType === "default"
        ? readableStreamFulfillReadRequest(_, _, _)
        : readableStreamFulfillReadIntoRequest(_, _, _);
    }
    function readableByteStreamControllerConvertPullIntoDescriptor(_) {
      let { bytesFilled: _, elementSize: _ } = _;
      return new _.ctor(_.buffer, _.byteOffset, _ / _);
    }
    function readableByteStreamControllerEnqueue(_, _) {
      let _ = _[controlledReadableByteStream_],
        { buffer: _, byteOffset: _, byteLength: _ } = _,
        _ = transferArrayBuffer(_);
      readableStreamHasDefaultReader(_)
        ? readableStreamGetNumReadRequests(_) === 0
          ? readableByteStreamControllerEnqueueChunkToQueue(_, _, _, _)
          : readableStreamFulfillReadRequest(_, new Uint8Array(_, _, _), !1)
        : readableStreamHasBYOBReader(_)
          ? (readableByteStreamControllerEnqueueChunkToQueue(_, _, _, _),
            readableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(_))
          : readableByteStreamControllerEnqueueChunkToQueue(_, _, _, _),
        readableByteStreamControllerCallPullIfNeeded(_);
    }
    function readableByteStreamControllerEnqueueChunkToQueue(_, _, _, _) {
      _[queue_].push({
        buffer: _,
        byteOffset: _,
        byteLength: _,
      }),
        (_[queueTotalSize_] += _);
    }
    function readableByteStreamControllerError(_, _) {
      let _ = _[controlledReadableByteStream_];
      _[state_] === "readable" &&
        (readableByteStreamControllerClearPendingPullIntos(_),
        resetQueue(_),
        readableByteStreamControllerClearAlgorithms(_),
        readableStreamError(_, _));
    }
    function readableByteStreamControllerFillHeadPullIntoDescriptor(_, _, _) {
      readableByteStreamControllerInvalidateBYOBRequest(_),
        (_.bytesFilled += _);
    }
    function readableByteStreamControllerFillPullIntoDescriptorFromQueue(_, _) {
      let _ = _.elementSize,
        _ = _.bytesFilled - (_.bytesFilled % _),
        _ = Math.min(_[queueTotalSize_], _.byteLength - _.bytesFilled),
        _ = _.bytesFilled + _,
        _ = _ - (_ % _),
        _ = _,
        _ = !1;
      _ > _ && ((_ = _ - _.bytesFilled), (_ = !0));
      let _ = _[queue_];
      for (; _ > 0; ) {
        let _ = _.front(),
          _ = Math.min(_, _.byteLength),
          _ = _.byteOffset + _.bytesFilled;
        copyDataBlockBytes(_.buffer, _, _.buffer, _.byteOffset, _),
          _.byteLength === _
            ? _.shift()
            : ((_.byteOffset += _), (_.byteLength -= _)),
          (_[queueTotalSize_] -= _),
          readableByteStreamControllerFillHeadPullIntoDescriptor(_, _, _),
          (_ -= _);
      }
      return _;
    }
    function readableByteStreamControllerGetDesiredSize(_) {
      let _ = _[controlledReadableByteStream_][state_];
      return _ === "errored"
        ? null
        : _ === "closed"
          ? 0
          : _[strategyHWM_] - _[queueTotalSize_];
    }
    function readableByteStreamControllerHandleQueueDrain(_) {
      _[queueTotalSize_] === 0 && _[closeRequested_]
        ? (readableByteStreamControllerClearAlgorithms(_),
          readableStreamClose(_[controlledReadableByteStream_]))
        : readableByteStreamControllerCallPullIfNeeded(_);
    }
    function readableByteStreamControllerInvalidateBYOBRequest(_) {
      let _ = _[byobRequest_];
      _ !== void 0 &&
        ((_[associatedReadableByteStreamController_] = void 0),
        (_[view_] = void 0),
        (_[byobRequest_] = void 0));
    }
    function readableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(
      _,
    ) {
      let _ = _[pendingPullIntos_];
      for (; _.length > 0; ) {
        if (_[queueTotalSize_] === 0) return;
        let _ = _[0];
        readableByteStreamControllerFillPullIntoDescriptorFromQueue(_, _) &&
          (readableByteStreamControllerShiftPendingPullInto(_),
          readableByteStreamControllerCommitPullIntoDescriptor(
            _[controlledReadableByteStream_],
            _,
          ));
      }
    }
    function readableByteStreamControllerPullInto(_, _, _) {
      let _ = _[controlledReadableByteStream_],
        _ = _.BYTES_PER_ELEMENT || 1,
        _ = _.constructor,
        _ = _.byteOffset,
        _ = _.byteLength,
        _ = {
          buffer: transferArrayBuffer(_.buffer),
          byteOffset: _,
          byteLength: _,
          bytesFilled: 0,
          elementSize: _,
          ctor: _,
          readerType: "byob",
        };
      if (_[pendingPullIntos_].length > 0)
        return (
          _[pendingPullIntos_].push(_), readableStreamAddReadIntoRequest(_, _)
        );
      if (_[state_] === "closed") {
        let _ = new _(_.buffer, _.byteOffset, 0);
        return Promise.resolve(readableStreamCreateReadResult(_, !0, _));
      }
      if (_[queueTotalSize_] > 0) {
        if (readableByteStreamControllerFillPullIntoDescriptorFromQueue(_, _)) {
          let _ = readableByteStreamControllerConvertPullIntoDescriptor(_);
          return (
            readableByteStreamControllerHandleQueueDrain(_),
            Promise.resolve(readableStreamCreateReadResult(_, !1, _))
          );
        }
        if (_[closeRequested_]) {
          let _ = new TypeError();
          return readableByteStreamControllerError(_, _), Promise.reject(_);
        }
      }
      _[pendingPullIntos_].push(_);
      let _ = readableStreamAddReadIntoRequest(_, _);
      return readableByteStreamControllerCallPullIfNeeded(_), _;
    }
    function readableByteStreamControllerRespond(_, _) {
      if (!isFiniteNonNegativeNumber((_ = Number(_))))
        throw new RangeError(
          "bytesWritten must be a finite, non-negative number",
        );
      readableByteStreamControllerRespondInternal(_, _);
    }
    function readableByteStreamControllerRespondInClosedState(_, _) {
      _.buffer = transferArrayBuffer(_.buffer);
      let _ = _[controlledReadableByteStream_];
      if (readableStreamHasBYOBReader(_))
        for (; readableStreamGetNumReadIntoRequests(_) > 0; )
          readableByteStreamControllerCommitPullIntoDescriptor(
            _,
            readableByteStreamControllerShiftPendingPullInto(_),
          );
    }
    function readableByteStreamControllerRespondInReadableState(_, _, _) {
      if (_.bytesFilled + _ > _.byteLength) throw new RangeError();
      if (
        (readableByteStreamControllerFillHeadPullIntoDescriptor(_, _, _),
        _.bytesFilled < _.elementSize)
      )
        return;
      readableByteStreamControllerShiftPendingPullInto(_);
      let _ = _.bytesFilled % _.elementSize;
      if (_ > 0) {
        let _ = _.byteOffset + _.bytesFilled,
          _ = cloneArrayBuffer(_.buffer, _ - _, _);
        readableByteStreamControllerEnqueueChunkToQueue(_, _, 0, _.byteLength);
      }
      (_.buffer = transferArrayBuffer(_.buffer)),
        (_.bytesFilled = _.bytesFilled - _),
        readableByteStreamControllerCommitPullIntoDescriptor(
          _[controlledReadableByteStream_],
          _,
        ),
        readableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(_);
    }
    function readableByteStreamControllerRespondInternal(_, _) {
      let _ = _[pendingPullIntos_][0];
      if (_[controlledReadableByteStream_][state_] === "closed") {
        if (_ !== 0) throw new TypeError();
        readableByteStreamControllerRespondInClosedState(_, _);
      } else readableByteStreamControllerRespondInReadableState(_, _, _);
      readableByteStreamControllerCallPullIfNeeded(_);
    }
    function readableByteStreamControllerRespondWithNewView(_, _) {
      let _ = _[pendingPullIntos_][0];
      if (_.byteOffset + _.bytesFilled !== _.byteOffset) throw new RangeError();
      if (_.byteLength !== _.byteLength) throw new RangeError();
      (_.buffer = _.buffer),
        readableByteStreamControllerRespondInternal(_, _.byteLength);
    }
    function readableByteStreamControllerShiftPendingPullInto(_) {
      let _ = _[pendingPullIntos_].shift();
      return readableByteStreamControllerInvalidateBYOBRequest(_), _;
    }
    function readableByteStreamControllerShouldCallPull(_) {
      let _ = _[controlledReadableByteStream_];
      return _[state_] !== "readable" || _[closeRequested_] || !_[started_]
        ? !1
        : (readableStreamHasDefaultReader(_) &&
              readableStreamGetNumReadRequests(_) > 0) ||
            (readableStreamHasBYOBReader(_) &&
              readableStreamGetNumReadIntoRequests(_) > 0)
          ? !0
          : readableByteStreamControllerGetDesiredSize(_) > 0;
    }
    function setUpReadableStreamBYOBRequest(_, _, _) {
      if (!isReadableByteStreamController(_)) throw new TypeError();
      if (!ArrayBuffer.isView(_)) throw new TypeError();
      (_[associatedReadableByteStreamController_] = _), (_[view_] = _);
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
    function initializeWritableStream(_) {
      (_[state_] = "writable"),
        (_[storedError_] = void 0),
        (_[writer_] = void 0),
        (_[writableStreamController_] = void 0),
        (_[inFlightWriteRequest_] = void 0),
        (_[closeRequest_] = void 0),
        (_[inFlightCloseRequest_] = void 0),
        (_[pendingAbortRequest_] = void 0),
        (_[writeRequests_] = []),
        (_[backpressure_] = !1);
    }
    function isWritableStream(_) {
      return (
        typeof _ == "object" && _ !== null && writableStreamController_ in _
      );
    }
    function isWritableStreamLocked(_) {
      return _[writer_] !== void 0;
    }
    function writableStreamAbort(_, _) {
      let _ = _[state_];
      if (_ === "closed" || _ === "errored") return Promise.resolve(void 0);
      let _ = _[pendingAbortRequest_];
      if (_ !== void 0) return _.promise;
      let _ = !1;
      _ === "erroring" && ((_ = !0), (_ = void 0)),
        (_ = {
          reason: _,
          wasAlreadyErroring: _,
        });
      let _ = new Promise((_, _) => {
        (_.resolve = _), (_.reject = _);
      });
      return (
        (_.promise = _),
        (_[pendingAbortRequest_] = _),
        _ || writableStreamStartErroring(_, _),
        _
      );
    }
    function writableStreamAddWriteRequest(_) {
      let _ = createControlledPromise();
      return _[writeRequests_].push(_), _.promise;
    }
    function writableStreamDealWithRejection(_, _) {
      _[state_] !== "writable"
        ? writableStreamFinishErroring(_)
        : writableStreamStartErroring(_, _);
    }
    function writableStreamStartErroring(_, _) {
      let _ = _[writableStreamController_];
      (_[state_] = "erroring"), (_[storedError_] = _);
      let _ = _[writer_];
      _ !== void 0 &&
        writableStreamDefaultWriterEnsureReadyPromiseRejected(_, _),
        !writableStreamHasOperationMarkedInFlight(_) &&
          _[started_$1] &&
          writableStreamFinishErroring(_);
    }
    function writableStreamFinishErroring(_) {
      _[state_] = "errored";
      let _ = _[writableStreamController_];
      _[errorSteps_]();
      let _ = _[storedError_];
      for (let _ of _[writeRequests_]) _.reject(_);
      _[writeRequests_] = [];
      let _ = _[pendingAbortRequest_];
      if (_ === void 0)
        return void writableStreamRejectCloseAndClosedPromiseIfNeeded(_);
      if (((_[pendingAbortRequest_] = void 0), _.wasAlreadyErroring))
        return (
          _.reject(_), void writableStreamRejectCloseAndClosedPromiseIfNeeded(_)
        );
      _[abortSteps_](_.reason).then(
        (_) => {
          _.resolve(), writableStreamRejectCloseAndClosedPromiseIfNeeded(_);
        },
        (_) => {
          _.reject(_), writableStreamRejectCloseAndClosedPromiseIfNeeded(_);
        },
      );
    }
    function writableStreamFinishInFlightWrite(_) {
      _[inFlightWriteRequest_].resolve(void 0),
        (_[inFlightWriteRequest_] = void 0);
    }
    function writableStreamFinishInFlightWriteWithError(_, _) {
      _[inFlightWriteRequest_].reject(_),
        (_[inFlightWriteRequest_] = void 0),
        writableStreamDealWithRejection(_, _);
    }
    function writableStreamFinishInFlightClose(_) {
      _[inFlightCloseRequest_].resolve(void 0),
        (_[inFlightCloseRequest_] = void 0),
        _[state_] === "erroring" &&
          ((_[storedError_] = void 0),
          _[pendingAbortRequest_] !== void 0 &&
            (_[pendingAbortRequest_].resolve(),
            (_[pendingAbortRequest_] = void 0))),
        (_[state_] = "closed");
      let _ = _[writer_];
      _ !== void 0 && _[closedPromise_$1].resolve(void 0);
    }
    function writableStreamFinishInFlightCloseWithError(_, _) {
      _[inFlightCloseRequest_].reject(_),
        (_[inFlightCloseRequest_] = void 0),
        _[pendingAbortRequest_] !== void 0 &&
          (_[pendingAbortRequest_].reject(_),
          (_[pendingAbortRequest_] = void 0)),
        writableStreamDealWithRejection(_, _);
    }
    function writableStreamCloseQueuedOrInFlight(_) {
      return _[closeRequest_] !== void 0 || _[inFlightCloseRequest_] !== void 0;
    }
    function writableStreamHasOperationMarkedInFlight(_) {
      return (
        _[inFlightWriteRequest_] !== void 0 ||
        _[inFlightCloseRequest_] !== void 0
      );
    }
    function writableStreamMarkCloseRequestInFlight(_) {
      (_[inFlightCloseRequest_] = _[closeRequest_]),
        (_[closeRequest_] = void 0);
    }
    function writableStreamMarkFirstWriteRequestInFlight(_) {
      let _ = _[writeRequests_].shift();
      _[inFlightWriteRequest_] = _;
    }
    function writableStreamRejectCloseAndClosedPromiseIfNeeded(_) {
      let _ = _[closeRequest_];
      _ !== void 0 && (_.reject(_[storedError_]), (_[closeRequest_] = void 0));
      let _ = _[writer_];
      _ !== void 0 &&
        (_[closedPromise_$1].reject(_[storedError_]),
        _[closedPromise_$1].promise.catch(() => {}));
    }
    function writableStreamUpdateBackpressure(_, _) {
      let _ = _[writer_];
      _ !== void 0 &&
        _ !== _[backpressure_] &&
        (_
          ? (_[readyPromise_] = createControlledPromise())
          : _[readyPromise_].resolve(void 0)),
        (_[backpressure_] = _);
    }
    function isWritableStreamDefaultWriter(_) {
      return typeof _ == "object" && _ !== null && ownerWritableStream_ in _;
    }
    function writableStreamDefaultWriterAbort(_, _) {
      return writableStreamAbort(_[ownerWritableStream_], _);
    }
    function writableStreamDefaultWriterClose(_) {
      let _ = _[ownerWritableStream_],
        _ = _[state_];
      if (_ === "closed" || _ === "errored")
        return Promise.reject(
          new TypeError("Writer stream is already closed or errored"),
        );
      let _ = createControlledPromise();
      return (
        (_[closeRequest_] = _),
        _[backpressure_] &&
          _ === "writable" &&
          _[readyPromise_].resolve(void 0),
        writableStreamDefaultControllerClose(_[writableStreamController_]),
        _.promise
      );
    }
    function writableStreamDefaultWriterCloseWithErrorPropagation(_) {
      let _ = _[ownerWritableStream_],
        _ = _[state_];
      return writableStreamCloseQueuedOrInFlight(_) || _ === "closed"
        ? Promise.resolve(void 0)
        : _ === "errored"
          ? Promise.reject(_[storedError_])
          : writableStreamDefaultWriterClose(_);
    }
    function writableStreamDefaultWriterEnsureClosedPromiseRejected(_, _) {
      let _ = _[closedPromise_$1];
      _.state === 0
        ? _.reject(_)
        : ((_[closedPromise_$1] = createControlledPromise()),
          _[closedPromise_$1].reject(_)),
        _[closedPromise_$1].promise.catch(() => {});
    }
    function writableStreamDefaultWriterEnsureReadyPromiseRejected(_, _) {
      let _ = _[readyPromise_];
      _.state === 0
        ? _.reject(_)
        : ((_[readyPromise_] = createControlledPromise()),
          _[readyPromise_].reject(_)),
        _[readyPromise_].promise.catch(() => {});
    }
    function writableStreamDefaultWriterGetDesiredSize(_) {
      let _ = _[ownerWritableStream_],
        _ = _[state_];
      return _ === "errored" || _ === "erroring"
        ? null
        : _ === "closed"
          ? 0
          : writableStreamDefaultControllerGetDesiredSize(
              _[writableStreamController_],
            );
    }
    function writableStreamDefaultWriterRelease(_) {
      let _ = _[ownerWritableStream_],
        _ = new TypeError();
      writableStreamDefaultWriterEnsureReadyPromiseRejected(_, _),
        writableStreamDefaultWriterEnsureClosedPromiseRejected(_, _),
        (_[writer_] = void 0),
        (_[ownerWritableStream_] = void 0);
    }
    function writableStreamDefaultWriterWrite(_, _) {
      let _ = _[ownerWritableStream_],
        _ = _[writableStreamController_],
        _ = writableStreamDefaultControllerGetChunkSize(_, _);
      if (_[ownerWritableStream_] !== _) return Promise.reject(new TypeError());
      let _ = _[state_];
      if (_ === "errored") return Promise.reject(_[storedError_]);
      if (writableStreamCloseQueuedOrInFlight(_) || _ === "closed")
        return Promise.reject(
          new TypeError("Cannot write to a closing or closed stream"),
        );
      if (_ === "erroring") return Promise.reject(_[storedError_]);
      let _ = writableStreamAddWriteRequest(_);
      return writableStreamDefaultControllerWrite(_, _, _), _;
    }
    function setUpWritableStreamDefaultController(_, _, _, _, _, _, _, _) {
      if (!isWritableStream(_)) throw new TypeError();
      if (_[writableStreamController_] !== void 0) throw new TypeError();
      (_[controlledWritableStream_] = _),
        (_[writableStreamController_] = _),
        resetQueue(_),
        (_[started_$1] = !1),
        (_[strategySizeAlgorithm_$1] = _),
        (_[strategyHWM_$1] = _),
        (_[writeAlgorithm_] = _),
        (_[closeAlgorithm_] = _),
        (_[abortAlgorithm_] = _);
      let _ = writableStreamDefaultControllerGetBackpressure(_);
      writableStreamUpdateBackpressure(_, _);
      let _ = _();
      Promise.resolve(_).then(
        (_) => {
          (_[started_$1] = !0),
            writableStreamDefaultControllerAdvanceQueueIfNeeded(_);
        },
        (_) => {
          (_[started_$1] = !0), writableStreamDealWithRejection(_, _);
        },
      );
    }
    function isWritableStreamDefaultController(_) {
      return (
        typeof _ == "object" && _ !== null && controlledWritableStream_ in _
      );
    }
    function writableStreamDefaultControllerClearAlgorithms(_) {
      (_[writeAlgorithm_] = void 0),
        (_[closeAlgorithm_] = void 0),
        (_[abortAlgorithm_] = void 0),
        (_[strategySizeAlgorithm_$1] = void 0);
    }
    function writableStreamDefaultControllerClose(_) {
      enqueueValueWithSize(_, "close", 0),
        writableStreamDefaultControllerAdvanceQueueIfNeeded(_);
    }
    function writableStreamDefaultControllerGetChunkSize(_, _) {
      let _;
      try {
        _ = _[strategySizeAlgorithm_$1](_);
      } catch (_) {
        writableStreamDefaultControllerErrorIfNeeded(_, _), (_ = 1);
      }
      return _;
    }
    function writableStreamDefaultControllerGetDesiredSize(_) {
      return _[strategyHWM_$1] - _[queueTotalSize_];
    }
    function writableStreamDefaultControllerWrite(_, _, _) {
      try {
        enqueueValueWithSize(
          _,
          {
            chunk: _,
          },
          _,
        );
      } catch (_) {
        return void writableStreamDefaultControllerErrorIfNeeded(_, _);
      }
      let _ = _[controlledWritableStream_];
      !writableStreamCloseQueuedOrInFlight(_) &&
        _[state_] === "writable" &&
        writableStreamUpdateBackpressure(
          _,
          writableStreamDefaultControllerGetBackpressure(_),
        ),
        writableStreamDefaultControllerAdvanceQueueIfNeeded(_);
    }
    function writableStreamDefaultControllerAdvanceQueueIfNeeded(_) {
      if (!_[started_$1]) return;
      let _ = _[controlledWritableStream_];
      if (_[inFlightWriteRequest_] !== void 0) return;
      let _ = _[state_];
      if (_ === "closed" || _ === "errored") return;
      if (_ === "erroring") return void writableStreamFinishErroring(_);
      if (_[queue_].length === 0) return;
      let _ = peekQueueValue(_);
      _ === "close"
        ? writableStreamDefaultControllerProcessClose(_)
        : writableStreamDefaultControllerProcessWrite(_, _.chunk);
    }
    function writableStreamDefaultControllerErrorIfNeeded(_, _) {
      _[controlledWritableStream_][state_] === "writable" &&
        writableStreamDefaultControllerError(_, _);
    }
    function writableStreamDefaultControllerProcessClose(_) {
      let _ = _[controlledWritableStream_];
      writableStreamMarkCloseRequestInFlight(_), dequeueValue(_);
      let _ = _[closeAlgorithm_]();
      writableStreamDefaultControllerClearAlgorithms(_),
        _.then(
          (_) => {
            writableStreamFinishInFlightClose(_);
          },
          (_) => {
            writableStreamFinishInFlightCloseWithError(_, _);
          },
        );
    }
    function writableStreamDefaultControllerProcessWrite(_, _) {
      let _ = _[controlledWritableStream_];
      writableStreamMarkFirstWriteRequestInFlight(_),
        _[writeAlgorithm_](_).then(
          (_) => {
            writableStreamFinishInFlightWrite(_);
            let _ = _[state_];
            if (
              (dequeueValue(_),
              !writableStreamCloseQueuedOrInFlight(_) && _ === "writable")
            ) {
              let _ = writableStreamDefaultControllerGetBackpressure(_);
              writableStreamUpdateBackpressure(_, _);
            }
            writableStreamDefaultControllerAdvanceQueueIfNeeded(_);
          },
          (_) => {
            _[state_] === "writable" &&
              writableStreamDefaultControllerClearAlgorithms(_),
              writableStreamFinishInFlightWriteWithError(_, _);
          },
        );
    }
    function writableStreamDefaultControllerGetBackpressure(_) {
      return writableStreamDefaultControllerGetDesiredSize(_) <= 0;
    }
    function writableStreamDefaultControllerError(_, _) {
      let _ = _[controlledWritableStream_];
      writableStreamDefaultControllerClearAlgorithms(_),
        writableStreamStartErroring(_, _);
    }
    class ReadableStreamDefaultReader {
      constructor(_) {
        if (!isReadableStream(_)) throw new TypeError();
        if (isReadableStreamLocked(_))
          throw new TypeError("The stream is locked.");
        readableStreamReaderGenericInitialize(this, _),
          (this[readRequests_] = []);
      }
      get closed() {
        return isReadableStreamDefaultReader(this)
          ? this[closedPromise_].promise
          : Promise.reject(new TypeError());
      }
      cancel(_) {
        if (!isReadableStreamDefaultReader(this))
          return Promise.reject(new TypeError());
        let _ = this[ownerReadableStream_];
        return _ === void 0
          ? Promise.reject(
              new TypeError("Reader is not associated with a stream"),
            )
          : readableStreamCancel(_, _);
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
      constructor(_) {
        if (!isWritableStream(_)) throw new TypeError();
        if (isWritableStreamLocked(_))
          throw new TypeError("Stream is already locked");
        (this[ownerWritableStream_] = _), (_[writer_] = this);
        let _ = createControlledPromise(),
          _ = createControlledPromise();
        (this[readyPromise_] = _), (this[closedPromise_$1] = _);
        let _ = _[state_];
        if (_ === "writable")
          (!writableStreamCloseQueuedOrInFlight(_) && _[backpressure_]) ||
            _.resolve(void 0);
        else if (_ === "erroring")
          _.reject(_[storedError_]), _.promise.catch(() => {});
        else if (_ === "closed") _.resolve(void 0), _.resolve(void 0);
        else {
          let _ = _[storedError_];
          _.reject(_),
            _.promise.catch(() => {}),
            _.reject(_),
            _.promise.catch(() => {});
        }
      }
      abort(_) {
        return isWritableStreamDefaultWriter(this)
          ? this[ownerWritableStream_] === void 0
            ? Promise.reject(
                new TypeError("Writer is not connected to a stream"),
              )
            : writableStreamDefaultWriterAbort(this, _)
          : Promise.reject(new TypeError());
      }
      close() {
        if (!isWritableStreamDefaultWriter(this))
          return Promise.reject(new TypeError());
        let _ = this[ownerWritableStream_];
        return _ === void 0
          ? Promise.reject(new TypeError("Writer is not connected to a stream"))
          : writableStreamCloseQueuedOrInFlight(_)
            ? Promise.reject(new TypeError())
            : writableStreamDefaultWriterClose(this);
      }
      releaseLock() {
        this[ownerWritableStream_] !== void 0 &&
          writableStreamDefaultWriterRelease(this);
      }
      write(_) {
        return isWritableStreamDefaultWriter(this)
          ? this[ownerWritableStream_] === void 0
            ? Promise.reject(
                new TypeError("Writer is not connected to a stream"),
              )
            : writableStreamDefaultWriterWrite(this, _)
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
    function pipeTo(_, _, _) {
      let _ = !!_.preventClose,
        _ = !!_.preventAbort,
        _ = !!_.preventCancel,
        _ = _.signal,
        _ = !1,
        _ = Promise.resolve(),
        _ = createControlledPromise(),
        _ = new ReadableStreamDefaultReader(_),
        _ = new WritableStreamDefaultWriter(_),
        _;
      function _(_, _, _) {
        _[state_] === "errored" ? _(_[storedError_]) : _.catch(_);
      }
      if (
        (_ !== void 0 &&
          ((_ = () => {
            let _ = new DOMException("Aborted", "AbortError"),
              _ = [];
            _ === !1 &&
              _.push(() =>
                _[state_] === "writable"
                  ? writableStreamAbort(_, _)
                  : Promise.resolve(),
              ),
              _ === !1 &&
                _.push(() =>
                  _[state_] === "readable"
                    ? readableStreamCancel(_, _)
                    : Promise.resolve(),
                ),
              _(() => Promise.all(_.map((_) => _())).then((_) => {}), {
                actualError: _,
              });
          }),
          _.aborted === !0 ? _() : _.addEventListener("abort", _)),
        _(_, _[closedPromise_].promise, (_) => {
          _(_ ? void 0 : () => writableStreamAbort(_, _), {
            actualError: _,
          });
        }),
        _(_, _[closedPromise_$1].promise, (_) => {
          _(_ ? void 0 : () => readableStreamCancel(_, _), {
            actualError: _,
          });
        }),
        (function (_, _, _) {
          _[state_] === "closed" ? _() : _.then(_);
        })(_, _[closedPromise_].promise, () => {
          _
            ? _()
            : _(() => writableStreamDefaultWriterCloseWithErrorPropagation(_));
        }),
        writableStreamCloseQueuedOrInFlight(_) || _[state_] === "closed")
      ) {
        let _ = new TypeError();
        _(_ ? void 0 : () => readableStreamCancel(_, _), {
          actualError: _,
        });
      }
      function _() {
        let _ = _;
        return _.then(() => (_ === _ ? void 0 : _()));
      }
      function _() {
        return _[state_] !== "writable" ||
          writableStreamCloseQueuedOrInFlight(_)
          ? void 0
          : _();
      }
      function _(_, _) {
        if (_) return;
        function _() {
          _().then(
            (_) => _(_),
            (_) =>
              _({
                actualError: _,
              }),
          );
        }
        (_ = !0), _ === void 0 && (_ = () => Promise.resolve());
        let _ = _();
        _ ? _.then(_) : _();
      }
      function _(_) {
        writableStreamDefaultWriterRelease(_),
          readableStreamReaderGenericRelease(_),
          _ && _ && _.removeEventListener("abort", _),
          _ ? _.reject(_.actualError) : _.resolve(void 0);
      }
      return (
        (function _() {
          _ ||
            _[readyPromise_].promise.then(() => {
              readableStreamDefaultReaderRead(_).then(
                ({ value: _, done: _ }) => {
                  _ ||
                    ((_ = writableStreamDefaultWriterWrite(_, _).catch(
                      () => {},
                    )),
                    _());
                },
                (_) => {
                  _ = Promise.resolve();
                },
              );
            });
        })(),
        _.promise
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
      enqueue(_) {
        if (!isReadableStreamDefaultController(this)) throw new TypeError();
        if (!readableStreamDefaultControllerCanCloseOrEnqueue(this))
          throw new TypeError(
            "Cannot enqueue, the stream is closing or not readable",
          );
        readableStreamDefaultControllerEnqueue(this, _);
      }
      error(_) {
        if (!isReadableStreamDefaultController(this)) throw new TypeError();
        readableStreamDefaultControllerError(this, _);
      }
      [cancelSteps_](_) {
        resetQueue(this);
        let _ = this[cancelAlgorithm_](_);
        return readableStreamDefaultControllerClearAlgorithms(this), _;
      }
      [pullSteps_](_) {
        let _ = this[controlledReadableStream_];
        if (this[queue_].length > 0) {
          let _ = dequeueValue(this);
          return (
            this[closeRequested_] && this[queue_].length === 0
              ? (readableStreamDefaultControllerClearAlgorithms(this),
                readableStreamClose(_))
              : readableStreamDefaultControllerCallPullIfNeeded(this),
            Promise.resolve(readableStreamCreateReadResult(_, !1, _))
          );
        }
        let _ = readableStreamAddReadRequest(_, _);
        return readableStreamDefaultControllerCallPullIfNeeded(this), _;
      }
    }
    function setUpReadableStreamDefaultControllerFromUnderlyingSource(
      _,
      _,
      _,
      _,
    ) {
      let _ = Object.create(ReadableStreamDefaultController.prototype),
        _ = createAlgorithmFromUnderlyingMethod(_, "pull", [_]),
        _ = createAlgorithmFromUnderlyingMethod(_, "cancel", []);
      setUpReadableStreamDefaultController(
        _,
        _,
        () => invokeOrNoop(_, "start", [_]),
        _,
        _,
        _,
        _,
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
      respond(_) {
        if (!isReadableStreamBYOBRequest(this)) throw new TypeError();
        if (this[associatedReadableByteStreamController_] === void 0)
          throw new TypeError();
        return readableByteStreamControllerRespond(
          this[associatedReadableByteStreamController_],
          _,
        );
      }
      respondWithNewView(_) {
        if (!isReadableStreamBYOBRequest(this)) throw new TypeError();
        if (this[associatedReadableByteStreamController_] === void 0)
          throw new TypeError();
        if (!ArrayBuffer.isView(_))
          throw new TypeError("view parameter must be a TypedArray");
        return readableByteStreamControllerRespondWithNewView(
          this[associatedReadableByteStreamController_],
          _,
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
          let _ = this[pendingPullIntos_][0],
            _ = new Uint8Array(
              _.buffer,
              _.byteOffset + _.bytesFilled,
              _.byteLength - _.bytesFilled,
            ),
            _ = Object.create(ReadableStreamBYOBRequest.prototype);
          setUpReadableStreamBYOBRequest(_, this, _), (this[byobRequest_] = _);
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
      enqueue(_) {
        if (!isReadableByteStreamController(this)) throw new TypeError();
        if (this[closeRequested_])
          throw new TypeError("Stream is already closing");
        if (this[controlledReadableByteStream_][state_] !== "readable")
          throw new TypeError("Stream is closed or errored");
        if (!ArrayBuffer.isView(_))
          throw new TypeError("chunk must be a valid ArrayBufferView");
        return readableByteStreamControllerEnqueue(this, _);
      }
      error(_) {
        if (!isReadableByteStreamController(this)) throw new TypeError();
        readableByteStreamControllerError(this, _);
      }
      [cancelSteps_](_) {
        this[pendingPullIntos_].length > 0 &&
          (this[pendingPullIntos_][0].bytesFilled = 0),
          resetQueue(this);
        let _ = this[cancelAlgorithm_](_);
        return readableByteStreamControllerClearAlgorithms(this), _;
      }
      [pullSteps_](_) {
        let _ = this[controlledReadableByteStream_];
        if (this[queueTotalSize_] > 0) {
          let _ = this[queue_].shift();
          (this[queueTotalSize_] -= _.byteLength),
            readableByteStreamControllerHandleQueueDrain(this);
          let _ = new Uint8Array(_.buffer, _.byteOffset, _.byteLength);
          return Promise.resolve(readableStreamCreateReadResult(_, !1, _));
        }
        let _ = this[autoAllocateChunkSize_];
        if (_ !== void 0) {
          let _;
          try {
            _ = new ArrayBuffer(_);
          } catch (_) {
            return Promise.reject(_);
          }
          let _ = {
            buffer: _,
            byteOffset: 0,
            byteLength: _,
            bytesFilled: 0,
            elementSize: 1,
            ctor: Uint8Array,
            readerType: "default",
          };
          this[pendingPullIntos_].push(_);
        }
        let _ = readableStreamAddReadRequest(_, _);
        return readableByteStreamControllerCallPullIfNeeded(this), _;
      }
    }
    function setUpReadableByteStreamControllerFromUnderlyingSource(_, _, _) {
      let _ = Object.create(ReadableByteStreamController.prototype),
        _ = createAlgorithmFromUnderlyingMethod(_, "pull", [_]),
        _ = createAlgorithmFromUnderlyingMethod(_, "cancel", []),
        _ = _.autoAllocateChunkSize;
      if (_ !== void 0 && ((_ = Number(_)), !isInteger(_) || _ <= 0))
        throw new RangeError(
          "autoAllocateChunkSize must be a positive, finite integer",
        );
      setUpReadableByteStreamController(
        _,
        _,
        () => invokeOrNoop(_, "start", [_]),
        _,
        _,
        _,
        _,
      );
    }
    class SDReadableStreamBYOBReader {
      constructor(_) {
        if (!isReadableStream(_)) throw new TypeError();
        if (!isReadableByteStreamController(_[readableStreamController_]))
          throw new TypeError();
        if (isReadableStreamLocked(_))
          throw new TypeError("The stream is locked.");
        readableStreamReaderGenericInitialize(this, _),
          (this[readIntoRequests_] = []);
      }
      get closed() {
        return isReadableStreamBYOBReader(this)
          ? this[closedPromise_].promise
          : Promise.reject(new TypeError());
      }
      cancel(_) {
        if (!isReadableStreamBYOBReader(this))
          return Promise.reject(new TypeError());
        let _ = this[ownerReadableStream_];
        return _ === void 0
          ? Promise.reject(
              new TypeError("Reader is not associated with a stream"),
            )
          : readableStreamCancel(_, _);
      }
      read(_) {
        return isReadableStreamBYOBReader(this)
          ? this[ownerReadableStream_] === void 0
            ? Promise.reject(
                new TypeError("Reader is not associated with a stream"),
              )
            : ArrayBuffer.isView(_)
              ? _.byteLength === 0
                ? Promise.reject(
                    new TypeError("supplied buffer view must be > 0 bytes"),
                  )
                : readableStreamBYOBReaderRead(this, _, !0)
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
      constructor(_ = {}, _ = {}) {
        initializeReadableStream(this);
        let _ = _.size,
          _ = _.highWaterMark,
          _ = _.type;
        if (_ === void 0) {
          let _ = makeSizeAlgorithmFromSizeFunction(_);
          setUpReadableStreamDefaultControllerFromUnderlyingSource(
            this,
            _,
            validateAndNormalizeHighWaterMark(_ === void 0 ? 1 : _),
            _,
          );
        } else {
          if (String(_) !== "bytes")
            throw new RangeError(
              "The underlying source's `type` field must be undefined or 'bytes'",
            );
          if (_ !== void 0)
            throw new RangeError(
              "bytes streams cannot have a strategy with a `size` field",
            );
          setUpReadableByteStreamControllerFromUnderlyingSource(
            this,
            _,
            validateAndNormalizeHighWaterMark(_ === void 0 ? 0 : _),
          );
        }
      }
      get locked() {
        return isReadableStreamLocked(this);
      }
      getReader(_) {
        if (!isReadableStream(this)) throw new TypeError();
        _ === void 0 && (_ = {});
        let { mode: _ } = _;
        if (_ === void 0) return new ReadableStreamDefaultReader(this);
        if (String(_) === "byob") return new SDReadableStreamBYOBReader(this);
        throw RangeError("mode option must be undefined or `byob`");
      }
      cancel(_) {
        return isReadableStream(this)
          ? isReadableStreamLocked(this)
            ? Promise.reject(new TypeError("Cannot cancel a locked stream"))
            : readableStreamCancel(this, _)
          : Promise.reject(new TypeError());
      }
      tee() {
        return readableStreamTee(this, !1);
      }
      pipeThrough(_, _ = {}) {
        let { readable: _, writable: _ } = _;
        if (!isReadableStream(this)) throw new TypeError();
        if (!isWritableStream(_))
          throw new TypeError("writable must be a WritableStream");
        if (!isReadableStream(_))
          throw new TypeError("readable must be a ReadableStream");
        if (_.signal !== void 0 && !isAbortSignal(_.signal))
          throw new TypeError("options.signal must be an AbortSignal instance");
        if (isReadableStreamLocked(this))
          throw new TypeError("Cannot pipeThrough on a locked stream");
        if (isWritableStreamLocked(_))
          throw new TypeError("Cannot pipeThrough to a locked stream");
        return pipeTo(this, _, _).catch(() => {}), _;
      }
      pipeTo(_, _ = {}) {
        return isReadableStream(this)
          ? isWritableStream(_)
            ? _.signal === void 0 || isAbortSignal(_.signal)
              ? isReadableStreamLocked(this)
                ? Promise.reject(
                    new TypeError("Cannot pipe from a locked stream"),
                  )
                : isWritableStreamLocked(_)
                  ? Promise.reject(
                      new TypeError("Cannot pipe to a locked stream"),
                    )
                  : pipeTo(this, _, _)
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
    function createReadableStream(_, _, _, _, _) {
      _ === void 0 && (_ = 1), _ === void 0 && (_ = () => 1);
      let _ = Object.create(SDReadableStream.prototype);
      return (
        initializeReadableStream(_),
        setUpReadableStreamDefaultController(
          _,
          Object.create(ReadableStreamDefaultController.prototype),
          _,
          _,
          _,
          _,
          _,
        ),
        _
      );
    }
    function readableStreamTee(_, _) {
      if (!isReadableStream(_)) throw new TypeError();
      let _ = new ReadableStreamDefaultReader(_),
        _,
        _,
        _,
        _,
        _,
        _ = !1,
        _ = !1,
        _ = !1,
        _ = new Promise((_) => (_ = _)),
        _ = () =>
          readableStreamDefaultReaderRead(_).then(({ value: _, done: _ }) => {
            if (
              (_ &&
                !_ &&
                (_ ||
                  readableStreamDefaultControllerClose(
                    _[readableStreamController_],
                  ),
                _ ||
                  readableStreamDefaultControllerClose(
                    _[readableStreamController_],
                  ),
                (_ = !0)),
              _)
            )
              return;
            let _ = _,
              _ = _;
            _ ||
              readableStreamDefaultControllerEnqueue(
                _[readableStreamController_],
                _,
              ),
              _ ||
                (_ && (_ = cloneValue(_)),
                readableStreamDefaultControllerEnqueue(
                  _[readableStreamController_],
                  _,
                ));
          }),
        _ = () => {};
      return (
        (_ = createReadableStream(_, _, (_) => {
          if (((_ = !0), (_ = _), _)) {
            let _ = readableStreamCancel(_, [_, _]);
            _(_);
          }
          return _;
        })),
        (_ = createReadableStream(_, _, (_) => {
          if (((_ = !0), (_ = _), _)) {
            let _ = readableStreamCancel(_, [_, _]);
            _(_);
          }
          return _;
        })),
        _[closedPromise_].promise.catch((_) => {
          _ ||
            (readableStreamDefaultControllerError(
              _[readableStreamController_],
              _,
            ),
            readableStreamDefaultControllerError(
              _[readableStreamController_],
              _,
            ),
            (_ = !0));
        }),
        [_, _]
      );
    }
    class WritableStreamDefaultController {
      constructor() {
        throw new TypeError();
      }
      error(_) {
        if (!isWritableStreamDefaultController(this)) throw new TypeError();
        this[controlledWritableStream_][state_] === "writable" &&
          writableStreamDefaultControllerError(this, _);
      }
      [abortSteps_](_) {
        let _ = this[abortAlgorithm_](_);
        return writableStreamDefaultControllerClearAlgorithms(this), _;
      }
      [errorSteps_]() {
        resetQueue(this);
      }
    }
    function setUpWritableStreamDefaultControllerFromUnderlyingSink(
      _,
      _,
      _,
      _,
    ) {
      let _ = Object.create(WritableStreamDefaultController.prototype),
        _ = createAlgorithmFromUnderlyingMethod(_, "write", [_]),
        _ = createAlgorithmFromUnderlyingMethod(_, "close", []),
        _ = createAlgorithmFromUnderlyingMethod(_, "abort", []);
      setUpWritableStreamDefaultController(
        _,
        _,
        function () {
          return invokeOrNoop(_, "start", [_]);
        },
        _,
        _,
        _,
        _,
        _,
      );
    }
    class WritableStream {
      constructor(_ = {}, _ = {}) {
        initializeWritableStream(this);
        let _ = _.size,
          _ = _.highWaterMark;
        if (_.type !== void 0)
          throw new RangeError(
            "The type of an underlying sink must be undefined",
          );
        let _ = makeSizeAlgorithmFromSizeFunction(_);
        setUpWritableStreamDefaultControllerFromUnderlyingSink(
          this,
          _,
          validateAndNormalizeHighWaterMark(_ === void 0 ? 1 : _),
          _,
        );
      }
      get locked() {
        if (!isWritableStream(this)) throw new TypeError();
        return isWritableStreamLocked(this);
      }
      abort(_) {
        return isWritableStream(this)
          ? isWritableStreamLocked(this)
            ? Promise.reject(new TypeError("Cannot abort a locked stream"))
            : writableStreamAbort(this, _)
          : Promise.reject(new TypeError());
      }
      getWriter() {
        if (!isWritableStream(this)) throw new TypeError();
        return new WritableStreamDefaultWriter(this);
      }
    }
    function createWritableStream(_, _, _, _, _, _) {
      _ === void 0 && (_ = 1), _ === void 0 && (_ = () => 1);
      let _ = Object.create(WritableStream.prototype);
      return (
        initializeWritableStream(_),
        setUpWritableStreamDefaultController(
          _,
          Object.create(WritableStreamDefaultController.prototype),
          _,
          _,
          _,
          _,
          _,
          _,
        ),
        _
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
    function isTransformStream(_) {
      return (
        typeof _ == "object" && _ !== null && transformStreamController_ in _
      );
    }
    function initializeTransformStream(_, _, _, _, _, _) {
      let _ = function () {
        return _;
      };
      (_[writable_] = createWritableStream(
        _,
        function (_) {
          return transformStreamDefaultSinkWriteAlgorithm(_, _);
        },
        function () {
          return transformStreamDefaultSinkCloseAlgorithm(_);
        },
        function (_) {
          return transformStreamDefaultSinkAbortAlgorithm(_, _);
        },
        _,
        _,
      )),
        (_[readable_] = createReadableStream(
          _,
          function () {
            return transformStreamDefaultSourcePullAlgorithm(_);
          },
          function (_) {
            return (
              transformStreamErrorWritableAndUnblockWrite(_, _),
              Promise.resolve(void 0)
            );
          },
          _,
          _,
        )),
        (_[backpressure_$1] = void 0),
        (_[backpressureChangePromise_] = void 0),
        transformStreamSetBackpressure(_, !0),
        (_[transformStreamController_] = void 0);
    }
    function transformStreamError(_, _) {
      readableStreamDefaultControllerError(
        _[readable_][readableStreamController_],
        _,
      ),
        transformStreamErrorWritableAndUnblockWrite(_, _);
    }
    function transformStreamErrorWritableAndUnblockWrite(_, _) {
      transformStreamDefaultControllerClearAlgorithms(
        _[transformStreamController_],
      ),
        writableStreamDefaultControllerErrorIfNeeded(
          _[writable_][writableStreamController_],
          _,
        ),
        _[backpressure_$1] && transformStreamSetBackpressure(_, !1);
    }
    function transformStreamSetBackpressure(_, _) {
      _[backpressure_$1] !== void 0 &&
        _[backpressureChangePromise_].resolve(void 0),
        (_[backpressureChangePromise_] = createControlledPromise()),
        (_[backpressure_$1] = _);
    }
    function isTransformStreamDefaultController(_) {
      return (
        typeof _ == "object" && _ !== null && controlledTransformStream_ in _
      );
    }
    function setUpTransformStreamDefaultController(_, _, _, _) {
      (_[controlledTransformStream_] = _),
        (_[transformStreamController_] = _),
        (_[transformAlgorithm_] = _),
        (_[flushAlgorithm_] = _);
    }
    function transformStreamDefaultControllerClearAlgorithms(_) {
      (_[transformAlgorithm_] = void 0), (_[flushAlgorithm_] = void 0);
    }
    function transformStreamDefaultControllerEnqueue(_, _) {
      let _ = _[controlledTransformStream_],
        _ = _[readable_][readableStreamController_];
      if (!readableStreamDefaultControllerCanCloseOrEnqueue(_))
        throw new TypeError();
      try {
        readableStreamDefaultControllerEnqueue(_, _);
      } catch (_) {
        throw (
          (transformStreamErrorWritableAndUnblockWrite(_, _),
          _[readable_][storedError_])
        );
      }
      readableStreamDefaultControllerHasBackpressure(_) !==
        _[backpressure_$1] && transformStreamSetBackpressure(_, !0);
    }
    function transformStreamDefaultControllerError(_, _) {
      transformStreamError(_[controlledTransformStream_], _);
    }
    function transformStreamDefaultControllerPerformTransform(_, _) {
      return _[transformAlgorithm_](_).catch((_) => {
        throw (transformStreamError(_[controlledTransformStream_], _), _);
      });
    }
    function transformStreamDefaultControllerTerminate(_) {
      let _ = _[controlledTransformStream_],
        _ = _[readable_][readableStreamController_];
      readableStreamDefaultControllerCanCloseOrEnqueue(_) &&
        readableStreamDefaultControllerClose(_),
        transformStreamErrorWritableAndUnblockWrite(
          _,
          new TypeError("The transform stream has been terminated"),
        );
    }
    function transformStreamDefaultSinkWriteAlgorithm(_, _) {
      let _ = _[transformStreamController_];
      return _[backpressure_$1]
        ? _[backpressureChangePromise_].promise.then((_) => {
            let _ = _[writable_];
            if (_[state_] === "erroring") throw _[storedError_];
            return transformStreamDefaultControllerPerformTransform(_, _);
          })
        : transformStreamDefaultControllerPerformTransform(_, _);
    }
    function transformStreamDefaultSinkAbortAlgorithm(_, _) {
      return transformStreamError(_, _), Promise.resolve(void 0);
    }
    function transformStreamDefaultSinkCloseAlgorithm(_) {
      let _ = _[readable_],
        _ = _[transformStreamController_],
        _ = _[flushAlgorithm_]();
      return (
        transformStreamDefaultControllerClearAlgorithms(_),
        _.then(
          (_) => {
            if (_[state_] === "errored") throw _[storedError_];
            let _ = _[readableStreamController_];
            readableStreamDefaultControllerCanCloseOrEnqueue(_) &&
              readableStreamDefaultControllerClose(_);
          },
          (_) => {
            throw (transformStreamError(_, _), _[storedError_]);
          },
        )
      );
    }
    function transformStreamDefaultSourcePullAlgorithm(_) {
      return (
        transformStreamSetBackpressure(_, !1),
        _[backpressureChangePromise_].promise
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
      enqueue(_) {
        if (!isTransformStreamDefaultController(this)) throw new TypeError();
        transformStreamDefaultControllerEnqueue(this, _);
      }
      error(_) {
        if (!isTransformStreamDefaultController(this)) throw new TypeError();
        transformStreamDefaultControllerError(this, _);
      }
      terminate() {
        if (!isTransformStreamDefaultController(this)) throw new TypeError();
        transformStreamDefaultControllerTerminate(this);
      }
    }
    class TransformStream$1 {
      constructor(_ = {}, _ = {}, _ = {}) {
        let _ = _.size,
          _ = _.highWaterMark,
          _ = _.size,
          _ = _.highWaterMark;
        if (_.writableType !== void 0)
          throw new RangeError(
            "The transformer's `writableType` field must be undefined",
          );
        let _ = makeSizeAlgorithmFromSizeFunction(_),
          _ = validateAndNormalizeHighWaterMark(_ === void 0 ? 1 : _);
        if (_.readableType !== void 0)
          throw new RangeError(
            "The transformer's `readableType` field must be undefined",
          );
        let _ = makeSizeAlgorithmFromSizeFunction(_),
          _ = validateAndNormalizeHighWaterMark(_ === void 0 ? 0 : _),
          _ = createControlledPromise();
        initializeTransformStream(this, _.promise, _, _, _, _),
          setUpTransformStreamDefaultControllerFromTransformer(this, _);
        let _ = invokeOrNoop(_, "start", [this[transformStreamController_]]);
        _.resolve(_);
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
    function setUpTransformStreamDefaultControllerFromTransformer(_, _) {
      let _ = Object.create(TransformStreamDefaultController.prototype),
        _,
        _ = _.transform;
      if (_ !== void 0) {
        if (typeof _ != "function")
          throw new TypeError(
            "`transform` field of the transformer must be a function",
          );
        _ = (_) => promiseCall(_, _, [_, _]);
      } else
        _ = function (_) {
          try {
            transformStreamDefaultControllerEnqueue(_, _);
          } catch (_) {
            return Promise.reject(_);
          }
          return Promise.resolve(void 0);
        };
      let _ = createAlgorithmFromUnderlyingMethod(_, "flush", [_]);
      setUpTransformStreamDefaultController(_, _, _, _);
    }
    class ByteLengthQueuingStrategy {
      constructor(_) {
        this.highWaterMark = _.highWaterMark;
      }
      size(_) {
        return _.byteLength;
      }
    }
    class CountQueuingStrategy {
      constructor(_) {
        this.highWaterMark = _.highWaterMark;
      }
      size() {
        return 1;
      }
    }
    function wrapReadableStream(_, _) {
      let _;
      return new _({
        start(_) {
          (_ = _.getReader()),
            _.closed.catch((_) => {
              _.error(_);
            });
        },
        pull: (_) =>
          _.read().then(
            ({ value: _, done: _ }) => {
              _ ? _.close() : _.enqueue(_);
            },
            (_) => {
              _.error(_);
            },
          ),
        cancel(_) {
          _.cancel(_);
        },
      });
    }
    function getMIMETypeFromHeadersInit(_) {
      let _ = "Content-Type";
      if (_ === void 0) return "";
      if (_ instanceof Headers) return _.get(_) || "";
      if (Array.isArray(_)) {
        let _ = _.find((_) => Array.isArray(_) && _.length === 2 && _[0] === _);
        return _ ? _[1] : "";
      }
      return _[_] || "";
    }
    function resolveRequestInitStream(_, _, _) {
      if (_ === void 0) return Promise.resolve(_);
      let _ = _.body,
        _;
      if (
        (_ &&
          typeof _ == "object" &&
          ((_ && _ instanceof _) || _ instanceof _) &&
          (_ = _),
        !_)
      )
        return Promise.resolve(_);
      let _ = getMIMETypeFromHeadersInit(_.headers);
      return readAllBytesFromStream(_.getReader(), _).then(
        (_) => ((_.body = _), _),
      );
    }
    function createAdaptedFetch(_, _, _, _, _) {
      return function (_, _) {
        return resolveRequestInitStream(_, _, _).then((_) =>
          _.call(void 0, _, _).then((_) => {
            if ("body" in _) {
              let _ = _,
                _,
                _;
              _ = new Proxy(_, {
                get(_, _, _) {
                  let _;
                  return (
                    _ === "body"
                      ? (_ === void 0 && (_ = wrapReadableStream(_.body, _)),
                        (_ = _))
                      : _ === "clone"
                        ? (_ === void 0 &&
                            (_ = function () {
                              let [_, _] = _(_.body, !0);
                              return (
                                (_ = _),
                                createResponseProxyWithStreamBody(_, _, _, _)
                              );
                            }),
                          (_ = _))
                        : (_ = _[_]),
                    typeof _ == "function"
                      ? function (..._) {
                          return _.apply(_, _);
                        }
                      : _
                  );
                },
              });
            } else
              (_.body = new _({
                pull: (_) =>
                  _.arrayBuffer().then(
                    (_) => {
                      _.enqueue(new Uint8Array(_)), _.close();
                    },
                    (_) => {
                      _.error(_);
                    },
                  ),
              })),
                (_.clone = function () {
                  let [_, _] = _(_.body, !0);
                  return (
                    (_.body = _), createResponseProxyWithStreamBody(_, _, _, _)
                  );
                });
            return _;
          }),
        );
      };
    }
    function readAllBytesFromStream(_, _) {
      return new Promise((_, _) => {
        let _ = [];
        (function _() {
          _.read().then(
            ({ value: _, done: _ }) => {
              _
                ? (function () {
                    _.length === 0 && _.push(new Uint8Array(0));
                    let _ = new Blob(_, {
                      type: _,
                    });
                    _(_);
                  })()
                : _ instanceof Uint8Array
                  ? (_.push(_), _())
                  : _(
                      new TypeError(
                        "A ReadableStream body must only yield Uint8Array values",
                      ),
                    );
            },
            (_) => {
              _(_);
            },
          );
        })();
      });
    }
    function createResponseProxyWithStreamBody(_, _, _, _) {
      let _ = new _("fake", _),
        _ = getMIMETypeFromHeadersInit(_.headers),
        _,
        _ = !1;
      function _() {
        return (
          _ === void 0 &&
            (_ = new Promise((_, _) => {
              if (((_ = !0), _.locked))
                return _(new TypeError("The ReadableStream is locked"));
              readAllBytesFromStream(_.getReader(), _)
                .then((_) => {
                  _(new _(_, _));
                })
                .catch((_) => {
                  _(_);
                });
            })),
          _
        );
      }
      return new (class {
        get type() {
          return _.type;
        }
        get url() {
          return _.url;
        }
        get redirected() {
          return _.redirected;
        }
        get status() {
          return _.status;
        }
        get ok() {
          return _._;
        }
        get statusText() {
          return _.statusText;
        }
        get headers() {
          return _.headers;
        }
        clone() {
          let [_, _] = _(_, !0);
          return (_ = _), createResponseProxyWithStreamBody(_, _, _, _);
        }
        get body() {
          return _;
        }
        get bodyUsed() {
          return _;
        }
        arrayBuffer() {
          return _().then((_) => _.arrayBuffer());
        }
        blob() {
          return _().then((_) => _.blob());
        }
        formData() {
          return _().then((_) => _.formData());
        }
        json() {
          return _().then((_) => _.json());
        }
        text() {
          return _().then((_) => _.text());
        }
      })();
    }
    function createAdaptedResponse(_, _, _, _) {
      let _ = function (_, _) {
        if (_ instanceof _) {
          if (_ === void 0 || !("body" in _))
            return createResponseProxyWithStreamBody(_, _, _, _);
          _ = wrapReadableStream(_, _);
        }
        return new _(_, _);
      };
      return (_.prototype = _.prototype), _;
    }
    let decDecoder = Symbol("decDecoder"),
      decTransform = Symbol("decTransform");
    class TextDecodeTransformer {
      constructor(_) {
        this.decoder_ = _;
      }
      transform(_, _) {
        if (!(_ instanceof ArrayBuffer || ArrayBuffer.isView(_)))
          throw new TypeError("Input data must be a BufferSource");
        let _ = this.decoder_.decode(_, {
          stream: !0,
        });
        _.length !== 0 && _.enqueue(_);
      }
      flush(_) {
        let _ = this.decoder_.decode();
        _.length !== 0 && _.enqueue(_);
      }
    }
    class TextDecoderStream {
      constructor(_, _) {
        (this[decDecoder] = new TextDecoder(_, _)),
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
      constructor(_) {
        (this.encoder_ = _), (this.partial_ = void 0);
      }
      transform(_, _) {
        let _ = String(_);
        this.partial_ !== void 0 &&
          ((_ = this.partial_ + _), (this.partial_ = void 0));
        let _ = _.length - 1,
          _ = _.charCodeAt(_);
        _ >= 55296 &&
          _ < 56320 &&
          ((this.partial_ = String.fromCharCode(_)), (_ = _.substring(0, _)));
        let _ = this.encoder_.encode(_);
        _.length !== 0 && _.enqueue(_);
      }
      flush(_) {
        this.partial_ &&
          (_.enqueue(this.encoder_.encode(this.partial_)),
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
      swap32 = (_) =>
        (((_ >>> 24) & 255) |
          ((_ >>> 8) & 65280) |
          ((65280 & _) << 8) |
          ((255 & _) << 24)) >>>
        0;
    function u8ArrayFromBufferSource(_) {
      return _ instanceof ArrayBuffer
        ? new Uint8Array(_)
        : ArrayBuffer.isView(_)
          ? _ instanceof Uint8Array
            ? _
            : new Uint8Array(_.buffer, _.byteOffset, _.byteLength)
          : void 0;
    }
    function adler32(_, _ = 1) {
      let _ = u8ArrayFromBufferSource(_);
      if (!_) throw new TypeError("source must be a BufferSource");
      return computeAdler32(_, _);
    }
    let BASE = 65521,
      NMAX = 5552;
    function computeAdler32(_, _ = 1) {
      let _ = (_ >>> 16) & 65535;
      _ &= 65535;
      let _ = _.length,
        _ = 0;
      for (; _ >= NMAX; ) {
        _ -= NMAX;
        let _ = NMAX / 16;
        do
          (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]);
        while (--_);
        (_ %= BASE), (_ += BASE);
      }
      if (_) {
        for (; _ >= 16; )
          (_ -= 16),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]),
            (_ += _ += _[_++]);
        for (; _--; ) _ += _ += _[_++];
        (_ %= BASE), (_ %= BASE);
      }
      return _ | (_ << 16);
    }
    function crc32(_, _ = 0) {
      let _ = u8ArrayFromBufferSource(_);
      if (!_) throw new TypeError("source must be a BufferSource");
      return computeCRC32(_, _);
    }
    let endian = new Uint32Array([1]),
      endianCheck = new Uint8Array(endian.buffer, 0, 1)[0],
      computeCRC32 = endianCheck === 1 ? computeCRC32Little : computeCRC32Big;
    function computeCRC32Little(_, _ = 0) {
      let _ = ~_,
        _ = _.byteOffset,
        _ = 0,
        _ = _.byteLength,
        _ = crcTables[0],
        _ = crcTables[1],
        _ = crcTables[2],
        _ = crcTables[3];
      for (; _ && 3 & _; ) (_ = _[255 & (_ ^ _[_++])] ^ (_ >>> 8)), _--, _++;
      let _ = new Uint32Array(_.buffer, _, _ >>> 2),
        _ = 0;
      for (; _ >= 32; )
        (_ ^= _[_++]),
          (_ =
            _[255 & _] ^
            _[(_ >>> 8) & 255] ^
            _[(_ >>> 16) & 255] ^
            _[_ >>> 24]),
          (_ ^= _[_++]),
          (_ =
            _[255 & _] ^
            _[(_ >>> 8) & 255] ^
            _[(_ >>> 16) & 255] ^
            _[_ >>> 24]),
          (_ ^= _[_++]),
          (_ =
            _[255 & _] ^
            _[(_ >>> 8) & 255] ^
            _[(_ >>> 16) & 255] ^
            _[_ >>> 24]),
          (_ ^= _[_++]),
          (_ =
            _[255 & _] ^
            _[(_ >>> 8) & 255] ^
            _[(_ >>> 16) & 255] ^
            _[_ >>> 24]),
          (_ ^= _[_++]),
          (_ =
            _[255 & _] ^
            _[(_ >>> 8) & 255] ^
            _[(_ >>> 16) & 255] ^
            _[_ >>> 24]),
          (_ ^= _[_++]),
          (_ =
            _[255 & _] ^
            _[(_ >>> 8) & 255] ^
            _[(_ >>> 16) & 255] ^
            _[_ >>> 24]),
          (_ ^= _[_++]),
          (_ =
            _[255 & _] ^
            _[(_ >>> 8) & 255] ^
            _[(_ >>> 16) & 255] ^
            _[_ >>> 24]),
          (_ ^= _[_++]),
          (_ =
            _[255 & _] ^
            _[(_ >>> 8) & 255] ^
            _[(_ >>> 16) & 255] ^
            _[_ >>> 24]),
          (_ -= 32);
      for (; _ >= 4; )
        (_ ^= _[_++]),
          (_ =
            _[255 & _] ^
            _[(_ >>> 8) & 255] ^
            _[(_ >>> 16) & 255] ^
            _[_ >>> 24]),
          (_ -= 4);
      if (_) {
        _ += 4 * _;
        do _ = _[255 & (_ ^ _[_++])] ^ (_ >>> 8);
        while (--_);
      }
      return (_ = ~_), _;
    }
    function computeCRC32Big(_, _ = 0) {
      let _ = ~swap32(_),
        _ = _.byteOffset,
        _ = 0,
        _ = _.byteLength,
        _ = crcTables[4],
        _ = crcTables[5],
        _ = crcTables[6],
        _ = crcTables[7];
      for (; _ && 3 & _; ) (_ = _[(_ >>> 24) ^ _[_++]] ^ (_ << 8)), _--, _++;
      let _ = new Uint32Array(_.buffer, _, _ >>> 2),
        _ = 0;
      for (; _ >= 32; )
        (_ ^= _[_++]),
          (_ =
            _[255 & _] ^
            _[(_ >>> 8) & 255] ^
            _[(_ >>> 16) & 255] ^
            _[_ >>> 24]),
          (_ ^= _[_++]),
          (_ =
            _[255 & _] ^
            _[(_ >>> 8) & 255] ^
            _[(_ >>> 16) & 255] ^
            _[_ >>> 24]),
          (_ ^= _[_++]),
          (_ =
            _[255 & _] ^
            _[(_ >>> 8) & 255] ^
            _[(_ >>> 16) & 255] ^
            _[_ >>> 24]),
          (_ ^= _[_++]),
          (_ =
            _[255 & _] ^
            _[(_ >>> 8) & 255] ^
            _[(_ >>> 16) & 255] ^
            _[_ >>> 24]),
          (_ ^= _[_++]),
          (_ =
            _[255 & _] ^
            _[(_ >>> 8) & 255] ^
            _[(_ >>> 16) & 255] ^
            _[_ >>> 24]),
          (_ ^= _[_++]),
          (_ =
            _[255 & _] ^
            _[(_ >>> 8) & 255] ^
            _[(_ >>> 16) & 255] ^
            _[_ >>> 24]),
          (_ ^= _[_++]),
          (_ =
            _[255 & _] ^
            _[(_ >>> 8) & 255] ^
            _[(_ >>> 16) & 255] ^
            _[_ >>> 24]),
          (_ ^= _[_++]),
          (_ =
            _[255 & _] ^
            _[(_ >>> 8) & 255] ^
            _[(_ >>> 16) & 255] ^
            _[_ >>> 24]),
          (_ -= 32);
      for (; _ >= 4; )
        (_ ^= _[_++]),
          (_ =
            _[255 & _] ^
            _[(_ >>> 8) & 255] ^
            _[(_ >>> 16) & 255] ^
            _[_ >>> 24]),
          (_ -= 4);
      if (_) {
        _ += 4 * _;
        do _ = _[(_ >>> 24) ^ _[_++]] ^ (_ << 8);
        while (--_);
      }
      return (_ = ~_), swap32(_);
    }
    function makeCRCTables() {
      let _ = new ArrayBuffer(8192),
        _ = [
          new Uint32Array(_, 0, 256),
          new Uint32Array(_, 1024, 256),
          new Uint32Array(_, 2048, 256),
          new Uint32Array(_, 3072, 256),
          new Uint32Array(_, 4096, 256),
          new Uint32Array(_, 5120, 256),
          new Uint32Array(_, 6144, 256),
          new Uint32Array(_, 7168, 256),
        ];
      for (let _ = 0; _ < 256; _++) {
        let _ = _;
        for (let _ = 0; _ < 8; _++)
          _ = 1 & _ ? 3988292384 ^ (_ >>> 1) : _ >>> 1;
        (_[0][_] = _), (_[4][_] = swap32(_));
      }
      for (let _ = 0; _ < 256; _++) {
        let _ = _[0][_];
        for (let _ = 1; _ < 4; _++)
          (_ = _[0][255 & _] ^ (_ >>> 8)),
            (_[_][_] = _),
            (_[_ + 4][_] = swap32(_));
      }
      return _;
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
      append(_) {
        (this.next_in = _),
          (this.avail_in = _.length),
          (this.next_in_index = 0);
      }
      read_buf(_, _) {
        return this.next_in.subarray(_, _ + _);
      }
      read_into_buf(_, _, _) {
        let _ = this.avail_in;
        return (
          _ > _ && (_ = _),
          _ === 0
            ? 0
            : (_.set(
                this.next_in.subarray(
                  this.next_in_index,
                  this.next_in_index + _,
                ),
                _,
              ),
              (this.avail_in -= _),
              (this.next_in_index += _),
              (this.total_in += _),
              _)
        );
      }
      flush_pending(_) {
        var _ = _.pending;
        _ > this.avail_out && (_ = this.avail_out),
          _ !== 0 &&
            (this.next_out.set(
              _.pending_buf.subarray(_.pending_out, _.pending_out + _),
              this.next_out_index,
            ),
            (this.next_out_index += _),
            (_.pending_out += _),
            (this.total_out += _),
            (this.avail_out -= _),
            (_.pending -= _),
            _.pending === 0 && (_.pending_out = 0));
      }
    }
    function InfCodes() {
      let _,
        _,
        _,
        _,
        _ = 0,
        _ = 0,
        _ = 0,
        _ = 0,
        _ = 0,
        _ = 0,
        _ = 0,
        _ = 0,
        _ = 0,
        _ = 0;
      function _(_, _, _, _, _, _, _, _) {
        let _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _;
        (_ = _.next_in_index),
          (_ = _.avail_in),
          (_ = _.bitb),
          (_ = _.bitk),
          (_ = _.write),
          (_ = _ < _.read ? _.read - _ - 1 : _.end - _),
          (_ = inflate_mask[_]),
          (_ = inflate_mask[_]);
        do {
          for (; _ < 20; ) _--, (_ |= (255 & _.next_in[_++]) << _), (_ += 8);
          if (
            ((_ = _ & _),
            (_ = _),
            (_ = _),
            (_ = 3 * (_ + _)),
            (_ = _[_]),
            _ !== 0)
          )
            for (;;) {
              if (((_ >>= _[_ + 1]), (_ -= _[_ + 1]), (16 & _) != 0)) {
                for (
                  _ &= 15,
                    _ = _[_ + 2] + (_ & inflate_mask[_]),
                    _ >>= _,
                    _ -= _;
                  _ < 15;
                )
                  _--, (_ |= (255 & _.next_in[_++]) << _), (_ += 8);
                for (_ = _ & _, _ = _, _ = _, _ = 3 * (_ + _), _ = _[_]; ; ) {
                  if (((_ >>= _[_ + 1]), (_ -= _[_ + 1]), (16 & _) != 0)) {
                    for (_ &= 15; _ < _; )
                      _--, (_ |= (255 & _.next_in[_++]) << _), (_ += 8);
                    if (
                      ((_ = _[_ + 2] + (_ & inflate_mask[_])),
                      (_ >>= _),
                      (_ -= _),
                      (_ -= _),
                      _ >= _)
                    )
                      (_ = _ - _),
                        (_.window[_++] = _.window[_++]),
                        (_.window[_++] = _.window[_++]),
                        (_ -= 2);
                    else {
                      _ = _ - _;
                      do _ += _.end;
                      while (_ < 0);
                      if (((_ = _.end - _), _ > _)) {
                        _ -= _;
                        do _.window[_++] = _.window[_++];
                        while (--_ != 0);
                        _ = 0;
                      }
                    }
                    do _.window[_++] = _.window[_++];
                    while (--_ != 0);
                    break;
                  }
                  if ((64 & _) != 0)
                    return (
                      (_.msg = "invalid distance code"),
                      (_ = _.avail_in - _),
                      (_ = _ >> 3 < _ ? _ >> 3 : _),
                      (_ += _),
                      (_ -= _),
                      (_ -= _ << 3),
                      (_.bitb = _),
                      (_.bitk = _),
                      (_.avail_in = _),
                      (_.total_in += _ - _.next_in_index),
                      (_.next_in_index = _),
                      (_.write = _),
                      -3
                    );
                  (_ += _[_ + 2]),
                    (_ += _ & inflate_mask[_]),
                    (_ = 3 * (_ + _)),
                    (_ = _[_]);
                }
                break;
              }
              if ((64 & _) != 0)
                return (32 & _) != 0
                  ? ((_ = _.avail_in - _),
                    (_ = _ >> 3 < _ ? _ >> 3 : _),
                    (_ += _),
                    (_ -= _),
                    (_ -= _ << 3),
                    (_.bitb = _),
                    (_.bitk = _),
                    (_.avail_in = _),
                    (_.total_in += _ - _.next_in_index),
                    (_.next_in_index = _),
                    (_.write = _),
                    1)
                  : ((_.msg = "invalid literal/length code"),
                    (_ = _.avail_in - _),
                    (_ = _ >> 3 < _ ? _ >> 3 : _),
                    (_ += _),
                    (_ -= _),
                    (_ -= _ << 3),
                    (_.bitb = _),
                    (_.bitk = _),
                    (_.avail_in = _),
                    (_.total_in += _ - _.next_in_index),
                    (_.next_in_index = _),
                    (_.write = _),
                    -3);
              if (
                ((_ += _[_ + 2]),
                (_ += _ & inflate_mask[_]),
                (_ = 3 * (_ + _)),
                (_ = _[_]),
                _ === 0)
              ) {
                (_ >>= _[_ + 1]),
                  (_ -= _[_ + 1]),
                  (_.window[_++] = _[_ + 2]),
                  _--;
                break;
              }
            }
          else
            (_ >>= _[_ + 1]), (_ -= _[_ + 1]), (_.window[_++] = _[_ + 2]), _--;
        } while (_ >= 258 && _ >= 10);
        return (
          (_ = _.avail_in - _),
          (_ = _ >> 3 < _ ? _ >> 3 : _),
          (_ += _),
          (_ -= _),
          (_ -= _ << 3),
          (_.bitb = _),
          (_.bitk = _),
          (_.avail_in = _),
          (_.total_in += _ - _.next_in_index),
          (_.next_in_index = _),
          (_.write = _),
          0
        );
      }
      return {
        init: function (_, _, _, _, _, _) {
          (_ = 0), (_ = _), (_ = _), (_ = _), (_ = _), (_ = _), (_ = _);
        },
        proc: function (_, _, _) {
          let _,
            _,
            _,
            _,
            _,
            _,
            _,
            _ = 0,
            _ = 0,
            _ = 0;
          for (
            _ = _.next_in_index,
              _ = _.avail_in,
              _ = _.bitb,
              _ = _.bitk,
              _ = _.write,
              _ = _ < _.read ? _.read - _ - 1 : _.end - _;
            ;
          )
            switch (_) {
              case 0:
                if (
                  _ >= 258 &&
                  _ >= 10 &&
                  ((_.bitb = _),
                  (_.bitk = _),
                  (_.avail_in = _),
                  (_.total_in += _ - _.next_in_index),
                  (_.next_in_index = _),
                  (_.write = _),
                  (_ = _(_, _, _, _, _, _, _, _)),
                  (_ = _.next_in_index),
                  (_ = _.avail_in),
                  (_ = _.bitb),
                  (_ = _.bitk),
                  (_ = _.write),
                  (_ = _ < _.read ? _.read - _ - 1 : _.end - _),
                  _ !== 0)
                ) {
                  _ = _ === 1 ? 7 : 9;
                  break;
                }
                (_ = _), (_ = _), (_ = _), (_ = 1);
              case 1:
                for (_ = _; _ < _; ) {
                  if (_ === 0)
                    return (
                      (_.bitb = _),
                      (_.bitk = _),
                      (_.avail_in = _),
                      (_.total_in += _ - _.next_in_index),
                      (_.next_in_index = _),
                      (_.write = _),
                      _.inflate_flush(_, _)
                    );
                  (_ = 0), _--, (_ |= (255 & _.next_in[_++]) << _), (_ += 8);
                }
                if (
                  ((_ = 3 * (_ + (_ & inflate_mask[_]))),
                  (_ >>>= _[_ + 1]),
                  (_ -= _[_ + 1]),
                  (_ = _[_]),
                  _ === 0)
                ) {
                  (_ = _[_ + 2]), (_ = 6);
                  break;
                }
                if ((16 & _) != 0) {
                  (_ = 15 & _), (_ = _[_ + 2]), (_ = 2);
                  break;
                }
                if ((64 & _) == 0) {
                  (_ = _), (_ = _ / 3 + _[_ + 2]);
                  break;
                }
                if ((32 & _) != 0) {
                  _ = 7;
                  break;
                }
                return (
                  (_ = 9),
                  (_.msg = "invalid literal/length code"),
                  (_ = -3),
                  (_.bitb = _),
                  (_.bitk = _),
                  (_.avail_in = _),
                  (_.total_in += _ - _.next_in_index),
                  (_.next_in_index = _),
                  (_.write = _),
                  _.inflate_flush(_, _)
                );
              case 2:
                for (_ = _; _ < _; ) {
                  if (_ === 0)
                    return (
                      (_.bitb = _),
                      (_.bitk = _),
                      (_.avail_in = _),
                      (_.total_in += _ - _.next_in_index),
                      (_.next_in_index = _),
                      (_.write = _),
                      _.inflate_flush(_, _)
                    );
                  (_ = 0), _--, (_ |= (255 & _.next_in[_++]) << _), (_ += 8);
                }
                (_ += _ & inflate_mask[_]),
                  (_ >>= _),
                  (_ -= _),
                  (_ = _),
                  (_ = _),
                  (_ = _),
                  (_ = 3);
              case 3:
                for (_ = _; _ < _; ) {
                  if (_ === 0)
                    return (
                      (_.bitb = _),
                      (_.bitk = _),
                      (_.avail_in = _),
                      (_.total_in += _ - _.next_in_index),
                      (_.next_in_index = _),
                      (_.write = _),
                      _.inflate_flush(_, _)
                    );
                  (_ = 0), _--, (_ |= (255 & _.next_in[_++]) << _), (_ += 8);
                }
                if (
                  ((_ = 3 * (_ + (_ & inflate_mask[_]))),
                  (_ >>= _[_ + 1]),
                  (_ -= _[_ + 1]),
                  (_ = _[_]),
                  (16 & _) != 0)
                ) {
                  (_ = 15 & _), (_ = _[_ + 2]), (_ = 4);
                  break;
                }
                if ((64 & _) == 0) {
                  (_ = _), (_ = _ / 3 + _[_ + 2]);
                  break;
                }
                return (
                  (_ = 9),
                  (_.msg = "invalid distance code"),
                  (_ = -3),
                  (_.bitb = _),
                  (_.bitk = _),
                  (_.avail_in = _),
                  (_.total_in += _ - _.next_in_index),
                  (_.next_in_index = _),
                  (_.write = _),
                  _.inflate_flush(_, _)
                );
              case 4:
                for (_ = _; _ < _; ) {
                  if (_ === 0)
                    return (
                      (_.bitb = _),
                      (_.bitk = _),
                      (_.avail_in = _),
                      (_.total_in += _ - _.next_in_index),
                      (_.next_in_index = _),
                      (_.write = _),
                      _.inflate_flush(_, _)
                    );
                  (_ = 0), _--, (_ |= (255 & _.next_in[_++]) << _), (_ += 8);
                }
                (_ += _ & inflate_mask[_]), (_ >>= _), (_ -= _), (_ = 5);
              case 5:
                for (_ = _ - _; _ < 0; ) _ += _.end;
                for (; _ !== 0; ) {
                  if (
                    _ === 0 &&
                    (_ === _.end &&
                      _.read !== 0 &&
                      ((_ = 0), (_ = _ < _.read ? _.read - _ - 1 : _.end - _)),
                    _ === 0 &&
                      ((_.write = _),
                      (_ = _.inflate_flush(_, _)),
                      (_ = _.write),
                      (_ = _ < _.read ? _.read - _ - 1 : _.end - _),
                      _ === _.end &&
                        _.read !== 0 &&
                        ((_ = 0),
                        (_ = _ < _.read ? _.read - _ - 1 : _.end - _)),
                      _ === 0))
                  )
                    return (
                      (_.bitb = _),
                      (_.bitk = _),
                      (_.avail_in = _),
                      (_.total_in += _ - _.next_in_index),
                      (_.next_in_index = _),
                      (_.write = _),
                      _.inflate_flush(_, _)
                    );
                  (_.window[_++] = _.window[_++]),
                    _--,
                    _ === _.end && (_ = 0),
                    _--;
                }
                _ = 0;
                break;
              case 6:
                if (
                  _ === 0 &&
                  (_ === _.end &&
                    _.read !== 0 &&
                    ((_ = 0), (_ = _ < _.read ? _.read - _ - 1 : _.end - _)),
                  _ === 0 &&
                    ((_.write = _),
                    (_ = _.inflate_flush(_, _)),
                    (_ = _.write),
                    (_ = _ < _.read ? _.read - _ - 1 : _.end - _),
                    _ === _.end &&
                      _.read !== 0 &&
                      ((_ = 0), (_ = _ < _.read ? _.read - _ - 1 : _.end - _)),
                    _ === 0))
                )
                  return (
                    (_.bitb = _),
                    (_.bitk = _),
                    (_.avail_in = _),
                    (_.total_in += _ - _.next_in_index),
                    (_.next_in_index = _),
                    (_.write = _),
                    _.inflate_flush(_, _)
                  );
                (_ = 0), (_.window[_++] = _), _--, (_ = 0);
                break;
              case 7:
                if (
                  (_ > 7 && ((_ -= 8), _++, _--),
                  (_.write = _),
                  (_ = _.inflate_flush(_, _)),
                  (_ = _.write),
                  (_ = _ < _.read ? _.read - _ - 1 : _.end - _),
                  _.read !== _.write)
                )
                  return (
                    (_.bitb = _),
                    (_.bitk = _),
                    (_.avail_in = _),
                    (_.total_in += _ - _.next_in_index),
                    (_.next_in_index = _),
                    (_.write = _),
                    _.inflate_flush(_, _)
                  );
                _ = 8;
              case 8:
                return (
                  (_ = 1),
                  (_.bitb = _),
                  (_.bitk = _),
                  (_.avail_in = _),
                  (_.total_in += _ - _.next_in_index),
                  (_.next_in_index = _),
                  (_.write = _),
                  _.inflate_flush(_, _)
                );
              case 9:
                return (
                  (_ = -3),
                  (_.bitb = _),
                  (_.bitk = _),
                  (_.avail_in = _),
                  (_.total_in += _ - _.next_in_index),
                  (_.next_in_index = _),
                  (_.write = _),
                  _.inflate_flush(_, _)
                );
              default:
                return (
                  (_ = -2),
                  (_.bitb = _),
                  (_.bitk = _),
                  (_.avail_in = _),
                  (_.total_in += _ - _.next_in_index),
                  (_.next_in_index = _),
                  (_.write = _),
                  _.inflate_flush(_, _)
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
      _,
      _ = [0],
      _ = new Int32Array(BMAX + 1),
      _ = new Int32Array(3),
      _ = new Int32Array(BMAX),
      _ = new Int32Array(BMAX + 1);
    function huft_build(_, _, _, _, _, _, _, _, _, _, _) {
      let _, _, _, _, _, _, _, _, _, _, _, _, _, _, _;
      (_ = 0), (_ = _);
      do _[_[_ + _]]++, _++, _--;
      while (_ !== 0);
      if (_[0] === _) return (_[0] = -1), (_[0] = 0), 0;
      for (_ = _[0], _ = 1; _ <= BMAX && _[_] === 0; _++);
      for (_ = _, _ < _ && (_ = _), _ = BMAX; _ !== 0 && _[_] === 0; _--);
      for (_ = _, _ > _ && (_ = _), _[0] = _, _ = 1 << _; _ < _; _++, _ <<= 1)
        if (((_ -= _[_]), _ < 0)) return -3;
      if (((_ -= _[_]), _ < 0)) return -3;
      for (_[_] += _, _[1] = _ = 0, _ = 1, _ = 2; --_ != 0; )
        (_[_] = _ += _[_]), _++, _++;
      (_ = 0), (_ = 0);
      do (_ = _[_ + _]), _ !== 0 && (_[_[_]++] = _), _++;
      while (++_ < _);
      for (
        _ = _[_], _[0] = _ = 0, _ = 0, _ = -1, _ = -_, _[0] = 0, _ = 0, _ = 0;
        _ <= _;
        _++
      )
        for (_ = _[_]; _-- != 0; ) {
          for (; _ > _ + _; ) {
            if (
              (_++,
              (_ += _),
              (_ = _ - _),
              (_ = _ > _ ? _ : _),
              (_ = 1 << (_ = _ - _)),
              _ > _ + 1 && ((_ -= _ + 1), (_ = _), _ < _))
            )
              for (; ++_ < _ && ((_ <<= 1), !(_ <= _[++_])); ) _ -= _[_];
            if (((_ = 1 << _), _[0] + _ > 1400)) return -3;
            (_[_] = _ = _[0]),
              (_[0] += _),
              _ !== 0
                ? ((_[_] = _),
                  (_[0] = _),
                  (_[1] = _),
                  (_ = _ >>> (_ - _)),
                  (_[2] = _ - _[_ - 1] - _),
                  _.set(_, 3 * (_[_ - 1] + _)))
                : (_[0] = _);
          }
          for (
            _[1] = _ - _,
              _ >= _
                ? (_[0] = 192)
                : _[_] < _
                  ? ((_[0] = _[_] < 256 ? 0 : 96), (_[2] = _[_++]))
                  : ((_[0] = _[_[_] - _] + 16 + 64), (_[2] = _[_[_++] - _])),
              _ = 1 << (_ - _),
              _ = _ >>> _;
            _ < _;
            _ += _
          )
            _.set(_, 3 * (_ + _));
          for (_ = 1 << (_ - 1); (_ & _) != 0; _ >>>= 1) _ ^= _;
          for (_ ^= _, _ = (1 << _) - 1; (_ & _) !== _[_]; )
            _--, (_ -= _), (_ = (1 << _) - 1);
        }
      return _ !== 0 && _ !== 1 ? -5 : 0;
    }
    function initWorkArea(_) {
      _ = new Int32Array(_);
      for (let _ = 0; _ < BMAX + 1; _++) (_[_] = 0), (_[_] = 0), (_[_] = 0);
      for (let _ = 0; _ < 3; _++) _[_] = 0;
    }
    function inflate_trees_bits(_, _, _, _, _) {
      initWorkArea(19), (_[0] = 0);
      let _ = huft_build(_, 0, 19, 19, null, null, _, _, _, _, _);
      return (
        _ === -3
          ? (_.msg = "oversubscribed dynamic bit lengths tree")
          : (_ !== -5 && _[0] !== 0) ||
            ((_.msg = "incomplete dynamic bit lengths tree"), (_ = -3)),
        _
      );
    }
    function inflate_trees_dynamic(_, _, _, _, _, _, _, _, _) {
      initWorkArea(288), (_[0] = 0);
      let _ = huft_build(_, 0, _, 257, cplens, cplext, _, _, _, _, _);
      return _ !== 0 || _[0] === 0
        ? (_ === -3
            ? (_.msg = "oversubscribed literal/length tree")
            : ((_.msg = "incomplete literal/length tree"), (_ = -3)),
          _)
        : (initWorkArea(288),
          (_ = huft_build(_, _, _, 0, cpdist, cpdext, _, _, _, _, _)),
          _ !== 0 || (_[0] === 0 && _ > 257)
            ? (_ === -3
                ? (_.msg = "oversubscribed distance tree")
                : _ === -5
                  ? ((_.msg = "incomplete distance tree"), (_ = -3))
                  : ((_.msg = "empty distance tree with lengths"), (_ = -3)),
              _)
            : 0);
    }
    function inflate_trees_fixed(_, _, _, _) {
      return (
        (_[0] = fixed_bl),
        (_[0] = fixed_bd),
        (_[0] = fixed_tl),
        (_[0] = fixed_td),
        0
      );
    }
    let border = [
      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
    ];
    class InfBlocks {
      constructor(_) {
        (this.codes = InfCodes()),
          (this.hufts = new Int32Array(4200)),
          (this.mode = 0),
          (this.bitk = 0),
          (this.bitb = 0),
          (this.read = 0),
          (this.write = 0),
          (this.last = 0),
          (this.end = _),
          (this.window = new Uint8Array(_));
      }
      reset() {
        (this.bitk = 0),
          (this.bitb = 0),
          (this.read = 0),
          (this.write = 0),
          (this.last = 0);
      }
      inflate_flush(_, _) {
        let _, _, _;
        return (
          (_ = _.next_out_index),
          (_ = this.read),
          (_ = (_ <= this.write ? this.write : this.end) - _),
          _ > _.avail_out && (_ = _.avail_out),
          _ !== 0 && _ === -5 && (_ = 0),
          (_.avail_out -= _),
          (_.total_out += _),
          _.next_out.set(this.window.subarray(_, _ + _), _),
          (_ += _),
          (_ += _),
          _ === this.end &&
            ((_ = 0),
            this.write === this.end && (this.write = 0),
            (_ = this.write - _),
            _ > _.avail_out && (_ = _.avail_out),
            _ !== 0 && _ === -5 && (_ = 0),
            (_.avail_out -= _),
            (_.total_out += _),
            _.next_out.set(this.window.subarray(_, _ + _), _),
            (_ += _),
            (_ += _)),
          (_.next_out_index = _),
          (this.read = _),
          _
        );
      }
      proc(_, _) {
        let _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _ = 0,
          _ = 0,
          _ = 0,
          _ = new Uint8Array(320),
          _ = [0],
          _ = [0],
          _ = this.codes,
          _ = this.hufts;
        for (
          _ = _.next_in_index,
            _ = _.avail_in,
            _ = this.bitb,
            _ = this.bitk,
            _ = this.write,
            _ = _ < this.read ? this.read - _ - 1 : this.end - _;
          ;
        )
          switch (this.mode) {
            case 0:
              if (this.last) return 1;
              for (; _ < 3; ) {
                if (_ === 0)
                  return (
                    (this.bitb = _),
                    (this.bitk = _),
                    (_.avail_in = _),
                    (_.total_in += _ - _.next_in_index),
                    (_.next_in_index = _),
                    (this.write = _),
                    this.inflate_flush(_, _)
                  );
                (_ = 0), _--, (_ |= (255 & _.next_in[_++]) << _), (_ += 8);
              }
              switch (((_ = 7 & _), (this.last = 1 & _), _ >>> 1)) {
                case 0:
                  (_ >>>= 3),
                    (_ -= 3),
                    (_ = 7 & _),
                    (_ >>>= _),
                    (_ -= _),
                    (this.mode = 1);
                  break;
                case 1:
                  let _ = [0],
                    _ = [0],
                    _ = [[]],
                    _ = [[]];
                  inflate_trees_fixed(_, _, _, _),
                    _.init(_[0], _[0], _[0], 0, _[0], 0),
                    (_ >>>= 3),
                    (_ -= 3),
                    (this.mode = 6);
                  break;
                case 2:
                  (_ >>>= 3), (_ -= 3), (this.mode = 3);
                  break;
                case 3:
                  return (
                    (_ >>>= 3),
                    (_ -= 3),
                    (this.mode = 9),
                    (_.msg = "invalid block type"),
                    (_ = -3),
                    (this.bitb = _),
                    (this.bitk = _),
                    (_.avail_in = _),
                    (_.total_in += _ - _.next_in_index),
                    (_.next_in_index = _),
                    (this.write = _),
                    this.inflate_flush(_, _)
                  );
              }
              break;
            case 1:
              for (; _ < 32; ) {
                if (_ === 0)
                  return (
                    (this.bitb = _),
                    (this.bitk = _),
                    (_.avail_in = _),
                    (_.total_in += _ - _.next_in_index),
                    (_.next_in_index = _),
                    (this.write = _),
                    this.inflate_flush(_, _)
                  );
                (_ = 0), _--, (_ |= (255 & _.next_in[_++]) << _), (_ += 8);
              }
              if (((~_ >>> 16) & 65535) != (65535 & _))
                return (
                  (this.mode = 9),
                  (_.msg = "invalid stored block lengths"),
                  (_ = -3),
                  (this.bitb = _),
                  (this.bitk = _),
                  (_.avail_in = _),
                  (_.total_in += _ - _.next_in_index),
                  (_.next_in_index = _),
                  (this.write = _),
                  this.inflate_flush(_, _)
                );
              (_ = 65535 & _),
                (_ = _ = 0),
                (this.mode = _ !== 0 ? 2 : this.last !== 0 ? 7 : 0);
              break;
            case 2:
              if (_ === 0)
                return (
                  (this.bitb = _),
                  (this.bitk = _),
                  (_.avail_in = _),
                  (_.total_in += _ - _.next_in_index),
                  (_.next_in_index = _),
                  (this.write = _),
                  this.inflate_flush(_, _)
                );
              if (
                _ === 0 &&
                (_ === this.end &&
                  this.read !== 0 &&
                  ((_ = 0),
                  (_ = _ < this.read ? this.read - _ - 1 : this.end - _)),
                _ === 0 &&
                  ((this.write = _),
                  (_ = this.inflate_flush(_, _)),
                  (_ = this.write),
                  (_ = _ < this.read ? this.read - _ - 1 : this.end - _),
                  _ === this.end &&
                    this.read !== 0 &&
                    ((_ = 0),
                    (_ = _ < this.read ? this.read - _ - 1 : this.end - _)),
                  _ === 0))
              )
                return (
                  (this.bitb = _),
                  (this.bitk = _),
                  (_.avail_in = _),
                  (_.total_in += _ - _.next_in_index),
                  (_.next_in_index = _),
                  (this.write = _),
                  this.inflate_flush(_, _)
                );
              if (
                ((_ = 0),
                (_ = _),
                _ > _ && (_ = _),
                _ > _ && (_ = _),
                this.window.set(_.read_buf(_, _), _),
                (_ += _),
                (_ -= _),
                (_ += _),
                (_ -= _),
                (_ -= _),
                _ !== 0)
              )
                break;
              this.mode = this.last !== 0 ? 7 : 0;
              break;
            case 3:
              for (; _ < 14; ) {
                if (_ === 0)
                  return (
                    (this.bitb = _),
                    (this.bitk = _),
                    (_.avail_in = _),
                    (_.total_in += _ - _.next_in_index),
                    (_.next_in_index = _),
                    (this.write = _),
                    this.inflate_flush(_, _)
                  );
                (_ = 0), _--, (_ |= (255 & _.next_in[_++]) << _), (_ += 8);
              }
              if (((_ = _ = 16383 & _), (31 & _) > 29 || ((_ >> 5) & 31) > 29))
                return (
                  (this.mode = 9),
                  (_.msg = "too many length or distance symbols"),
                  (_ = -3),
                  (this.bitb = _),
                  (this.bitk = _),
                  (_.avail_in = _),
                  (_.total_in += _ - _.next_in_index),
                  (_.next_in_index = _),
                  (this.write = _),
                  this.inflate_flush(_, _)
                );
              for (_ = 258 + (31 & _) + ((_ >> 5) & 31), _ = 0; _ < _; _++)
                _[_] = 0;
              for (
                _ >>>= 14, _ -= 14, _ = 0, this.mode = 4;
                _ < 4 + (_ >>> 10);
              ) {
                for (; _ < 3; ) {
                  if (_ === 0)
                    return (
                      (this.bitb = _),
                      (this.bitk = _),
                      (_.avail_in = _),
                      (_.total_in += _ - _.next_in_index),
                      (_.next_in_index = _),
                      (this.write = _),
                      this.inflate_flush(_, _)
                    );
                  (_ = 0), _--, (_ |= (255 & _.next_in[_++]) << _), (_ += 8);
                }
                (_[border[_++]] = 7 & _), (_ >>>= 3), (_ -= 3);
              }
              for (; _ < 19; ) _[border[_++]] = 0;
              if (
                ((_[0] = 7), (_ = inflate_trees_bits(_, _, _, _, _)), _ !== 0)
              )
                return (
                  (_ = _) === -3 && (this.mode = 9),
                  (this.bitb = _),
                  (this.bitk = _),
                  (_.avail_in = _),
                  (_.total_in += _ - _.next_in_index),
                  (_.next_in_index = _),
                  (this.write = _),
                  this.inflate_flush(_, _)
                );
              for (
                _ = 0, this.mode = 5;
                (_ = _), !(_ >= 258 + (31 & _) + ((_ >> 5) & 31));
              ) {
                let _, _;
                for (_ = _[0]; _ < _; ) {
                  if (_ === 0)
                    return (
                      (this.bitb = _),
                      (this.bitk = _),
                      (_.avail_in = _),
                      (_.total_in += _ - _.next_in_index),
                      (_.next_in_index = _),
                      (this.write = _),
                      this.inflate_flush(_, _)
                    );
                  (_ = 0), _--, (_ |= (255 & _.next_in[_++]) << _), (_ += 8);
                }
                if (
                  ((_ = _[3 * (_[0] + (_ & inflate_mask[_])) + 1]),
                  (_ = _[3 * (_[0] + (_ & inflate_mask[_])) + 2]),
                  _ < 16)
                )
                  (_ >>>= _), (_ -= _), (_[_++] = _);
                else {
                  for (
                    _ = _ === 18 ? 7 : _ - 14, _ = _ === 18 ? 11 : 3;
                    _ < _ + _;
                  ) {
                    if (_ === 0)
                      return (
                        (this.bitb = _),
                        (this.bitk = _),
                        (_.avail_in = _),
                        (_.total_in += _ - _.next_in_index),
                        (_.next_in_index = _),
                        (this.write = _),
                        this.inflate_flush(_, _)
                      );
                    (_ = 0), _--, (_ |= (255 & _.next_in[_++]) << _), (_ += 8);
                  }
                  if (
                    ((_ >>>= _),
                    (_ -= _),
                    (_ += _ & inflate_mask[_]),
                    (_ >>>= _),
                    (_ -= _),
                    (_ = _),
                    (_ = _),
                    _ + _ > 258 + (31 & _) + ((_ >> 5) & 31) ||
                      (_ === 16 && _ < 1))
                  )
                    return (
                      (this.mode = 9),
                      (_.msg = "invalid bit length repeat"),
                      (_ = -3),
                      (this.bitb = _),
                      (this.bitk = _),
                      (_.avail_in = _),
                      (_.total_in += _ - _.next_in_index),
                      (_.next_in_index = _),
                      (this.write = _),
                      this.inflate_flush(_, _)
                    );
                  _ = _ === 16 ? _[_ - 1] : 0;
                  do _[_++] = _;
                  while (--_ != 0);
                  _ = _;
                }
              }
              _[0] = -1;
              let _ = [9],
                _ = [6],
                _ = [0],
                _ = [0];
              if (
                ((_ = inflate_trees_dynamic(
                  257 + (31 & _),
                  1 + ((_ >> 5) & 31),
                  _,
                  _,
                  _,
                  _,
                  _,
                  _,
                  _,
                )),
                _ !== 0)
              )
                return (
                  _ === -3 && (this.mode = 9),
                  (_ = _),
                  (this.bitb = _),
                  (this.bitk = _),
                  (_.avail_in = _),
                  (_.total_in += _ - _.next_in_index),
                  (_.next_in_index = _),
                  (this.write = _),
                  this.inflate_flush(_, _)
                );
              _.init(_[0], _[0], _, _[0], _, _[0]), (this.mode = 6);
            case 6:
              if (
                ((this.bitb = _),
                (this.bitk = _),
                (_.avail_in = _),
                (_.total_in += _ - _.next_in_index),
                (_.next_in_index = _),
                (this.write = _),
                (_ = _.proc(this, _, _)) !== 1)
              )
                return this.inflate_flush(_, _);
              if (
                ((_ = 0),
                (_ = _.next_in_index),
                (_ = _.avail_in),
                (_ = this.bitb),
                (_ = this.bitk),
                (_ = this.write),
                (_ = _ < this.read ? this.read - _ - 1 : this.end - _),
                this.last === 0)
              ) {
                this.mode = 0;
                break;
              }
              this.mode = 7;
            case 7:
              if (
                ((this.write = _),
                (_ = this.inflate_flush(_, _)),
                (_ = this.write),
                (_ = _ < this.read ? this.read - _ - 1 : this.end - _),
                this.read !== this.write)
              )
                return (
                  (this.bitb = _),
                  (this.bitk = _),
                  (_.avail_in = _),
                  (_.total_in += _ - _.next_in_index),
                  (_.next_in_index = _),
                  (this.write = _),
                  this.inflate_flush(_, _)
                );
              this.mode = 8;
            case 8:
              return (
                (_ = 1),
                (this.bitb = _),
                (this.bitk = _),
                (_.avail_in = _),
                (_.total_in += _ - _.next_in_index),
                (_.next_in_index = _),
                (this.write = _),
                this.inflate_flush(_, _)
              );
            case 9:
              return (
                (_ = -3),
                (this.bitb = _),
                (this.bitk = _),
                (_.avail_in = _),
                (_.total_in += _ - _.next_in_index),
                (_.next_in_index = _),
                (this.write = _),
                this.inflate_flush(_, _)
              );
            default:
              return (
                (_ = -2),
                (this.bitb = _),
                (this.bitk = _),
                (_.avail_in = _),
                (_.total_in += _ - _.next_in_index),
                (_.next_in_index = _),
                (this.write = _),
                this.inflate_flush(_, _)
              );
          }
      }
      set_dictionary(_, _, _) {
        this.window.set(_.subarray(_, _ + _), 0), (this.read = this.write = _);
      }
    }
    class Inflate {
      constructor(_) {
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
          (this.mode = _ ? 22 : 0);
      }
      get isComplete() {
        let { blocks: _ } = this,
          _ = (_.mode === 0 || _.mode === 8) && _.bitb === 0 && _.bitk === 0;
        return this.mode === 31 && _;
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
      inflate(_) {
        let _;
        if (!_ || !_.next_in) return -2;
        let _ = -5;
        for (;;)
          switch (this.mode) {
            case 0:
              if (_.avail_in === 0) return _;
              if (((_ = _.next_in[_.next_in_index]), _ !== GZIP_ID1)) {
                this.mode = 2;
                break;
              }
              (this.mode = 1),
                (_ = 0),
                _.avail_in--,
                _.total_in++,
                _.next_in_index++;
            case 1:
              if (_.avail_in === 0) return _;
              if (
                ((_ = 0),
                _.avail_in--,
                _.total_in++,
                (_ = _.next_in[_.next_in_index++]),
                _ !== GZIP_ID2)
              ) {
                (this.mode = 32), (_.msg = "invalid gzip id");
                break;
              }
              (this.isGZip = !0), (this.mode = 2);
            case 2:
              if (_.avail_in === 0) return _;
              if (
                ((_ = 0),
                _.avail_in--,
                _.total_in++,
                (this.method = _.next_in[_.next_in_index++]),
                (15 & this.method) !== Z_DEFLATED)
              ) {
                (this.mode = 32), (_.msg = "unknown compression method");
                break;
              }
              if (8 + (this.method >> 4) > this.wbits) {
                (this.mode = 32), (_.msg = "invalid window size");
                break;
              }
              this.mode = 3;
            case 3:
              if (_.avail_in === 0) return _;
              if (
                ((_ = 0),
                _.avail_in--,
                _.total_in++,
                (_ = 255 & _.next_in[_.next_in_index++]),
                this.isGZip)
              ) {
                (this.gflags = _), (this.mode = 9);
                break;
              }
              if (((this.method << 8) + _) % 31 != 0) {
                (this.mode = 32), (_.msg = "incorrect header check");
                break;
              }
              if ((_ & PRESET_DICT) == 0) {
                this.mode = 22;
                break;
              }
              this.mode = 4;
            case 4:
              if (_.avail_in === 0) return _;
              (_ = 0),
                _.avail_in--,
                _.total_in++,
                (this.dictChecksum =
                  ((255 & _.next_in[_.next_in_index++]) << 24) & 4278190080),
                (this.mode = 5);
            case 5:
              if (_.avail_in === 0) return _;
              (_ = 0),
                _.avail_in--,
                _.total_in++,
                (this.dictChecksum |=
                  ((255 & _.next_in[_.next_in_index++]) << 16) & 16711680),
                (this.mode = 6);
            case 6:
              if (_.avail_in === 0) return _;
              (_ = 0),
                _.avail_in--,
                _.total_in++,
                (this.dictChecksum |=
                  ((255 & _.next_in[_.next_in_index++]) << 8) & 65280),
                (this.mode = 7);
            case 7:
              return _.avail_in === 0
                ? _
                : ((_ = 0),
                  _.avail_in--,
                  _.total_in++,
                  (this.dictChecksum |= 255 & _.next_in[_.next_in_index++]),
                  (this.mode = 8),
                  2);
            case 8:
              return (this.mode = 32), (_.msg = "need dictionary"), -2;
            case 9:
            case 10:
            case 11:
            case 12:
              if (_.avail_in === 0) return _;
              if (
                ((_ = 0),
                _.avail_in--,
                _.total_in++,
                (_ = 255 & _.next_in[_.next_in_index++]),
                (this.mtime = (this.mtime >>> 8) | (_ << 24)),
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
              if (_.avail_in === 0) return _;
              (_ = 0),
                _.avail_in--,
                _.total_in++,
                _.next_in_index++,
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
              if (_.avail_in === 0) return _;
              if (
                ((_ = 0),
                _.avail_in--,
                _.total_in++,
                (_ = 255 & _.next_in[_.next_in_index++]),
                (this.xlen = (this.xlen >>> 8) | (_ << 24)),
                this.mode === 15)
              )
                break;
              this.xlen = this.xlen >>> 16;
            case 17:
              if (_.avail_in === 0) return _;
              (_ = 0),
                _.avail_in--,
                _.total_in++,
                _.next_in_index++,
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
              if (_.avail_in === 0) return _;
              (_ = 0),
                _.avail_in--,
                _.total_in++,
                (_ = 255 & _.next_in[_.next_in_index++]),
                _ !== 0
                  ? this.mode === 18 && (this.name += String.fromCharCode(_))
                  : this.mode !== 19 && 16 & this.gflags
                    ? (this.mode = 19)
                    : 2 & this.gflags
                      ? (this.mode = 20)
                      : (this.mode = 22);
              break;
            case 22:
              if (((_ = this.blocks.proc(_, _)), _ === -3)) {
                this.mode = 32;
                break;
              }
              if (_ !== 1) return _;
              if (((_ = 0), this.blocks.reset(), this.method === 0)) {
                this.mode = 31;
                break;
              }
              this.mode = 23;
            case 23:
            case 24:
            case 25:
            case 26:
              if (_.avail_in === 0) return _;
              (_ = 0),
                _.avail_in--,
                _.total_in++,
                (_ = 255 & _.next_in[_.next_in_index++]),
                this.isGZip
                  ? (this.fullChecksum = (this.fullChecksum >>> 8) | (_ << 24))
                  : (this.fullChecksum = (this.fullChecksum << 8) | _),
                this.mode++,
                this.mode !== 27 || this.isGZip || (this.mode = 31);
              break;
            case 27:
            case 28:
            case 29:
            case 30:
              if (_.avail_in === 0) return _;
              (_ = 0),
                _.avail_in--,
                _.total_in++,
                (_ = 255 & _.next_in[_.next_in_index++]),
                (this.inflatedSize = (this.inflatedSize >>> 8) | (_ << 24)),
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
      inflateSetDictionary(_) {
        if (this.mode !== 8) return -2;
        let _ = u8ArrayFromBufferSource(_);
        if (!_) return -3;
        let _ = 0,
          _ = _.byteLength;
        return (
          _ >= 1 << this.wbits &&
            ((_ = (1 << this.wbits) - 1), (_ = _.byteLength - _)),
          adler32(_) !== this.dictChecksum
            ? -3
            : (this.blocks.set_dictionary(_, _, _), (this.mode = 22), 0)
        );
      }
    }
    class Inflater {
      constructor(_) {
        let _ = _?.raw;
        if (_ !== void 0 && _ !== !0 && _ !== !1)
          throw new TypeError("options.raw must be undefined or true or false");
        let _ = _ !== void 0 && _,
          _ = _?.dictionary;
        if (_ !== void 0) {
          if (_)
            throw new RangeError(
              "options.dictionary cannot be set when options.raw is true",
            );
          if (u8ArrayFromBufferSource(_) === void 0)
            throw new TypeError(
              "options.dictionary must be undefined or a buffer or a buffer view",
            );
          this.customDict = _;
        }
        (this.inflate = new Inflate(_)), (this._ = new ZStream());
      }
      append(_) {
        let _ = u8ArrayFromBufferSource(_);
        if (!(_ instanceof Uint8Array))
          throw new TypeError("data must be an ArrayBuffer or buffer view");
        if (_.length === 0) return [];
        let { inflate: _, _: _ } = this,
          _ = [],
          _ = !1;
        _.append(_);
        do {
          (_.next_out_index = 0),
            (_.avail_out = OUTPUT_BUFSIZE),
            _.avail_in !== 0 || _ || ((_.next_in_index = 0), (_ = !0));
          let _ = _.inflate(_);
          if (_ && _ === -5) {
            if (_.avail_in !== 0) throw new Error("inflate error: bad input");
          } else if (_ === 2) {
            if (!this.customDict)
              throw new Error("Custom dictionary required for this data");
            if (_.inflateSetDictionary(this.customDict) !== 0)
              throw new Error("Custom dictionary is not valid for this data");
          } else if (_ !== 0 && _ !== 1)
            throw new Error("inflate error: " + _.msg);
          if ((_ || _ === 1) && _.avail_in === _.length)
            throw new Error("inflate error: bad input data");
          if (_.next_out_index) {
            let _ = new Uint8Array(_.next_out.subarray(0, _.next_out_index)),
              _ = _.containerFormat === 2;
            this.checksum === void 0 && (this.checksum = _ ? 0 : 1),
              (this.checksum = _
                ? crc32(_, this.checksum)
                : adler32(_, this.checksum)),
              _.push(_);
          }
        } while (_.avail_in > 0 || _.avail_out === 0);
        return _;
      }
      finish() {
        let _ = this.inflate.checksum,
          _ = this.inflate.fullSize,
          _ = this.inflate.isComplete,
          _ =
            _ === 0 ? "unchecked" : _ === this.checksum ? "match" : "mismatch",
          _ =
            _ === 0
              ? "unchecked"
              : _ === this._.total_out
                ? "match"
                : "mismatch";
        return {
          success: _ && _ !== "mismatch" && _ !== "mismatch",
          complete: _,
          checksum: _,
          fileSize: _,
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
      constructor(_, _) {
        (this.dyn_tree = _), (this.stat_desc = _), (this.max_code = 0);
      }
      gen_bitlen(_) {
        var _,
          _,
          _,
          _,
          _,
          _,
          _ = this.dyn_tree,
          _ = this.stat_desc.static_tree,
          _ = this.stat_desc.extra_bits,
          _ = this.stat_desc.extra_base,
          _ = this.stat_desc.max_length,
          _ = 0;
        for (_ = 0; _ <= 15; _++) _.bl_count[_] = 0;
        for (
          _[2 * _.heap[_.heap_max] + 1] = 0, _ = _.heap_max + 1;
          _ < HEAP_SIZE;
          _++
        )
          (_ = _[2 * _[2 * (_ = _.heap[_]) + 1] + 1] + 1) > _ && ((_ = _), _++),
            (_[2 * _ + 1] = _),
            _ > this.max_code ||
              (_.bl_count[_]++,
              (_ = 0),
              _ >= _ && (_ = _[_ - _]),
              (_ = _[2 * _]),
              (_.opt_len += _ * (_ + _)),
              _ && (_.static_len += _ * (_[2 * _ + 1] + _)));
        if (_ !== 0) {
          do {
            for (_ = _ - 1; _.bl_count[_] === 0; ) _--;
            _.bl_count[_]--,
              (_.bl_count[_ + 1] += 2),
              _.bl_count[_]--,
              (_ -= 2);
          } while (_ > 0);
          for (_ = _; _ !== 0; _--)
            for (_ = _.bl_count[_]; _ !== 0; )
              (_ = _.heap[--_]) > this.max_code ||
                (_[2 * _ + 1] != _ &&
                  ((_.opt_len += (_ - _[2 * _ + 1]) * _[2 * _]),
                  (_[2 * _ + 1] = _)),
                _--);
        }
      }
      bi_reverse(_, _) {
        let _ = 0;
        do (_ |= 1 & _), (_ >>>= 1), (_ <<= 1);
        while (--_ > 0);
        return _ >>> 1;
      }
      gen_codes(_, _, _) {
        let _ = new Uint16Array(16),
          _ = 0;
        for (let _ = 1; _ <= 15; _++) _[_] = _ = (_ + _[_ - 1]) << 1;
        for (let _ = 0; _ <= _; _++) {
          let _ = _[2 * _ + 1];
          _ !== 0 && (_[2 * _] = this.bi_reverse(_[_]++, _));
        }
      }
      build_tree(_) {
        var _,
          _,
          _,
          _ = this.dyn_tree,
          _ = this.stat_desc.static_tree,
          _ = this.stat_desc.elems,
          _ = -1;
        for (_.heap_len = 0, _.heap_max = HEAP_SIZE, _ = 0; _ < _; _++)
          _[2 * _] !== 0
            ? ((_.heap[++_.heap_len] = _ = _), (_.depth[_] = 0))
            : (_[2 * _ + 1] = 0);
        for (; _.heap_len < 2; )
          (_[2 * (_ = _.heap[++_.heap_len] = _ < 2 ? ++_ : 0)] = 1),
            (_.depth[_] = 0),
            _.opt_len--,
            _ && (_.static_len -= _[2 * _ + 1]);
        for (this.max_code = _, _ = Math.floor(_.heap_len / 2); _ >= 1; _--)
          _.pqdownheap(_, _);
        _ = _;
        do
          (_ = _.heap[1]),
            (_.heap[1] = _.heap[_.heap_len--]),
            _.pqdownheap(_, 1),
            (_ = _.heap[1]),
            (_.heap[--_.heap_max] = _),
            (_.heap[--_.heap_max] = _),
            (_[2 * _] = _[2 * _] + _[2 * _]),
            (_.depth[_] = Math.max(_.depth[_], _.depth[_]) + 1),
            (_[2 * _ + 1] = _[2 * _ + 1] = _),
            (_.heap[1] = _++),
            _.pqdownheap(_, 1);
        while (_.heap_len >= 2);
        (_.heap[--_.heap_max] = _.heap[1]),
          this.gen_bitlen(_),
          this.gen_codes(_, this.max_code, _.bl_count);
      }
      static d_code(_) {
        return _ < 256 ? _dist_code[_] : _dist_code[256 + (_ >>> 7)];
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
      constructor(_, _, _, _, _) {
        (this.static_tree = _),
          (this.extra_bits = _),
          (this.extra_base = _),
          (this.elems = _),
          (this.max_length = _);
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
    let makeConfig = (_, _, _, _, _) => ({
        good_length: _,
        max_lazy: _,
        nice_length: _,
        max_chain: _,
        func: _,
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
    function smaller(_, _, _, _) {
      let _ = _[2 * _],
        _ = _[2 * _];
      return _ < _ || (_ == _ && _[_] <= _[_]);
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
      constructor(_, _ = 6, _ = 0) {
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
          _ < 0 || _ > 9 || _ < 0 || _ > 2)
        )
          throw RangeError("level or strategy is out of range");
        (this.strm = _),
          (this.level = _),
          (this.strategy = _),
          (_.msg = ""),
          (_.total_in = _.total_out = 0),
          this.init_block();
        for (let _ = 0; _ < hash_size; ++_) this.head[_] = 0;
        (this.max_lazy_match = config_table[_].max_lazy),
          (this.good_match = config_table[_].good_length),
          (this.nice_match = config_table[_].nice_length),
          (this.max_chain_length = config_table[_].max_chain);
      }
      init_block() {
        for (let _ = 0; _ < L_CODES; _++) this.dyn_ltree[2 * _] = 0;
        for (let _ = 0; _ < D_CODES; _++) this.dyn_dtree[2 * _] = 0;
        for (let _ = 0; _ < BL_CODES; _++) this.bl_tree[2 * _] = 0;
        (this.dyn_ltree[2 * END_BLOCK] = 1),
          (this.opt_len = this.static_len = 0),
          (this.last_lit = this.matches = 0);
      }
      pqdownheap(_, _) {
        let _ = this.heap,
          _ = _[_],
          _ = _ << 1;
        for (
          ;
          _ <= this.heap_len &&
          (_ < this.heap_len && smaller(_, _[_ + 1], _[_], this.depth) && _++,
          !smaller(_, _, _[_], this.depth));
        )
          (_[_] = _[_]), (_ = _), (_ <<= 1);
        _[_] = _;
      }
      scan_tree(_, _) {
        var _,
          _ = -1,
          _ = _[1],
          _ = 0,
          _ = 7,
          _ = 4;
        _ === 0 && ((_ = 138), (_ = 3)), (_[2 * (_ + 1) + 1] = 65535);
        for (let _ = 0; _ <= _; _++)
          (_ = _),
            (_ = _[2 * (_ + 1) + 1]),
            (++_ < _ && _ == _) ||
              (_ < _
                ? (this.bl_tree[2 * _] += _)
                : _ !== 0
                  ? (_ != _ && this.bl_tree[2 * _]++,
                    this.bl_tree[2 * REP_3_6]++)
                  : _ <= 10
                    ? this.bl_tree[2 * REPZ_3_10]++
                    : this.bl_tree[2 * REPZ_11_138]++,
              (_ = 0),
              (_ = _),
              _ === 0
                ? ((_ = 138), (_ = 3))
                : _ == _
                  ? ((_ = 6), (_ = 3))
                  : ((_ = 7), (_ = 4)));
      }
      build_bl_tree() {
        let _;
        for (
          this.scan_tree(this.dyn_ltree, this.l_desc.max_code),
            this.scan_tree(this.dyn_dtree, this.d_desc.max_code),
            this.bl_desc.build_tree(this),
            _ = BL_CODES - 1;
          _ >= 3 && this.bl_tree[2 * Tree.bl_order[_] + 1] === 0;
          _--
        );
        return (this.opt_len += 3 * (_ + 1) + 5 + 5 + 4), _;
      }
      put_short(_) {
        (this.pending_buf[this.pending++] = 255 & _),
          (this.pending_buf[this.pending++] = (_ >>> 8) & 255);
      }
      send_bits(_, _) {
        if (this.bi_valid > 16 - _) {
          this.bi_buf |= (_ << this.bi_valid) & 65535;
          let _ = this.pending;
          (this.pending_buf[_] = this.bi_buf),
            (this.pending_buf[_ + 1] = this.bi_buf >>> 8),
            (this.pending = _ + 2),
            (this.bi_buf = _ >>> (16 - this.bi_valid)),
            (this.bi_valid += _ - 16);
        } else
          (this.bi_buf |= (_ << this.bi_valid) & 65535), (this.bi_valid += _);
      }
      send_code(_, _) {
        let _ = 2 * _;
        this.send_bits(65535 & _[_], 65535 & _[_ + 1]);
      }
      send_tree(_, _) {
        var _,
          _ = -1,
          _ = _[1],
          _ = 0,
          _ = 7,
          _ = 4;
        _ === 0 && ((_ = 138), (_ = 3));
        for (let _ = 0; _ <= _; _++)
          if (((_ = _), (_ = _[2 * (_ + 1) + 1]), !(++_ < _ && _ == _))) {
            if (_ < _)
              do this.send_code(_, this.bl_tree);
              while (--_ != 0);
            else
              _ !== 0
                ? (_ != _ && (this.send_code(_, this.bl_tree), _--),
                  this.send_code(REP_3_6, this.bl_tree),
                  this.send_bits(_ - 3, 2))
                : _ <= 10
                  ? (this.send_code(REPZ_3_10, this.bl_tree),
                    this.send_bits(_ - 3, 3))
                  : (this.send_code(REPZ_11_138, this.bl_tree),
                    this.send_bits(_ - 11, 7));
            (_ = 0),
              (_ = _),
              _ === 0
                ? ((_ = 138), (_ = 3))
                : _ == _
                  ? ((_ = 6), (_ = 3))
                  : ((_ = 7), (_ = 4));
          }
      }
      send_all_trees(_, _, _) {
        this.send_bits(_ - 257, 5),
          this.send_bits(_ - 1, 5),
          this.send_bits(_ - 4, 4);
        for (let _ = 0; _ < _; _++)
          this.send_bits(this.bl_tree[2 * Tree.bl_order[_] + 1], 3);
        this.send_tree(this.dyn_ltree, _ - 1),
          this.send_tree(this.dyn_dtree, _ - 1);
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
      _tr_tally(_, _) {
        if (
          ((this.pending_buf[d_buf + 2 * this.last_lit] = (_ >>> 8) & 255),
          (this.pending_buf[d_buf + 2 * this.last_lit + 1] = 255 & _),
          (this.pending_buf[l_buf + this.last_lit] = 255 & _),
          this.last_lit++,
          _ === 0
            ? this.dyn_ltree[2 * _]++
            : (this.matches++,
              _--,
              this.dyn_ltree[2 * (Tree._length_code[_] + LITERALS + 1)]++,
              this.dyn_dtree[2 * Tree.d_code(_)]++),
          (8191 & this.last_lit) == 0 && this.level > 2)
        ) {
          let _ = 8 * this.last_lit,
            _ = this.strstart - this.block_start;
          for (let _ = 0; _ < D_CODES; _++)
            _ += this.dyn_dtree[2 * _] * (5 + Tree.extra_dbits[_]);
          if (
            ((_ >>>= 3),
            this.matches < Math.floor(this.last_lit / 2) &&
              _ < Math.floor(_ / 2))
          )
            return !0;
        }
        return this.last_lit === lit_bufsize - 1;
      }
      compress_block(_, _) {
        let _ = 0;
        if (this.last_lit !== 0)
          do {
            let _ =
                ((this.pending_buf[d_buf + 2 * _] << 8) & 65280) |
                (255 & this.pending_buf[d_buf + 2 * _ + 1]),
              _ = 255 & this.pending_buf[l_buf + _];
            if ((_++, _ === 0)) this.send_code(_, _);
            else {
              let _ = Tree._length_code[_];
              this.send_code(_ + LITERALS + 1, _);
              let _ = Tree.extra_lbits[_];
              _ !== 0 && ((_ -= Tree.base_length[_]), this.send_bits(_, _)),
                _--,
                (_ = Tree.d_code(_)),
                this.send_code(_, _),
                (_ = Tree.extra_dbits[_]),
                _ !== 0 && ((_ -= Tree.base_dist[_]), this.send_bits(_, _));
            }
          } while (_ < this.last_lit);
        this.send_code(END_BLOCK, _),
          (this.last_eob_len = _[2 * END_BLOCK + 1]);
      }
      bi_windup() {
        this.bi_valid > 8
          ? this.put_short(this.bi_buf)
          : this.bi_valid > 0 &&
            (this.pending_buf[this.pending++] = this.bi_buf),
          (this.bi_buf = 0),
          (this.bi_valid = 0);
      }
      copy_block(_, _, _) {
        this.bi_windup(),
          (this.last_eob_len = 8),
          _ && (this.put_short(_), this.put_short(~_)),
          this.pending_buf.set(this.window.subarray(_, _ + _), this.pending),
          (this.pending += _);
      }
      _tr_stored_block(_, _, _) {
        this.send_bits((STORED_BLOCK << 1) + (_ ? 1 : 0), 3),
          this.copy_block(_, _, !0);
      }
      _tr_flush_block(_, _, _) {
        let _,
          _,
          _ = 0;
        this.level > 0
          ? (this.l_desc.build_tree(this),
            this.d_desc.build_tree(this),
            (_ = this.build_bl_tree()),
            (_ = (this.opt_len + 3 + 7) >>> 3),
            (_ = (this.static_len + 3 + 7) >>> 3),
            _ <= _ && (_ = _))
          : (_ = _ = _ + 5),
          _ + 4 <= _ && _ !== -1
            ? this._tr_stored_block(_, _, _)
            : _ == _
              ? (this.send_bits((STATIC_TREES << 1) + (_ ? 1 : 0), 3),
                this.compress_block(
                  StaticTree.static_ltree,
                  StaticTree.static_dtree,
                ))
              : (this.send_bits((DYN_TREES << 1) + (_ ? 1 : 0), 3),
                this.send_all_trees(
                  this.l_desc.max_code + 1,
                  this.d_desc.max_code + 1,
                  _ + 1,
                ),
                this.compress_block(this.dyn_ltree, this.dyn_dtree)),
          this.init_block(),
          _ && this.bi_windup();
      }
      flush_block_only(_) {
        this._tr_flush_block(
          this.block_start >= 0 ? this.block_start : -1,
          this.strstart - this.block_start,
          _,
        ),
          (this.block_start = this.strstart),
          this.strm.flush_pending(this);
      }
      fill_window() {
        do {
          let _ = window_size - this.lookahead - this.strstart;
          if (_ === 0 && this.strstart === 0 && this.lookahead === 0) _ = 32768;
          else if (_ === -1) _--;
          else if (this.strstart >= 65536 - MIN_LOOKAHEAD) {
            this.window.set(this.window.subarray(32768, 65536), 0),
              (this.match_start -= 32768),
              (this.strstart -= 32768),
              (this.block_start -= 32768);
            let _ = hash_size,
              _ = _;
            do {
              let _ = 65535 & this.head[--_];
              this.head[_] = _ >= 32768 ? _ - 32768 : 0;
            } while (--_ != 0);
            (_ = 32768), (_ = _);
            do {
              let _ = 65535 & this.prev[--_];
              this.prev[_] = _ >= 32768 ? _ - 32768 : 0;
            } while (--_ != 0);
            _ += 32768;
          }
          if (this.strm.avail_in === 0) return;
          let _ = this.strm.read_into_buf(
            this.window,
            this.strstart + this.lookahead,
            _,
          );
          (this.lookahead += _),
            this.lookahead >= MIN_MATCH &&
              ((this.ins_h = 255 & this.window[this.strstart]),
              (this.ins_h =
                ((this.ins_h << hash_shift) ^
                  (255 & this.window[this.strstart + 1])) &
                hash_mask));
        } while (this.lookahead < MIN_LOOKAHEAD && this.strm.avail_in !== 0);
      }
      deflate_stored(_) {
        let _ = 65535;
        for (_ > pending_buf_size - 5 && (_ = pending_buf_size - 5); ; ) {
          if (this.lookahead <= 1) {
            if ((this.fill_window(), this.lookahead === 0 && _ === 0)) return 0;
            if (this.lookahead === 0) break;
          }
          (this.strstart += this.lookahead), (this.lookahead = 0);
          let _ = this.block_start + _;
          if (
            ((this.strstart === 0 || this.strstart >= _) &&
              ((this.lookahead = this.strstart - _),
              (this.strstart = _),
              this.flush_block_only(!1),
              this.strm.avail_out === 0)) ||
            (this.strstart - this.block_start >= 32768 - MIN_LOOKAHEAD &&
              (this.flush_block_only(!1), this.strm.avail_out === 0))
          )
            return 0;
        }
        return (
          this.flush_block_only(_ === 4),
          this.strm.avail_out === 0 ? (_ === 4 ? 2 : 0) : _ === 4 ? 3 : 1
        );
      }
      longest_match(_) {
        let _ = this.max_chain_length,
          _ = this.strstart,
          _ = this.prev_length,
          _ =
            this.strstart > 32768 - MIN_LOOKAHEAD
              ? this.strstart - (32768 - MIN_LOOKAHEAD)
              : 0,
          _ = this.nice_match,
          _ = this.window,
          _ = this.strstart + MAX_MATCH,
          _ = _[_ + _ - 1],
          _ = _[_ + _],
          _ = _[_],
          _ = _[_ + 1];
        this.prev_length >= this.good_match && (_ >>= 2),
          _ > this.lookahead && (_ = this.lookahead);
        do {
          let _ = _,
            _ = !0;
          for (;;) {
            if (((_ = _), _[_ + _] !== _ || _[_ + _ - 1] !== _)) {
              if ((_ = this.prev[32767 & _]) > _ && --_ != 0) continue;
              _ = !1;
            }
            break;
          }
          if (!_) break;
          if (_[_] !== _ || _[_ + 1] !== _) continue;
          (_ += 2), (_ += 2);
          do {
            let _ =
              ((_[_] << 24) | (_[_ + 1] << 16) | (_[_ + 2] << 8) | _[_ + 3]) ^
              ((_[_] << 24) | (_[_ + 1] << 16) | (_[_ + 2] << 8) | _[_ + 3]);
            if (_) {
              let _ = Math.clz32(_) >> 3;
              (_ += _), (_ += _);
              break;
            }
            (_ += 4), (_ += 4);
          } while (_ < _);
          _ > _ && (_ = _);
          let _ = MAX_MATCH - (_ - _);
          if (((_ = _ - MAX_MATCH), _ > _)) {
            if (((this.match_start = _), (_ = _), _ >= _)) break;
            (_ = _[_ + _ - 1]), (_ = _[_ + _]);
          }
        } while ((_ = this.prev[32767 & _]) > _ && --_ != 0);
        return _ <= this.lookahead ? _ : this.lookahead;
      }
      deflate_fast(_) {
        let _,
          _ = 0;
        for (;;) {
          if (this.lookahead < MIN_LOOKAHEAD) {
            if ((this.fill_window(), this.lookahead < MIN_LOOKAHEAD && _ === 0))
              return 0;
            if (this.lookahead === 0) break;
          }
          if (
            (this.lookahead >= MIN_MATCH &&
              ((this.ins_h =
                ((this.ins_h << hash_shift) ^
                  (255 & this.window[this.strstart + (MIN_MATCH - 1)])) &
                hash_mask),
              (_ = 65535 & this.head[this.ins_h]),
              (this.prev[32767 & this.strstart] = this.head[this.ins_h]),
              (this.head[this.ins_h] = this.strstart)),
            _ !== 0 &&
              ((this.strstart - _) & 65535) <= 32768 - MIN_LOOKAHEAD &&
              this.strategy !== 2 &&
              (this.match_length = this.longest_match(_)),
            this.match_length >= MIN_MATCH)
          )
            if (
              ((_ = this._tr_tally(
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
                  (_ = 65535 & this.head[this.ins_h]),
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
            (_ = this._tr_tally(0, 255 & this.window[this.strstart])),
              this.lookahead--,
              this.strstart++;
          if (_ && (this.flush_block_only(!1), this.strm.avail_out === 0))
            return 0;
        }
        return (
          this.flush_block_only(_ === 4),
          this.strm.avail_out === 0 ? (_ === 4 ? 2 : 0) : _ === 4 ? 3 : 1
        );
      }
      deflate_slow(_) {
        let _,
          _,
          _,
          _ = 0;
        for (;;) {
          if (this.lookahead < MIN_LOOKAHEAD) {
            if ((this.fill_window(), this.lookahead < MIN_LOOKAHEAD && _ === 0))
              return 0;
            if (this.lookahead === 0) break;
          }
          if (
            (this.lookahead >= MIN_MATCH &&
              ((this.ins_h =
                ((this.ins_h << hash_shift) ^
                  (255 & this.window[this.strstart + (MIN_MATCH - 1)])) &
                hash_mask),
              (_ = 65535 & this.head[this.ins_h]),
              (this.prev[32767 & this.strstart] = this.head[this.ins_h]),
              (this.head[this.ins_h] = this.strstart)),
            (this.prev_length = this.match_length),
            (_ = this.match_start),
            (this.match_length = MIN_MATCH - 1),
            _ !== 0 &&
              this.prev_length < this.max_lazy_match &&
              ((this.strstart - _) & 65535) <= 32768 - MIN_LOOKAHEAD &&
              (this.strategy !== 2 &&
                (this.match_length = this.longest_match(_)),
              this.match_length <= 5 &&
                (this.strategy === 1 ||
                  (this.match_length === MIN_MATCH &&
                    this.strstart - this.match_start > 4096)) &&
                (this.match_length = MIN_MATCH - 1)),
            this.prev_length >= MIN_MATCH &&
              this.match_length <= this.prev_length)
          ) {
            (_ = this.strstart + this.lookahead - MIN_MATCH),
              (_ = this._tr_tally(
                this.strstart - 1 - _,
                this.prev_length - MIN_MATCH,
              )),
              (this.lookahead -= this.prev_length - 1),
              (this.prev_length -= 2);
            do
              ++this.strstart <= _ &&
                ((this.ins_h =
                  ((this.ins_h << hash_shift) ^
                    (255 & this.window[this.strstart + (MIN_MATCH - 1)])) &
                  hash_mask),
                (_ = 65535 & this.head[this.ins_h]),
                (this.prev[32767 & this.strstart] = this.head[this.ins_h]),
                (this.head[this.ins_h] = this.strstart));
            while (--this.prev_length != 0);
            if (
              ((this.match_available = !1),
              (this.match_length = MIN_MATCH - 1),
              this.strstart++,
              _ && (this.flush_block_only(!1), this.strm.avail_out === 0))
            )
              return 0;
          } else if (this.match_available) {
            if (
              ((_ = this._tr_tally(0, 255 & this.window[this.strstart - 1])),
              _ && this.flush_block_only(!1),
              this.strstart++,
              this.lookahead--,
              this.strm.avail_out === 0)
            )
              return 0;
          } else (this.match_available = !0), this.strstart++, this.lookahead--;
        }
        return (
          this.match_available &&
            ((_ = this._tr_tally(0, 255 & this.window[this.strstart - 1])),
            (this.match_available = !1)),
          this.flush_block_only(_ === 4),
          this.strm.avail_out === 0 ? (_ === 4 ? 2 : 0) : _ === 4 ? 3 : 1
        );
      }
      deflateSetDictionary(_) {
        let _ = _.byteLength,
          _,
          _ = _,
          _ = 0;
        if (!_ || this.status !== 1) return -2;
        if (_ < MIN_MATCH) return 0;
        for (
          _ > 32768 - MIN_LOOKAHEAD &&
            ((_ = 32768 - MIN_LOOKAHEAD), (_ = _ - _)),
            this.window.set(_.subarray(_, _ + _), 0),
            this.strstart = _,
            this.block_start = _,
            this.ins_h = 255 & this.window[0],
            this.ins_h =
              ((this.ins_h << hash_shift) ^ (255 & this.window[1])) & hash_mask,
            _ = 0;
          _ <= _ - MIN_MATCH;
          _++
        )
          (this.ins_h =
            ((this.ins_h << hash_shift) ^
              (255 & this.window[_ + (MIN_MATCH - 1)])) &
            hash_mask),
            (this.prev[32767 & _] = this.head[this.ins_h]),
            (this.head[this.ins_h] = _);
        return 0;
      }
      deflate(_) {
        if (_ > 4 || _ < 0) return -2;
        let { strm: _ } = this;
        if (
          !_.next_out ||
          (!_.next_in && _.avail_in !== 0) ||
          (this.status === 3 && _ != 4)
        )
          return -2;
        if (_.avail_out === 0) return -5;
        let _ = this.last_flush;
        if (
          ((this.last_flush = _),
          this.status === 1 && (this.status = 2),
          this.pending !== 0)
        ) {
          if ((_.flush_pending(this), _.avail_out === 0))
            return (this.last_flush = -1), 0;
        } else if (_.avail_in === 0 && _ <= _ && _ !== 4) return -5;
        if (this.status === 3 && _.avail_in !== 0) return -5;
        if (
          _.avail_in !== 0 ||
          this.lookahead !== 0 ||
          (_ !== 0 && this.status !== 3)
        ) {
          let _;
          switch (config_table[this.level].func) {
            case 0:
              _ = this.deflate_stored(_);
              break;
            case 1:
              _ = this.deflate_fast(_);
              break;
            default:
              _ = this.deflate_slow(_);
          }
          if (((_ != 2 && _ !== 3) || (this.status = 3), _ === 0 || _ === 2))
            return _.avail_out === 0 && (this.last_flush = -1), 0;
          if (_ === 1) {
            if (_ === 1) this._tr_align();
            else if ((this._tr_stored_block(0, 0, !1), _ === 3))
              for (let _ = 0; _ < hash_size; _++) this.head[_] = 0;
            if ((_.flush_pending(this), _.avail_out === 0))
              return (this.last_flush = -1), 0;
          }
        }
        return _ !== 4 ? 0 : 1;
      }
    }
    class Deflater {
      constructor(_) {
        var _, _;
        (this.checksum = 1), (this.origSize = 0), (this.dictChecksum = 0);
        let _ = (_ = _?.level) !== null && _ !== void 0 ? _ : 6,
          _ = (_ = _?.format) !== null && _ !== void 0 ? _ : "deflate",
          _ = _?.dictionary,
          _ = _?.fileName;
        if (typeof _ != "number" || _ < 1 || _ > 9)
          throw new RangeError("level must be between 1 and 9, inclusive");
        if (_ !== "gzip" && _ !== "raw" && _ !== "deflate")
          throw new RangeError(
            "container must be one of `raw`, `deflate`, `gzip`",
          );
        if (_ !== void 0 && typeof _ != "string")
          throw new TypeError("fileName must be a string");
        if (
          ((this.fileName = _ || ""),
          (this._ = new ZStream()),
          (this.deflate = new Deflate(this._, _, 0)),
          _)
        ) {
          if (_ !== "deflate")
            throw new TypeError(
              "Can only provide a dictionary for `deflate` containers.",
            );
          let _ = u8ArrayFromBufferSource(_);
          if (!_)
            throw new TypeError(
              "dictionary must be an ArrayBuffer or buffer view",
            );
          (this.dictChecksum = adler32(_)),
            this.deflate.deflateSetDictionary(_);
        }
        (this.format = _), this.format === "gzip" && (this.checksum = 0);
      }
      buildZlibHeader() {
        let _ = 2,
          _ = 1;
        this.dictChecksum !== 0 && ((_ += 4), (_ = PRESET_DICT));
        let _ = new ArrayBuffer(_),
          _ = new DataView(_);
        return (
          _.setUint16(0, 30720 | _),
          this.dictChecksum !== 0 && _.setUint32(2, this.dictChecksum),
          new Uint8Array(_)
        );
      }
      buildGZipHeader() {
        let _ = 0,
          _ = [];
        this.fileName.length > 0 &&
          ((_ |= 8),
          (_ = Array.from(this.fileName).map((_) => {
            let _ = _.charCodeAt(0);
            return _ > 255 ? 95 : _;
          })),
          _.push(0));
        let _ = new ArrayBuffer(10 + _.length),
          _ = new DataView(_);
        _.setUint16(0, (GZIP_ID1 << 8) | GZIP_ID2),
          _.setUint16(2, (Z_DEFLATED << 8) | _);
        let _ = Math.floor(Date.now() / 1e3);
        _.setUint32(4, _, !0), _.setUint16(8, 255);
        let _ = new Uint8Array(_);
        return _.length && _.set(_, 10), _;
      }
      buildTrailer() {
        let _ = this.format === "gzip",
          _ = new ArrayBuffer(_ ? 8 : 4),
          _ = new DataView(_);
        return (
          _.setUint32(0, this.checksum, _),
          _ && _.setUint32(4, this.origSize, !0),
          new Uint8Array(_)
        );
      }
      append(_) {
        let _ = [],
          _ = u8ArrayFromBufferSource(_);
        if (!(_ instanceof Uint8Array))
          throw new TypeError("data must be an ArrayBuffer or buffer view");
        if (!_.length) return _;
        this.format !== "gzip"
          ? (this.checksum = adler32(_, this.checksum))
          : (this.checksum = crc32(_, this.checksum)),
          (this.origSize += _.length);
        let { deflate: _, _: _ } = this;
        (_.next_in_index = 0),
          (_.next_in = _),
          (_.avail_in = _.length),
          _.status === 1 &&
            (this.format === "deflate"
              ? _.push(this.buildZlibHeader())
              : this.format === "gzip" && _.push(this.buildGZipHeader()));
        do {
          if (
            ((_.next_out_index = 0),
            (_.avail_out = OUTPUT_BUFSIZE),
            _.deflate(0) !== 0)
          )
            throw new Error("deflating: " + _.msg);
          _.next_out_index &&
            _.push(new Uint8Array(_.next_out.subarray(0, _.next_out_index)));
        } while (_.avail_in > 0 || _.avail_out === 0);
        return _;
      }
      finish() {
        let _ = [],
          { deflate: _, _: _ } = this;
        if (_.status === 1)
          throw new Error(
            "Cannot call finish before at least 1 call to append",
          );
        do {
          (_.next_out_index = 0), (_.avail_out = OUTPUT_BUFSIZE);
          let _ = _.deflate(4);
          if (_ !== 1 && _ !== 0) throw new Error("deflating: " + _.msg);
          OUTPUT_BUFSIZE - _.avail_out > 0 &&
            _.push(new Uint8Array(_.next_out.subarray(0, _.next_out_index)));
        } while (_.avail_in > 0 || _.avail_out === 0);
        return this.format !== "raw" && _.push(this.buildTrailer()), _;
      }
    }
    let decContext = Symbol("decContext"),
      decTransform$1 = Symbol("decTransform");
    class DecompressionTransformer {
      constructor(_) {
        this.inflater_ = _;
      }
      transform(_, _) {
        if (!(_ instanceof ArrayBuffer || ArrayBuffer.isView(_)))
          throw new TypeError("Input data must be a BufferSource");
        let _ = this.inflater_.append(_);
        for (let _ of _) _.enqueue(_);
      }
      flush(_) {
        let _ = this.inflater_.finish();
        if (!_.success)
          throw _.complete
            ? _.checksum === "mismatch"
              ? new Error("Data integrity check failed")
              : _.fileSize === "mismatch"
                ? new Error("Data size check failed")
                : new Error("Decompression error")
            : new Error("Unexpected EOF during decompression");
      }
    }
    class DecompressionStream {
      constructor(_) {
        if (_ !== "deflate" && _ !== "gzip")
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
      constructor(_) {
        this.deflater_ = _;
      }
      transform(_, _) {
        if (!(_ instanceof ArrayBuffer || ArrayBuffer.isView(_)))
          throw new TypeError("Input data must be a BufferSource");
        let _ = this.deflater_.append(_);
        for (let _ of _) _.enqueue(_);
      }
      flush(_) {
        let _ = this.deflater_.finish();
        for (let _ of _) _.enqueue(_);
      }
    }
    class CompressionStream {
      constructor(_) {
        if (_ !== "deflate" && _ !== "gzip")
          throw new TypeError("format must be one of `deflate`, `gzip`");
        (this[comContext] = new Deflater({
          format: _,
        })),
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
    function getGlobalValue(_) {
      let _ = getGlobal(),
        _;
      return _ !== void 0 && (_ = _[_]), _;
    }
    function getGlobalOrContextualValue(name) {
      let global = getGlobal(),
        value;
      if ((global !== void 0 && (value = global[name]), value === void 0))
        try {
          value = eval(name);
        } catch (_) {}
      return value;
    }
    function hasCompleteStreamsImplementation() {
      let _ = getGlobalValue("ReadableStream"),
        _ = getGlobalValue("WritableStream"),
        _ = getGlobalValue("TransformStream"),
        _ = getGlobalValue("ByteLengthQueuingStrategy"),
        _ = getGlobalValue("CountQueuingStrategy"),
        _ = (_) => typeof _ == "function";
      if (!(_(_) && _(_) && _(_) && _(_) && _(_))) return !1;
      try {
        let _ = new _({
          type: "bytes",
        }).getReader({
          mode: "byob",
        });
        if (_ == null || typeof _ != "object") return !1;
      } catch {
        return !1;
      }
      return !0;
    }
    function installStardazedStreams() {
      let _ = getGlobal();
      if (!_ || hasCompleteStreamsImplementation()) return !1;
      let _ = getGlobalOrContextualValue("fetch"),
        _ = getGlobalOrContextualValue("Response"),
        _ = getGlobalValue("ReadableStream");
      if (_ && _) {
        let _ = createAdaptedFetch(
            _,
            _,
            _,
            SDReadableStream,
            readableStreamTee,
          ),
          _ = createAdaptedResponse(_, _, SDReadableStream, readableStreamTee);
        (_.fetch = _), (_.Response = _);
      }
      return (
        (_.ReadableStream = SDReadableStream),
        (_.WritableStream = WritableStream),
        (_.TransformStream = TransformStream$1),
        (_.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy),
        (_.CountQueuingStrategy = CountQueuingStrategy),
        !0
      );
    }
    function installEncodingStreams(_) {
      let _ = getGlobal();
      if (!_) return;
      let _ = getGlobalValue("TextDecoderStream");
      (_ || typeof _ != "function") &&
        (_.TextDecoderStream = TextDecoderStream);
      let _ = getGlobalValue("TextEncoderStream");
      (_ || typeof _ != "function") &&
        (_.TextEncoderStream = TextEncoderStream);
    }
    function installCompressionStreams(_) {
      let _ = getGlobal();
      if (!_) return;
      let _ = getGlobalValue("CompressionStream");
      (_ || typeof _ != "function") &&
        (_.CompressionStream = CompressionStream);
      let _ = getGlobalValue("DecompressionStream");
      (_ || typeof _ != "function") &&
        (_.DecompressionStream = DecompressionStream);
    }
    let overwritten = installStardazedStreams();
    installEncodingStreams(overwritten), installCompressionStreams(overwritten);
  })();
});
var _ = _(_(), 1);

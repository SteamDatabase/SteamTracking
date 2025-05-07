import Module from "./steamaudio_wrapper.js";
Module.onRuntimeInitialized = () => {
  (Module.api = {
    malloc: Module.cwrap("malloc", "number", ["number"]),
    free: Module.cwrap("free", null, ["number"]),
    iplContextCreate: Module.cwrap("iplContextCreate", "number", [
      "number",
      "number",
    ]),
    iplContextRetain: Module.cwrap("iplContextRetain", "number", ["number"]),
    iplContextRelease: Module.cwrap("iplContextRelease", null, ["number"]),
    iplAudioBufferAllocate: Module.cwrap("iplAudioBufferAllocate", "number", [
      "number",
      "number",
      "number",
      "number",
    ]),
    iplAudioBufferFree: Module.cwrap("iplAudioBufferFree", null, [
      "number",
      "number",
    ]),
    iplAudioBufferMix: Module.cwrap("iplAudioBufferMix", null, [
      "number",
      "number",
      "number",
    ]),
    iplAudioBufferDownmix: Module.cwrap("iplAudioBufferDownmix", null, [
      "number",
      "number",
      "number",
    ]),
    iplHRTFCreate: Module.cwrap("iplHRTFCreate", "number", [
      "number",
      "number",
      "number",
      "number",
    ]),
    iplHRTFRetain: Module.cwrap("iplHRTFRetain", "number", ["number"]),
    iplHRTFRelease: Module.cwrap("iplHRTFRelease", null, ["number"]),
    iplBinauralEffectCreate: Module.cwrap("iplBinauralEffectCreate", "number", [
      "number",
      "number",
      "number",
      "number",
    ]),
    iplBinauralEffectRetain: Module.cwrap("iplBinauralEffectRetain", "number", [
      "number",
    ]),
    iplBinauralEffectRelease: Module.cwrap("iplBinauralEffectRelease", null, [
      "number",
    ]),
    iplBinauralEffectReset: Module.cwrap("iplBinauralEffectReset", null, [
      "number",
    ]),
    iplBinauralEffectApply: Module.cwrap("iplBinauralEffectApply", null, [
      "number",
      "number",
      "number",
      "number",
    ]),
  }),
    console.log(Module.api);
};
const STEAMAUDIO_VERSION = 263427,
  IPL_FALSE = 0,
  IPL_TRUE = 1,
  SIZEOF_pointer = 4,
  IPL_STATUS_SUCCESS = 0,
  IPL_STATUS_FAILURE = 1,
  IPL_STATUS_OUTOFMEMORY = 2,
  IPL_STATUS_INITIALIZATION = 3,
  IPL_LOGLEVEL_INFO = 0,
  IPL_LOGLEVEL_WARNING = 1,
  IPL_LOGLEVEL_ERROR = 2,
  IPL_LOGLEVEL_DEBUG = 3,
  IPL_SIMDLEVEL_SSE2 = 0,
  IPL_SIMDLEVEL_SSE4 = 1,
  IPL_SIMDLEVEL_AVX = 2,
  IPL_SIMDLEVEL_AVX2 = 3,
  IPL_SIMDLEVEL_AVX512 = 4,
  IPL_SIMDLEVEL_NEON = 0,
  SIZEOF_IPLContextSettings = 20;
class IPLContextSettings {
  constructor() {
    (this.pointer = Module.api.malloc(20)),
      (this._version = new Uint32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 0,
        1,
      )),
      (this._logCallback = new Uint32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 4,
        1,
      )),
      (this._allocateCallback = new Uint32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 8,
        1,
      )),
      (this._freeCallback = new Uint32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 12,
        1,
      )),
      (this._simdLevel = new Int32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 16,
        1,
      ));
  }
  destroy() {
    Module.api.free(this.pointer);
  }
  get version() {
    return this._version[0];
  }
  get logCallback() {
    return this._logCallback[0];
  }
  get allocateCallback() {
    return this._allocateCallback[0];
  }
  get freeCallback() {
    return this._freeCallback[0];
  }
  get simdLevel() {
    return this._simdLevel[0];
  }
  set version(_) {
    this._version[0] = _;
  }
  set logCallback(_) {
    this._logCallback[0] = _;
  }
  set allocateCallback(_) {
    this._allocateCallback[0] = _;
  }
  set freeCallback(_) {
    this._freeCallback[0] = _;
  }
  set simdLevel(_) {
    this._simdLevel[0] = _;
  }
}
class IPLContext {
  constructor(_) {
    this.pointerToPointer = Module.api.malloc(4);
    let _ = Module.api.iplContextCreate(_.pointer, this.pointerToPointer);
    0 == _
      ? (this._pointer = new Uint32Array(
          Module.HEAPU8.buffer,
          Module.HEAPU8.byteOffset + this.pointerToPointer + 0,
          1,
        ))
      : console.error("Unable to create context:", _);
  }
  destroy() {
    Module.api.iplContextRelease(this.pointerToPointer),
      Module.api.free(this.pointerToPointer);
  }
  get pointer() {
    return this._pointer[0];
  }
}
const SIZEOF_IPLVector3 = 12;
class IPLVector3 {
  constructor() {
    (this.pointer = Module.api.malloc(12)),
      (this._elements = new Float32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 0,
        3,
      ));
  }
  destroy() {
    Module.api.free(this.pointer);
  }
  static subtract(_, _, _) {
    (_._ = _._ - _._), (_._ = _._ - _._), (_._ = _._ - _._);
  }
  static dot(_, _) {
    return _._ * _._ + _._ * _._ + _._ * _._;
  }
  static cross(_, _, _) {
    (_._ = _._ * _._ - _._ * _._),
      (_._ = _._ * _._ - _._ * _._),
      (_._ = _._ * _._ - _._ * _._);
  }
  static calcRelativeDirection(_, _, _, _, _, _) {
    IPLVector3.subtract(_, _, _);
    const _ = IPLVector3.dot(_, _),
      _ = IPLVector3.dot(_, _),
      _ = -IPLVector3.dot(_, _);
    (_._ = _), (_._ = _), (_._ = _), _.normalize();
  }
  get lengthSquared() {
    return dot(this, this);
  }
  get length() {
    return Math.sqrt(lengthSquared);
  }
  normalize() {
    const _ = this.length;
    _ < 1e-4
      ? ((this._ = 0), (this._ = 0), (this._ = 0))
      : ((this._ = this._ / _), (this._ = this._ / _), (this._ = this._ / _));
  }
  get x() {
    return this._elements[0];
  }
  get y() {
    return this._elements[1];
  }
  get z() {
    return this._elements[2];
  }
  set x(_) {
    this._elements[0] = _;
  }
  set y(_) {
    this._elements[1] = _;
  }
  set z(_) {
    this._elements[2] = _;
  }
}
const SIZEOF_IPLAudioSettings = 8,
  SIZEOF_IPLAudioBuffer = 12;
class IPLAudioSettings {
  constructor() {
    (this.pointer = Module.api.malloc(8)),
      (this._samplingRate = new Int32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 0,
        1,
      )),
      (this._frameSize = new Int32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 4,
        1,
      ));
  }
  destroy() {
    Module.api.free(this.pointer);
  }
  get samplingRate() {
    return this._samplingRate[0];
  }
  get frameSize() {
    return this._frameSize[0];
  }
  set samplingRate(_) {
    this._samplingRate[0] = _;
  }
  set frameSize(_) {
    this._frameSize[0] = _;
  }
}
class IPLAudioBuffer {
  constructor(_, _, _) {
    (this.context = _),
      (this.pointer = Module.api.malloc(12)),
      (this._numChannels = new Int32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 0,
        1,
      )),
      (this._numSamples = new Int32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 4,
        1,
      )),
      (this._data = new Uint32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 8,
        1,
      ));
    let _ = Module.api.iplAudioBufferAllocate(_.pointer, _, _, this.pointer);
    if (0 == _) {
      (this._channels = new Uint32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this._data[0],
        _,
      )),
        (this.channels = []);
      for (let _ = 0; _ < _; ++_)
        this.channels.push(
          new Float32Array(
            Module.HEAPU8.buffer,
            Module.HEAPU8.byteOffset + this._channels[_],
            _,
          ),
        );
    } else console.error("Unable to allocate audio buffer:", _);
  }
  destroy() {
    Module.api.iplAudioBufferFree(this.context.pointer, this.pointer),
      Module.api.free(this.pointer);
  }
  get numChannels() {
    return this._numChannels[0];
  }
  get numSamples() {
    return this._numSamples[0];
  }
  get data() {
    return this._data[0];
  }
  copyFrom(_) {
    const _ = Math.min(this.numChannels, _.length);
    for (let _ = 0; _ < _; ++_) this.channels[_].set(_[_]);
  }
  copyTo(_) {
    const _ = Math.min(this.numChannels, _.length);
    for (let _ = 0; _ < _; ++_) _[_].set(this.channels[_]);
  }
  mix(_) {
    Module.api.iplAudioBufferMix(this.context.pointer, this.pointer, _.pointer);
  }
  downmix(_) {
    Module.api.iplAudioBufferDownmix(
      this.context.pointer,
      this.pointer,
      _.pointer,
    );
  }
}
const IPL_HRTFTYPE_DEFAULT = 0,
  IPL_HRTFTYPE_SOFA = 1,
  IPL_HRTFNORMTYPE_NONE = 0,
  IPL_HRTFNORMTYPE_RMS = 1,
  SIZEOF_IPLHRTFSettings = 24;
class IPLHRTFSettings {
  constructor() {
    (this.pointer = Module.api.malloc(24)),
      (this._type = new Int32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 0,
        1,
      )),
      (this._sofaFileName = new Uint32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 4,
        1,
      )),
      (this._sofaData = new Uint32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 8,
        1,
      )),
      (this._sofaDataSize = new Int32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 12,
        1,
      )),
      (this._volume = new Float32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 16,
        1,
      )),
      (this._normType = new Int32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 20,
        1,
      ));
  }
  destroy() {
    Module.api.free(this.pointer);
  }
  get type() {
    return this._type[0];
  }
  get sofaFileName() {
    return this._sofaFileName[0];
  }
  get sofaData() {
    return this._sofaData[0];
  }
  get sofaDataSize() {
    return this._sofaDataSize[0];
  }
  get volume() {
    return this._volume[0];
  }
  get normType() {
    return this._normType[0];
  }
  set type(_) {
    this._type[0] = _;
  }
  set sofaFileName(_) {
    this._sofaFileName[0] = _;
  }
  set sofaData(_) {
    this._sofaData[0] = _;
  }
  set sofaDataSize(_) {
    this._sofaDataSize[0] = _;
  }
  set volume(_) {
    this._volume[0] = _;
  }
  set normType(_) {
    this._normType[0] = _;
  }
}
class IPLHRTF {
  constructor(_, _, _) {
    this.pointerToPointer = Module.api.malloc(4);
    let _ = Module.api.iplHRTFCreate(
      _.pointer,
      _.pointer,
      _.pointer,
      this.pointerToPointer,
    );
    0 == _
      ? (this._pointer = new Uint32Array(
          Module.HEAPU8.buffer,
          Module.HEAPU8.byteOffset + this.pointerToPointer + 0,
          1,
        ))
      : console.error("Unable to create HRTF:", _);
  }
  destroy() {
    Module.api.iplHRTFRelease(this.pointerToPointer),
      Module.api.free(this.pointerToPointer);
  }
  get pointer() {
    return this._pointer[0];
  }
}
const IPL_HRTFINTERPOLATION_NEAREST = 0,
  IPL_HRTFINTERPOLATION_BILINEAR = 1,
  SIZEOF_IPLBinauralEffectSettings = 4,
  SIZEOF_IPLBinauralEffectParams = 28;
class IPLBinauralEffectSettings {
  constructor() {
    (this.pointer = Module.api.malloc(4)),
      (this._hrtf = new Uint32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 0,
        1,
      ));
  }
  destroy() {
    Module.api.free(this.pointer);
  }
  get hrtf() {
    return this._hrtf[0];
  }
  set hrtf(_) {
    this._hrtf[0] = _;
  }
}
class IPLBinauralEffectParams {
  constructor() {
    (this.pointer = Module.api.malloc(28)),
      (this._direction = new Float32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 0,
        3,
      )),
      (this._interpolation = new Int32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 12,
        1,
      )),
      (this._spatialBlend = new Float32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 16,
        1,
      )),
      (this._hrtf = new Uint32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 20,
        1,
      )),
      (this._peakDelays = new Uint32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this.pointer + 24,
        1,
      ));
  }
  destroy() {
    Module.api.free(this.pointer);
  }
  get interpolation() {
    return this._interpolation[0];
  }
  get spatialBlend() {
    return this._spatialBlend[0];
  }
  get hrtf() {
    return this._hrtf[0];
  }
  get peakDelays() {
    return this._peakDelays[0];
  }
  set direction(_) {
    (this._direction[0] = _._),
      (this._direction[1] = _._),
      (this._direction[2] = _._);
  }
  set interpolation(_) {
    this._interpolation[0] = _;
  }
  set spatialBlend(_) {
    this._spatialBlend[0] = _;
  }
  set hrtf(_) {
    this._hrtf[0] = _;
  }
  set peakDelays(_) {
    this._peakDelays[0] = _;
  }
}
class IPLBinauralEffect {
  constructor(_, _, _) {
    this.pointerToPointer = Module.api.malloc(4);
    let _ = Module.api.iplBinauralEffectCreate(
      _.pointer,
      _.pointer,
      _.pointer,
      this.pointerToPointer,
    );
    0 == _
      ? (this._pointer = new Uint32Array(
          Module.HEAPU8.buffer,
          Module.HEAPU8.byteOffset + this.pointerToPointer + 0,
          1,
        ))
      : console.error("Unable to create binaural effect:", _);
  }
  destroy() {
    Module.api.iplBinauralEffectRelease(this.pointerToPointer),
      Module.api.free(this.pointerToPointer);
  }
  get pointer() {
    return this._pointer[0];
  }
  reset() {
    Module.api.iplBinauralEffectReset(this.pointer);
  }
  apply(_, _, _) {
    Module.api.iplBinauralEffectApply(
      this.pointer,
      _.pointer,
      _.pointer,
      _.pointer,
    );
  }
}
class SteamAudioBinauralProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: "posX",
        defaultValue: "0.0",
      },
      {
        name: "posY",
        defaultValue: "0.0",
      },
      {
        name: "posZ",
        defaultValue: "0.0",
      },
      {
        name: "originX",
        defaultValue: "0.0",
      },
      {
        name: "originY",
        defaultValue: "0.0",
      },
      {
        name: "originZ",
        defaultValue: "0.0",
      },
      {
        name: "aheadX",
        defaultValue: "0.0",
      },
      {
        name: "aheadY",
        defaultValue: "0.0",
      },
      {
        name: "aheadZ",
        defaultValue: "-1.0",
      },
      {
        name: "upX",
        defaultValue: "0.0",
      },
      {
        name: "upY",
        defaultValue: "1.0",
      },
      {
        name: "upZ",
        defaultValue: "0.0",
      },
    ];
  }
  static {
    (this.context = null),
      (this.audioSettings = null),
      (this.hrtf = null),
      (this.staticInitialized = !1);
  }
  static staticInit(_) {
    if (this.staticInitialized) return;
    const _ = new IPLContextSettings();
    (_.version = 263427),
      (_.simdLevel = 0),
      (this.context = new IPLContext(_)),
      (this.audioSettings = new IPLAudioSettings()),
      (this.audioSettings.samplingRate = 48e3),
      (this.audioSettings.frameSize = _);
    const _ = new IPLHRTFSettings();
    (_.type = 0),
      (_.volume = 1),
      (this.hrtf = new IPLHRTF(this.context, this.audioSettings, _)),
      _.destroy(),
      _.destroy(),
      (this.staticInitialized = !0);
  }
  static staticDestroy() {
    this.hrtf.destroy(),
      this.audioSettings.destroy(),
      this.context.destroy(),
      (this.staticInitialized = !1);
  }
  constructor() {
    super(),
      (this.port.onmessage = (_) => {
        "destroy" === _.data && this.destroy();
      }),
      (this.position = null),
      (this.origin = null),
      (this.ahead = null),
      (this._ = null),
      (this.right = null),
      (this.direction = null),
      (this.binauralParams = null),
      (this.binauralEffect = null),
      (this.inBuffer = null),
      (this.monoBuffer = null),
      (this.outBuffer = null),
      (this.initialized = !1);
  }
  init(_, _, _) {
    if (this.initialized) return;
    SteamAudioBinauralProcessor.staticInit(_);
    const _ = new IPLBinauralEffectSettings();
    (_.hrtf = SteamAudioBinauralProcessor.hrtf.pointer),
      (this.binauralEffect = new IPLBinauralEffect(
        SteamAudioBinauralProcessor.context,
        SteamAudioBinauralProcessor.audioSettings,
        _,
      )),
      (this.position = new IPLVector3()),
      (this.position._ = 0),
      (this.position._ = 0),
      (this.position._ = 0),
      (this.origin = new IPLVector3()),
      (this.origin._ = 0),
      (this.origin._ = 0),
      (this.origin._ = 0),
      (this.ahead = new IPLVector3()),
      (this.ahead._ = 0),
      (this.ahead._ = 0),
      (this.ahead._ = -1),
      (this._ = new IPLVector3()),
      (this._._ = 0),
      (this._._ = 1),
      (this._._ = 0),
      (this.right = new IPLVector3()),
      (this.right._ = 1),
      (this.right._ = 0),
      (this.right._ = 0),
      (this.direction = new IPLVector3()),
      (this.direction._ = 0),
      (this.direction._ = 0),
      (this.direction._ = 0),
      (this.binauralParams = new IPLBinauralEffectParams()),
      (this.binauralParams.hrtf = SteamAudioBinauralProcessor.hrtf.pointer),
      (this.binauralParams.interpolation = 0),
      (this.binauralParams.spatialBlend = 1),
      (this.inBuffer = new IPLAudioBuffer(
        SteamAudioBinauralProcessor.context,
        _,
        _,
      )),
      (this.monoBuffer = new IPLAudioBuffer(
        SteamAudioBinauralProcessor.context,
        1,
        _,
      )),
      (this.outBuffer = new IPLAudioBuffer(
        SteamAudioBinauralProcessor.context,
        _,
        _,
      )),
      _.destroy(),
      (this.initialized = !0);
  }
  destroy() {
    this.outBuffer.destroy(),
      this.monoBuffer.destroy(),
      this.inBuffer.destroy(),
      this.binauralParams.destroy(),
      this.binauralEffect.destroy(),
      this.position.destroy(),
      this.origin.destroy(),
      this.ahead.destroy(),
      this._.destroy(),
      this.right.destroy(),
      this.direction.destroy(),
      (this.initialized = !1);
  }
  process(_, _, _) {
    if (1 != _.length || 1 != _.length) return console.log("not 1-1"), !1;
    const _ = _[0],
      _ = _[0],
      _ = _.length,
      _ = _.length;
    if (2 != _) return console.log("not stereo out", _), !1;
    this.init(_[0].length, _, _);
    for (let _ = 0; _ < _.length; ++_)
      for (let _ = 0; _ < _[_].length; ++_) _[_][_] = 0;
    return (
      this.inBuffer.copyFrom(_),
      this.inBuffer.downmix(this.monoBuffer),
      (this.position._ = _.posX[0]),
      (this.position._ = _.posY[0]),
      (this.position._ = _.posZ[0]),
      (this.origin._ = _.originX[0]),
      (this.origin._ = _.originY[0]),
      (this.origin._ = _.originZ[0]),
      (this.ahead._ = _.aheadX[0]),
      (this.ahead._ = _.aheadY[0]),
      (this.ahead._ = _.aheadZ[0]),
      (this._._ = _.upX[0]),
      (this._._ = _.upY[0]),
      (this._._ = _.upZ[0]),
      IPLVector3.cross(this.ahead, this._, this.right),
      IPLVector3.calcRelativeDirection(
        this.position,
        this.origin,
        this.ahead,
        this._,
        this.right,
        this.direction,
      ),
      (this.binauralParams.direction = this.direction),
      this.binauralEffect.apply(
        this.binauralParams,
        this.inBuffer,
        this.outBuffer,
      ),
      this.outBuffer.copyTo(_),
      !0
    );
  }
}
registerProcessor("steamaudio-binaural", SteamAudioBinauralProcessor);

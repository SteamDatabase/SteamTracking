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
  set version(e) {
    this._version[0] = e;
  }
  set logCallback(e) {
    this._logCallback[0] = e;
  }
  set allocateCallback(e) {
    this._allocateCallback[0] = e;
  }
  set freeCallback(e) {
    this._freeCallback[0] = e;
  }
  set simdLevel(e) {
    this._simdLevel[0] = e;
  }
}
class IPLContext {
  constructor(e) {
    this.pointerToPointer = Module.api.malloc(4);
    let t = Module.api.iplContextCreate(e.pointer, this.pointerToPointer);
    0 == t
      ? (this._pointer = new Uint32Array(
          Module.HEAPU8.buffer,
          Module.HEAPU8.byteOffset + this.pointerToPointer + 0,
          1,
        ))
      : console.error("Unable to create context:", t);
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
  static subtract(e, t, i) {
    (i.x = e.x - t.x), (i.y = e.y - t.y), (i.z = e.z - t.z);
  }
  static dot(e, t) {
    return e.x * t.x + e.y * t.y + e.z * t.z;
  }
  static cross(e, t, i) {
    (i.x = e.y * t.z - e.z * t.y),
      (i.y = e.z * t.x - e.x * t.z),
      (i.z = e.x * t.y - e.y * t.x);
  }
  static calcRelativeDirection(e, t, i, r, o, s) {
    IPLVector3.subtract(e, t, s);
    const n = IPLVector3.dot(s, o),
      a = IPLVector3.dot(s, r),
      l = -IPLVector3.dot(s, i);
    (s.x = n), (s.y = a), (s.z = l), s.normalize();
  }
  get lengthSquared() {
    return dot(this, this);
  }
  get length() {
    return Math.sqrt(lengthSquared);
  }
  normalize() {
    const e = this.length;
    e < 1e-4
      ? ((this.x = 0), (this.y = 0), (this.z = 0))
      : ((this.x = this.x / e), (this.y = this.y / e), (this.z = this.z / e));
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
  set x(e) {
    this._elements[0] = e;
  }
  set y(e) {
    this._elements[1] = e;
  }
  set z(e) {
    this._elements[2] = e;
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
  set samplingRate(e) {
    this._samplingRate[0] = e;
  }
  set frameSize(e) {
    this._frameSize[0] = e;
  }
}
class IPLAudioBuffer {
  constructor(e, t, i) {
    (this.context = e),
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
    let r = Module.api.iplAudioBufferAllocate(e.pointer, t, i, this.pointer);
    if (0 == r) {
      (this._channels = new Uint32Array(
        Module.HEAPU8.buffer,
        Module.HEAPU8.byteOffset + this._data[0],
        t,
      )),
        (this.channels = []);
      for (let e = 0; e < t; ++e)
        this.channels.push(
          new Float32Array(
            Module.HEAPU8.buffer,
            Module.HEAPU8.byteOffset + this._channels[e],
            i,
          ),
        );
    } else console.error("Unable to allocate audio buffer:", r);
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
  copyFrom(e) {
    const t = Math.min(this.numChannels, e.length);
    for (let i = 0; i < t; ++i) this.channels[i].set(e[i]);
  }
  copyTo(e) {
    const t = Math.min(this.numChannels, e.length);
    for (let i = 0; i < t; ++i) e[i].set(this.channels[i]);
  }
  mix(e) {
    Module.api.iplAudioBufferMix(this.context.pointer, this.pointer, e.pointer);
  }
  downmix(e) {
    Module.api.iplAudioBufferDownmix(
      this.context.pointer,
      this.pointer,
      e.pointer,
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
  set type(e) {
    this._type[0] = e;
  }
  set sofaFileName(e) {
    this._sofaFileName[0] = e;
  }
  set sofaData(e) {
    this._sofaData[0] = e;
  }
  set sofaDataSize(e) {
    this._sofaDataSize[0] = e;
  }
  set volume(e) {
    this._volume[0] = e;
  }
  set normType(e) {
    this._normType[0] = e;
  }
}
class IPLHRTF {
  constructor(e, t, i) {
    this.pointerToPointer = Module.api.malloc(4);
    let r = Module.api.iplHRTFCreate(
      e.pointer,
      t.pointer,
      i.pointer,
      this.pointerToPointer,
    );
    0 == r
      ? (this._pointer = new Uint32Array(
          Module.HEAPU8.buffer,
          Module.HEAPU8.byteOffset + this.pointerToPointer + 0,
          1,
        ))
      : console.error("Unable to create HRTF:", r);
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
  set hrtf(e) {
    this._hrtf[0] = e;
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
  set direction(e) {
    (this._direction[0] = e.x),
      (this._direction[1] = e.y),
      (this._direction[2] = e.z);
  }
  set interpolation(e) {
    this._interpolation[0] = e;
  }
  set spatialBlend(e) {
    this._spatialBlend[0] = e;
  }
  set hrtf(e) {
    this._hrtf[0] = e;
  }
  set peakDelays(e) {
    this._peakDelays[0] = e;
  }
}
class IPLBinauralEffect {
  constructor(e, t, i) {
    this.pointerToPointer = Module.api.malloc(4);
    let r = Module.api.iplBinauralEffectCreate(
      e.pointer,
      t.pointer,
      i.pointer,
      this.pointerToPointer,
    );
    0 == r
      ? (this._pointer = new Uint32Array(
          Module.HEAPU8.buffer,
          Module.HEAPU8.byteOffset + this.pointerToPointer + 0,
          1,
        ))
      : console.error("Unable to create binaural effect:", r);
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
  apply(e, t, i) {
    Module.api.iplBinauralEffectApply(
      this.pointer,
      e.pointer,
      t.pointer,
      i.pointer,
    );
  }
}
class SteamAudioBinauralProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      { name: "posX", defaultValue: "0.0" },
      { name: "posY", defaultValue: "0.0" },
      { name: "posZ", defaultValue: "0.0" },
      { name: "originX", defaultValue: "0.0" },
      { name: "originY", defaultValue: "0.0" },
      { name: "originZ", defaultValue: "0.0" },
      { name: "aheadX", defaultValue: "0.0" },
      { name: "aheadY", defaultValue: "0.0" },
      { name: "aheadZ", defaultValue: "-1.0" },
      { name: "upX", defaultValue: "0.0" },
      { name: "upY", defaultValue: "1.0" },
      { name: "upZ", defaultValue: "0.0" },
    ];
  }
  static {
    (this.context = null),
      (this.audioSettings = null),
      (this.hrtf = null),
      (this.staticInitialized = !1);
  }
  static staticInit(e) {
    if (this.staticInitialized) return;
    const t = new IPLContextSettings();
    (t.version = 263427),
      (t.simdLevel = 0),
      (this.context = new IPLContext(t)),
      (this.audioSettings = new IPLAudioSettings()),
      (this.audioSettings.samplingRate = 48e3),
      (this.audioSettings.frameSize = e);
    const i = new IPLHRTFSettings();
    (i.type = 0),
      (i.volume = 1),
      (this.hrtf = new IPLHRTF(this.context, this.audioSettings, i)),
      i.destroy(),
      t.destroy(),
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
      (this.port.onmessage = (e) => {
        "destroy" === e.data && this.destroy();
      }),
      (this.position = null),
      (this.origin = null),
      (this.ahead = null),
      (this.up = null),
      (this.right = null),
      (this.direction = null),
      (this.binauralParams = null),
      (this.binauralEffect = null),
      (this.inBuffer = null),
      (this.monoBuffer = null),
      (this.outBuffer = null),
      (this.initialized = !1);
  }
  init(e, t, i) {
    if (this.initialized) return;
    SteamAudioBinauralProcessor.staticInit(e);
    const r = new IPLBinauralEffectSettings();
    (r.hrtf = SteamAudioBinauralProcessor.hrtf.pointer),
      (this.binauralEffect = new IPLBinauralEffect(
        SteamAudioBinauralProcessor.context,
        SteamAudioBinauralProcessor.audioSettings,
        r,
      )),
      (this.position = new IPLVector3()),
      (this.position.x = 0),
      (this.position.y = 0),
      (this.position.z = 0),
      (this.origin = new IPLVector3()),
      (this.origin.x = 0),
      (this.origin.y = 0),
      (this.origin.z = 0),
      (this.ahead = new IPLVector3()),
      (this.ahead.x = 0),
      (this.ahead.y = 0),
      (this.ahead.z = -1),
      (this.up = new IPLVector3()),
      (this.up.x = 0),
      (this.up.y = 1),
      (this.up.z = 0),
      (this.right = new IPLVector3()),
      (this.right.x = 1),
      (this.right.y = 0),
      (this.right.z = 0),
      (this.direction = new IPLVector3()),
      (this.direction.x = 0),
      (this.direction.y = 0),
      (this.direction.z = 0),
      (this.binauralParams = new IPLBinauralEffectParams()),
      (this.binauralParams.hrtf = SteamAudioBinauralProcessor.hrtf.pointer),
      (this.binauralParams.interpolation = 0),
      (this.binauralParams.spatialBlend = 1),
      (this.inBuffer = new IPLAudioBuffer(
        SteamAudioBinauralProcessor.context,
        t,
        e,
      )),
      (this.monoBuffer = new IPLAudioBuffer(
        SteamAudioBinauralProcessor.context,
        1,
        e,
      )),
      (this.outBuffer = new IPLAudioBuffer(
        SteamAudioBinauralProcessor.context,
        i,
        e,
      )),
      r.destroy(),
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
      this.up.destroy(),
      this.right.destroy(),
      this.direction.destroy(),
      (this.initialized = !1);
  }
  process(e, t, i) {
    if (1 != e.length || 1 != t.length) return console.log("not 1-1"), !1;
    const r = e[0],
      o = t[0],
      s = r.length,
      n = o.length;
    if (2 != n) return console.log("not stereo out", n), !1;
    this.init(r[0].length, s, n);
    for (let e = 0; e < o.length; ++e)
      for (let t = 0; t < o[e].length; ++t) o[e][t] = 0;
    return (
      this.inBuffer.copyFrom(r),
      this.inBuffer.downmix(this.monoBuffer),
      (this.position.x = i.posX[0]),
      (this.position.y = i.posY[0]),
      (this.position.z = i.posZ[0]),
      (this.origin.x = i.originX[0]),
      (this.origin.y = i.originY[0]),
      (this.origin.z = i.originZ[0]),
      (this.ahead.x = i.aheadX[0]),
      (this.ahead.y = i.aheadY[0]),
      (this.ahead.z = i.aheadZ[0]),
      (this.up.x = i.upX[0]),
      (this.up.y = i.upY[0]),
      (this.up.z = i.upZ[0]),
      IPLVector3.cross(this.ahead, this.up, this.right),
      IPLVector3.calcRelativeDirection(
        this.position,
        this.origin,
        this.ahead,
        this.up,
        this.right,
        this.direction,
      ),
      (this.binauralParams.direction = this.direction),
      this.binauralEffect.apply(
        this.binauralParams,
        this.inBuffer,
        this.outBuffer,
      ),
      this.outBuffer.copyTo(o),
      !0
    );
  }
}
registerProcessor("steamaudio-binaural", SteamAudioBinauralProcessor);

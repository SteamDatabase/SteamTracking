class CNoiseGateProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      { name: "attack", defaultValue: 2 },
      { name: "release", defaultValue: 0.01 },
      { name: "threshold", defaultValue: -80 },
      { name: "sampleRate", defaultValue: 48e3 },
    ];
  }
  constructor() {
    super();
  }
  process(e, t, s) {
    let a = !1;
    if (
      (null == this.parameters &&
        ((this.parameters = new Object()),
        (this.parameters.attack = s.attack[0]),
        (this.parameters.release = s.release[0]),
        (this.parameters.threshold = s.threshold[0]),
        (this.parameters.bufferSize = e[0][0].length),
        (this.parameters.sampleRate = s.sampleRate[0]),
        (a = !0),
        this.port.postMessage(
          "NoiseGate setup: " + JSON.stringify(this.parameters),
        ),
        this.port.postMessage(
          "Inputs: " +
            e.length +
            " channels: " +
            e[0].length +
            " samples: " +
            e[0][0].length,
        ),
        this.port.postMessage(
          "Outputs: " +
            t.length +
            " channels: " +
            t[0].length +
            " samples: " +
            t[0][0].length,
        )),
      this.parameters.attack != s.attack[0] &&
        (this.parameters.attack = s.attack[0]),
      this.parameters.release != s.release[0] &&
        (this.parameters.release = s.release[0]),
      this.parameters.threshold != s.threshold[0] &&
        (this.parameters.threshold = s.threshold[0]),
      this.parameters.bufferSize != e[0][0].length &&
        ((this.parameters.bufferSize = s.bufferSize[0]), (a = !0)),
      this.parameters.sampleRate != s.sampleRate[0] &&
        ((this.parameters.sampleRate = s.sampleRate[0]), (a = !0)),
      a)
    ) {
      this.port.postMessage(
        "Noise gate had to re-initialize due to parameters changing",
      );
      let e = 0.0025;
      (this.alpha_ = this.getAlphaFromTimeConstant_(
        e,
        this.parameters.sampleRate,
      )),
        (this.previousLevel_ = 0),
        (this.previousWeight_ = 1),
        (this.channelIndex = 0),
        (this.channel_ = new Float32Array(this.parameters.bufferSize)),
        (this.envelope_ = new Float32Array(this.parameters.bufferSize)),
        (this.weights_ = new Float32Array(this.parameters.bufferSize));
    }
    let r = e[0][0],
      h = e[0].length;
    for (let t = 0; t < r.length; ++t) {
      let s = r[t];
      for (let a = 1; a < h; ++a) s = Math.max(s, e[0][a][t]);
      (this.channel_[this.channelIndex] = s),
        this.channelIndex++,
        this.channelIndex >= this.parameters.bufferSize &&
          (this.channelIndex = 0);
    }
    this.detectLevel_(), this.computeWeights_();
    let i = e[0];
    for (let e = 0; e < t.length; ++e) {
      let s = t[e];
      for (let e = 0; e < i.length; ++e) {
        let t = i[e],
          a = s[e];
        for (let e = 0; e < t.length; ++e) {
          let s = this.weights_[e];
          s < 0.2 && !this.m_bWasLastCutting
            ? ((this.m_bWasLastCutting = !0),
              (this.m_bWasLastOpen = !1),
              this.port.postMessage(
                "Mic input below threshold, cutting output.",
              ))
            : s >= 0.9 &&
              !this.m_bWasLastOpen &&
              (this.port.postMessage("Mic input now above threshold."),
              (this.m_bWasLastOpen = !0),
              (this.m_bWasLastCutting = !1)),
            (a[e] = t[e] * s);
        }
      }
    }
    return !0;
  }
  detectLevel_() {
    this.envelope_[0] =
      this.alpha_ * this.previousLevel_ +
      (1 - this.alpha_) * Math.pow(this.channel_[0], 2);
    for (let e = 1; e < this.parameters.bufferSize; e++)
      this.envelope_[e] =
        this.alpha_ * this.envelope_[e - 1] +
        (1 - this.alpha_) * Math.pow(this.channel_[e], 2);
    this.previousLevel_ = this.envelope_[this.parameters.bufferSize - 1];
  }
  computeWeights_() {
    let e = 1,
      t = 1,
      s = 1,
      a = 1;
    this.parameters.attack > 0 &&
      ((e = Math.ceil(this.parameters.sampleRate * this.parameters.attack)),
      (s = 1 / e)),
      this.parameters.release > 0 &&
        ((t = Math.ceil(this.parameters.sampleRate * this.parameters.release)),
        (a = 1 / t));
    for (let e = 0; e < this.parameters.bufferSize; e++) {
      if (
        CNoiseGateProcessor.toDecibel(2 * this.envelope_[e]) <
        this.parameters.threshold
      ) {
        const t = this.previousWeight_ - s;
        this.weights_[e] = Math.max(t, 0);
      } else {
        const t = this.previousWeight_ + a;
        this.weights_[e] = Math.min(t, 1);
      }
      this.previousWeight_ = this.weights_[e];
    }
  }
  getAlphaFromTimeConstant_(e, t) {
    return Math.exp(-1 / (t * e));
  }
  static toDecibel(e) {
    return 10 * Math.log10(e);
  }
}
registerProcessor("noisegate-processor", CNoiseGateProcessor);

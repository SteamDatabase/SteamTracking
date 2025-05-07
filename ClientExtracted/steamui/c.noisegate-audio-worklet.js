class CNoiseGateProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: "attack",
        defaultValue: 2,
      },
      {
        name: "release",
        defaultValue: 0.01,
      },
      {
        name: "threshold",
        defaultValue: -80,
      },
      {
        name: "sampleRate",
        defaultValue: 48e3,
      },
    ];
  }
  constructor() {
    super();
  }
  process(_, _, _) {
    let _ = !1;
    if (
      (null == this.parameters &&
        ((this.parameters = new Object()),
        (this.parameters.attack = _.attack[0]),
        (this.parameters.release = _.release[0]),
        (this.parameters.threshold = _.threshold[0]),
        (this.parameters.bufferSize = _[0][0].length),
        (this.parameters.sampleRate = _.sampleRate[0]),
        (_ = !0),
        this.port.postMessage(
          "NoiseGate setup: " + JSON.stringify(this.parameters),
        ),
        this.port.postMessage(
          "Inputs: " +
            _.length +
            " channels: " +
            _[0].length +
            " samples: " +
            _[0][0].length,
        ),
        this.port.postMessage(
          "Outputs: " +
            _.length +
            " channels: " +
            _[0].length +
            " samples: " +
            _[0][0].length,
        )),
      this.parameters.attack != _.attack[0] &&
        (this.parameters.attack = _.attack[0]),
      this.parameters.release != _.release[0] &&
        (this.parameters.release = _.release[0]),
      this.parameters.threshold != _.threshold[0] &&
        (this.parameters.threshold = _.threshold[0]),
      this.parameters.bufferSize != _[0][0].length &&
        ((this.parameters.bufferSize = _.bufferSize[0]), (_ = !0)),
      this.parameters.sampleRate != _.sampleRate[0] &&
        ((this.parameters.sampleRate = _.sampleRate[0]), (_ = !0)),
      _)
    ) {
      this.port.postMessage(
        "Noise gate had to re-initialize due to parameters changing",
      );
      let _ = 0.0025;
      (this.alpha_ = this.getAlphaFromTimeConstant_(
        _,
        this.parameters.sampleRate,
      )),
        (this.previousLevel_ = 0),
        (this.previousWeight_ = 1),
        (this.channelIndex = 0),
        (this.channel_ = new Float32Array(this.parameters.bufferSize)),
        (this.envelope_ = new Float32Array(this.parameters.bufferSize)),
        (this.weights_ = new Float32Array(this.parameters.bufferSize));
    }
    let _ = _[0][0],
      _ = _[0].length;
    for (let _ = 0; _ < _.length; ++_) {
      let _ = _[_];
      for (let _ = 1; _ < _; ++_) _ = Math.max(_, _[0][_][_]);
      (this.channel_[this.channelIndex] = _),
        this.channelIndex++,
        this.channelIndex >= this.parameters.bufferSize &&
          (this.channelIndex = 0);
    }
    this.detectLevel_(), this.computeWeights_();
    let _ = _[0];
    for (let _ = 0; _ < _.length; ++_) {
      let _ = _[_];
      for (let _ = 0; _ < _.length; ++_) {
        let _ = _[_],
          _ = _[_];
        for (let _ = 0; _ < _.length; ++_) {
          let _ = this.weights_[_];
          _ < 0.2 && !this.m_bWasLastCutting
            ? ((this.m_bWasLastCutting = !0),
              (this.m_bWasLastOpen = !1),
              this.port.postMessage(
                "Mic input below threshold, cutting output.",
              ))
            : _ >= 0.9 &&
              !this.m_bWasLastOpen &&
              (this.port.postMessage("Mic input now above threshold."),
              (this.m_bWasLastOpen = !0),
              (this.m_bWasLastCutting = !1)),
            (_[_] = _[_] * _);
        }
      }
    }
    return !0;
  }
  detectLevel_() {
    this.envelope_[0] =
      this.alpha_ * this.previousLevel_ +
      (1 - this.alpha_) * Math.pow(this.channel_[0], 2);
    for (let _ = 1; _ < this.parameters.bufferSize; _++)
      this.envelope_[_] =
        this.alpha_ * this.envelope_[_ - 1] +
        (1 - this.alpha_) * Math.pow(this.channel_[_], 2);
    this.previousLevel_ = this.envelope_[this.parameters.bufferSize - 1];
  }
  computeWeights_() {
    let _ = 1,
      _ = 1,
      _ = 1,
      _ = 1;
    this.parameters.attack > 0 &&
      ((_ = Math.ceil(this.parameters.sampleRate * this.parameters.attack)),
      (_ = 1 / _)),
      this.parameters.release > 0 &&
        ((_ = Math.ceil(this.parameters.sampleRate * this.parameters.release)),
        (_ = 1 / _));
    for (let _ = 0; _ < this.parameters.bufferSize; _++) {
      if (
        CNoiseGateProcessor.toDecibel(2 * this.envelope_[_]) <
        this.parameters.threshold
      ) {
        const _ = this.previousWeight_ - _;
        this.weights_[_] = Math.max(_, 0);
      } else {
        const _ = this.previousWeight_ + _;
        this.weights_[_] = Math.min(_, 1);
      }
      this.previousWeight_ = this.weights_[_];
    }
  }
  getAlphaFromTimeConstant_(_, _) {
    return Math.exp(-1 / (_ * _));
  }
  static toDecibel(_) {
    return 10 * Math.log10(_);
  }
}
registerProcessor("noisegate-processor", CNoiseGateProcessor);

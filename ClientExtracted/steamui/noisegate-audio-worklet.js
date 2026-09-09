(() => {
  class m extends AudioWorkletProcessor {
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
    process(e, s, t) {
      let r = !1;
      if (
        (this.parameters == null &&
          ((this.parameters = new Object()),
          (this.parameters.attack = t.attack[0]),
          (this.parameters.release = t.release[0]),
          (this.parameters.threshold = t.threshold[0]),
          (this.parameters.bufferSize = e[0][0].length),
          (this.parameters.sampleRate = t.sampleRate[0]),
          (r = !0),
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
              s.length +
              " channels: " +
              s[0].length +
              " samples: " +
              s[0][0].length,
          )),
        this.parameters.attack != t.attack[0] &&
          (this.parameters.attack = t.attack[0]),
        this.parameters.release != t.release[0] &&
          (this.parameters.release = t.release[0]),
        this.parameters.threshold != t.threshold[0] &&
          (this.parameters.threshold = t.threshold[0]),
        this.parameters.bufferSize != e[0][0].length &&
          ((this.parameters.bufferSize = t.bufferSize[0]), (r = !0)),
        this.parameters.sampleRate != t.sampleRate[0] &&
          ((this.parameters.sampleRate = t.sampleRate[0]), (r = !0)),
        r)
      ) {
        this.port.postMessage(
          "Noise gate had to re-initialize due to parameters changing",
        );
        let a = 0.0025;
        (this.alpha_ = this.getAlphaFromTimeConstant_(
          a,
          this.parameters.sampleRate,
        )),
          (this.previousLevel_ = 0),
          (this.previousWeight_ = 1),
          (this.channelIndex = 0),
          (this.channel_ = new Float32Array(this.parameters.bufferSize)),
          (this.envelope_ = new Float32Array(this.parameters.bufferSize)),
          (this.weights_ = new Float32Array(this.parameters.bufferSize));
      }
      let h = e[0][0],
        c = e[0].length;
      for (let a = 0; a < h.length; ++a) {
        let n = h[a];
        for (let i = 1; i < c; ++i) n = Math.max(n, e[0][i][a]);
        (this.channel_[this.channelIndex] = n),
          this.channelIndex++,
          this.channelIndex >= this.parameters.bufferSize &&
            (this.channelIndex = 0);
      }
      this.detectLevel_(), this.computeWeights_();
      let l = e[0];
      for (let a = 0; a < s.length; ++a) {
        let n = s[a];
        for (let i = 0; i < l.length; ++i) {
          let f = l[i],
            u = n[i];
          for (let p = 0; p < f.length; ++p) {
            let o = this.weights_[p];
            o < 0.2 && !this.m_bWasLastCutting
              ? ((this.m_bWasLastCutting = !0),
                (this.m_bWasLastOpen = !1),
                this.port.postMessage(
                  "Mic input below threshold, cutting output.",
                ))
              : o >= 0.9 &&
                !this.m_bWasLastOpen &&
                (this.port.postMessage("Mic input now above threshold."),
                (this.m_bWasLastOpen = !0),
                (this.m_bWasLastCutting = !1)),
              (u[p] = f[p] * o);
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
        s = 1,
        t = 1,
        r = 1;
      this.parameters.attack > 0 &&
        ((e = Math.ceil(this.parameters.sampleRate * this.parameters.attack)),
        (t = 1 / e)),
        this.parameters.release > 0 &&
          ((s = Math.ceil(
            this.parameters.sampleRate * this.parameters.release,
          )),
          (r = 1 / s));
      for (let h = 0; h < this.parameters.bufferSize; h++) {
        if (m.toDecibel(2 * this.envelope_[h]) < this.parameters.threshold) {
          const l = this.previousWeight_ - t;
          this.weights_[h] = Math.max(l, 0);
        } else {
          const l = this.previousWeight_ + r;
          this.weights_[h] = Math.min(l, 1);
        }
        this.previousWeight_ = this.weights_[h];
      }
    }
    getAlphaFromTimeConstant_(e, s) {
      return Math.exp(-1 / (s * e));
    }
    static toDecibel(e) {
      return 10 * Math.log10(e);
    }
  }
  registerProcessor("noisegate-processor", m);
})();
//# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/noisegate-audio-worklet.js.map

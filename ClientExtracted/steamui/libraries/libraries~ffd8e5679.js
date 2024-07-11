(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [2789],
  {
    48094: (e) => {
      e.exports = { ClipUploadStatus: "yYiwAkg1KI9DnrdM2Ihzt" };
    },
    35750: (e) => {
      e.exports = {
        ClipDetails: "de2EKou3YFGqmcr8NaGHy",
        VideoContainer: "_2x9NsXf_XlpTQ9-zs2v3W1",
        ClipPreview: "u2o9iARl6mX616KGayqor",
        Thumbnail: "_3Xa75rlFLU-jTdI-cw6_1N",
        PlayContainer: "_25EYl7rbRHp6ew_avgzWN8",
        Button: "_3zaD9QTsG_jdhVWcP-2U04",
      };
    },
    57195: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, { default: () => m });
      var i = t(27378),
        a = t(87110),
        n = t(15066),
        s = t(25877),
        l = t(62923),
        c = t(86064),
        o = t(48094);
      function m(e) {
        const { clipToUpload: r, finishUpload: t } = e,
          [a, c] = i.useState(!1),
          [m, u] = i.useState(),
          { fnUploadClip: B } = (0, n.D2)(),
          [_, g] = i.useState();
        if (!r) return null;
        return i.createElement(
          "div",
          { className: o.ClipUploadStatus },
          i.createElement(s.b, { clipID: r.clip_id }),
          !a &&
            i.createElement(
              l.zx,
              {
                onClick: async () => {
                  c(!0);
                  const { eResult: e, strURL: i } = await B(
                    r.clip_id,
                    "",
                    "",
                    3,
                  );
                  t(i), c(!1);
                },
              },
              "Upload",
            ),
          a && i.createElement(d, { clipToUpload: r }),
        );
      }
      function d(e) {
        const { clipToUpload: r } = e,
          [t, n] = i.useState(),
          [s, l] = i.useState();
        i.useEffect(
          () =>
            a.Up.RegisterForNotifyUploadProgress(
              (e) => (
                void 0 === e.Body().eresult()
                  ? n(100 * e.Body().progress())
                  : n(void 0),
                1
              ),
            ).unregister,
          [],
        );
        let o = (0, c.Xx)("#Chat_Uploading", r.clip_id),
          m = { width: t + "%" };
        return i.createElement(
          "div",
          { className: "chatFileUploadProgressContainer" },
          i.createElement(
            "div",
            { className: "chatFileUploadProgressName" },
            o,
          ),
          i.createElement(
            "div",
            {
              className:
                "chatFileUploadProgressBarContainer DialogProgressBar_ProgressBarContainer",
            },
            i.createElement("div", {
              className: "DialogProgressBar_Value",
              style: m,
            }),
          ),
        );
      }
    },
    28502: (e, r, t) => {
      "use strict";
      t.r(r),
        t.d(r, {
          default: () => V,
          useTimelineLoaderForCommunityClip: () => k,
        });
      var i = t(27378),
        a = t(29151),
        n = t(15066),
        s = t(87733),
        l = t(9807),
        c = t(34656),
        o = t(56552),
        m = t(2260),
        d = t(12791),
        u = t(20352);
      const B = m.Message;
      class _ extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.representation_name || d.aR(_.M()),
            B.initialize(this, e, 0, -1, [11], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  representation_name: {
                    n: 2,
                    br: d.FE.readString,
                    bw: d.Xc.writeString,
                  },
                  horizontal_resolution: {
                    n: 3,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                  vertical_resolution: {
                    n: 4,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                  frame_rate: {
                    n: 5,
                    br: d.FE.readDouble,
                    bw: d.Xc.writeDouble,
                  },
                  bandwidth: {
                    n: 6,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                  audio_sample_rate: {
                    n: 7,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                  frame_rate_string: {
                    n: 8,
                    br: d.FE.readString,
                    bw: d.Xc.writeString,
                  },
                  codec: { n: 9, br: d.FE.readString, bw: d.Xc.writeString },
                  audio_channel_config: {
                    n: 10,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                  segment_info: { n: 11, c: y, r: !0, q: !0 },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = d.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return d.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return d.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgVideoGameRecordingRepresentation";
        }
      }
      class g extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.component_name || d.aR(g.M()),
            B.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  component_name: {
                    n: 1,
                    br: d.FE.readString,
                    bw: d.Xc.writeString,
                  },
                  contents: { n: 2, br: d.FE.readUint32, bw: d.Xc.writeUint32 },
                  segment_size: {
                    n: 3,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                  file_type: {
                    n: 4,
                    br: d.FE.readString,
                    bw: d.Xc.writeString,
                  },
                  representations: { n: 5, c: _, r: !0, q: !0 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = d.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return d.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return d.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgVideoGameRecordingComponent";
        }
      }
      class b extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.steamid || d.aR(b.M()),
            B.initialize(this, e, 0, -1, [7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  steamid: {
                    n: 1,
                    br: d.FE.readUint64String,
                    bw: d.Xc.writeUint64String,
                  },
                  app_id: { n: 2, br: d.FE.readUint32, bw: d.Xc.writeUint32 },
                  num_segments: {
                    n: 3,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                  length_milliseconds: {
                    n: 4,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                  segment_duration_timescale: {
                    n: 5,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                  segment_duration: {
                    n: 6,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                  components: { n: 7, c: g, r: !0, q: !0 },
                  start_time_ms: {
                    n: 8,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                  start_offset_in_timeline_ms: {
                    n: 9,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = d.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return d.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return d.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgVideoGameRecordingDef";
        }
      }
      class y extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.segment_number || d.aR(y.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  segment_number: {
                    n: 1,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                  segment_size_bytes: {
                    n: 2,
                    br: d.FE.readUint64String,
                    bw: d.Xc.writeUint64String,
                  },
                  component_name: {
                    n: 3,
                    br: d.FE.readString,
                    bw: d.Xc.writeString,
                  },
                  representation_name: {
                    n: 4,
                    br: d.FE.readString,
                    bw: d.Xc.writeString,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = d.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return d.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return d.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingSegmentInfo";
        }
      }
      class f extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.segment_info || d.aR(f.M()),
            B.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  segment_info: { n: 1, c: y },
                  url_host: { n: 2, br: d.FE.readString, bw: d.Xc.writeString },
                  url_path: { n: 3, br: d.FE.readString, bw: d.Xc.writeString },
                  use_https: { n: 4, br: d.FE.readBool, bw: d.Xc.writeBool },
                  request_headers: { n: 5, c: p, r: !0, q: !0 },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = d.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return d.TA(f.M(), e, r);
        }
        static fromObject(e) {
          return d.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.F(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.l2(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingSegmentUploadInfo";
        }
      }
      class p extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.name || d.aR(p.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  name: { n: 1, br: d.FE.readString, bw: d.Xc.writeString },
                  value: { n: 2, br: d.FE.readString, bw: d.Xc.writeString },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = d.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return d.TA(p.M(), e, r);
        }
        static fromObject(e) {
          return d.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.F(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.l2(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders";
        }
      }
      const w = m.Message;
      class z extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.video_manager_clip_id || d.aR(z.M()),
            w.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  video_manager_clip_id: {
                    n: 1,
                    br: d.FE.readFixed64String,
                    bw: d.Xc.writeFixed64String,
                  },
                  video_manager_video_id: {
                    n: 2,
                    br: d.FE.readFixed64String,
                    bw: d.Xc.writeFixed64String,
                  },
                  server_timeline_id: {
                    n: 3,
                    br: d.FE.readFixed64String,
                    bw: d.Xc.writeFixed64String,
                  },
                  manifest_url: {
                    n: 4,
                    br: d.FE.readString,
                    bw: d.Xc.writeString,
                  },
                  duration_ms: {
                    n: 5,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                  start_offset_ms: {
                    n: 6,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = d.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return d.TA(z.M(), e, r);
        }
        static fromObject(e) {
          return d.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.F(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.l2(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideoManagerClipID";
        }
      }
      class F extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.clip_id || d.aR(F.M()),
            w.initialize(this, e, 0, -1, [9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  clip_id: {
                    n: 1,
                    br: d.FE.readFixed64String,
                    bw: d.Xc.writeFixed64String,
                  },
                  gameid: {
                    n: 2,
                    br: d.FE.readUint64String,
                    bw: d.Xc.writeUint64String,
                  },
                  date_recorded: {
                    n: 4,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                  total_file_size_bytes: {
                    n: 7,
                    br: d.FE.readUint64String,
                    bw: d.Xc.writeUint64String,
                  },
                  video_ids: { n: 9, c: z, r: !0, q: !0 },
                  owner_steamid: {
                    n: 10,
                    br: d.FE.readFixed64String,
                    bw: d.Xc.writeFixed64String,
                  },
                  upload_complete: {
                    n: 11,
                    br: d.FE.readBool,
                    bw: d.Xc.writeBool,
                  },
                  duration_ms: {
                    n: 12,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = d.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return d.TA(F.M(), e, r);
        }
        static fromObject(e) {
          return d.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.F(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.l2(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecordingClip";
        }
      }
      class S extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.clip || d.aR(S.M()),
            w.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  clip: { n: 2, c: F },
                  video_def: { n: 3, c: b, r: !0, q: !0 },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = d.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return d.TA(S.M(), e, r);
        }
        static fromObject(e) {
          return d.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.F(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.l2(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_CreateShareClip_Request";
        }
      }
      class M extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.clip || d.aR(M.M()),
            w.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m || (M.sm_m = { proto: M, fields: { clip: { n: 1, c: F } } }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = d.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return d.TA(M.M(), e, r);
        }
        static fromObject(e) {
          return d.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.F(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.l2(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_CreateShareClip_Response";
        }
      }
      class R extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.clip_id || d.aR(R.M()),
            w.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  clip_id: {
                    n: 2,
                    br: d.FE.readFixed64String,
                    bw: d.Xc.writeFixed64String,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = d.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return d.TA(R.M(), e, r);
        }
        static fromObject(e) {
          return d.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.F(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.l2(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_DeleteSharedClip_Request";
        }
      }
      class h extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), w.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new h();
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_DeleteSharedClip_Response";
        }
      }
      class W extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.clip_id || d.aR(W.M()),
            w.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  clip_id: {
                    n: 2,
                    br: d.FE.readFixed64String,
                    bw: d.Xc.writeFixed64String,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = d.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return d.TA(W.M(), e, r);
        }
        static fromObject(e) {
          return d.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.F(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.l2(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_GetSingleSharedClip_Request";
        }
      }
      class C extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.clip || d.aR(C.M()),
            w.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m || (C.sm_m = { proto: C, fields: { clip: { n: 1, c: F } } }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = d.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return d.TA(C.M(), e, r);
        }
        static fromObject(e) {
          return d.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.F(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.l2(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_GetSingleSharedClip_Response";
        }
      }
      class v extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.recording_id || d.aR(v.M()),
            w.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  recording_id: {
                    n: 1,
                    br: d.FE.readUint64String,
                    bw: d.Xc.writeUint64String,
                  },
                  component_name: {
                    n: 2,
                    br: d.FE.readString,
                    bw: d.Xc.writeString,
                  },
                  representation_name: {
                    n: 3,
                    br: d.FE.readString,
                    bw: d.Xc.writeString,
                  },
                  segments_to_store: { n: 4, c: y, r: !0, q: !0 },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = d.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return d.TA(v.M(), e, r);
        }
        static fromObject(e) {
          return d.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.F(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.l2(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_BeginGameRecordingSegmentsUpload_Request";
        }
      }
      class T extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.segments_needed || d.aR(T.M()),
            w.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  segments_needed: { n: 1, c: f, r: !0, q: !0 },
                  call_again: { n: 2, br: d.FE.readBool, bw: d.Xc.writeBool },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = d.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return d.TA(T.M(), e, r);
        }
        static fromObject(e) {
          return d.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.F(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.l2(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_BeginGameRecordingSegmentsUpload_Response";
        }
      }
      class U extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.recording_id || d.aR(U.M()),
            w.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  recording_id: {
                    n: 1,
                    br: d.FE.readUint64String,
                    bw: d.Xc.writeUint64String,
                  },
                  component_name: {
                    n: 2,
                    br: d.FE.readString,
                    bw: d.Xc.writeString,
                  },
                  representation_name: {
                    n: 3,
                    br: d.FE.readString,
                    bw: d.Xc.writeString,
                  },
                  first_segment_number: {
                    n: 4,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                  num_segments: {
                    n: 5,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                  upload_result: {
                    n: 6,
                    br: d.FE.readUint32,
                    bw: d.Xc.writeUint32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = d.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return d.TA(U.M(), e, r);
        }
        static fromObject(e) {
          return d.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.F(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.l2(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_CommitGameRecordingSegmentsUpload_Request";
        }
      }
      class j extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), w.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new j();
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_CommitGameRecordingSegmentsUpload_Response";
        }
      }
      class O extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.recording_id || d.aR(O.M()),
            w.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  recording_id: {
                    n: 1,
                    br: d.FE.readUint64String,
                    bw: d.Xc.writeUint64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = d.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return d.TA(O.M(), e, r);
        }
        static fromObject(e) {
          return d.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.F(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.l2(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request";
        }
      }
      class E extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.segments_needed || d.aR(E.M()),
            w.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: { segments_needed: { n: 1, c: f, r: !0, q: !0 } },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = d.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return d.TA(E.M(), e, r);
        }
        static fromObject(e) {
          return d.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.F(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.l2(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response";
        }
      }
      class X extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.recording_id || d.aR(X.M()),
            w.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  recording_id: {
                    n: 1,
                    br: d.FE.readUint64String,
                    bw: d.Xc.writeUint64String,
                  },
                  segments_uploaded: { n: 2, c: y, r: !0, q: !0 },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = d.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return d.TA(X.M(), e, r);
        }
        static fromObject(e) {
          return d.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.F(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.l2(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingCommitSegmentUploads_Request";
        }
      }
      class I extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), w.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new I();
        }
        static deserializeBinary(e) {
          let r = new m.BinaryReader(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingCommitSegmentUploads_Response";
        }
      }
      var G, x;
      !(function (e) {
        (e.CreateShareClip = function (e, r) {
          return e.SendMsg(
            "GameRecordingClip.CreateShareClip#1",
            (0, u.MD)(S, r),
            M,
            { ePrivilege: 1 },
          );
        }),
          (e.DeleteSharedClip = function (e, r) {
            return e.SendMsg(
              "GameRecordingClip.DeleteSharedClip#1",
              (0, u.MD)(R, r),
              h,
              { ePrivilege: 1 },
            );
          }),
          (e.GetSingleSharedClip = function (e, r) {
            return e.SendMsg(
              "GameRecordingClip.GetSingleSharedClip#1",
              (0, u.MD)(W, r),
              C,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(G || (G = {})),
        (function (e) {
          (e.BeginGameRecordingSegmentsUpload = function (e, r) {
            return e.SendMsg(
              "VideoClip.BeginGameRecordingSegmentsUpload#1",
              (0, u.MD)(v, r),
              T,
              { ePrivilege: 1 },
            );
          }),
            (e.CommitGameRecordingSegmentsUpload = function (e, r) {
              return e.SendMsg(
                "VideoClip.CommitGameRecordingSegmentsUpload#1",
                (0, u.MD)(U, r),
                j,
                { ePrivilege: 1 },
              );
            }),
            (e.GetNextBatchOfSegmentsToUpload = function (e, r) {
              return e.SendMsg(
                "VideoClip.GetNextBatchOfSegmentsToUpload#1",
                (0, u.MD)(O, r),
                E,
                { ePrivilege: 1 },
              );
            }),
            (e.CommitSegmentUploads = function (e, r) {
              return e.SendMsg(
                "VideoClip.CommitSegmentUploads#1",
                (0, u.MD)(X, r),
                I,
                { ePrivilege: 1 },
              );
            });
        })(x || (x = {}));
      var D = t(25355),
        N = t(35750),
        P = t(62914);
      function A(e) {
        const { clipID: r } = e,
          t = (function (e) {
            const r = (0, c.bY)();
            return (0, o.useQuery)(["grclip", e], async () => {
              const t = u.gA.Init(W);
              t.Body().set_clip_id(e);
              const i = await G.GetSingleSharedClip(r, t);
              if (1 != i.GetEResult())
                return (
                  (0, D.F0)("GetSingleSharedClip failed"),
                  void i.DEBUG_LogToConsole()
                );
              let a,
                n = i.Body().toObject().clip,
                s = [];
              if (0 == n.video_ids.length)
                return (
                  (0, D.F0)("No video ids in clip", e),
                  void i.DEBUG_LogToConsole()
                );
              for (let e of n.video_ids)
                (a && a.timeline_id == e.server_timeline_id) ||
                  ((a = q(n, e)), s.push(a)),
                  a.recordings.push({
                    recording_id: e.video_manager_video_id,
                    start_offset_ms: e.start_offset_ms.toFixed(0),
                    duration_ms: e.duration_ms.toFixed(0),
                    recording_type: 4,
                    cdn_manifest_url: e.manifest_url,
                  });
              return { clip_id: n.clip_id, game_id: n.gameid, timelines: s };
            });
          })(r);
        return t.data
          ? i.createElement(L, { clip: t.data, mode: a.tP.ChatClip })
          : i.createElement("div", { style: { color: "white" } }, "Loading...");
      }
      const V = function (e) {
        const { previewURL: r } = e,
          [t, a] = i.useState(!1);
        return t
          ? i.createElement(A, { ...e })
          : i.createElement(
              "div",
              {
                className: N.ClipPreview,
                onClick: () => {
                  a(!0);
                },
              },
              i.createElement("img", { className: N.Thumbnail, src: r }),
              i.createElement(
                "div",
                { className: N.PlayContainer },
                i.createElement(P.Play, { className: N.Button }),
              ),
            );
      };
      function q(e, r) {
        return {
          timeline_id: r.server_timeline_id,
          game_id: e.clip_id,
          date_recorded: e.date_recorded,
          duration_ms: e.duration_ms.toFixed(0),
          recordings: [],
        };
      }
      function k(e) {
        const r = i.useMemo(() => (0, n.GL)(e), [e]),
          t = i.useCallback(
            (r) => {
              for (const t of e.timelines)
                for (const e of t.recordings)
                  if (e.recording_id == r) return e.cdn_manifest_url;
            },
            [e],
          );
        return (
          i.useEffect(() => () => r && r.release(), [r]),
          { loader: r.loader, fnGetManifest: t }
        );
      }
      function L(e) {
        const { clip: r, mode: t } = e,
          { loader: n, fnGetManifest: c } = k(r);
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            a.dF,
            { loader: n, fnGetManifest: c, mode: t },
            i.createElement(
              "div",
              { className: N.ClipDetails },
              i.createElement(
                "div",
                { className: N.VideoContainer },
                i.createElement(s.i, {
                  positionAbsolute: !1,
                  autoPlay: t != a.tP.ChatClip,
                }),
              ),
              i.createElement(l.k, { loader: n }),
            ),
          ),
        );
      }
    },
  },
]);
//# sourceMappingURL=../sourcemaps/libraries/libraries~ffd8e5679.js.map

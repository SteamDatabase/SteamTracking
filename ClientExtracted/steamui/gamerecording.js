(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [7462],
  {
    11995: (e) => {
      e.exports = { ClipUploadStatus: "_3rMEP_IbC30BRuQuHY6F1E" };
    },
    25025: (e) => {
      e.exports = {
        ClipDetails: "_1fyr-hKRG1lR-7oPJ_rqmG",
        VideoContainer: "_1Ml8-TqxakKRFRAYwvdq4Y",
        ClipPreview: "_3vpFgujAo8vFRf6bAtHCEO",
        Thumbnail: "_3PnGnLoEMy4dXaT5j3EWN0",
        PlayContainer: "_1Cv16KKO1tKy2jnOykai5-",
        Button: "MwGjy194NChFEI20JTHao",
      };
    },
    24709: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, { default: () => c });
      var i = t(63696),
        n = t(44926),
        a = t(91720),
        s = t(93092),
        l = t(28816),
        o = t(46108),
        m = t(11995);
      function c(e) {
        const { clipToUpload: r, finishUpload: t } = e,
          [n, o] = i.useState(!1),
          [c, u] = i.useState(),
          { fnUploadClip: g } = (0, a.Sm)(),
          [B, _] = i.useState();
        if (!r) return null;
        return i.createElement(
          "div",
          { className: m.ClipUploadStatus },
          i.createElement(s.d, { clipID: r.clip_id }),
          !n &&
            i.createElement(
              l.$n,
              {
                onClick: async () => {
                  o(!0);
                  const { eResult: e, strURL: i } = await g(
                    r.clip_id,
                    "",
                    "",
                    3,
                  );
                  t(i), o(!1);
                },
              },
              "Upload",
            ),
          n && i.createElement(d, { clipToUpload: r }),
        );
      }
      function d(e) {
        const { clipToUpload: r } = e,
          [t, a] = i.useState(),
          [s, l] = i.useState();
        i.useEffect(
          () =>
            n.xM.RegisterForNotifyUploadProgress(
              (e) => (
                void 0 === e.Body().eresult()
                  ? a(100 * e.Body().progress())
                  : a(void 0),
                1
              ),
            ).unregister,
          [],
        );
        let m = (0, o.we)("#Chat_Uploading", r.clip_id),
          c = { width: t + "%" };
        return i.createElement(
          "div",
          { className: "chatFileUploadProgressContainer" },
          i.createElement(
            "div",
            { className: "chatFileUploadProgressName" },
            m,
          ),
          i.createElement(
            "div",
            {
              className:
                "chatFileUploadProgressBarContainer DialogProgressBar_ProgressBarContainer",
            },
            i.createElement("div", {
              className: "DialogProgressBar_Value",
              style: c,
            }),
          ),
        );
      }
    },
    84512: (e, r, t) => {
      "use strict";
      t.r(r),
        t.d(r, {
          default: () => k,
          useTimelineLoaderForCommunityClip: () => L,
        });
      var i = t(63696),
        n = t(92374),
        a = t(91720),
        s = t(68956),
        l = t(16256),
        o = t(46382),
        m = t(61416),
        c = t(58663),
        d = t(48307),
        u = t(12176);
      const g = c.Message;
      class B extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.representation_name || d.Sg(B.M()),
            g.initialize(this, e, 0, -1, [11], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  representation_name: {
                    n: 2,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  horizontal_resolution: {
                    n: 3,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  vertical_resolution: {
                    n: 4,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  frame_rate: {
                    n: 5,
                    br: d.qM.readDouble,
                    bw: d.gp.writeDouble,
                  },
                  bandwidth: {
                    n: 6,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  audio_sample_rate: {
                    n: 7,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  frame_rate_string: {
                    n: 8,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  codec: { n: 9, br: d.qM.readString, bw: d.gp.writeString },
                  audio_channel_config: {
                    n: 10,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  segment_info: { n: 11, c: b, r: !0, q: !0 },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = d.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return d.BT(B.M(), e, r);
        }
        static fromObject(e) {
          return d.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgVideoGameRecordingRepresentation";
        }
      }
      class _ extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.component_name || d.Sg(_.M()),
            g.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  component_name: {
                    n: 1,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  contents: { n: 2, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  segment_size: {
                    n: 3,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  file_type: {
                    n: 4,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  representations: { n: 5, c: B, r: !0, q: !0 },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = d.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return d.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return d.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgVideoGameRecordingComponent";
        }
      }
      class p extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.steamid || d.Sg(p.M()),
            g.initialize(this, e, 0, -1, [7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  steamid: {
                    n: 1,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  app_id: { n: 2, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  num_segments: {
                    n: 3,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  length_milliseconds: {
                    n: 4,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  segment_duration_timescale: {
                    n: 5,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  segment_duration: {
                    n: 6,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  components: { n: 7, c: _, r: !0, q: !0 },
                  start_time_ms: {
                    n: 8,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  start_offset_in_timeline_ms: {
                    n: 9,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = d.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return d.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return d.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgVideoGameRecordingDef";
        }
      }
      class b extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.segment_number || d.Sg(b.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  segment_number: {
                    n: 1,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  segment_size_bytes: {
                    n: 2,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  component_name: {
                    n: 3,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  representation_name: {
                    n: 4,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = d.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return d.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return d.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingSegmentInfo";
        }
      }
      class y extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.segment_info || d.Sg(y.M()),
            g.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  segment_info: { n: 1, c: b },
                  url_host: { n: 2, br: d.qM.readString, bw: d.gp.writeString },
                  url_path: { n: 3, br: d.qM.readString, bw: d.gp.writeString },
                  use_https: { n: 4, br: d.qM.readBool, bw: d.gp.writeBool },
                  request_headers: { n: 5, c: f, r: !0, q: !0 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = d.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return d.BT(y.M(), e, r);
        }
        static fromObject(e) {
          return d.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingSegmentUploadInfo";
        }
      }
      class f extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.name || d.Sg(f.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  name: { n: 1, br: d.qM.readString, bw: d.gp.writeString },
                  value: { n: 2, br: d.qM.readString, bw: d.gp.writeString },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = d.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return d.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return d.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders";
        }
      }
      const w = c.Message;
      class M extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.video_manager_clip_id || d.Sg(M.M()),
            w.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  video_manager_clip_id: {
                    n: 1,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                  video_manager_video_id: {
                    n: 2,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                  server_timeline_id: {
                    n: 3,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                  manifest_url: {
                    n: 4,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  duration_ms: {
                    n: 5,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  start_offset_ms: {
                    n: 6,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = d.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return d.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return d.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideoManagerClipID";
        }
      }
      class z extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.clip_id || d.Sg(z.M()),
            w.initialize(this, e, 0, -1, [9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  clip_id: {
                    n: 1,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                  gameid: {
                    n: 2,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  date_recorded: {
                    n: 4,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  total_file_size_bytes: {
                    n: 7,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  video_ids: { n: 9, c: M, r: !0, q: !0 },
                  owner_steamid: {
                    n: 10,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                  upload_complete: {
                    n: 11,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                  duration_ms: {
                    n: 12,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = d.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return d.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return d.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecordingClip";
        }
      }
      class S extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.clip || d.Sg(S.M()),
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
                  clip: { n: 2, c: z },
                  video_def: { n: 3, c: p, r: !0, q: !0 },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = d.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return d.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return d.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_CreateShareClip_Request";
        }
      }
      class R extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.clip || d.Sg(R.M()),
            w.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m || (R.sm_m = { proto: R, fields: { clip: { n: 1, c: z } } }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = d.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return d.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return d.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_CreateShareClip_Response";
        }
      }
      class h extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.clip_id || d.Sg(h.M()),
            w.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  clip_id: {
                    n: 2,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = d.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return d.BT(h.M(), e, r);
        }
        static fromObject(e) {
          return d.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_DeleteSharedClip_Request";
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
          let r = new c.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_DeleteSharedClip_Response";
        }
      }
      class U extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.clip_id || d.Sg(U.M()),
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
                  clip_id: {
                    n: 2,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = d.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return d.BT(U.M(), e, r);
        }
        static fromObject(e) {
          return d.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.zj(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.i0(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_GetSingleSharedClip_Request";
        }
      }
      class C extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.clip || d.Sg(C.M()),
            w.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m || (C.sm_m = { proto: C, fields: { clip: { n: 1, c: z } } }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = d.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return d.BT(C.M(), e, r);
        }
        static fromObject(e) {
          return d.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.zj(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.i0(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_GetSingleSharedClip_Response";
        }
      }
      class F extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.recording_id || d.Sg(F.M()),
            w.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  recording_id: {
                    n: 1,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  component_name: {
                    n: 2,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  representation_name: {
                    n: 3,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  segments_to_store: { n: 4, c: b, r: !0, q: !0 },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = d.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return d.BT(F.M(), e, r);
        }
        static fromObject(e) {
          return d.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_BeginGameRecordingSegmentsUpload_Request";
        }
      }
      class W extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.segments_needed || d.Sg(W.M()),
            w.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  segments_needed: { n: 1, c: y, r: !0, q: !0 },
                  call_again: { n: 2, br: d.qM.readBool, bw: d.gp.writeBool },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = d.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return d.BT(W.M(), e, r);
        }
        static fromObject(e) {
          return d.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.zj(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.i0(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_BeginGameRecordingSegmentsUpload_Response";
        }
      }
      class v extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.recording_id || d.Sg(v.M()),
            w.initialize(this, e, 0, -1, void 0, null);
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
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  component_name: {
                    n: 2,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  representation_name: {
                    n: 3,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  first_segment_number: {
                    n: 4,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  num_segments: {
                    n: 5,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  upload_result: {
                    n: 6,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = d.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return d.BT(v.M(), e, r);
        }
        static fromObject(e) {
          return d.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.zj(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.i0(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_CommitGameRecordingSegmentsUpload_Request";
        }
      }
      class T extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), w.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new T();
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_CommitGameRecordingSegmentsUpload_Response";
        }
      }
      class q extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.recording_id || d.Sg(q.M()),
            w.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  recording_id: {
                    n: 1,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = d.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return d.BT(q.M(), e, r);
        }
        static fromObject(e) {
          return d.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request";
        }
      }
      class O extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.segments_needed || d.Sg(O.M()),
            w.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { segments_needed: { n: 1, c: y, r: !0, q: !0 } },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = d.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return d.BT(O.M(), e, r);
        }
        static fromObject(e) {
          return d.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.zj(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.i0(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response";
        }
      }
      class I extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.recording_id || d.Sg(I.M()),
            w.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  recording_id: {
                    n: 1,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  segments_uploaded: { n: 2, c: b, r: !0, q: !0 },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = d.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return d.BT(I.M(), e, r);
        }
        static fromObject(e) {
          return d.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return d.zj(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          d.i0(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingCommitSegmentUploads_Request";
        }
      }
      class G extends w {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), w.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new G();
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingCommitSegmentUploads_Response";
        }
      }
      var x, N;
      !(function (e) {
        (e.CreateShareClip = function (e, r) {
          return e.SendMsg(
            "GameRecordingClip.CreateShareClip#1",
            (0, u.I8)(S, r),
            R,
            { ePrivilege: 1 },
          );
        }),
          (e.DeleteSharedClip = function (e, r) {
            return e.SendMsg(
              "GameRecordingClip.DeleteSharedClip#1",
              (0, u.I8)(h, r),
              j,
              { ePrivilege: 1 },
            );
          }),
          (e.GetSingleSharedClip = function (e, r) {
            return e.SendMsg(
              "GameRecordingClip.GetSingleSharedClip#1",
              (0, u.I8)(U, r),
              C,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(x || (x = {})),
        (function (e) {
          (e.BeginGameRecordingSegmentsUpload = function (e, r) {
            return e.SendMsg(
              "VideoClip.BeginGameRecordingSegmentsUpload#1",
              (0, u.I8)(F, r),
              W,
              { ePrivilege: 1 },
            );
          }),
            (e.CommitGameRecordingSegmentsUpload = function (e, r) {
              return e.SendMsg(
                "VideoClip.CommitGameRecordingSegmentsUpload#1",
                (0, u.I8)(v, r),
                T,
                { ePrivilege: 1 },
              );
            }),
            (e.GetNextBatchOfSegmentsToUpload = function (e, r) {
              return e.SendMsg(
                "VideoClip.GetNextBatchOfSegmentsToUpload#1",
                (0, u.I8)(q, r),
                O,
                { ePrivilege: 1 },
              );
            }),
            (e.CommitSegmentUploads = function (e, r) {
              return e.SendMsg(
                "VideoClip.CommitSegmentUploads#1",
                (0, u.I8)(I, r),
                G,
                { ePrivilege: 1 },
              );
            });
        })(N || (N = {}));
      var E = t(84629),
        P = t(25025),
        V = t(35488);
      function D(e) {
        const { clipID: r } = e,
          t = (function (e) {
            const r = (0, o.KV)();
            return (0, m.I)({
              queryKey: ["grclip", e],
              queryFn: async () => {
                const t = u.w.Init(U);
                t.Body().set_clip_id(e);
                const i = await x.GetSingleSharedClip(r, t);
                if (1 != i.GetEResult())
                  throw (
                    ((0, E.ZI)("GetSingleSharedClip failed"),
                    i.DEBUG_LogToConsole(),
                    new Error(
                      `Failed to load clip with result: ${i.GetEResult()}`,
                    ))
                  );
                let n,
                  a = i.Body().toObject().clip,
                  s = [];
                if (0 == a.video_ids.length)
                  throw (
                    ((0, E.ZI)("No video ids in clip", e),
                    i.DEBUG_LogToConsole(),
                    new Error("No video ids in clip"))
                  );
                for (let e of a.video_ids)
                  (n && n.timeline_id == e.server_timeline_id) ||
                    ((n = K(a, e)), s.push(n)),
                    n.recordings.push({
                      recording_id: e.video_manager_video_id,
                      start_offset_ms: e.start_offset_ms.toFixed(0),
                      duration_ms: e.duration_ms.toFixed(0),
                      recording_type: 4,
                      cdn_manifest_url: e.manifest_url,
                    });
                return { clip_id: a.clip_id, game_id: a.gameid, timelines: s };
              },
            });
          })(r);
        return t.data
          ? i.createElement(A, { clip: t.data, mode: n.g_.ChatClip })
          : i.createElement("div", { style: { color: "white" } }, "Loading...");
      }
      const k = function (e) {
        const { previewURL: r } = e,
          [t, n] = i.useState(!1);
        return t
          ? i.createElement(D, { ...e })
          : i.createElement(
              "div",
              {
                className: P.ClipPreview,
                onClick: () => {
                  n(!0);
                },
              },
              i.createElement("img", { className: P.Thumbnail, src: r }),
              i.createElement(
                "div",
                { className: P.PlayContainer },
                i.createElement(V.Play, { className: P.Button }),
              ),
            );
      };
      function K(e, r) {
        return {
          timeline_id: r.server_timeline_id,
          game_id: e.clip_id,
          date_recorded: e.date_recorded,
          duration_ms: e.duration_ms.toFixed(0),
          recordings: [],
        };
      }
      function L(e) {
        const r = i.useMemo(() => (0, a.pw)(e), [e]),
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
      function A(e) {
        const { clip: r, mode: t } = e,
          { loader: a, fnGetManifest: o } = L(r);
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            n.Ni,
            { loader: a, fnGetManifest: o, mode: t },
            i.createElement(
              "div",
              { className: P.ClipDetails },
              i.createElement(
                "div",
                { className: P.VideoContainer },
                i.createElement(s.J, {
                  positionAbsolute: !1,
                  autoPlay: t != n.g_.ChatClip,
                }),
              ),
              i.createElement(l.h, { loader: a }),
            ),
          ),
        );
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/gamerecording.js.map

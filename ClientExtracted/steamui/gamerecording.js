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
        a = t(44926),
        n = t(91720),
        s = t(93092),
        l = t(64608),
        o = t(46108),
        m = t(11995);
      function c(e) {
        const { clipToUpload: r, finishUpload: t } = e,
          [a, o] = i.useState(!1),
          [c, u] = i.useState(),
          { fnUploadClip: g } = (0, n.Sm)(),
          [B, _] = i.useState();
        if (!r) return null;
        return i.createElement(
          "div",
          { className: m.ClipUploadStatus },
          i.createElement(s.d, { clipID: r.clip_id }),
          !a &&
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
          a && i.createElement(d, { clipToUpload: r }),
        );
      }
      function d(e) {
        const { clipToUpload: r } = e,
          [t, n] = i.useState(),
          [s, l] = i.useState();
        i.useEffect(
          () =>
            a.xM.RegisterForNotifyUploadProgress(
              (e) => (
                void 0 === e.Body().eresult()
                  ? n(100 * e.Body().progress())
                  : n(void 0),
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
          default: () => D,
          useTimelineLoaderForCommunityClip: () => K,
        });
      var i,
        a,
        n = t(63696),
        s = t(92374),
        l = t(91720),
        o = t(68956),
        m = t(36975),
        c = t(46382),
        d = t(61416),
        u = t(58663),
        g = t.n(u),
        B = t(48307),
        _ = t(12176);
      class p extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.representation_name || B.Sg(p.M()),
            u.Message.initialize(this, e, 0, -1, [11], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  representation_name: {
                    n: 2,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  horizontal_resolution: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  vertical_resolution: {
                    n: 4,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  frame_rate: {
                    n: 5,
                    br: B.qM.readDouble,
                    bw: B.gp.writeDouble,
                  },
                  bandwidth: {
                    n: 6,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  audio_sample_rate: {
                    n: 7,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  frame_rate_string: {
                    n: 8,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  codec: { n: 9, br: B.qM.readString, bw: B.gp.writeString },
                  audio_channel_config: {
                    n: 10,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  segment_info: { n: 11, c: y, r: !0, q: !0 },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = B.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return B.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return B.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return B.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          B.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgVideoGameRecordingRepresentation";
        }
      }
      class b extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.component_name || B.Sg(b.M()),
            u.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  component_name: {
                    n: 1,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  contents: { n: 2, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  segment_size: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  file_type: {
                    n: 4,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  representations: { n: 5, c: p, r: !0, q: !0 },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = B.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return B.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return B.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return B.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          B.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgVideoGameRecordingComponent";
        }
      }
      class M extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.steamid || B.Sg(M.M()),
            u.Message.initialize(this, e, 0, -1, [7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  steamid: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  app_id: { n: 2, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  num_segments: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  length_milliseconds: {
                    n: 4,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  segment_duration_timescale: {
                    n: 5,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  segment_duration: {
                    n: 6,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  components: { n: 7, c: b, r: !0, q: !0 },
                  start_time_ms: {
                    n: 8,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  start_offset_in_timeline_ms: {
                    n: 9,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = B.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return B.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return B.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return B.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          B.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgVideoGameRecordingDef";
        }
      }
      class y extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.segment_number || B.Sg(y.M()),
            u.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  segment_size_bytes: {
                    n: 2,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  component_name: {
                    n: 3,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  representation_name: {
                    n: 4,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = B.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return B.BT(y.M(), e, r);
        }
        static fromObject(e) {
          return B.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return B.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          B.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingSegmentInfo";
        }
      }
      class f extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.segment_info || B.Sg(f.M()),
            u.Message.initialize(this, e, 0, -1, [5], null);
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
                  url_host: { n: 2, br: B.qM.readString, bw: B.gp.writeString },
                  url_path: { n: 3, br: B.qM.readString, bw: B.gp.writeString },
                  use_https: { n: 4, br: B.qM.readBool, bw: B.gp.writeBool },
                  request_headers: { n: 5, c: w, r: !0, q: !0 },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = B.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return B.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return B.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return B.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          B.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingSegmentUploadInfo";
        }
      }
      class w extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.name || B.Sg(w.M()),
            u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  name: { n: 1, br: B.qM.readString, bw: B.gp.writeString },
                  value: { n: 2, br: B.qM.readString, bw: B.gp.writeString },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = B.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return B.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return B.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return B.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          B.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders";
        }
      }
      class z extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.video_manager_clip_id || B.Sg(z.M()),
            u.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  video_manager_video_id: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  server_timeline_id: {
                    n: 3,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  manifest_url: {
                    n: 4,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  duration_ms: {
                    n: 5,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  start_offset_ms: {
                    n: 6,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = B.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return B.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return B.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return B.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          B.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideoManagerClipID";
        }
      }
      class S extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.clip_id || B.Sg(S.M()),
            u.Message.initialize(this, e, 0, -1, [9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  clip_id: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  gameid: {
                    n: 2,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  date_recorded: {
                    n: 4,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  total_file_size_bytes: {
                    n: 7,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  video_ids: { n: 9, c: z, r: !0, q: !0 },
                  owner_steamid: {
                    n: 10,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  upload_complete: {
                    n: 11,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                  duration_ms: {
                    n: 12,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = B.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return B.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return B.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return B.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          B.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecordingClip";
        }
      }
      class R extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.clip || B.Sg(R.M()),
            u.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  clip: { n: 2, c: S },
                  video_def: { n: 3, c: M, r: !0, q: !0 },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = B.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return B.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return B.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return B.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          B.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_CreateShareClip_Request";
        }
      }
      class h extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.clip || B.Sg(h.M()),
            u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m || (h.sm_m = { proto: h, fields: { clip: { n: 1, c: S } } }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = B.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return B.BT(h.M(), e, r);
        }
        static fromObject(e) {
          return B.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return B.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          B.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_CreateShareClip_Response";
        }
      }
      class j extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.clip_id || B.Sg(j.M()),
            u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  clip_id: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = B.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return B.BT(j.M(), e, r);
        }
        static fromObject(e) {
          return B.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return B.zj(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          B.i0(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_DeleteSharedClip_Request";
        }
      }
      class U extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new U();
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_DeleteSharedClip_Response";
        }
      }
      class C extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.clip_id || B.Sg(C.M()),
            u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  clip_id: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = B.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return B.BT(C.M(), e, r);
        }
        static fromObject(e) {
          return B.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return B.zj(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          B.i0(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_GetSingleSharedClip_Request";
        }
      }
      class F extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.clip || B.Sg(F.M()),
            u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m || (F.sm_m = { proto: F, fields: { clip: { n: 1, c: S } } }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = B.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return B.BT(F.M(), e, r);
        }
        static fromObject(e) {
          return B.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return B.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          B.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_GetSingleSharedClip_Response";
        }
      }
      class W extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.recording_id || B.Sg(W.M()),
            u.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  recording_id: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  component_name: {
                    n: 2,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  representation_name: {
                    n: 3,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  segments_to_store: { n: 4, c: y, r: !0, q: !0 },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = B.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return B.BT(W.M(), e, r);
        }
        static fromObject(e) {
          return B.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return B.zj(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          B.i0(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_BeginGameRecordingSegmentsUpload_Request";
        }
      }
      class v extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.segments_needed || B.Sg(v.M()),
            u.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  segments_needed: { n: 1, c: f, r: !0, q: !0 },
                  call_again: { n: 2, br: B.qM.readBool, bw: B.gp.writeBool },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = B.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return B.BT(v.M(), e, r);
        }
        static fromObject(e) {
          return B.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return B.zj(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          B.i0(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_BeginGameRecordingSegmentsUpload_Response";
        }
      }
      class T extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.recording_id || B.Sg(T.M()),
            u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  recording_id: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  component_name: {
                    n: 2,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  representation_name: {
                    n: 3,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  first_segment_number: {
                    n: 4,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  num_segments: {
                    n: 5,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  upload_result: {
                    n: 6,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = B.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return B.BT(T.M(), e, r);
        }
        static fromObject(e) {
          return B.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return B.zj(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          B.i0(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_CommitGameRecordingSegmentsUpload_Request";
        }
      }
      class q extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new q();
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_CommitGameRecordingSegmentsUpload_Response";
        }
      }
      class O extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.recording_id || B.Sg(O.M()),
            u.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = B.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return B.BT(O.M(), e, r);
        }
        static fromObject(e) {
          return B.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return B.zj(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          B.i0(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request";
        }
      }
      class I extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.segments_needed || B.Sg(I.M()),
            u.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { segments_needed: { n: 1, c: f, r: !0, q: !0 } },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = B.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return B.BT(I.M(), e, r);
        }
        static fromObject(e) {
          return B.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return B.zj(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          B.i0(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response";
        }
      }
      class G extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.recording_id || B.Sg(G.M()),
            u.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  recording_id: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  segments_uploaded: { n: 2, c: y, r: !0, q: !0 },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = B.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return B.BT(G.M(), e, r);
        }
        static fromObject(e) {
          return B.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return B.zj(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          B.i0(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingCommitSegmentUploads_Request";
        }
      }
      class x extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new x();
        }
        static deserializeBinary(e) {
          let r = new (g().BinaryReader)(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingCommitSegmentUploads_Response";
        }
      }
      !(function (e) {
        (e.CreateShareClip = function (e, r) {
          return e.SendMsg(
            "GameRecordingClip.CreateShareClip#1",
            (0, _.I8)(R, r),
            h,
            { ePrivilege: 1 },
          );
        }),
          (e.DeleteSharedClip = function (e, r) {
            return e.SendMsg(
              "GameRecordingClip.DeleteSharedClip#1",
              (0, _.I8)(j, r),
              U,
              { ePrivilege: 1 },
            );
          }),
          (e.GetSingleSharedClip = function (e, r) {
            return e.SendMsg(
              "GameRecordingClip.GetSingleSharedClip#1",
              (0, _.I8)(C, r),
              F,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(i || (i = {})),
        (function (e) {
          (e.BeginGameRecordingSegmentsUpload = function (e, r) {
            return e.SendMsg(
              "VideoClip.BeginGameRecordingSegmentsUpload#1",
              (0, _.I8)(W, r),
              v,
              { ePrivilege: 1 },
            );
          }),
            (e.CommitGameRecordingSegmentsUpload = function (e, r) {
              return e.SendMsg(
                "VideoClip.CommitGameRecordingSegmentsUpload#1",
                (0, _.I8)(T, r),
                q,
                { ePrivilege: 1 },
              );
            }),
            (e.GetNextBatchOfSegmentsToUpload = function (e, r) {
              return e.SendMsg(
                "VideoClip.GetNextBatchOfSegmentsToUpload#1",
                (0, _.I8)(O, r),
                I,
                { ePrivilege: 1 },
              );
            }),
            (e.CommitSegmentUploads = function (e, r) {
              return e.SendMsg(
                "VideoClip.CommitSegmentUploads#1",
                (0, _.I8)(G, r),
                x,
                { ePrivilege: 1 },
              );
            });
        })(a || (a = {}));
      var N = t(84629),
        E = t(25025),
        P = t(35488);
      function V(e) {
        const { clipID: r } = e,
          t = (function (e) {
            const r = (0, c.KV)();
            return (0, d.I)({
              queryKey: ["grclip", e],
              queryFn: async () => {
                const t = _.w.Init(C);
                t.Body().set_clip_id(e);
                const a = await i.GetSingleSharedClip(r, t);
                if (1 != a.GetEResult())
                  throw (
                    ((0, N.ZI)("GetSingleSharedClip failed"),
                    a.DEBUG_LogToConsole(),
                    new Error(
                      `Failed to load clip with result: ${a.GetEResult()}`,
                    ))
                  );
                let n,
                  s = a.Body().toObject().clip,
                  l = [];
                if (0 == s.video_ids.length)
                  throw (
                    ((0, N.ZI)("No video ids in clip", e),
                    a.DEBUG_LogToConsole(),
                    new Error("No video ids in clip"))
                  );
                for (let e of s.video_ids)
                  (n && n.timeline_id == e.server_timeline_id) ||
                    ((n = k(s, e)), l.push(n)),
                    n.recordings.push({
                      recording_id: e.video_manager_video_id,
                      start_offset_ms: e.start_offset_ms.toFixed(0),
                      duration_ms: e.duration_ms.toFixed(0),
                      recording_type: 4,
                      cdn_manifest_url: e.manifest_url,
                    });
                return { clip_id: s.clip_id, game_id: s.gameid, timelines: l };
              },
            });
          })(r);
        return t.data
          ? n.createElement(L, { clip: t.data, mode: s.g_.ChatClip })
          : n.createElement("div", { style: { color: "white" } }, "Loading...");
      }
      const D = function (e) {
        const { previewURL: r } = e,
          [t, i] = n.useState(!1);
        return t
          ? n.createElement(V, { ...e })
          : n.createElement(
              "div",
              {
                className: E.ClipPreview,
                onClick: () => {
                  i(!0);
                },
              },
              n.createElement("img", { className: E.Thumbnail, src: r }),
              n.createElement(
                "div",
                { className: E.PlayContainer },
                n.createElement(P.Play, { className: E.Button }),
              ),
            );
      };
      function k(e, r) {
        return {
          timeline_id: r.server_timeline_id,
          game_id: e.clip_id,
          date_recorded: e.date_recorded,
          duration_ms: e.duration_ms.toFixed(0),
          recordings: [],
        };
      }
      function K(e) {
        const r = n.useMemo(() => (0, l.pw)(e), [e]),
          t = n.useCallback(
            (r) => {
              for (const t of e.timelines)
                for (const e of t.recordings)
                  if (e.recording_id == r) return e.cdn_manifest_url;
            },
            [e],
          );
        return (
          n.useEffect(() => () => r && r.release(), [r]),
          { loader: r.loader, fnGetManifest: t }
        );
      }
      function L(e) {
        const { clip: r, mode: t } = e,
          { loader: i, fnGetManifest: a } = K(r);
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            s.Ni,
            { loader: i, fnGetManifest: a, mode: t },
            n.createElement(
              "div",
              { className: E.ClipDetails },
              n.createElement(
                "div",
                { className: E.VideoContainer },
                n.createElement(o.J, {
                  positionAbsolute: !1,
                  autoPlay: t != s.g_.ChatClip,
                }),
              ),
              n.createElement(m.h, { loader: i }),
            ),
          ),
        );
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/gamerecording.js.map

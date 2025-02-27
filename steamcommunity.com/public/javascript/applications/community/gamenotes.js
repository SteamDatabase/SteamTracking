/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1220],
  {
    33645: (e) => {
      e.exports = {
        Bold: "_3cln317VYhwhE1fSeMCG48",
        Italic: "_3TPGDj4kc0QGKvO8FJmGz8",
        Paragraph: "_3lnqGBzYap-Z2T81XBiBUU",
        Header1: "_2LYsFAwy8wdRJQTNJOUcsT",
        Header2: "_6-VR2WCBCDupCcUN5INQM",
        Header3: "_1sGnlGwCeaGUp63h4Lx-pU",
        Header4: "_3VHY5vmO07MFpoOgTB9eOi",
        Header5: "_1Vk-9-C_y-lBA5ucPl6t8X",
        CenterSpan: "zCnp-VELUMybbfxOD-ze9",
        SmallText: "WBzrd438Bd8Z3J-j_iglW",
        Underline: "GrhFWtBdrSZP611s1UqqT",
        Strike: "_3pK7sh9FYdigMXxcUVI4DY",
        Spoiler: "_3kRr4bh8twnlt_7wcEFZr3",
        Revealed: "_3g1-8c9NBcNDwW4-6x1pM6",
        SpoilerText: "_3r66KOH_Vckmfps3XUOVrY",
        DisabledMouseEvents: "_1O62-3Y03GsnA0709QyJ_O",
        BlockQuote: "_3MQ0Cuf_h-nZ81xIubg8rh",
        QuoteAuthor: "_1MzmaZcQPMRfrTHs3k0fIZ",
        PullQuote: "_2kA0eAmv8ifh0zphoq4ntM",
        Code: "_2ODaX8lO7DKLKke76c2Wya",
        CodeBlock: "_1I3OP84ayrCIMuBrCrkosi",
        List: "_3Y-LRoi5aeZ9-3ujWjXuG3",
        OrderedList: "DojPxwyYpx3hwuPIaJPCq",
        ListItem: "_1iXxYKOlzzXiVr02E7n2Fe",
        HR: "-xPK0REpludHjRG8xQfih",
        Table: "_2CAsiFd9UHbUOqzd0e7ioe",
        NoBorder: "_1rO4D9vLxJRWz9sW4-ahSY",
        TableRow: "_3FJk0y6E6I8nSYfCIqGP8",
        TableCell: "_3rLIt0O8F7iG6B2RmC3cYa",
        EqualCells: "_1CtoyG6UPAlYp7PCGLXx8L",
        ExpandSectionBlock: "_2cmZMzZlRrszDBF97Di0cD",
        ExpandSectionHeader: "uAvfe31kBh5TZrse069d1",
        EmbedArrow: "_3tVf4GSoWxEOZrxL_PQ4iA",
        ExpandSectionBody: "_33CTl_a7XYxFIng-fm4A5K",
        ExpandSection_WithTitle: "_1dfVJUq9KmDOuhyOZ7lcXv",
        LinkButton: "_3TN0uESBGJ-kUDPWWX2YWz",
        Image: "_3K0NuxYUYncdQ-cNK7udMn",
        PreservedUnsupportedTag: "_3YMzBRWJTOo7eai1uFGV7i",
        Tag: "_3SEDw4GZynd3ZmTQWlyOcS",
        CalendarEventContainer: "S-ElBHomDkV0L3K4XChxt",
        CalendarEventLink: "_106tp5gLWBvoekGEC8HXQ",
      };
    },
    27491: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Page: "_28ykIGBc90adpzjihQeOoC",
        Content: "_3gyO-3quMbybtCQl67Dmf7",
        NotesPagedSettings: "_3Sf_ShCtdfWp5P04k2cIgp",
        NotePage: "t6CDOdcwTIZM8UA8NN41V",
        PinnedView: "_1JfX5TwbiYNVMRiU6Gthga",
        Toolbar: "gdKTXjvFuMeVN2qa6o8EL",
        NoteActions: "_1fu6xumTI1nCY5wc6FG_N2",
        NoteEditorArea: "_1AL7l2CN6z-vuLfp1iCLa",
        EditorInput: "_1Ve4VFO2EEkeNZdel_Asky",
        NewNoteButton: "_3Sjbkvk647UKKVLX6J7gsW",
        CloseWindowButton: "vKXl-xWkUZL5iNvaT5mzW",
      };
    },
    5310: (e) => {
      e.exports = { narrowWidth: "500px" };
    },
    47004: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => Jt });
      var i = r(22837),
        n = r(90626),
        a = r(92757),
        s = r(23809);
      const o = {
        List: () => "/notes/list",
        AppNotes: (e, t) => `/notes/app/${e}/${null != t ? t : ""}`,
        ShortcutNotes: (e, t) => `/notes/shortcut/${e}/${null != t ? t : ""}`,
      };
      var l = r(20737),
        c = r(56545),
        u = r(80613),
        d = r(89068);
      const m = u.Message;
      class p extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.operation || d.Sg(p.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  operation: { n: 1, br: d.qM.readEnum, bw: d.gp.writeEnum },
                  machine_name: {
                    n: 2,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  client_id: {
                    n: 3,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  time_last_updated: {
                    n: 4,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  os_type: { n: 5, br: d.qM.readInt32, bw: d.gp.writeInt32 },
                  device_type: {
                    n: 6,
                    br: d.qM.readInt32,
                    bw: d.gp.writeInt32,
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
        static toObject(e, t) {
          return d.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_PendingRemoteOperation";
        }
      }
      const B = u.Message;
      class g extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.appid || d.Sg(g.M()),
            B.initialize(this, e, 0, -1, [9], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  ugcid: {
                    n: 2,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  filename: { n: 3, br: d.qM.readString, bw: d.gp.writeString },
                  timestamp: {
                    n: 4,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  file_size: {
                    n: 5,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  url: { n: 6, br: d.qM.readString, bw: d.gp.writeString },
                  steamid_creator: {
                    n: 7,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                  flags: { n: 8, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  platforms_to_sync: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: d.qM.readString,
                    bw: d.gp.writeRepeatedString,
                  },
                  file_sha: {
                    n: 10,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = d.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_UserFile";
        }
      }
      class b extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.appid || d.Sg(b.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
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
        static toObject(e, t) {
          return d.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetUploadServerInfo_Request";
        }
      }
      class y extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.server_url || d.Sg(y.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  server_url: {
                    n: 1,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
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
        static toObject(e, t) {
          return d.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetUploadServerInfo_Response";
        }
      }
      class _ extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.appid || d.Sg(_.M()),
            B.initialize(this, e, 0, -1, [6, 7, 8], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  file_size: {
                    n: 2,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  filename: { n: 3, br: d.qM.readString, bw: d.gp.writeString },
                  file_sha: { n: 4, br: d.qM.readString, bw: d.gp.writeString },
                  is_public: { n: 5, br: d.qM.readBool, bw: d.gp.writeBool },
                  platforms_to_sync: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: d.qM.readString,
                    bw: d.gp.writeRepeatedString,
                  },
                  request_headers_names: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: d.qM.readString,
                    bw: d.gp.writeRepeatedString,
                  },
                  request_headers_values: {
                    n: 8,
                    r: !0,
                    q: !0,
                    br: d.qM.readString,
                    bw: d.gp.writeRepeatedString,
                  },
                  upload_batch_id: {
                    n: 9,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
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
        static toObject(e, t) {
          return d.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginHTTPUpload_Request";
        }
      }
      class w extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.ugcid || d.Sg(w.M()),
            B.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  ugcid: {
                    n: 1,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                  timestamp: {
                    n: 2,
                    br: d.qM.readFixed32,
                    bw: d.gp.writeFixed32,
                  },
                  url_host: { n: 3, br: d.qM.readString, bw: d.gp.writeString },
                  url_path: { n: 4, br: d.qM.readString, bw: d.gp.writeString },
                  use_https: { n: 5, br: d.qM.readBool, bw: d.gp.writeBool },
                  request_headers: { n: 6, c: f, r: !0, q: !0 },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = d.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginHTTPUpload_Response";
        }
      }
      class f extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.name || d.Sg(f.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
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
        static toObject(e, t) {
          return d.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginHTTPUpload_Response_HTTPHeaders";
        }
      }
      class M extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.transfer_succeeded || d.Sg(M.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  transfer_succeeded: {
                    n: 1,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                  appid: { n: 2, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  file_sha: { n: 3, br: d.qM.readString, bw: d.gp.writeString },
                  filename: { n: 4, br: d.qM.readString, bw: d.gp.writeString },
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
        static toObject(e, t) {
          return d.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitHTTPUpload_Request";
        }
      }
      class h extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.file_committed || d.Sg(h.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  file_committed: {
                    n: 1,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
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
        static toObject(e, t) {
          return d.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitHTTPUpload_Response";
        }
      }
      class z extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.appid || d.Sg(z.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  file_size: {
                    n: 2,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  filename: { n: 3, br: d.qM.readString, bw: d.gp.writeString },
                  file_sha: { n: 4, br: d.qM.readString, bw: d.gp.writeString },
                  content_type: {
                    n: 5,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
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
        static toObject(e, t) {
          return d.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginUGCUpload_Request";
        }
      }
      class S extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.storage_system || d.Sg(S.M()),
            B.initialize(this, e, 0, -1, [7], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  storage_system: {
                    n: 1,
                    br: d.qM.readEnum,
                    bw: d.gp.writeEnum,
                  },
                  ugcid: {
                    n: 2,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                  timestamp: {
                    n: 3,
                    br: d.qM.readFixed32,
                    bw: d.gp.writeFixed32,
                  },
                  url_host: { n: 4, br: d.qM.readString, bw: d.gp.writeString },
                  url_path: { n: 5, br: d.qM.readString, bw: d.gp.writeString },
                  use_https: { n: 6, br: d.qM.readBool, bw: d.gp.writeBool },
                  request_headers: { n: 7, c: C, r: !0, q: !0 },
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
        static toObject(e, t) {
          return d.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginUGCUpload_Response";
        }
      }
      class C extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.name || d.Sg(C.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  name: { n: 1, br: d.qM.readString, bw: d.gp.writeString },
                  value: { n: 2, br: d.qM.readString, bw: d.gp.writeString },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = d.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginUGCUpload_Response_HTTPHeaders";
        }
      }
      class R extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.transfer_succeeded || d.Sg(R.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  transfer_succeeded: {
                    n: 1,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                  appid: { n: 2, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  ugcid: {
                    n: 3,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = d.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitUGCUpload_Request";
        }
      }
      class U extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.file_committed || d.Sg(U.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  file_committed: {
                    n: 1,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
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
        static toObject(e, t) {
          return d.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitUGCUpload_Response";
        }
      }
      class T extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.ugcid || d.Sg(T.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  ugcid: {
                    n: 1,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  appid: { n: 2, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = d.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetFileDetails_Request";
        }
      }
      class F extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.details || d.Sg(F.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = { proto: F, fields: { details: { n: 1, c: g } } }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = d.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetFileDetails_Response";
        }
      }
      class W extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.appid || d.Sg(W.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  extended_details: {
                    n: 2,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                  count: { n: 3, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  start_index: {
                    n: 4,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
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
        static toObject(e, t) {
          return d.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserFiles_Request";
        }
      }
      class v extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.files || d.Sg(v.M()),
            B.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  files: { n: 1, c: g, r: !0, q: !0 },
                  total_files: {
                    n: 2,
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
        static toObject(e, t) {
          return d.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserFiles_Response";
        }
      }
      class q extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.filename || d.Sg(q.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  filename: { n: 1, br: d.qM.readString, bw: d.gp.writeString },
                  appid: { n: 2, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  upload_batch_id: {
                    n: 3,
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
        static toObject(e, t) {
          return d.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_Delete_Request";
        }
      }
      class j extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new j();
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_Delete_Response";
        }
      }
      class O extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new O();
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetClientEncryptionKey_Request";
        }
      }
      class I extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.key || d.Sg(I.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  key: { n: 1, br: d.qM.readBytes, bw: d.gp.writeBytes },
                  crc: { n: 2, br: d.qM.readInt32, bw: d.gp.writeInt32 },
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
        static toObject(e, t) {
          return d.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetClientEncryptionKey_Response";
        }
      }
      class N extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.steamid || d.Sg(N.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  steamid: {
                    n: 1,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                  url: { n: 2, br: d.qM.readString, bw: d.gp.writeString },
                  success: { n: 3, br: d.qM.readBool, bw: d.gp.writeBool },
                  http_status_code: {
                    n: 4,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  expected_bytes: {
                    n: 5,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  received_bytes: {
                    n: 6,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  duration: { n: 7, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = d.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CDNReport_Notification";
        }
      }
      class E extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.host || d.Sg(E.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  host: { n: 1, br: d.qM.readString, bw: d.gp.writeString },
                  path: { n: 2, br: d.qM.readString, bw: d.gp.writeString },
                  is_upload: { n: 3, br: d.qM.readBool, bw: d.gp.writeBool },
                  success: { n: 4, br: d.qM.readBool, bw: d.gp.writeBool },
                  http_status_code: {
                    n: 5,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  bytes_expected: {
                    n: 6,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  bytes_actual: {
                    n: 7,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  duration_ms: {
                    n: 8,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  cellid: { n: 9, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  proxied: { n: 10, br: d.qM.readBool, bw: d.gp.writeBool },
                  ipv6_local: { n: 11, br: d.qM.readBool, bw: d.gp.writeBool },
                  ipv6_remote: { n: 12, br: d.qM.readBool, bw: d.gp.writeBool },
                  time_to_connect_ms: {
                    n: 13,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  time_to_send_req_ms: {
                    n: 14,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  time_to_first_byte_ms: {
                    n: 15,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  time_to_last_byte_ms: {
                    n: 16,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = d.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ExternalStorageTransferReport_Notification";
        }
      }
      class x extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.appid || d.Sg(x.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  client_id: {
                    n: 2,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  machine_name: {
                    n: 3,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  ignore_pending_operations: {
                    n: 4,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                  os_type: { n: 5, br: d.qM.readInt32, bw: d.gp.writeInt32 },
                  device_type: {
                    n: 6,
                    br: d.qM.readInt32,
                    bw: d.gp.writeInt32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = d.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppLaunchIntent_Request";
        }
      }
      class P extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.pending_remote_operations || d.Sg(P.M()),
            B.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  pending_remote_operations: { n: 1, c: p, r: !0, q: !0 },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = d.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppLaunchIntent_Response";
        }
      }
      class A extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.appid || d.Sg(A.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  client_id: {
                    n: 2,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  uploads_completed: {
                    n: 3,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                  uploads_required: {
                    n: 4,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = d.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppExitSyncDone_Notification";
        }
      }
      class G extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.appid || d.Sg(G.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = d.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientGetAppQuotaUsage_Request";
        }
      }
      class k extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.existing_files || d.Sg(k.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  existing_files: {
                    n: 1,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  existing_bytes: {
                    n: 2,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  max_num_files: {
                    n: 3,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  max_num_bytes: {
                    n: 4,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = d.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientGetAppQuotaUsage_Response";
        }
      }
      class D extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.file_name || d.Sg(D.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  file_name: {
                    n: 1,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  sha_file: { n: 2, br: d.qM.readBytes, bw: d.gp.writeBytes },
                  time_stamp: {
                    n: 3,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  raw_file_size: {
                    n: 4,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  persist_state: {
                    n: 5,
                    br: d.qM.readEnum,
                    bw: d.gp.writeEnum,
                  },
                  platforms_to_sync: {
                    n: 6,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  path_prefix_index: {
                    n: 7,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  machine_name_index: {
                    n: 8,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = d.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppFileInfo";
        }
      }
      class L extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.appid || d.Sg(L.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  synced_change_number: {
                    n: 2,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = d.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetAppFileChangelist_Request";
        }
      }
      class $ extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.current_change_number || d.Sg($.M()),
            B.initialize(this, e, 0, -1, [2, 4, 5], null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  current_change_number: {
                    n: 1,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  files: { n: 2, c: D, r: !0, q: !0 },
                  is_only_delta: {
                    n: 3,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                  path_prefixes: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: d.qM.readString,
                    bw: d.gp.writeRepeatedString,
                  },
                  machine_names: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: d.qM.readString,
                    bw: d.gp.writeRepeatedString,
                  },
                  app_buildid_hwm: {
                    n: 6,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = d.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT($.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetAppFileChangelist_Response";
        }
      }
      class H extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.url_host || d.Sg(H.M()),
            B.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  url_host: { n: 1, br: d.qM.readString, bw: d.gp.writeString },
                  url_path: { n: 2, br: d.qM.readString, bw: d.gp.writeString },
                  use_https: { n: 3, br: d.qM.readBool, bw: d.gp.writeBool },
                  http_method: {
                    n: 4,
                    br: d.qM.readInt32,
                    bw: d.gp.writeInt32,
                  },
                  request_headers: { n: 5, c: K, r: !0, q: !0 },
                  block_offset: {
                    n: 6,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  block_length: {
                    n: 7,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  explicit_body_data: {
                    n: 8,
                    br: d.qM.readBytes,
                    bw: d.gp.writeBytes,
                  },
                  may_parallelize: {
                    n: 9,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = d.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ClientCloudFileUploadBlockDetails";
        }
      }
      class K extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.name || d.Sg(K.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  name: { n: 1, br: d.qM.readString, bw: d.gp.writeString },
                  value: { n: 2, br: d.qM.readString, bw: d.gp.writeString },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = d.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ClientCloudFileUploadBlockDetails_HTTPHeaders";
        }
      }
      class V extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.appid || d.Sg(V.M()),
            B.initialize(this, e, 0, -1, [3, 4], null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  machine_name: {
                    n: 2,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  files_to_upload: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: d.qM.readString,
                    bw: d.gp.writeRepeatedString,
                  },
                  files_to_delete: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: d.qM.readString,
                    bw: d.gp.writeRepeatedString,
                  },
                  client_id: {
                    n: 5,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  app_build_id: {
                    n: 6,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = d.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginAppUploadBatch_Request";
        }
      }
      class Q extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.batch_id || d.Sg(Q.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  batch_id: {
                    n: 1,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  app_change_number: {
                    n: 4,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = d.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginAppUploadBatch_Response";
        }
      }
      class Y extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.appid || d.Sg(Y.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  batch_id: {
                    n: 2,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  batch_eresult: {
                    n: 3,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = d.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CompleteAppUploadBatch_Notification";
        }
      }
      class X extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.appid || d.Sg(X.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  batch_id: {
                    n: 2,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  batch_eresult: {
                    n: 3,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = d.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CompleteAppUploadBatch_Request";
        }
      }
      class Z extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Z();
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CompleteAppUploadBatch_Response";
        }
      }
      class J extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.appid || d.Sg(J.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  app_change_number: {
                    n: 2,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = d.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppCloudStateChange_Notification";
        }
      }
      class ee extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.appid || d.Sg(ee.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  file_size: {
                    n: 2,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  raw_file_size: {
                    n: 3,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  file_sha: { n: 4, br: d.qM.readBytes, bw: d.gp.writeBytes },
                  time_stamp: {
                    n: 5,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  filename: { n: 6, br: d.qM.readString, bw: d.gp.writeString },
                  platforms_to_sync: {
                    n: 7,
                    d: 4294967295,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  cell_id: { n: 9, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  can_encrypt: { n: 10, br: d.qM.readBool, bw: d.gp.writeBool },
                  is_shared_file: {
                    n: 11,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                  deprecated_realm: {
                    n: 12,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  upload_batch_id: {
                    n: 13,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = d.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientBeginFileUpload_Request";
        }
      }
      class te extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.encrypt_file || d.Sg(te.M()),
            B.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  encrypt_file: { n: 1, br: d.qM.readBool, bw: d.gp.writeBool },
                  block_requests: { n: 2, c: H, r: !0, q: !0 },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = d.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientBeginFileUpload_Response";
        }
      }
      class re extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.transfer_succeeded || d.Sg(re.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  transfer_succeeded: {
                    n: 1,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                  appid: { n: 2, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  file_sha: { n: 3, br: d.qM.readBytes, bw: d.gp.writeBytes },
                  filename: { n: 4, br: d.qM.readString, bw: d.gp.writeString },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = d.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientCommitFileUpload_Request";
        }
      }
      class ie extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.file_committed || d.Sg(ie.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  file_committed: {
                    n: 1,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = d.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientCommitFileUpload_Response";
        }
      }
      class ne extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.appid || d.Sg(ne.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  filename: { n: 2, br: d.qM.readString, bw: d.gp.writeString },
                  realm: { n: 3, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  force_proxy: { n: 4, br: d.qM.readBool, bw: d.gp.writeBool },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = d.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientFileDownload_Request";
        }
      }
      class ae extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.appid || d.Sg(ae.M()),
            B.initialize(this, e, 0, -1, [10], null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  file_size: {
                    n: 2,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  raw_file_size: {
                    n: 3,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  sha_file: { n: 4, br: d.qM.readBytes, bw: d.gp.writeBytes },
                  time_stamp: {
                    n: 5,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  is_explicit_delete: {
                    n: 6,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                  url_host: { n: 7, br: d.qM.readString, bw: d.gp.writeString },
                  url_path: { n: 8, br: d.qM.readString, bw: d.gp.writeString },
                  use_https: { n: 9, br: d.qM.readBool, bw: d.gp.writeBool },
                  request_headers: { n: 10, c: se, r: !0, q: !0 },
                  encrypted: { n: 11, br: d.qM.readBool, bw: d.gp.writeBool },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = d.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientFileDownload_Response";
        }
      }
      class se extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.name || d.Sg(se.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  name: { n: 1, br: d.qM.readString, bw: d.gp.writeString },
                  value: { n: 2, br: d.qM.readString, bw: d.gp.writeString },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = d.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientFileDownload_Response_HTTPHeaders";
        }
      }
      class oe extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.appid || d.Sg(oe.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  filename: { n: 2, br: d.qM.readString, bw: d.gp.writeString },
                  is_explicit_delete: {
                    n: 3,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                  upload_batch_id: {
                    n: 4,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = d.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientDeleteFile_Request";
        }
      }
      class le extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new le();
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientDeleteFile_Response";
        }
      }
      class ce extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.appid || d.Sg(ce.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  chose_local_files: {
                    n: 2,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = d.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientConflictResolution_Notification";
        }
      }
      class ue extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ue();
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserApps_Request";
        }
      }
      class de extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.apps || d.Sg(de.M()),
            B.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: { apps: { n: 1, c: me, r: !0, q: !0 } },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = d.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserApps_Response";
        }
      }
      class me extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.appid || d.Sg(me.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  totalcount: { n: 2, br: d.qM.readInt32, bw: d.gp.writeInt32 },
                  totalsize: {
                    n: 3,
                    br: d.qM.readInt64String,
                    bw: d.gp.writeInt64String,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = d.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(me.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserApps_Response_Apps";
        }
      }
      class pe extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.appid || d.Sg(pe.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  client_id: {
                    n: 2,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  machine_name: {
                    n: 3,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  cloud_sync_completed: {
                    n: 4,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = d.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(pe.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionSuspend_Request";
        }
      }
      class Be extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Be();
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionSuspend_Response";
        }
      }
      class ge extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.appid || d.Sg(ge.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  appid: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  client_id: {
                    n: 2,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = d.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(ge.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionResume_Request";
        }
      }
      class be extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new be();
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionResume_Response";
        }
      }
      class ye extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.client_id || d.Sg(ye.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  client_id: {
                    n: 1,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = d.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(ye.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientLogUploadCheck_Notification";
        }
      }
      class _e extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.request_id || d.Sg(_e.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  request_id: {
                    n: 1,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = d.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(_e.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientLogUploadRequest_Notification";
        }
      }
      class we extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.client_id || d.Sg(we.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  client_id: {
                    n: 1,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                  request_id: {
                    n: 2,
                    br: d.qM.readUint64String,
                    bw: d.gp.writeUint64String,
                  },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = d.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(we.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientLogUploadComplete_Notification";
        }
      }
      var fe, Me;
      !(function (e) {
        (e.ClientLogUploadCheck = function (e, t) {
          return e.SendNotification(
            "Cloud.ClientLogUploadCheck#1",
            (0, c.I8)(ye, t),
            { ePrivilege: 1 },
          );
        }),
          (e.ClientLogUploadComplete = function (e, t) {
            return e.SendNotification(
              "Cloud.ClientLogUploadComplete#1",
              (0, c.I8)(we, t),
              { ePrivilege: 1 },
            );
          }),
          (e.GetUploadServerInfo = function (e, t) {
            return e.SendMsg(
              "Cloud.GetUploadServerInfo#1",
              (0, c.I8)(b, t),
              y,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.BeginHTTPUpload = function (e, t) {
            return e.SendMsg("Cloud.BeginHTTPUpload#1", (0, c.I8)(_, t), w, {
              ePrivilege: 1,
            });
          }),
          (e.CommitHTTPUpload = function (e, t) {
            return e.SendMsg("Cloud.CommitHTTPUpload#1", (0, c.I8)(M, t), h, {
              ePrivilege: 1,
            });
          }),
          (e.BeginUGCUpload = function (e, t) {
            return e.SendMsg("Cloud.BeginUGCUpload#1", (0, c.I8)(z, t), S, {
              ePrivilege: 1,
            });
          }),
          (e.CommitUGCUpload = function (e, t) {
            return e.SendMsg("Cloud.CommitUGCUpload#1", (0, c.I8)(R, t), U, {
              ePrivilege: 1,
            });
          }),
          (e.GetFileDetails = function (e, t) {
            return e.SendMsg("Cloud.GetFileDetails#1", (0, c.I8)(T, t), F, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.EnumerateUserFiles = function (e, t) {
            return e.SendMsg("Cloud.EnumerateUserFiles#1", (0, c.I8)(W, t), v, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.Delete = function (e, t) {
            return e.SendMsg("Cloud.Delete#1", (0, c.I8)(q, t), j, {
              ePrivilege: 1,
            });
          }),
          (e.GetClientEncryptionKey = function (e, t) {
            return e.SendMsg(
              "Cloud.GetClientEncryptionKey#1",
              (0, c.I8)(O, t),
              I,
              { ePrivilege: 1 },
            );
          }),
          (e.CDNReport = function (e, t) {
            return e.SendNotification("Cloud.CDNReport#1", (0, c.I8)(N, t), {
              ePrivilege: 1,
            });
          }),
          (e.ExternalStorageTransferReport = function (e, t) {
            return e.SendNotification(
              "Cloud.ExternalStorageTransferReport#1",
              (0, c.I8)(E, t),
              { ePrivilege: 1 },
            );
          }),
          (e.BeginAppUploadBatch = function (e, t) {
            return e.SendMsg(
              "Cloud.BeginAppUploadBatch#1",
              (0, c.I8)(V, t),
              Q,
              { ePrivilege: 1 },
            );
          }),
          (e.CompleteAppUploadBatch = function (e, t) {
            return e.SendNotification(
              "Cloud.CompleteAppUploadBatch#1",
              (0, c.I8)(Y, t),
              { ePrivilege: 1 },
            );
          }),
          (e.CompleteAppUploadBatchBlocking = function (e, t) {
            return e.SendMsg(
              "Cloud.CompleteAppUploadBatchBlocking#1",
              (0, c.I8)(X, t),
              Z,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientBeginFileUpload = function (e, t) {
            return e.SendMsg(
              "Cloud.ClientBeginFileUpload#1",
              (0, c.I8)(ee, t),
              te,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientCommitFileUpload = function (e, t) {
            return e.SendMsg(
              "Cloud.ClientCommitFileUpload#1",
              (0, c.I8)(re, t),
              ie,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientFileDownload = function (e, t) {
            return e.SendMsg(
              "Cloud.ClientFileDownload#1",
              (0, c.I8)(ne, t),
              ae,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientDeleteFile = function (e, t) {
            return e.SendMsg("Cloud.ClientDeleteFile#1", (0, c.I8)(oe, t), le, {
              ePrivilege: 1,
            });
          }),
          (e.ClientConflictResolution = function (e, t) {
            return e.SendNotification(
              "Cloud.ClientConflictResolution#1",
              (0, c.I8)(ce, t),
              { ePrivilege: 1 },
            );
          }),
          (e.EnumerateUserApps = function (e, t) {
            return e.SendMsg(
              "Cloud.EnumerateUserApps#1",
              (0, c.I8)(ue, t),
              de,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAppFileChangelist = function (e, t) {
            return e.SendMsg(
              "Cloud.GetAppFileChangelist#1",
              (0, c.I8)(L, t),
              $,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SuspendAppSession = function (e, t) {
            return e.SendMsg(
              "Cloud.SuspendAppSession#1",
              (0, c.I8)(pe, t),
              Be,
              { ePrivilege: 1 },
            );
          }),
          (e.ResumeAppSession = function (e, t) {
            return e.SendMsg("Cloud.ResumeAppSession#1", (0, c.I8)(ge, t), be, {
              ePrivilege: 1,
            });
          }),
          (e.SignalAppLaunchIntent = function (e, t) {
            return e.SendMsg(
              "Cloud.SignalAppLaunchIntent#1",
              (0, c.I8)(x, t),
              P,
              { ePrivilege: 1 },
            );
          }),
          (e.SignalAppExitSyncDone = function (e, t) {
            return e.SendNotification(
              "Cloud.SignalAppExitSyncDone#1",
              (0, c.I8)(A, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetAppQuotaUsage = function (e, t) {
            return e.SendMsg(
              "Cloud.ClientGetAppQuotaUsage#1",
              (0, c.I8)(G, t),
              k,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(fe || (fe = {})),
        (function (e) {
          (e.NotifyAppStateChangeHandler = {
            name: "CloudClient.NotifyAppStateChange#1",
            request: J,
          }),
            (e.ClientLogUploadRequestHandler = {
              name: "CloudClient.ClientLogUploadRequest#1",
              request: _e,
            });
        })(Me || (Me = {}));
      var he = r(62490);
      function ze(e) {
        return e.trim();
      }
      function Se(e) {
        return e.appid ? { appid: e.appid } : { shortcut: e.shortcut_name };
      }
      var Ce = r(60778);
      const Re = new Ce.wd("GameNotesCloudStore").Debug;
      function Ue(e) {
        return e.replace(/[!-/:-@ [\\\]^`]/g, "_");
      }
      class Te {
        constructor() {
          (this.m_mapNotesByGame = new Map()),
            (this.m_mapNotesByShortcut = new Map());
        }
        FilenameForNotes(e) {
          return "appid" in e
            ? `notes_${Number(e.appid)}`
            : `notes_shortcut_${Ue(e.shortcut)}`;
        }
        DirectoryForNoteImages(e) {
          return "appid" in e
            ? `notes_${Number(e.appid)}_images/`
            : `notes_shortcut_${Ue(e.shortcut)}_images/`;
        }
        ParseNotesFileName(e) {
          const t = e.match(/^notes_shortcut_([^/]+)$/);
          if (t) return { shortcut: t[1] };
          const r = e.match(/^notes_(\d+)$/);
          return r && parseInt(r[1]) < 2147483647
            ? { appid: parseInt(r[1]) }
            : void 0;
        }
        MapAndKeyNoteType(e) {
          return "appid" in e
            ? [this.m_mapNotesByGame, e.appid]
            : [this.m_mapNotesByShortcut, e.shortcut];
        }
        async GetGameNotesList(e, t) {
          return (await this.InternalLoadNotes(e)).notes.slice();
        }
        NewNote(e, t) {
          let r = {};
          return (
            "appid" in e ? (r.appid = e.appid) : (r.shortcut_name = e.shortcut),
            {
              id: Date.now().toString(36),
              ...r,
              ordinal: 0,
              time_created: Math.floor(Date.now() / 1e3),
              time_modified: Math.floor(Date.now() / 1e3),
              title: t,
              content: "",
              not_persisted: !0,
            }
          );
        }
        async SaveGameNote(e, t, r) {
          const i = Se(e),
            n = await this.InternalLoadNotes(i),
            a = n.notes.findIndex((t) => t.id === e.id);
          return (
            -1 != a
              ? (n.notes[a] = {
                  ...n.notes[a],
                  ...e,
                  title: t,
                  content: r,
                  time_modified: Math.floor(Date.now() / 1e3),
                })
              : n.notes.push({
                  ...e,
                  title: t,
                  content: r,
                  time_modified: Math.floor(Date.now() / 1e3),
                }),
            (n.dirty = !0),
            await this.InternalSaveNotes(i),
            e.id
          );
        }
        async InternalSaveNotes(e) {
          const [t, r] = this.MapAndKeyNoteType(e),
            i = t.get(r);
          if (i.dirty) {
            const t = { notes: i.notes },
              r = JSON.stringify(t, (e, t) =>
                "not_persisted" === e ? void 0 : t,
              );
            Re(t, ` => ${r}`);
            const n = await this.WriteNotesFile(this.FilenameForNotes(e), r);
            if (1 != n) throw `Error saving notes: ${n}`;
          }
          return 1;
        }
        async DeleteGameNote(e, t) {
          const r = await this.InternalLoadNotes(e);
          return (
            he.Wp(r.notes, (e) => e.id === t) && (r.dirty = !0),
            await this.InternalSaveNotes(e),
            t
          );
        }
      }
      var Fe = r(27650);
      const We = new Ce.wd("GameNotesCloudStore").Debug;
      class ve extends Te {
        constructor(e) {
          super(), (this.m_mapCachedImageFiles = new Map()), (this.m_props = e);
        }
        async GetGamesWithNotes() {
          let e = [];
          for (const [t, r] of await this.GetFiles()) {
            const i = this.ParseNotesFileName(t);
            if (!i) continue;
            let n;
            (n =
              "appid" in i
                ? { appid: i.appid }
                : { shortcut_name: i.shortcut }),
              e.push({ ...n, last_modified: r.rtLastModified });
          }
          return e;
        }
        async UploadImage(e, t) {
          const r = `${e}${await l.C(await t.arrayBuffer(), "SHA-1")}.${(0, Fe.PW)(t)}`;
          if (!(await this.m_props.uploadFile(r, t)))
            throw "There was an error uploading the file";
          return this.m_mapCachedImageFiles.set(r, t), r;
        }
        async ResolveImageURL(e) {
          let t = this.m_mapCachedImageFiles.get(e);
          if (!t) {
            const r = await this.GetCloudFileInfo(e);
            if (!r) return;
            (t = await this.InternalLoadImageFromCloud(r)),
              this.m_mapCachedImageFiles.set(e, t);
          }
          return URL.createObjectURL(t);
        }
        async GetFiles() {
          return (
            this.m_mapFileInfo ||
              (this.m_promiseLoadingNotes ||
                (this.m_promiseLoadingNotes = this.InternalLoadNotesList()),
              await this.m_promiseLoadingNotes),
            this.m_mapFileInfo
          );
        }
        async InternalLoadNotes(e) {
          const [t, r] = this.MapAndKeyNoteType(e);
          if (!t.has(r)) {
            const i = this.FilenameForNotes(e),
              n = await this.GetCloudFileInfo(i);
            let a;
            (a = n ? await this.InternalLoadFileFromCloud(n) : { notes: [] }),
              t.set(r, { dirty: !1, notes: a.notes });
          }
          return t.get(r);
        }
        async WriteNotesFile(e, t) {
          return this.m_props.uploadFile(e, t), 1;
        }
        async GetCloudFileInfo(e) {
          return (await this.GetFiles()).get(e);
        }
        async InternalLoadNotesList() {
          let e = 0,
            t = !0;
          const r = new Map();
          for (; t; ) {
            We(`EnumerateUserFiles for ${i.oe}, starting at ${e}`);
            const n = c.w.Init(W);
            n.Body().set_appid(i.oe),
              n.Body().set_extended_details(!0),
              n.Body().set_start_index(e);
            const a = await fe.EnumerateUserFiles(
              this.m_props.steamInterface.GetServiceTransport(),
              n,
            );
            if (!a.BSuccess())
              throw `Error loading cloud files: ${a.GetErrorMessage()}`;
            a.Body()
              .files()
              .map((e) => ({
                strFilename: e.filename(),
                strURL: e.url(),
                rtLastModified: parseInt(e.timestamp()),
                nBytes: e.file_size(),
                strSHA: e.file_sha(),
              }))
              .forEach((e) => r.set(e.strFilename, e));
            const s = a.Body().files().length;
            (e += s),
              (t = e < a.Body().total_files()),
              We(
                `EnumerateUserFiles complete, loaded ${e - s}-${e} files of ${a.Body().total_files()} total files ${t ? ", running another fetch" : ""}`,
              );
          }
          this.m_mapFileInfo = r;
        }
        async InternalLoadFileFromCloud(e) {
          const t = await fetch(e.strURL),
            r = await t.json();
          if (r) return r;
          throw `Cloud file not found for ${e.strFilename}`;
        }
        async InternalLoadImageFromCloud(e) {
          const t = await fetch(e.strURL),
            r = await t.blob();
          return new File([r], e.strFilename, { type: r.type });
        }
      }
      var qe = r(88942),
        je = r(29385),
        Oe = r(61739);
      const Ie = n.createContext({ mode: "page", store: null });
      function Ne(e) {
        const {
            mode: t,
            store: r,
            closePopup: i,
            bPinnedView: a,
            onClickURL: s,
            bSpellcheckEnabled: o = !0,
            setSpellcheckEnabled: l,
            children: c,
          } = e,
          u = n.useMemo(
            () => ({
              mode: t,
              store: r,
              closePopup: i,
              bPinnedView: a,
              onClickURL: s,
              bSpellcheckEnabled: o,
              setSpellcheckEnabled: l,
            }),
            [t, r, i, a, s, o, l],
          );
        return n.createElement(Ie.Provider, { value: u }, c);
      }
      function Ee() {
        return n.useContext(Ie).closePopup;
      }
      function xe() {
        return n.useContext(Ie).store;
      }
      var Pe = r(61859);
      function Ae(e) {
        return "appid" in e
          ? ["GameNotes", "NotesByAppID", e.appid]
          : ["GameNotes", "NotesForShortcut", ze(e.shortcut)];
      }
      function Ge(e, t) {
        return {
          queryKey: Ae(t),
          queryFn: async () => (await e.GetGameNotesList(t, !0)) || [],
          enabled: !!t,
        };
      }
      function ke(e, t) {
        const r = (0, je.jE)(),
          i = xe(),
          n = e.id;
        return (0, Oe.n)({
          mutationFn: async () =>
            e.not_persisted ? n : await i.DeleteGameNote(Se(e), n),
          onSuccess: () => {
            De(r, Se(e), (e) => e.filter((e) => e.id != n)), t && t();
          },
        });
      }
      function De(e, t, r) {
        e.setQueryData(Ae(t), (e) => e && r(e));
      }
      function Le(e, t) {
        return n.useMemo(
          () =>
            t
              ? (function (e) {
                  return { shortcut: ze(e) };
                })(t)
              : (function (e) {
                  return { appid: e };
                })(e),
          [e, t],
        );
      }
      var $e = r(90286),
        He = r(26555),
        Ke = r(55608),
        Ve = r(79497);
      const Qe = Ke.DQ.nodes.image,
        Ye = {
          nodes: {
            ...Ke.DQ.nodes,
            cloudimage: {
              ...Qe,
              parseDOM: [],
              bbCode: { ...Qe.bbCode, tag: "cloudimg" },
            },
          },
          marks: { ...Ke.DQ.marks },
        },
        Xe = new Ve.W(Ye);
      var Ze = r(33645),
        Je = r.n(Ze),
        et = r(69956),
        tt = r(28106),
        rt = r(64238),
        it = r.n(rt),
        nt = r(71696),
        at = r(1805),
        st = r(78327),
        ot = r(86807),
        lt = r(4869),
        ct = r(73309),
        ut = r(79570),
        dt = r(30175),
        mt = r(52038),
        pt = r(76011);
      function Bt(e) {
        const {
            schema: t,
            view: r,
            refUpdateToolbar: i,
            className: a,
            bSpellcheckEnabled: s,
            setSpellcheckEnabled: o,
          } = e,
          [l, c] = (0, pt.SP)("FormattingToolbar_Expanded", !1);
        return n.createElement(
          dt.bI,
          { refUpdateToolbar: i, view: r },
          n.createElement(
            "div",
            { className: (0, mt.A)(ct.Toolbar, a) },
            n.createElement(
              dt.Ez,
              null,
              n.createElement(ut.MV, null),
              n.createElement(dt.XQ, null),
              n.createElement(ut.Km, { schema: t }),
              n.createElement(dt.hK, null),
              n.createElement(
                dt.ff,
                {
                  onClick: () => c(!l),
                  tooltip: "#FormattingToolbar_ExpandOptions",
                },
                n.createElement(lt.cLJ, { direction: l ? "up" : "down" }),
              ),
            ),
            n.createElement(
              ot.R,
              { visible: l },
              n.createElement(
                dt.Ez,
                null,
                n.createElement(ut.Hz, { schema: t }),
                n.createElement(ut.WJ, { schema: t, levels: 5 }),
                n.createElement(
                  dt.u3,
                  {
                    nodeType: t.nodes.code_block,
                    tooltip: (0, Pe.we)("#FormattingToolbar_CodeBlock"),
                  },
                  n.createElement(lt.kNE, null),
                ),
                n.createElement(dt.XQ, null),
                n.createElement(ut.C$, { schema: t }),
                n.createElement(dt.XQ, null),
                n.createElement(ut.z9, { schema: t }),
                n.createElement(dt.hK, null),
                o &&
                  n.createElement(ut.Nt, {
                    bSpellcheckEnabled: s,
                    setSpellcheckEnabled: o,
                  }),
              ),
            ),
          ),
        );
      }
      var gt = r(27491),
        bt = r(8527),
        yt = r(5310);
      function _t(e) {
        const { deleteNote: t, hidden: r, pmState: i } = e,
          [a, s] = n.useState(),
          o = n.useRef(),
          l =
            null === (c = n.useContext(Ie).bSpellcheckEnabled) ||
            void 0 === c ||
            c;
        var c;
        const u = n.useContext(Ie).setSpellcheckEnabled,
          d = (0, st.Qn)(),
          m = {
            onSecondaryButton: () => t(),
            onSecondaryActionDescription: (0, Pe.we)(
              "#UserGameNotes_DeleteNote",
            ),
            onDragOver: (e) => e.stopPropagation(),
          };
        return (
          n.useEffect(() => {
            a &&
              !r &&
              ((!bt.TS.IN_CLIENT &&
                window.matchMedia(`(max-width: ${yt.narrowWidth})`).matches) ||
                a.focus());
          }, [a, r]),
          n.createElement(
            n.Fragment,
            null,
            !d &&
              n.createElement(Bt, {
                schema: Xe.pm_schema,
                view: a,
                refUpdateToolbar: o,
                className: gt.Toolbar,
                bSpellcheckEnabled: l,
                setSpellcheckEnabled: u,
              }),
            n.createElement(
              at.l,
              {
                pmState: i,
                className: gt.EditorInput,
                refOnUpdate: o,
                refView: s,
                bSpellcheckEnabled: l,
                panelProps: m,
              },
              n.createElement(wt, { schema: Xe.pm_schema }),
            ),
          )
        );
      }
      const wt = n.memo(function (e) {
        const { schema: t } = e,
          r = n.useContext(Ie).onClickURL,
          i = n.useMemo(
            () => [
              {
                type: t.nodes.cloudimage,
                component: ft,
                readProps: (e) => ({ src: e.attrs.src }),
              },
            ],
            [t.nodes.cloudimage],
          );
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(nt.pw, { nodeType: t.nodes.image }),
          n.createElement(tt.W, {
            linkMarkType: t.marks.link,
            schema: t,
            onClickURL: r,
          }),
          n.createElement(et.U, { specs: i }),
        );
      });
      function ft(e) {
        const { src: t, selected: r } = e,
          [i, a] = n.useState(),
          s = xe();
        return (
          n.useEffect(() => {
            let e = !1;
            return (
              s.ResolveImageURL(t).then((t) => {
                e ? URL.revokeObjectURL(t) : a(t);
              }),
              () => {
                (e = !0), a(void 0);
              }
            );
          }, [s, t]),
          i
            ? n.createElement("img", {
                className: it()(Je().Image, r && "ProseMirror-selectednode"),
                src: i,
              })
            : null
        );
      }
      var Mt = r(61788),
        ht = r(33737),
        zt = r(9154),
        St = r(32754),
        Ct = r(73745);
      const Rt = 15;
      function Ut(e) {
        const { note: t, hidden: r = !1 } = e,
          [i, a] = n.useState(void 0),
          s = n.useRef(!1),
          o = (0, st.Qn)(),
          { mutate: l } = (function (e, t) {
            const r = (0, je.jE)(),
              i = xe(),
              n = Se(e);
            return (0, Oe.n)({
              scope: {
                id: `${"appid" in e ? e.appid : e.shortcut_name}_${e.id}`,
              },
              mutationFn: (t) => i.SaveGameNote(e, t.title, t.bbcode),
              onMutate(t) {
                const i = { ...e, title: t.title, content: t.bbcode };
                return De(r, n, (e) => e.map((e) => (e.id == i.id ? i : e))), i;
              },
              onSuccess(e, t, i) {
                De(r, n, (t) =>
                  t.map((t) =>
                    t.id === i.id ? { ...t, id: e, not_persisted: !1 } : t,
                  ),
                );
              },
              onError(e) {
                t(e.message || e.name);
              },
            });
          })(t, a),
          [c, u] = n.useState();
        n.useEffect(() => {
          if (!s.current) {
            const e = new $e.n(Xe, t.content, (e, t) =>
              l({ title: qt(t), bbcode: e }),
            );
            !(function (e, t) {
              e.UpdateState((e) => {
                const r = [];
                if (
                  (e.doc.descendants((e, i) => {
                    var n;
                    e.type === t.nodes.image &&
                      (null === (n = e.attrs.src) || void 0 === n
                        ? void 0
                        : n.match(/^\/gamenotes\//)) &&
                      r.push({ node: e, pos: i });
                  }),
                  r.length)
                )
                  return (
                    r.reverse().forEach(({ node: r, pos: i }) => {
                      const n = r.attrs.src.replace(/^\/gamenotes\//, ""),
                        a = t.nodes.cloudimage.create({ src: n });
                      e = e.replaceWith(i, i + r.nodeSize, a);
                    }),
                    e.setMeta("addToHistory", !1),
                    e
                  );
              });
            })(e, Xe.pm_schema),
              u(e);
          }
        }, [l, t.content]);
        const { bDirty: d } = (0, He.i)(c, { msAutosaveTimeout: 1e3 * Rt });
        n.useEffect(() => {
          d &&
            !s.current &&
            ((s.current = !0),
            Mt.y.ReportTrackedAction("/GameNotes/NoteModified"));
        }, [d]),
          n.useEffect(() => {
            r && c && c.CommitChanges();
          }, [r, c]);
        const m = (function (e, t) {
            const r = xe();
            return n.useCallback(
              async (i) => {
                const n = await r.UploadImage(`notes_${e}_images/`, i);
                return t.nodes.cloudimage.create({ src: n });
              },
              [r, e, t],
            );
          })(t.appid, Xe.pm_schema),
          p = Ee(),
          B = ke(t, p);
        return n.createElement(
          nt.Xv,
          { ProcessFileUpload: m, bAllowImageHotLinking: !0 },
          n.createElement(
            "div",
            { className: gt.NoteEditorArea },
            n.createElement(Tt, { error: i, dismissError: () => a(void 0) }),
            n.createElement(_t, {
              deleteNote: B.mutate,
              hidden: r,
              pmState: c,
            }),
            !o && n.createElement(Ft, { note: t, bDirty: d }),
          ),
        );
      }
      function Tt(e) {
        const { error: t, dismissError: r } = e;
        return t
          ? n.createElement(
              zt.EN,
              { active: !0 },
              n.createElement(zt.o0, {
                bAlertDialog: !0,
                strTitle: (0, Pe.we)("#Error_Generic"),
                strDescription: (0, Pe.we)(
                  "#UserGameNotes_ErrorSavingNotes",
                  t,
                ),
                closeModal: r,
              }),
            )
          : null;
      }
      function Ft(e) {
        const { note: t, bDirty: r } = e,
          [i, a, s] = (0, Ct.uD)(!1),
          o = "single" == n.useContext(Ie).mode,
          l = Ee(),
          { mutate: c, isPending: u } = ke(t, l),
          d = n.useCallback(() => {
            !r && t.not_persisted ? c() : a();
          }, [r, t, c, a]);
        return n.createElement(
          "div",
          { className: gt.NoteActions },
          i &&
            n.createElement(vt, {
              note: t,
              closeModal: s,
              deleteNote: c,
              deletePending: u,
            }),
          n.createElement(
            St.he,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            n.createElement(
              ht.$n,
              { onClick: d },
              n.createElement(lt.lMJ, null),
            ),
          ),
          o && n.createElement(Wt, { bDirty: r }),
        );
      }
      function Wt(e) {
        const { bDirty: t } = e,
          r = Ee();
        return t
          ? n.createElement(
              ht.jn,
              { onClick: () => r(), className: gt.CloseWindowButton },
              (0, Pe.we)("#Button_SaveAndClose"),
            )
          : n.createElement(
              ht.$n,
              { onClick: () => r(), className: gt.CloseWindowButton },
              (0, Pe.we)("#Button_Close"),
            );
      }
      function vt(e) {
        const { note: t, closeModal: r, deleteNote: i, deletePending: a } = e;
        return n.createElement(
          zt.EN,
          { active: !0 },
          n.createElement(zt.o0, {
            strTitle: (0, Pe.we)("#UserGameNotes_DeleteNote"),
            strDescription: (0, Pe.we)("#UserGameNotes_PromptDelete"),
            onOK: () => i(),
            bOKDisabled: a,
            strOKButtonText: (0, Pe.we)("#Button_Delete"),
            closeModal: r,
          }),
        );
      }
      function qt(e) {
        let t = "";
        for (let r = 0; r < e.content.childCount; r++) {
          const i = e.content.child(r);
          if (i.isText) t += i.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = qt(i)), t.length > 4)) return t;
          }
        }
        return t.trim();
      }
      var jt = r(58632),
        Ot = r.n(jt),
        It = r(37403),
        Nt = r(30470);
      let Et;
      const xt = 864e5;
      function Pt(e) {
        return `appinfo_${e}_${Nt.TS.LANGUAGE}`;
      }
      function At(e) {
        return Boolean(e && Date.now() - e.timeCached < xt);
      }
      function Gt(e) {
        const t = (0, s.KV)(),
          r = (0, s.rX)();
        return (0, qe.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                Et ||
                  (Et = new (Ot())(
                    async (r) => {
                      const n = new Map();
                      (await Promise.all(r.map((e) => t.GetObject(Pt(e)))))
                        .filter(At)
                        .forEach(({ value: e }) => n.set(e.appid, e));
                      const a = r.slice().filter((e) => !n.has(e));
                      if (a.length) {
                        const r = c.w.Init(It._z);
                        r.Body().set_language((0, i.sf)(Nt.TS.LANGUAGE)),
                          r.Body().set_appids(a);
                        const s = await It.BE.GetApps(e, r);
                        if (1 != s.GetEResult()) throw s.GetErrorMessage();
                        s.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(Pt(e.appid), {
                              timeCached: Date.now(),
                              value: e,
                            }),
                              n.set(e.appid, e);
                          });
                      }
                      return r.map((e) => n.get(e));
                    },
                    { cache: !1 },
                  )),
                Et
              );
            })(t, r).load(e),
          staleTime: xt,
          enabled: !!e,
        }).data;
      }
      function kt(e) {
        const { bStandalonePage: t } = e,
          r = (0, a.W5)(),
          i = Le(
            "appid" in r.params && Number(r.params.appid),
            "shortcut_name" in r.params && r.params.shortcut_name,
          ),
          s = (0, a.W6)(),
          o = (function (e) {
            const t = (0, je.jE)(),
              r = xe();
            return n.useCallback(() => {
              const i = (0, Pe.we)("#UserGameNotes_UntitledNote_Title"),
                n = r.NewNote(e, i);
              return De(t, e, (e) => [...e, n]), n.id;
            }, [t, r, e]);
          })(i),
          l = n.useRef(void 0),
          { data: c } = (function (e) {
            const t = xe();
            return (0, qe.I)(Ge(t, e));
          })(i);
        let u,
          d = !1;
        if (c) {
          const e = r.params.noteid || l.current;
          e &&
            ((u = c.find((t) => t.id === e)),
            !u && r.params.noteid && (d = !0)),
            u || (u = c[0]);
        }
        u && (l.current = u.id),
          n.useEffect(() => {
            c && 0 == c.length && Ht(s, i, o(), !0);
          }, [s, i, c, o]),
          n.useEffect(() => {
            d && Ht(s, i, void 0, !0);
          }, [s, i, d]);
        const m = n.createElement(
          St.he,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          n.createElement(
            ht.$n,
            {
              className: gt.NewNoteButton,
              onClick: () => {
                const e = o();
                Ht(s, i, e);
              },
            },
            n.createElement(lt.qY3, null),
          ),
        );
        return c
          ? n.createElement(Dt, {
              noteParent: i,
              notes: c,
              activeNoteID: null == u ? void 0 : u.id,
              actions: m,
              bStandalonePage: t,
            })
          : null;
      }
      function Dt(e) {
        const {
            noteParent: t,
            notes: r,
            activeNoteID: i,
            actions: s,
            bStandalonePage: o,
          } = e,
          [l, c] = (0, pt.SP)("NotesListCollapsed", !1),
          u = n.useContext(Ie).bPinnedView,
          d = (0, st.Qn)(),
          m = (0, a.W5)(),
          p = (0, ht.vn)(m.params.noteid ? "ActivePage" : "PageList"),
          B = r.map((e) => {
            var r;
            return {
              title:
                (null === (r = e.title) || void 0 === r ? void 0 : r.length) > 0
                  ? e.title
                  : (0, Pe.we)("#UserGameNotes_Untitled"),
              identifier: e.id,
              content: n.createElement($t, { noteParent: t, note: e }),
              pageClassName: gt.NotePage,
              hideTitle: !0,
            };
          }),
          g = (0, a.W6)(),
          b = n.useCallback((e) => Ht(g, t, e), [g, t]),
          y = st.TS.IN_STEAMUI
            ? (0, Pe.we)("#UserGameNotes_NotesList")
            : n.createElement(Lt, { noteParent: t });
        return d && o
          ? n.createElement(ht.Bv, {
              title: y,
              pages: B,
              className: (0, mt.A)(
                gt.NotesPagedSettings,
                u && gt.PinnedView,
                p,
              ),
              page: i,
              onPageRequested: b,
              bottomControls: s,
              hideList: l,
              toggleHideList: u || d ? void 0 : () => c(!l),
            })
          : n.createElement(ht.O7, {
              title: y,
              pages: B,
              className: (0, mt.A)(
                gt.NotesPagedSettings,
                u && gt.PinnedView,
                p,
              ),
              page: i,
              onPageRequested: b,
              bottomControls: s,
              hideList: l,
              toggleHideList: u || d ? void 0 : () => c(!l),
            });
      }
      function Lt(e) {
        const { noteParent: t } = e,
          r = Gt("appid" in t ? t.appid : void 0);
        let i;
        return (
          (i = "appid" in t ? (null == r ? void 0 : r.name) : t.shortcut),
          n.createElement(
            n.Fragment,
            null,
            (0, Pe.we)("#UserGameNotes_NotesForGame", i),
          )
        );
      }
      function $t(e) {
        const { noteParent: t, note: r } = e,
          i = ht.v$(),
          s = (0, a.W6)(),
          o = n.useCallback(() => Ht(s, t), [s, t]);
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(ht._Z, { onActivate: o }),
          n.createElement(Ut, { note: r, hidden: !i }),
        );
      }
      function Ht(e, t, r, i = !1) {
        let n;
        (n =
          "appid" in t
            ? o.AppNotes(t.appid, r)
            : o.ShortcutNotes(t.shortcut, r)),
          i ? e.replace(n, e.location.state) : e.push(n, e.location.state);
      }
      var Kt = r(17083),
        Vt = r(22797);
      function Qt() {
        const { data: e, isLoading: t } = (function () {
            const e = xe();
            return (0, qe.I)({
              queryKey: ["GameNotes", "GamesWithNotes"],
              queryFn: () => e.GetGamesWithNotes(),
            });
          })(),
          r = n.useMemo(
            () =>
              null == e
                ? void 0
                : e.slice().sort((e, t) => t.last_modified - e.last_modified),
            [e],
          );
        return t
          ? n.createElement(Vt.t, { msDelayAppear: 300 })
          : n.createElement(
              "div",
              null,
              n.createElement(
                "h1",
                null,
                (0, Pe.we)("#UserGameNotes_NotesList"),
              ),
              n.createElement(
                "ul",
                null,
                r.map((e) =>
                  n.createElement(Yt, {
                    key: e.appid || e.shortcut_name,
                    game: e,
                  }),
                ),
              ),
            );
      }
      function Yt(e) {
        const { game: t } = e;
        return n.createElement(
          "li",
          null,
          n.createElement(
            Kt.N_,
            {
              to:
                ((r = t.appid
                  ? { appid: t.appid }
                  : { shortcut: t.shortcut_name }),
                "appid" in r
                  ? o.AppNotes(r.appid, i)
                  : o.ShortcutNotes(r.shortcut, i)),
            },
            t.appid ? n.createElement(Xt, { appid: t.appid }) : t.shortcut_name,
          ),
        );
        var r, i;
      }
      function Xt(e) {
        const { appid: t } = e,
          r = Gt(t);
        return null == r ? void 0 : r.name;
      }
      function Zt(e, t, r = {}) {
        const { bIsPublic: i = !0 } = r,
          n = { unAppID: e, strMachineName: t, bIsPublic: i },
          a = (0, s.KV)();
        return (0, Oe.n)({
          mutationFn: async ({ files: e }) => {
            const t = await (async function (e, t, r, i) {
              const n = await (async function (e, t, r) {
                const i = c.w.Init(V);
                i.Body().set_appid(t.unAppID),
                  i.Body().set_machine_name(t.strMachineName),
                  i.Body().set_files_to_upload(r.slice());
                const n = await fe.BeginAppUploadBatch(e, i);
                if (!n.BSuccess())
                  throw `Error in BeginAppUploadBatch: ${n.GetErrorMessage()}`;
                return n.Body().batch_id();
              })(e, t, r);
              if (!n) return !1;
              let a = !1;
              try {
                a = await i(n);
              } finally {
                !(function (e, t, r, i) {
                  const n = c.w.Init(X);
                  n.Body().set_appid(t.unAppID),
                    n.Body().set_batch_id(r),
                    n.Body().set_batch_eresult(i ? 1 : 2),
                    fe.CompleteAppUploadBatch(e, n);
                })(e, t, n, a);
              }
              return !0;
            })(
              a,
              n,
              e.map((e) => e.filename),
              async (t) => {
                const r = await Promise.all(
                  e.map((e) =>
                    (async function (e, t, r, i) {
                      let n, a;
                      n =
                        i.content instanceof File
                          ? await i.content.arrayBuffer()
                          : new TextEncoder().encode(i.content).buffer;
                      a = await l.C(n, "SHA-1");
                      const s = await (async function (e, t, r, i, n, a) {
                          const s = c.w.Init(_);
                          s.Body().set_appid(t.unAppID),
                            s.Body().add_platforms_to_sync("All"),
                            s.Body().set_upload_batch_id(r),
                            s.Body().set_is_public(t.bIsPublic),
                            s.Body().set_filename(i),
                            s.Body().set_file_size(n),
                            s.Body().set_file_sha(a);
                          const o = await fe.BeginHTTPUpload(e, s);
                          if (!o.BSuccess())
                            throw `Error in BeginHTTPUpload: ${o.GetErrorMessage()}`;
                          return o.Body().toObject();
                        })(e, t, r, i.filename, n.byteLength, a),
                        o = `https://${s.url_host}${s.url_path}`;
                      let u = !1;
                      try {
                        const e = s.request_headers.map(
                          ({ name: e, value: t }) => [e, t],
                        );
                        u = (
                          await fetch(o, {
                            method: "PUT",
                            headers: e,
                            mode: "cors",
                            body: i.content,
                          })
                        ).ok;
                      } catch {}
                      return await (async function (e, t, r, i, n) {
                        const a = c.w.Init(M);
                        a.Body().set_appid(t.unAppID),
                          a.Body().set_transfer_succeeded(n),
                          a.Body().set_filename(r),
                          a.Body().set_file_sha(i);
                        const s = await fe.CommitHTTPUpload(e, a);
                        if (!s.BSuccess())
                          throw `Error in CommitHTTPUpload: ${s.GetErrorMessage()}`;
                        return s.Body().file_committed();
                      })(e, t, i.filename, a, u);
                    })(a, n, t, e),
                  ),
                );
                return !r.some((e) => !e);
              },
            );
            return t;
          },
        });
      }
      function Jt(e) {
        const t = (function () {
          const e = (0, s.TR)(),
            { mutateAsync: t } = Zt(i.oe, "Steam Community Web Interface", {
              bIsPublic: !0,
            }),
            r = n.useCallback(
              (e, r) => t({ files: [{ filename: e, content: r }] }),
              [t],
            ),
            a = n.useRef({ steamInterface: e, uploadFile: r });
          a.current.uploadFile = r;
          const [o] = n.useState(() => new ve(a.current));
          return o;
        })();
        return n.createElement(
          Ne,
          { mode: "page", store: t },
          n.createElement(
            a.dO,
            null,
            n.createElement(
              a.qh,
              { path: o.List() },
              n.createElement(Qt, null),
            ),
            n.createElement(
              a.qh,
              { path: o.AppNotes(":appid", ":noteid?") },
              n.createElement(kt, null),
            ),
            n.createElement(
              a.qh,
              null,
              n.createElement(a.rd, { to: `${o.List()}` }),
            ),
          ),
        );
      }
    },
    49693: (e, t, r) => {
      "use strict";
      r.d(t, { op: () => o, CS: () => a, vE: () => l, Al: () => n });
      class i {
        constructor() {
          (this.type = 0), (this.text = "");
        }
        ConvertMalformedNodeToText() {
          3 == this.type
            ? (this.text = "[/" + this.text)
            : 2 == this.type && (this.text = "[" + this.text),
            (this.type = 1);
        }
      }
      class n {
        constructor(e, t) {
          (this.m_dictComponents = e), (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, r = !1) {
          const n = (function (e, t) {
            const r = [];
            let n = new i(),
              a = !1,
              s = !1,
              o = !1;
            for (let i = 0; i < e.length; i++) {
              const l = e[i];
              switch (n.type) {
                case 0:
                  "[" == l
                    ? ((n.type = 2), (s = !0))
                    : ((n.type = 1), "\\" == l && t ? (a = !a) : (n.text += l));
                  break;
                case 2:
                case 3:
                  if ("/" == l && s) (n.type = 3), (n.text = ""), (s = !1);
                  else if ("[" != l || a)
                    if ("]" != l || a)
                      "\\" == l && t
                        ? ((n.text += l), (a = !a), (s = !1))
                        : ((n.text += l), (a = !1), (s = !1));
                    else {
                      const e =
                          2 == n.type &&
                          "noparse" == n.text.toLocaleLowerCase(),
                        t =
                          3 == n.type &&
                          "noparse" == n.text.toLocaleLowerCase();
                      s || (o && !t)
                        ? (n.ConvertMalformedNodeToText(), (n.text += l))
                        : e
                          ? (o = !0)
                          : t && (o = !1),
                        (n = c(r, n)),
                        (s = !1);
                    }
                  else
                    n.ConvertMalformedNodeToText(), (n = c(r, n, 2)), (s = !0);
                  break;
                case 1:
                  "[" != l || a
                    ? "\\" == l && t
                      ? (a && (n.text += l), (a = !a))
                      : ((n.text += l), (a = !1))
                    : ((n = c(r, n, 2)), (s = !0));
              }
            }
            0 != n.type &&
              ((2 != n.type && 3 != n.type) || n.ConvertMalformedNodeToText(),
              r.push(n));
            return r;
          })(e || "", r);
          return this.Parse_BuildElements(n, t);
        }
        Parse_BuildElements(e, t) {
          let r = this.m_fnAccumulatorFactory(void 0);
          const i = [],
            n = () => (i.length < 1 ? void 0 : i[i.length - 1]),
            a = this.m_dictComponents,
            s = (e) => {
              var t;
              return !(
                !e.tag ||
                !(null === (t = a.get(e.tag)) || void 0 === t
                  ? void 0
                  : t.autocloses)
              );
            };
          let o = !1,
            l = !0;
          const c = (e, n) => {
            if (e && e.node.tag === n.text && a.get(e.node.tag)) {
              const n = a.get(e.node.tag),
                s = i.map((e) => e.node.tag),
                c = { parentTags: s, tagname: e.node.tag, args: e.node.args },
                u = t(n.Constructor, c, ...r.GetElements());
              (r = e.accumulator),
                Array.isArray(u)
                  ? u.forEach((e) => r.AppendNode(e))
                  : r.AppendNode(u),
                (o = !!n.skipFollowingNewline),
                (l = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                r.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + n.text + "]", !1),
                (r = t),
                (l = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              var u, d;
              if (1 == e.type) {
                const t = o ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                r.AppendText(t, l), (o = !1);
              } else if (2 == e.type) {
                const t = a.get(e.tag);
                if (t) {
                  const s = n();
                  if (void 0 !== s) {
                    const t = a.get(s.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === s.node.tag &&
                      c(i.pop(), s.node);
                  }
                  i.push({ accumulator: r, node: e, bWrapTextForCopying: l }),
                    (r = this.m_fnAccumulatorFactory(e)),
                    (o = !!t.skipInternalNewline),
                    (l =
                      null !== (u = t.allowWrapTextForCopying) &&
                      void 0 !== u &&
                      u);
                } else r.AppendText("[" + e.text + "]", 0 == i.length);
              } else if (3 == e.type) {
                for (; n() && n().node.tag !== e.text && s(n().node); ) {
                  const e = i.pop();
                  c(e, e.node);
                }
                if (
                  (null === (d = n()) || void 0 === d ? void 0 : d.node.tag) ==
                  e.text
                ) {
                  const t = i.pop();
                  c(t, e);
                } else r.AppendText("[/" + e.text + "]", 0 == i.length);
              }
            });
            i.length > 0;
          ) {
            const e = i.pop();
            c(e, e.node);
          }
          return r.GetElements();
        }
      }
      function a(e, t) {
        let r = "[" + e;
        (null == t ? void 0 : t[""]) && (r += `=${s("" + t[""])}`);
        for (const e in t)
          "" !== e &&
            (r += ` ${((i = e), i.replace(/(\\| |\])/g, "\\$1"))}=${s("" + t[e])}`);
        var i;
        return (r += "]"), r;
      }
      function s(e) {
        return `"${e.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function o(e) {
        return `[/${e}]`;
      }
      function l(e) {
        return e.replace(/(\\|\[)/g, "\\$1");
      }
      function c(e, t, r = 0) {
        if (2 == t.type) {
          let e = t.text.indexOf("=");
          const r = t.text.indexOf(" ");
          if ((-1 != r && (-1 == e || r < e) && (e = r), e > 0)) {
            t.tag = t.text.substr(0, e).toLocaleLowerCase();
            const r = t.text.substr(e);
            t.args = (function (e) {
              if (!e || e.length < 1) return {};
              const t = {};
              let r = "",
                i = "",
                n = 0,
                a = 0;
              "=" == e[0] && (n = 2);
              let s = !1;
              for (a++; a < e.length; a++) {
                const o = e[a];
                let l = !0,
                  c = !1;
                switch (n) {
                  case 0:
                    if ("=" == o) return {};
                    if (" " == o) continue;
                    n = 1;
                    break;
                  case 1:
                    ("=" != o && " " != o) ||
                      s ||
                      (" " == o ? ((n = 0), (c = !0)) : (n = 2), (l = !1));
                    break;
                  case 2:
                    " " == o
                      ? ((n = 0), (l = !1), (c = !0))
                      : '"' == o
                        ? ((n = 4), (l = !1))
                        : (n = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == o && 4 != n && !s) ||
                      ('"' == o && 4 == n && !s)) &&
                      ((n = 0), (l = !1), (c = !0));
                }
                if (l)
                  if ("\\" != o || s)
                    if (((s = !1), 1 == n)) r += o;
                    else {
                      if (3 != n && 4 != n)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + n,
                        );
                      i += o;
                    }
                  else s = !0;
                c && ((t[r] = i), (r = ""), (i = ""));
              }
              0 != n && (t[r] = i);
              return t;
            })(r);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        const n = new i();
        return (n.type = r), n;
      }
    },
    61788: (e, t, r) => {
      "use strict";
      r.d(t, { y: () => m });
      var i = r(34629),
        n = r(56545),
        a = r(59134),
        s = r(60778),
        o = r(14771),
        l = r(6419);
      const c = new s.wd("ReactUsageReporting").Debug,
        u = 1e3 * o.Kp.PerMinute;
      class d {
        constructor() {
          (this.m_transport = null),
            (this.m_mapRoutes = new Map()),
            (this.m_mapComponents = new Map()),
            (this.m_mapActions = new Map()),
            (this.m_reportCount = 0),
            (this.m_bInitialized = !1);
        }
        Init(e, t, r) {
          (this.m_bInitialized = !0),
            (this.m_strProduct = e),
            (this.m_strVersion = t),
            (this.m_transport = r),
            this.ScheduleSend();
        }
        ScheduleSend() {
          setTimeout(() => this.CheckSend(), u);
        }
        CheckSend() {
          this.m_reportCount > 0 && this.SendMetrics(), this.ScheduleSend();
        }
        ReportInternal(e, t) {
          t.has(e) || t.set(e, 0),
            t.set(e, t.get(e) + 1),
            this.m_reportCount++,
            this.ShouldSendMetricsImmediately() && this.SendMetrics();
        }
        ReportRouteMatch(e) {
          c("Route match: " + e), this.ReportInternal(e, this.m_mapRoutes);
        }
        ReportTrackedComponent(e) {
          c("Tracked component: " + e),
            this.ReportInternal(e, this.m_mapComponents);
        }
        ReportTrackedAction(e) {
          c("User action: " + e), this.ReportInternal(e, this.m_mapActions);
        }
        ShouldSendMetricsImmediately() {
          return this.m_reportCount >= 100;
        }
        SendMetrics() {
          if (!this.m_bInitialized) return;
          const e = n.w.Init(a.bc);
          e.Body().set_product(this.m_strProduct),
            e.Body().set_version(this.m_strVersion),
            this.m_mapRoutes.forEach((t, r) => {
              let i = new a.N4();
              i.set_route(r), i.set_count(t), e.Body().add_routes(i);
            }),
            this.m_mapComponents.forEach((t, r) => {
              let i = new a.Zd();
              i.set_component(r), i.set_count(t), e.Body().add_components(i);
            }),
            this.m_mapActions.forEach((t, r) => {
              let i = new a.Ys();
              i.set_action(r), i.set_count(t), e.Body().add_actions(i);
            }),
            this.m_mapRoutes.clear(),
            this.m_mapComponents.clear(),
            this.m_mapActions.clear(),
            (this.m_reportCount = 0),
            a._5.ReportReactUsage(this.m_transport, e);
        }
        get version() {
          return this.m_strVersion;
        }
        get product() {
          return this.m_strProduct;
        }
      }
      (0, i.Cg)([l.o], d.prototype, "CheckSend", null);
      const m = new d();
    },
    27650: (e, t, r) => {
      "use strict";
      r.d(t, { DB: () => l, PW: () => u, Ss: () => s, hk: () => o });
      var i = r(90626),
        n = r(72739),
        a = r(56011);
      function s(e, t) {
        const r = i.useRef(),
          a = i.useCallback(
            (t) => {
              t.currentTarget.files.length > 0 &&
                (e(t.currentTarget.files), (t.currentTarget.value = ""));
            },
            [e],
          ),
          s = i.useCallback(() => r.current.click(), []);
        return [
          n.createPortal(
            i.createElement(
              "form",
              { onSubmit: c, style: { display: "none" } },
              i.createElement("input", {
                ...t,
                type: "file",
                ref: r,
                onChange: a,
              }),
            ),
            window.document.body,
          ),
          s,
        ];
      }
      function o(e) {
        const [t, r] = i.useState(!1);
        return [
          {
            onDragEnter: i.useCallback((e) => {
              ((e.dataTransfer.files && e.dataTransfer.files[0]) ||
                (e.dataTransfer.types && "Files" == e.dataTransfer.types[0])) &&
                r(!0);
            }, []),
            onDragLeave: i.useCallback((e) => {
              a.NO(e) && r(!1);
            }, []),
            onDragEnd: i.useCallback(() => r(!1), []),
            onDragOver: t ? c : void 0,
            onDrop: i.useCallback(
              (t) => {
                var i;
                (null === (i = t.dataTransfer.files) || void 0 === i
                  ? void 0
                  : i.length) &&
                  (e(t.dataTransfer.files, t), t.preventDefault()),
                  r(!1);
              },
              [e],
            ),
          },
          t,
        ];
      }
      async function l(e, t = 1e3) {
        return await new Promise((r, i) => {
          const n = new Image();
          (n.src = e),
            (n.onload = () => r("success")),
            (n.onerror = () => r("error")),
            t > 0 && window.setTimeout(() => r("timeout"), t);
        });
      }
      function c(e) {
        e.preventDefault();
      }
      function u(e) {
        switch (e.type) {
          case "image/jpeg":
            return "jpg";
          case "image/png":
            return "png";
          case "image/gif":
            return "gif";
          default:
            const t = e.name.match(/(?<=\.)[^.]+$/);
            return t ? t[0] : void 0;
        }
      }
    },
  },
]);

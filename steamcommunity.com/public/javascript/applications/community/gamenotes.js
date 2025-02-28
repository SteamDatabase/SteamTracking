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
      r.r(t), r.d(t, { default: () => rr });
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
        c = r(81393),
        u = r(56545),
        d = r(80613),
        m = r(89068);
      const p = d.Message;
      class B extends p {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.operation || m.Sg(B.M()),
            p.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  operation: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  machine_name: {
                    n: 2,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  client_id: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  time_last_updated: {
                    n: 4,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  os_type: { n: 5, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                  device_type: {
                    n: 6,
                    br: m.qM.readInt32,
                    bw: m.gp.writeInt32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = m.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_PendingRemoteOperation";
        }
      }
      const g = d.Message;
      class b extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.appid || m.Sg(b.M()),
            g.initialize(this, e, 0, -1, [9], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  ugcid: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  filename: { n: 3, br: m.qM.readString, bw: m.gp.writeString },
                  timestamp: {
                    n: 4,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  file_size: {
                    n: 5,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  url: { n: 6, br: m.qM.readString, bw: m.gp.writeString },
                  steamid_creator: {
                    n: 7,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  flags: { n: 8, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  platforms_to_sync: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: m.qM.readString,
                    bw: m.gp.writeRepeatedString,
                  },
                  file_sha: {
                    n: 10,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = m.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_UserFile";
        }
      }
      class y extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.appid || m.Sg(y.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = m.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetUploadServerInfo_Request";
        }
      }
      class w extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.server_url || m.Sg(w.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  server_url: {
                    n: 1,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = m.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetUploadServerInfo_Response";
        }
      }
      class _ extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.appid || m.Sg(_.M()),
            g.initialize(this, e, 0, -1, [6, 7, 8], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  file_size: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  filename: { n: 3, br: m.qM.readString, bw: m.gp.writeString },
                  file_sha: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                  is_public: { n: 5, br: m.qM.readBool, bw: m.gp.writeBool },
                  platforms_to_sync: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: m.qM.readString,
                    bw: m.gp.writeRepeatedString,
                  },
                  request_headers_names: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: m.qM.readString,
                    bw: m.gp.writeRepeatedString,
                  },
                  request_headers_values: {
                    n: 8,
                    r: !0,
                    q: !0,
                    br: m.qM.readString,
                    bw: m.gp.writeRepeatedString,
                  },
                  upload_batch_id: {
                    n: 9,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = m.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginHTTPUpload_Request";
        }
      }
      class f extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.ugcid || m.Sg(f.M()),
            g.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  ugcid: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  timestamp: {
                    n: 2,
                    br: m.qM.readFixed32,
                    bw: m.gp.writeFixed32,
                  },
                  url_host: { n: 3, br: m.qM.readString, bw: m.gp.writeString },
                  url_path: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                  use_https: { n: 5, br: m.qM.readBool, bw: m.gp.writeBool },
                  request_headers: { n: 6, c: M, r: !0, q: !0 },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = m.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginHTTPUpload_Response";
        }
      }
      class M extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.name || m.Sg(M.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  name: { n: 1, br: m.qM.readString, bw: m.gp.writeString },
                  value: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = m.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginHTTPUpload_Response_HTTPHeaders";
        }
      }
      class h extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.transfer_succeeded || m.Sg(h.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  transfer_succeeded: {
                    n: 1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  appid: { n: 2, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  file_sha: { n: 3, br: m.qM.readString, bw: m.gp.writeString },
                  filename: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = m.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitHTTPUpload_Request";
        }
      }
      class z extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.file_committed || m.Sg(z.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  file_committed: {
                    n: 1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = m.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitHTTPUpload_Response";
        }
      }
      class S extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.appid || m.Sg(S.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  file_size: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  filename: { n: 3, br: m.qM.readString, bw: m.gp.writeString },
                  file_sha: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                  content_type: {
                    n: 5,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = m.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginUGCUpload_Request";
        }
      }
      class C extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.storage_system || m.Sg(C.M()),
            g.initialize(this, e, 0, -1, [7], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  storage_system: {
                    n: 1,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  ugcid: {
                    n: 2,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  timestamp: {
                    n: 3,
                    br: m.qM.readFixed32,
                    bw: m.gp.writeFixed32,
                  },
                  url_host: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                  url_path: { n: 5, br: m.qM.readString, bw: m.gp.writeString },
                  use_https: { n: 6, br: m.qM.readBool, bw: m.gp.writeBool },
                  request_headers: { n: 7, c: R, r: !0, q: !0 },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = m.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginUGCUpload_Response";
        }
      }
      class R extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.name || m.Sg(R.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  name: { n: 1, br: m.qM.readString, bw: m.gp.writeString },
                  value: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = m.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginUGCUpload_Response_HTTPHeaders";
        }
      }
      class U extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.transfer_succeeded || m.Sg(U.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  transfer_succeeded: {
                    n: 1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  appid: { n: 2, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  ugcid: {
                    n: 3,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = m.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitUGCUpload_Request";
        }
      }
      class T extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.file_committed || m.Sg(T.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  file_committed: {
                    n: 1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = m.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitUGCUpload_Response";
        }
      }
      class F extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.ugcid || m.Sg(F.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  ugcid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  appid: { n: 2, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = m.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetFileDetails_Request";
        }
      }
      class W extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.details || m.Sg(W.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = { proto: W, fields: { details: { n: 1, c: b } } }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = m.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetFileDetails_Response";
        }
      }
      class v extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.appid || m.Sg(v.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  extended_details: {
                    n: 2,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  count: { n: 3, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  start_index: {
                    n: 4,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = m.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserFiles_Request";
        }
      }
      class q extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.files || m.Sg(q.M()),
            g.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  files: { n: 1, c: b, r: !0, q: !0 },
                  total_files: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = m.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserFiles_Response";
        }
      }
      class j extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.filename || m.Sg(j.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  filename: { n: 1, br: m.qM.readString, bw: m.gp.writeString },
                  appid: { n: 2, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  upload_batch_id: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = m.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_Delete_Request";
        }
      }
      class O extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.initialize(this, e, 0, -1, void 0, null);
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
          let t = new d.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_Delete_Response";
        }
      }
      class I extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new I();
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetClientEncryptionKey_Request";
        }
      }
      class N extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.key || m.Sg(N.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  key: { n: 1, br: m.qM.readBytes, bw: m.gp.writeBytes },
                  crc: { n: 2, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = m.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetClientEncryptionKey_Response";
        }
      }
      class E extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.steamid || m.Sg(E.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  url: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                  success: { n: 3, br: m.qM.readBool, bw: m.gp.writeBool },
                  http_status_code: {
                    n: 4,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  expected_bytes: {
                    n: 5,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  received_bytes: {
                    n: 6,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  duration: { n: 7, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = m.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CDNReport_Notification";
        }
      }
      class x extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.host || m.Sg(x.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  host: { n: 1, br: m.qM.readString, bw: m.gp.writeString },
                  path: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                  is_upload: { n: 3, br: m.qM.readBool, bw: m.gp.writeBool },
                  success: { n: 4, br: m.qM.readBool, bw: m.gp.writeBool },
                  http_status_code: {
                    n: 5,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  bytes_expected: {
                    n: 6,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  bytes_actual: {
                    n: 7,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  duration_ms: {
                    n: 8,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  cellid: { n: 9, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  proxied: { n: 10, br: m.qM.readBool, bw: m.gp.writeBool },
                  ipv6_local: { n: 11, br: m.qM.readBool, bw: m.gp.writeBool },
                  ipv6_remote: { n: 12, br: m.qM.readBool, bw: m.gp.writeBool },
                  time_to_connect_ms: {
                    n: 13,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  time_to_send_req_ms: {
                    n: 14,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  time_to_first_byte_ms: {
                    n: 15,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  time_to_last_byte_ms: {
                    n: 16,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = m.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ExternalStorageTransferReport_Notification";
        }
      }
      class P extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.appid || m.Sg(P.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  client_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  machine_name: {
                    n: 3,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  ignore_pending_operations: {
                    n: 4,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  os_type: { n: 5, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                  device_type: {
                    n: 6,
                    br: m.qM.readInt32,
                    bw: m.gp.writeInt32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = m.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppLaunchIntent_Request";
        }
      }
      class A extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.pending_remote_operations || m.Sg(A.M()),
            g.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  pending_remote_operations: { n: 1, c: B, r: !0, q: !0 },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = m.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppLaunchIntent_Response";
        }
      }
      class G extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.appid || m.Sg(G.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  client_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  uploads_completed: {
                    n: 3,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  uploads_required: {
                    n: 4,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = m.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppExitSyncDone_Notification";
        }
      }
      class k extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.appid || m.Sg(k.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = m.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientGetAppQuotaUsage_Request";
        }
      }
      class D extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.existing_files || m.Sg(D.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  existing_files: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  existing_bytes: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  max_num_files: {
                    n: 3,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  max_num_bytes: {
                    n: 4,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = m.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientGetAppQuotaUsage_Response";
        }
      }
      class L extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.file_name || m.Sg(L.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  file_name: {
                    n: 1,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  sha_file: { n: 2, br: m.qM.readBytes, bw: m.gp.writeBytes },
                  time_stamp: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  raw_file_size: {
                    n: 4,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  persist_state: {
                    n: 5,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  platforms_to_sync: {
                    n: 6,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  path_prefix_index: {
                    n: 7,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  machine_name_index: {
                    n: 8,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = m.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppFileInfo";
        }
      }
      class $ extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.appid || m.Sg($.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  synced_change_number: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = m.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT($.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetAppFileChangelist_Request";
        }
      }
      class H extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.current_change_number || m.Sg(H.M()),
            g.initialize(this, e, 0, -1, [2, 4, 5], null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  current_change_number: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  files: { n: 2, c: L, r: !0, q: !0 },
                  is_only_delta: {
                    n: 3,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  path_prefixes: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: m.qM.readString,
                    bw: m.gp.writeRepeatedString,
                  },
                  machine_names: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: m.qM.readString,
                    bw: m.gp.writeRepeatedString,
                  },
                  app_buildid_hwm: {
                    n: 6,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = m.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetAppFileChangelist_Response";
        }
      }
      class K extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.url_host || m.Sg(K.M()),
            g.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  url_host: { n: 1, br: m.qM.readString, bw: m.gp.writeString },
                  url_path: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                  use_https: { n: 3, br: m.qM.readBool, bw: m.gp.writeBool },
                  http_method: {
                    n: 4,
                    br: m.qM.readInt32,
                    bw: m.gp.writeInt32,
                  },
                  request_headers: { n: 5, c: V, r: !0, q: !0 },
                  block_offset: {
                    n: 6,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  block_length: {
                    n: 7,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  explicit_body_data: {
                    n: 8,
                    br: m.qM.readBytes,
                    bw: m.gp.writeBytes,
                  },
                  may_parallelize: {
                    n: 9,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = m.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ClientCloudFileUploadBlockDetails";
        }
      }
      class V extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.name || m.Sg(V.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  name: { n: 1, br: m.qM.readString, bw: m.gp.writeString },
                  value: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = m.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ClientCloudFileUploadBlockDetails_HTTPHeaders";
        }
      }
      class Q extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.appid || m.Sg(Q.M()),
            g.initialize(this, e, 0, -1, [3, 4], null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  machine_name: {
                    n: 2,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  files_to_upload: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: m.qM.readString,
                    bw: m.gp.writeRepeatedString,
                  },
                  files_to_delete: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: m.qM.readString,
                    bw: m.gp.writeRepeatedString,
                  },
                  client_id: {
                    n: 5,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  app_build_id: {
                    n: 6,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = m.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginAppUploadBatch_Request";
        }
      }
      class Y extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.batch_id || m.Sg(Y.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  batch_id: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  app_change_number: {
                    n: 4,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = m.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginAppUploadBatch_Response";
        }
      }
      class X extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.appid || m.Sg(X.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  batch_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  batch_eresult: {
                    n: 3,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = m.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CompleteAppUploadBatch_Notification";
        }
      }
      class Z extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.appid || m.Sg(Z.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  batch_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  batch_eresult: {
                    n: 3,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = m.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CompleteAppUploadBatch_Request";
        }
      }
      class J extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new J();
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CompleteAppUploadBatch_Response";
        }
      }
      class ee extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.appid || m.Sg(ee.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  app_change_number: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = m.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppCloudStateChange_Notification";
        }
      }
      class te extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.appid || m.Sg(te.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  file_size: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  raw_file_size: {
                    n: 3,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  file_sha: { n: 4, br: m.qM.readBytes, bw: m.gp.writeBytes },
                  time_stamp: {
                    n: 5,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  filename: { n: 6, br: m.qM.readString, bw: m.gp.writeString },
                  platforms_to_sync: {
                    n: 7,
                    d: 4294967295,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  cell_id: { n: 9, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  can_encrypt: { n: 10, br: m.qM.readBool, bw: m.gp.writeBool },
                  is_shared_file: {
                    n: 11,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  deprecated_realm: {
                    n: 12,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  upload_batch_id: {
                    n: 13,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = m.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientBeginFileUpload_Request";
        }
      }
      class re extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.encrypt_file || m.Sg(re.M()),
            g.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  encrypt_file: { n: 1, br: m.qM.readBool, bw: m.gp.writeBool },
                  block_requests: { n: 2, c: K, r: !0, q: !0 },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = m.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientBeginFileUpload_Response";
        }
      }
      class ie extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.transfer_succeeded || m.Sg(ie.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  transfer_succeeded: {
                    n: 1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  appid: { n: 2, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  file_sha: { n: 3, br: m.qM.readBytes, bw: m.gp.writeBytes },
                  filename: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = m.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientCommitFileUpload_Request";
        }
      }
      class ne extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.file_committed || m.Sg(ne.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  file_committed: {
                    n: 1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = m.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientCommitFileUpload_Response";
        }
      }
      class ae extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.appid || m.Sg(ae.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  filename: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                  realm: { n: 3, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  force_proxy: { n: 4, br: m.qM.readBool, bw: m.gp.writeBool },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = m.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientFileDownload_Request";
        }
      }
      class se extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.appid || m.Sg(se.M()),
            g.initialize(this, e, 0, -1, [10], null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  file_size: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  raw_file_size: {
                    n: 3,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  sha_file: { n: 4, br: m.qM.readBytes, bw: m.gp.writeBytes },
                  time_stamp: {
                    n: 5,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  is_explicit_delete: {
                    n: 6,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  url_host: { n: 7, br: m.qM.readString, bw: m.gp.writeString },
                  url_path: { n: 8, br: m.qM.readString, bw: m.gp.writeString },
                  use_https: { n: 9, br: m.qM.readBool, bw: m.gp.writeBool },
                  request_headers: { n: 10, c: oe, r: !0, q: !0 },
                  encrypted: { n: 11, br: m.qM.readBool, bw: m.gp.writeBool },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = m.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientFileDownload_Response";
        }
      }
      class oe extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.name || m.Sg(oe.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  name: { n: 1, br: m.qM.readString, bw: m.gp.writeString },
                  value: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = m.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientFileDownload_Response_HTTPHeaders";
        }
      }
      class le extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.appid || m.Sg(le.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  filename: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                  is_explicit_delete: {
                    n: 3,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  upload_batch_id: {
                    n: 4,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = m.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientDeleteFile_Request";
        }
      }
      class ce extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ce();
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientDeleteFile_Response";
        }
      }
      class ue extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.appid || m.Sg(ue.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  chose_local_files: {
                    n: 2,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = m.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ue.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientConflictResolution_Notification";
        }
      }
      class de extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new de();
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserApps_Request";
        }
      }
      class me extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.apps || m.Sg(me.M()),
            g.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: { apps: { n: 1, c: pe, r: !0, q: !0 } },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = m.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(me.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserApps_Response";
        }
      }
      class pe extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.appid || m.Sg(pe.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  totalcount: { n: 2, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                  totalsize: {
                    n: 3,
                    br: m.qM.readInt64String,
                    bw: m.gp.writeInt64String,
                  },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = m.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(pe.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserApps_Response_Apps";
        }
      }
      class Be extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.appid || m.Sg(Be.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  client_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  machine_name: {
                    n: 3,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  cloud_sync_completed: {
                    n: 4,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = m.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Be.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionSuspend_Request";
        }
      }
      class ge extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ge();
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionSuspend_Response";
        }
      }
      class be extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.appid || m.Sg(be.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  client_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = m.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionResume_Request";
        }
      }
      class ye extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ye();
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionResume_Response";
        }
      }
      class we extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.client_id || m.Sg(we.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  client_id: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = m.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(we.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientLogUploadCheck_Notification";
        }
      }
      class _e extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.request_id || m.Sg(_e.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  request_id: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = m.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(_e.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientLogUploadRequest_Notification";
        }
      }
      class fe extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.client_id || m.Sg(fe.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  client_id: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  request_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = m.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(fe.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientLogUploadComplete_Notification";
        }
      }
      var Me, he;
      !(function (e) {
        (e.ClientLogUploadCheck = function (e, t) {
          return e.SendNotification(
            "Cloud.ClientLogUploadCheck#1",
            (0, u.I8)(we, t),
            { ePrivilege: 1 },
          );
        }),
          (e.ClientLogUploadComplete = function (e, t) {
            return e.SendNotification(
              "Cloud.ClientLogUploadComplete#1",
              (0, u.I8)(fe, t),
              { ePrivilege: 1 },
            );
          }),
          (e.GetUploadServerInfo = function (e, t) {
            return e.SendMsg(
              "Cloud.GetUploadServerInfo#1",
              (0, u.I8)(y, t),
              w,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.BeginHTTPUpload = function (e, t) {
            return e.SendMsg("Cloud.BeginHTTPUpload#1", (0, u.I8)(_, t), f, {
              ePrivilege: 1,
            });
          }),
          (e.CommitHTTPUpload = function (e, t) {
            return e.SendMsg("Cloud.CommitHTTPUpload#1", (0, u.I8)(h, t), z, {
              ePrivilege: 1,
            });
          }),
          (e.BeginUGCUpload = function (e, t) {
            return e.SendMsg("Cloud.BeginUGCUpload#1", (0, u.I8)(S, t), C, {
              ePrivilege: 1,
            });
          }),
          (e.CommitUGCUpload = function (e, t) {
            return e.SendMsg("Cloud.CommitUGCUpload#1", (0, u.I8)(U, t), T, {
              ePrivilege: 1,
            });
          }),
          (e.GetFileDetails = function (e, t) {
            return e.SendMsg("Cloud.GetFileDetails#1", (0, u.I8)(F, t), W, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.EnumerateUserFiles = function (e, t) {
            return e.SendMsg("Cloud.EnumerateUserFiles#1", (0, u.I8)(v, t), q, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.Delete = function (e, t) {
            return e.SendMsg("Cloud.Delete#1", (0, u.I8)(j, t), O, {
              ePrivilege: 1,
            });
          }),
          (e.GetClientEncryptionKey = function (e, t) {
            return e.SendMsg(
              "Cloud.GetClientEncryptionKey#1",
              (0, u.I8)(I, t),
              N,
              { ePrivilege: 1 },
            );
          }),
          (e.CDNReport = function (e, t) {
            return e.SendNotification("Cloud.CDNReport#1", (0, u.I8)(E, t), {
              ePrivilege: 1,
            });
          }),
          (e.ExternalStorageTransferReport = function (e, t) {
            return e.SendNotification(
              "Cloud.ExternalStorageTransferReport#1",
              (0, u.I8)(x, t),
              { ePrivilege: 1 },
            );
          }),
          (e.BeginAppUploadBatch = function (e, t) {
            return e.SendMsg(
              "Cloud.BeginAppUploadBatch#1",
              (0, u.I8)(Q, t),
              Y,
              { ePrivilege: 1 },
            );
          }),
          (e.CompleteAppUploadBatch = function (e, t) {
            return e.SendNotification(
              "Cloud.CompleteAppUploadBatch#1",
              (0, u.I8)(X, t),
              { ePrivilege: 1 },
            );
          }),
          (e.CompleteAppUploadBatchBlocking = function (e, t) {
            return e.SendMsg(
              "Cloud.CompleteAppUploadBatchBlocking#1",
              (0, u.I8)(Z, t),
              J,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientBeginFileUpload = function (e, t) {
            return e.SendMsg(
              "Cloud.ClientBeginFileUpload#1",
              (0, u.I8)(te, t),
              re,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientCommitFileUpload = function (e, t) {
            return e.SendMsg(
              "Cloud.ClientCommitFileUpload#1",
              (0, u.I8)(ie, t),
              ne,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientFileDownload = function (e, t) {
            return e.SendMsg(
              "Cloud.ClientFileDownload#1",
              (0, u.I8)(ae, t),
              se,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientDeleteFile = function (e, t) {
            return e.SendMsg("Cloud.ClientDeleteFile#1", (0, u.I8)(le, t), ce, {
              ePrivilege: 1,
            });
          }),
          (e.ClientConflictResolution = function (e, t) {
            return e.SendNotification(
              "Cloud.ClientConflictResolution#1",
              (0, u.I8)(ue, t),
              { ePrivilege: 1 },
            );
          }),
          (e.EnumerateUserApps = function (e, t) {
            return e.SendMsg(
              "Cloud.EnumerateUserApps#1",
              (0, u.I8)(de, t),
              me,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAppFileChangelist = function (e, t) {
            return e.SendMsg(
              "Cloud.GetAppFileChangelist#1",
              (0, u.I8)($, t),
              H,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SuspendAppSession = function (e, t) {
            return e.SendMsg(
              "Cloud.SuspendAppSession#1",
              (0, u.I8)(Be, t),
              ge,
              { ePrivilege: 1 },
            );
          }),
          (e.ResumeAppSession = function (e, t) {
            return e.SendMsg("Cloud.ResumeAppSession#1", (0, u.I8)(be, t), ye, {
              ePrivilege: 1,
            });
          }),
          (e.SignalAppLaunchIntent = function (e, t) {
            return e.SendMsg(
              "Cloud.SignalAppLaunchIntent#1",
              (0, u.I8)(P, t),
              A,
              { ePrivilege: 1 },
            );
          }),
          (e.SignalAppExitSyncDone = function (e, t) {
            return e.SendNotification(
              "Cloud.SignalAppExitSyncDone#1",
              (0, u.I8)(G, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetAppQuotaUsage = function (e, t) {
            return e.SendMsg(
              "Cloud.ClientGetAppQuotaUsage#1",
              (0, u.I8)(k, t),
              D,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(Me || (Me = {})),
        (function (e) {
          (e.NotifyAppStateChangeHandler = {
            name: "CloudClient.NotifyAppStateChange#1",
            request: ee,
          }),
            (e.ClientLogUploadRequestHandler = {
              name: "CloudClient.ClientLogUploadRequest#1",
              request: _e,
            });
        })(he || (he = {}));
      var ze = r(62490);
      function Se(e) {
        return e.trim();
      }
      function Ce(e) {
        return e.appid ? { appid: e.appid } : { shortcut: e.shortcut_name };
      }
      var Re = r(60778);
      const Ue = new Re.wd("GameNotesCloudStore").Debug;
      function Te(e) {
        return e.replace(/[!-/:-@ [\\\]^`]/g, "_");
      }
      class Fe {
        constructor() {
          (this.m_mapNotesByGame = new Map()),
            (this.m_mapNotesByShortcut = new Map());
        }
        FilenameForNotes(e) {
          return "appid" in e
            ? `notes_${Number(e.appid)}`
            : `notes_shortcut_${Te(e.shortcut)}`;
        }
        DirectoryForNoteImages(e) {
          return "appid" in e
            ? `notes_${Number(e.appid)}_images/`
            : `notes_shortcut_${Te(e.shortcut)}_images/`;
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
          const i = Ce(e),
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
            Ue(t, ` => ${r}`);
            const n = await this.WriteNotesFile(this.FilenameForNotes(e), r);
            if (1 != n) throw `Error saving notes: ${n}`;
          }
          return 1;
        }
        async DeleteGameNote(e, t) {
          const r = await this.InternalLoadNotes(e);
          return (
            ze.Wp(r.notes, (e) => e.id === t) && (r.dirty = !0),
            await this.InternalSaveNotes(e),
            t
          );
        }
      }
      var We = r(27650);
      const ve = new Re.wd("GameNotesCloudStore").Debug;
      class qe extends Fe {
        constructor(e) {
          super(),
            (this.m_mapCachedImageFiles = new Map()),
            (this.m_tsFileInfoLoaded = 0),
            (this.m_props = e);
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
          const r = `${e}${await l.C(await t.arrayBuffer(), "SHA-1")}.${(0, We.PW)(t)}`;
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
            (!this.m_mapFileInfo ||
              performance.now() - this.m_tsFileInfoLoaded > 9e5) &&
              (this.m_promiseLoadingNotes ||
                (this.m_promiseLoadingNotes = this.InternalLoadNotesList()),
              await this.m_promiseLoadingNotes,
              (this.m_promiseLoadingNotes = void 0)),
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
          const t = (await this.GetFiles()).get(e);
          if (!t) return;
          const r = u.w.Init(F);
          r.Body().set_appid(i.oe), r.Body().set_ugcid(t.ugcid);
          const n = await Me.GetFileDetails(
            this.m_props.steamInterface.GetServiceTransport(),
            r,
          );
          if (!n.BSuccess() || !n.Body().details(!1))
            throw `Error loading cloud file detail: ${n.GetErrorMessage()}`;
          const a = n.Body().details();
          return (
            (0, c.w)(
              a.filename() == e,
              `Asked for ${e} but got ${a.filename()}`,
            ),
            {
              strURL: a.url(),
              strSHA: a.file_sha(),
              strFilename: a.filename(),
              ugcid: a.ugcid(),
              rtLastModified: parseInt(a.timestamp()),
              nBytes: a.file_size(),
            }
          );
        }
        async InternalLoadNotesList() {
          let e = 0,
            t = !0;
          const r = new Map();
          for (; t; ) {
            ve(`EnumerateUserFiles for ${i.oe}, starting at ${e}`);
            const n = u.w.Init(v);
            n.Body().set_appid(i.oe),
              n.Body().set_extended_details(!0),
              n.Body().set_start_index(e);
            const a = await Me.EnumerateUserFiles(
              this.m_props.steamInterface.GetServiceTransport(),
              n,
            );
            if (!a.BSuccess())
              throw `Error loading cloud files: ${a.GetErrorMessage()}`;
            a.Body()
              .files()
              .map((e) => ({
                strFilename: e.filename(),
                ugcid: e.ugcid(),
                rtLastModified: parseInt(e.timestamp()),
                nBytes: e.file_size(),
              }))
              .forEach((e) => r.set(e.strFilename, e));
            const s = a.Body().files().length;
            (e += s),
              (t = e < a.Body().total_files()),
              ve(
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
      var je = r(88942),
        Oe = r(29385),
        Ie = r(61739);
      const Ne = n.createContext({ mode: "page", store: null });
      function Ee(e) {
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
        return n.createElement(Ne.Provider, { value: u }, c);
      }
      function xe() {
        return n.useContext(Ne).closePopup;
      }
      function Pe() {
        return n.useContext(Ne).store;
      }
      var Ae = r(61859);
      const Ge = new Re.wd("GameNotesCloudStore").Debug;
      function ke(e) {
        return "appid" in e
          ? ["GameNotes", "NotesByAppID", e.appid]
          : ["GameNotes", "NotesForShortcut", Se(e.shortcut)];
      }
      function De(e, t) {
        return {
          queryKey: ke(t),
          queryFn: async () => (await e.GetGameNotesList(t, !0)) || [],
          staleTime: 18e5,
          enabled: !!t,
        };
      }
      function Le(e, t) {
        const r = (0, Oe.jE)(),
          i = Pe(),
          n = e.id;
        return (0, Ie.n)({
          mutationFn: async () =>
            e.not_persisted ? n : await i.DeleteGameNote(Ce(e), n),
          onSuccess: () => {
            $e(r, Ce(e), (e) => e.filter((e) => e.id != n)), t && t();
          },
        });
      }
      function $e(e, t, r) {
        e.setQueryData(ke(t), (e) => e && r(e));
      }
      function He(e, t) {
        return n.useMemo(
          () =>
            t
              ? (function (e) {
                  return { shortcut: Se(e) };
                })(t)
              : (function (e) {
                  return { appid: e };
                })(e),
          [e, t],
        );
      }
      var Ke = r(90286),
        Ve = r(26555),
        Qe = r(55608),
        Ye = r(79497);
      const Xe = Qe.DQ.nodes.image,
        Ze = {
          nodes: {
            ...Qe.DQ.nodes,
            cloudimage: {
              ...Xe,
              parseDOM: [],
              bbCode: { ...Xe.bbCode, tag: "cloudimg" },
            },
          },
          marks: { ...Qe.DQ.marks },
        },
        Je = new Ye.W(Ze);
      var et = r(33645),
        tt = r.n(et),
        rt = r(69956),
        it = r(28106),
        nt = r(64238),
        at = r.n(nt),
        st = r(71696),
        ot = r(1805),
        lt = r(78327),
        ct = r(86807),
        ut = r(4869),
        dt = r(73309),
        mt = r(79570),
        pt = r(30175),
        Bt = r(52038),
        gt = r(76011);
      function bt(e) {
        const {
            schema: t,
            view: r,
            refUpdateToolbar: i,
            className: a,
            bSpellcheckEnabled: s,
            setSpellcheckEnabled: o,
          } = e,
          [l, c] = (0, gt.SP)("FormattingToolbar_Expanded", !1);
        return n.createElement(
          pt.bI,
          { refUpdateToolbar: i, view: r },
          n.createElement(
            "div",
            { className: (0, Bt.A)(dt.Toolbar, a) },
            n.createElement(
              pt.Ez,
              null,
              n.createElement(mt.MV, null),
              n.createElement(pt.XQ, null),
              n.createElement(mt.Km, { schema: t }),
              n.createElement(pt.hK, null),
              n.createElement(
                pt.ff,
                {
                  onClick: () => c(!l),
                  tooltip: "#FormattingToolbar_ExpandOptions",
                },
                n.createElement(ut.cLJ, { direction: l ? "up" : "down" }),
              ),
            ),
            n.createElement(
              ct.R,
              { visible: l },
              n.createElement(
                pt.Ez,
                null,
                n.createElement(mt.Hz, { schema: t }),
                n.createElement(mt.WJ, { schema: t, levels: 5 }),
                n.createElement(
                  pt.u3,
                  {
                    nodeType: t.nodes.code_block,
                    tooltip: (0, Ae.we)("#FormattingToolbar_CodeBlock"),
                  },
                  n.createElement(ut.kNE, null),
                ),
                n.createElement(pt.XQ, null),
                n.createElement(mt.C$, { schema: t }),
                n.createElement(pt.XQ, null),
                n.createElement(mt.z9, { schema: t }),
                n.createElement(pt.hK, null),
                o &&
                  n.createElement(mt.Nt, {
                    bSpellcheckEnabled: s,
                    setSpellcheckEnabled: o,
                  }),
              ),
            ),
          ),
        );
      }
      var yt = r(27491),
        wt = r(8527),
        _t = r(5310);
      function ft(e) {
        const { deleteNote: t, hidden: r, pmState: i } = e,
          [a, s] = n.useState(),
          o = n.useRef(),
          l =
            null === (c = n.useContext(Ne).bSpellcheckEnabled) ||
            void 0 === c ||
            c;
        var c;
        const u = n.useContext(Ne).setSpellcheckEnabled,
          d = (0, lt.Qn)(),
          m = {
            onSecondaryButton: () => t(),
            onSecondaryActionDescription: (0, Ae.we)(
              "#UserGameNotes_DeleteNote",
            ),
            onDragOver: (e) => e.stopPropagation(),
          };
        return (
          n.useEffect(() => {
            a &&
              !r &&
              ((!wt.TS.IN_CLIENT &&
                window.matchMedia(`(max-width: ${_t.narrowWidth})`).matches) ||
                a.focus());
          }, [a, r]),
          n.createElement(
            n.Fragment,
            null,
            !d &&
              n.createElement(bt, {
                schema: Je.pm_schema,
                view: a,
                refUpdateToolbar: o,
                className: yt.Toolbar,
                bSpellcheckEnabled: l,
                setSpellcheckEnabled: u,
              }),
            n.createElement(
              ot.l,
              {
                pmState: i,
                className: yt.EditorInput,
                refOnUpdate: o,
                refView: s,
                bSpellcheckEnabled: l,
                panelProps: m,
              },
              n.createElement(Mt, { schema: Je.pm_schema }),
            ),
          )
        );
      }
      const Mt = n.memo(function (e) {
        const { schema: t } = e,
          r = n.useContext(Ne).onClickURL,
          i = n.useMemo(
            () => [
              {
                type: t.nodes.cloudimage,
                component: ht,
                readProps: (e) => ({ src: e.attrs.src }),
              },
            ],
            [t.nodes.cloudimage],
          );
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(st.pw, { nodeType: t.nodes.image }),
          n.createElement(it.W, {
            linkMarkType: t.marks.link,
            schema: t,
            onClickURL: r,
          }),
          n.createElement(rt.U, { specs: i }),
        );
      });
      function ht(e) {
        const { src: t, selected: r } = e,
          [i, a] = n.useState(),
          s = Pe();
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
                className: at()(tt().Image, r && "ProseMirror-selectednode"),
                src: i,
              })
            : null
        );
      }
      var zt = r(61788),
        St = r(33737),
        Ct = r(9154),
        Rt = r(32754),
        Ut = r(73745),
        Tt = r(13871);
      const Ft = 10;
      function Wt(e) {
        const { note: t, hidden: r = !1 } = e,
          [i, a] = n.useState(void 0),
          s = n.useRef(!1),
          o = (0, lt.Qn)(),
          { mutate: l } = (function (e, t) {
            const r = (0, Oe.jE)(),
              i = Pe(),
              n = Ce(e);
            return (0, Ie.n)({
              scope: {
                id: `${"appid" in e ? e.appid : e.shortcut_name}_${e.id}`,
              },
              mutationFn: (t) => (
                Ge(`Saving note ${t.title}`),
                i.SaveGameNote(e, t.title, t.bbcode)
              ),
              onMutate(t) {
                const i = { ...e, title: t.title, content: t.bbcode };
                return $e(r, n, (e) => e.map((e) => (e.id == i.id ? i : e))), i;
              },
              onSuccess(e, t, i) {
                $e(r, n, (t) =>
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
            const e = new Ke.n(Je, t.content, (e, t) =>
              l({ title: It(t), bbcode: e }),
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
            })(e, Je.pm_schema),
              u(e);
          }
        }, [l, t.content]);
        const { bDirty: d } = (0, Ve.i)(c, { msAutosaveTimeout: 1e3 * Ft });
        n.useEffect(() => {
          d &&
            !s.current &&
            ((s.current = !0),
            zt.y.ReportTrackedAction("/GameNotes/NoteModified"));
        }, [d]),
          n.useEffect(() => {
            r && c && c.CommitChanges();
          }, [r, c]);
        const m = (0, Tt.R7)().ownerWindow;
        (0, Ut.o4)(
          m.document,
          n.useCallback(
            (e) => {
              "hidden" == e && c.CommitChanges();
            },
            [c],
          ),
        ),
          (0, Ut.l6)(
            window,
            "beforeunload",
            n.useCallback(
              (e) => {
                !lt.TS.IN_STEAMUI &&
                  c.BHasUncomittedChanges() &&
                  (c.CommitChanges(), e.preventDefault());
              },
              [c],
            ),
          );
        const p = (function (e, t) {
            const r = Pe();
            return n.useCallback(
              async (i) => {
                const n = await r.UploadImage(`notes_${e}_images/`, i);
                return t.nodes.cloudimage.create({ src: n });
              },
              [r, e, t],
            );
          })(t.appid, Je.pm_schema),
          B = xe(),
          g = Le(t, B);
        return n.createElement(
          st.Xv,
          { ProcessFileUpload: p, bAllowImageHotLinking: !0 },
          n.createElement(
            "div",
            { className: yt.NoteEditorArea },
            n.createElement(vt, { error: i, dismissError: () => a(void 0) }),
            n.createElement(ft, {
              deleteNote: g.mutate,
              hidden: r,
              pmState: c,
            }),
            !o && n.createElement(qt, { note: t, bDirty: d }),
          ),
        );
      }
      function vt(e) {
        const { error: t, dismissError: r } = e;
        return t
          ? n.createElement(
              Ct.EN,
              { active: !0 },
              n.createElement(Ct.o0, {
                bAlertDialog: !0,
                strTitle: (0, Ae.we)("#Error_Generic"),
                strDescription: (0, Ae.we)(
                  "#UserGameNotes_ErrorSavingNotes",
                  t,
                ),
                closeModal: r,
              }),
            )
          : null;
      }
      function qt(e) {
        const { note: t, bDirty: r } = e,
          [i, a, s] = (0, Ut.uD)(!1),
          o = "single" == n.useContext(Ne).mode,
          l = xe(),
          { mutate: c, isPending: u } = Le(t, l),
          d = n.useCallback(() => {
            !r && t.not_persisted ? c() : a();
          }, [r, t, c, a]);
        return n.createElement(
          "div",
          { className: yt.NoteActions },
          i &&
            n.createElement(Ot, {
              note: t,
              closeModal: s,
              deleteNote: c,
              deletePending: u,
            }),
          n.createElement(
            Rt.he,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            n.createElement(
              St.$n,
              { onClick: d },
              n.createElement(ut.lMJ, null),
            ),
          ),
          o && n.createElement(jt, { bDirty: r }),
        );
      }
      function jt(e) {
        const { bDirty: t } = e,
          r = xe();
        return t
          ? n.createElement(
              St.jn,
              { onClick: () => r(), className: yt.CloseWindowButton },
              (0, Ae.we)("#Button_SaveAndClose"),
            )
          : n.createElement(
              St.$n,
              { onClick: () => r(), className: yt.CloseWindowButton },
              (0, Ae.we)("#Button_Close"),
            );
      }
      function Ot(e) {
        const { note: t, closeModal: r, deleteNote: i, deletePending: a } = e;
        return n.createElement(
          Ct.EN,
          { active: !0 },
          n.createElement(Ct.o0, {
            strTitle: (0, Ae.we)("#UserGameNotes_DeleteNote"),
            strDescription: (0, Ae.we)("#UserGameNotes_PromptDelete"),
            onOK: () => i(),
            bOKDisabled: a,
            strOKButtonText: (0, Ae.we)("#Button_Delete"),
            closeModal: r,
          }),
        );
      }
      function It(e) {
        let t = "";
        for (let r = 0; r < e.content.childCount; r++) {
          const i = e.content.child(r);
          if (i.isText) t += i.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = It(i)), t.length > 4)) return t;
          }
        }
        return t.trim();
      }
      var Nt = r(58632),
        Et = r.n(Nt),
        xt = r(37403),
        Pt = r(30470);
      let At;
      const Gt = 864e5;
      function kt(e) {
        return `appinfo_${e}_${Pt.TS.LANGUAGE}`;
      }
      function Dt(e) {
        return Boolean(e && Date.now() - e.timeCached < Gt);
      }
      function Lt(e) {
        const t = (0, s.KV)(),
          r = (0, s.rX)();
        return (0, je.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                At ||
                  (At = new (Et())(
                    async (r) => {
                      const n = new Map();
                      (await Promise.all(r.map((e) => t.GetObject(kt(e)))))
                        .filter(Dt)
                        .forEach(({ value: e }) => n.set(e.appid, e));
                      const a = r.slice().filter((e) => !n.has(e));
                      if (a.length) {
                        const r = u.w.Init(xt._z);
                        r.Body().set_language((0, i.sf)(Pt.TS.LANGUAGE)),
                          r.Body().set_appids(a);
                        const s = await xt.BE.GetApps(e, r);
                        if (1 != s.GetEResult()) throw s.GetErrorMessage();
                        s.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(kt(e.appid), {
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
                At
              );
            })(t, r).load(e),
          staleTime: Gt,
          enabled: !!e,
        }).data;
      }
      function $t(e) {
        const { bStandalonePage: t } = e,
          r = (0, a.W5)(),
          i = He(
            "appid" in r.params && Number(r.params.appid),
            "shortcut_name" in r.params && r.params.shortcut_name,
          ),
          s = (0, a.W6)(),
          o = (function (e) {
            const t = (0, Oe.jE)(),
              r = Pe();
            return n.useCallback(() => {
              const i = (0, Ae.we)("#UserGameNotes_UntitledNote_Title"),
                n = r.NewNote(e, i);
              return $e(t, e, (e) => [...e, n]), n.id;
            }, [t, r, e]);
          })(i),
          l = n.useRef(void 0),
          { data: c } = (function (e) {
            const t = Pe();
            return (0, je.I)(De(t, e));
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
            c && 0 == c.length && Qt(s, i, o(), !0);
          }, [s, i, c, o]),
          n.useEffect(() => {
            d && Qt(s, i, void 0, !0);
          }, [s, i, d]);
        const m = n.createElement(
          Rt.he,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          n.createElement(
            St.$n,
            {
              className: yt.NewNoteButton,
              onClick: () => {
                const e = o();
                Qt(s, i, e);
              },
            },
            n.createElement(ut.qY3, null),
          ),
        );
        return c
          ? n.createElement(Ht, {
              noteParent: i,
              notes: c,
              activeNoteID: null == u ? void 0 : u.id,
              actions: m,
              bStandalonePage: t,
            })
          : null;
      }
      function Ht(e) {
        const {
            noteParent: t,
            notes: r,
            activeNoteID: i,
            actions: s,
            bStandalonePage: o,
          } = e,
          [l, c] = (0, gt.SP)("NotesListCollapsed", !1),
          u = n.useContext(Ne).bPinnedView,
          d = (0, lt.Qn)(),
          m = (0, a.W5)(),
          p = (0, St.vn)(m.params.noteid ? "ActivePage" : "PageList"),
          B = r.map((e) => {
            var r;
            return {
              title:
                (null === (r = e.title) || void 0 === r ? void 0 : r.length) > 0
                  ? e.title
                  : (0, Ae.we)("#UserGameNotes_Untitled"),
              identifier: e.id,
              content: n.createElement(Vt, { noteParent: t, note: e }),
              pageClassName: yt.NotePage,
              hideTitle: !0,
            };
          }),
          g = (0, a.W6)(),
          b = n.useCallback((e) => Qt(g, t, e), [g, t]),
          y = lt.TS.IN_STEAMUI
            ? (0, Ae.we)("#UserGameNotes_NotesList")
            : n.createElement(Kt, { noteParent: t });
        return d && o
          ? n.createElement(St.Bv, {
              title: y,
              pages: B,
              className: (0, Bt.A)(
                yt.NotesPagedSettings,
                u && yt.PinnedView,
                p,
              ),
              page: i,
              onPageRequested: b,
              bottomControls: s,
              hideList: l,
              toggleHideList: u || d ? void 0 : () => c(!l),
            })
          : n.createElement(St.O7, {
              title: y,
              pages: B,
              className: (0, Bt.A)(
                yt.NotesPagedSettings,
                u && yt.PinnedView,
                p,
              ),
              page: i,
              onPageRequested: b,
              bottomControls: s,
              hideList: l,
              toggleHideList: u || d ? void 0 : () => c(!l),
            });
      }
      function Kt(e) {
        const { noteParent: t } = e,
          r = Lt("appid" in t ? t.appid : void 0);
        let i;
        return (
          (i = "appid" in t ? (null == r ? void 0 : r.name) : t.shortcut),
          n.createElement(
            n.Fragment,
            null,
            (0, Ae.we)("#UserGameNotes_NotesForGame", i),
          )
        );
      }
      function Vt(e) {
        const { noteParent: t, note: r } = e,
          i = St.v$(),
          s = (0, a.W6)(),
          o = n.useCallback(() => Qt(s, t), [s, t]);
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(St._Z, { onActivate: o }),
          n.createElement(Wt, { note: r, hidden: !i }),
        );
      }
      function Qt(e, t, r, i = !1) {
        let n;
        (n =
          "appid" in t
            ? o.AppNotes(t.appid, r)
            : o.ShortcutNotes(t.shortcut, r)),
          i ? e.replace(n, e.location.state) : e.push(n, e.location.state);
      }
      var Yt = r(17083),
        Xt = r(22797);
      function Zt() {
        const { data: e, isLoading: t } = (function () {
            const e = Pe();
            return (0, je.I)({
              queryKey: ["GameNotes", "GamesWithNotes"],
              queryFn: () => e.GetGamesWithNotes(),
              staleTime: 18e5,
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
          ? n.createElement(Xt.t, { msDelayAppear: 300 })
          : n.createElement(
              "div",
              null,
              n.createElement(
                "h1",
                null,
                (0, Ae.we)("#UserGameNotes_NotesList"),
              ),
              n.createElement(
                "ul",
                null,
                r.map((e) =>
                  n.createElement(Jt, {
                    key: e.appid || e.shortcut_name,
                    game: e,
                  }),
                ),
              ),
            );
      }
      function Jt(e) {
        const { game: t } = e;
        return n.createElement(
          "li",
          null,
          n.createElement(
            Yt.N_,
            {
              to:
                ((r = t.appid
                  ? { appid: t.appid }
                  : { shortcut: t.shortcut_name }),
                "appid" in r
                  ? o.AppNotes(r.appid, i)
                  : o.ShortcutNotes(r.shortcut, i)),
            },
            t.appid ? n.createElement(er, { appid: t.appid }) : t.shortcut_name,
          ),
        );
        var r, i;
      }
      function er(e) {
        const { appid: t } = e,
          r = Lt(t);
        return null == r ? void 0 : r.name;
      }
      function tr(e, t, r = {}) {
        const { bIsPublic: i = !0 } = r,
          n = { unAppID: e, strMachineName: t, bIsPublic: i },
          a = (0, s.KV)();
        return (0, Ie.n)({
          mutationFn: async ({ files: e }) => {
            const t = await (async function (e, t, r, i) {
              const n = await (async function (e, t, r) {
                const i = u.w.Init(Q);
                i.Body().set_appid(t.unAppID),
                  i.Body().set_machine_name(t.strMachineName),
                  i.Body().set_files_to_upload(r.slice());
                const n = await Me.BeginAppUploadBatch(e, i);
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
                  const n = u.w.Init(Z);
                  n.Body().set_appid(t.unAppID),
                    n.Body().set_batch_id(r),
                    n.Body().set_batch_eresult(i ? 1 : 2),
                    Me.CompleteAppUploadBatch(e, n);
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
                          const s = u.w.Init(_);
                          s.Body().set_appid(t.unAppID),
                            s.Body().add_platforms_to_sync("All"),
                            s.Body().set_upload_batch_id(r),
                            s.Body().set_is_public(t.bIsPublic),
                            s.Body().set_filename(i),
                            s.Body().set_file_size(n),
                            s.Body().set_file_sha(a);
                          const o = await Me.BeginHTTPUpload(e, s);
                          if (!o.BSuccess())
                            throw `Error in BeginHTTPUpload: ${o.GetErrorMessage()}`;
                          return o.Body().toObject();
                        })(e, t, r, i.filename, n.byteLength, a),
                        o = `https://${s.url_host}${s.url_path}`;
                      let c = !1;
                      try {
                        const e = s.request_headers.map(
                          ({ name: e, value: t }) => [e, t],
                        );
                        c = (
                          await fetch(o, {
                            method: "PUT",
                            headers: e,
                            mode: "cors",
                            body: i.content,
                          })
                        ).ok;
                      } catch {}
                      return await (async function (e, t, r, i, n) {
                        const a = u.w.Init(h);
                        a.Body().set_appid(t.unAppID),
                          a.Body().set_transfer_succeeded(n),
                          a.Body().set_filename(r),
                          a.Body().set_file_sha(i);
                        const s = await Me.CommitHTTPUpload(e, a);
                        if (!s.BSuccess())
                          throw `Error in CommitHTTPUpload: ${s.GetErrorMessage()}`;
                        return s.Body().file_committed();
                      })(e, t, i.filename, a, c);
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
      function rr(e) {
        const t = (function () {
          const e = (0, s.TR)(),
            { mutateAsync: t } = tr(i.oe, "Steam Community Web Interface", {
              bIsPublic: !0,
            }),
            r = n.useCallback(
              (e, r) => t({ files: [{ filename: e, content: r }] }),
              [t],
            ),
            a = n.useRef({ steamInterface: e, uploadFile: r });
          a.current.uploadFile = r;
          const [o] = n.useState(() => new qe(a.current));
          return o;
        })();
        return n.createElement(
          Ee,
          { mode: "page", store: t },
          n.createElement(
            a.dO,
            null,
            n.createElement(
              a.qh,
              { path: o.List() },
              n.createElement(Zt, null),
            ),
            n.createElement(
              a.qh,
              { path: o.AppNotes(":appid", ":noteid?") },
              n.createElement($t, null),
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

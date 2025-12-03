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
        TemplateMediaTitle: "_DE_6XhnSqABczbJ55rNJ",
        Question: "_2Hj1tfDjpLvBVTHTqAVcYB",
        Answer: "syKgzmlrcUIJHIBfWsn4h",
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
      r.r(t), r.d(t, { default: () => ir });
      var i = r(22837),
        a = r(90626),
        n = r(92757),
        s = r(23809);
      const o = {
        List: () => "/notes/list",
        AppNotes: (e, t) => `/notes/app/${e}/${null != t ? t : ""}`,
        ShortcutNotes: (e, t) => `/notes/shortcut/${e}/${null != t ? t : ""}`,
      };
      var l,
        c,
        u,
        d,
        m = r(37085),
        p = r(20737),
        g = r(81393),
        B = r(56545),
        _ = r(80613),
        b = r.n(_),
        y = r(89068);
      !(function (e) {
        (e[(e.k_ECloudPendingRemoteOperationNone = 0)] =
          "k_ECloudPendingRemoteOperationNone"),
          (e[(e.k_ECloudPendingRemoteOperationAppSessionActive = 1)] =
            "k_ECloudPendingRemoteOperationAppSessionActive"),
          (e[(e.k_ECloudPendingRemoteOperationUploadInProgress = 2)] =
            "k_ECloudPendingRemoteOperationUploadInProgress"),
          (e[(e.k_ECloudPendingRemoteOperationUploadPending = 3)] =
            "k_ECloudPendingRemoteOperationUploadPending"),
          (e[(e.k_ECloudPendingRemoteOperationAppSessionSuspended = 4)] =
            "k_ECloudPendingRemoteOperationAppSessionSuspended");
      })(l || (l = {})),
        (function (e) {
          (e[(e.k_ESteamDeckKeyboardLayout_QWERTY = 0)] =
            "k_ESteamDeckKeyboardLayout_QWERTY"),
            (e[(e.k_ESteamDeckKeyboardLayout_Bulgarian = 1)] =
              "k_ESteamDeckKeyboardLayout_Bulgarian"),
            (e[(e.k_ESteamDeckKeyboardLayout_Chinese_Simplified = 2)] =
              "k_ESteamDeckKeyboardLayout_Chinese_Simplified"),
            (e[(e.k_ESteamDeckKeyboardLayout_Chinese_Traditional = 3)] =
              "k_ESteamDeckKeyboardLayout_Chinese_Traditional"),
            (e[(e.k_ESteamDeckKeyboardLayout_Czech = 4)] =
              "k_ESteamDeckKeyboardLayout_Czech"),
            (e[(e.k_ESteamDeckKeyboardLayout_Danish = 5)] =
              "k_ESteamDeckKeyboardLayout_Danish"),
            (e[(e.k_ESteamDeckKeyboardLayout_Finnish = 6)] =
              "k_ESteamDeckKeyboardLayout_Finnish"),
            (e[(e.k_ESteamDeckKeyboardLayout_French = 7)] =
              "k_ESteamDeckKeyboardLayout_French"),
            (e[(e.k_ESteamDeckKeyboardLayout_German = 8)] =
              "k_ESteamDeckKeyboardLayout_German"),
            (e[(e.k_ESteamDeckKeyboardLayout_Greek = 9)] =
              "k_ESteamDeckKeyboardLayout_Greek"),
            (e[(e.k_ESteamDeckKeyboardLayout_Hungarian = 10)] =
              "k_ESteamDeckKeyboardLayout_Hungarian"),
            (e[(e.k_ESteamDeckKeyboardLayout_Italian = 11)] =
              "k_ESteamDeckKeyboardLayout_Italian"),
            (e[(e.k_ESteamDeckKeyboardLayout_Japanese = 12)] =
              "k_ESteamDeckKeyboardLayout_Japanese"),
            (e[(e.k_ESteamDeckKeyboardLayout_Korean = 13)] =
              "k_ESteamDeckKeyboardLayout_Korean"),
            (e[(e.k_ESteamDeckKeyboardLayout_Norwegian = 14)] =
              "k_ESteamDeckKeyboardLayout_Norwegian"),
            (e[(e.k_ESteamDeckKeyboardLayout_Polish = 15)] =
              "k_ESteamDeckKeyboardLayout_Polish"),
            (e[(e.k_ESteamDeckKeyboardLayout_Portuguese = 16)] =
              "k_ESteamDeckKeyboardLayout_Portuguese"),
            (e[(e.k_ESteamDeckKeyboardLayout_Romanian = 17)] =
              "k_ESteamDeckKeyboardLayout_Romanian"),
            (e[(e.k_ESteamDeckKeyboardLayout_Russian = 18)] =
              "k_ESteamDeckKeyboardLayout_Russian"),
            (e[(e.k_ESteamDeckKeyboardLayout_Spanish = 19)] =
              "k_ESteamDeckKeyboardLayout_Spanish"),
            (e[(e.k_ESteamDeckKeyboardLayout_Swedish = 20)] =
              "k_ESteamDeckKeyboardLayout_Swedish"),
            (e[(e.k_ESteamDeckKeyboardLayout_Thai = 21)] =
              "k_ESteamDeckKeyboardLayout_Thai"),
            (e[(e.k_ESteamDeckKeyboardLayout_Turkish_F = 22)] =
              "k_ESteamDeckKeyboardLayout_Turkish_F"),
            (e[(e.k_ESteamDeckKeyboardLayout_Turkish_Q = 23)] =
              "k_ESteamDeckKeyboardLayout_Turkish_Q"),
            (e[(e.k_ESteamDeckKeyboardLayout_Ukrainian = 24)] =
              "k_ESteamDeckKeyboardLayout_Ukrainian"),
            (e[(e.k_ESteamDeckKeyboardLayout_Vietnamese = 25)] =
              "k_ESteamDeckKeyboardLayout_Vietnamese"),
            (e[(e.k_ESteamDeckKeyboardLayout_QWERTY_International = 26)] =
              "k_ESteamDeckKeyboardLayout_QWERTY_International"),
            (e[(e.k_ESteamDeckKeyboardLayout_Dvorak = 27)] =
              "k_ESteamDeckKeyboardLayout_Dvorak"),
            (e[(e.k_ESteamDeckKeyboardLayout_Colemak = 28)] =
              "k_ESteamDeckKeyboardLayout_Colemak"),
            (e[
              (e.k_ESteamDeckKeyboardLayout_Bulgarian_Phonetic_Traditional = 29)
            ] = "k_ESteamDeckKeyboardLayout_Bulgarian_Phonetic_Traditional"),
            (e[(e.k_ESteamDeckKeyboardLayout_Bulgarian_Phonetic = 30)] =
              "k_ESteamDeckKeyboardLayout_Bulgarian_Phonetic"),
            (e[
              (e.k_ESteamDeckKeyboardLayout_Chinese_Traditional_Bopomofo = 31)
            ] = "k_ESteamDeckKeyboardLayout_Chinese_Traditional_Bopomofo"),
            (e[
              (e.k_ESteamDeckKeyboardLayout_Chinese_Traditional_Cangjie = 32)
            ] = "k_ESteamDeckKeyboardLayout_Chinese_Traditional_Cangjie"),
            (e[(e.k_ESteamDeckKeyboardLayout_Japanese_Kana = 33)] =
              "k_ESteamDeckKeyboardLayout_Japanese_Kana"),
            (e[(e.k_ESteamDeckKeyboardLayout_Chinese_Traditional_Quick = 34)] =
              "k_ESteamDeckKeyboardLayout_Chinese_Traditional_Quick"),
            (e[(e.k_ESteamDeckKeyboardLayout_Indonesian = 35)] =
              "k_ESteamDeckKeyboardLayout_Indonesian");
        })(c || (c = {}));
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      class M extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.operation || y.Sg(M.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  operation: { n: 1, br: y.qM.readEnum, bw: y.gp.writeEnum },
                  machine_name: {
                    n: 2,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  client_id: {
                    n: 3,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  time_last_updated: {
                    n: 4,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  os_type: { n: 5, br: y.qM.readInt32, bw: y.gp.writeInt32 },
                  device_type: {
                    n: 6,
                    br: y.qM.readInt32,
                    bw: y.gp.writeInt32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = y.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_PendingRemoteOperation";
        }
      }
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      class w extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.appid || y.Sg(w.M()),
            _.Message.initialize(this, e, 0, -1, [9], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  ugcid: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  filename: { n: 3, br: y.qM.readString, bw: y.gp.writeString },
                  timestamp: {
                    n: 4,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  file_size: {
                    n: 5,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  url: { n: 6, br: y.qM.readString, bw: y.gp.writeString },
                  steamid_creator: {
                    n: 7,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  flags: { n: 8, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  platforms_to_sync: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: y.qM.readString,
                    bw: y.gp.writeRepeatedString,
                  },
                  file_sha: {
                    n: 10,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  compressed_file_size: {
                    n: 11,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = y.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_UserFile";
        }
      }
      class f extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.appid || y.Sg(f.M()),
            _.Message.initialize(this, e, 0, -1, [6, 7, 8], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  file_size: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  filename: { n: 3, br: y.qM.readString, bw: y.gp.writeString },
                  file_sha: { n: 4, br: y.qM.readString, bw: y.gp.writeString },
                  is_public: { n: 5, br: y.qM.readBool, bw: y.gp.writeBool },
                  platforms_to_sync: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: y.qM.readString,
                    bw: y.gp.writeRepeatedString,
                  },
                  request_headers_names: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: y.qM.readString,
                    bw: y.gp.writeRepeatedString,
                  },
                  request_headers_values: {
                    n: 8,
                    r: !0,
                    q: !0,
                    br: y.qM.readString,
                    bw: y.gp.writeRepeatedString,
                  },
                  upload_batch_id: {
                    n: 9,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = y.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginHTTPUpload_Request";
        }
      }
      class S extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.ugcid || y.Sg(S.M()),
            _.Message.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  ugcid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  timestamp: {
                    n: 2,
                    br: y.qM.readFixed32,
                    bw: y.gp.writeFixed32,
                  },
                  url_host: { n: 3, br: y.qM.readString, bw: y.gp.writeString },
                  url_path: { n: 4, br: y.qM.readString, bw: y.gp.writeString },
                  use_https: { n: 5, br: y.qM.readBool, bw: y.gp.writeBool },
                  request_headers: { n: 6, c: h, r: !0, q: !0 },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = y.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginHTTPUpload_Response";
        }
      }
      class h extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.name || y.Sg(h.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  name: { n: 1, br: y.qM.readString, bw: y.gp.writeString },
                  value: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = y.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginHTTPUpload_Response_HTTPHeaders";
        }
      }
      class z extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.transfer_succeeded || y.Sg(z.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  transfer_succeeded: {
                    n: 1,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  appid: { n: 2, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  file_sha: { n: 3, br: y.qM.readString, bw: y.gp.writeString },
                  filename: { n: 4, br: y.qM.readString, bw: y.gp.writeString },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = y.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitHTTPUpload_Request";
        }
      }
      class C extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.file_committed || y.Sg(C.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  file_committed: {
                    n: 1,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = y.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitHTTPUpload_Response";
        }
      }
      class R extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.appid || y.Sg(R.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  file_size: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  filename: { n: 3, br: y.qM.readString, bw: y.gp.writeString },
                  file_sha: { n: 4, br: y.qM.readString, bw: y.gp.writeString },
                  content_type: {
                    n: 5,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = y.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginUGCUpload_Request";
        }
      }
      class U extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.storage_system || y.Sg(U.M()),
            _.Message.initialize(this, e, 0, -1, [7], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  storage_system: {
                    n: 1,
                    br: y.qM.readEnum,
                    bw: y.gp.writeEnum,
                  },
                  ugcid: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  timestamp: {
                    n: 3,
                    br: y.qM.readFixed32,
                    bw: y.gp.writeFixed32,
                  },
                  url_host: { n: 4, br: y.qM.readString, bw: y.gp.writeString },
                  url_path: { n: 5, br: y.qM.readString, bw: y.gp.writeString },
                  use_https: { n: 6, br: y.qM.readBool, bw: y.gp.writeBool },
                  request_headers: { n: 7, c: T, r: !0, q: !0 },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = y.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginUGCUpload_Response";
        }
      }
      class T extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.name || y.Sg(T.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  name: { n: 1, br: y.qM.readString, bw: y.gp.writeString },
                  value: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = y.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginUGCUpload_Response_HTTPHeaders";
        }
      }
      class F extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.transfer_succeeded || y.Sg(F.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  transfer_succeeded: {
                    n: 1,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  appid: { n: 2, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  ugcid: {
                    n: 3,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = y.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitUGCUpload_Request";
        }
      }
      class E extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.file_committed || y.Sg(E.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  file_committed: {
                    n: 1,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = y.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitUGCUpload_Response";
        }
      }
      class W extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.ugcid || y.Sg(W.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  ugcid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  appid: { n: 2, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = y.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetFileDetails_Request";
        }
      }
      class q extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.details || y.Sg(q.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  details: { n: 1, c: w },
                  rangecheck_host: {
                    n: 2,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = y.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetFileDetails_Response";
        }
      }
      class v extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.app_id || y.Sg(v.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  app_id: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  file_name: {
                    n: 2,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = y.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetSingleFileInfo_Request";
        }
      }
      class O extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.app_id || y.Sg(O.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  app_id: { n: 2, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  file_name: {
                    n: 3,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  sha_file: { n: 4, br: y.qM.readBytes, bw: y.gp.writeBytes },
                  time_stamp: {
                    n: 5,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  raw_file_size: {
                    n: 6,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  is_explicit_delete: {
                    n: 7,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = y.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetSingleFileInfo_Response";
        }
      }
      class j extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.appid || y.Sg(j.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  extended_details: {
                    n: 2,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  count: { n: 3, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  start_index: {
                    n: 4,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = y.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserFiles_Request";
        }
      }
      class I extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.files || y.Sg(I.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  files: { n: 1, c: w, r: !0, q: !0 },
                  total_files: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = y.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserFiles_Response";
        }
      }
      class N extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.filename || y.Sg(N.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  filename: { n: 1, br: y.qM.readString, bw: y.gp.writeString },
                  appid: { n: 2, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  upload_batch_id: {
                    n: 3,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = y.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_Delete_Request";
        }
      }
      class k extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_Delete_Response";
        }
      }
      class L extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new L();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetClientEncryptionKey_Request";
        }
      }
      class x extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.key || y.Sg(x.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  key: { n: 1, br: y.qM.readBytes, bw: y.gp.writeBytes },
                  crc: { n: 2, br: y.qM.readInt32, bw: y.gp.writeInt32 },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = y.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetClientEncryptionKey_Response";
        }
      }
      class D extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.steamid || y.Sg(D.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  url: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
                  success: { n: 3, br: y.qM.readBool, bw: y.gp.writeBool },
                  http_status_code: {
                    n: 4,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  expected_bytes: {
                    n: 5,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  received_bytes: {
                    n: 6,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  duration: { n: 7, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = y.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CDNReport_Notification";
        }
      }
      class A extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.host || y.Sg(A.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  host: { n: 1, br: y.qM.readString, bw: y.gp.writeString },
                  path: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
                  is_upload: { n: 3, br: y.qM.readBool, bw: y.gp.writeBool },
                  success: { n: 4, br: y.qM.readBool, bw: y.gp.writeBool },
                  http_status_code: {
                    n: 5,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  bytes_expected: {
                    n: 6,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  bytes_actual: {
                    n: 7,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  duration_ms: {
                    n: 8,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  cellid: { n: 9, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  proxied: { n: 10, br: y.qM.readBool, bw: y.gp.writeBool },
                  ipv6_local: { n: 11, br: y.qM.readBool, bw: y.gp.writeBool },
                  ipv6_remote: { n: 12, br: y.qM.readBool, bw: y.gp.writeBool },
                  time_to_connect_ms: {
                    n: 13,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  time_to_send_req_ms: {
                    n: 14,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  time_to_first_byte_ms: {
                    n: 15,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  time_to_last_byte_ms: {
                    n: 16,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = y.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ExternalStorageTransferReport_Notification";
        }
      }
      class P extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.appid || y.Sg(P.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  client_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  machine_name: {
                    n: 3,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  ignore_pending_operations: {
                    n: 4,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  os_type: { n: 5, br: y.qM.readInt32, bw: y.gp.writeInt32 },
                  device_type: {
                    n: 6,
                    br: y.qM.readInt32,
                    bw: y.gp.writeInt32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = y.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppLaunchIntent_Request";
        }
      }
      class G extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.pending_remote_operations || y.Sg(G.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  pending_remote_operations: { n: 1, c: M, r: !0, q: !0 },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = y.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppLaunchIntent_Response";
        }
      }
      class K extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.appid || y.Sg(K.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  client_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  uploads_completed: {
                    n: 3,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  uploads_required: {
                    n: 4,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = y.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppExitSyncDone_Notification";
        }
      }
      class $ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.appid || y.Sg($.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = y.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT($.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientGetAppQuotaUsage_Request";
        }
      }
      class H extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.existing_files || y.Sg(H.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  existing_files: {
                    n: 1,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  existing_bytes: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  max_num_files: {
                    n: 3,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  max_num_bytes: {
                    n: 4,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = y.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientGetAppQuotaUsage_Response";
        }
      }
      class Q extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.file_name || y.Sg(Q.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  file_name: {
                    n: 1,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  sha_file: { n: 2, br: y.qM.readBytes, bw: y.gp.writeBytes },
                  time_stamp: {
                    n: 3,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  raw_file_size: {
                    n: 4,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  persist_state: {
                    n: 5,
                    br: y.qM.readEnum,
                    bw: y.gp.writeEnum,
                  },
                  platforms_to_sync: {
                    n: 6,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  path_prefix_index: {
                    n: 7,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  machine_name_index: {
                    n: 8,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = y.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppFileInfo";
        }
      }
      class V extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.appid || y.Sg(V.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  synced_change_number: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = y.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetAppFileChangelist_Request";
        }
      }
      class X extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.current_change_number || y.Sg(X.M()),
            _.Message.initialize(this, e, 0, -1, [2, 4, 5], null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  current_change_number: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  files: { n: 2, c: Q, r: !0, q: !0 },
                  is_only_delta: {
                    n: 3,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  path_prefixes: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: y.qM.readString,
                    bw: y.gp.writeRepeatedString,
                  },
                  machine_names: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: y.qM.readString,
                    bw: y.gp.writeRepeatedString,
                  },
                  app_buildid_hwm: {
                    n: 6,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = y.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetAppFileChangelist_Response";
        }
      }
      class Y extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.url_host || y.Sg(Y.M()),
            _.Message.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  url_host: { n: 1, br: y.qM.readString, bw: y.gp.writeString },
                  url_path: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
                  use_https: { n: 3, br: y.qM.readBool, bw: y.gp.writeBool },
                  http_method: {
                    n: 4,
                    br: y.qM.readInt32,
                    bw: y.gp.writeInt32,
                  },
                  request_headers: { n: 5, c: J, r: !0, q: !0 },
                  block_offset: {
                    n: 6,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  block_length: {
                    n: 7,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  explicit_body_data: {
                    n: 8,
                    br: y.qM.readBytes,
                    bw: y.gp.writeBytes,
                  },
                  may_parallelize: {
                    n: 9,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = y.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ClientCloudFileUploadBlockDetails";
        }
      }
      class J extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.name || y.Sg(J.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  name: { n: 1, br: y.qM.readString, bw: y.gp.writeString },
                  value: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = y.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ClientCloudFileUploadBlockDetails_HTTPHeaders";
        }
      }
      class Z extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.appid || y.Sg(Z.M()),
            _.Message.initialize(this, e, 0, -1, [3, 4], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  machine_name: {
                    n: 2,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  files_to_upload: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: y.qM.readString,
                    bw: y.gp.writeRepeatedString,
                  },
                  files_to_delete: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: y.qM.readString,
                    bw: y.gp.writeRepeatedString,
                  },
                  client_id: {
                    n: 5,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  app_build_id: {
                    n: 6,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = y.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginAppUploadBatch_Request";
        }
      }
      class ee extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.batch_id || y.Sg(ee.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  batch_id: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  app_change_number: {
                    n: 4,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = y.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginAppUploadBatch_Response";
        }
      }
      class te extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.appid || y.Sg(te.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  batch_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  batch_eresult: {
                    n: 3,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = y.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CompleteAppUploadBatch_Notification";
        }
      }
      class re extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.appid || y.Sg(re.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  batch_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  batch_eresult: {
                    n: 3,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = y.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CompleteAppUploadBatch_Request";
        }
      }
      class ie extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ie();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CompleteAppUploadBatch_Response";
        }
      }
      class ae extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.appid || y.Sg(ae.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  app_change_number: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = y.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppCloudStateChange_Notification";
        }
      }
      class ne extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.appid || y.Sg(ne.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  file_size: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  raw_file_size: {
                    n: 3,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  file_sha: { n: 4, br: y.qM.readBytes, bw: y.gp.writeBytes },
                  time_stamp: {
                    n: 5,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  filename: { n: 6, br: y.qM.readString, bw: y.gp.writeString },
                  platforms_to_sync: {
                    n: 7,
                    d: 4294967295,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  cell_id: { n: 9, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  can_encrypt: { n: 10, br: y.qM.readBool, bw: y.gp.writeBool },
                  is_shared_file: {
                    n: 11,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  deprecated_realm: {
                    n: 12,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  upload_batch_id: {
                    n: 13,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = y.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientBeginFileUpload_Request";
        }
      }
      class se extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.encrypt_file || y.Sg(se.M()),
            _.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  encrypt_file: { n: 1, br: y.qM.readBool, bw: y.gp.writeBool },
                  block_requests: { n: 2, c: Y, r: !0, q: !0 },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = y.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientBeginFileUpload_Response";
        }
      }
      class oe extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.transfer_succeeded || y.Sg(oe.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  transfer_succeeded: {
                    n: 1,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  appid: { n: 2, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  file_sha: { n: 3, br: y.qM.readBytes, bw: y.gp.writeBytes },
                  filename: { n: 4, br: y.qM.readString, bw: y.gp.writeString },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = y.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientCommitFileUpload_Request";
        }
      }
      class le extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.file_committed || y.Sg(le.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  file_committed: {
                    n: 1,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = y.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientCommitFileUpload_Response";
        }
      }
      class ce extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.appid || y.Sg(ce.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  filename: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
                  realm: { n: 3, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  force_proxy: { n: 4, br: y.qM.readBool, bw: y.gp.writeBool },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = y.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientFileDownload_Request";
        }
      }
      class ue extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.appid || y.Sg(ue.M()),
            _.Message.initialize(this, e, 0, -1, [10], null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  file_size: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  raw_file_size: {
                    n: 3,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  sha_file: { n: 4, br: y.qM.readBytes, bw: y.gp.writeBytes },
                  time_stamp: {
                    n: 5,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  is_explicit_delete: {
                    n: 6,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  url_host: { n: 7, br: y.qM.readString, bw: y.gp.writeString },
                  url_path: { n: 8, br: y.qM.readString, bw: y.gp.writeString },
                  use_https: { n: 9, br: y.qM.readBool, bw: y.gp.writeBool },
                  request_headers: { n: 10, c: de, r: !0, q: !0 },
                  encrypted: { n: 11, br: y.qM.readBool, bw: y.gp.writeBool },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = y.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(ue.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientFileDownload_Response";
        }
      }
      class de extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.name || y.Sg(de.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  name: { n: 1, br: y.qM.readString, bw: y.gp.writeString },
                  value: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = y.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientFileDownload_Response_HTTPHeaders";
        }
      }
      class me extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.appid || y.Sg(me.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  filename: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
                  is_explicit_delete: {
                    n: 3,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  upload_batch_id: {
                    n: 4,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = y.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(me.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientDeleteFile_Request";
        }
      }
      class pe extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new pe();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientDeleteFile_Response";
        }
      }
      class ge extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.appid || y.Sg(ge.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  chose_local_files: {
                    n: 2,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = y.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(ge.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientConflictResolution_Notification";
        }
      }
      class Be extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.appid || y.Sg(Be.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  client_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  machine_name: {
                    n: 3,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  cloud_sync_completed: {
                    n: 4,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = y.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Be.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionSuspend_Request";
        }
      }
      class _e extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new _e();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionSuspend_Response";
        }
      }
      class be extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.appid || y.Sg(be.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  client_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = y.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionResume_Request";
        }
      }
      class ye extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (b().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionResume_Response";
        }
      }
      class Me extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.client_id || y.Sg(Me.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  client_id: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = y.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Me.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientLogUploadCheck_Notification";
        }
      }
      class we extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.request_id || y.Sg(we.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  request_id: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = y.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(we.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientLogUploadRequest_Notification";
        }
      }
      class fe extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.client_id || y.Sg(fe.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  client_id: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  request_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = y.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(fe.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientLogUploadComplete_Notification";
        }
      }
      class Se extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.app_id || y.Sg(Se.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  app_id: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  file_name: {
                    n: 2,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = y.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Se.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ShareFile_Request";
        }
      }
      class he extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.hcontent || y.Sg(he.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  hcontent: {
                    n: 1,
                    d: "18446744073709551615",
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = y.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(he.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ShareFile_Response";
        }
      }
      !(function (e) {
        (e.ClientLogUploadCheck = function (e, t) {
          return e.SendNotification(
            "Cloud.ClientLogUploadCheck#1",
            (0, B.I8)(Me, t),
            { ePrivilege: 1 },
          );
        }),
          (e.ClientLogUploadComplete = function (e, t) {
            return e.SendNotification(
              "Cloud.ClientLogUploadComplete#1",
              (0, B.I8)(fe, t),
              { ePrivilege: 1 },
            );
          }),
          (e.BeginHTTPUpload = function (e, t) {
            return e.SendMsg("Cloud.BeginHTTPUpload#1", (0, B.I8)(f, t), S, {
              ePrivilege: 1,
            });
          }),
          (e.CommitHTTPUpload = function (e, t) {
            return e.SendMsg("Cloud.CommitHTTPUpload#1", (0, B.I8)(z, t), C, {
              ePrivilege: 1,
            });
          }),
          (e.BeginUGCUpload = function (e, t) {
            return e.SendMsg("Cloud.BeginUGCUpload#1", (0, B.I8)(R, t), U, {
              ePrivilege: 1,
            });
          }),
          (e.CommitUGCUpload = function (e, t) {
            return e.SendMsg("Cloud.CommitUGCUpload#1", (0, B.I8)(F, t), E, {
              ePrivilege: 1,
            });
          }),
          (e.GetFileDetails = function (e, t) {
            return e.SendMsg("Cloud.GetFileDetails#1", (0, B.I8)(W, t), q, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetSingleFileInfo = function (e, t) {
            return e.SendMsg("Cloud.GetSingleFileInfo#1", (0, B.I8)(v, t), O, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.ShareFile = function (e, t) {
            return e.SendMsg("Cloud.ShareFile#1", (0, B.I8)(Se, t), he, {
              ePrivilege: 1,
            });
          }),
          (e.EnumerateUserFiles = function (e, t) {
            return e.SendMsg("Cloud.EnumerateUserFiles#1", (0, B.I8)(j, t), I, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.Delete = function (e, t) {
            return e.SendMsg("Cloud.Delete#1", (0, B.I8)(N, t), k, {
              ePrivilege: 1,
            });
          }),
          (e.GetClientEncryptionKey = function (e, t) {
            return e.SendMsg(
              "Cloud.GetClientEncryptionKey#1",
              (0, B.I8)(L, t),
              x,
              { ePrivilege: 1 },
            );
          }),
          (e.CDNReport = function (e, t) {
            return e.SendNotification("Cloud.CDNReport#1", (0, B.I8)(D, t), {
              ePrivilege: 1,
            });
          }),
          (e.ExternalStorageTransferReport = function (e, t) {
            return e.SendNotification(
              "Cloud.ExternalStorageTransferReport#1",
              (0, B.I8)(A, t),
              { ePrivilege: 1 },
            );
          }),
          (e.BeginAppUploadBatch = function (e, t) {
            return e.SendMsg(
              "Cloud.BeginAppUploadBatch#1",
              (0, B.I8)(Z, t),
              ee,
              { ePrivilege: 1 },
            );
          }),
          (e.CompleteAppUploadBatch = function (e, t) {
            return e.SendNotification(
              "Cloud.CompleteAppUploadBatch#1",
              (0, B.I8)(te, t),
              { ePrivilege: 1 },
            );
          }),
          (e.CompleteAppUploadBatchBlocking = function (e, t) {
            return e.SendMsg(
              "Cloud.CompleteAppUploadBatchBlocking#1",
              (0, B.I8)(re, t),
              ie,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientBeginFileUpload = function (e, t) {
            return e.SendMsg(
              "Cloud.ClientBeginFileUpload#1",
              (0, B.I8)(ne, t),
              se,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientCommitFileUpload = function (e, t) {
            return e.SendMsg(
              "Cloud.ClientCommitFileUpload#1",
              (0, B.I8)(oe, t),
              le,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientFileDownload = function (e, t) {
            return e.SendMsg(
              "Cloud.ClientFileDownload#1",
              (0, B.I8)(ce, t),
              ue,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientDeleteFile = function (e, t) {
            return e.SendMsg("Cloud.ClientDeleteFile#1", (0, B.I8)(me, t), pe, {
              ePrivilege: 1,
            });
          }),
          (e.ClientConflictResolution = function (e, t) {
            return e.SendNotification(
              "Cloud.ClientConflictResolution#1",
              (0, B.I8)(ge, t),
              { ePrivilege: 1 },
            );
          }),
          (e.GetAppFileChangelist = function (e, t) {
            return e.SendMsg(
              "Cloud.GetAppFileChangelist#1",
              (0, B.I8)(V, t),
              X,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SuspendAppSession = function (e, t) {
            return e.SendMsg(
              "Cloud.SuspendAppSession#1",
              (0, B.I8)(Be, t),
              _e,
              { ePrivilege: 1 },
            );
          }),
          (e.ResumeAppSession = function (e, t) {
            return e.SendMsg("Cloud.ResumeAppSession#1", (0, B.I8)(be, t), ye, {
              ePrivilege: 1,
            });
          }),
          (e.SignalAppLaunchIntent = function (e, t) {
            return e.SendMsg(
              "Cloud.SignalAppLaunchIntent#1",
              (0, B.I8)(P, t),
              G,
              { ePrivilege: 1 },
            );
          }),
          (e.SignalAppExitSyncDone = function (e, t) {
            return e.SendNotification(
              "Cloud.SignalAppExitSyncDone#1",
              (0, B.I8)(K, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetAppQuotaUsage = function (e, t) {
            return e.SendMsg(
              "Cloud.ClientGetAppQuotaUsage#1",
              (0, B.I8)($, t),
              H,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(u || (u = {})),
        (function (e) {
          (e.NotifyAppStateChangeHandler = {
            name: "CloudClient.NotifyAppStateChange#1",
            request: ae,
          }),
            (e.ClientLogUploadRequestHandler = {
              name: "CloudClient.ClientLogUploadRequest#1",
              request: we,
            });
        })(d || (d = {}));
      var ze = r(60778);
      const Ce = new ze.wd("GameNotesCloudStore").Debug;
      function Re(e) {
        return e.replace(/[!-/:-@ [\\\]^`]/g, "_");
      }
      class Ue {
        FilenameForNotes(e) {
          return "appid" in e
            ? `notes_${Number(e.appid)}`
            : `notes_shortcut_${Re(e.shortcut)}`;
        }
        DirectoryForNoteImages(e) {
          return "appid" in e
            ? `notes_${Number(e.appid)}_images/`
            : `notes_shortcut_${Re(e.shortcut)}_images/`;
        }
        ParseNotesFileName(e) {
          const t = e.match(/^notes_shortcut_([^/]+)$/);
          if (t) return { shortcut: t[1] };
          const r = e.match(/^notes_(\d+)$/);
          return r && parseInt(r[1]) < 2147483647
            ? { appid: parseInt(r[1]) }
            : void 0;
        }
        async GetGameNotesList(e) {
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
        async SaveGameNotes(e, t) {
          const r = { notes: t };
          "shortcut" in e && (r.shortcut_name = e.shortcut);
          const i = JSON.stringify(r, (e, t) =>
            "not_persisted" === e ? void 0 : t,
          );
          return (
            Ce("SaveGameNotes", r),
            await this.WriteNotesFile(this.FilenameForNotes(e), i)
          );
        }
      }
      var Te = r(27650);
      const Fe = new ze.wd("GameNotesCloudStore").Debug;
      class Ee extends Ue {
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
            let a;
            (a =
              "appid" in i
                ? { appid: i.appid }
                : { shortcut_name: i.shortcut }),
              e.push({ ...a, last_modified: r.rtLastModified });
          }
          return e;
        }
        async UploadImage(e, t) {
          const r = `${e}${await p.C(await t.arrayBuffer(), "SHA-1")}.${(0, Te.PW)(t)}`;
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
          const t = this.FilenameForNotes(e),
            r = await this.GetCloudFileInfo(t);
          let i;
          return (
            (i = r ? await this.InternalLoadFileFromCloud(r) : { notes: [] }), i
          );
        }
        async WriteNotesFile(e, t) {
          return this.m_props.uploadFile(e, t), m.d.k_EResultOK;
        }
        async GetCloudFileInfo(e) {
          const t = (await this.GetFiles()).get(e);
          if (!t) return;
          const r = B.w.Init(W);
          r.Body().set_appid(i.oe), r.Body().set_ugcid(t.ugcid);
          const a = await u.GetFileDetails(
            this.m_props.steamInterface.GetServiceTransport(),
            r,
          );
          if (!a.BSuccess() || !a.Body().details(!1))
            throw `Error loading cloud file detail: ${a.GetErrorMessage()}`;
          const n = a.Body().details();
          return (
            (0, g.wT)(
              n.filename() == e,
              `Asked for ${e} but got ${n.filename()}`,
            ),
            {
              strURL: n.url(),
              strSHA: n.file_sha(),
              strFilename: n.filename(),
              ugcid: n.ugcid(),
              rtLastModified: parseInt(n.timestamp()),
              nBytes: n.file_size(),
            }
          );
        }
        async InternalLoadNotesList() {
          let e = 0,
            t = !0;
          const r = new Map();
          for (; t; ) {
            Fe(`EnumerateUserFiles for ${i.oe}, starting at ${e}`);
            const a = B.w.Init(j);
            a.Body().set_appid(i.oe),
              a.Body().set_extended_details(!0),
              a.Body().set_start_index(e);
            const n = await u.EnumerateUserFiles(
              this.m_props.steamInterface.GetServiceTransport(),
              a,
            );
            if (!n.BSuccess())
              throw `Error loading cloud files: ${n.GetErrorMessage()}`;
            n.Body()
              .files()
              .map((e) => ({
                strFilename: e.filename(),
                ugcid: e.ugcid(),
                rtLastModified: parseInt(e.timestamp()),
                nBytes: e.file_size(),
              }))
              .forEach((e) => r.set(e.strFilename, e));
            const s = n.Body().files().length;
            (e += s),
              (t = e < n.Body().total_files()),
              Fe(
                `EnumerateUserFiles complete, loaded ${e - s}-${e} files of ${n.Body().total_files()} total files ${t ? ", running another fetch" : ""}`,
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
      var We = r(88942),
        qe = r(29385),
        ve = r(61739);
      function Oe(e) {
        return e.trim();
      }
      function je(e) {
        return e.appid ? { appid: e.appid } : { shortcut: e.shortcut_name };
      }
      const Ie = a.createContext({ mode: "page", store: null });
      function Ne(e) {
        const {
            mode: t,
            store: r,
            closePopup: i,
            bPinnedView: n,
            onClickURL: s,
            bSpellcheckEnabled: o = !0,
            setSpellcheckEnabled: l,
            children: c,
          } = e,
          u = a.useMemo(
            () => ({
              mode: t,
              store: r,
              closePopup: i,
              bPinnedView: n,
              onClickURL: s,
              bSpellcheckEnabled: o,
              setSpellcheckEnabled: l,
            }),
            [t, r, i, n, s, o, l],
          );
        return a.createElement(Ie.Provider, { value: u }, c);
      }
      function ke() {
        return a.useContext(Ie).closePopup;
      }
      function Le() {
        return a.useContext(Ie).store;
      }
      function xe() {
        return a.useContext(Ie).bPinnedView;
      }
      var De = r(61859);
      const Ae = new ze.wd("GameNotesCloudStore").Debug;
      function Pe(e) {
        return "appid" in e
          ? ["GameNotes", "NotesByAppID", e.appid]
          : ["GameNotes", "NotesForShortcut", Oe(e.shortcut)];
      }
      function Ge(e, t) {
        return {
          queryKey: Pe(t),
          queryFn: async () => (await e.GetGameNotesList(t)) || [],
          staleTime: 18e4,
          refetchInterval: 9e5,
          enabled: !!t,
          structuralSharing: !0,
        };
      }
      function Ke(e, t) {
        const r = (0, qe.jE)(),
          i = Le(),
          a = je(e);
        return (0, ve.n)({
          mutationFn: async () => {
            if (e.not_persisted) return;
            const t = await r.fetchQuery(Ge(i, a));
            if (!t) throw `Failed to load notes for ${JSON.stringify(a)}`;
            const n = t.filter((t) => t.id != e.id);
            return await i.SaveGameNotes(a, n), n;
          },
          onSuccess: (e) => {
            e && r.setQueryData(Pe(a), e), t && t();
          },
        });
      }
      function $e(e, t, r) {
        e.setQueryData(Pe(t), (e) => e && r(e));
      }
      function He(e, t) {
        return a.useMemo(
          () =>
            t
              ? (function (e) {
                  return { shortcut: Oe(e) };
                })(t)
              : (function (e) {
                  return { appid: e };
                })(e),
          [e, t],
        );
      }
      var Qe = r(90286),
        Ve = r(26555),
        Xe = r(55608),
        Ye = r(79497);
      const Je = Xe.DQ.nodes.image,
        Ze = {
          nodes: {
            ...Xe.DQ.nodes,
            cloudimage: {
              ...Je,
              parseDOM: [],
              bbCode: { ...Je.bbCode, tag: "cloudimg" },
            },
          },
          marks: { ...Xe.DQ.marks },
        },
        et = new Ye.W(Ze);
      var tt = r(33645),
        rt = r.n(tt),
        it = r(69956),
        at = r(28106),
        nt = r(64238),
        st = r.n(nt),
        ot = r(71696),
        lt = r(1805),
        ct = r(78327),
        ut = r(86807),
        dt = r(60395),
        mt = r(73309),
        pt = r(36969),
        gt = r(30175),
        Bt = r(52038),
        _t = r(76011);
      function bt(e) {
        const {
            schema: t,
            view: r,
            refUpdateToolbar: i,
            className: n,
            bSpellcheckEnabled: s,
            setSpellcheckEnabled: o,
          } = e,
          [l, c] = (0, _t.SP)("FormattingToolbar_Expanded", !1);
        return a.createElement(
          gt.bI,
          { refUpdateToolbar: i, view: r },
          a.createElement(
            "div",
            { className: (0, Bt.A)(mt.Toolbar, n) },
            a.createElement(
              gt.Ez,
              null,
              a.createElement(pt.MV, null),
              a.createElement(gt.XQ, null),
              a.createElement(pt.Km, { schema: t }),
              a.createElement(gt.hK, null),
              a.createElement(
                gt.ff,
                {
                  onClick: () => c(!l),
                  tooltip: "#FormattingToolbar_ExpandOptions",
                },
                a.createElement(dt.cLJ, { direction: l ? "up" : "down" }),
              ),
            ),
            a.createElement(
              ut.R,
              { visible: l },
              a.createElement(
                gt.Ez,
                null,
                a.createElement(pt.Hz, { schema: t }),
                a.createElement(pt.WJ, { schema: t, levels: 5 }),
                a.createElement(
                  gt.u3,
                  {
                    nodeType: t.nodes.code_block,
                    tooltip: (0, De.we)("#FormattingToolbar_CodeBlock"),
                  },
                  a.createElement(dt.kNE, null),
                ),
                a.createElement(gt.XQ, null),
                a.createElement(pt.C$, { schema: t }),
                a.createElement(gt.XQ, null),
                a.createElement(pt.z9, { schema: t }),
                a.createElement(gt.hK, null),
                o &&
                  a.createElement(pt.Nt, {
                    bSpellcheckEnabled: s,
                    setSpellcheckEnabled: o,
                  }),
              ),
            ),
          ),
        );
      }
      var yt = r(27491),
        Mt = r(8527),
        wt = r(5310);
      function ft(e) {
        const { deleteNote: t, hidden: r, pmState: i } = e,
          [n, s] = a.useState(),
          o = a.useRef(void 0),
          l =
            null === (c = a.useContext(Ie).bSpellcheckEnabled) ||
            void 0 === c ||
            c;
        var c;
        const u = a.useContext(Ie).setSpellcheckEnabled,
          d = (0, ct.Qn)(),
          m = {
            onSecondaryButton: () => t(),
            onSecondaryActionDescription: (0, De.we)(
              "#UserGameNotes_DeleteNote",
            ),
            onDragOver: (e) => e.stopPropagation(),
          };
        return (
          a.useEffect(() => {
            n &&
              !r &&
              ((!Mt.TS.IN_CLIENT &&
                window.matchMedia(`(max-width: ${wt.narrowWidth})`).matches) ||
                n.focus());
          }, [n, r]),
          a.createElement(
            a.Fragment,
            null,
            !d &&
              a.createElement(bt, {
                schema: et.pm_schema,
                view: n,
                refUpdateToolbar: o,
                className: yt.Toolbar,
                bSpellcheckEnabled: l,
                setSpellcheckEnabled: u,
              }),
            a.createElement(
              lt.l,
              {
                pmState: i,
                className: yt.EditorInput,
                refOnUpdate: o,
                refView: s,
                bSpellcheckEnabled: l,
                panelProps: m,
              },
              a.createElement(St, { schema: et.pm_schema }),
            ),
          )
        );
      }
      const St = a.memo(function (e) {
        const { schema: t } = e,
          r = a.useContext(Ie).onClickURL,
          i = a.useMemo(
            () => [
              {
                type: t.nodes.cloudimage,
                component: ht,
                readProps: (e) => ({ src: e.attrs.src }),
              },
            ],
            [t.nodes.cloudimage],
          );
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(ot.pw, { nodeType: t.nodes.image }),
          a.createElement(at.W, {
            linkMarkType: t.marks.link,
            schema: t,
            onClickURL: r,
          }),
          a.createElement(it.U, { specs: i }),
        );
      });
      function ht(e) {
        const { src: t, selected: r } = e,
          [i, n] = a.useState(),
          s = Le();
        return (
          a.useEffect(() => {
            let e = !1;
            return (
              s.ResolveImageURL(t).then((t) => {
                e ? URL.revokeObjectURL(t) : n(t);
              }),
              () => {
                (e = !0), n(void 0);
              }
            );
          }, [s, t]),
          i
            ? a.createElement("img", {
                className: st()(rt().Image, r && "ProseMirror-selectednode"),
                src: i,
              })
            : null
        );
      }
      var zt = r(61788),
        Ct = r(68255),
        Rt = r(9154),
        Ut = r(32754),
        Tt = r(73745),
        Ft = r(13871);
      const Et = 10;
      function Wt(e) {
        const { note: t, hidden: r = !1 } = e,
          [i, n] = a.useState(void 0),
          s = a.useRef(!1),
          o = (0, ct.Qn)(),
          { mutate: l } = (function (e, t) {
            const r = (0, qe.jE)(),
              i = Le(),
              a = je(e);
            return (0, ve.n)({
              scope: {
                id: `${"appid" in e ? e.appid : e.shortcut_name}_${e.id}`,
              },
              mutationFn: async (t) => {
                const { title: n, bbcode: s } = t;
                Ae(`Saving note ${n}`);
                const o = await r.fetchQuery(Ge(i, a));
                if (!o) throw `Failed to load notes for ${JSON.stringify(a)}`;
                const l = o.find((t) => t.id == e.id),
                  c = {
                    ...(null != l ? l : {}),
                    ...e,
                    title: n,
                    content: s,
                    time_modified: Math.floor(Date.now() / 1e3),
                  };
                let u;
                u = l ? o.map((e) => (e.id == c.id ? c : e)) : [...o, c];
                const d = await i.SaveGameNotes(a, u);
                if (d != m.d.k_EResultOK) throw `Error saving notes: ${d}`;
                return u;
              },
              onMutate(t) {
                const i = { ...e, title: t.title, content: t.bbcode };
                return $e(r, a, (e) => e.map((e) => (e.id == i.id ? i : e))), i;
              },
              onSuccess(e, t, i) {
                r.setQueryData(Pe(a), e);
              },
              onError(e) {
                t(e.message || e.name);
              },
            });
          })(t, n),
          [c, u] = a.useState();
        a.useEffect(() => {
          if (!s.current) {
            const e = new Qe.n(et, t.content, (e, t) =>
              l({ title: It(t), bbcode: e }),
            );
            !(function (e, t) {
              e.UpdateState((e) => {
                const r = [];
                if (
                  (e.doc.descendants((e, i) => {
                    var a;
                    e.type === t.nodes.image &&
                      (null === (a = e.attrs.src) || void 0 === a
                        ? void 0
                        : a.match(/^\/gamenotes\//)) &&
                      r.push({ node: e, pos: i });
                  }),
                  r.length)
                )
                  return (
                    r.reverse().forEach(({ node: r, pos: i }) => {
                      const a = r.attrs.src.replace(/^\/gamenotes\//, ""),
                        n = t.nodes.cloudimage.create({ src: a });
                      e = e.replaceWith(i, i + r.nodeSize, n);
                    }),
                    e.setMeta("addToHistory", !1),
                    e
                  );
              });
            })(e, et.pm_schema),
              u(e);
          }
        }, [l, t.content]);
        const { bDirty: d } = (0, Ve.i)(c, { msAutosaveTimeout: 1e3 * Et });
        a.useEffect(() => {
          d &&
            !s.current &&
            ((s.current = !0),
            zt.y.ReportTrackedAction("/GameNotes/NoteModified"));
        }, [d]),
          a.useEffect(() => {
            r && c && c.CommitChanges();
          }, [r, c]);
        const p = (0, Ft.R7)().ownerWindow;
        (0, Tt.o4)(
          p.document,
          a.useCallback(
            (e) => {
              "hidden" == e && c && c.CommitChanges();
            },
            [c],
          ),
        ),
          (0, Tt.l6)(
            window,
            "beforeunload",
            a.useCallback(
              (e) => {
                !ct.TS.IN_STEAMUI &&
                  c.BHasUncomittedChanges() &&
                  (c.CommitChanges(), e.preventDefault());
              },
              [c],
            ),
          );
        const g = (function (e, t) {
            const r = Le();
            return a.useCallback(
              async (i) => {
                const a = await r.UploadImage(`notes_${e}_images/`, i);
                return t.nodes.cloudimage.create({ src: a });
              },
              [r, e, t],
            );
          })(t.appid, et.pm_schema),
          B = ke(),
          _ = Ke(t, B);
        return a.createElement(
          ot.Xv,
          { ProcessFileUpload: g, bAllowImageHotLinking: !0 },
          a.createElement(
            "div",
            { className: yt.NoteEditorArea },
            a.createElement(qt, { error: i, dismissError: () => n(void 0) }),
            a.createElement(ft, {
              deleteNote: _.mutate,
              hidden: r,
              pmState: c,
            }),
            !o && a.createElement(vt, { note: t, bDirty: d }),
          ),
        );
      }
      function qt(e) {
        const { error: t, dismissError: r } = e;
        return t
          ? a.createElement(
              Rt.EN,
              { active: !0 },
              a.createElement(Rt.o0, {
                bAlertDialog: !0,
                strTitle: (0, De.we)("#Error_Generic"),
                strDescription: (0, De.we)(
                  "#UserGameNotes_ErrorSavingNotes",
                  t,
                ),
                closeModal: r,
              }),
            )
          : null;
      }
      function vt(e) {
        const { note: t, bDirty: r } = e,
          [i, n, s] = (0, Tt.uD)(!1),
          o = "single" == a.useContext(Ie).mode,
          l = ke(),
          { mutate: c, isPending: u } = Ke(t, l),
          d = a.useCallback(() => {
            !r && t.not_persisted ? c() : n();
          }, [r, t, c, n]);
        return a.createElement(
          "div",
          { className: yt.NoteActions },
          i &&
            a.createElement(jt, {
              note: t,
              closeModal: s,
              deleteNote: c,
              deletePending: u,
            }),
          a.createElement(
            Ut.he,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            a.createElement(
              Ct.$n,
              { onClick: d },
              a.createElement(dt.lMJ, null),
            ),
          ),
          o && a.createElement(Ot, { bDirty: r }),
        );
      }
      function Ot(e) {
        const { bDirty: t } = e,
          r = ke();
        return t
          ? a.createElement(
              Ct.jn,
              { onClick: () => r(), className: yt.CloseWindowButton },
              (0, De.we)("#Button_SaveAndClose"),
            )
          : a.createElement(
              Ct.$n,
              { onClick: () => r(), className: yt.CloseWindowButton },
              (0, De.we)("#Button_Close"),
            );
      }
      function jt(e) {
        const { note: t, closeModal: r, deleteNote: i, deletePending: n } = e;
        return a.createElement(
          Rt.EN,
          { active: !0 },
          a.createElement(Rt.o0, {
            strTitle: (0, De.we)("#UserGameNotes_DeleteNote"),
            strDescription: (0, De.we)("#UserGameNotes_PromptDelete"),
            onOK: () => i(),
            bOKDisabled: n,
            strOKButtonText: (0, De.we)("#Button_Delete"),
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
        kt = r.n(Nt),
        Lt = r(37403),
        xt = r(30470);
      let Dt;
      const At = 864e5;
      function Pt(e) {
        return `appinfo_${e}_${xt.TS.LANGUAGE}`;
      }
      function Gt(e) {
        return Boolean(e && Date.now() - e.timeCached < At);
      }
      function Kt(e) {
        const t = (0, s.KV)(),
          r = (0, s.rX)();
        return (0, We.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                Dt ||
                  (Dt = new (kt())(
                    async (r) => {
                      const a = new Map();
                      (await Promise.all(r.map((e) => t.GetObject(Pt(e)))))
                        .filter(Gt)
                        .forEach(({ value: e }) => a.set(e.appid, e));
                      const n = r.slice().filter((e) => !a.has(e));
                      if (n.length) {
                        const r = B.w.Init(Lt._z);
                        r.Body().set_language((0, i.sf)(xt.TS.LANGUAGE)),
                          r.Body().set_appids(n);
                        const s = await Lt.BE.GetApps(e, r);
                        if (s.GetEResult() != m.d.k_EResultOK)
                          throw s.GetErrorMessage();
                        s.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(Pt(e.appid), {
                              timeCached: Date.now(),
                              value: e,
                            }),
                              a.set(e.appid, e);
                          });
                      }
                      return r.map((e) => a.get(e));
                    },
                    { cache: !1 },
                  )),
                Dt
              );
            })(t, r).load(e),
          staleTime: At,
          enabled: !!e,
        }).data;
      }
      function $t(e) {
        const { bStandalonePage: t } = e,
          r = (0, n.W5)(),
          i = He(
            "appid" in r.params && Number(r.params.appid),
            "shortcut_name" in r.params && r.params.shortcut_name,
          ),
          s = Xt(),
          o = (function (e) {
            const t = (0, qe.jE)(),
              r = Le();
            return a.useCallback(() => {
              const i = (0, De.we)("#UserGameNotes_UntitledNote_Title"),
                a = r.NewNote(e, i);
              return $e(t, e, (e) => [...e, a]), a.id;
            }, [t, r, e]);
          })(i),
          l = a.useRef(void 0),
          { data: c } = (function (e) {
            const t = Le();
            return (0, We.I)(Ge(t, e));
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
          a.useEffect(() => {
            c && 0 == c.length && s(i, o(), !0);
          }, [s, i, c, o]),
          a.useEffect(() => {
            d && s(i, void 0, !0);
          }, [s, i, d]);
        const m = a.createElement(
          Ut.he,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          a.createElement(
            Ct.$n,
            {
              className: yt.NewNoteButton,
              onClick: () => {
                const e = o();
                s(i, e);
              },
            },
            a.createElement(dt.qY3, null),
          ),
        );
        return c
          ? a.createElement(Ht, {
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
          [l, c] = (0, _t.SP)("NotesListCollapsed", !1),
          u = xe(),
          d = (0, ct.Qn)(),
          m = (0, n.W5)(),
          p = (0, Ct.vn)(m.params.noteid || u ? "ActivePage" : "PageList"),
          g = r.map((e) => {
            var r;
            return {
              title:
                (null === (r = e.title) || void 0 === r ? void 0 : r.length) > 0
                  ? e.title
                  : (0, De.we)("#UserGameNotes_Untitled"),
              identifier: e.id,
              content: a.createElement(Vt, { noteParent: t, note: e }),
              pageClassName: yt.NotePage,
              hideTitle: !0,
            };
          }),
          B = Xt(),
          _ = a.useCallback((e) => B(t, e), [B, t]),
          b = ct.TS.IN_STEAMUI
            ? (0, De.we)("#UserGameNotes_NotesList")
            : a.createElement(Qt, { noteParent: t });
        return d && o
          ? a.createElement(Ct.Bv, {
              title: b,
              pages: g,
              className: (0, Bt.A)(
                yt.NotesPagedSettings,
                u && yt.PinnedView,
                p,
              ),
              page: i,
              onPageRequested: _,
              bottomControls: s,
              hideList: l,
              toggleHideList: u || d ? void 0 : () => c(!l),
            })
          : a.createElement(Ct.O7, {
              title: b,
              pages: g,
              className: (0, Bt.A)(
                yt.NotesPagedSettings,
                u && yt.PinnedView,
                p,
              ),
              page: i,
              onPageRequested: _,
              bottomControls: s,
              hideList: l,
              toggleHideList: u || d ? void 0 : () => c(!l),
            });
      }
      function Qt(e) {
        const { noteParent: t } = e,
          r = Kt("appid" in t ? t.appid : void 0);
        let i;
        return (
          (i = "appid" in t ? (null == r ? void 0 : r.name) : t.shortcut),
          a.createElement(
            a.Fragment,
            null,
            (0, De.we)("#UserGameNotes_NotesForGame", i),
          )
        );
      }
      function Vt(e) {
        const { noteParent: t, note: r } = e,
          i = Ct.v$(),
          n = Xt(),
          s = a.useCallback(() => n(t), [n, t]),
          o = xe();
        return a.createElement(
          a.Fragment,
          null,
          !o && a.createElement(Ct._Z, { onActivate: s }),
          a.createElement(Wt, { note: r, hidden: !i }),
        );
      }
      function Xt(e = !1) {
        const t = (0, ct.Qn)(),
          r = (0, n.W6)(),
          i = e || t;
        return a.useCallback(
          (e, t, a = i) => {
            let n;
            (n =
              "appid" in e
                ? o.AppNotes(e.appid, t)
                : o.ShortcutNotes(e.shortcut, t)),
              a ? r.replace(n, r.location.state) : r.push(n, r.location.state);
          },
          [r, i],
        );
      }
      var Yt = r(17083),
        Jt = r(22797);
      function Zt() {
        const { data: e, isLoading: t } = (function () {
            const e = Le();
            return (0, We.I)({
              queryKey: ["GameNotes", "GamesWithNotes"],
              queryFn: () => e.GetGamesWithNotes(),
              staleTime: 6e5,
            });
          })(),
          r = a.useMemo(
            () =>
              null == e
                ? void 0
                : e.slice().sort((e, t) => t.last_modified - e.last_modified),
            [e],
          );
        return t
          ? a.createElement(Jt.t, { msDelayAppear: 300 })
          : a.createElement(
              "div",
              null,
              a.createElement(
                "h1",
                null,
                (0, De.we)("#UserGameNotes_NotesList"),
              ),
              a.createElement(
                "ul",
                null,
                r.map((e) =>
                  a.createElement(er, {
                    key: e.appid || e.shortcut_name,
                    game: e,
                  }),
                ),
              ),
            );
      }
      function er(e) {
        const { game: t } = e;
        return a.createElement(
          "li",
          null,
          a.createElement(
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
            t.appid ? a.createElement(tr, { appid: t.appid }) : t.shortcut_name,
          ),
        );
        var r, i;
      }
      function tr(e) {
        const { appid: t } = e,
          r = Kt(t);
        return null == r ? void 0 : r.name;
      }
      function rr(e, t, r = {}) {
        const { bIsPublic: i = !0 } = r,
          a = { unAppID: e, strMachineName: t, bIsPublic: i },
          n = (0, s.KV)();
        return (0, ve.n)({
          mutationFn: async ({ files: e }) => {
            const t = await (async function (e, t, r, i) {
              const a = await (async function (e, t, r) {
                const i = B.w.Init(Z);
                i.Body().set_appid(t.unAppID),
                  i.Body().set_machine_name(t.strMachineName),
                  i.Body().set_files_to_upload(r.slice());
                const a = await u.BeginAppUploadBatch(e, i);
                if (!a.BSuccess())
                  throw `Error in BeginAppUploadBatch: ${a.GetErrorMessage()}`;
                return a.Body().batch_id();
              })(e, t, r);
              if (!a) return !1;
              let n = !1;
              try {
                n = await i(a);
              } finally {
                !(function (e, t, r, i) {
                  const a = B.w.Init(re);
                  a.Body().set_appid(t.unAppID),
                    a.Body().set_batch_id(r),
                    a
                      .Body()
                      .set_batch_eresult(
                        i ? m.d.k_EResultOK : m.d.k_EResultFail,
                      ),
                    u.CompleteAppUploadBatch(e, a);
                })(e, t, a, n);
              }
              return !0;
            })(
              n,
              a,
              e.map((e) => e.filename),
              async (t) => {
                const r = await Promise.all(
                  e.map((e) =>
                    (async function (e, t, r, i) {
                      let a, n;
                      a =
                        i.content instanceof File
                          ? await i.content.arrayBuffer()
                          : new TextEncoder().encode(i.content).buffer;
                      n = await p.C(a, "SHA-1");
                      const s = await (async function (e, t, r, i, a, n) {
                          const s = B.w.Init(f);
                          s.Body().set_appid(t.unAppID),
                            s.Body().add_platforms_to_sync("All"),
                            s.Body().set_upload_batch_id(r),
                            s.Body().set_is_public(t.bIsPublic),
                            s.Body().set_filename(i),
                            s.Body().set_file_size(a),
                            s.Body().set_file_sha(n);
                          const o = await u.BeginHTTPUpload(e, s);
                          if (!o.BSuccess())
                            throw `Error in BeginHTTPUpload: ${o.GetErrorMessage()}`;
                          return o.Body().toObject();
                        })(e, t, r, i.filename, a.byteLength, n),
                        o = `https://${s.url_host}${s.url_path}`;
                      let l = !1;
                      try {
                        const e = s.request_headers.map(
                          ({ name: e, value: t }) => [e, t],
                        );
                        l = (
                          await fetch(o, {
                            method: "PUT",
                            headers: e,
                            mode: "cors",
                            body: i.content,
                          })
                        ).ok;
                      } catch {}
                      return await (async function (e, t, r, i, a) {
                        const n = B.w.Init(z);
                        n.Body().set_appid(t.unAppID),
                          n.Body().set_transfer_succeeded(a),
                          n.Body().set_filename(r),
                          n.Body().set_file_sha(i);
                        const s = await u.CommitHTTPUpload(e, n);
                        if (!s.BSuccess())
                          throw `Error in CommitHTTPUpload: ${s.GetErrorMessage()}`;
                        return s.Body().file_committed();
                      })(e, t, i.filename, n, l);
                    })(n, a, t, e),
                  ),
                );
                return !r.some((e) => !e);
              },
            );
            return t;
          },
        });
      }
      function ir(e) {
        const t = (function () {
          const e = (0, s.TR)(),
            { mutateAsync: t } = rr(i.oe, "Steam Community Web Interface", {
              bIsPublic: !0,
            }),
            r = a.useCallback(
              (e, r) => t({ files: [{ filename: e, content: r }] }),
              [t],
            ),
            n = a.useRef({ steamInterface: e, uploadFile: r });
          n.current.uploadFile = r;
          const [o] = a.useState(() => new Ee(n.current));
          return o;
        })();
        return a.createElement(
          Ne,
          { mode: "page", store: t },
          a.createElement(
            n.dO,
            null,
            a.createElement(
              n.qh,
              { path: o.List() },
              a.createElement(Zt, null),
            ),
            a.createElement(
              n.qh,
              { path: o.AppNotes(":appid", ":noteid?") },
              a.createElement($t, null),
            ),
            a.createElement(
              n.qh,
              null,
              a.createElement(n.rd, { to: `${o.List()}` }),
            ),
          ),
        );
      }
    },
    49693: (e, t, r) => {
      "use strict";
      var i;
      r.d(t, { op: () => o, CS: () => n, vE: () => l, Al: () => a }),
        (function (e) {
          (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
            (e[(e.TEXT = 1)] = "TEXT"),
            (e[(e.OPENTAG = 2)] = "OPENTAG"),
            (e[(e.CLOSETAG = 3)] = "CLOSETAG");
        })(i || (i = {}));
      class a {
        constructor(e, t) {
          e instanceof Map
            ? (this.m_dictComponents = e)
            : (this.m_dictComponents = new Map(Object.entries(e))),
            (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, r = !0) {
          const a = (function (e, t) {
            var r, a, n;
            const s = [];
            let o = { type: i.UNKNOWN, text: "" },
              l = !1,
              d = !1,
              m = !1;
            for (let n = 0; n < e.length; n++) {
              const p = e[n];
              switch (o.type) {
                case i.UNKNOWN:
                  "[" == p
                    ? ((o.type = i.OPENTAG), (d = !0))
                    : ((o.type = i.TEXT),
                      "\\" == p && t ? (l = !l) : (o.text += p));
                  break;
                case i.OPENTAG:
                case i.CLOSETAG:
                  if ("/" == p && d)
                    (o.type = i.CLOSETAG), (o.text = ""), (d = !1);
                  else if ("[" != p || l)
                    if ("]" != p || l)
                      "\\" == p && t
                        ? ((o.text += p), (l = !l), (d = !1))
                        : ((o.text += p), (l = !1), (d = !1));
                    else {
                      const e =
                          o.type == i.OPENTAG &&
                          "noparse" ==
                            (null === (r = o.text) || void 0 === r
                              ? void 0
                              : r.toLocaleLowerCase()),
                        t =
                          o.type == i.CLOSETAG &&
                          "noparse" ==
                            (null === (a = o.text) || void 0 === a
                              ? void 0
                              : a.toLocaleLowerCase());
                      d || (m && !t)
                        ? ((o = u(o)), (o.text += p))
                        : e
                          ? (m = !0)
                          : t && (m = !1),
                        (o = c(s, o)),
                        (d = !1);
                    }
                  else (o = c(s, u(o), i.OPENTAG)), (d = !0);
                  break;
                case i.TEXT:
                  "[" != p || l
                    ? "\\" == p && t
                      ? (l && (o.text += p), (l = !l))
                      : ((o.text += p), (l = !1))
                    : ((o = c(s, o, i.OPENTAG)), (d = !0));
              }
            }
            o.type != i.UNKNOWN &&
              (o.type == i.OPENTAG || o.type == i.CLOSETAG
                ? s.push(u(o))
                : s.push({
                    type: o.type,
                    text: null !== (n = o.text) && void 0 !== n ? n : "",
                  }));
            return s;
          })(e || "", r);
          return this.Parse_BuildElements(a, t);
        }
        Parse_BuildElements(e, t) {
          let r = this.m_fnAccumulatorFactory(void 0);
          const a = [],
            n = () => (a.length < 1 ? void 0 : a[a.length - 1]),
            s = this.m_dictComponents,
            o = (e) => {
              var t;
              return !(
                !e.tag ||
                !(null === (t = s.get(e.tag)) || void 0 === t
                  ? void 0
                  : t.autocloses)
              );
            };
          let l = !1,
            c = !0;
          const u = (e, i) => {
            if (e && e.node.tag === i.text && s.get(e.node.tag)) {
              const i = s.get(e.node.tag),
                a = {
                  tagname: e.node.tag,
                  args: e.node.args,
                  rawargs: e.node.rawargs,
                },
                n = t(i.Constructor, a, ...r.GetElements());
              (r = e.accumulator),
                Array.isArray(n)
                  ? n.forEach((e) => r.AppendNode(e))
                  : r.AppendNode(n),
                (l = !!i.skipFollowingNewline),
                (c = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                r.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + i.text + "]", !1),
                (r = t),
                (c = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              var d, m;
              if (e.type == i.TEXT) {
                const t = l ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                r.AppendText(t, c), (l = !1);
              } else if (e.type == i.OPENTAG) {
                const t = s.get(e.tag);
                if (t) {
                  const i = n();
                  if (void 0 !== i) {
                    const t = s.get(i.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === i.node.tag &&
                      u(a.pop(), i.node);
                  }
                  a.push({ accumulator: r, node: e, bWrapTextForCopying: c }),
                    (r = this.m_fnAccumulatorFactory(e)),
                    (l = !!t.skipInternalNewline),
                    (c =
                      null !== (d = t.allowWrapTextForCopying) &&
                      void 0 !== d &&
                      d);
                } else r.AppendText("[" + e.text + "]", 0 == a.length);
              } else if (e.type == i.CLOSETAG) {
                for (; n() && n().node.tag !== e.text && o(n().node); ) {
                  const e = a.pop();
                  u(e, e.node);
                }
                if (
                  (null === (m = n()) || void 0 === m ? void 0 : m.node.tag) ==
                  e.text
                ) {
                  const t = a.pop();
                  u(t, e);
                } else r.AppendText("[/" + e.text + "]", 0 == a.length);
              }
            });
            a.length > 0;
          ) {
            const e = a.pop();
            u(e, e.node);
          }
          return r.GetElements();
        }
      }
      function n(e, t) {
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
      function c(e, t, r = i.UNKNOWN) {
        const { type: a, text: n = "" } = t;
        if (a == i.OPENTAG) {
          let t = n.indexOf("=");
          const r = n.indexOf(" ");
          let i, s;
          -1 != r && (-1 == t || r < t) && (t = r);
          let o = "";
          t > 0
            ? ((i = n.substr(0, t).toLocaleLowerCase()),
              (o = n.substr(t)),
              (s = (function (e) {
                if (!e || e.length < 1) return {};
                const t = {};
                let r,
                  i = "",
                  a = "";
                !(function (e) {
                  (e[(e.PRE_NAME = 0)] = "PRE_NAME"),
                    (e[(e.IN_NAME = 1)] = "IN_NAME"),
                    (e[(e.POST_NAME = 2)] = "POST_NAME"),
                    (e[(e.IN_VALUE = 3)] = "IN_VALUE"),
                    (e[(e.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
                })(r || (r = {}));
                let n = r.PRE_NAME,
                  s = 0;
                "=" == e[0] && (n = r.POST_NAME);
                let o = !1;
                for (s++; s < e.length; s++) {
                  const l = e[s];
                  let c = !0,
                    u = !1;
                  switch (n) {
                    case r.PRE_NAME:
                      if ("=" == l) return {};
                      if (" " == l) continue;
                      n = r.IN_NAME;
                      break;
                    case r.IN_NAME:
                      ("=" != l && " " != l) ||
                        o ||
                        (" " == l
                          ? ((n = r.PRE_NAME), (u = !0))
                          : (n = r.POST_NAME),
                        (c = !1));
                      break;
                    case r.POST_NAME:
                      " " == l
                        ? ((n = r.PRE_NAME), (c = !1), (u = !0))
                        : '"' == l
                          ? ((n = r.IN_QUOTED_VALUE), (c = !1))
                          : (n = r.IN_VALUE);
                      break;
                    case r.IN_VALUE:
                    case r.IN_QUOTED_VALUE:
                      ((" " == l && n != r.IN_QUOTED_VALUE && !o) ||
                        ('"' == l && n == r.IN_QUOTED_VALUE && !o)) &&
                        ((n = r.PRE_NAME), (c = !1), (u = !0));
                  }
                  if (c)
                    if ("\\" != l || o)
                      if (((o = !1), n == r.IN_NAME)) i += l;
                      else {
                        if (n != r.IN_VALUE && n != r.IN_QUOTED_VALUE)
                          throw new Error(
                            "Not expecting to accumulate buffer in state " + n,
                          );
                        a += l;
                      }
                    else o = !0;
                  u && ((t[i] = a), (i = ""), (a = ""));
                }
                n != r.PRE_NAME && (t[i] = a);
                return t;
              })(o)))
            : ((s = {}), (i = n.toLocaleLowerCase())),
            e.push({ type: a, text: n, tag: i, args: s, rawargs: o });
        } else a != i.UNKNOWN && e.push({ type: a, text: n });
        return { type: r, text: "" };
      }
      function u(e) {
        var t;
        let r = "";
        return (
          e.type == i.CLOSETAG ? (r = "[/") : e.type == i.OPENTAG && (r = "["),
          {
            type: i.TEXT,
            text: r + (null !== (t = e.text) && void 0 !== t ? t : ""),
          }
        );
      }
    },
    61788: (e, t, r) => {
      "use strict";
      r.d(t, { y: () => m });
      var i = r(34629),
        a = r(56545),
        n = r(59134),
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
          const e = a.w.Init(n.bc);
          e.Body().set_product(this.m_strProduct),
            e.Body().set_version(this.m_strVersion),
            this.m_mapRoutes.forEach((t, r) => {
              let i = new n.N4();
              i.set_route(r), i.set_count(t), e.Body().add_routes(i);
            }),
            this.m_mapComponents.forEach((t, r) => {
              let i = new n.Zd();
              i.set_component(r), i.set_count(t), e.Body().add_components(i);
            }),
            this.m_mapActions.forEach((t, r) => {
              let i = new n.Ys();
              i.set_action(r), i.set_count(t), e.Body().add_actions(i);
            }),
            this.m_mapRoutes.clear(),
            this.m_mapComponents.clear(),
            this.m_mapActions.clear(),
            (this.m_reportCount = 0),
            n._5.ReportReactUsage(this.m_transport, e);
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
        a = r(72739),
        n = r(56011);
      function s(e, t) {
        const r = i.useRef(void 0),
          n = i.useCallback(
            (t) => {
              t.currentTarget.files.length > 0 &&
                (e(t.currentTarget.files), (t.currentTarget.value = ""));
            },
            [e],
          ),
          s = i.useCallback(() => r.current.click(), []);
        return [
          a.createPortal(
            i.createElement(
              "form",
              { onSubmit: c, style: { display: "none" } },
              i.createElement("input", {
                ...t,
                type: "file",
                ref: r,
                onChange: n,
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
              n.NO(e) && r(!1);
            }, []),
            onDragEnd: i.useCallback(() => r(!1), []),
            onDragOver: t ? c : void 0,
            onDrop: i.useCallback(
              (t) => {
                var i;
                (null === (i = t.dataTransfer.files) || void 0 === i
                  ? void 0
                  : i.length) &&
                  (e(t.dataTransfer.files, t),
                  t.preventDefault(),
                  t.stopPropagation()),
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
          const a = new Image();
          (a.src = e),
            (a.onload = () => r("success")),
            (a.onerror = () => r("error")),
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

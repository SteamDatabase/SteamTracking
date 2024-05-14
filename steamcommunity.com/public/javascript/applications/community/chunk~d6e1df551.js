/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2558],
  {
    72869: (e) => {
      e.exports = {
        Bold: "_1opdqAOxXrGF6BBCpWBSwD",
        Italic: "_3PSCEwXIQOjACd8vcBVCh5",
        Paragraph: "_3zjknFIbJGBGezHbYjCrVE",
        Header1: "_38GFQhbMgQS_1y-yV_MAza",
        Header2: "_2ZqUvIHTeQdmj5n3wCqp5s",
        Header3: "KePJsJFkRONeGxLE3PKlF",
        Header4: "_12a97iox1ZnYnQgXLpvafk",
        Header5: "_4GmIVQlN3tVVTtLvuOhUV",
        CenterSpan: "_3RAiCNw0-UoPo_4awvb1mA",
        SmallText: "UvZC_c1WvBWOxlmJu7qCo",
        Underline: "_3vpZiV7iSLrM6hY_mXk2k2",
        Strike: "_3dQvq4jSQdWUz4WSgIjESL",
        Spoiler: "_3CaxnwuIvFNL4Dlz6VYwHm",
        Revealed: "_35II0clQ4RixPf4ZSRqXPh",
        SpoilerText: "_1owPz2jY3VWy1TyVCWb7Gs",
        DisabledMouseEvents: "_3QOEiyJx6JNKSPfGtfeQRO",
        BlockQuote: "_2sfhtLUZT0Q5XZbbP0ybRr",
        QuoteAuthor: "_2CMyS9Y6n11x4PMJHri59E",
        PullQuote: "_3DRIe0jpfxAeqHxvn4iq3m",
        Code: "_1AelsP7HuMD8QF_8MVP602",
        CodeBlock: "_1paKwApiKpt_82rqeHdUh2",
        List: "tfM5VWgPClhy8MTX_pNLF",
        OrderedList: "_3Ve1EOUy_uAbrn63gbK5U",
        ListItem: "_3DlO014RzYr_m9lI620soy",
        HR: "_26oRBOf5CSY0iZsXJ_juPw",
        Table: "_2Z51g3jeZDA1f76UU-hlG3",
        NoBorder: "_3aoMET6BC38Vks1LAxB0rO",
        TableRow: "Ms77JiTbY6cF3X9kDmu_I",
        TableData: "_2t3YCtmlffdVpfB7Gy7NEW",
        TableHeader: "_1vvfxMDi4YsoiPx4a-EQpH",
        EqualCells: "_5b-QB3nK-8ib6IKjTAtyp",
        ExpandSectionBlock: "YvEQhAIQTyLOKf4OZCW_o",
        ExpandSectionHeader: "_3OxxMP4ilAfeJHPZJlq-3y",
        EmbedArrow: "WXJl-z3InzcPSdkJYNQdR",
        ExpandSectionBody: "_2sCNLKNv2RQrux8JZHAj7W",
        ExpandSection_WithTitle: "_22nl0JNsidayri6K48VGaW",
        LinkButton: "lMVeYbREjOZyypw7mp3qS",
        Image: "_1CmpCOpiyFBd8ePBHSdJZ5",
      };
    },
    80878: (e, t, o) => {
      "use strict";
      o.d(t, { Gg: () => h, L4: () => f });
      var i = o(85556),
        l = o(80751),
        a = o.n(l),
        r = o(54842),
        s = o(62210),
        p = o(31846),
        d = o(37563);
      class n {
        constructor() {
          (this.exportFn = void 0),
            (this.file = void 0),
            (this.dataURL = void 0),
            (this.timestamp = 0),
            (this.imageWidth = 0),
            (this.imageHeight = 0),
            (this.eUploadState = 0),
            (this.uploadProgress = 0),
            (this.strErrorDescription = void 0),
            (0, r.rC)(this);
        }
      }
      (0, i.gn)([r.LO], n.prototype, "file", void 0),
        (0, i.gn)([r.LO], n.prototype, "dataURL", void 0),
        (0, i.gn)([r.LO], n.prototype, "imageWidth", void 0),
        (0, i.gn)([r.LO], n.prototype, "imageHeight", void 0),
        (0, i.gn)([r.LO], n.prototype, "eUploadState", void 0),
        (0, i.gn)([r.LO], n.prototype, "uploadProgress", void 0),
        (0, i.gn)([r.LO], n.prototype, "strErrorDescription", void 0);
      class h {
        constructor(e) {
          (this.m_fileUploadProps = new n()),
            (0, r.rC)(this),
            (this.m_Callbacks = e);
        }
        get file_upload_props() {
          return this.m_fileUploadProps;
        }
        get file_upload_data_url() {
          return this.m_fileUploadProps.dataURL;
        }
        get file() {
          return this.m_fileUploadProps.file;
        }
        LogFileUploadMessage(e) {
          this.m_Callbacks.LogFileUploadMessage &&
            this.m_Callbacks.LogFileUploadMessage(e);
        }
        SetUploadFileError(e, t) {
          (this.m_fileUploadProps.eUploadState = e),
            (this.m_fileUploadProps.strErrorDescription = t),
            (this.m_fileUploadProps.displayFileName = null);
        }
        StartFileExportToUpload(e, t = {}) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const { displayFilename: o, info: i } = t;
            (this.m_fileUploadProps.eUploadState = 7),
              (this.m_fileUploadProps.uploadProgress = 0),
              (this.m_fileUploadProps.fileInfo = i),
              this.SetFileToUpload(e),
              (this.m_fileUploadProps.displayFileName = o);
          });
        }
        SetImageFileToUpload(e, t = {}) {
          var o, l, a;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const { processor: i = m, info: r } = t;
            if (!e) return void this.SetFileToUpload(null);
            this.m_fileUploadProps.fileInfo = r;
            const s =
              null !==
                (a =
                  null === (l = (o = this.m_Callbacks).GetFileNameOverride) ||
                  void 0 === l
                    ? void 0
                    : l.call(o)) && void 0 !== a
                ? a
                : e.name;
            if (e.size > 1024 * this.m_Callbacks.GetMaxFileSizeMB() * 1024)
              return void this.SetUploadFileError(
                4,
                (0, p.Xx)(
                  "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                  s,
                  this.m_Callbacks.GetMaxFileSizeMB(),
                ),
              );
            let d = e.name.split(".").pop().toLowerCase();
            if (
              -1 ==
              [
                "jpg",
                "jpeg",
                "png",
                "gif",
                "webm",
                "mpg",
                "mp4",
                "mpeg",
                "ogv",
              ].indexOf(d)
            )
              return void this.SetUploadFileError(
                5,
                (0, p.Xx)("#Chat_Settings_Error_ChatFileTypeNotSupported", s),
              );
            const n = yield i(e);
            this.SetFileToUpload(n.file),
              (this.m_fileUploadProps.imageHeight = n.height),
              (this.m_fileUploadProps.imageWidth = n.width);
          });
        }
        SetOtherFileToUpload(e, t = {}) {
          var o, l, a;
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!e) return void this.SetFileToUpload(null);
            this.m_fileUploadProps.fileInfo = t.info;
            const i =
              null !==
                (a =
                  null === (l = (o = this.m_Callbacks).GetFileNameOverride) ||
                  void 0 === l
                    ? void 0
                    : l.call(o)) && void 0 !== a
                ? a
                : e.name;
            if (e.size > 1024 * this.m_Callbacks.GetMaxFileSizeMB() * 1024)
              return void this.SetUploadFileError(
                4,
                (0, p.Xx)(
                  "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                  i,
                  this.m_Callbacks.GetMaxFileSizeMB(),
                ),
              );
            let r = e.name.split(".").pop().toLowerCase();
            -1 != ["zip"].indexOf(r)
              ? this.SetFileToUpload(e)
              : this.SetUploadFileError(
                  5,
                  (0, p.Xx)("#Chat_Settings_Error_ChatFileTypeNotSupported", i),
                );
          });
        }
        SetFileToUpload(e) {
          if (
            ((this.m_fileUploadProps.file = null),
            (this.m_fileUploadProps.dataURL = null),
            (this.m_fileUploadProps.hmac = null),
            (this.m_fileUploadProps.sha1 = null),
            (this.m_fileUploadProps.imageWidth = 0),
            (this.m_fileUploadProps.imageHeight = 0),
            (this.m_fileUploadProps.displayFileName = null),
            !e)
          )
            return void (this.m_fileUploadProps.eUploadState = 0);
          let t = "";
          if ("function" == typeof e)
            (this.m_fileUploadProps.file = null),
              (this.m_fileUploadProps.exportFn = e);
          else {
            (this.m_fileUploadProps.file = e),
              (this.m_fileUploadProps.exportFn = null);
            try {
              t = URL.createObjectURL(e);
            } catch (e) {
              console.error(`Failed to created object URL from file: ${e}`);
            }
            (this.m_fileUploadProps.displayFileName =
              this.m_fileUploadProps.file.name),
              (this.m_fileUploadProps.uploadFileName =
                window.performance.now() +
                "_" +
                this.m_fileUploadProps.file.name);
          }
          this.m_fileUploadProps.eUploadState = 1;
          let o = "";
          for (; o.length < 40; )
            o += Math.floor(16 * Math.random()).toString(16);
          (this.m_fileUploadProps.dataURL = t),
            (this.m_fileUploadProps.sha1 = o),
            (this.m_fileUploadProps.hmac = ""),
            (this.m_fileUploadProps.timestamp = 0);
        }
        RetryFileUpload() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.BeginFileUpload();
          });
        }
        BeginFileUpload(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (
              ((this.m_fileUploadProps.uploadProgress = 0),
              this.m_fileUploadProps.exportFn)
            ) {
              this.m_fileUploadProps.eUploadState = 7;
              const { eResult: e, file: t } =
                yield this.m_fileUploadProps.exportFn((e) => {
                  (0, r.z)(() => {
                    this.m_fileUploadProps.uploadProgress = 0.5 * e;
                  });
                });
              if (1 != e || !t)
                return (
                  this.SetUploadFileError(
                    3,
                    (0, p.Xx)("#Chat_Settings_Error_ExportFailed"),
                  ),
                  new Response()
                );
              this.m_fileUploadProps.file = t;
            }
            let t = this.m_fileUploadProps.file;
            if (!t)
              throw (
                ((0, s.X)(
                  !1,
                  "Must SetImageFileToUpload before calling BeginFileUpload",
                ),
                new Error("Invalid State"))
              );
            (this.m_fileUploadProps.eUploadState = 2),
              (this.m_fileUploadProps.uploadInfo = e);
            let o = new FormData();
            o.append("sessionid", d.De.SESSIONID),
              o.append("l", d.De.LANGUAGE),
              o.append("file_size", t.size.toString()),
              o.append("file_name", this.m_fileUploadProps.uploadFileName),
              o.append("file_sha", this.m_fileUploadProps.sha1),
              o.append(
                "file_image_width",
                this.m_fileUploadProps.imageWidth.toString(),
              ),
              o.append(
                "file_image_height",
                this.m_fileUploadProps.imageHeight.toString(),
              ),
              o.append("file_type", t.type),
              this.m_Callbacks.PopulateBeginFileUploadFormData &&
                this.m_Callbacks.PopulateBeginFileUploadFormData(
                  o,
                  this.file_upload_props.uploadInfo,
                  this.file_upload_props.fileInfo,
                );
            try {
              let e,
                t = yield fetch(
                  this.m_Callbacks.GetBeginFileUploadURL() +
                    `?l=${d.De.LANGUAGE}`,
                  { method: "POST", body: o, credentials: "include" },
                );
              try {
                e = yield t.json();
              } catch (e) {}
              if (!e || !e.result) throw new Error();
              if (!t.ok) {
                let o = null;
                throw (
                  ((0, r.z)(() => {
                    (this.m_fileUploadProps.eUploadState = 3),
                      this.LogFileUploadMessage(t),
                      (o = (null == e ? void 0 : e.message)
                        ? null == e
                          ? void 0
                          : e.message
                        : (0, p.Xx)("#Chat_Settings_Error_ServerError")),
                      (this.m_fileUploadProps.strErrorDescription = (0, p.Xx)(
                        "#Chat_Upload_ErrorStart",
                        o,
                      ));
                  }),
                  o)
                );
              }
              return (
                (this.m_fileUploadProps.timestamp = e.timestamp),
                (this.m_fileUploadProps.hmac = e.hmac),
                this.DoFileUpload(e.result)
              );
            } catch (e) {
              let t = e || (0, p.Xx)("#ConnectionTrouble_FailedToConnect");
              throw (
                ((0, r.z)(() => {
                  (this.m_fileUploadProps.eUploadState = 3),
                    (this.m_fileUploadProps.strErrorDescription = (0, p.Xx)(
                      "#Chat_Upload_ErrorStart",
                      t,
                    ));
                }),
                t)
              );
            }
          });
        }
        DoFileUpload(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let t = this.m_fileUploadProps.file,
              o = e.use_https ? "https://" : "http://";
            o += e.url_host + e.url_path;
            let i = {
              onUploadProgress: (e) => {
                const t = !!this.m_fileUploadProps.exportFn,
                  o = t ? 50 : 100,
                  i = (t ? 50 : 0) + (e.loaded / e.total) * o;
                i > this.m_fileUploadProps.uploadProgress &&
                  (0, r.z)(() => {
                    this.m_fileUploadProps.uploadProgress = i;
                  });
              },
              headers: {},
              transformRequest: [(e) => e],
            };
            for (let t = 0; t < e.request_headers.length; ++t) {
              let o = e.request_headers[t];
              "Content-Length" != o.name &&
                "Host" != o.name &&
                (i.headers[o.name] = o.value);
            }
            try {
              return yield a().put(o, t, i), this.CommitFileUpload(!0, e.ugcid);
            } catch (t) {
              throw (
                (this.LogFileUploadMessage(t.response),
                (0, r.z)(() => {
                  (this.m_fileUploadProps.strErrorDescription = (0, p.Xx)(
                    "#Chat_Upload_ErrorCloud",
                  )),
                    (this.m_fileUploadProps.eUploadState = 3),
                    (this.m_fileUploadProps.uploadProgress = 0);
                }),
                this.CommitFileUpload(!1, e.ugcid),
                this.m_fileUploadProps.strErrorDescription)
              );
            }
          });
        }
        CommitFileUpload(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let o = this.m_fileUploadProps.file,
              i = this.m_fileUploadProps.sha1,
              l = new FormData();
            l.append("sessionid", d.De.SESSIONID),
              l.append("l", d.De.LANGUAGE),
              l.append("file_name", this.m_fileUploadProps.uploadFileName),
              l.append("file_sha", i),
              l.append("success", e ? "1" : "0"),
              l.append("ugcid", t),
              l.append("file_type", o.type),
              l.append(
                "file_image_width",
                this.m_fileUploadProps.imageWidth.toString(),
              ),
              l.append(
                "file_image_height",
                this.m_fileUploadProps.imageHeight.toString(),
              ),
              l.append(
                "timestamp",
                this.m_fileUploadProps.timestamp.toString(),
              ),
              l.append("hmac", this.m_fileUploadProps.hmac),
              this.m_Callbacks.PopulateCommitFileUploadFormData(
                l,
                this.file_upload_props.uploadInfo,
                this.file_upload_props.fileInfo,
              );
            try {
              let t = yield fetch(this.m_Callbacks.GetCommitFileUploadURL(), {
                method: "POST",
                body: l,
              });
              return (
                e
                  ? ((this.m_fileUploadProps.uploadProgress = 0),
                    (this.m_fileUploadProps.eUploadState = 6))
                  : (this.m_fileUploadProps.eUploadState = 3),
                t
              );
            } catch (t) {
              if (!e) return null;
              let o = null;
              throw (
                ((0, r.z)(() => {
                  if (
                    (this.LogFileUploadMessage(t),
                    (this.m_fileUploadProps.uploadProgress = 0),
                    (this.m_fileUploadProps.eUploadState = 3),
                    t.response)
                  ) {
                    let e = t.response.data;
                    t.response.status, e && e.success;
                    o = e.message
                      ? e.message
                      : (0, p.Xx)("#Chat_Settings_Error_ServerError");
                  } else o = (0, p.Xx)("#ConnectionTrouble_FailedToConnect");
                  this.m_fileUploadProps.strErrorDescription = `Failed to commit upload: ${o}`;
                }),
                o)
              );
            }
          });
        }
        ClearFileUploadError() {
          (3 != this.m_fileUploadProps.eUploadState &&
            4 != this.m_fileUploadProps.eUploadState &&
            5 != this.m_fileUploadProps.eUploadState) ||
            this.Reset();
        }
        Reset() {
          this.SetFileToUpload(null);
        }
      }
      function m(e) {
        return new Promise((t) => {
          let o = new FileReader();
          (o.onload = () => {
            let i = e,
              l = f(o.result),
              a = new Blob([l], { type: e.type });
            if (a) {
              let t = a;
              (t.lastModifiedDate = new Date(e.lastModified)),
                (t.name = e.name),
                (i = t);
            }
            if (0 == e.type.indexOf("image")) {
              let o = new Image();
              (o.src = URL.createObjectURL(e)),
                (o.onload = (e) => {
                  t({ file: i, width: o.width, height: o.height });
                });
            } else t({ file: i, width: 0, height: 0 });
          }),
            o.readAsArrayBuffer(e);
        });
      }
      function f(e) {
        let t = new DataView(e),
          o = 0,
          i = 0,
          l = [],
          a = 0;
        if (65496 == t.getUint16(o)) {
          o += 2;
          let r = t.getUint16(o);
          for (o += 2; o < t.byteLength && o < 131072; ) {
            if (65505 == r)
              (l[a] = { recess: i, offset: o - 2 }),
                (i = o + t.getUint16(o)),
                a++;
            else if (65498 == r) break;
            (o += t.getUint16(o)), (r = t.getUint16(o)), (o += 2);
          }
          let s = e.byteLength - i;
          if (
            (l.forEach((e) => {
              s += e.offset - e.recess;
            }),
            s === e.byteLength)
          )
            return e;
          const p = new Uint8Array(s);
          if (l.length > 0) {
            let t = 0;
            l.forEach((o) => {
              let i = o.offset - o.recess;
              p.set(new Uint8Array(e.slice(o.recess, o.offset)), t), (t += i);
            }),
              p.set(new Uint8Array(e.slice(i)), t);
          }
          return p.buffer;
        }
        return e;
      }
      (0, i.gn)([r.aD], h.prototype, "SetUploadFileError", null),
        (0, i.gn)([r.aD], h.prototype, "StartFileExportToUpload", null),
        (0, i.gn)([r.aD], h.prototype, "SetImageFileToUpload", null),
        (0, i.gn)([r.aD], h.prototype, "SetOtherFileToUpload", null),
        (0, i.gn)([r.aD], h.prototype, "SetFileToUpload", null),
        (0, i.gn)([r.aD], h.prototype, "RetryFileUpload", null),
        (0, i.gn)([r.aD], h.prototype, "BeginFileUpload", null),
        (0, i.gn)([r.aD], h.prototype, "DoFileUpload", null),
        (0, i.gn)([r.aD], h.prototype, "CommitFileUpload", null),
        (0, i.gn)([r.aD], h.prototype, "ClearFileUploadError", null),
        (0, i.gn)([r.aD], h.prototype, "Reset", null);
    },
  },
]);

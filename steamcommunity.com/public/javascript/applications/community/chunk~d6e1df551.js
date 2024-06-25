/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2558],
  {
    80878: (e, t, o) => {
      o.d(t, { Gg: () => h, L4: () => f });
      var l = o(85556),
        i = o(80751),
        a = o.n(i),
        p = o(54842),
        s = o(62210),
        r = o(31846),
        d = o(37563);
      class n {
        constructor() {
          (0, p.rC)(this);
        }
        exportFn = void 0;
        file = void 0;
        dataURL = void 0;
        uploadFileName;
        displayFileName;
        sha1;
        hmac;
        timestamp = 0;
        imageWidth = 0;
        imageHeight = 0;
        fileInfo;
        uploadInfo;
        eUploadState = 0;
        uploadProgress = 0;
        strErrorDescription = void 0;
      }
      (0, l.gn)([p.LO], n.prototype, "file", void 0),
        (0, l.gn)([p.LO], n.prototype, "dataURL", void 0),
        (0, l.gn)([p.LO], n.prototype, "imageWidth", void 0),
        (0, l.gn)([p.LO], n.prototype, "imageHeight", void 0),
        (0, l.gn)([p.LO], n.prototype, "eUploadState", void 0),
        (0, l.gn)([p.LO], n.prototype, "uploadProgress", void 0),
        (0, l.gn)([p.LO], n.prototype, "strErrorDescription", void 0);
      class h {
        m_Callbacks;
        m_fileUploadProps = new n();
        m_onComplete;
        constructor(e) {
          (0, p.rC)(this), (this.m_Callbacks = e);
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
        async StartFileExportToUpload(e, t = {}) {
          const { displayFilename: o, info: l, onComplete: i } = t;
          (this.m_fileUploadProps.eUploadState = 7),
            (this.m_fileUploadProps.uploadProgress = 0),
            (this.m_onComplete = i),
            (this.m_fileUploadProps.fileInfo = l),
            this.SetFileToUpload(e),
            (this.m_fileUploadProps.displayFileName = o);
        }
        async SetImageFileToUpload(e, t = {}) {
          const { processor: o = m, info: l } = t;
          if (!e) return void this.SetFileToUpload(null);
          this.m_fileUploadProps.fileInfo = l;
          const i = this.m_Callbacks.GetFileNameOverride?.() ?? e.name;
          if (e.size > 1024 * this.m_Callbacks.GetMaxFileSizeMB() * 1024)
            return void this.SetUploadFileError(
              4,
              (0, r.Xx)(
                "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                i,
                this.m_Callbacks.GetMaxFileSizeMB(),
              ),
            );
          let a = e.name.split(".").pop().toLowerCase();
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
            ].indexOf(a)
          )
            return void this.SetUploadFileError(
              5,
              (0, r.Xx)("#Chat_Settings_Error_ChatFileTypeNotSupported", i),
            );
          const p = await o(e);
          this.SetFileToUpload(p.file),
            (this.m_fileUploadProps.imageHeight = p.height),
            (this.m_fileUploadProps.imageWidth = p.width);
        }
        async SetOtherFileToUpload(e, t = {}) {
          if (!e) return void this.SetFileToUpload(null);
          this.m_fileUploadProps.fileInfo = t.info;
          const o = this.m_Callbacks.GetFileNameOverride?.() ?? e.name;
          if (e.size > 1024 * this.m_Callbacks.GetMaxFileSizeMB() * 1024)
            return void this.SetUploadFileError(
              4,
              (0, r.Xx)(
                "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                o,
                this.m_Callbacks.GetMaxFileSizeMB(),
              ),
            );
          let l = e.name.split(".").pop().toLowerCase();
          -1 != ["zip"].indexOf(l)
            ? this.SetFileToUpload(e)
            : this.SetUploadFileError(
                5,
                (0, r.Xx)("#Chat_Settings_Error_ChatFileTypeNotSupported", o),
              );
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
        async RetryFileUpload() {
          return this.BeginFileUpload();
        }
        async BeginFileUpload(e) {
          if (
            ((this.m_fileUploadProps.uploadProgress = 0),
            this.m_fileUploadProps.exportFn)
          ) {
            this.m_fileUploadProps.eUploadState = 7;
            const { eResult: e, file: t } =
              await this.m_fileUploadProps.exportFn((e) => {
                (0, p.z)(() => {
                  this.m_fileUploadProps.uploadProgress = 0.5 * e;
                });
              });
            if (1 != e || !t)
              return (
                this.SetUploadFileError(
                  3,
                  (0, r.Xx)("#Chat_Settings_Error_ExportFailed"),
                ),
                new Response()
              );
            (this.m_fileUploadProps.file = t),
              (this.m_fileUploadProps.uploadFileName =
                window.performance.now() + "_" + t.name);
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
              t = await fetch(
                this.m_Callbacks.GetBeginFileUploadURL() +
                  `?l=${d.De.LANGUAGE}`,
                { method: "POST", body: o, credentials: "include" },
              );
            try {
              e = await t.json();
            } catch (e) {}
            if (!e || !e.result) throw new Error();
            if (!t.ok) {
              let o = null;
              throw (
                ((0, p.z)(() => {
                  (this.m_fileUploadProps.eUploadState = 3),
                    this.LogFileUploadMessage(t),
                    (o = e?.message
                      ? e?.message
                      : (0, r.Xx)("#Chat_Settings_Error_ServerError")),
                    (this.m_fileUploadProps.strErrorDescription = (0, r.Xx)(
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
            let t = e || (0, r.Xx)("#ConnectionTrouble_FailedToConnect");
            throw (
              ((0, p.z)(() => {
                (this.m_fileUploadProps.eUploadState = 3),
                  (this.m_fileUploadProps.strErrorDescription = (0, r.Xx)(
                    "#Chat_Upload_ErrorStart",
                    t,
                  ));
              }),
              t)
            );
          }
        }
        async DoFileUpload(e) {
          let t = this.m_fileUploadProps.file,
            o = e.use_https ? "https://" : "http://";
          o += e.url_host + e.url_path;
          let l = {
            onUploadProgress: (e) => {
              const t = !!this.m_fileUploadProps.exportFn,
                o = t ? 50 : 100,
                l = (t ? 50 : 0) + (e.loaded / e.total) * o;
              l > this.m_fileUploadProps.uploadProgress &&
                (0, p.z)(() => {
                  this.m_fileUploadProps.uploadProgress = l;
                });
            },
            headers: {},
            transformRequest: [(e) => e],
          };
          for (let t = 0; t < e.request_headers.length; ++t) {
            let o = e.request_headers[t];
            "Content-Length" != o.name &&
              "Host" != o.name &&
              (l.headers[o.name] = o.value);
          }
          try {
            return await a().put(o, t, l), this.CommitFileUpload(!0, e.ugcid);
          } catch (t) {
            throw (
              (this.LogFileUploadMessage(t.response),
              (0, p.z)(() => {
                (this.m_fileUploadProps.strErrorDescription = (0, r.Xx)(
                  "#Chat_Upload_ErrorCloud",
                )),
                  (this.m_fileUploadProps.eUploadState = 3),
                  (this.m_fileUploadProps.uploadProgress = 0);
              }),
              this.CommitFileUpload(!1, e.ugcid),
              this.m_fileUploadProps.strErrorDescription)
            );
          }
        }
        async CommitFileUpload(e, t) {
          let o = this.m_fileUploadProps.file,
            l = this.m_fileUploadProps.sha1,
            i = new FormData();
          i.append("sessionid", d.De.SESSIONID),
            i.append("l", d.De.LANGUAGE),
            i.append("file_name", this.m_fileUploadProps.uploadFileName),
            i.append("file_sha", l),
            i.append("success", e ? "1" : "0"),
            i.append("ugcid", t),
            i.append("file_type", o.type),
            i.append(
              "file_image_width",
              this.m_fileUploadProps.imageWidth.toString(),
            ),
            i.append(
              "file_image_height",
              this.m_fileUploadProps.imageHeight.toString(),
            ),
            i.append("timestamp", this.m_fileUploadProps.timestamp.toString()),
            i.append("hmac", this.m_fileUploadProps.hmac),
            this.m_Callbacks.PopulateCommitFileUploadFormData(
              i,
              this.file_upload_props.uploadInfo,
              this.file_upload_props.fileInfo,
            );
          try {
            let t = await fetch(this.m_Callbacks.GetCommitFileUploadURL(), {
              method: "POST",
              body: i,
            });
            return (
              e
                ? ((this.m_fileUploadProps.uploadProgress = 0),
                  (this.m_fileUploadProps.eUploadState = 6),
                  this.m_onComplete && this.m_onComplete(1, o.size))
                : ((this.m_fileUploadProps.eUploadState = 3),
                  this.m_onComplete && this.m_onComplete(2, o.size)),
              t
            );
          } catch (t) {
            if (!e) return null;
            let l = null;
            throw (
              ((0, p.z)(() => {
                if (
                  (this.LogFileUploadMessage(t),
                  (this.m_fileUploadProps.uploadProgress = 0),
                  (this.m_fileUploadProps.eUploadState = 3),
                  t.response)
                ) {
                  let e = t.response.data;
                  t.response.status, e && e.success;
                  l = e.message
                    ? e.message
                    : (0, r.Xx)("#Chat_Settings_Error_ServerError");
                } else l = (0, r.Xx)("#ConnectionTrouble_FailedToConnect");
                (this.m_fileUploadProps.strErrorDescription = `Failed to commit upload: ${l}`),
                  this.m_onComplete && this.m_onComplete(2, o.size);
              }),
              l)
            );
          }
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
            let l = e,
              i = f(o.result),
              a = new Blob([i], { type: e.type });
            if (a) {
              let t = a;
              (t.lastModifiedDate = new Date(e.lastModified)),
                (t.name = e.name),
                (l = t);
            }
            if (0 == e.type.indexOf("image")) {
              let o = new Image();
              (o.src = URL.createObjectURL(e)),
                (o.onload = (e) => {
                  t({ file: l, width: o.width, height: o.height });
                });
            } else t({ file: l, width: 0, height: 0 });
          }),
            o.readAsArrayBuffer(e);
        });
      }
      function f(e) {
        let t = new DataView(e),
          o = 0,
          l = 0,
          i = [],
          a = 0;
        if (65496 == t.getUint16(o)) {
          o += 2;
          let p = t.getUint16(o);
          for (o += 2; o < t.byteLength && o < 131072; ) {
            if (65505 == p)
              (i[a] = { recess: l, offset: o - 2 }),
                (l = o + t.getUint16(o)),
                a++;
            else if (65498 == p) break;
            (o += t.getUint16(o)), (p = t.getUint16(o)), (o += 2);
          }
          let s = e.byteLength - l;
          if (
            (i.forEach((e) => {
              s += e.offset - e.recess;
            }),
            s === e.byteLength)
          )
            return e;
          const r = new Uint8Array(s);
          if (i.length > 0) {
            let t = 0;
            i.forEach((o) => {
              let l = o.offset - o.recess;
              r.set(new Uint8Array(e.slice(o.recess, o.offset)), t), (t += l);
            }),
              r.set(new Uint8Array(e.slice(l)), t);
          }
          return r.buffer;
        }
        return e;
      }
      (0, l.gn)([p.aD], h.prototype, "SetUploadFileError", null),
        (0, l.gn)([p.aD], h.prototype, "StartFileExportToUpload", null),
        (0, l.gn)([p.aD], h.prototype, "SetImageFileToUpload", null),
        (0, l.gn)([p.aD], h.prototype, "SetOtherFileToUpload", null),
        (0, l.gn)([p.aD], h.prototype, "SetFileToUpload", null),
        (0, l.gn)([p.aD], h.prototype, "RetryFileUpload", null),
        (0, l.gn)([p.aD], h.prototype, "BeginFileUpload", null),
        (0, l.gn)([p.aD], h.prototype, "DoFileUpload", null),
        (0, l.gn)([p.aD], h.prototype, "CommitFileUpload", null),
        (0, l.gn)([p.aD], h.prototype, "ClearFileUploadError", null),
        (0, l.gn)([p.aD], h.prototype, "Reset", null);
    },
  },
]);

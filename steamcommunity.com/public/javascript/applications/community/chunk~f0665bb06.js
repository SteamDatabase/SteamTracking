/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3853],
  {
    67660: (e, t, o) => {
      o.d(t, { i6: () => h, wI: () => f });
      var l = o(34629),
        i = o(41735),
        a = o.n(i),
        s = o(14947),
        p = o(44332),
        r = o(61859),
        d = o(78327);
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
            (0, s.Gn)(this);
        }
      }
      (0, l.Cg)([s.sH], n.prototype, "file", void 0),
        (0, l.Cg)([s.sH], n.prototype, "dataURL", void 0),
        (0, l.Cg)([s.sH], n.prototype, "imageWidth", void 0),
        (0, l.Cg)([s.sH], n.prototype, "imageHeight", void 0),
        (0, l.Cg)([s.sH], n.prototype, "eUploadState", void 0),
        (0, l.Cg)([s.sH], n.prototype, "uploadProgress", void 0),
        (0, l.Cg)([s.sH], n.prototype, "strErrorDescription", void 0);
      class h {
        constructor(e) {
          (this.m_fileUploadProps = new n()),
            (0, s.Gn)(this),
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
          var o, l, i;
          const { processor: a = m, info: s } = t;
          if (!e) return void this.SetFileToUpload(null);
          this.m_fileUploadProps.fileInfo = s;
          const p =
            null !==
              (i =
                null === (l = (o = this.m_Callbacks).GetFileNameOverride) ||
                void 0 === l
                  ? void 0
                  : l.call(o)) && void 0 !== i
              ? i
              : e.name;
          if (e.size > 1024 * this.m_Callbacks.GetMaxFileSizeMB() * 1024)
            return void this.SetUploadFileError(
              4,
              (0, r.we)(
                "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                p,
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
              (0, r.we)("#Chat_Settings_Error_ChatFileTypeNotSupported", p),
            );
          const n = await a(e);
          this.SetFileToUpload(n.file),
            (this.m_fileUploadProps.imageHeight = n.height),
            (this.m_fileUploadProps.imageWidth = n.width);
        }
        async SetOtherFileToUpload(e, t = {}) {
          var o, l, i;
          if (!e) return void this.SetFileToUpload(null);
          this.m_fileUploadProps.fileInfo = t.info;
          const a =
            null !==
              (i =
                null === (l = (o = this.m_Callbacks).GetFileNameOverride) ||
                void 0 === l
                  ? void 0
                  : l.call(o)) && void 0 !== i
              ? i
              : e.name;
          if (e.size > 1024 * this.m_Callbacks.GetMaxFileSizeMB() * 1024)
            return void this.SetUploadFileError(
              4,
              (0, r.we)(
                "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                a,
                this.m_Callbacks.GetMaxFileSizeMB(),
              ),
            );
          let s = e.name.split(".").pop().toLowerCase();
          -1 != ["zip"].indexOf(s)
            ? this.SetFileToUpload(e)
            : this.SetUploadFileError(
                5,
                (0, r.we)("#Chat_Settings_Error_ChatFileTypeNotSupported", a),
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
                (0, s.h5)(() => {
                  this.m_fileUploadProps.uploadProgress = 0.5 * e;
                });
              });
            if (1 != e || !t)
              return (
                this.SetUploadFileError(
                  3,
                  (0, r.we)("#Chat_Settings_Error_ExportFailed"),
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
              ((0, p.w)(
                !1,
                "Must SetImageFileToUpload before calling BeginFileUpload",
              ),
              new Error("Invalid State"))
            );
          (this.m_fileUploadProps.eUploadState = 2),
            (this.m_fileUploadProps.uploadInfo = e);
          let o = new FormData();
          o.append("sessionid", d.TS.SESSIONID),
            o.append("l", d.TS.LANGUAGE),
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
                  `?l=${d.TS.LANGUAGE}`,
                { method: "POST", body: o, credentials: "include" },
              );
            try {
              e = await t.json();
            } catch (e) {}
            if (!t.ok) {
              let o = null;
              throw (
                ((0, s.h5)(() => {
                  (this.m_fileUploadProps.eUploadState = 3),
                    this.LogFileUploadMessage(t),
                    (o = (null == e ? void 0 : e.message)
                      ? null == e
                        ? void 0
                        : e.message
                      : (0, r.we)("#Chat_Settings_Error_ServerError")),
                    (this.m_fileUploadProps.strErrorDescription = (0, r.we)(
                      "#Chat_Upload_ErrorStart",
                      o,
                    ));
                }),
                o)
              );
            }
            if (!e || !e.result) throw new Error();
            return (
              (this.m_fileUploadProps.timestamp = e.timestamp),
              (this.m_fileUploadProps.hmac = e.hmac),
              this.DoFileUpload(e.result)
            );
          } catch (e) {
            let t = e || (0, r.we)("#ConnectionTrouble_FailedToConnect");
            throw (
              ((0, s.h5)(() => {
                (this.m_fileUploadProps.eUploadState = 3),
                  (this.m_fileUploadProps.strErrorDescription = (0, r.we)(
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
                (0, s.h5)(() => {
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
              (0, s.h5)(() => {
                (this.m_fileUploadProps.strErrorDescription = (0, r.we)(
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
          i.append("sessionid", d.TS.SESSIONID),
            i.append("l", d.TS.LANGUAGE),
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
              credentials: "include",
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
              ((0, s.h5)(() => {
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
                    : (0, r.we)("#Chat_Settings_Error_ServerError");
                } else l = (0, r.we)("#ConnectionTrouble_FailedToConnect");
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
          let s = t.getUint16(o);
          for (o += 2; o < t.byteLength && o < 131072; ) {
            if (65505 == s)
              (i[a] = { recess: l, offset: o - 2 }),
                (l = o + t.getUint16(o)),
                a++;
            else if (65498 == s) break;
            (o += t.getUint16(o)), (s = t.getUint16(o)), (o += 2);
          }
          let p = e.byteLength - l;
          if (
            (i.forEach((e) => {
              p += e.offset - e.recess;
            }),
            p === e.byteLength)
          )
            return e;
          const r = new Uint8Array(p);
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
      (0, l.Cg)([s.XI], h.prototype, "SetUploadFileError", null),
        (0, l.Cg)([s.XI], h.prototype, "StartFileExportToUpload", null),
        (0, l.Cg)([s.XI], h.prototype, "SetImageFileToUpload", null),
        (0, l.Cg)([s.XI], h.prototype, "SetOtherFileToUpload", null),
        (0, l.Cg)([s.XI], h.prototype, "SetFileToUpload", null),
        (0, l.Cg)([s.XI], h.prototype, "RetryFileUpload", null),
        (0, l.Cg)([s.XI], h.prototype, "BeginFileUpload", null),
        (0, l.Cg)([s.XI], h.prototype, "DoFileUpload", null),
        (0, l.Cg)([s.XI], h.prototype, "CommitFileUpload", null),
        (0, l.Cg)([s.XI], h.prototype, "ClearFileUploadError", null),
        (0, l.Cg)([s.XI], h.prototype, "Reset", null);
    },
  },
]);

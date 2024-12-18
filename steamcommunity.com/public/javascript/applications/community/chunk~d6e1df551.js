/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [7121],
  {
    49693: (e, t, o) => {
      o.d(t, { op: () => r, CS: () => a, vE: () => p, Al: () => i });
      class l {
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
      class i {
        constructor(e, t) {
          (this.m_dictComponents = e), (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, o = !1) {
          const i = (function (e, t) {
            const o = [];
            let i = new l(),
              a = !1,
              s = !1,
              r = !1;
            for (let l = 0; l < e.length; l++) {
              const p = e[l];
              switch (i.type) {
                case 0:
                  "[" == p
                    ? ((i.type = 2), (s = !0))
                    : ((i.type = 1), "\\" == p && t ? (a = !a) : (i.text += p));
                  break;
                case 2:
                case 3:
                  if ("/" == p && s) (i.type = 3), (i.text = ""), (s = !1);
                  else if ("[" != p || a)
                    if ("]" != p || a)
                      "\\" == p && t
                        ? ((i.text += p), (a = !a), (s = !1))
                        : ((i.text += p), (a = !1), (s = !1));
                    else {
                      const e =
                          2 == i.type &&
                          "noparse" == i.text.toLocaleLowerCase(),
                        t =
                          3 == i.type &&
                          "noparse" == i.text.toLocaleLowerCase();
                      s || (r && !t)
                        ? (i.ConvertMalformedNodeToText(), (i.text += p))
                        : e
                          ? (r = !0)
                          : t && (r = !1),
                        (i = n(o, i)),
                        (s = !1);
                    }
                  else
                    i.ConvertMalformedNodeToText(), (i = n(o, i, 2)), (s = !0);
                  break;
                case 1:
                  "[" != p || a
                    ? "\\" == p && t
                      ? (a && (i.text += p), (a = !a))
                      : ((i.text += p), (a = !1))
                    : ((i = n(o, i, 2)), (s = !0));
              }
            }
            0 != i.type &&
              ((2 != i.type && 3 != i.type) || i.ConvertMalformedNodeToText(),
              o.push(i));
            return o;
          })(e || "", o);
          return this.Parse_BuildElements(i, t);
        }
        Parse_BuildElements(e, t) {
          let o = this.m_fnAccumulatorFactory(void 0);
          const l = [],
            i = () => (l.length < 1 ? void 0 : l[l.length - 1]),
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
          let r = !1,
            p = !0;
          const n = (e, i) => {
            if (e && e.node.tag === i.text && a.get(e.node.tag)) {
              const i = a.get(e.node.tag),
                s = l.map((e) => e.node.tag),
                n = { parentTags: s, tagname: e.node.tag, args: e.node.args },
                d = t(i.Constructor, n, ...o.GetElements());
              (o = e.accumulator),
                Array.isArray(d)
                  ? d.forEach((e) => o.AppendNode(e))
                  : o.AppendNode(d),
                (r = !!i.skipFollowingNewline),
                (p = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                o.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + i.text + "]", !1),
                (o = t),
                (p = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              var d, h;
              if (1 == e.type) {
                const t = r ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                o.AppendText(t, p), (r = !1);
              } else if (2 == e.type) {
                const t = a.get(e.tag);
                if (t) {
                  const s = i();
                  if (void 0 !== s) {
                    const t = a.get(s.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === s.node.tag &&
                      n(l.pop(), s.node);
                  }
                  l.push({ accumulator: o, node: e, bWrapTextForCopying: p }),
                    (o = this.m_fnAccumulatorFactory(e)),
                    (r = !!t.skipInternalNewline),
                    (p =
                      null !== (d = t.allowWrapTextForCopying) &&
                      void 0 !== d &&
                      d);
                } else o.AppendText("[" + e.text + "]", 0 == l.length);
              } else if (3 == e.type) {
                for (; i() && i().node.tag !== e.text && s(i().node); ) {
                  const e = l.pop();
                  n(e, e.node);
                }
                if (
                  (null === (h = i()) || void 0 === h ? void 0 : h.node.tag) ==
                  e.text
                ) {
                  const t = l.pop();
                  n(t, e);
                } else o.AppendText("[/" + e.text + "]", 0 == l.length);
              }
            });
            l.length > 0;
          ) {
            const e = l.pop();
            n(e, e.node);
          }
          return o.GetElements();
        }
      }
      function a(e, t) {
        let o = "[" + e;
        (null == t ? void 0 : t[""]) && (o += `=${s("" + t[""])}`);
        for (const e in t)
          "" !== e &&
            (o += ` ${((l = e), l.replace(/(\\| |\])/g, "\\$1"))}=${s("" + t[e])}`);
        var l;
        return (o += "]"), o;
      }
      function s(e) {
        return `"${e.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function r(e) {
        return `[/${e}]`;
      }
      function p(e) {
        return e.replace(/(\\|\[)/g, "\\$1");
      }
      function n(e, t, o = 0) {
        if (2 == t.type) {
          let e = t.text.indexOf("=");
          const o = t.text.indexOf(" ");
          if ((-1 != o && (-1 == e || o < e) && (e = o), e > 0)) {
            t.tag = t.text.substr(0, e).toLocaleLowerCase();
            const o = t.text.substr(e);
            t.args = (function (e) {
              if (!e || e.length < 1) return {};
              const t = {};
              let o = "",
                l = "",
                i = 0,
                a = 0;
              "=" == e[0] && (i = 2);
              let s = !1;
              for (a++; a < e.length; a++) {
                const r = e[a];
                let p = !0,
                  n = !1;
                switch (i) {
                  case 0:
                    if ("=" == r) return {};
                    if (" " == r) continue;
                    i = 1;
                    break;
                  case 1:
                    ("=" != r && " " != r) ||
                      s ||
                      (" " == r ? ((i = 0), (n = !0)) : (i = 2), (p = !1));
                    break;
                  case 2:
                    " " == r
                      ? ((i = 0), (p = !1), (n = !0))
                      : '"' == r
                        ? ((i = 4), (p = !1))
                        : (i = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == r && 4 != i && !s) ||
                      ('"' == r && 4 == i && !s)) &&
                      ((i = 0), (p = !1), (n = !0));
                }
                if (p)
                  if ("\\" != r || s)
                    if (((s = !1), 1 == i)) o += r;
                    else {
                      if (3 != i && 4 != i)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + i,
                        );
                      l += r;
                    }
                  else s = !0;
                n && ((t[o] = l), (o = ""), (l = ""));
              }
              0 != i && (t[o] = l);
              return t;
            })(o);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        const i = new l();
        return (i.type = o), i;
      }
    },
    67660: (e, t, o) => {
      o.d(t, { i6: () => h, wI: () => f });
      var l = o(34629),
        i = o(41735),
        a = o.n(i),
        s = o(14947),
        r = o(44332),
        p = o(61859),
        n = o(78327);
      class d {
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
      (0, l.Cg)([s.sH], d.prototype, "file", void 0),
        (0, l.Cg)([s.sH], d.prototype, "dataURL", void 0),
        (0, l.Cg)([s.sH], d.prototype, "imageWidth", void 0),
        (0, l.Cg)([s.sH], d.prototype, "imageHeight", void 0),
        (0, l.Cg)([s.sH], d.prototype, "eUploadState", void 0),
        (0, l.Cg)([s.sH], d.prototype, "uploadProgress", void 0),
        (0, l.Cg)([s.sH], d.prototype, "strErrorDescription", void 0);
      class h {
        constructor(e) {
          (this.m_fileUploadProps = new d()),
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
          const r =
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
              (0, p.we)(
                "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                r,
                this.m_Callbacks.GetMaxFileSizeMB(),
              ),
            );
          let n = e.name.split(".").pop().toLowerCase();
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
            ].indexOf(n)
          )
            return void this.SetUploadFileError(
              5,
              (0, p.we)("#Chat_Settings_Error_ChatFileTypeNotSupported", r),
            );
          const d = await a(e);
          this.SetFileToUpload(d.file),
            (this.m_fileUploadProps.imageHeight = d.height),
            (this.m_fileUploadProps.imageWidth = d.width);
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
              (0, p.we)(
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
                (0, p.we)("#Chat_Settings_Error_ChatFileTypeNotSupported", a),
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
                  (0, p.we)("#Chat_Settings_Error_ExportFailed"),
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
              ((0, r.w)(
                !1,
                "Must SetImageFileToUpload before calling BeginFileUpload",
              ),
              new Error("Invalid State"))
            );
          (this.m_fileUploadProps.eUploadState = 2),
            (this.m_fileUploadProps.uploadInfo = e);
          let o = new FormData();
          o.append("sessionid", n.TS.SESSIONID),
            o.append("l", n.TS.LANGUAGE),
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
                  `?l=${n.TS.LANGUAGE}`,
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
                      : (0, p.we)("#Chat_Settings_Error_ServerError")),
                    (this.m_fileUploadProps.strErrorDescription = (0, p.we)(
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
            let t = e || (0, p.we)("#ConnectionTrouble_FailedToConnect");
            throw (
              ((0, s.h5)(() => {
                (this.m_fileUploadProps.eUploadState = 3),
                  (this.m_fileUploadProps.strErrorDescription = (0, p.we)(
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
                (this.m_fileUploadProps.strErrorDescription = (0, p.we)(
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
          i.append("sessionid", n.TS.SESSIONID),
            i.append("l", n.TS.LANGUAGE),
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
                    : (0, p.we)("#Chat_Settings_Error_ServerError");
                } else l = (0, p.we)("#ConnectionTrouble_FailedToConnect");
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
          let r = e.byteLength - l;
          if (
            (i.forEach((e) => {
              r += e.offset - e.recess;
            }),
            r === e.byteLength)
          )
            return e;
          const p = new Uint8Array(r);
          if (i.length > 0) {
            let t = 0;
            i.forEach((o) => {
              let l = o.offset - o.recess;
              p.set(new Uint8Array(e.slice(o.recess, o.offset)), t), (t += l);
            }),
              p.set(new Uint8Array(e.slice(l)), t);
          }
          return p.buffer;
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

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2558],
  {
    72869: (e) => {
      e.exports = {
        Bold: "bbcodes_Bold_1opdq",
        Italic: "bbcodes_Italic_3PSCE",
        Paragraph: "bbcodes_Paragraph_3zjkn",
        Header1: "bbcodes_Header1_38GFQ",
        Header2: "bbcodes_Header2_2ZqUv",
        Header3: "bbcodes_Header3_KePJs",
        Header4: "bbcodes_Header4_12a97",
        Header5: "bbcodes_Header5_4GmIV",
        CenterSpan: "bbcodes_CenterSpan_3RAiC",
        SmallText: "bbcodes_SmallText_UvZC_",
        Underline: "bbcodes_Underline_3vpZi",
        Strike: "bbcodes_Strike_3dQvq",
        Spoiler: "bbcodes_Spoiler_3Caxn",
        Revealed: "bbcodes_Revealed_35II0",
        SpoilerText: "bbcodes_SpoilerText_1owPz",
        DisabledMouseEvents: "bbcodes_DisabledMouseEvents_3QOEi",
        BlockQuote: "bbcodes_BlockQuote_2sfht",
        QuoteAuthor: "bbcodes_QuoteAuthor_2CMyS",
        PullQuote: "bbcodes_PullQuote_3DRIe",
        Code: "bbcodes_Code_1Aels",
        CodeBlock: "bbcodes_CodeBlock_1paKw",
        List: "bbcodes_List_tfM5V",
        OrderedList: "bbcodes_OrderedList_3Ve1E",
        ListItem: "bbcodes_ListItem_3DlO0",
        HR: "bbcodes_HR_26oRB",
        Table: "bbcodes_Table_2Z51g",
        NoBorder: "bbcodes_NoBorder_3aoME",
        TableRow: "bbcodes_TableRow_Ms77J",
        TableData: "bbcodes_TableData_2t3YC",
        TableHeader: "bbcodes_TableHeader_1vvfx",
        EqualCells: "bbcodes_EqualCells_5b-QB",
        ExpandSectionBlock: "bbcodes_ExpandSectionBlock_YvEQh",
        ExpandSectionHeader: "bbcodes_ExpandSectionHeader_3OxxM",
        EmbedArrow: "bbcodes_EmbedArrow_WXJl-",
        ExpandSectionBody: "bbcodes_ExpandSectionBody_2sCNL",
        ExpandSection_WithTitle: "bbcodes_ExpandSection_WithTitle_22nl0",
        LinkButton: "bbcodes_LinkButton_lMVeY",
        Image: "bbcodes_Image_1CmpC",
      };
    },
    80878: (e, o, t) => {
      "use strict";
      t.d(o, { Gg: () => _, L4: () => m });
      var i = t(85556),
        l = t(80751),
        a = t.n(l),
        s = t(54842),
        r = t(62210),
        p = t(31846),
        d = t(37563);
      class n {
        constructor() {
          (this.file = void 0),
            (this.dataURL = void 0),
            (this.timestamp = 0),
            (this.imageWidth = 0),
            (this.imageHeight = 0),
            (this.eUploadState = 0),
            (this.uploadProgress = 0),
            (this.strErrorDescription = void 0),
            (0, s.rC)(this);
        }
      }
      (0, i.gn)([s.LO], n.prototype, "file", void 0),
        (0, i.gn)([s.LO], n.prototype, "dataURL", void 0),
        (0, i.gn)([s.LO], n.prototype, "imageWidth", void 0),
        (0, i.gn)([s.LO], n.prototype, "imageHeight", void 0),
        (0, i.gn)([s.LO], n.prototype, "eUploadState", void 0),
        (0, i.gn)([s.LO], n.prototype, "uploadProgress", void 0),
        (0, i.gn)([s.LO], n.prototype, "strErrorDescription", void 0);
      class _ {
        constructor(e) {
          (this.m_fileUploadProps = new n()),
            (0, s.rC)(this),
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
        SetUploadFileError(e, o) {
          (this.m_fileUploadProps.eUploadState = e),
            (this.m_fileUploadProps.strErrorDescription = o),
            (this.m_fileUploadProps.displayFileName = null);
        }
        SetImageFileToUpload(e, o = h) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!e) return void this.SetFileToUpload(null);
            if (e.size > 1024 * this.m_Callbacks.GetMaxFileSizeMB() * 1024)
              return void (10 == this.m_Callbacks.GetMaxFileSizeMB()
                ? this.SetUploadFileError(
                    4,
                    (0, p.Xx)("#Chat_Settings_Error_ChatFileTooLarge", e.name),
                  )
                : this.SetUploadFileError(
                    4,
                    (0, p.Xx)(
                      "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                      e.name,
                      this.m_Callbacks.GetMaxFileSizeMB(),
                    ),
                  ));
            let t = e.name.split(".").pop().toLowerCase();
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
              ].indexOf(t)
            )
              return void this.SetUploadFileError(
                5,
                (0, p.Xx)(
                  "#Chat_Settings_Error_ChatFileTypeNotSupported",
                  e.name,
                ),
              );
            const i = yield o(e);
            this.SetFileToUpload(i.file),
              (this.m_fileUploadProps.imageHeight = i.height),
              (this.m_fileUploadProps.imageWidth = i.width);
          });
        }
        SetFileToUpload(e) {
          if (
            ((this.m_fileUploadProps.file = e),
            (this.m_fileUploadProps.dataURL = null),
            (this.m_fileUploadProps.hmac = null),
            (this.m_fileUploadProps.sha1 = null),
            (this.m_fileUploadProps.imageWidth = 0),
            (this.m_fileUploadProps.imageHeight = 0),
            !e)
          )
            return void (this.m_fileUploadProps.eUploadState = 0);
          this.m_fileUploadProps.eUploadState = 1;
          let o = "";
          for (; o.length < 40; )
            o += Math.floor(16 * Math.random()).toString(16);
          let t = "";
          try {
            t = URL.createObjectURL(e);
          } catch (e) {
            console.error(`Failed to created object URL from file: ${e}`);
          }
          (this.m_fileUploadProps.dataURL = t),
            (this.m_fileUploadProps.displayFileName = e.name),
            (this.m_fileUploadProps.uploadFileName =
              window.performance.now() + "_" + e.name),
            (this.m_fileUploadProps.sha1 = o),
            (this.m_fileUploadProps.hmac = ""),
            (this.m_fileUploadProps.timestamp = 0);
        }
        RetryFileUpload() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.BeginFileUpload(this.m_fileUploadProps.additionalProps);
          });
        }
        BeginFileUpload(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let o = this.m_fileUploadProps.file;
            if (!o)
              throw (
                ((0, r.X)(
                  !1,
                  "Must SetImageFileToUpload before calling BeginFileUpload",
                ),
                new Error("Invalid State"))
              );
            (this.m_fileUploadProps.eUploadState = 2),
              (this.m_fileUploadProps.uploadProgress = 0),
              (this.m_fileUploadProps.additionalProps = e);
            let t = new FormData();
            t.append("sessionid", d.De.SESSIONID),
              t.append("l", d.De.LANGUAGE),
              t.append("file_size", o.size.toString()),
              t.append("file_name", this.m_fileUploadProps.uploadFileName),
              t.append("file_sha", this.m_fileUploadProps.sha1),
              t.append(
                "file_image_width",
                this.m_fileUploadProps.imageWidth.toString(),
              ),
              t.append(
                "file_image_height",
                this.m_fileUploadProps.imageHeight.toString(),
              ),
              t.append("file_type", o.type),
              this.m_Callbacks.PopulateBeginFileUploadFormData &&
                this.m_Callbacks.PopulateBeginFileUploadFormData(
                  t,
                  this.file_upload_props.additionalProps,
                );
            try {
              let e,
                o = yield fetch(
                  this.m_Callbacks.GetBeginFileUploadURL() +
                    `?l=${d.De.LANGUAGE}`,
                  { method: "POST", body: t, credentials: "include" },
                );
              if ((o.ok && (e = yield o.json()), !e || !e.result))
                throw new Error();
              return (
                (this.m_fileUploadProps.timestamp = e.timestamp),
                (this.m_fileUploadProps.hmac = e.hmac),
                this.DoFileUpload(e.result)
              );
            } catch (e) {
              const o = null == e ? void 0 : e.response;
              let t = null;
              throw (
                ((0, s.z)(() => {
                  if (
                    ((this.m_fileUploadProps.eUploadState = 3),
                    this.LogFileUploadMessage(o),
                    o)
                  ) {
                    let e = o.data;
                    o.status, e && e.success;
                    t = (null == e ? void 0 : e.message)
                      ? null == e
                        ? void 0
                        : e.message
                      : (0, p.Xx)("#Chat_Settings_Error_ServerError");
                  } else t = (0, p.Xx)("#ConnectionTrouble_FailedToConnect");
                  this.m_fileUploadProps.strErrorDescription = (0, p.Xx)(
                    "#Chat_Upload_ErrorStart",
                    t,
                  );
                }),
                t)
              );
            }
          });
        }
        DoFileUpload(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let o = this.m_fileUploadProps.file,
              t = e.use_https ? "https://" : "http://";
            t += e.url_host + e.url_path;
            let i = {
              onUploadProgress: (e) => {
                let o = (e.loaded / e.total) * 100;
                o > this.m_fileUploadProps.uploadProgress &&
                  (0, s.z)(() => {
                    this.m_fileUploadProps.uploadProgress = o;
                  });
              },
              headers: {},
              transformRequest: [(e) => e],
            };
            for (let o = 0; o < e.request_headers.length; ++o) {
              let t = e.request_headers[o];
              "Content-Length" != t.name &&
                "Host" != t.name &&
                (i.headers[t.name] = t.value);
            }
            try {
              return yield a().put(t, o, i), this.CommitFileUpload(!0, e.ugcid);
            } catch (o) {
              throw (
                (this.LogFileUploadMessage(o.response),
                (0, s.z)(() => {
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
        CommitFileUpload(e, o) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let t = this.m_fileUploadProps.file,
              i = this.m_fileUploadProps.sha1,
              l = new FormData();
            l.append("sessionid", d.De.SESSIONID),
              l.append("l", d.De.LANGUAGE),
              l.append("file_name", this.m_fileUploadProps.uploadFileName),
              l.append("file_sha", i),
              l.append("success", e ? "1" : "0"),
              l.append("ugcid", o),
              l.append("file_type", t.type),
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
                this.file_upload_props.additionalProps,
              );
            try {
              let o = yield fetch(this.m_Callbacks.GetCommitFileUploadURL(), {
                method: "POST",
                body: l,
              });
              return (
                e
                  ? ((this.m_fileUploadProps.uploadProgress = 0),
                    (this.m_fileUploadProps.eUploadState = 6))
                  : (this.m_fileUploadProps.eUploadState = 3),
                o
              );
            } catch (o) {
              if (!e) return null;
              let t = null;
              throw (
                ((0, s.z)(() => {
                  if (
                    (this.LogFileUploadMessage(o),
                    (this.m_fileUploadProps.uploadProgress = 0),
                    (this.m_fileUploadProps.eUploadState = 3),
                    o.response)
                  ) {
                    let e = o.response.data;
                    o.response.status, e && e.success;
                    t = e.message
                      ? e.message
                      : (0, p.Xx)("#Chat_Settings_Error_ServerError");
                  } else t = (0, p.Xx)("#ConnectionTrouble_FailedToConnect");
                  this.m_fileUploadProps.strErrorDescription = `Failed to commit upload: ${t}`;
                }),
                t)
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
      function h(e) {
        return new Promise((o) => {
          let t = new FileReader();
          (t.onload = () => {
            let i = e,
              l = m(t.result),
              a = new Blob([l], { type: e.type });
            if (a) {
              let o = a;
              (o.lastModifiedDate = new Date(e.lastModified)),
                (o.name = e.name),
                (i = o);
            }
            if (0 == e.type.indexOf("image")) {
              let t = new Image();
              (t.src = URL.createObjectURL(e)),
                (t.onload = (e) => {
                  o({ file: i, width: t.width, height: t.height });
                });
            } else o({ file: i, width: 0, height: 0 });
          }),
            t.readAsArrayBuffer(e);
        });
      }
      function m(e) {
        let o = new DataView(e),
          t = 0,
          i = 0,
          l = [],
          a = 0;
        if (65496 == o.getUint16(t)) {
          t += 2;
          let s = o.getUint16(t);
          for (t += 2; t < o.byteLength && t < 131072; ) {
            if (65505 == s)
              (l[a] = { recess: i, offset: t - 2 }),
                (i = t + o.getUint16(t)),
                a++;
            else if (65498 == s) break;
            (t += o.getUint16(t)), (s = o.getUint16(t)), (t += 2);
          }
          let r = e.byteLength - i;
          if (
            (l.forEach((e) => {
              r += e.offset - e.recess;
            }),
            r === e.byteLength)
          )
            return e;
          const p = new Uint8Array(r);
          if (l.length > 0) {
            let o = 0;
            l.forEach((t) => {
              let i = t.offset - t.recess;
              p.set(new Uint8Array(e.slice(t.recess, t.offset)), o), (o += i);
            }),
              p.set(new Uint8Array(e.slice(i)), o);
          }
          return p.buffer;
        }
        return e;
      }
      (0, i.gn)([s.aD], _.prototype, "SetUploadFileError", null),
        (0, i.gn)([s.aD], _.prototype, "SetImageFileToUpload", null),
        (0, i.gn)([s.aD], _.prototype, "SetFileToUpload", null),
        (0, i.gn)([s.aD], _.prototype, "RetryFileUpload", null),
        (0, i.gn)([s.aD], _.prototype, "BeginFileUpload", null),
        (0, i.gn)([s.aD], _.prototype, "DoFileUpload", null),
        (0, i.gn)([s.aD], _.prototype, "CommitFileUpload", null),
        (0, i.gn)([s.aD], _.prototype, "ClearFileUploadError", null),
        (0, i.gn)([s.aD], _.prototype, "Reset", null);
    },
  },
]);

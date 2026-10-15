(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [51220],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = {
          List: () => "/notes/list",
          AppNotes: (_, _) => `/notes/app/${_}/${_ != null ? _ : ""}`,
          ShortcutNotes: (_, _) => `/notes/shortcut/${_}/${_ != null ? _ : ""}`,
        };
        function _(_, _) {
          return "appid" in _
            ? _.AppNotes(_.appid, _)
            : _.ShortcutNotes(_.shortcut, _);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        function _(_) {
          return "unknown ECloudPendingRemoteOperation ( " + _ + " )";
        }
        function _(_) {
          return "unknown EDisplayManagerRGBRange ( " + _ + " )";
        }
        function _(_) {
          return "unknown ESteamDeckKeyboardLayout ( " + _ + " )";
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    _: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    _: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    _: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    _: {
                      _: 4,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamMessagesClientIClientForcedEnumDependencies";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    _: {
                      _: 1,
                      _: 0,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    netmask: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceIP4Address";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.addresses || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    addresses: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    dns_ip: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readInt32,
                      pbr: _._.readPackedInt32,
                      _: _._.writeRepeatedInt32,
                    },
                    gateway_ip: {
                      _: 3,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    is_dhcp_enabled: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_default_route: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_enabled: {
                      _: 6,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceIP4Config";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    _: {
                      _: 1,
                      _: "",
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceIP6Address";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.addresses || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    addresses: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    dns_ip: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeRepeatedString,
                    },
                    gateway_ip: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_dhcp_enabled: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_default_route: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_enabled: {
                      _: 6,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceIP6Config";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.devices || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    devices: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    is_wifi_enabled: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_wifi_scanning_enabled: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDevicesData";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    _: {
                      _: 1,
                      _: 0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    etype: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    estate: {
                      _: 3,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    mac: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    vendor: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    product: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    ip4: {
                      _: 7,
                      _: _,
                    },
                    ip6: {
                      _: 8,
                      _: _,
                    },
                    wired: {
                      _: 9,
                      _: _,
                    },
                    wireless: {
                      _: 10,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDevicesData_Device";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.is_cable_present || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    is_cable_present: {
                      _: 1,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    speed_mbit: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    friendly_name: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDevicesData_Device_Wired";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.aps || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    aps: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    esecurity_supported: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDevicesData_Device_Wireless";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    _: {
                      _: 1,
                      _: 0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    estrength: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    ssid: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_active: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_autoconnect: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    esecurity: {
                      _: 6,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    user_name: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    password: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    strength_raw: {
                      _: 9,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    band_filter: {
                      _: 10,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    has_non_6ghz_channel: {
                      _: 11,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_saved: {
                      _: 12,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDevicesData_Device_Wireless_AP";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.device_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    device_id: {
                      _: 1,
                      _: 0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    ap_known: {
                      _: 2,
                      _: _,
                    },
                    ap_custom: {
                      _: 3,
                      _: _,
                    },
                    credentials: {
                      _: 4,
                      _: _,
                    },
                    ip4: {
                      _: 5,
                      _: _,
                    },
                    ip6: {
                      _: 6,
                      _: _,
                    },
                    wireless: {
                      _: 7,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceConnect";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.ap_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    ap_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceConnect_KnownAP";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.ssid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    ssid: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    esecurity: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceConnect_CustomAP";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.username || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    username: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    password: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceConnect_Credentials";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.band_filter || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    band_filter: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceConnect_Wireless";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.wireless || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    wireless: {
                      _: 2,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceSetOptions";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.ap_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    ap_id: {
                      _: 1,
                      _: !0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    is_autoconnect: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    band_filter: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceSetOptions_Wireless";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.drives || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    drives: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    block_devices: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    is_unmount_supported: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_trim_supported: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_trim_running: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgStorageDevicesData";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    _: {
                      _: 1,
                      _: 0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    model: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    vendor: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    serial: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_ejectable: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    size_bytes: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    media_type: {
                      _: 7,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgStorageDevicesData_Drive";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    _: {
                      _: 1,
                      _: 0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    drive_id: {
                      _: 2,
                      _: 0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    path: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    friendly_path: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    label: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    size_bytes: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    is_formattable: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_read_only: {
                      _: 8,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_root_device: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    content_type: {
                      _: 10,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    filesystem_type: {
                      _: 11,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    mount_path: {
                      _: 12,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgStorageDevicesData_BlockDevice";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.operation || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    operation: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    machine_name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    client_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    time_last_updated: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    os_type: {
                      _: 5,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    device_type: {
                      _: 6,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_PendingRemoteOperation";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.operations || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    operations: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgCloudPendingRemoteOperations";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.adapters || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    adapters: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    devices: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    manager: {
                      _: 3,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgBluetoothDevicesData";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    _: {
                      _: 1,
                      _: 0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    mac: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    name: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_enabled: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_discovering: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgBluetoothDevicesData_Adapter";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    _: {
                      _: 1,
                      _: 0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    adapter_id: {
                      _: 2,
                      _: 0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    etype: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    mac: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    name: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_connected: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_paired: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    strength_raw: {
                      _: 8,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    wake_allowed: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    wake_allowed_supported: {
                      _: 10,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    battery_percent: {
                      _: 11,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgBluetoothDevicesData_Device";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.is_bluetooth_enabled || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    is_bluetooth_enabled: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgBluetoothDevicesData_Manager";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    value: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfDiagnosticEntry";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    timestamp: {
                      _: 2,
                      _: _._.readDouble,
                      _: _._.writeDouble,
                    },
                    tx_bytes_total: {
                      _: 3,
                      _: _._.readInt64String,
                      _: _._.writeInt64String,
                    },
                    rx_bytes_total: {
                      _: 4,
                      _: _._.readInt64String,
                      _: _._.writeInt64String,
                    },
                    tx_bytes_per_sec: {
                      _: 5,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    rx_bytes_per_sec: {
                      _: 6,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfNetworkInterface";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.entries || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    entries: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    interfaces: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    battery_temp_c: {
                      _: 3,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfDiagnosticInfo";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.cpu_governor_manual_min_mhz || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [13, 21, 26, 27], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    cpu_governor_manual_min_mhz: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    cpu_governor_manual_max_mhz: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    fsr_sharpness_min: {
                      _: 3,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    fsr_sharpness_max: {
                      _: 4,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    perf_overlay_is_standalone: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_manual_display_refresh_rate_available: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    display_refresh_manual_hz_min: {
                      _: 11,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    display_refresh_manual_hz_max: {
                      _: 12,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    fps_limit_options: {
                      _: 13,
                      _: !0,
                      _: !0,
                      _: _._.readInt32,
                      pbr: _._.readPackedInt32,
                      _: _._.writeRepeatedInt32,
                    },
                    tdp_limit_min: {
                      _: 14,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    tdp_limit_max: {
                      _: 15,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    display_external_refresh_manual_hz_min: {
                      _: 19,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    display_external_refresh_manual_hz_max: {
                      _: 20,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    fps_limit_options_external: {
                      _: 21,
                      _: !0,
                      _: !0,
                      _: _._.readInt32,
                      pbr: _._.readPackedInt32,
                      _: _._.writeRepeatedInt32,
                    },
                    is_vrr_supported: {
                      _: 23,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_dynamic_refresh_rate_in_steam_supported: {
                      _: 24,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    split_scaling_filters_available: {
                      _: 26,
                      _: !0,
                      _: !0,
                      _: _._.readEnum,
                      pbr: _._.readPackedEnum,
                      _: _._.writeRepeatedEnum,
                    },
                    split_scaling_scalers_available: {
                      _: 27,
                      _: !0,
                      _: !0,
                      _: _._.readEnum,
                      pbr: _._.readPackedEnum,
                      _: _._.writeRepeatedEnum,
                    },
                    disable_refresh_rate_management: {
                      _: 30,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfLimits";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.diagnostic_update_rate || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    diagnostic_update_rate: {
                      _: 1,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    graphics_profiling_service_state: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    perf_overlay_service_state: {
                      _: 4,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    perf_overlay_level: {
                      _: 5,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    is_show_perf_overlay_over_steam_enabled: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_advanced_settings_enabled: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    allow_external_display_refresh_control: {
                      _: 8,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    hdr_on_sdr_tonemap_operator: {
                      _: 12,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    is_hdr_debug_heatmap_enabled: {
                      _: 13,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    force_hdr_wide_gammut_for_sdr: {
                      _: 15,
                      _: !0,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    sdr_to_hdr_brightness: {
                      _: 22,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    is_color_management_enabled: {
                      _: 21,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfSettingsGlobal";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.fps_limit || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    fps_limit: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    is_variable_resolution_enabled: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_dynamic_refresh_rate_enabled: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    tdp_limit: {
                      _: 5,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    cpu_governor: {
                      _: 6,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    cpu_governor_manual_mhz: {
                      _: 7,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    scaling_filter: {
                      _: 8,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    fsr_sharpness: {
                      _: 9,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    is_fps_limit_enabled: {
                      _: 10,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_tdp_limit_enabled: {
                      _: 11,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_low_latency_mode_enabled: {
                      _: 12,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    display_refresh_manual_hz: {
                      _: 13,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    is_game_perf_profile_enabled: {
                      _: 14,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    display_external_refresh_manual_hz: {
                      _: 17,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    fps_limit_external: {
                      _: 18,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    is_tearing_enabled: {
                      _: 19,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_vrr_enabled: {
                      _: 20,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    use_dynamic_refresh_rate_in_steam: {
                      _: 23,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    split_scaling_filter: {
                      _: 24,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    split_scaling_scaler: {
                      _: 25,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfSettingsPerApp";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.global || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    global: {
                      _: 1,
                      _: _,
                    },
                    per_app: {
                      _: 2,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfSettings";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.diagnostic_update_rate || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    diagnostic_update_rate: {
                      _: 1,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    system_trace_service_state: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    graphics_profiling_service_state: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    perf_overlay_service_state: {
                      _: 4,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    perf_overlay_level: {
                      _: 5,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    gpu_performance_level: {
                      _: 6,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    gpu_performance_manual_mhz: {
                      _: 7,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    fps_limit: {
                      _: 8,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    is_variable_resolution_enabled: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_dynamic_refresh_rate_enabled: {
                      _: 10,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    tdp_limit: {
                      _: 11,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    cpu_governor: {
                      _: 12,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    cpu_governor_manual_mhz: {
                      _: 13,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    scaling_filter: {
                      _: 14,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    fsr_sharpness: {
                      _: 15,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    is_fps_limit_enabled: {
                      _: 16,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_tdp_limit_enabled: {
                      _: 17,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_show_perf_overlay_over_steam_enabled: {
                      _: 18,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_low_latency_mode_enabled: {
                      _: 19,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    display_refresh_manual_hz: {
                      _: 20,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    is_game_perf_profile_enabled: {
                      _: 21,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfSettingsV1";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.limits || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    limits: {
                      _: 1,
                      _: _,
                    },
                    settings: {
                      _: 2,
                      _: _,
                    },
                    current_game_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    active_profile_game_id: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfState";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gameid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gameid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    reset_to_default: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    settings_delta: {
                      _: 3,
                      _: _,
                    },
                    skip_storage_update: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfUpdateSettings";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.profile_game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    profile_game_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    settings: {
                      _: 2,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfLegacySettingEntry";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.global || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    global: {
                      _: 1,
                      _: _,
                    },
                    per_app_settings: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfLegacySettings";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.state || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    state: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    rtime_last_checked: {
                      _: 2,
                      _: _._.readFixed32,
                      _: _._.writeFixed32,
                    },
                    version_current: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    version_available: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    stage_progress: {
                      _: 5,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    rtime_estimated_completion: {
                      _: 6,
                      _: _._.readFixed32,
                      _: _._.writeFixed32,
                    },
                    old_fw_workaround: {
                      _: 7,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDockUpdateState";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.update_state || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    update_state: {
                      _: 1,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDockState";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.check_only || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    check_only: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDockUpdateFirmware";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.entries || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    entries: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    is_muted: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioVolume";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.echannel || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    echannel: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    volume: {
                      _: 2,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioVolume_ChannelEntry";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    _: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rtime_last_update: {
                      _: 2,
                      _: _._.readFixed32,
                      _: _._.writeFixed32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerObject";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.base || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    base: {
                      _: 1,
                      _: _,
                    },
                    name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    nick: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    description: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    api: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerDevice";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.base || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    base: {
                      _: 1,
                      _: _,
                    },
                    device_id: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    name: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    nick: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    description: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    edirection: {
                      _: 6,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    volume: {
                      _: 7,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerNode";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.base || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    base: {
                      _: 1,
                      _: _,
                    },
                    node_id: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    name: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    alias: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    etype: {
                      _: 6,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    edirection: {
                      _: 7,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    is_physical: {
                      _: 8,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_terminal: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_control: {
                      _: 10,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_monitor: {
                      _: 11,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerPort";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.base || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    base: {
                      _: 1,
                      _: _,
                    },
                    output_node_id: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    output_port_id: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    input_node_id: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    input_port_id: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerLink";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.devices || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2, 3, 4], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    devices: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    nodes: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    ports: {
                      _: 3,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    links: {
                      _: 4,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerStateHW";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rtime_filter || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    rtime_filter: {
                      _: 1,
                      _: _._.readFixed32,
                      _: _._.writeFixed32,
                    },
                    counter: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    _: {
                      _: 3,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerState";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.counter || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    counter: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerUpdateSomething";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    _: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    width: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    height: {
                      _: 3,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    refresh_hz: {
                      _: 4,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDisplayMode";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [11, 18], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    _: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    description: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_primary: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_enabled: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_internal: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    has_mode_override: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    width_mm: {
                      _: 8,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    height_mm: {
                      _: 9,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    current_mode_id: {
                      _: 10,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    modes: {
                      _: 11,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    refresh_rate_min: {
                      _: 12,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    refresh_rate_max: {
                      _: 13,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    is_vrr_capable: {
                      _: 14,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_vrr_output_active: {
                      _: 15,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_hdr_capable: {
                      _: 16,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_hdr_output_active: {
                      _: 17,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    supported_refresh_rates: {
                      _: 18,
                      _: !0,
                      _: !0,
                      _: _._.readInt32,
                      pbr: _._.readPackedInt32,
                      _: _._.writeRepeatedInt32,
                    },
                    rgb_range: {
                      _: 19,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDisplay";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.width || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    width: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    height: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDisplayManagerGameResolution";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.displays || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    displays: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    is_mode_switching_supported: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    compatibility_mode: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    game_resolution_override_native: {
                      _: 4,
                      _: _,
                    },
                    game_resolution_override_default: {
                      _: 5,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDisplayManagerState";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.display_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    display_id: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    mode_id: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    rgb_range: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDisplayManagerSetMode";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.idle_backlight_dim_battery_seconds || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    idle_backlight_dim_battery_seconds: {
                      _: 1,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    idle_backlight_dim_ac_seconds: {
                      _: 2,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    is_adaptive_brightness_available: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    display_adaptive_brightness_enabled: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    display_nightmode_enabled: {
                      _: 10,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    display_nightmode_tintstrength: {
                      _: 11,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    display_nightmode_maxhue: {
                      _: 12,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    display_nightmode_maxsat: {
                      _: 13,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    display_nightmode_uiexp: {
                      _: 14,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    display_nightmode_blend: {
                      _: 15,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    display_nightmode_reset: {
                      _: 16,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    display_nightmode_schedule_enabled: {
                      _: 17,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    display_nightmode_schedule_starttime: {
                      _: 18,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    display_nightmode_schedule_endtime: {
                      _: 19,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    display_diagnostics_enabled: {
                      _: 20,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    als_lux_primary: {
                      _: 21,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    als_lux_median: {
                      _: 22,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    display_backlight_raw: {
                      _: 23,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    display_brightness_adaptivemin: {
                      _: 24,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    display_brightness_adaptivemax: {
                      _: 25,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    is_fan_control_available: {
                      _: 27,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    fan_control_mode: {
                      _: 28,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    is_display_brightness_available: {
                      _: 29,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_display_colormanagement_available: {
                      _: 31,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    display_colorgamut: {
                      _: 32,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    als_lux_alternate: {
                      _: 33,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    is_display_colortemp_available: {
                      _: 34,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    display_colortemp: {
                      _: 35,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    display_colortemp_default: {
                      _: 36,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    display_colortemp_enabled: {
                      _: 37,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    display_colorgamut_labelset: {
                      _: 38,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    display_brightness_overdrive_hdr_split: {
                      _: 39,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemManagerSettings";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.branch || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    branch: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    custom_branch: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSelectOSBranchParams";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.stage_progress || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    stage_progress: {
                      _: 1,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    stage_size_bytes: {
                      _: 2,
                      _: _._.readInt64String,
                      _: _._.writeInt64String,
                    },
                    rtime_estimated_completion: {
                      _: 3,
                      _: _._.readFixed32,
                      _: _._.writeFixed32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemUpdateProgress";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.type || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    eresult: {
                      _: 2,
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rtime_checked: {
                      _: 3,
                      _: _._.readFixed32,
                      _: _._.writeFixed32,
                    },
                    available: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    version: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    auto_message: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    system_restart_pending: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemUpdateCheckResult";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.apply_types || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    apply_types: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readEnum,
                      pbr: _._.readPackedEnum,
                      _: _._.writeRepeatedEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemUpdateApplyParams";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.type || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    eresult: {
                      _: 2,
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    requires_client_restart: {
                      _: 3,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    requires_system_restart: {
                      _: 4,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemUpdateApplyResult";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.state || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3, 4], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    state: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    progress: {
                      _: 2,
                      _: _,
                    },
                    update_check_results: {
                      _: 3,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    update_apply_results: {
                      _: 4,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    supports_os_updates: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemUpdateState";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgAchievementChange";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.cells || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    cells: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgCellList";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.cell_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    cell_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    loc_name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgCellList_Cell";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [10], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    exe: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    start_dir: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    icon: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    path: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    args: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    app_name: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    override_appid: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    flatpak_appid: {
                      _: 9,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    tags: {
                      _: 10,
                      _: !0,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeRepeatedString,
                    },
                    remote_client_id: {
                      _: 11,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    is_hidden: {
                      _: 12,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_temporary: {
                      _: 13,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_openvr: {
                      _: 14,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    allow_desktop_config: {
                      _: 15,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    allow_overlay: {
                      _: 16,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    rt_last_played_time: {
                      _: 17,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    is_devkit_shortcut: {
                      _: 18,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    devkit_gameid: {
                      _: 19,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    remote_launch_available: {
                      _: 20,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    sortas: {
                      _: 21,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgShortcutInfo";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.shorcuts || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    shorcuts: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgShortcutInfos";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appids || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appids: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgShortcutAppIds";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.selected_device_name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    selected_device_name: {
                      _: 1,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    monitors: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgMonitorInfo";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.monitor_device_name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    monitor_device_name: {
                      _: 1,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    monitor_display_name: {
                      _: 2,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgMonitorInfo_MonitorInfo";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.report_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    report_id: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgGenerateSystemReportReply";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.port || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    port: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    auth_key: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgWebUITransportInfo";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.connect_count || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    connect_count: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgWebUITransportFailure";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.key_sha || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    key_sha: {
                      _: 1,
                      _: _._.readBytes,
                      _: _._.writeBytes,
                    },
                    code_sha: {
                      _: 2,
                      _: _._.readBytes,
                      _: _._.writeBytes,
                    },
                    time_last_reported: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientShaderHitCacheEntry";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.entries || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    entries: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientShaderHitCache";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = null;
        var _ = Object.defineProperty,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [9], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    ugcid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    filename: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    timestamp: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    file_size: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    url: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    steamid_creator: {
                      _: 7,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    flags: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    platforms_to_sync: {
                      _: 9,
                      _: !0,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeRepeatedString,
                    },
                    file_sha: {
                      _: 10,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    compressed_file_size: {
                      _: 11,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_UserFile";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [6, 7, 8], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    file_size: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    filename: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    file_sha: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_public: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    platforms_to_sync: {
                      _: 6,
                      _: !0,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeRepeatedString,
                    },
                    request_headers_names: {
                      _: 7,
                      _: !0,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeRepeatedString,
                    },
                    request_headers_values: {
                      _: 8,
                      _: !0,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeRepeatedString,
                    },
                    upload_batch_id: {
                      _: 9,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginHTTPUpload_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.ugcid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [6], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    ugcid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    timestamp: {
                      _: 2,
                      _: _._.readFixed32,
                      _: _._.writeFixed32,
                    },
                    url_host: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    url_path: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    use_https: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    request_headers: {
                      _: 6,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginHTTPUpload_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    value: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginHTTPUpload_Response_HTTPHeaders";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.transfer_succeeded || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    transfer_succeeded: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    appid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    file_sha: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    filename: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CommitHTTPUpload_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.file_committed || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    file_committed: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CommitHTTPUpload_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    file_size: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    filename: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    file_sha: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    content_type: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_public: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginUGCUpload_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.storage_system || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [7], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    storage_system: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    ugcid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    timestamp: {
                      _: 3,
                      _: _._.readFixed32,
                      _: _._.writeFixed32,
                    },
                    url_host: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    url_path: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    use_https: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    request_headers: {
                      _: 7,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginUGCUpload_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    value: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginUGCUpload_Response_HTTPHeaders";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.transfer_succeeded || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    transfer_succeeded: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    appid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    ugcid: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CommitUGCUpload_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.file_committed || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    file_committed: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CommitUGCUpload_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.ugcid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    ugcid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    appid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetFileDetails_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.details || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    details: {
                      _: 1,
                      _: _,
                    },
                    rangecheck_host: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetFileDetails_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.app_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    app_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    file_name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetSingleFileInfo_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.app_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    app_id: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    file_name: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    sha_file: {
                      _: 4,
                      _: _._.readBytes,
                      _: _._.writeBytes,
                    },
                    time_stamp: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    raw_file_size: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    is_explicit_delete: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetSingleFileInfo_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    extended_details: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    count: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    start_index: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_EnumerateUserFiles_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.files || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    files: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    total_files: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_EnumerateUserFiles_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.filename || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    filename: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    appid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    upload_batch_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_Delete_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_Delete_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetClientEncryptionKey_Request";
          }
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.key || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    key: {
                      _: 1,
                      _: _._.readBytes,
                      _: _._.writeBytes,
                    },
                    crc: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetClientEncryptionKey_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    url: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    success: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    http_status_code: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    expected_bytes: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    received_bytes: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    duration: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CDNReport_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.host || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    host: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    path: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_upload: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    success: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    http_status_code: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    bytes_expected: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    bytes_actual: {
                      _: 7,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    duration_ms: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    cellid: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    proxied: {
                      _: 10,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    ipv6_local: {
                      _: 11,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    ipv6_remote: {
                      _: 12,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    time_to_connect_ms: {
                      _: 13,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    time_to_send_req_ms: {
                      _: 14,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    time_to_first_byte_ms: {
                      _: 15,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    time_to_last_byte_ms: {
                      _: 16,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ExternalStorageTransferReport_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    client_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    machine_name: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    ignore_pending_operations: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    os_type: {
                      _: 5,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    device_type: {
                      _: 6,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppLaunchIntent_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.pending_remote_operations || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    pending_remote_operations: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppLaunchIntent_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    client_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    uploads_completed: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    uploads_required: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppExitSyncDone_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientGetAppQuotaUsage_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.existing_files || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    existing_files: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    existing_bytes: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    max_num_files: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    max_num_bytes: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientGetAppQuotaUsage_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.file_name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    file_name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    sha_file: {
                      _: 2,
                      _: _._.readBytes,
                      _: _._.writeBytes,
                    },
                    time_stamp: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    raw_file_size: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    persist_state: {
                      _: 5,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    platforms_to_sync: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    path_prefix_index: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    machine_name_index: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    reupload_requested: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppFileInfo";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    synced_change_number: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetAppFileChangelist_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.current_change_number || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2, 4, 5], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    current_change_number: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    files: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    is_only_delta: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    path_prefixes: {
                      _: 4,
                      _: !0,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeRepeatedString,
                    },
                    machine_names: {
                      _: 5,
                      _: !0,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeRepeatedString,
                    },
                    app_buildid_hwm: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetAppFileChangelist_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.url_host || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [5], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    url_host: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    url_path: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    use_https: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    http_method: {
                      _: 4,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    request_headers: {
                      _: 5,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    block_offset: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    block_length: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    explicit_body_data: {
                      _: 8,
                      _: _._.readBytes,
                      _: _._.writeBytes,
                    },
                    may_parallelize: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "ClientCloudFileUploadBlockDetails";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    value: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "ClientCloudFileUploadBlockDetails_HTTPHeaders";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3, 4], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    machine_name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    files_to_upload: {
                      _: 3,
                      _: !0,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeRepeatedString,
                    },
                    files_to_delete: {
                      _: 4,
                      _: !0,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeRepeatedString,
                    },
                    client_id: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    app_build_id: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginAppUploadBatch_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.batch_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    batch_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    app_change_number: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginAppUploadBatch_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    batch_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    batch_eresult: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CompleteAppUploadBatch_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    batch_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    batch_eresult: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CompleteAppUploadBatch_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CompleteAppUploadBatch_Response";
          }
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    app_change_number: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppCloudStateChange_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    file_size: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    raw_file_size: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    file_sha: {
                      _: 4,
                      _: _._.readBytes,
                      _: _._.writeBytes,
                    },
                    time_stamp: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    filename: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    platforms_to_sync: {
                      _: 7,
                      _: 4294967295,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    cell_id: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    can_encrypt: {
                      _: 10,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_shared_file: {
                      _: 11,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    deprecated_realm: {
                      _: 12,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    upload_batch_id: {
                      _: 13,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientBeginFileUpload_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.encrypt_file || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    encrypt_file: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    block_requests: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientBeginFileUpload_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.transfer_succeeded || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    transfer_succeeded: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    appid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    file_sha: {
                      _: 3,
                      _: _._.readBytes,
                      _: _._.writeBytes,
                    },
                    filename: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientCommitFileUpload_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.file_committed || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    file_committed: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientCommitFileUpload_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    filename: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    realm: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    force_proxy: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientFileDownload_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [10], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    file_size: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    raw_file_size: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    sha_file: {
                      _: 4,
                      _: _._.readBytes,
                      _: _._.writeBytes,
                    },
                    time_stamp: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    is_explicit_delete: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    url_host: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    url_path: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    use_https: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    request_headers: {
                      _: 10,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    encrypted: {
                      _: 11,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientFileDownload_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    value: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientFileDownload_Response_HTTPHeaders";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    filename: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_explicit_delete: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    upload_batch_id: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientDeleteFile_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientDeleteFile_Response";
          }
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    chose_local_files: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientConflictResolution_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    client_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    machine_name: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    cloud_sync_completed: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppSessionSuspend_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppSessionSuspend_Response";
          }
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    client_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppSessionResume_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppSessionResume_Response";
          }
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.client_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    client_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientLogUploadCheck_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.request_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    request_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientLogUploadRequest_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.client_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    client_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    request_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientLogUploadComplete_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.app_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    app_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    file_name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ShareFile_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.hcontent || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    hcontent: {
                      _: 1,
                      _: "18446744073709551615",
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ShareFile_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        var _;
        ((_) => {
          function _(_, _) {
            return _.SendNotification(
              "Cloud.ClientLogUploadCheck#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }
          _.ClientLogUploadCheck = _;
          function _(_, _) {
            return _.SendNotification(
              "Cloud.ClientLogUploadComplete#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }
          _.ClientLogUploadComplete = _;
          function _(_, _, _) {
            return _.SendMsg("Cloud.BeginHTTPUpload#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.BeginHTTPUpload = _;
          function _(_, _, _) {
            return _.SendMsg("Cloud.CommitHTTPUpload#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.CommitHTTPUpload = _;
          function _(_, _, _) {
            return _.SendMsg("Cloud.BeginUGCUpload#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.BeginUGCUpload = _;
          function _(_, _, _) {
            return _.SendMsg("Cloud.CommitUGCUpload#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.CommitUGCUpload = _;
          function _(_, _, _) {
            return _.SendMsg("Cloud.GetFileDetails#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 2,
            });
          }
          _.GetFileDetails = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Cloud.GetSingleFileInfo#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetSingleFileInfo = _;
          function _(_, _, _) {
            return _.SendMsg("Cloud.ShareFile#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.ShareFile = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Cloud.EnumerateUserFiles#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.EnumerateUserFiles = _;
          function _(_, _, _) {
            return _.SendMsg("Cloud.Delete#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.Delete = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Cloud.GetClientEncryptionKey#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.GetClientEncryptionKey = _;
          function _(_, _) {
            return _.SendNotification("Cloud.CDNReport#1", (0, _._)(_, _), {
              ePrivilege: 1,
            });
          }
          _.CDNReport = _;
          function _(_, _) {
            return _.SendNotification(
              "Cloud.ExternalStorageTransferReport#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }
          _.ExternalStorageTransferReport = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Cloud.BeginAppUploadBatch#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.BeginAppUploadBatch = _;
          function _(_, _) {
            return _.SendNotification(
              "Cloud.CompleteAppUploadBatch#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }
          _.CompleteAppUploadBatch = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Cloud.CompleteAppUploadBatchBlocking#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.CompleteAppUploadBatchBlocking = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Cloud.ClientBeginFileUpload#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.ClientBeginFileUpload = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Cloud.ClientCommitFileUpload#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.ClientCommitFileUpload = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Cloud.ClientFileDownload#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.ClientFileDownload = _;
          function _(_, _, _) {
            return _.SendMsg("Cloud.ClientDeleteFile#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.ClientDeleteFile = _;
          function _(_, _) {
            return _.SendNotification(
              "Cloud.ClientConflictResolution#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }
          _.ClientConflictResolution = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Cloud.GetAppFileChangelist#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetAppFileChangelist = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Cloud.SuspendAppSession#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.SuspendAppSession = _;
          function _(_, _, _) {
            return _.SendMsg("Cloud.ResumeAppSession#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.ResumeAppSession = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Cloud.SignalAppLaunchIntent#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.SignalAppLaunchIntent = _;
          function _(_, _) {
            return _.SendNotification(
              "Cloud.SignalAppExitSyncDone#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }
          _.SignalAppExitSyncDone = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Cloud.ClientGetAppQuotaUsage#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.ClientGetAppQuotaUsage = _;
        })(_ || (_ = {}));
        var _;
        ((_) => {
          (_.NotifyAppStateChangeHandler = {
            name: "CloudClient.NotifyAppStateChange#1",
            request: _,
          }),
            (_.ClientLogUploadRequestHandler = {
              name: "CloudClient.ClientLogUploadRequest#1",
              request: _,
            });
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid");
        const _ = new _._("GameNotesCloudStore").Debug;
        function _(_) {
          return _.replace(/[!-/:-@ [\\\]^`]/g, "_");
        }
        class _ {
          FilenameForNotes(_) {
            return "appid" in _
              ? `notes_${Number(_.appid)}`
              : `notes_shortcut_${_(_.shortcut)}`;
          }
          DirectoryForNoteImages(_) {
            return "appid" in _
              ? `notes_${Number(_.appid)}_images/`
              : `notes_shortcut_${_(_.shortcut)}_images/`;
          }
          ParseNotesFileName(_) {
            const _ = _.match(/^notes_shortcut_([^/]+)$/);
            if (_)
              return {
                shortcut: _[1],
              };
            const _ = _.match(/^notes_(\d+)$/);
            if (_ && parseInt(_[1]) < 2147483647)
              return {
                appid: parseInt(_[1]),
              };
          }
          async GetGameNotesList(_) {
            return (await this.InternalLoadNotes(_)).notes.slice();
          }
          NewNote(_, _) {
            let _ = {};
            return (
              "appid" in _
                ? (_.appid = _.appid)
                : (_.shortcut_name = _.shortcut),
              {
                _: Date.now().toString(36),
                ..._,
                ordinal: 0,
                time_created: Math.floor(Date.now() / 1e3),
                time_modified: Math.floor(Date.now() / 1e3),
                title: _,
                content: "",
                not_persisted: !0,
              }
            );
          }
          async SaveGameNotes(_, _) {
            const _ = {
              notes: _,
            };
            "shortcut" in _ && (_.shortcut_name = _.shortcut);
            const _ = JSON.stringify(_, (_, _) =>
              _ === "not_persisted" ? void 0 : _,
            );
            return (
              _("SaveGameNotes", _),
              await this.WriteNotesFile(this.FilenameForNotes(_), _)
            );
          }
        }
        var _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const _ = new _._("GameNotesCloudStore").Debug;
        class _ extends _ {
          constructor(_) {
            super(),
              _(this, "m_props"),
              _(this, "m_mapCachedImageFiles", new Map()),
              _(this, "m_mapFileInfo"),
              _(this, "m_tsFileInfoLoaded", 0),
              _(this, "m_promiseLoadingNotes"),
              (this.m_props = _);
          }
          async GetGamesWithNotes() {
            let _ = [];
            for (const [_, _] of await this.GetFiles()) {
              const _ = this.ParseNotesFileName(_);
              if (!_) continue;
              let _;
              "appid" in _
                ? (_ = {
                    appid: _.appid,
                  })
                : (_ = {
                    shortcut_name: _.shortcut,
                  }),
                _.push({
                  ..._,
                  last_modified: _.rtLastModified,
                });
            }
            return _;
          }
          async UploadImage(_, _) {
            const _ = await _._(await _.arrayBuffer(), "SHA-1"),
              _ = (0, _._)(_),
              _ = `${_}${_}.${_}`;
            if (!(await this.m_props.uploadFile(_, _)))
              throw "There was an error uploading the file";
            return this.m_mapCachedImageFiles.set(_, _), _;
          }
          async ResolveImageURL(_) {
            let _ = this.m_mapCachedImageFiles.get(_);
            if (!_) {
              const _ = await this.GetCloudFileInfo(_);
              if (!_) return;
              (_ = await this.InternalLoadImageFromCloud(_)),
                this.m_mapCachedImageFiles.set(_, _);
            }
            return URL.createObjectURL(_);
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
          async InternalLoadNotes(_) {
            const _ = this.FilenameForNotes(_),
              _ = await this.GetCloudFileInfo(_);
            let _;
            return (
              _
                ? (_ = await this.InternalLoadFileFromCloud(_))
                : (_ = {
                    notes: [],
                  }),
              _
            );
          }
          async WriteNotesFile(_, _) {
            return this.m_props.uploadFile(_, _), _._;
          }
          async GetCloudFileInfo(_) {
            const _ = (await this.GetFiles()).get(_);
            if (!_) return;
            const _ = _._.Init(_);
            _.Body().set_appid(_.oez), _.Body().set_ugcid(_.ugcid);
            const _ = await _.GetFileDetails(
              this.m_props.steamInterface.GetServiceTransport(),
              _,
            );
            if (!_.BSuccess() || !_.Body().details(!1))
              throw `Error loading cloud file detail: ${_.GetErrorMessage()}`;
            const _ = _.Body().details();
            return (
              (0, _._)(
                _.filename() == _,
                `Asked for ${_} but got ${_.filename()}`,
              ),
              {
                strURL: _.url(),
                strSHA: _.file_sha(),
                strFilename: _.filename(),
                ugcid: _.ugcid(),
                rtLastModified: parseInt(_.timestamp()),
                nBytes: _.file_size(),
              }
            );
          }
          async InternalLoadNotesList() {
            let _ = 0,
              _ = !0;
            const _ = new Map();
            for (; _; ) {
              _(`EnumerateUserFiles for ${_.oez}, starting at ${_}`);
              const _ = _._.Init(_);
              _.Body().set_appid(_.oez),
                _.Body().set_extended_details(!0),
                _.Body().set_start_index(_);
              const _ = await _.EnumerateUserFiles(
                this.m_props.steamInterface.GetServiceTransport(),
                _,
              );
              if (!_.BSuccess())
                throw `Error loading cloud files: ${_.GetErrorMessage()}`;
              _.Body()
                .files()
                .map((_) => ({
                  strFilename: _.filename(),
                  ugcid: _.ugcid(),
                  rtLastModified: parseInt(_.timestamp()),
                  nBytes: _.file_size(),
                }))
                .forEach((_) => _.set(_.strFilename, _));
              const _ = _.Body().files().length;
              (_ += _),
                (_ = _ < _.Body().total_files()),
                _(
                  `EnumerateUserFiles complete, loaded ${_ - _}-${_} files of ${_.Body().total_files()} total files ${_ ? ", running another fetch" : ""}`,
                );
            }
            this.m_mapFileInfo = _;
          }
          async InternalLoadFileFromCloud(_) {
            const _ = await (await fetch(_.strURL)).json();
            if (_) return _;
            throw `Cloud file not found for ${_.strFilename}`;
          }
          async InternalLoadImageFromCloud(_) {
            const _ = await (await fetch(_.strURL)).blob();
            return new File([_], _.strFilename, {
              type: _.type,
            });
          }
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return {
            appid: _,
          };
        }
        function _(_) {
          return {
            shortcut: _(_),
          };
        }
        function _(_, _) {
          return "appid" in _
            ? "appid" in _ && _.appid == _.appid
            : "shortcut" in _ && _.shortcut == _.shortcut;
        }
        function _(_) {
          return _.trim();
        }
        function _(_) {
          return _.appid
            ? {
                appid: _.appid,
              }
            : {
                shortcut: _.shortcut_name,
              };
        }
        const _ = _.createContext({
          mode: "page",
          store: null,
        });
        function _(_) {
          const {
              mode: _,
              store: _,
              closePopup: _,
              bPinnedView: _,
              onClickURL: _,
              bSpellcheckEnabled: _ = !0,
              setSpellcheckEnabled: _,
              children: _,
            } = _,
            _ = _.useMemo(
              () => ({
                mode: _,
                store: _,
                closePopup: _,
                bPinnedView: _,
                onClickURL: _,
                bSpellcheckEnabled: _,
                setSpellcheckEnabled: _,
              }),
              [_, _, _, _, _, _, _],
            );
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _() {
          return _.useContext(_).mode == "single";
        }
        function _() {
          return _.useContext(_).closePopup;
        }
        function _() {
          return _.useContext(_).store;
        }
        function _() {
          return _.useContext(_).bPinnedView;
        }
        function _() {
          return _.useContext(_).onClickURL;
        }
        function _() {
          var _;
          return (_ = _.useContext(_).bSpellcheckEnabled) != null ? _ : !0;
        }
        function _() {
          return _.useContext(_).setSpellcheckEnabled;
        }
        var _ = __webpack_require__("chunkid");
        const _ = new _._("GameNotesCloudStore").Debug;
        function _() {
          const _ = _();
          return (0, _._)({
            queryKey: ["GameNotes", "GamesWithNotes"],
            queryFn: () => _.GetGamesWithNotes(),
            staleTime: 1e3 * 60 * 10,
          });
        }
        function _(_) {
          return "appid" in _
            ? ["GameNotes", "NotesByAppID", _.appid]
            : ["GameNotes", "NotesForShortcut", _(_.shortcut)];
        }
        function _(_, _) {
          return {
            queryKey: _(_),
            queryFn: async () => (await _.GetGameNotesList(_)) || [],
            staleTime: 1e3 * 60 * 3,
            refetchInterval: 1e3 * 60 * 15,
            enabled: !!_,
            structuralSharing: !0,
          };
        }
        function _(_) {
          const _ = _();
          return (0, _._)(_(_, _));
        }
        function _(_, _) {
          const _ = useGameNotesStore(),
            _ = React.useCallback((_) => _.find((_) => _._ === _), [_]);
          return useQuery({
            ..._(_, _),
            select: _,
          });
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = _(),
            _ = _(_);
          return (0, _._)({
            scope: {
              _: `${"appid" in _ ? _.appid : _.shortcut_name}_${_._}`,
            },
            mutationFn: async (_) => {
              const { title: _, bbcode: _ } = _;
              _(`Saving note ${_}`);
              const _ = await _.fetchQuery(_(_, _));
              if (!_) throw `Failed to load notes for ${JSON.stringify(_)}`;
              const _ = _.find((_) => _._ == _._),
                _ = {
                  ...(_ != null ? _ : {}),
                  ..._,
                  title: _,
                  content: _,
                  time_modified: Math.floor(Date.now() / 1e3),
                };
              let _;
              _ ? (_ = _.map((_) => (_._ == _._ ? _ : _))) : (_ = [..._, _]);
              const _ = await _.SaveGameNotes(_, _);
              if (_ != _._) throw `Error saving notes: ${_}`;
              return _;
            },
            onMutate(_) {
              const _ = {
                ..._,
                title: _.title,
                content: _.bbcode,
              };
              return _(_, _, (_) => _.map((_) => (_._ == _._ ? _ : _))), _;
            },
            onSuccess(_, _, _) {
              _.setQueryData(_(_), _);
            },
            onError(_) {
              _(_.message || _.name);
            },
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = _();
          return _.useCallback(() => {
            const _ = (0, _._)("#UserGameNotes_UntitledNote_Title"),
              _ = _.NewNote(_, _);
            return _(_, _, (_) => [..._, _]), _._;
          }, [_, _, _]);
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = _(),
            _ = _(_);
          return (0, _._)({
            mutationFn: async () => {
              if (_.not_persisted) return;
              const _ = await _.fetchQuery(_(_, _));
              if (!_) throw `Failed to load notes for ${JSON.stringify(_)}`;
              const _ = _.filter((_) => _._ != _._);
              return await _.SaveGameNotes(_, _), _;
            },
            onSuccess: (_) => {
              _ && _.setQueryData(_(_), _), _ && _();
            },
          });
        }
        function _(_, _, _) {
          _.setQueryData(_(_), (_) => _ && _(_));
        }
        function _(_, _) {
          return _.useMemo(() => (_ ? _(_) : _(_)), [_, _]);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _._.nodes.image,
          _ = {
            nodes: {
              ..._._.nodes,
              cloudimage: {
                ..._,
                parseDOM: [],
                bbCode: {
                  ..._.bbCode,
                  tag: "cloudimg",
                },
              },
            },
            marks: {
              ..._._.marks,
            },
          },
          _ = new _._(_);
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              schema: _,
              view: _,
              refUpdateToolbar: _,
              className: _,
              bSpellcheckEnabled: _,
              setSpellcheckEnabled: _,
            } = _,
            [_, _] = (0, _._)("FormattingToolbar_Expanded", !1);
          return (0, _.jsx)(_._, {
            refUpdateToolbar: _,
            view: _,
            children: (0, _.jsxs)("div", {
              className: (0, _._)(_.Toolbar, _),
              children: [
                (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsx)(_._, {}),
                    (0, _.jsx)(_._, {}),
                    (0, _.jsx)(_._, {
                      schema: _,
                    }),
                    (0, _.jsx)(_._, {}),
                    (0, _.jsx)(_._, {
                      onClick: () => _(!_),
                      tooltip: (0, _._)("#FormattingToolbar_ExpandOptions"),
                      children: (0, _.jsx)(_.cLJ, {
                        direction: _ ? "up" : "down",
                      }),
                    }),
                  ],
                }),
                (0, _.jsx)(_._, {
                  visible: _,
                  children: (0, _.jsxs)(_._, {
                    children: [
                      (0, _.jsx)(_._, {
                        schema: _,
                      }),
                      (0, _.jsx)(_._, {
                        schema: _,
                        levels: 5,
                      }),
                      (0, _.jsx)(_._, {
                        nodeType: _.nodes.code_block,
                        tooltip: (0, _._)("#FormattingToolbar_CodeBlock"),
                        children: (0, _.jsx)(_.kNE, {}),
                      }),
                      (0, _.jsx)(_._, {}),
                      (0, _.jsx)(_._, {
                        schema: _,
                      }),
                      (0, _.jsx)(_._, {}),
                      (0, _.jsx)(_._, {
                        schema: _,
                      }),
                      (0, _.jsx)(_._, {}),
                      _ &&
                        (0, _.jsx)(_._, {
                          bSpellcheckEnabled: _,
                          setSpellcheckEnabled: _,
                        }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { deleteNote: _, hidden: _, pmState: _ } = _,
            [_, _] = _.useState(),
            _ = _.useRef(void 0),
            _ = _(),
            _ = _(),
            _ = (0, _._)(),
            _ = {
              onSecondaryButton: () => _(),
              onSecondaryActionDescription: (0, _._)(
                "#UserGameNotes_DeleteNote",
              ),
              onDragOver: (_) => _.stopPropagation(),
            };
          return (
            _.useEffect(() => {
              _ &&
                !_ &&
                (_._.IN_CLIENT ||
                  !window.matchMedia(`(max-width: ${_.narrowWidth})`)
                    .matches) &&
                _.focus();
            }, [_, _]),
            (0, _.jsxs)(_.Fragment, {
              children: [
                !_ &&
                  (0, _.jsx)(_, {
                    schema: _.pm_schema,
                    view: _,
                    refUpdateToolbar: _,
                    className: _.Toolbar,
                    bSpellcheckEnabled: _,
                    setSpellcheckEnabled: _,
                  }),
                (0, _.jsx)(_._, {
                  pmState: _,
                  className: _.EditorInput,
                  refOnUpdate: _,
                  refView: _,
                  bSpellcheckEnabled: _,
                  panelProps: _,
                  children: (0, _.jsx)(_, {
                    schema: _.pm_schema,
                  }),
                }),
              ],
            })
          );
        }
        const _ = _.memo(function (_) {
          const { schema: _ } = _,
            _ = _(),
            _ = _.useMemo(
              () => [
                {
                  type: _.nodes.cloudimage,
                  component: _,
                  readProps: (_) => ({
                    src: _.attrs.src,
                  }),
                },
              ],
              [_.nodes.cloudimage],
            );
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                nodeType: _.nodes.image,
              }),
              (0, _.jsx)(_._, {
                linkMarkType: _.marks.link,
                schema: _,
                onClickURL: _,
              }),
              (0, _.jsx)(_._, {
                specs: _,
              }),
            ],
          });
        });
        function _(_) {
          const { src: _, selected: _ } = _,
            [_, _] = _.useState(),
            _ = _();
          return (
            _.useEffect(() => {
              let _ = !1;
              return (
                _.ResolveImageURL(_).then((_) => {
                  _ ? URL.revokeObjectURL(_) : _(_);
                }),
                () => {
                  (_ = !0), _(void 0);
                }
              );
            }, [_, _]),
            _
              ? (0, _.jsx)("img", {
                  className: _()(_().Image, _ && "ProseMirror-selectednode"),
                  src: _,
                })
              : null
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 10;
        function _(_) {
          const { note: _, hidden: _ = !1 } = _,
            [_, _] = _.useState(void 0),
            _ = _.useRef(!1),
            _ = (0, _._)(),
            { mutate: _ } = _(_, _),
            [_, _] = _.useState();
          _.useEffect(() => {
            if (!_.current) {
              const _ = new _._(_, _.content, (_, _) =>
                _({
                  title: _(_),
                  bbcode: _,
                }),
              );
              _(_, _.pm_schema), _(_);
            }
          }, [_, _.content]);
          const { bDirty: _ } = (0, _._)(_, {
            msAutosaveTimeout: _ * 1e3,
          });
          _.useEffect(() => {
            _ &&
              !_.current &&
              ((_.current = !0),
              _._.ReportTrackedAction("/GameNotes/NoteModified"));
          }, [_]),
            _.useEffect(() => {
              _ && _ && _.CommitChanges();
            }, [_, _]);
          const _ = (0, _._)().ownerWindow;
          (0, _._)(
            _.document,
            _.useCallback(
              (_) => {
                _ == "hidden" && _ && _.CommitChanges();
              },
              [_],
            ),
          ),
            (0, _._)(
              window,
              "beforeunload",
              _.useCallback(
                (_) => {
                  !_._.IN_STEAMUI &&
                    _.BHasUncomittedChanges() &&
                    (_.CommitChanges(), _.preventDefault());
                },
                [_],
              ),
            );
          const _ = _(_.appid, _.pm_schema),
            _ = _(),
            _ = _(_, _);
          return (0, _.jsx)(_._, {
            ProcessFileUpload: _,
            bAllowImageHotLinking: !0,
            children: (0, _.jsxs)("div", {
              className: _.NoteEditorArea,
              children: [
                (0, _.jsx)(_, {
                  error: _,
                  dismissError: () => _(void 0),
                }),
                (0, _.jsx)(_, {
                  deleteNote: _.mutate,
                  hidden: _,
                  pmState: _,
                }),
                !_ &&
                  (0, _.jsx)(_, {
                    note: _,
                    bDirty: _,
                  }),
              ],
            }),
          });
        }
        function _(_, _) {
          const _ = _();
          return _.useCallback(
            async (_) => {
              const _ = await _.UploadImage(`notes_${_}_images/`, _);
              return _.nodes.cloudimage.create({
                src: _,
              });
            },
            [_, _, _],
          );
        }
        function _(_) {
          const { error: _, dismissError: _ } = _;
          return _
            ? (0, _.jsx)(_._, {
                active: !0,
                children: (0, _.jsx)(_._, {
                  bAlertDialog: !0,
                  strTitle: (0, _._)("#Error_Generic"),
                  strDescription: (0, _._)(
                    "#UserGameNotes_ErrorSavingNotes",
                    _,
                  ),
                  closeModal: _,
                }),
              })
            : null;
        }
        function _(_) {
          const { note: _, bDirty: _ } = _,
            [_, _, _] = (0, _._)(!1),
            _ = _(),
            _ = _(),
            { mutate: _, isPending: _ } = _(_, _),
            _ = _.useCallback(() => {
              !_ && _.not_persisted ? _() : _();
            }, [_, _, _, _]);
          return (0, _.jsxs)("div", {
            className: _.NoteActions,
            children: [
              _ &&
                (0, _.jsx)(_, {
                  note: _,
                  closeModal: _,
                  deleteNote: _,
                  deletePending: _,
                }),
              (0, _.jsx)(_._, {
                toolTipContent: (0, _._)("#UserGameNotes_DeleteNote"),
                direction: "top",
                children: (0, _.jsx)(_._, {
                  onClick: _,
                  children: (0, _.jsx)(_.lMJ, {}),
                }),
              }),
              _ &&
                (0, _.jsx)(_, {
                  bDirty: _,
                }),
            ],
          });
        }
        function _(_) {
          const { bDirty: _ } = _,
            _ = _();
          return _
            ? (0, _.jsx)(_._, {
                onClick: () => _(),
                className: _.CloseWindowButton,
                children: (0, _._)("#Button_SaveAndClose"),
              })
            : (0, _.jsx)(_._, {
                onClick: () => _(),
                className: _.CloseWindowButton,
                children: (0, _._)("#Button_Close"),
              });
        }
        function _(_) {
          const { note: _, closeModal: _, deleteNote: _, deletePending: _ } = _;
          return (0, _.jsx)(_._, {
            active: !0,
            children: (0, _.jsx)(_._, {
              strTitle: (0, _._)("#UserGameNotes_DeleteNote"),
              strDescription: (0, _._)("#UserGameNotes_PromptDelete"),
              onOK: () => _(),
              bOKDisabled: _,
              strOKButtonText: (0, _._)("#Button_Delete"),
              closeModal: _,
            }),
          });
        }
        function _(_) {
          let _ = "";
          for (let _ = 0; _ < _.content.childCount; _++) {
            const _ = _.content.child(_);
            if (_.isText) _ += _.text;
            else if (
              ((_ = _.trim()), _.length > 4 || ((_ = _(_)), _.length > 4))
            )
              return _;
          }
          return _.trim();
        }
        function _(_, _) {
          _.UpdateState((_) => {
            const _ = [];
            if (
              (_.doc.descendants((_, _) => {
                var _;
                _.type === _.nodes.image &&
                  (_ = _.attrs.src) != null &&
                  _.match(/^\/gamenotes\//) &&
                  _.push({
                    node: _,
                    pos: _,
                  });
              }),
              !!_.length)
            )
              return (
                _.reverse().forEach(({ node: _, pos: _ }) => {
                  const _ = _.attrs.src.replace(/^\/gamenotes\//, ""),
                    _ = _.nodes.cloudimage.create({
                      src: _,
                    });
                  _ = _.replaceWith(_, _ + _.nodeSize, _);
                }),
                _.setMeta("addToHistory", !1),
                _
              );
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        let _;
        const _ = 1440 * 60 * 1e3;
        function _(_) {
          return `appinfo_${_}_${_._.LANGUAGE}`;
        }
        function _(_) {
          return !!(_ && Date.now() - _.timeCached < _);
        }
        function _(_, _) {
          return (
            _ ||
              (_ = new (_())(
                async (_) => {
                  const _ = new Map();
                  (await Promise.all(_.map((_) => _.GetObject(_(_)))))
                    .filter(_)
                    .forEach(({ value: _ }) => _.set(_.appid, _));
                  const _ = _.slice().filter((_) => !_.has(_));
                  if (_.length) {
                    const _ = _._.Init(_._);
                    _.Body().set_language((0, _.sfN)(_._.LANGUAGE)),
                      _.Body().set_appids(_);
                    const _ = await _._.GetApps(_, _);
                    if (_.GetEResult() != _._) throw _.GetErrorMessage();
                    _.Body()
                      .toObject()
                      .apps.forEach((_) => {
                        _.StoreObject(_(_.appid), {
                          timeCached: Date.now(),
                          value: _,
                        }),
                          _.set(_.appid, _);
                      });
                  }
                  return _.map((_) => _.get(_));
                },
                {
                  cache: !1,
                },
              )),
            _
          );
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            queryKey: ["appinfo", _],
            queryFn: async () => _(_, _).load(_),
            staleTime: _,
            enabled: !!_,
          }).data;
        }
        function _(_) {
          const { bStandalonePage: _ } = _,
            _ = (0, _._)(),
            _ = _(
              "appid" in _.params && Number(_.params.appid),
              "shortcut_name" in _.params && _.params.shortcut_name,
            ),
            _ = _(),
            _ = _(_),
            _ = _.useRef(void 0),
            { data: _ } = _(_);
          let _,
            _ = !1;
          if (_) {
            const _ = _.params.noteid || _.current;
            _ &&
              ((_ = _.find((_) => _._ === _)),
              !_ && _.params.noteid && (_ = !0)),
              _ || (_ = _[0]);
          }
          _ && (_.current = _._),
            _.useEffect(() => {
              _ && _.length == 0 && _(_, _(), !0);
            }, [_, _, _, _]),
            _.useEffect(() => {
              _ && _(_, void 0, !0);
            }, [_, _, _]);
          const _ = (0, _.jsx)(_._, {
            toolTipContent: (0, _._)("#UserGameNotes_NewNote"),
            direction: "top",
            children: (0, _.jsx)(_._, {
              className: _.NewNoteButton,
              onClick: () => {
                const _ = _();
                _(_, _);
              },
              children: (0, _.jsx)(_.qY3, {}),
            }),
          });
          return _
            ? (0, _.jsx)(_, {
                noteParent: _,
                notes: _,
                activeNoteID: _ == null ? void 0 : _._,
                actions: _,
                bStandalonePage: _,
              })
            : null;
        }
        function _(_) {
          const {
              noteParent: _,
              notes: _,
              activeNoteID: _,
              actions: _,
              bStandalonePage: _,
            } = _,
            [_, _] = (0, _._)("NotesListCollapsed", !1),
            _ = _(),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(_.params.noteid || _ ? "ActivePage" : "PageList"),
            _ = _.map((_) => {
              var _;
              return {
                title:
                  ((_ = _.title) == null ? void 0 : _.length) > 0
                    ? _.title
                    : (0, _._)("#UserGameNotes_Untitled"),
                identifier: _._,
                content: (0, _.jsx)(_, {
                  noteParent: _,
                  note: _,
                }),
                pageClassName: _.NotePage,
                hideTitle: !0,
              };
            }),
            _ = _(),
            _ = _.useCallback((_) => _(_, _), [_, _]),
            _ = _._.IN_STEAMUI
              ? (0, _._)("#UserGameNotes_NotesList")
              : (0, _.jsx)(_, {
                  noteParent: _,
                });
          return _ && _
            ? (0, _.jsx)(_._, {
                title: _,
                pages: _,
                className: (0, _._)(_.NotesPagedSettings, _ && _.PinnedView, _),
                page: _,
                onPageRequested: _,
                bottomControls: _,
                hideList: _,
                toggleHideList: _ || _ ? void 0 : () => _(!_),
              })
            : (0, _.jsx)(_._, {
                title: _,
                pages: _,
                className: (0, _._)(_.NotesPagedSettings, _ && _.PinnedView, _),
                page: _,
                onPageRequested: _,
                bottomControls: _,
                hideList: _,
                toggleHideList: _ || _ ? void 0 : () => _(!_),
              });
        }
        function _(_) {
          const { noteParent: _ } = _,
            _ = _("appid" in _ ? _.appid : void 0);
          let _;
          return (
            "appid" in _ ? (_ = _ == null ? void 0 : _.name) : (_ = _.shortcut),
            (0, _.jsx)(_.Fragment, {
              children: (0, _._)("#UserGameNotes_NotesForGame", _),
            })
          );
        }
        function _(_) {
          const { noteParent: _, note: _ } = _,
            _ = _._(),
            _ = _(),
            _ = _.useCallback(() => _(_), [_, _]),
            _ = _();
          return (0, _.jsxs)(_.Fragment, {
            children: [
              !_ &&
                (0, _.jsx)(_._, {
                  onActivate: _,
                }),
              (0, _.jsx)(_, {
                note: _,
                hidden: !_,
              }),
            ],
          });
        }
        function _(_ = !1) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = _ || _;
          return _.useCallback(
            (_, _, _ = _) => {
              let _;
              "appid" in _
                ? (_ = _.AppNotes(_.appid, _))
                : (_ = _.ShortcutNotes(_.shortcut, _)),
                _
                  ? _.replace(_, _.location.state)
                  : _.push(_, _.location.state);
            },
            [_, _],
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _() {
          const { data: _, isLoading: _ } = _(),
            _ = _.useMemo(
              () =>
                _ == null
                  ? void 0
                  : _.slice().sort((_, _) => _.last_modified - _.last_modified),
              [_],
            );
          return _
            ? (0, _.jsx)(_._, {
                msDelayAppear: 300,
              })
            : (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)("h1", {
                    children: (0, _._)("#UserGameNotes_NotesList"),
                  }),
                  (0, _.jsx)("ul", {
                    children: _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          game: _,
                        },
                        _.appid || _.shortcut_name,
                      ),
                    ),
                  }),
                ],
              });
        }
        function _(_) {
          const { game: _ } = _;
          return (0, _.jsx)("li", {
            children: (0, _.jsx)(_._, {
              _: _(
                _.appid
                  ? {
                      appid: _.appid,
                    }
                  : {
                      shortcut: _.shortcut_name,
                    },
              ),
              children: _.appid
                ? (0, _.jsx)(_, {
                    appid: _.appid,
                  })
                : _.shortcut_name,
            }),
          });
        }
        function _(_) {
          const { appid: _ } = _,
            _ = _(_);
          return _ == null ? void 0 : _.name;
        }
        function _(_, _, _ = {}) {
          const { bIsPublic: _ = !0 } = _,
            _ = {
              unAppID: _,
              strMachineName: _,
              bIsPublic: _,
            },
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async ({ files: _ }) =>
              await _(
                _,
                _,
                _.map((_) => _.filename),
                async (_) =>
                  !(await Promise.all(_.map((_) => _(_, _, _, _)))).some(
                    (_) => !_,
                  ),
              ),
          });
        }
        async function _(_, _, _, _) {
          const _ = await _(_, _, _);
          if (!_) return !1;
          let _ = !1;
          try {
            _ = await _(_);
          } finally {
            _(_, _, _, _);
          }
          return !0;
        }
        async function _(_, _, _) {
          const _ = _._.Init(_);
          _.Body().set_appid(_.unAppID),
            _.Body().set_machine_name(_.strMachineName),
            _.Body().set_files_to_upload(_.slice());
          const _ = await _.BeginAppUploadBatch(_, _);
          if (!_.BSuccess())
            throw `Error in BeginAppUploadBatch: ${_.GetErrorMessage()}`;
          return _.Body().batch_id();
        }
        function _(_, _, _, _) {
          const _ = _._.Init(_);
          _.Body().set_appid(_.unAppID),
            _.Body().set_batch_id(_),
            _.Body().set_batch_eresult(_ ? _._ : _._),
            _.CompleteAppUploadBatch(_, _);
        }
        async function _(_, _, _, _) {
          let _, _;
          _.content instanceof File
            ? (_ = await _.content.arrayBuffer())
            : (_ = new TextEncoder().encode(_.content).buffer),
            (_ = await _._(_, "SHA-1"));
          const _ = await _(_, _, _, _.filename, _.byteLength, _),
            _ = `https://${_.url_host}${_.url_path}`;
          let _ = !1;
          try {
            const _ = _.request_headers.map(({ name: _, value: _ }) => [_, _]);
            _ = (
              await fetch(_, {
                method: "PUT",
                headers: _,
                mode: "cors",
                body: _.content,
              })
            )._;
          } catch {}
          return await _(_, _, _.filename, _, _);
        }
        async function _(_, _, _, _, _, _) {
          const _ = _._.Init(_);
          _.Body().set_appid(_.unAppID),
            _.Body().add_platforms_to_sync("All"),
            _.Body().set_upload_batch_id(_),
            _.Body().set_is_public(_.bIsPublic),
            _.Body().set_filename(_),
            _.Body().set_file_size(_),
            _.Body().set_file_sha(_);
          const _ = await _.BeginHTTPUpload(_, _);
          if (!_.BSuccess())
            throw `Error in BeginHTTPUpload: ${_.GetErrorMessage()}`;
          return _.Body().toObject();
        }
        async function _(_, _, _, _, _) {
          const _ = _._.Init(_);
          _.Body().set_appid(_.unAppID),
            _.Body().set_transfer_succeeded(_),
            _.Body().set_filename(_),
            _.Body().set_file_sha(_);
          const _ = await _.CommitHTTPUpload(_, _);
          if (!_.BSuccess())
            throw `Error in CommitHTTPUpload: ${_.GetErrorMessage()}`;
          return _.Body().file_committed();
        }
        function _(_) {
          const _ = _();
          return (0, _.jsx)(_, {
            mode: "page",
            store: _,
            children: (0, _.jsxs)(_._, {
              children: [
                (0, _.jsx)(_._, {
                  path: _.List(),
                  children: (0, _.jsx)(_, {}),
                }),
                (0, _.jsx)(_._, {
                  path: _.AppNotes(":appid", ":noteid?"),
                  children: (0, _.jsx)(_, {}),
                }),
                (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_._, {
                    _: `${_.List()}`,
                  }),
                }),
              ],
            }),
          });
        }
        function _() {
          const _ = (0, _._)(),
            { mutateAsync: _ } = _(_.oez, "Steam Community Web Interface", {
              bIsPublic: !0,
            }),
            _ = _.useCallback(
              (_, _) =>
                _({
                  files: [
                    {
                      filename: _,
                      content: _,
                    },
                  ],
                }),
              [_],
            ),
            _ = _.useRef({
              steamInterface: _,
              uploadFile: _,
            });
          _.current.uploadFile = _;
          const [_] = _.useState(() => new _(_.current));
          return _;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3;
        var _ = Object.defineProperty,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        class _ {
          constructor(_, _) {
            _(this, "m_fnAccumulatorFactory"),
              _(this, "m_dictComponents"),
              _ instanceof Map
                ? (this.m_dictComponents = _)
                : (this.m_dictComponents = new Map(Object.entries(_))),
              (this.m_fnAccumulatorFactory = _);
          }
          Parse(_, _, _ = !0) {
            const _ = _(_ || "", _);
            return this.Parse_BuildElements(_, _);
          }
          Parse_BuildElements(_, _) {
            let _ = this.m_fnAccumulatorFactory(void 0);
            const _ = [],
              _ = () => (_.length < 1 ? void 0 : _[_.length - 1]),
              _ = this.m_dictComponents,
              _ = (_) => {
                var _;
                return !!(_.tag && (_ = _.get(_.tag)) != null && _.autocloses);
              };
            let _ = !1,
              _ = !0;
            const _ = (_, _) => {
              let _ = _.text.toLowerCase();
              if (_ && _.node.tag === _ && _.get(_.node.tag)) {
                const _ = _.get(_.node.tag),
                  _ = {
                    tagname: _.node.tag,
                    args: _.node.args,
                    rawargs: _.node.rawargs,
                  },
                  _ = _(_.Constructor, _, ..._.GetElements());
                (_ = _.accumulator),
                  Array.isArray(_)
                    ? _.forEach((_) => _.AppendNode(_))
                    : _.AppendNode(_),
                  (_ = !!_.skipFollowingNewline),
                  (_ = _.bWrapTextForCopying);
              } else if (_) {
                const _ = _.accumulator;
                _.AppendText("[" + _.node.text + "]", !1),
                  _.GetElements().forEach((_) => _.AppendNode(_)),
                  _.AppendText("[/" + _.text + "]", !1),
                  (_ = _),
                  (_ = _.bWrapTextForCopying);
              }
            };
            for (
              _.forEach((_, _) => {
                var _, _;
                if (_.type == _) {
                  const _ = _ ? _.text.replace(/^[\t\r ]*\n/g, "") : _.text;
                  _.AppendText(_, _), (_ = !1);
                } else if (_.type == _) {
                  const _ = _.get(_.tag);
                  if (!_) _.AppendText("[" + _.text + "]", _.length == 0);
                  else {
                    const _ = _();
                    if (_ !== void 0) {
                      const _ = _.get(_.node.tag);
                      _ &&
                        _.autocloses &&
                        _.tag === _.node.tag &&
                        _(_.pop(), _.node);
                    }
                    _.push({
                      accumulator: _,
                      node: _,
                      bWrapTextForCopying: _,
                    }),
                      (_ = this.m_fnAccumulatorFactory(_)),
                      (_ = !!_.skipInternalNewline),
                      (_ = (_ = _.allowWrapTextForCopying) != null ? _ : !1);
                  }
                } else if (_.type == _) {
                  let _ = _.text.toLowerCase();
                  for (; _() && _().node.tag !== _ && _(_().node); ) {
                    const _ = _.pop();
                    _(_, _.node);
                  }
                  if (((_ = _()) == null ? void 0 : _.node.tag) == _) {
                    const _ = _.pop();
                    _(_, _);
                  } else _.AppendText("[/" + _.text + "]", _.length == 0);
                }
              });
              _.length > 0;
            ) {
              const _ = _.pop();
              _(_, _.node);
            }
            return _.GetElements();
          }
        }
        function _(_, _, _ = !1) {
          let _ = "[" + _;
          _ != null && _[""] && (_ += `=${_ ? "" + _[""] : _("" + _[""])}`);
          for (const _ in _) _ !== "" && (_ += ` ${_(_)}=${_("" + _[_])}`);
          return (_ += "]"), _;
        }
        function _(_) {
          return `"${_.replace(/(\\|"|\])/g, "\\$1")}"`;
        }
        function _(_) {
          return _.replace(/(\\| |\])/g, "\\$1");
        }
        function _(_) {
          return `[/${_}]`;
        }
        function _(_) {
          return _.replace(/(\\|\[)/g, "\\$1");
        }
        function _(_, _, _ = _) {
          const { type: _, text: _ = "" } = _;
          if (_ == _) {
            let _ = _.indexOf("=");
            const _ = _.indexOf(" ");
            _ != -1 && (_ == -1 || _ < _) && (_ = _);
            let _,
              _,
              _ = "";
            _ > 0
              ? ((_ = _.substr(0, _).toLocaleLowerCase()),
                (_ = _.substr(_)),
                (_ = _(_)))
              : ((_ = {}), (_ = _.toLocaleLowerCase())),
              _.push({
                type: _,
                text: _,
                tag: _,
                args: _,
                rawargs: _,
              });
          } else
            _ != _ &&
              _.push({
                type: _,
                text: _,
              });
          return {
            type: _,
            text: "",
          };
        }
        function _(_) {
          var _;
          let _ = "";
          return (
            _.type == _ ? (_ = "[/") : _.type == _ && (_ = "["),
            {
              type: _,
              text: _ + ((_ = _.text) != null ? _ : ""),
            }
          );
        }
        function _(_, _) {
          var _, _, _;
          const _ = [];
          let _ = {
              type: _,
              text: "",
            },
            _ = !1,
            _ = !1,
            _ = !1;
          for (let _ = 0; _ < _.length; _++) {
            const _ = _[_];
            switch (_.type) {
              case _:
                _ == "["
                  ? ((_.type = _), (_ = !0))
                  : ((_.type = _), _ == "\\" && _ ? (_ = !_) : (_.text += _));
                break;
              case _:
              case _:
                if (_ == "/" && _) (_.type = _), (_.text = ""), (_ = !1);
                else if (_ == "[" && !_) (_ = _(_, _(_), _)), (_ = !0);
                else if (_ == "]" && !_) {
                  const _ =
                      _.type == _ &&
                      ((_ = _.text) == null ? void 0 : _.toLocaleLowerCase()) ==
                        "noparse",
                    _ =
                      _.type == _ &&
                      ((_ = _.text) == null ? void 0 : _.toLocaleLowerCase()) ==
                        "noparse";
                  _ || (_ && !_)
                    ? ((_ = _(_)), (_.text += _))
                    : _
                      ? (_ = !0)
                      : _ && (_ = !1),
                    (_ = _(_, _)),
                    (_ = !1);
                } else
                  _ == "\\" && _
                    ? ((_.text += _), (_ = !_), (_ = !1))
                    : ((_.text += _), (_ = !1), (_ = !1));
                break;
              case _:
                _ == "[" && !_
                  ? ((_ = _(_, _, _)), (_ = !0))
                  : _ == "\\" && _
                    ? (_ && (_.text += _), (_ = !_))
                    : ((_.text += _), (_ = !1));
                break;
            }
          }
          return (
            _.type != _ &&
              (_.type == _ || _.type == _
                ? _.push(_(_))
                : _.push({
                    type: _.type,
                    text: (_ = _.text) != null ? _ : "",
                  })),
            _
          );
        }
        function _(_) {
          if (!_ || _.length < 1) return {};
          const _ = {};
          let _ = "",
            _ = "",
            _;
          ((_) => {
            (_[(_.PRE_NAME = 0)] = "PRE_NAME"),
              (_[(_.IN_NAME = 1)] = "IN_NAME"),
              (_[(_.POST_NAME = 2)] = "POST_NAME"),
              (_[(_.IN_VALUE = 3)] = "IN_VALUE"),
              (_[(_.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
          })(_ || (_ = {}));
          let _ = 0,
            _ = 0;
          _[0] == "=" && (_ = 2);
          let _ = !1;
          for (_++; _ < _.length; _++) {
            const _ = _[_];
            let _ = !0,
              _ = !1;
            switch (_) {
              case 0:
                if (_ == "=") return {};
                if (_ == " ") continue;
                _ = 1;
                break;
              case 1:
                (_ == "=" || _ == " ") &&
                  !_ &&
                  (_ == " " ? ((_ = 0), (_ = !0)) : (_ = 2), (_ = !1));
                break;
              case 2:
                _ == " "
                  ? ((_ = 0), (_ = !1), (_ = !0))
                  : _ == '"'
                    ? ((_ = 4), (_ = !1))
                    : (_ = 3);
                break;
              case 3:
              case 4:
                ((_ == " " && _ != 4 && !_) || (_ == '"' && _ == 4 && !_)) &&
                  ((_ = 0), (_ = !1), (_ = !0));
                break;
            }
            if (_)
              if (_ == "\\" && !_) _ = !0;
              else if (((_ = !1), _ == 1)) _ += _;
              else if (_ == 3 || _ == 4) _ += _;
              else
                throw new Error(
                  "Not expecting to accumulate buffer in state " + _,
                );
            _ && ((_[_] = _), (_ = ""), (_ = ""));
          }
          return _ != 0 && (_[_] = _), _;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        function _(_) {
          if (!_) return _;
          const _ = _.trim(),
            _ = _.replace(/^[\u0000-\u0020]+/, "")
              .replace(/[\t\n\r]/g, "")
              .toLowerCase();
          return _.startsWith("javascript:") ||
            _.startsWith("data:") ||
            _.startsWith("vbscript:")
            ? ""
            : _;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        const _ = _.memo(function (_) {
          const {
              linkMarkType: _,
              onURLPasted: _,
              schema: _,
              onClickURL: _ = _,
            } = _,
            _ = _.useRef(_);
          _.current = _;
          const [_, _] = _.useState(),
            [_, _] = _.useState(),
            [_, _] = _.useState(),
            [_, _] = (0, _._)(_),
            _ = _.useMemo(
              () =>
                new _._({
                  props: {
                    handleClickOn(_, _, _, _, _, _) {
                      if (_ && (_.ctrlKey || _.button == 1)) {
                        const _ = _.resolve(_ - _)
                            .marks()
                            .find((_) => _.type == _),
                          _ = _ && (0, _._)(_.attrs.href);
                        if (_)
                          return _.current(_, _.view), _.preventDefault(), !0;
                      }
                      return !1;
                    },
                    handleKeyDown(_, _) {
                      return _.key == "k" &&
                        (_.metaKey || _.ctrlKey) &&
                        !_.shiftKey &&
                        !_.altKey
                        ? (_(_), !0)
                        : !1;
                    },
                    clipboardTextParser(_, _, _, _) {
                      const _ = (0, _._)(_, _, _, _);
                      return _ && new _._(_._.from(_), _.start(), _.end());
                    },
                    handlePaste(_, _, _) {
                      let _ = [];
                      if (
                        (_.content.descendants((_, _) => {
                          if (_.isText) {
                            const _ = (0, _._)(_, _.text, _, _);
                            _ &&
                              _.push({
                                node: _,
                                pos: _,
                                rgNodes: _,
                              });
                          }
                        }),
                        !_.length)
                      )
                        return !1;
                      let _ = _.state._;
                      _.selection.empty || _.deleteSelection();
                      let _ = _.selection.from,
                        _ = 0;
                      for (const _ of _) {
                        const { node: _, pos: _, rgNodes: _ } = _,
                          _ = _.content.cut(_, _).append(_._.from(_));
                        _.insert(_, _), (_ += _.size + 2), (_ = _ + _.nodeSize);
                      }
                      return (
                        _.insert(_, _.content.cut(_)),
                        _.scrollIntoView(),
                        _.dispatch(_),
                        !0
                      );
                    },
                    handleDOMEvents: {
                      mouseover: (_, _) => {
                        for (
                          let _ = _.target;
                          _ && _ != _.currentTarget;
                          _ = _.parentElement
                        )
                          if (
                            _.nodeName == "A" &&
                            "getBoundingClientRect" in _
                          ) {
                            const _ = _.getBoundingClientRect();
                            _(_.left + _.width / 2), _(_.bottom + 2), _(_);
                            return;
                          }
                        _(void 0);
                      },
                      mouseleave: (_, _) => (_(void 0), !1),
                    },
                  },
                }),
              [_, _, _, _],
            );
          (0, _._)(_);
          let _ = null;
          return (
            _ &&
              _ &&
              _ &&
              (_ = (0, _.jsx)(_, {
                top: _,
                left: _,
                href: _.getAttribute("href"),
              })),
            (0, _.jsxs)(_.Fragment, {
              children: [_, _],
            })
          );
        });
        function _(_) {
          const { top: _, left: _, href: _ } = _,
            [_, _] = _.useState(0),
            _ = _.useRef(null);
          _.useLayoutEffect(() => {
            _(_.current.getBoundingClientRect().width);
          }, [_, _, _]);
          const _ = {
            top: `${_}px`,
            left: `${Math.max(_ - _ / 2, 12)}px`,
          };
          return (0, _.jsxs)("div", {
            className: _.Hover,
            style: _,
            ref: _,
            children: [
              (0, _.jsx)("div", {
                className: _.Link,
                children: _,
              }),
              (0, _.jsx)("div", {
                className: _.LinkHelp,
                children: (0, _._)("#UserGameNotes_ClickToOpenLink"),
              }),
            ],
          });
        }
        function _(_, _) {
          _.open(_);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { children: _, ..._ } = _;
          return (0, _.jsx)(_._, {
            className: _.GreenButton,
            type: "button",
            ..._,
            children: (0, _.jsx)("span", {
              children: _,
            }),
          });
        }
        function _(_) {
          const { children: _, ..._ } = _;
          return jsx(FocusableButton, {
            className: styles.GreenButton,
            type: "submit",
            ..._,
            children: jsx("span", {
              children: _,
            }),
          });
        }
        function _(_) {
          const { children: _, ..._ } = _;
          return jsx(FocusableAnchor, {
            className: styles.GreenButton,
            ..._,
            children: jsx("span", {
              children: _,
            }),
          });
        }
        function _(_) {
          const { children: _, ..._ } = _;
          return (0, _.jsx)(_._, {
            className: _.BlueButton,
            type: "button",
            ..._,
            children: (0, _.jsx)("span", {
              children: _,
            }),
          });
        }
        function _(_) {
          const { children: _, ..._ } = _;
          return jsx(FocusableAnchor, {
            className: styles.BlueButton,
            ..._,
            children: jsx("span", {
              children: _,
            }),
          });
        }
        function _(_) {
          const { children: _, ..._ } = _;
          return (0, _.jsx)(_._, {
            className: _.GreyButton,
            type: "button",
            ..._,
            children: (0, _.jsx)("span", {
              children: _,
            }),
          });
        }
        function _(_) {
          const { children: _, ..._ } = _;
          return jsx(FocusableAnchor, {
            className: styles.GreyButton,
            ..._,
            children: jsx("span", {
              children: _,
            }),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const _ = new _._("ReactUsageReporting").Debug,
          _ = 100,
          _ = _._.PerMinute * 1e3;
        class _ {
          constructor() {
            _(this, "m_strProduct"),
              _(this, "m_strVersion"),
              _(this, "m_transport", null),
              _(this, "m_mapRoutes", new Map()),
              _(this, "m_mapComponents", new Map()),
              _(this, "m_mapActions", new Map()),
              _(this, "m_reportCount", 0),
              _(this, "m_bInitialized", !1);
          }
          Init(_, _, _) {
            (this.m_bInitialized = !0),
              (this.m_strProduct = _),
              (this.m_strVersion = _),
              (this.m_transport = _),
              this.ScheduleSend();
          }
          ScheduleSend() {
            setTimeout(() => this.CheckSend(), _);
          }
          CheckSend() {
            this.m_reportCount > 0 && this.SendMetrics(), this.ScheduleSend();
          }
          ReportInternal(_, _) {
            _.has(_) || _.set(_, 0),
              _.set(_, _.get(_) + 1),
              this.m_reportCount++,
              this.ShouldSendMetricsImmediately() && this.SendMetrics();
          }
          ReportRouteMatch(_) {
            _("Route match: " + _), this.ReportInternal(_, this.m_mapRoutes);
          }
          ReportTrackedComponent(_) {
            _("Tracked component: " + _),
              this.ReportInternal(_, this.m_mapComponents);
          }
          ReportTrackedAction(_) {
            _("User action: " + _), this.ReportInternal(_, this.m_mapActions);
          }
          ShouldSendMetricsImmediately() {
            return this.m_reportCount >= _;
          }
          SendMetrics() {
            if (!this.m_bInitialized) return;
            const _ = _._.Init(_._);
            _.Body().set_product(this.m_strProduct),
              _.Body().set_version(this.m_strVersion),
              this.m_mapRoutes.forEach((_, _) => {
                let _ = new _._();
                _.set_route(_), _.set_count(_), _.Body().add_routes(_);
              }),
              this.m_mapComponents.forEach((_, _) => {
                let _ = new _._();
                _.set_component(_), _.set_count(_), _.Body().add_components(_);
              }),
              this.m_mapActions.forEach((_, _) => {
                let _ = new _._();
                _.set_action(_), _.set_count(_), _.Body().add_actions(_);
              }),
              this.m_mapRoutes.clear(),
              this.m_mapComponents.clear(),
              this.m_mapActions.clear(),
              (this.m_reportCount = 0),
              _._.ReportReactUsage(this.m_transport, _);
          }
          get version() {
            return this.m_strVersion;
          }
          get product() {
            return this.m_strProduct;
          }
        }
        _([_._], _.prototype, "CheckSend", 1);
        const _ = new _();
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              _: _,
              role: _,
              visible: _ = !0,
              className: _,
              keepMounted: _ = !1,
              expandDirection: _ = "height",
              msAnimationDuration: _ = 250,
              children: _,
            } = _,
            { style: _, active: _, refDiv: _ } = _(_, _, _);
          return !_ && !_ && !_
            ? null
            : (0, _.jsx)("div", {
                _: _,
                role: _,
                className: _,
                ref: _,
                style: _,
                inert: !_,
                children: _,
              });
        }
        function _(_, _ = "height", _ = 250) {
          const _ = _.useRef(null),
            _ = _.useRef(!0),
            [_, _] = _.useState("idle"),
            [_, _] = _.useState(
              _
                ? {}
                : {
                    [_]: "0px",
                    overflow: "hidden",
                  },
            ),
            [_, _] = _.useState(_);
          return (
            _.useLayoutEffect(() => {
              _.current || _("start"), _ && _(_);
            }, [_]),
            _.useLayoutEffect(
              () => (
                (_.current = !1),
                () => {
                  _.current = !0;
                }
              ),
              [],
            ),
            _.useLayoutEffect(() => {
              const _ = _.current,
                _ = _ == "height" ? "scrollHeight" : "scrollWidth",
                _ = () => {
                  _.unstable_batchedUpdates(() => {
                    _(
                      _
                        ? {}
                        : {
                            [_]: "0px",
                            overflow: "hidden",
                          },
                    ),
                      _("idle"),
                      _(_);
                  });
                };
              if (_ == "start") {
                const _ = _[_];
                _ == 0
                  ? _()
                  : (_((_) => ({
                      [_]: _ ? "0px" : `${_}px`,
                      ..._,
                      overflow: "hidden",
                    })),
                    _("active"));
              } else if (_ == "active") {
                _.scrollTop;
                const _ = _[_];
                return (
                  _({
                    overflow: "hidden",
                    [_]: _ ? `${_}px` : "0px",
                  }),
                  _.addEventListener("transitionend", _),
                  () => {
                    _.removeEventListener("transitionend", _);
                  }
                );
              }
            }, [_, _]),
            {
              style: {
                ..._,
                transition: `${_} ${_}ms`,
              },
              active: _,
              refDiv: _,
            }
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          const _ = _.useRef(void 0),
            _ = _.useCallback(
              (_) => {
                _.currentTarget.files.length > 0 &&
                  (_(_.currentTarget.files), (_.currentTarget.value = ""));
              },
              [_],
            ),
            _ = _.useCallback(() => _.current.click(), []);
          return [
            _.createPortal(
              (0, _.jsx)("form", {
                onSubmit: _,
                style: {
                  display: "none",
                },
                children: (0, _.jsx)("input", {
                  ..._,
                  type: "file",
                  ref: _,
                  onChange: _,
                }),
              }),
              window.document.body,
            ),
            _,
          ];
        }
        function _(_) {
          const [_, _] = _.useState(!1),
            _ = _.useCallback((_) => {
              ((_.dataTransfer.files && _.dataTransfer.files[0]) ||
                (_.dataTransfer.types && _.dataTransfer.types[0] == "Files")) &&
                _(!0);
            }, []),
            _ = _.useCallback((_) => {
              _._(_) && _(!1);
            }, []),
            _ = _.useCallback(() => _(!1), []),
            _ = _ ? _ : void 0,
            _ = _.useCallback(
              (_) => {
                var _;
                (_ = _.dataTransfer.files) != null &&
                  _.length &&
                  (_(_.dataTransfer.files, _),
                  _.preventDefault(),
                  _.stopPropagation()),
                  _(!1);
              },
              [_],
            );
          return [
            {
              onDragEnter: _,
              onDragLeave: _,
              onDragEnd: _,
              onDragOver: _,
              onDrop: _,
            },
            _,
          ];
        }
        async function _(_, _ = 1e3) {
          return await new Promise((_, _) => {
            const _ = new Image();
            (_.src = _),
              (_.onload = () => _("success")),
              (_.onerror = () => _("error")),
              _ > 0 && window.setTimeout(() => _("timeout"), _);
          });
        }
        function _(_) {
          _.preventDefault();
        }
        function _(_) {
          switch (_.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const _ = _.name.match(/(?<=\.)[^.]+$/);
              return _ ? _[0] : void 0;
          }
        }
      },
      chunkid: (module) => {
        module.exports = {
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
          _: "-xPK0REpludHjRG8xQfih",
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
          Image_Inline: "XEMe7ReBSARw5XHcLR6kF",
          PreservedUnsupportedTag: "_3YMzBRWJTOo7eai1uFGV7i",
          Tag: "_3SEDw4GZynd3ZmTQWlyOcS",
          CalendarEventContainer: "S-ElBHomDkV0L3K4XChxt",
          CalendarEventLink: "_106tp5gLWBvoekGEC8HXQ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Hover: "_1lo3nIamSX1TzzE4TlhFXA",
          Link: "_1ds3uh7ntoekPm635F2Ziv",
          LinkHelp: "_3Vn5X8bzPjWx5p545nkB6k",
        };
      },
      chunkid: (module) => {
        module.exports = {
          GreenButton: "_23fSnYfnMQqkgm3ROkJhrO",
          GreyButton: "_15dbpkIdbzeDJlZYQEhn1d",
          BlueButton: "_14GZWzJgooP0mbfTvEQnjA",
        };
      },
      chunkid: (module) => {
        module.exports = {
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
          BackgroundAnimation: "K5kB32gMVsnDCBwxYDm4r",
          "ItemFocusAnim-darkerGrey-nocolor": "_39HD17cQ23IvuK35ytuPef",
          "ItemFocusAnim-darkerGrey": "_1UnKhkmcATwZcT0qX1VO-I",
          "ItemFocusAnim-darkGreySettings": "_3pEtHMkdw57n0C8DKxtXPb",
          "ItemFocusAnim-darkGrey": "bif353VzxtsbctKKtWLUm",
          "ItemFocusAnim-grey": "_1lXo0Q4biCUQ5CPs1x9v8z",
          "ItemFocusAnim-translucent-white-10": "_3jeaGvKmUWZNHnBKV71gwe",
          "ItemFocusAnim-translucent-white-20": "_1S31mEHMzu94gIf5W00vQ5",
          "ItemFocusAnimBorder-darkGrey": "_3qGIi9phn_i9vlXbBfE2N4",
          "ItemFocusAnim-green": "PKY6xp7_WNHMI65Uc8yJ_",
          focusAnimation: "_1AiJFdtfIMUo0maxXZuGYY",
          hoverAnimation: "_2FZZ9Hxx9YxFh9K9vrhe9t",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
        };
      },
    },
  ]);
})();

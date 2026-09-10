var _ = _(_()),
  _ = _(),
  _ = class _ extends _.Component {
    static GetScrollableClassname() {
      return `vt-scrollable`;
    }
    m_observer = null;
    m_refElement = _.createRef();
    m_elTracked = null;
    m_bPreviouslyIntersecting = !1;
    BTriggerOnce() {
      return (this.props.trigger || `once`) == `once`;
    }
    GetBoundingClientRect() {
      return this.m_refElement.current
        ? this.m_refElement.current.getBoundingClientRect()
        : null;
    }
    DestroyObserver() {
      this.m_observer &&
        (this.m_observer.disconnect(),
        (this.m_observer = null),
        (this.m_elTracked = null));
    }
    componentWillUnmount() {
      this.DestroyObserver();
    }
    componentDidMount() {
      this.UpdateObserver(null);
    }
    componentDidUpdate(_) {
      this.UpdateObserver(_);
    }
    UpdateObserver(_) {
      if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
      this.m_observer &&
        _ &&
        (_.rootMargin != this.m_observer.rootMargin ||
          _.thresholds != this.m_observer.thresholds) &&
        this.DestroyObserver();
      let _ = this.m_refElement.current;
      if (
        (this.m_observer &&
          _ != this.m_elTracked &&
          (this.m_elTracked && this.m_observer.unobserve(this.m_elTracked),
          (this.m_elTracked = null)),
        !this.m_observer && _)
      ) {
        let _ = {
          root: this.FindScrollableAncestor(_),
        };
        this.props.rootMargin && (_.rootMargin = this.props.rootMargin),
          this.props.thresholds && (_.threshold = this.props.thresholds),
          (this.m_observer = _(_, this.OnIntersection, _));
      }
      this.m_observer &&
        _ &&
        _ != this.m_elTracked &&
        (this.m_observer.observe(_), (this.m_elTracked = _));
    }
    FindScrollableAncestor(_) {
      return _(_, (_) => {
        let _ = this.props.horizontal
          ? window.getComputedStyle(_).overflowX
          : window.getComputedStyle(_).overflowY;
        return !!(
          _ == `scroll` ||
          _ == `auto` ||
          _.classList.contains(_.GetScrollableClassname())
        );
      });
    }
    HandleRef(_) {
      _(this.m_refElement, _),
        this.props.containerRef && _(this.props.containerRef, _);
    }
    OnIntersection(_, _) {
      let _ = !1;
      for (let _ of _)
        if (_.isIntersecting) {
          _ = !0;
          break;
        }
      this.m_bPreviouslyIntersecting != _ &&
        ((this.m_bPreviouslyIntersecting = _),
        this.props.onVisibilityChange && this.props.onVisibilityChange(_),
        _ && this.BTriggerOnce() && this.DestroyObserver());
    }
    render() {
      let {
        onVisibilityChange: _,
        rootMargin: _,
        trigger: _,
        horizontal: _,
        containerRef: _,
        ..._
      } = this.props;
      return (0, _.jsx)(_, {
        ref: this.HandleRef,
        ..._,
        children: this.props.children,
      });
    }
  };
_([_], _.prototype, `HandleRef`, null),
  _([_], _.prototype, `OnIntersection`, null);
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            clan_steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            relation: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            linkname: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            json: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CDeveloperPageLink`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clan_account_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_account_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid_list: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CDeveloperPageToApps`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            link: {
              _: 2,
              _: _,
            },
            remove: {
              _: 3,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            update_json_only: {
              _: 4,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            skip_clan_permissions: {
              _: 5,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            partner_id: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Request`;
    }
  },
  _ = class _ extends _.Message {
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
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.links || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            links: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clan_account_ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_account_ids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            ignore_dlc: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            results: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clan_account_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_account_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            listid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            ignore_dlc: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            apps: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            sort_order: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response_ListApp`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.partnerid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            partnerid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            results: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clan_accountid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_accountid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            linknames: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`StoreCatalog.SetDevPageLink#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.SetDevPageLink = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreCatalog.GetDevPageLinks#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetDevPageLinks = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreCatalog.GetDevPageAllAppsLinked#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetDevPageAllAppsLinked = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreCatalog.GetDevPageListApps#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetDevPageListApps = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreCatalog.GetDevPagesForPartner#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetDevPagesForPartner = _;
})((_ ||= {}));
var _ = _(_()),
  _ = class {
    m_clanSteamID;
    m_appidList = [];
    m_strName = ``;
    m_strAvatarURLFullSize = ``;
    m_strTagLineLoc = ``;
    m_nFollowers = 0;
    m_strVanity = ``;
    m_webLink = void 0;
    m_linkedEvent = void 0;
    m_mapListInfo = new Map();
    m_promise;
    m_bIsLoaded = !1;
    m_bIsHidden = !1;
    m_clanAccountFlags = 0;
    constructor(_) {
      _(this), (this.m_clanSteamID = _);
    }
    Initialize(_) {
      (this.m_strName = _.name || ``),
        (this.m_strAvatarURLFullSize =
          _.avatar_url_full_size ||
          `https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg`),
        (this.m_strTagLineLoc = _.tag_line_localized || ``),
        (this.m_nFollowers = _.followers || 0),
        (this.m_strVanity = _.vanity || void 0),
        (this.m_webLink = _.weblink),
        (this.m_bIsHidden = _.hidden || !1),
        (this.m_clanAccountFlags = _.clan_account_flags ?? 0),
        (this.m_linkedEvent = _.linked_event),
        (this.m_mapListInfo = new Map(Object.entries(_.list_info ?? {}))),
        _.appids && _.appids.forEach((_) => this.m_appidList.push(_)),
        (this.m_bIsLoaded = !0);
    }
    GetCreatorHomeIdentifier() {
      return {
        name: this.m_strName,
        clan_account_id: this.m_clanSteamID.GetAccountID(),
        type: `developer`,
        hidden: this.m_bIsHidden,
      };
    }
    BIsPartnerEventEditorEnabled() {
      return !!(this.m_clanAccountFlags & 8);
    }
    BHasClanAccountFlagSet(_) {
      return !!(this.m_clanAccountFlags & _);
    }
    BIsLoaded() {
      return this.m_bIsLoaded;
    }
    GetClanSteamID() {
      return this.m_clanSteamID;
    }
    GetClanAccountID() {
      return this.m_clanSteamID.GetAccountID();
    }
    GetAppIDList() {
      return this.m_appidList;
    }
    GetName() {
      return this.m_strName;
    }
    GetAvatarURLFullSize() {
      return this.m_strAvatarURLFullSize;
    }
    GetTagLine() {
      return this.m_strTagLineLoc;
    }
    GetNumFollowers() {
      return this.m_nFollowers;
    }
    BIsHidden() {
      return this.m_bIsHidden;
    }
    GetCreatorHomeURL(_) {
      if (this.m_strVanity) {
        switch (_) {
          case `publisher`:
            return _.STORE_BASE_URL + `publisher/` + this.m_strVanity + `/`;
          case `franchise`:
            return _.STORE_BASE_URL + `franchise/` + this.m_strVanity + `/`;
        }
        return _.STORE_BASE_URL + `developer/` + this.m_strVanity + `/`;
      }
      return (
        _.STORE_BASE_URL + `curator/` + this.m_clanSteamID.GetAccountID() + `/`
      );
    }
    BHasWebLink() {
      return this.m_webLink !== void 0;
    }
    GetWebLink() {
      return this.m_webLink;
    }
    GetVanityString() {
      return this.m_strVanity;
    }
    GetLinkedEventGID() {
      return this.m_linkedEvent;
    }
    GetListInfo() {
      return this.m_mapListInfo;
    }
    AdjustFollower(_) {
      this.m_nFollowers += _;
    }
    async EnablePartnerEventEditorFlag() {
      this.BIsPartnerEventEditorEnabled() ||
        (await this.UpdateGroupFlagsFeature([2, 8], !0));
    }
    async UpdateGroupFlagsFeature(_, _) {
      let _ = _.PARTNER_BASE_URL + `sales/ajaxupdateclanaccountflags`,
        _ = this.m_clanAccountFlags;
      if (
        (_.forEach((_) => {
          _ ? (_ |= _) : (_ &= ~_);
        }),
        _ == this.m_clanAccountFlags)
      )
        return;
      let _ = [];
      _ & 1 && _.push(1),
        _ & 8 && _.push(8),
        _ & 2 && _.push(2),
        _ & 4 && _.push(4),
        _ & 16 && _.push(16),
        _ & 32 && _.push(32),
        _ & 64 && _.push(64),
        _ & 128 && _.push(128),
        _ & 256 && _.push(256);
      let _ = new FormData();
      _.append(`sessionid`, _()),
        _.append(`clan_account_id`, this.GetClanAccountID().toString()),
        _.append(`accountflags`, JSON.stringify(_));
      let _ = await _.default.post(_, _);
      _ &&
        _.status == 200 &&
        _.data.success == 1 &&
        (this.m_clanAccountFlags = _);
    }
  };
_([_], _.prototype, `m_appidList`, void 0),
  _([_], _.prototype, `m_nFollowers`, void 0),
  _([_], _.prototype, `m_clanAccountFlags`, void 0);
var _ = _(_());
function _(_) {
  try {
    if (!_ || typeof _ != `string`) return null;
    let _ = _.split(`.`);
    if (_.length !== 3) return null;
    let [_, _] = _,
      _ = _(_),
      _ = _(_);
    return !_ || !_
      ? null
      : {
          header: JSON.parse(_),
          body: JSON.parse(_),
        };
  } catch (_) {
    return (
      console.error(`Exception while attempting to decode token: "${_}"`), null
    );
  }
}
function _(_) {
  return _ ? _.body.exp : 0;
}
function _(_) {
  return _ ? _.body.nbf || _.body.iat : 0;
}
function _(_) {
  let _ = _(_),
    _ = _(_),
    _ = 900,
    _ = _ - _;
  return _ < 900 * 1.5 && (_ = _ <= 60 ? 0 : 60), _(_) - _ < Date.now() / 1e3;
}
var _ = class {
  m_ServiceTransport;
  m_AnonymousServiceTransport;
  m_strWebAPIBaseURL;
  m_webApiAccessToken = ``;
  m_bJsonMode = !1;
  m_strSpoofedSteamID = ``;
  m_bJWTToken = !1;
  m_fnRequestNewAccessToken;
  m_refreshAccessTokenPromise;
  m_dtLastExpireCheck = 0;
  constructor(_, _, _ = !1, _) {
    (this.m_strWebAPIBaseURL = _),
      (this.m_webApiAccessToken = _),
      (this.m_bJsonMode = _),
      (this.m_fnRequestNewAccessToken = _),
      (this.m_bJWTToken = _(_) != null),
      (this.m_ServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
          bSendAuth: !0,
        }),
        SendNotification: this.SendNotification.bind(this, {
          bSendAuth: !0,
        }),
        MakeReady: this.MakeReady.bind(this),
      }),
      (this.m_AnonymousServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
          bSendAuth: !1,
        }),
        SendNotification: this.SendNotification.bind(this, {
          bSendAuth: !1,
        }),
        MakeReady: this.MakeReady.bind(this),
      });
    let _ = _(`steamLoginSpoofSteamID`);
    _ && /[0-9]+/g.test(_) && (this.m_strSpoofedSteamID = _);
  }
  WaitUntilLoggedOn() {
    return Promise.resolve();
  }
  GetServerRTime32() {
    return Number(new Date());
  }
  get steamid() {
    return new _();
  }
  RTime32ToDate(_) {
    return new Date(_ * 1e3);
  }
  MakeReady() {
    return Promise.resolve({
      result: 1,
      message: `ready`,
    });
  }
  GetServiceTransport() {
    return this.m_ServiceTransport;
  }
  GetWebAPIAccessToken() {
    return this.m_webApiAccessToken;
  }
  GetAnonymousServiceTransport() {
    return this.m_AnonymousServiceTransport;
  }
  async SendMsgAndAwaitResponse(_, _, _, _, _) {
    let _ = null;
    try {
      if (this.m_bJWTToken && _.bSendAuth) {
        let _ = Date.now() / 1e3;
        if (this.m_refreshAccessTokenPromise)
          await this.m_refreshAccessTokenPromise;
        else if (
          this.m_fnRequestNewAccessToken &&
          _ - this.m_dtLastExpireCheck > 60
        ) {
          this.m_dtLastExpireCheck = _;
          let _ = _(this.m_webApiAccessToken);
          _ &&
            _(_) &&
            ((this.m_refreshAccessTokenPromise =
              this.m_fnRequestNewAccessToken()),
            (this.m_webApiAccessToken = await this.m_refreshAccessTokenPromise),
            (this.m_refreshAccessTokenPromise = void 0));
        }
      }
      let _ = await this.Send(_, _, _, _);
      if (_.status != 200 || !_.data) throw Error(`Request Error`);
      if (
        ((_ = _.Init(_, 147)),
        _.headers &&
          (_.headers[`x-eresult`] &&
            _.Hdr().set_eresult(parseInt(_.headers[`x-eresult`])),
          _.headers[`x-error_message`] &&
            _.Hdr().set_error_message(_.headers[`x-error_message`])),
        this.m_bJsonMode)
      )
        _.SetBodyJSON(_.data.response);
      else {
        let _ = new _(_.data),
          _ = new _.BinaryReader(
            _.GetPacket(),
            _.TellGet(),
            _.GetCountBytesRemaining(),
          );
        _.deserializeBinaryFromReader(_.Body(), _);
      }
    } catch (_) {
      let _ =
          _ &&
          typeof _ == `object` &&
          `response` in _ &&
          _?.response?.status === 401,
        _ = _ ? `Unauthorized` : null;
      (_ = this.CreateFailedMsgProtobuf(_, 3, _)),
        _ &&
          !this.m_refreshAccessTokenPromise &&
          this.m_bJWTToken &&
          _.bSendAuth &&
          this.m_fnRequestNewAccessToken &&
          ((this.m_refreshAccessTokenPromise =
            this.m_fnRequestNewAccessToken()),
          (this.m_webApiAccessToken = await this.m_refreshAccessTokenPromise),
          (this.m_refreshAccessTokenPromise = void 0));
    }
    return _;
  }
  SendNotification(_, _, _, _) {
    return this.Send(_, _, _, _), !0;
  }
  Send(_, _, _, _) {
    let _ = this.CreateWebAPIURL(_);
    if (!_) throw `Couldn't find service name ` + _;
    let _ = _.SerializeBody(),
      _ = _.fromByteArray(_),
      _ = _?.eWebAPIKeyRequirement,
      _ = _?.ePrivilege == 0 && _ == 1,
      _ = {
        responseType: this.m_bJsonMode ? `json` : `arraybuffer`,
        params: {},
        headers: _?.bConstMethod
          ? {}
          : {
              "Content-Type": `multipart/form-data`,
            },
      };
    if (
      (!_.bSendAuth &&
        _ != 1 &&
        console.error(
          `Attempting to invoke service ${_} without auth, but auth is required.`,
        ),
      this.m_webApiAccessToken &&
        _.bSendAuth &&
        !_ &&
        ((_.params.access_token = this.m_webApiAccessToken),
        (_.params.spoof_steamid = this.m_strSpoofedSteamID)),
      _?.bConstMethod)
    )
      return (
        (_.params.origin = self.origin),
        this.m_bJsonMode
          ? (_.params.input_json = JSON.stringify(_.Body().toObject()))
          : (_.params.input_protobuf_encoded = _),
        _.default.get(_, _)
      );
    {
      let _ = new FormData();
      return (
        this.m_bJsonMode
          ? _.append(`input_json`, JSON.stringify(_.Body().toObject()))
          : _.append(`input_protobuf_encoded`, _),
        _.default.post(_, _, _)
      );
    }
  }
  CreateWebAPIURL(_) {
    let _ = _.match(/([^\.]+)\.(.+)#(\d+)/);
    return !_ || _.length != 4
      ? null
      : `${this.m_strWebAPIBaseURL}I${_[1]}Service/${_[2]}/v${_[3]}`;
  }
  CreateFailedMsgProtobuf(_, _, _) {
    let _ = _.Init(_);
    return (
      _.Hdr().set_eresult(2),
      _.Hdr().set_transport_error(_),
      _ && _.Hdr().set_error_message(_),
      _
    );
  }
};
_([_], _.prototype, `SendMsgAndAwaitResponse`, null),
  _([_], _.prototype, `SendNotification`, null),
  _([_], _.prototype, `Send`, null);
var _ = class _ {
  constructor() {
    _(this);
  }
  m_mapClanToCreatorHome = new Map();
  m_mapAppToCreatorIDList = new Map();
  m_bLoadedFromConfig = !1;
  m_serviceTransport = void 0;
  LazyInit() {
    if (!this.m_bLoadedFromConfig) {
      let _ = _(`creatorhome`, `application_config`);
      this.ValidateStoreDefault(_) &&
        _.forEach((_) => {
          let _ = Number(_.creator_clan_id),
            _ = new _(_.InitFromClanID(_));
          _.Initialize(_),
            (_.m_promise = _.GetAsPromise(_)),
            this.m_mapClanToCreatorHome.set(_, _);
        });
      let _ = _(`creatorhomeforapp`, `application_config`);
      this.ValidateStoreDefaultAppList(_) &&
        _.forEach((_) => {
          _.appid !== void 0 &&
            (this.m_mapAppToCreatorIDList.has(_.appid) ||
              this.m_mapAppToCreatorIDList.set(_.appid, []),
            this.m_mapAppToCreatorIDList.get(_.appid).push(_));
        }),
        (this.m_bLoadedFromConfig = !0);
    }
  }
  GetServiceTransport() {
    if (!this.m_serviceTransport) {
      let _ = _(`loyalty_webapi_token`, `application_config`),
        _ = new _(_.WEBAPI_BASE_URL, _ || void 0);
      this.m_serviceTransport = _.GetServiceTransport();
    }
    return this.m_serviceTransport;
  }
  static async GetAsPromise(_) {
    return _;
  }
  ValidateStoreDefault(_) {
    let _ = _;
    return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == `object`
      ? typeof _[0].name == `string` &&
          (typeof _[0].creator_clan_id == `string` ||
            typeof _[0].creator_clan_id == `number`)
      : !1;
  }
  ValidateStoreDefaultAppList(_) {
    let _ = _;
    return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == `object`
      ? typeof _[0].clan_account_id == `number` &&
          _[0].clan_account_id > 0 &&
          typeof _[0].appid == `number` &&
          _[0].appid > 0
      : !1;
  }
  BHasCreatorHomeLoaded(_) {
    return (
      this.m_mapClanToCreatorHome.has(_.GetAccountID()) &&
      this.m_mapClanToCreatorHome.get(_.GetAccountID()).BIsLoaded()
    );
  }
  GetCreatorHome(_) {
    return this.m_mapClanToCreatorHome.get(_.GetAccountID());
  }
  GetCreatorHomeByID(_) {
    return this.m_mapClanToCreatorHome.get(_.clan_account_id);
  }
  async LoadCreatorHome(_, _ = !1, _) {
    if (
      (this.LazyInit(), _ || !this.m_mapClanToCreatorHome.has(_.GetAccountID()))
    ) {
      let _ = new _(_);
      (_.m_promise = this.InternalCreatorHome(_, _)),
        await _.m_promise,
        this.m_mapClanToCreatorHome.set(_.GetAccountID(), _);
    }
    return this.m_mapClanToCreatorHome.get(_.GetAccountID()).m_promise;
  }
  async InternalCreatorHome(_, _) {
    let _ = {
        get_appids: !0,
        _: _.LANGUAGE,
      },
      _ =
        _.STORE_BASE_URL +
        `curator/` +
        _.GetClanAccountID() +
        `/ajaxgetcreatorhomeinfo`,
      _ = await _.default.get(_, {
        params: _,
        cancelToken: _ && _.token,
      });
    return _.Initialize(_.data), _;
  }
  async LoadCreatorHomeListForAppIncludeHiddden(_, _) {
    if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(_))) {
      let _ = {
          appid: _,
        },
        _ = _.STORE_BASE_URL + `events/ajaxgetcreatorhomeidforapp`,
        _ = await _.default.get(_, {
          params: _,
          cancelToken: _ && _.token,
          withCredentials: !0,
        });
      this.m_mapAppToCreatorIDList.set(_, _.data.creator_list);
    }
    return this.m_mapAppToCreatorIDList.get(_);
  }
  async SearchCreatorHomeStore(_, _, _) {
    let _ = `${_.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
      _ = {
        term: _.replace(` `, `+`),
        require_creator: _,
        _: _.COUNTRY,
        _: _.LANGUAGE,
        origin: self.origin,
      },
      _ = [],
      _ = await _.default.get(_, {
        params: _,
        cancelToken: _.token,
      });
    return (
      _.data.curators &&
        _(() => {
          _.data.curators.forEach((_) => {
            if (!this.m_mapClanToCreatorHome.has(_.creator_clan_id)) {
              let _ = new _(_.InitFromClanID(_.creator_clan_id));
              _.Initialize(_),
                this.m_mapClanToCreatorHome.set(_.creator_clan_id, _);
            }
            _.push(this.m_mapClanToCreatorHome.get(_.creator_clan_id));
          });
        }),
      _
    );
  }
  GetCreatorHomeListForAppIncludeHidden(_) {
    return this.m_mapAppToCreatorIDList.has(_)
      ? this.m_mapAppToCreatorIDList.get(_)
      : [];
  }
};
_([_], _.prototype, `m_mapClanToCreatorHome`, void 0),
  _([_], _.prototype, `m_mapAppToCreatorIDList`, void 0),
  _([_], _.prototype, `LazyInit`, null);
var _ = new _();
_(`g_CreatorHomeStore`, _);
function _(_) {
  if (!_) return null;
  let _ = _.BHasCreatorHomeLoaded(_.clanSteamID)
    ? _.GetCreatorHome(_.clanSteamID)
    : void 0;
  return _.GetSaleURL(_?.GetCreatorHomeURL(`developer`));
}
function _(_) {
  if (!_) return;
  let _ = _(`creator_home_list_info`, `application_config`);
  if (typeof _ != `object` || !_ || Array.isArray(_)) return;
  let _ = _[_];
  if (!(!_ || !_.title))
    return {
      title: _.title,
      description: _.description?.length ? _.description : void 0,
      imageUrl: _.listtileimage?.length ? _.listtileimage : void 0,
    };
}
function _(_) {
  return _(_)?.title;
}
function _(_) {
  return _(_)?.description;
}
var _ = () => (_.EUNIVERSE === 2 ? 2581 : 45267781);
export { _, _, _, _, _, _, _ };

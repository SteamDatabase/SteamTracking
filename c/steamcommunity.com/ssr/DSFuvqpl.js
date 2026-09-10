var _ = _(_(), 1);
function _(_) {
  return _;
}
function _() {
  return new Set();
}
function _(_) {
  return [`PartnerEventReadState`, _];
}
function _(_, _) {
  let _ = _ ?? _(`BEventHasBeenRead`);
  return _ ? _(_.getQueryData(_(_.accountid)) ?? _(), _) : !1;
}
function _(_, _) {
  if (_.length == 0) return;
  let _ = _ ?? _(`MarkEventsAsRead`);
  _ &&
    _.setQueryData(_(_.accountid), (_) => {
      let _ = new Set(_);
      return _.forEach((_) => _.add(_)), _;
    });
}
function _(_, _) {
  return _ !== void 0 && _.has(_);
}
var _ = 60,
  _ = 30,
  _ = class {
    m_CMInterface;
    m_setShownEvents = new Set();
    m_setReadEvents = new Set();
    m_rgPendingUpload = [];
    m_schUpload = new _();
    m_bUploading = !1;
    constructor(_) {
      this.m_CMInterface = _;
    }
    RecordEventShown(_, _) {
      !_ ||
        _.bOldAnnouncement ||
        !_.GID ||
        this.MarkEventShown(_.GID, _.clanSteamID.GetAccountID(), _);
    }
    RecordEventRead(_, _, _) {
      !_ ||
        _.bOldAnnouncement ||
        !_.GID ||
        _(_.GID, _) ||
        (_([_.GID], _),
        this.MarkEventRead(_.GID, _.clanSteamID.GetAccountID(), _));
    }
    MarkEventShown(_, _, _) {
      let _ = this.MakeKey(_, _);
      if (this.m_setShownEvents.has(_)) return !1;
      this.m_setShownEvents.add(_);
      let _ = new _();
      return (
        _.set_event_gid(_),
        _.set_clanid(_),
        _.set_display_location(_),
        _.set_mark_shown(!0),
        this.QueueForUpload(_),
        !0
      );
    }
    MarkEventRead(_, _, _) {
      let _ = this.MakeKey(_, _);
      if (this.m_setReadEvents.has(_)) return !1;
      this.m_setReadEvents.add(_);
      let _ = new _();
      return (
        _.set_event_gid(_),
        _.set_clanid(_),
        _.set_display_location(_),
        _.set_mark_read(!0),
        this.QueueForUpload(_),
        !0
      );
    }
    MakeKey(_, _) {
      return `${_}_${_}`;
    }
    QueueForUpload(_) {
      this.m_rgPendingUpload.push(_), this.ScheduleUpload();
    }
    ScheduleUpload() {
      if (!this.m_bUploading) {
        if (this.m_rgPendingUpload.length >= _) {
          this.UploadPendingData();
          return;
        }
        this.m_schUpload.IsScheduled() ||
          this.m_schUpload.Schedule(_ * 1e3, this.UploadPendingData);
      }
    }
    async Flush() {
      if (!this.m_bUploading) return this.UploadPendingData();
    }
    async UploadPendingData() {
      if (this.m_bUploading) return;
      this.m_schUpload.Cancel();
      let _ = this.m_rgPendingUpload.splice(0, _);
      if (_.length == 0) return;
      let _ = !1;
      if (this.m_CMInterface) {
        let _ = _.Init(_);
        for (let _ of _) _.Body().add_markings(_);
        this.m_bUploading = !0;
        let _ = await _.MarkPartnerEventsForUser(
          this.m_CMInterface.GetServiceTransport(),
          _,
        );
        (this.m_bUploading = !1), (_ = _.GetEResult() == 1);
      } else {
        if (!_.logged_in) return;
        let _ = _.map((_) => _.toObject()),
          _ = _() + `actions/ajaxmarkpartnerevents`,
          _ = new FormData();
        _.append(`sessionid`, _()), _.append(`request`, JSON.stringify(_));
        try {
          _ =
            (
              await _.default.post(_, _, {
                withCredentials: !0,
              })
            ).data.success == 1;
        } catch (_) {
          let _ = _(_);
          console.error(
            `CPartnerEventUserTracking.UploadPendingData error ` +
              _.strErrorMsg,
            _,
          );
        }
      }
      if (_) {
        this.m_rgPendingUpload.length > 0 && this.ScheduleUpload();
        return;
      }
      console.log(`Saving news event state failed. Will try again soon!`),
        (this.m_rgPendingUpload = this.m_rgPendingUpload.concat(_)),
        this.m_schUpload.Schedule(_ * 1e3, this.UploadPendingData);
    }
  };
_([_], _.prototype, `UploadPendingData`, null);
var _;
function _() {
  return (_ ||= new _()), _;
}
var _ = _(_(), 1),
  _ = _(),
  _ = _.createContext(void 0);
function _(_) {
  let [_] = _.useState(() => new _());
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
function _() {
  return _.useContext(_) || _();
}
export { _, _ };

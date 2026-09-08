function _(_) {
  let _ = null;
  if (_ == null) return _;
  if (_._)
    _ = `${(_._ >> 24) & 255}.${(_._ >> 16) & 255}.${(_._ >> 8) & 255}.${(_._ >> 0) & 255}`;
  else if (_._) {
    _ = ``;
    for (let _ = 0; _ < _._.length; _++)
      _ % 2 == 0 && _ > 0 && (_ += `:`),
        (_ += _._[_].toString(16).padStart(2, `0`));
  }
  return _;
}
function _(_) {
  return `unknown ECommentThreadType ( ` + _ + ` )`;
}
var _ = [`get_subject_overview`],
  _ = [`get_claimed`],
  _ = [`get_reported_subjects_owned_by_current_user`],
  _ = (_, _) => [`get_content_report_subject_group`, _, _],
  _ = (_, _, _) => [`get_content_report_subject`, _, _, _],
  _ = (_, _, _) => [`get_audit_log`, _, _, _],
  _ = (_) => [`get_moderator_message_count`, _],
  _ = (_) => [`get_clan_info`, _],
  _ = (_) => [`get_support_messages`, _],
  _ = (_, _) => [`get_clan_rank`, _, _],
  _ = (_) => [`get_support_permissions`, _],
  _ = (_, _) => [`get_user_app_rights`, _, _],
  _ = [`get_moderator_preferences`],
  _ = (_) => [`get_account_data`, _],
  _ = (_, _) => [`get_quicktext`, _, _],
  _ = (_) => [`get_primary_language_for_user`, _];
function _(_) {
  return {
    queryKey: _,
    queryFn: async () => {
      let _ = _.Init(_);
      return (await _.GetSubjectOverview(_, _)).Body().toObject();
    },
  };
}
function _() {
  return _(_(_()));
}
function _(_) {
  let _ = new Map(),
    _ = [];
  for (let _ of _)
    if (
      (_(_.subject_type, `Missing subject_type`),
      _(_.subject_group_id, `Missing subject_group_id`),
      _(_.subject_type))
    ) {
      let _ = `${_.subject_type}-${_.subject_group_id}`,
        _;
      _.has(_)
        ? (_ = _.get(_))
        : ((_ = _.length),
          _.set(_, _),
          _.push({
            kind: `group`,
            subjects: [],
            type: _.subject_type,
            group_id: _.subject_group_id,
            key: _,
          })),
        _[_].subjects.push(_);
    } else
      _.push({
        kind: `single`,
        key: `${_.subject_type}-${_.subject_group_id}-${_.subject_id}`,
        type: _.subject_type,
        subject: _,
      });
  return _;
}
function _() {
  return _(_(_()));
}
function _(_) {
  return {
    queryKey: _,
    queryFn: async () => {
      let _ = _.Init(_);
      return (await _.GetClaimedSubjects(_, _)).Body().toObject();
    },
    staleTime: 2e3,
    refetchOnWindowFocus: !0,
  };
}
function _() {
  return _({
    ..._(_()),
    select: (_) => (
      _(_.subjects, `Missing subject from getClaimed response!`), _(_.subjects)
    ),
  });
}
function _(_) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      return (
        _.Body().set_subject_type(_),
        _.Body().set_moderator_level(_),
        (await _.ClaimBatch(_, _)).Body().toObject()
      );
    },
    onSuccess: async () => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _,
        }),
      ]);
    },
  });
}
function _() {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async () => {
      let _ = _.Init(_);
      await _.ReleaseSubjects(_, _);
    },
    onSuccess: async () => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _,
        }),
      ]);
    },
  });
}
function _() {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      if (
        (_.Body().set_subject_type(_.eSubjectType),
        _.Body().set_subject_group_id(_.subjectGroupId),
        _.Body().set_subject_id(_.subjectId),
        _.Body().set_resolution(_.eResolution),
        _.Body().set_reason(_.eReason),
        _.Body().set_note(_.note),
        _.rgSanctions)
      )
        for (let _ of _.rgSanctions) {
          let _ = new _();
          _.set_sanction(_.sanction),
            _.days && _.set_days(_.days),
            _.Body().add_sanctions_applied(_);
        }
      let _ = await _.ResolveSubject(_, _);
      if (!_.BSuccess())
        throw Error(`Failed to resolve subject (` + _.GetEMsg() + `)`);
    },
    onSuccess: async (_, _) => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _(_.eSubjectType, _.subjectGroupId),
        }),
        _.invalidateQueries({
          queryKey: _(_.eSubjectType, _.subjectGroupId, _.subjectId),
        }),
        _.invalidateQueries({
          queryKey: _(_.eSubjectType, _.subjectGroupId, _.subjectId),
        }),
      ]);
    },
  });
}
function _() {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      if (
        (_.Body().set_subject_type(_.eSubjectType),
        _.Body().set_subject_group_id(_.subjectGroupId),
        _.Body().set_resolution(_.eResolution),
        _.Body().set_reason(_.eReason),
        _.Body().set_note(_.note),
        _.rgSanctions)
      )
        for (let _ of _.rgSanctions) {
          let _ = new _();
          _.set_sanction(_.sanction),
            _.days && _.set_days(_.days),
            _.Body().add_sanctions_applied(_);
        }
      let _ = await _.ResolveSubjectGroup(_, _);
      if (!_.BSuccess())
        throw Error(`Failed to resolve subject (` + _.GetEMsg() + `)`);
    },
    onSuccess: async (_, _) => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _(_.eSubjectType, _.subjectGroupId),
        }),
        _.invalidateQueries({
          queryKey: [
            `get_content_report_subject`,
            _.eSubjectType,
            _.subjectGroupId,
          ],
        }),
        _.invalidateQueries({
          queryKey: [`get_audit_log`, _.eSubjectType, _.subjectGroupId],
        }),
      ]);
    },
  });
}
function _(_, _, _) {
  return {
    queryKey: _(_, _),
    queryFn: async () => {
      let _ = _.Init(_);
      _.Body().set_subject_type(_), _.Body().set_subject_group_id(_);
      let _ = await _.GetContentReportSubjectGroup(_, _);
      if (!_.BSuccess())
        throw Error(
          `Failed in GetContentReportSubjectGroup, EResult: ` + _.GetEResult(),
        );
      return _.Body().toObject();
    },
  };
}
function _(_, _) {
  return _(_(_(), _, _));
}
function _(_, _, _, _) {
  return {
    queryKey: _(_, _, _),
    queryFn: async () => {
      let _ = _.Init(_);
      return (
        _.Body().set_subject_type(_),
        _.Body().set_subject_group_id(_),
        _.Body().set_subject_id(_),
        (await _.GetContentReportSubject(_, _)).Body().toObject()
      );
    },
  };
}
function _(_, _, _) {
  return _(_(_(), _, _, _));
}
function _() {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      _.Body().set_subject_type(_.subjectType),
        _.Body().set_subject_group_id(_.subjectGroupId),
        _.Body().set_subject_id(_.subjectId),
        _.Body().set_required_level(_.eNewLevel),
        _.Body().set_reason(_.eReason);
      let _ = await _.EscalateSubject(_, _);
      if (_.GetEResult() !== 1)
        throw Error(`Failed to escalate subject: ${_.GetEMsg()}`);
    },
    onSuccess: async (_, _) => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _(_.subjectType, _.subjectGroupId),
        }),
        _.invalidateQueries({
          queryKey: _(_.subjectType, _.subjectGroupId, _.subjectId),
        }),
        _.invalidateQueries({
          queryKey: _(_.subjectType, _.subjectGroupId, _.subjectId),
        }),
      ]);
    },
  });
}
function _(_, _, _, _) {
  return {
    queryKey: _(_, _, _),
    queryFn: async () => {
      let _ = _.Init(_);
      return (
        _.Body().set_subject_type(_),
        _.Body().set_subject_group_id(_),
        _.Body().set_subject_id(_),
        (await _.GetAuditLog(_, _)).Body().toObject()
      );
    },
  };
}
function _(_, _, _) {
  return _(_(_(), _, _, _));
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = await _(`/moderation/actions`, `GetModeratorMessageCount`, _);
      if (_ === null)
        throw Error(`GetModeratorMessageCount failed for steamid ${_}`);
      return _;
    },
  };
}
function _(_) {
  return _(_(_));
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = await _.Actions.GetClanInfo(_);
      if (_ === null) throw Error(``);
      return _;
    },
  };
}
function _(_) {
  return _(_(_));
}
function _() {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      _.Body().set_subject_type(_.subjectType),
        _.Body().set_subject_group_id(_.subjectGroupId),
        _.Body().set_subject_id(_.subjectId),
        _.Body().set_owner_steamid(_.ownerSteamID);
      let _ = new _();
      _.additionalSubjectData.forEach((_, _) => {
        let _ = new _();
        _.set_key(_), _.set_value(_), _.add_data(_);
      }),
        _.Body().set_additional_subject_data(_),
        _.Body().set_report_reason(_.eReason),
        _.Body().set_report_text(_.strReportText);
      let _ = await _.CreateContentReport(_, _);
      if (!_.BSuccess())
        throw Error(`Failed to create content report: ` + _.GetEMsg());
      return _.Body();
    },
    onSuccess: async (_, _) => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _(_.subjectType, _.subjectGroupId, _.subjectId),
        }),
        _.invalidateQueries({
          queryKey: _(_.subjectType, _.subjectGroupId),
        }),
        _.invalidateQueries({
          queryKey: _(_.subjectType, _.subjectGroupId, _.subjectId),
        }),
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _,
        }),
      ]);
    },
  });
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _.length > 0 ? _[0].subject_type : 0,
    _ = _.length > 0 ? _[0].subject_group_id : ``;
  return _({
    mutationKey: [`release_subject`, _, _],
    mutationFn: async () => {
      let _ = _.Init(_);
      for (let _ of _) {
        let _ = new _();
        _.set_subject_type(_.subject_type),
          _.set_subject_group_id(_.subject_group_id),
          _.set_subject_id(_.subject_id),
          _.Body().add_subjects_to_release(_);
      }
      let _ = await _.ReleaseSubjects(_, _);
      if (!_.BSuccess()) throw Error(`EResult ` + _.GetEResult());
    },
    onSuccess: async () => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _(_, _),
        }),
        _.invalidateQueries({
          queryKey: _(_, _),
        }),
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _,
        }),
      ]);
    },
  });
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = await _.Actions.GetSupportMessages(_);
      if (_ === null) throw Error(`Failed to fetch support messages.`);
      return _;
    },
  };
}
function _(_) {
  return _(_(_));
}
function _(_) {
  let _ = _();
  return _({
    mutationKey: [`community_ban_user`, _],
    mutationFn: async (_) => {
      let _ = await _.Actions.CommunityBanUser(_, _.nDays, _.strNote);
      if (!_) throw Error(`Failed to community ban user: Request failed.`);
      if (_.success !== 1)
        throw Error(`Failed to community ban user: EResult ` + _.success);
    },
    onSuccess: async () => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _(_),
        }),
      ]);
    },
  });
}
function _(_) {
  let _ = _();
  return _({
    mutationKey: [`trade_ban_user`, _],
    mutationFn: async (_) => {
      let _ = await _.Actions.TradeBanUser(
        _,
        _.rtBannedUntil,
        _.rtProbationUntil,
        _.strNote,
      );
      if (_ !== 1) throw Error(`Failed to trade ban user: EResult ` + _);
    },
    onSuccess: async () => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _(_),
        }),
      ]);
    },
  });
}
function _(_, _, _, _, _, _, _) {
  let _ = _();
  return _({
    mutationFn: async () => {
      let _ = await _.Actions.SendSupportMessage(
        _,
        `Support_PostingSuspiciousContent`,
        `Comment violates Rules & Guidelines: ` + _,
        -1,
        {
          steamidowner: _,
          gidfeature: _,
          gidfeature2: _,
          commentthreadtype: _(_),
          gidcomment: _,
        },
      );
      if (_?.success !== 1)
        throw Error(
          `Failed to send support message for marking topic as suspicious: EResult ` +
            _?.success,
        );
      let _ = await _.Actions.MarkForContentCheckTraining(_, `pending_banned`);
      if (_ !== 1)
        throw Error(`Failed to mark comment as training subject: EResult ` + _);
    },
    onSuccess: async (_, _) => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _(_),
        }),
      ]);
    },
  });
}
function _(_, _, _, _, _, _, _) {
  let _ = _();
  return _({
    mutationFn: async () => {
      let _ = await _.Actions.SendSupportMessage(
        _,
        `Support_PostingSuspiciousContent`,
        `Comment violates Rules & Guidelines: ` + _,
        -1,
        {
          steamidowner: _,
          gidfeature: _,
          gidfeature2: _,
          commentthreadtype: _(_),
        },
      );
      if (_?.success !== 1)
        throw Error(
          `Failed to send support message for marking topic as suspicious: EResult ` +
            _?.success,
        );
      let _ = await _.Actions.MarkForumTopicAsSuspicious(
        _,
        _,
        _,
        _,
        `pending_banned`,
      );
      if (_ !== 1)
        throw Error(`Failed to mark topic as training subject: EResult ` + _);
    },
    onSuccess: async (_, _) => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _(_),
        }),
      ]);
    },
  });
}
function _(_, _) {
  let _ = _();
  return _({
    mutationKey: [`delete_comments_for_user`, _],
    mutationFn: async (_) => {
      let _ = await _.Actions.DeleteCommentsForUser(_, _, _.nDaysToDelete);
      if (_ !== 1)
        throw Error(`Failed to delete comments for user: EResult ` + _);
    },
    onSuccess: async () => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: [`comment_thread`],
        }),
        _.invalidateQueries({
          queryKey: _(_),
        }),
      ]);
    },
  });
}
function _(_, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ =
          _.additionalData === void 0
            ? void 0
            : JSON.stringify(_.additionalData),
        _ = await _.WriteToAuditLog(_, {
          subject_type: _,
          subject_group_id: _,
          subject_id: _,
          action: _.eAction,
          additional_json_data: _,
          automated_action: _.bAutomatedAction,
        });
      if (!_.BSuccess())
        throw Error(`Failed to write to moderation log: ` + _.GetEMsg());
    },
    onSuccess: async (_, _) => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _(_, _, _),
        }),
      ]);
    },
  });
}
function _(_, _) {
  let _ = new _(_).GetAccountID();
  return {
    queryKey: _(_, _),
    queryFn: async () => {
      let _ = await _.Actions.GetClanRanks(_, [_]);
      if (_?.success !== 1)
        throw Error(`Failed to get clan ranks: EResult ` + _?.success);
      return _.body.length === 0 ? null : _.body[0];
    },
  };
}
function _(_, _) {
  return _(_(_, _));
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = await _.Actions.GetSupportPermissions(_);
      if (_.eResult !== 1)
        throw Error(
          `Failed to get support permissions: EResult + ` + _.eResult,
        );
      return _.body;
    },
  };
}
function _(_) {
  return _(_(_));
}
function _(_, _) {
  return {
    queryKey: _(_, _ ?? 0),
    queryFn: async () => {
      if (!_) return null;
      let _ = await _.Actions.GetAppRights(_, _);
      if (_.eResult !== 1)
        throw Error(`Failed to get user app rights: EResult ` + _.eResult);
      return _.body;
    },
  };
}
function _(_, _) {
  return _(_(_, _));
}
var _ = [33, 32, 57, 34],
  _ = [17, 18, 19];
function _(_) {
  return _.kind === `single`
    ? `/moderation/subject/${_.type}-${_.subject.subject_group_id}-${_.subject.subject_id}`
    : `/moderation/subject/${_.type}-${_.group_id}`;
}
function _(_) {
  return _(_.subject_type)
    ? `/moderation/subject/${_.subject_type}-${_.subject_group_id}`
    : `/moderation/subject/${_.subject_type}-${_.subject_group_id}-${_.subject_id}`;
}
function _(_) {
  return {
    queryKey: _,
    queryFn: async () => {
      let _ = await _.GetModeratorPreferences(_, {});
      if (!_.BSuccess())
        throw Error(
          `Failed to get moderator preferences: EResult ` + _.GetEResult(),
        );
      return _.Body().toObject();
    },
  };
}
function _() {
  return _(_(_()));
}
function _() {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = await _.SetModeratorPreferences(_, {
        preferred_level: _.ePreferredLevel,
        enabled_subject_types: {
          subject_types: _.rgEnabledSubjectTypes,
        },
      });
      if (!_.BSuccess())
        throw Error(
          `Failed to set moderator preferences: EResult ` + _.GetEResult(),
        );
    },
    onSuccess: async () => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _,
        }),
      ]);
    },
  });
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let { eResult: _, body: _ } = await _.Actions.GetAccountData(_);
      if (_ !== 1) throw Error(`Failed GetAccountData. EResult: ` + _);
      return _;
    },
  };
}
function _(_) {
  return _(_(_));
}
function _(_, _) {
  return _({
    queryKey: _(_, _),
    queryFn: async () => {
      if (_ == null || _ === void 0) return null;
      let _ = await _.Actions.GetQuickText(_, _);
      if (_.eResult !== 1)
        throw Error(`useQuickText failed with EResult ` + _.eResult);
      return _.body;
    },
    enabled: _ !== void 0,
  });
}
function _(_) {
  return _({
    queryKey: _(_),
    queryFn: async () => {
      let _ = await _.Actions.GetLanguageForUser(_);
      if (_.eResult === 1) return _.eLanguage;
      throw Error(`Failed GetPrimaryLanguageForUser. EResult: ` + _.eResult);
    },
  });
}
function _(_, _, _, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async () => {
      let _ = _.Init(_);
      _.Body().set_steamid(_),
        _.Body().set_subject_type(_),
        _.Body().set_subject_group_id(_),
        _.Body().set_subject_id(_),
        _.Body().set_details(_);
      let _ = await _.DisputeModerationForSubject(_, _);
      if (!_.BSuccess())
        throw Error(
          `Failed to dispute subject in content moderation system: ` +
            _.GetEResult(),
        );
    },
    onSuccess: async () => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _(_, _, _),
        }),
        _.invalidateQueries({
          queryKey: _(_, _),
        }),
      ]);
    },
  });
}
var _ = _(_(), 1),
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
      return `CChat_RequestFriendPersonaStates_Request`;
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
      return `CChat_RequestFriendPersonaStates_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            message: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            string_param: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            accountid_param: {
              _: 3,
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
      return `ServerMessage`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid_partner || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid_partner: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            steamid_invited: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            steamid_invitees: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readFixed64String,
              pbr: _.readPackedFixed64String,
              _: _.writeRepeatedFixed64String,
            },
            watching_broadcast_accountid: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            watching_broadcast_channel_id: {
              _: 7,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_CreateChatRoomGroup_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            state: {
              _: 2,
              _: _,
            },
            user_chat_state: {
              _: 3,
              _: _,
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
      return `CChatRoom_CreateChatRoomGroup_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            name: {
              _: 2,
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
      return `CChatRoom_RenameChatRoomGroup_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            name: {
              _: 1,
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
      return `CChatRoom_RenameChatRoomGroup_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            name: {
              _: 2,
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
      return `CChatRoom_SaveChatRoomGroup_Request`;
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
      return `CChatRoom_SaveChatRoomGroup_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            tagline: {
              _: 2,
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
      return `CChatRoom_SetChatRoomGroupTagline_Request`;
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
      return `CChatRoom_SetChatRoomGroupTagline_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            avatar_sha: {
              _: 2,
              _: _.readBytes,
              _: _.writeBytes,
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
      return `CChatRoom_SetChatRoomGroupAvatar_Request`;
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
      return `CChatRoom_SetChatRoomGroupAvatar_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            watching_broadcast_accountid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            watching_broadcast_channel_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_SetChatRoomGroupWatchingBroadcast_Request`;
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
      return `CChatRoom_SetChatRoomGroupWatchingBroadcast_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_JoinMiniGameForChatRoomGroup_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.minigame_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            minigame_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_JoinMiniGameForChatRoomGroup_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            minigame_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_EndMiniGameForChatRoomGroup_Request`;
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
      return `CChatRoom_EndMiniGameForChatRoomGroup_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            expiration: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CChatRoom_MuteUser_Request`;
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
      return `CChatRoom_MuteUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            expiration: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CChatRoom_KickUser_Request`;
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
      return `CChatRoom_KickUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            ban_state: {
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
      return `CChatRoom_SetUserBanState_Request`;
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
      return `CChatRoom_SetUserBanState_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CChatRoom_RevokeInvite_Request`;
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
      return `CChatRoom_RevokeInvite_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.role_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            role_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            ordinal: {
              _: 3,
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
      return `CChatRole`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.role_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            role_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            can_create_rename_delete_channel: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            can_kick: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            can_ban: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            can_invite: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            can_change_tagline_avatar_name: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            can_chat: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            can_view_history: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            can_change_group_roles: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            can_change_user_roles: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            can_mention_all: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            can_set_watching_broadcast: {
              _: 12,
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
      return `CChatRoleActions`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            name: {
              _: 2,
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
      return `CChatRoom_CreateRole_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.actions || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            actions: {
              _: 2,
              _: _,
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
      return `CChatRoom_CreateRole_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.app_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            app_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            steamid_owner: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            beacon_id: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            game_metadata: {
              _: 4,
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
      return `CChatPartyBeacon`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_GetRoles_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.roles || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            roles: {
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
      return `CChatRoom_GetRoles_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            role_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            name: {
              _: 3,
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
      return `CChatRoom_RenameRole_Request`;
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
      return `CChatRoom_RenameRole_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            role_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            ordinal: {
              _: 3,
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
      return `CChatRoom_ReorderRole_Request`;
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
      return `CChatRoom_ReorderRole_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            role_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_DeleteRole_Request`;
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
      return `CChatRoom_DeleteRole_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            role_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_GetRoleActions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.actions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            actions: {
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
      return `CChatRoom_GetRoleActions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            role_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            actions: {
              _: 4,
              _: _,
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
      return `CChatRoom_ReplaceRoleActions_Request`;
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
      return `CChatRoom_ReplaceRoleActions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            role_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid: {
              _: 4,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CChatRoom_AddRoleToUser_Request`;
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
      return `CChatRoom_AddRoleToUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CChatRoom_GetRolesForUser_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.role_ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            role_ids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
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
      return `CChatRoom_GetRolesForUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            role_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid: {
              _: 4,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CChatRoom_DeleteRoleFromUser_Request`;
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
      return `CChatRoom_DeleteRoleFromUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.header_state || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            header_state: {
              _: 1,
              _: _,
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
      return `CChatRoom_ChatRoomHeaderState_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.accountid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            accountid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            state: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            rank: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            time_kick_expire: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            role_ids: {
              _: 7,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
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
      return `CChatRoomMember`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6, 10, 14, 15, 18], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_group_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            active_member_count: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            active_voice_member_count: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            default_chat_id: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_rooms: {
              _: 6,
              _: _,
              _: !0,
              _: !0,
            },
            clanid: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            chat_group_tagline: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            accountid_owner: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            top_members: {
              _: 10,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            chat_group_avatar_sha: {
              _: 11,
              _: _.readBytes,
              _: _.writeBytes,
            },
            rank: {
              _: 12,
              _: _.readEnum,
              _: _.writeEnum,
            },
            default_role_id: {
              _: 13,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            role_ids: {
              _: 14,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
            },
            role_actions: {
              _: 15,
              _: _,
              _: !0,
              _: !0,
            },
            watching_broadcast_accountid: {
              _: 16,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid: {
              _: 17,
              _: _.readUint32,
              _: _.writeUint32,
            },
            party_beacons: {
              _: 18,
              _: _,
              _: !0,
              _: !0,
            },
            watching_broadcast_channel_id: {
              _: 19,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            active_minigame_id: {
              _: 20,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            avatar_ugc_url: {
              _: 21,
              _: _.readString,
              _: _.writeString,
            },
            disabled: {
              _: 22,
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
      return `CChatRoom_GetChatRoomGroupSummary_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.accountid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            accountid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            notice_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `CChatRoomMemberNotice`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            member_notices: {
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
      return `CChatRoomGroupMemberNotices`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            requesting_app_id: {
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
      return `CChatRoom_SetAppChatRoomGroupForceActive_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.result || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            result: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            accounts_in_channel: {
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
      return `CChatRoom_SetAppChatRoomGroupForceActive_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            requesting_app_id: {
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
      return `CChatRoom_SetAppChatRoomGroupStopForceActive_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            voice_allowed: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            members_in_voice: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            time_last_message: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            sort_order: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_message: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            accountid_last_message: {
              _: 8,
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
      return `CChatRoomState`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [18, 19, 22], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            clanid: {
              _: 13,
              _: _.readUint32,
              _: _.writeUint32,
            },
            accountid_owner: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid: {
              _: 21,
              _: _.readUint32,
              _: _.writeUint32,
            },
            tagline: {
              _: 15,
              _: _.readString,
              _: _.writeString,
            },
            avatar_sha: {
              _: 16,
              _: _.readBytes,
              _: _.writeBytes,
            },
            default_role_id: {
              _: 17,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            roles: {
              _: 18,
              _: _,
              _: !0,
              _: !0,
            },
            role_actions: {
              _: 19,
              _: _,
              _: !0,
              _: !0,
            },
            watching_broadcast_accountid: {
              _: 20,
              _: _.readUint32,
              _: _.writeUint32,
            },
            party_beacons: {
              _: 22,
              _: _,
              _: !0,
              _: !0,
            },
            watching_broadcast_channel_id: {
              _: 23,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            active_minigame_id: {
              _: 24,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            avatar_ugc_url: {
              _: 25,
              _: _.readString,
              _: _.writeString,
            },
            disabled: {
              _: 26,
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
      return `CChatRoomGroupHeaderState`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.header_state || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 5, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            header_state: {
              _: 1,
              _: _,
            },
            members: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            default_chat_id: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_rooms: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            kicked: {
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
      return `CChatRoomGroupState`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            time_joined: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            user_chat_room_state: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            desktop_notification_level: {
              _: 4,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            mobile_notification_level: {
              _: 5,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            time_last_group_ack: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            unread_indicator_muted: {
              _: 7,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            direct_messages_allowed: {
              _: 8,
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
      return `CUserChatRoomGroupState`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            time_joined: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_last_ack: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            desktop_notification_level: {
              _: 4,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            mobile_notification_level: {
              _: 5,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            time_last_mention: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            unread_indicator_muted: {
              _: 7,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            time_first_unread: {
              _: 8,
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
      return `CUserChatRoomState`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.user_chat_group_state || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            user_chat_group_state: {
              _: 1,
              _: _,
            },
            group_summary: {
              _: 2,
              _: _,
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
      return `CChatRoomSummaryPair`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            allow_voice: {
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
      return `CChatRoom_CreateChatRoom_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_room || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_room: {
              _: 1,
              _: _,
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
      return `CChatRoom_CreateChatRoom_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_DeleteChatRoom_Request`;
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
      return `CChatRoom_DeleteChatRoom_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            name: {
              _: 3,
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
      return `CChatRoom_RenameChatRoom_Request`;
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
      return `CChatRoom_RenameChatRoom_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            move_after_chat_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_ReorderChatRoom_Request`;
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
      return `CChatRoom_ReorderChatRoom_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.mention_all || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            mention_all: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            mention_here: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            mention_accountids: {
              _: 3,
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
      return `CChatMentions`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_GetChatRoomGroupState_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.state || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            state: {
              _: 1,
              _: _,
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
      return `CChatRoom_GetChatRoomGroupState_Response`;
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
      return `CChatRoom_GetMyChatRoomGroups_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_room_groups || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_room_groups: {
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
      return `CChatRoom_GetMyChatRoomGroups_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            invite_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            chat_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_JoinChatRoomGroup_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.state || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            state: {
              _: 1,
              _: _,
            },
            user_chat_state: {
              _: 3,
              _: _,
            },
            join_chat_id: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            time_expire: {
              _: 5,
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
      return `CChatRoom_JoinChatRoomGroup_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            chat_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            skip_friendsui_check: {
              _: 4,
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
      return `CChatRoom_InviteFriendToChatRoomGroup_Request`;
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
      return `CChatRoom_InviteFriendToChatRoomGroup_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_LeaveChatRoomGroup_Request`;
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
      return `CChatRoom_LeaveChatRoomGroup_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_JoinVoiceChat_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.voice_chatid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            voice_chatid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_JoinVoiceChat_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_LeaveVoiceChat_Request`;
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
      return `CChatRoom_LeaveVoiceChat_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_group_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_NotifyShouldRejoinChatRoomVoiceChat_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            message: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            echo_to_sender: {
              _: 4,
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
      return `CChatRoom_SendChatMessage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.modified_message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            modified_message: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            server_timestamp: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            ordinal: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            message_without_bb_code: {
              _: 4,
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
      return `CChatRoom_SendChatMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid_sender: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            message: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            timestamp: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            mentions: {
              _: 6,
              _: _,
            },
            ordinal: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            server_message: {
              _: 8,
              _: _,
            },
            message_no_bbcode: {
              _: 9,
              _: _.readString,
              _: _.writeString,
            },
            chat_name: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            notification_key: {
              _: 11,
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
      return `CChatRoom_IncomingChatMessage_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid_sender: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            notice_type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `CChatRoom_DismissChatRoomNotice_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid_sender: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            notice_type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            active: {
              _: 4,
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
      return `CChatRoom_ChatRoomNotice_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            messages: {
              _: 3,
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
      return `CChatRoom_ChatMessageModified_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.server_timestamp || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            server_timestamp: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            ordinal: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            deleted: {
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
      return `CChatRoom_ChatMessageModified_Notification_ChatMessage`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            last_time: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_ordinal: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            start_time: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            start_ordinal: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            max_count: {
              _: 7,
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
      return `CChatRoom_GetMessageHistory_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            more_available: {
              _: 4,
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
      return `CChatRoom_GetMessageHistory_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.sender || _(_._()),
        _.Message.initialize(this, _, 0, -1, [7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sender: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            server_timestamp: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            message: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            ordinal: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            server_message: {
              _: 5,
              _: _,
            },
            deleted: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            reactions: {
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
      return `CChatRoom_GetMessageHistory_Response_ChatMessage`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reaction_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reaction_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            reaction: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            num_reactors: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            has_user_reacted: {
              _: 4,
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
      return `CChatRoom_GetMessageHistory_Response_ChatMessage_MessageReaction`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            member: {
              _: 2,
              _: _,
            },
            change: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `CChatRoom_MemberStateChange_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            default_chat_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_rooms: {
              _: 3,
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
      return `CChatRoom_ChatRoomGroupRoomsChange_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            timestamp: {
              _: 3,
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
      return `CChatRoom_AckChatMessage_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            seconds_valid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            chat_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_CreateInviteLink_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.invite_code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invite_code: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            seconds_valid: {
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
      return `CChatRoom_CreateInviteLink_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.invite_code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invite_code: {
              _: 1,
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
      return `CChatRoom_GetInviteLinkInfo_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid_sender || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid_sender: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            time_expires: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            chat_id: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            group_summary: {
              _: 8,
              _: _,
            },
            user_chat_group_state: {
              _: 9,
              _: _,
            },
            time_kick_expire: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            banned: {
              _: 11,
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
      return `CChatRoom_GetInviteLinkInfo_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid_invitee || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid_invitee: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            chat_group_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            invite_code: {
              _: 4,
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
      return `CChatRoom_GetInviteInfo_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.group_summary || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            group_summary: {
              _: 1,
              _: _,
            },
            time_kick_expire: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            banned: {
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
      return `CChatRoom_GetInviteInfo_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_GetInviteLinksForGroup_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.invite_links || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invite_links: {
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
      return `CChatRoom_GetInviteLinksForGroup_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.invite_code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invite_code: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            steamid_creator: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            time_expires: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            chat_id: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_GetInviteLinksForGroup_Response_LinkInfo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            invite_code: {
              _: 2,
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
      return `CChatRoom_DeleteInviteLink_Request`;
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
      return `CChatRoom_DeleteInviteLink_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_GetBanList_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.bans || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            bans: {
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
      return `CChatRoom_GetBanList_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.accountid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            accountid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            accountid_actor: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_banned: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            ban_reason: {
              _: 4,
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
      return `CChatRoom_GetBanList_Response_BanInfo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.accountid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            accountid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            accountid_actor: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_invited: {
              _: 3,
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
      return `CChatRoomGroupInvite`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CChatRoom_GetInviteList_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.invites || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invites: {
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
      return `CChatRoom_GetInviteList_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_ids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
            },
            chat_groups_data_requested: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
            },
            virtualize_members_threshold: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CChatRoom_SetSessionActiveChatRoomGroups_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_states || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_states: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            virtualize_members_chat_group_ids: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
            },
            chat_group_notices: {
              _: 3,
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
      return `CChatRoom_SetSessionActiveChatRoomGroups_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_group_preferences: {
              _: 2,
              _: _,
            },
            chat_room_preferences: {
              _: 3,
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
      return `CChatRoom_SetUserChatGroupPreferences_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.desktop_notification_level || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            desktop_notification_level: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            mobile_notification_level: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            unread_indicator_muted: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            direct_messages_allowed: {
              _: 4,
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
      return `CChatRoom_SetUserChatGroupPreferences_Request_ChatGroupPreferences`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            desktop_notification_level: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            mobile_notification_level: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            unread_indicator_muted: {
              _: 4,
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
      return `CChatRoom_SetUserChatGroupPreferences_Request_ChatRoomPreferences`;
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
      return `CChatRoom_SetUserChatGroupPreferences_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            messages: {
              _: 3,
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
      return `CChatRoom_DeleteChatMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.server_timestamp || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            server_timestamp: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            ordinal: {
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
      return `CChatRoom_DeleteChatMessages_Request_Message`;
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
      return `CChatRoom_DeleteChatMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [7, 8], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            view_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            start: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            end: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            client_changenumber: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            delete_view: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            persona_subscribe_accountids: {
              _: 7,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            persona_unsubscribe_accountids: {
              _: 8,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
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
      return `CChatRoom_UpdateMemberListView_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.start || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            start: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            end: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            total_count: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            client_changenumber: {
              _: 6,
              _: _.readInt32,
              _: _.writeInt32,
            },
            server_changenumber: {
              _: 7,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CChatRoomMemberListView`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.ingame || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            ingame: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            online: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            offline: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CChatRoomMemberSummaryCounts`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            search_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            search_text: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            max_results: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CChatRoom_SearchMembers_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.matching_members || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            matching_members: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            status_flags: {
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
      return `CChatRoom_SearchMembers_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.accountid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            accountid: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            persona: {
              _: 2,
              _: _,
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
      return `CChatRoom_SearchMembers_Response_MemberMatch`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            server_timestamp: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            ordinal: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reaction_type: {
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
            },
            reaction: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            is_add: {
              _: 7,
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
      return `CChatRoom_UpdateMessageReaction_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.num_reactors || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            num_reactors: {
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
      return `CChatRoom_UpdateMessageReaction_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            server_timestamp: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            ordinal: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reactor: {
              _: 5,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            reaction_type: {
              _: 6,
              _: _.readEnum,
              _: _.writeEnum,
            },
            reaction: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            is_add: {
              _: 8,
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
      return `CChatRoom_MessageReaction_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            server_timestamp: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            ordinal: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reaction_type: {
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
            },
            reaction: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            limit: {
              _: 7,
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
      return `CChatRoom_GetMessageReactionReactors_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reactors || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reactors: {
              _: 1,
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
      return `CChatRoom_GetMessageReactionReactors_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid_from: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            timestamp: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            ordinal: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            report_reason: {
              _: 6,
              _: _.readEnum,
              _: _.writeEnum,
            },
            report_text: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            language: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            subject_type: {
              _: 9,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `CChatRoom_ReportMessage_Request`;
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
      return `CChatRoom_ReportMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            subject_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            subject_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            resolution: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            reason: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            subject_type: {
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
            },
            chat_group_id: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            kick_expiration_time: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            skip_lock: {
              _: 8,
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
      return `CChatRoom_ResolveReport_Request`;
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
      return `CChatRoom_ResolveReport_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            autocreate: {
              _: 2,
              _: !0,
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
      return `CClanChatRooms_GetClanChatRoomInfo_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_summary || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_summary: {
              _: 1,
              _: _,
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
      return `CClanChatRooms_GetClanChatRoomInfo_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            chat_room_private: {
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
      return `CClanChatRooms_SetClanChatRoomPrivate_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_room_private || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_room_private: {
              _: 1,
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
      return `CClanChatRooms_SetClanChatRoomPrivate_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            user_chat_group_state: {
              _: 2,
              _: _,
            },
            group_summary: {
              _: 3,
              _: _,
            },
            user_action: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `ChatRoomClient_NotifyChatGroupUserStateChanged_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_ids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
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
      return `ChatRoomClient_NotifyChatRoomDisconnect_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            view_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            view: {
              _: 3,
              _: _,
            },
            members: {
              _: 4,
              _: _,
              _: !0,
              _: !0,
            },
            status_flags: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            member_summary: {
              _: 6,
              _: _,
            },
            subscribed_personas: {
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
      return `CChatRoomClient_MemberListViewUpdated_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rank || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rank: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            accountid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            persona: {
              _: 3,
              _: _,
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
      return `CChatRoomClient_MemberListViewUpdated_Notification_MemberListViewEntry`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.metrics_run_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            metrics_run_id: {
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
      return `CChatUsability_RequestClientUsabilityMetrics_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.metrics_run_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            metrics_run_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            client_build: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            metrics_version: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            in_web: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            settings: {
              _: 10,
              _: _,
            },
            voice_settings: {
              _: 11,
              _: _,
            },
            ui_state: {
              _: 12,
              _: _,
            },
            metrics: {
              _: 13,
              _: _,
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
      return `CChatUsability_ClientUsabilityMetrics_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.notifications_show_ingame || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            notifications_show_ingame: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            notifications_show_online: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            notifications_show_message: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            notifications_events_and_announcements: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            sounds_play_ingame: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            sounds_play_online: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            sounds_play_message: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            sounds_events_and_announcements: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            always_new_chat_window: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            force_alphabetic_friend_sorting: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            chat_flash_mode: {
              _: 11,
              _: _.readInt32,
              _: _.writeInt32,
            },
            remember_open_chats: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            compact_quick_access: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            compact_friends_list: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
            },
            notifications_show_chat_room_notification: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            sounds_play_chat_room_notification: {
              _: 16,
              _: _.readBool,
              _: _.writeBool,
            },
            hide_offline_friends_in_tag_groups: {
              _: 17,
              _: _.readBool,
              _: _.writeBool,
            },
            hide_categorized_friends: {
              _: 18,
              _: _.readBool,
              _: _.writeBool,
            },
            categorize_in_game_friends_by_game: {
              _: 19,
              _: _.readBool,
              _: _.writeBool,
            },
            chat_font_size: {
              _: 20,
              _: _.readInt32,
              _: _.writeInt32,
            },
            use24hour_clock: {
              _: 21,
              _: _.readBool,
              _: _.writeBool,
            },
            do_not_disturb_mode: {
              _: 22,
              _: _.readBool,
              _: _.writeBool,
            },
            disable_embed_inlining: {
              _: 23,
              _: _.readBool,
              _: _.writeBool,
            },
            sign_into_friends: {
              _: 24,
              _: _.readBool,
              _: _.writeBool,
            },
            animated_avatars: {
              _: 25,
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
      return `CChatUsability_ClientUsabilityMetrics_Notification_Settings`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.voice_input_gain || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            voice_input_gain: {
              _: 1,
              _: _.readFloat,
              _: _.writeFloat,
            },
            voice_output_gain: {
              _: 2,
              _: _.readFloat,
              _: _.writeFloat,
            },
            noise_gate_level: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            voice_use_echo_cancellation: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            voice_use_noise_cancellation: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            voice_use_auto_gain_control: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            selected_non_default_mic: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            selected_non_default_output: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            push_to_talk_enabled: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            push_to_mute_enabled: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            play_ptt_sounds: {
              _: 11,
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
      return `CChatUsability_ClientUsabilityMetrics_Notification_VoiceSettings`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.friends_list_height || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            friends_list_height: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            friends_list_width: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            friends_list_docked: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            friends_list_collapsed: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            friends_list_group_chats_height: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            friends_list_visible: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            chat_popups_opened: {
              _: 7,
              _: _.readInt32,
              _: _.writeInt32,
            },
            group_chat_tabs_opened: {
              _: 8,
              _: _.readInt32,
              _: _.writeInt32,
            },
            friend_chat_tabs_opened: {
              _: 9,
              _: _.readInt32,
              _: _.writeInt32,
            },
            chat_window_width: {
              _: 10,
              _: _.readInt32,
              _: _.writeInt32,
            },
            chat_window_height: {
              _: 11,
              _: _.readInt32,
              _: _.writeInt32,
            },
            category_collapse: {
              _: 12,
              _: _,
            },
            group_chat_left_col_collapsed: {
              _: 13,
              _: _.readInt32,
              _: _.writeInt32,
            },
            group_chat_right_col_collapsed: {
              _: 14,
              _: _.readInt32,
              _: _.writeInt32,
            },
            in_one_on_one_voice_chat: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            in_group_voice_chat: {
              _: 16,
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
      return `CChatUsability_ClientUsabilityMetrics_Notification_UIState`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.in_game_collapsed || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            in_game_collapsed: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            online_collapsed: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            offline_collapsed: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            game_groups_collapsed: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            categories_collapsed: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CChatUsability_ClientUsabilityMetrics_Notification_UIState_CategoryCollapseState`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.friends_count || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            friends_count: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            friends_category_count: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            friends_categorized_count: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            friends_online_count: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            friends_in_game_count: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            friends_in_game_singleton_count: {
              _: 6,
              _: _.readInt32,
              _: _.writeInt32,
            },
            game_group_count: {
              _: 7,
              _: _.readInt32,
              _: _.writeInt32,
            },
            friends_favorite_count: {
              _: 8,
              _: _.readInt32,
              _: _.writeInt32,
            },
            group_chat_count: {
              _: 9,
              _: _.readInt32,
              _: _.writeInt32,
            },
            group_chat_favorite_count: {
              _: 10,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CChatUsability_ClientUsabilityMetrics_Notification_Metrics`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`Chat.RequestFriendPersonaStates#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.RequestFriendPersonaStates = _;
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.CreateChatRoomGroup#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.CreateChatRoomGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.SaveChatRoomGroup#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.SaveChatRoomGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.RenameChatRoomGroup#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.RenameChatRoomGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.SetChatRoomGroupTagline#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.SetChatRoomGroupTagline = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.SetChatRoomGroupAvatar#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.SetChatRoomGroupAvatar = _;
  function _(_, _, _) {
    return _.SendMsg(
      `ChatRoom.SetChatRoomGroupWatchingBroadcast#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 3,
      },
    );
  }
  _.SetChatRoomGroupWatchingBroadcast = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.JoinMiniGameForChatRoomGroup#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.JoinMiniGameForChatRoomGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.EndMiniGameForChatRoomGroup#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.EndMiniGameForChatRoomGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.MuteUserInGroup#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.MuteUserInGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.KickUserFromGroup#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.KickUserFromGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.SetUserBanState#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.SetUserBanState = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.RevokeInviteToGroup#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.RevokeInviteToGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.CreateRole#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.CreateRole = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.GetRoles#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetRoles = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.RenameRole#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.RenameRole = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.ReorderRole#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.ReorderRole = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.DeleteRole#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.DeleteRole = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.GetRoleActions#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetRoleActions = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.ReplaceRoleActions#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.ReplaceRoleActions = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.AddRoleToUser#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.AddRoleToUser = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.GetRolesForUser#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetRolesForUser = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.DeleteRoleFromUser#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.DeleteRoleFromUser = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.JoinChatRoomGroup#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.JoinChatRoomGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.InviteFriendToChatRoomGroup#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.InviteFriendToChatRoomGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.LeaveChatRoomGroup#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.LeaveChatRoomGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.CreateChatRoom#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.CreateChatRoom = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.DeleteChatRoom#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.DeleteChatRoom = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.RenameChatRoom#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.RenameChatRoom = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.ReorderChatRoom#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.ReorderChatRoom = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.SendChatMessage#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.SendChatMessage = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.JoinVoiceChat#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.JoinVoiceChat = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.LeaveVoiceChat#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.LeaveVoiceChat = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.GetMessageHistory#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.GetMessageHistory = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.GetMyChatRoomGroups#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetMyChatRoomGroups = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.GetChatRoomGroupState#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.GetChatRoomGroupState = _;
  function _(_, _, _) {
    return _.SendMsg(
      `ChatRoom.SetAppChatRoomGroupForceActive#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.SetAppChatRoomGroupForceActive = _;
  function _(_, _) {
    return _.SendNotification(
      `ChatRoom.SetAppChatRoomGroupStopForceActive#1`,
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.SetAppChatRoomGroupStopForceActive = _;
  function _(_, _) {
    return _.SendNotification(`ChatRoom.AckChatMessage#1`, _(_, _), {
      ePrivilege: 1,
    });
  }
  _.AckChatMessage = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.CreateInviteLink#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.CreateInviteLink = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.GetInviteLinkInfo#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetInviteLinkInfo = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.GetInviteInfo#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetInviteInfo = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.GetInviteLinksForGroup#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.GetInviteLinksForGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.GetBanList#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.GetBanList = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.GetInviteList#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.GetInviteList = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.DeleteInviteLink#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.DeleteInviteLink = _;
  function _(_, _, _) {
    return _.SendMsg(
      `ChatRoom.SetSessionActiveChatRoomGroups#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.SetSessionActiveChatRoomGroups = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.SetUserChatGroupPreferences#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.SetUserChatGroupPreferences = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.DeleteChatMessages#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.DeleteChatMessages = _;
  function _(_, _) {
    return _.SendNotification(`ChatRoom.DismissChatRoomNotice#1`, _(_, _), {
      ePrivilege: 1,
    });
  }
  _.DismissChatRoomNotice = _;
  function _(_, _) {
    return _.SendNotification(`ChatRoom.UpdateMemberListView#1`, _(_, _), {
      ePrivilege: 1,
    });
  }
  _.UpdateMemberListView = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.SearchMembers#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.SearchMembers = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.UpdateMessageReaction#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.UpdateMessageReaction = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.GetMessageReactionReactors#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetMessageReactionReactors = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.ReportMessage#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.ReportMessage = _;
  function _(_, _, _) {
    return _.SendMsg(`ChatRoom.ResolveReport#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.ResolveReport = _;
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`ClanChatRooms.GetClanChatRoomInfo#1`, _(_, _, _), _, {
      ePrivilege: 2,
    });
  }
  _.GetClanChatRoomInfo = _;
  function _(_, _, _) {
    return _.SendMsg(`ClanChatRooms.SetClanChatRoomPrivate#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.SetClanChatRoomPrivate = _;
})((_ ||= {}));
var _;
(function (_) {
  (_.NotifyIncomingChatMessageHandler = {
    name: `ChatRoomClient.NotifyIncomingChatMessage#1`,
    request: _,
  }),
    (_.NotifyChatMessageModifiedHandler = {
      name: `ChatRoomClient.NotifyChatMessageModified#1`,
      request: _,
    }),
    (_.NotifyMemberStateChangeHandler = {
      name: `ChatRoomClient.NotifyMemberStateChange#1`,
      request: _,
    }),
    (_.NotifyChatRoomHeaderStateChangeHandler = {
      name: `ChatRoomClient.NotifyChatRoomHeaderStateChange#1`,
      request: _,
    }),
    (_.NotifyChatRoomGroupRoomsChangeHandler = {
      name: `ChatRoomClient.NotifyChatRoomGroupRoomsChange#1`,
      request: _,
    }),
    (_.NotifyShouldRejoinChatRoomVoiceChatHandler = {
      name: `ChatRoomClient.NotifyShouldRejoinChatRoomVoiceChat#1`,
      request: _,
    }),
    (_.NotifyChatGroupUserStateChangedHandler = {
      name: `ChatRoomClient.NotifyChatGroupUserStateChanged#1`,
      request: _,
    }),
    (_.NotifyAckChatMessageEchoHandler = {
      name: `ChatRoomClient.NotifyAckChatMessageEcho#1`,
      request: _,
    }),
    (_.NotifyChatRoomDisconnectHandler = {
      name: `ChatRoomClient.NotifyChatRoomDisconnect#1`,
      request: _,
    }),
    (_.NotifyMemberListViewUpdatedHandler = {
      name: `ChatRoomClient.NotifyMemberListViewUpdated#1`,
      request: _,
    }),
    (_.NotifyMessageReactionHandler = {
      name: `ChatRoomClient.NotifyMessageReaction#1`,
      request: _,
    }),
    (_.NotifyChatRoomNoticeHandler = {
      name: `ChatRoomClient.NotifyChatRoomNotice#1`,
      request: _,
    });
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _) {
    return _.SendNotification(
      `ChatUsability.NotifyClientUsabilityMetrics#1`,
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.NotifyClientUsabilityMetrics = _;
})((_ ||= {}));
var _;
(function (_) {
  _.NotifyRequestClientUsabilityMetricsHandler = {
    name: `ChatUsabilityClient.NotifyRequestClientUsabilityMetrics#1`,
    request: _,
  };
})((_ ||= {}));
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid1 || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid1: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            steamid2: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            count: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            most_recent_conversation: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            rtime32_start_time: {
              _: 5,
              _: _.readFixed32,
              _: _.writeFixed32,
            },
            bbcode_format: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            start_ordinal: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_last: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            ordinal_last: {
              _: 9,
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
      return `CFriendMessages_GetRecentMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            more_available: {
              _: 4,
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
      return `CFriendMessages_GetRecentMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.accountid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            accountid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            timestamp: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            message: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            ordinal: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reactions: {
              _: 5,
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
      return `CFriendMessages_GetRecentMessages_Response_FriendMessage`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reaction_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reaction_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            reaction: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            reactors: {
              _: 3,
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
      return `CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReaction`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.lastmessage_since || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            lastmessage_since: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            only_sessions_with_messages: {
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
      return `CFriendsMessages_GetActiveMessageSessions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.message_sessions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            message_sessions: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            timestamp: {
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
      return `CFriendsMessages_GetActiveMessageSessions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.accountid_friend || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            accountid_friend: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_message: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_view: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            unread_message_count: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            notices: {
              _: 5,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
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
      return `CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSession`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            chat_entry_type: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            message: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            contains_bbcode: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            echo_to_sender: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            low_priority: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            client_message_id: {
              _: 8,
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
      return `CFriendMessages_SendMessage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.modified_message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            modified_message: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            server_timestamp: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            ordinal: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            message_without_bb_code: {
              _: 4,
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
      return `CFriendMessages_SendMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid_friend || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid_friend: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            chat_entry_type: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            from_limited_account: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            message: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            rtime32_server_timestamp: {
              _: 5,
              _: _.readFixed32,
              _: _.writeFixed32,
            },
            ordinal: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            local_echo: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            message_no_bbcode: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            low_priority: {
              _: 9,
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
      return `CFriendMessages_IncomingMessage_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid_partner || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid_partner: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            timestamp: {
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
      return `CFriendMessages_AckMessage_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid_friend || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid_friend: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            notice_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            active: {
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
      return `CFriendMessages_SessionNotice_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CFriendMessages_IsInFriendsUIBeta_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.online_in_friendsui || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            online_in_friendsui: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            has_used_friendsui: {
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
      return `CFriendMessages_IsInFriendsUIBeta_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            server_timestamp: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            ordinal: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reaction_type: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            reaction: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            is_add: {
              _: 6,
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
      return `CFriendMessages_UpdateMessageReaction_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reactors || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reactors: {
              _: 1,
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
      return `CFriendMessages_UpdateMessageReaction_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid_friend || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid_friend: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            server_timestamp: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            ordinal: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reactor: {
              _: 4,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            reaction_type: {
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
            },
            reaction: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            is_add: {
              _: 7,
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
      return `CFriendMessages_MessageReaction_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid_from || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid_from: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            steamid_to: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            timestamp: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            ordinal: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            report_reason: {
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
            },
            report_text: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            language: {
              _: 7,
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
      return `CFriendMessages_ReportMessage_Request`;
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
      return `CFriendMessages_ReportMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid_from || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid_from: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            steamid_to: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            subject_group_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            subject_id: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            resolution: {
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
            },
            reason: {
              _: 6,
              _: _.readEnum,
              _: _.writeEnum,
            },
            skip_lock: {
              _: 7,
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
      return `CFriendMessages_ResolveReport_Request`;
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
      return `CFriendMessages_ResolveReport_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid_friend || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid_friend: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            notice_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `CFriendMessages_DismissSessionNotice_Notification`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`FriendMessages.GetRecentMessages#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetRecentMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `FriendMessages.GetActiveMessageSessions#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetActiveMessageSessions = _;
  function _(_, _, _) {
    return _.SendMsg(`FriendMessages.SendMessage#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.SendMessage = _;
  function _(_, _) {
    return _.SendNotification(`FriendMessages.AckMessage#1`, _(_, _), {
      ePrivilege: 1,
    });
  }
  _.AckMessage = _;
  function _(_, _, _) {
    return _.SendMsg(`FriendMessages.IsInFriendsUIBeta#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.IsInFriendsUIBeta = _;
  function _(_, _, _) {
    return _.SendMsg(`FriendMessages.UpdateMessageReaction#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.UpdateMessageReaction = _;
  function _(_, _, _) {
    return _.SendMsg(`FriendMessages.ReportMessage#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.ReportMessage = _;
  function _(_, _, _) {
    return _.SendMsg(`FriendMessages.ResolveReport#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.ResolveReport = _;
  function _(_, _) {
    return _.SendNotification(
      `FriendMessages.DismissSessionNotice#1`,
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.DismissSessionNotice = _;
})((_ ||= {}));
var _;
(function (_) {
  (_.IncomingMessageHandler = {
    name: `FriendMessagesClient.IncomingMessage#1`,
    request: _,
  }),
    (_.NotifyAckMessageEchoHandler = {
      name: `FriendMessagesClient.NotifyAckMessageEcho#1`,
      request: _,
    }),
    (_.MessageReactionHandler = {
      name: `FriendMessagesClient.MessageReaction#1`,
      request: _,
    }),
    (_.SessionNoticeHandler = {
      name: `FriendMessagesClient.SessionNotice#1`,
      request: _,
    });
})((_ ||= {}));
var _ = `friendschatreportmetadata`,
  _ = `chatgroupreportmetadata`,
  _ = `chatgroupsummary`;
function _(_, _, _) {
  return {
    queryKey: [_, _, _],
    queryFn: async () => await _(_, _),
    staleTime: 1 / 0,
  };
}
function _(_, _, _) {
  return _(_(_, _, _));
}
function _(_, _, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      _.Body().set_steamid_from(_),
        _.Body().set_steamid_to(_ ?? _),
        _.Body().set_subject_group_id(_),
        _.Body().set_subject_id(_),
        _.Body().set_resolution(_.eResolution),
        _.Body().set_reason(_.eReason);
      let _ = await _.ResolveReport(_, _);
      if (_.GetEResult() !== 1)
        throw Error(
          `Failure calling FriendMessages.ResolveReport: ${_.GetErrorMessage()}`,
        );
    },
    onSuccess: async () => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _(4, _),
        }),
        _.invalidateQueries({
          queryKey: _(4, _, _),
        }),
        _.invalidateQueries({
          queryKey: _(4, _, _),
        }),
      ]);
    },
  });
}
function _(_, _, _) {
  return {
    queryKey: [_, _, _],
    queryFn: async () => await _(_, _),
    staleTime: 1 / 0,
  };
}
function _(_, _, _) {
  return _(), _(_(_, _, _));
}
function _(_, _, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      _.Body().set_subject_group_id(_),
        _.Body().set_subject_id(_),
        _.Body().set_resolution(_.eResolution),
        _.Body().set_reason(_.eReason),
        _.Body().set_subject_type(_),
        _.Body().set_chat_group_id(_),
        _.rtKickExpiration &&
          _.Body().set_kick_expiration_time(_.rtKickExpiration);
      let _ = await _.ResolveReport(_, _);
      if (_.GetEResult() !== 1)
        throw Error(
          `Failure calling ChatRoom.ResolveReport: ${_.GetErrorMessage()}`,
        );
    },
    onSuccess: async () => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _(_, _),
        }),
        _.invalidateQueries({
          queryKey: _(_, _, _),
        }),
        _.invalidateQueries({
          queryKey: _(_, _, _),
        }),
      ]);
    },
  });
}
function _(_) {
  return {
    queryKey: [_, _],
    queryFn: async () => {
      let _ = await _.Actions.GetChatGroupSummary(_);
      if (_ === null) throw Error(`Failed to get summary for chat group ${_}`);
      return _;
    },
    staleTime: 1 / 0,
  };
}
function _(_) {
  return _(_(_));
}
function _(_) {
  let _ = _(_),
    _ = _.InitFromClanID(
      _.data?.clanid ?? 0,
      _.EUNIVERSE,
    ).ConvertTo64BitString(),
    _ = _(_),
    _ = {
      strChatGroupID: _,
      strLocalizedGroupType: _.Localize(
        `#moderation_chatgroup_type_privateadhoc`,
        _,
      ),
      bIsPublicGroup: !1,
      strChatGroupName: _.data?.chat_group_name,
      strClanName: _.data?.name,
    };
  return (
    _.data?.appid
      ? (_.strLocalizedGroupType = _.Localize(
          `#moderation_chatgroup_type_app`,
          _.data.appid,
        ))
      : _.data?.clanid &&
        ((_.strClanLink = `${_.COMMUNITY_BASE_URL}gid/${_}`),
        _.data?.official
          ? ((_.strLocalizedGroupType = _.Localize(
              `#moderation_chatgroup_type_clanapp`,
              _.data.clanid,
            )),
            (_.bIsPublicGroup = !0))
          : _.data?.invite_only
            ? (_.strLocalizedGroupType = _.Localize(
                `#moderation_chatgroup_type_clanprivate`,
                _.data.name ?? `-`,
                _.data.clanid,
              ))
            : _.data &&
              ((_.strLocalizedGroupType = _.Localize(
                `#moderation_chatgroup_type_clanpublic`,
                _.data.name ?? `-`,
                _.data.clanid,
              )),
              (_.bIsPublicGroup = !0))),
    _
  );
}
var _ = _(_(), 1);
function _(_, _) {
  _.sort((_, _) => {
    let _ =
        (_.unresolved_report_count ?? 0) + (_.unresolved_dispute_count ?? 0),
      _ = (_.unresolved_report_count ?? 0) + (_.unresolved_dispute_count ?? 0);
    return _ === _
      ? (_.reports?._(0)?.time_reported ?? 0) -
          (_.reports?._(0)?.time_reported ?? 0)
      : _ - _;
  });
  let _ = [],
    _ = 20;
  for (let _ of _)
    if (
      !(_.required_moderator_level && _.required_moderator_level > _) &&
      (_.push(_),
      (_.unresolved_report_count ?? 0) + (_.unresolved_dispute_count ?? 0) ===
        0 && --_,
      _ < 1)
    )
      break;
  return _;
}
function _(_) {
  let _ = 0,
    _ = 0,
    _ = 0;
  if (!_.additional_subject_data) return null;
  for (let _ of _.additional_subject_data?.data ?? [])
    _.key === `msgTime`
      ? (_ = Number(_.value))
      : _.key === `msgOrdinal`
        ? (_ = Number(_.value))
        : _.key === `receiverAccountID`
          ? (_ = Number(_.value))
          : _(
              !1,
              `Unknown additional data key ${_.key} in friend chat message report subject.`,
            );
  return _
    ? {
        rtMsgTime: _,
        nMsgOrdinal: _,
        unReceiverAccountID: _,
      }
    : (_(
        _,
        `Missing rtMsgTime in friend chat message content report subject additional data.`,
      ),
      null);
}
function _(_) {
  let _ = {
    rtMsgTime: 0,
    nMsgOrdinal: 0,
    strChatGroupID: ``,
    strChatRoomID: ``,
  };
  if (!_.additional_subject_data) return null;
  for (let _ of _.additional_subject_data?.data ?? [])
    _.key === `msgTime`
      ? (_.rtMsgTime = Number(_.value))
      : _.key === `msgOrdinal`
        ? (_.nMsgOrdinal = Number(_.value))
        : _.key === `chatRoomID` && _.value
          ? (_.strChatRoomID = _.value)
          : _.key === `chatGroupID` && _.value
            ? (_.strChatGroupID = _.value)
            : _(
                !1,
                `Unknown additional data key ${_.key} in group chat message report subject.`,
              );
  return !_.rtMsgTime || !_.strChatGroupID
    ? (_(
        _.rtMsgTime,
        `Missing rtMsgTime in chat group message content report subject additional data.`,
      ),
      _(
        _.strChatGroupID,
        `Missing strChatGroupID in chat group message content report subject additional data.`,
      ),
      null)
    : _;
}
function _(_, _, _, _) {
  let _ = _(_, _, _.subject_group_id, _.subject_id);
  return (0, _.useMemo)(() => {
    let _ = new Map();
    _.set(4, async (_) => {
      await _.mutateAsync({
        eResolution: 4,
        eReason: _,
      });
    }),
      _.set(5, async (_) => {
        await _.mutateAsync({
          eResolution: 5,
          eReason: _,
        });
      }),
      _ &&
        _.set(2, async (_) => {
          await _.mutateAsync({
            eResolution: 2,
            eReason: _,
          });
        }),
      _.set(1, async () => {
        await _.mutateAsync({
          eResolution: 1,
          eReason: 1,
        });
      });
    let _ = new Map();
    return (
      _.set(_.k_EContentModerationAction_MarkSuspicious, async () => {
        await _.mutateAsync({
          eResolution: 4,
          eReason: 16,
        });
      }),
      {
        bDisputed: !!_.unresolved_dispute_count,
        bUnresolved: !!_.unresolved_report_count,
        eResolution: _.resolved,
        eReason: _.content_moderated_reason
          ? _.content_moderated_reason
          : _.reports?._(0)?.report_reason,
        mapResolutionFuncs: _,
        mapAdditionalActions: _,
      }
    );
  }, [_, _, _]);
}
function _(_, _) {
  let _ = _(_.subject_type, _.subject_group_id, _.subject_id, _.strChatGroupID);
  return (0, _.useMemo)(() => {
    let _ = new Map(),
      _ = new Map();
    return (
      _.strChatGroupID?.length > 0 &&
        (_.subject_type !== 6 &&
          (_.set(4, async (_) => {
            await _.mutateAsync({
              eResolution: 4,
              eReason: _,
            });
          }),
          _.set(5, async (_) => {
            await _.mutateAsync({
              eResolution: 5,
              eReason: _,
            });
          }),
          _.bIsPublicGroup &&
            (_.set(13, async (_, _) => {
              let _ = _.rtime32BanEnds === 0 ? 2 ** 32 - 1 : _.rtime32BanEnds;
              await _.mutateAsync({
                eResolution: 13,
                eReason: _,
                rtKickExpiration: _,
              });
            }),
            _.set(2, async (_) => {
              await _.mutateAsync({
                eResolution: 2,
                eReason: _,
              });
            }))),
        _.set(1, async () => {
          await _.mutateAsync({
            eResolution: 1,
            eReason: 1,
          });
        }),
        _.set(_.k_EContentModerationAction_MarkSuspicious, async () => {
          await _.mutateAsync({
            eResolution: 4,
            eReason: 16,
          });
        })),
      {
        bDisputed: !!_.unresolved_dispute_count,
        bUnresolved: !!_.unresolved_report_count,
        eResolution: _.resolved,
        eReason: _.content_moderated_reason
          ? _.content_moderated_reason
          : _.reports?._(0)?.report_reason,
        mapResolutionFuncs: _,
        mapAdditionalActions: _,
      }
    );
  }, [_, _, _]);
}
var _ = `m3zeiBoaGTo-`,
  _ = `JwM3Y37auUI-`,
  _ = `bvzDzJHJNj4-`,
  _ = `xtVKYAC59ZU-`,
  _ = `Eq8KcapAWvI-`,
  _ = `psxrD09yLTc-`,
  _ = _();
function _(_) {
  let { context: _, children: _ } = _;
  return _.bBlurImages
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _,
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(`span`, {
              className: _,
              children: _.Localize(`#moderation_image_obscured`),
            }),
          }),
        ],
      })
    : _;
}
function _(_) {
  let [_, _] = (0, _.useState)(!1);
  if (!_.args || !_.args.src) return null;
  if (_)
    return (0, _.jsx)(`span`, {
      className: _,
      children: _.Localize(`#moderation_image_removed`),
    });
  let _ = _.args.thumbnail_src,
    _ = _.args.src;
  return (0, _.jsx)(_, {
    _: _,
    openInNewWindow: !0,
    children: (0, _.jsx)(_, {
      context: _.context,
      children: (0, _.jsx)(`img`, {
        src: _ ?? _,
        alt: `User Uploaded`,
        onError: () => _(!0),
      }),
    }),
  });
}
function _(_) {
  return !_.args || !_.args[``]
    ? null
    : (0, _.jsx)(_, {
        _: _.args[``],
        openInNewWindow: !0,
        children: _.children,
      });
}
function _(_) {
  if (!_.args) return null;
  let _ = _.args.url ?? ``,
    _ = _.args.img ?? ``,
    _ = _.args.title ?? ``;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        children: _,
      }),
      (0, _.jsx)(_, {
        _: _,
        openInNewWindow: !0,
        children: (0, _.jsx)(_, {
          context: _.context,
          children: (0, _.jsx)(`img`, {
            src: _,
            alt: `OpenGraph Header`,
          }),
        }),
      }),
      (0, _.jsx)(_, {
        _: _,
        openInNewWindow: !0,
        children: _.children,
      }),
    ],
  });
}
function _(_) {
  if (!_.args) return null;
  let _ = _.args.src ?? ``,
    _ = _.args.type ?? ``,
    _ = _.args.title ?? `Untitled`;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        children: _,
      }),
      (0, _.jsx)(_, {
        context: _.context,
        children: (0, _.jsxs)(`video`, {
          muted: !0,
          autoPlay: !1,
          loop: !1,
          controlsList: `nodownload`,
          controls: !0,
          children: [
            (0, _.jsx)(`source`, {
              src: _,
              type: _,
            }),
            (0, _.jsx)(`track`, {
              kind: `captions`,
            }),
          ],
        }),
      }),
    ],
  });
}
var _ = class {
    m_BBCodeDictionary = new Map([
      [
        `img`,
        {
          Constructor: _,
        },
      ],
      [
        `url`,
        {
          Constructor: _,
        },
      ],
      [
        `og`,
        {
          Constructor: _,
        },
      ],
      [
        `video`,
        {
          Constructor: _,
        },
      ],
    ]);
    m_BBCodeAccumulator = (_) => new _(new _());
    m_BBCodeParser = new _(
      this.m_BBCodeDictionary,
      this.m_BBCodeAccumulator,
      _.LANGUAGE,
    );
    ParseBBCode(_, _, _ = !1) {
      return this.m_BBCodeParser.ParseBBCode(_, _, _);
    }
  },
  _ = `GKy0s-BnzG0-`,
  _ = `Xl7xbUHYvRM-`,
  _ = `vY2GLvW3KtM-`,
  _ = `Pc0jCrLPG18-`,
  _ = `_8cPoOC4ENJs-`,
  _ = `cpvPI4MdpwQ-`,
  _ = `AeRrrZh8wpI-`,
  _ = `O2CvbHh-ZJA-`,
  _ = `_75RAdETXAvo-`,
  _ = `_7Dipk0b0uB8-`,
  _ = `_37IADXRjA6g-`,
  _ = `ik3AfytE-7g-`,
  _ = `Rtq6ApAY1MY-`,
  _ = `c5-RzdR0H1s-`,
  _ = `bGoWH9ocxp8-`,
  _ = `uuOcLg2Cdck-`,
  _ = `ejHflFYs7QM-`,
  _ = `_9KTlqNdyX6g-`,
  _ = `vtk1Xwb8-ys-`,
  _ = `HfWISO5-CNQ-`,
  _ = `_8w-7Cg2b2YA-`,
  _ = `_6O38xjqvNLI-`,
  _ = `uoOFrDoxJp0-`,
  _ = `OWQ-2aLfrok-`,
  _ = `l-8TjXmYHKo-`,
  _ = `UHLvxyXvkz4-`,
  _ = `XqbMeuPjnHU-`,
  _ = `mPgHpaEtiYc-`,
  _ = _(_(), 1),
  _ = (_, _, _) => [`topic_details`, _, _, _],
  _ = (_, _, _, _) => [`comment_thread`, _, _, _, _],
  _ = (_) => [`comment_thread_by_id`, _],
  _ = (_, _) => [`hub_ban_status`, _, _];
function _(_, _, _, _) {
  return {
    queryKey: _(_, _, _),
    queryFn: async () => {
      let _ = _.Init(_);
      return (
        _.Body().set_steamid(_),
        _.Body().set_gidforum(_),
        _.Body().add_gidtopics(_),
        _.Body().set_include_full_text(!0),
        (await _.GetTopicDetails(_, _)).Body().toObject()
      );
    },
  };
}
function _(_, _, _) {
  return _(_(_(), _, _, _));
}
function _(_, _, _, _, _) {
  return {
    queryKey: _(_, _, _, _),
    queryFn: async () => {
      let _ = _.Init(_);
      return (
        _.Body().set_steamid(_),
        _.Body().set_comment_thread_type(_),
        _.Body().set_gidfeature(_),
        _.Body().set_gidfeature2(_),
        _.Body().set_include_deleted(!0),
        _.Body().set_oldest_first(!0),
        (await _.GetCommentThread(_, _)).Body().toObject()
      );
    },
  };
}
function _(_, _, _) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = _.Init(_);
      return (
        _.Body().set_steamid(_),
        _.Body().set_commentthreadid(_),
        (await _.GetCommentThread(_, _)).Body().toObject()
      );
    },
  };
}
function _(_, _) {
  return _(_(_(), _, _));
}
function _(_, _, _, _) {
  return _(_(_(), _, _, _, _));
}
function _(_, _, _) {
  return _(_, 7, _, _);
}
function _(_, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      _.Body().set_steamid(_),
        _.Body().set_gidforum(_),
        _.Body().set_gidtopic(_),
        _.Body().set_gidpost(_);
      let _ = await _.ResolveReportedPost(_, _);
      if (!_.BSuccess())
        throw Error(`Failed to acquit forum comment: ` + _.GetEMsg());
      return _.Body();
    },
    onSuccess: async (_, _) => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _(_, 7, _, _),
        }),
        _.invalidateQueries({
          queryKey: _(_, _, _),
        }),
        _.invalidateQueries({
          queryKey: _(1, _),
        }),
        _.invalidateQueries({
          queryKey: _(1, _, _),
        }),
        _.invalidateQueries({
          queryKey: _(1, _, _),
        }),
      ]);
    },
  });
}
function _(_, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      _.Body().set_steamid(_),
        _.Body().set_comment_thread_type(7),
        _.Body().set_gidfeature(_),
        _.Body().set_gidfeature2(_),
        _.Body().set_gidcomment(_.gidComment),
        _.Body().set_reason(_.eReason),
        _.Body().set_resolution(_.eResolution);
      let _ = await _.DeleteModeratedComment(_, _);
      if (!_.BSuccess())
        throw Error(`Failed to delete forum comment: ` + _.GetEMsg());
      return _.Body();
    },
    onSuccess: async () => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _(_, 7, _, _),
        }),
        _.invalidateQueries({
          queryKey: _(_, _, _),
        }),
        _.invalidateQueries({
          queryKey: _(1, _),
        }),
        _.invalidateQueries({
          queryKey: _(1, _, `0`),
        }),
        _.invalidateQueries({
          queryKey: _(1, _, `0`),
        }),
      ]);
    },
  });
}
function _(_, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      return (
        _.Body().set_steamid(_),
        _.Body().set_comment_thread_type(7),
        _.Body().set_gidfeature(_),
        _.Body().set_gidfeature2(_),
        _.Body().set_reason(_.eReason),
        _.Body().set_resolution(_.eResolution),
        (await _.DeleteModeratedTopic(_, _)).Body()
      );
    },
    onSuccess: async () => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _,
        }),
        _.invalidateQueries({
          queryKey: _(_, 7, _, _),
        }),
        _.invalidateQueries({
          queryKey: _(_, _, _),
        }),
        _.invalidateQueries({
          queryKey: _(1, _),
        }),
        _.invalidateQueries({
          queryKey: _(1, _, `0`),
        }),
        _.invalidateQueries({
          queryKey: _(1, _, `0`),
        }),
      ]);
    },
  });
}
function _(_, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      return (
        _.Body().set_steamid(_),
        _.Body().set_gidforum(_),
        _.Body().set_gidtopic(_),
        _.Body().set_locked(_.bLocked),
        _.strAuditNote && _.Body().set_audit_note(_.strAuditNote),
        (await _.SetTopicLocked(_, _)).Body()
      );
    },
    onSuccess: async () => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: _(_, _, _),
        }),
        _.invalidateQueries({
          queryKey: _(1, _, `0`),
        }),
      ]);
    },
  });
}
function _(_, _, _, _, _, _) {
  let _ = _(),
    _ = new _(_).GetAccountID();
  return _({
    mutationFn: async (_) => {
      let _ = await _.Actions.SendCommunityMessage(
        _,
        _,
        _,
        _,
        _,
        _,
        _.strCustomText,
        _.eMessageType,
        _.eWarningReason,
      );
      if (_ !== 1 && _ !== 29)
        throw Error(`Failed to second community message (EResult ${_})`);
    },
    onSuccess: async () => {
      _.invalidateQueries({
        queryKey: _(_),
      });
    },
  });
}
function _(_, _, _, _, _, _) {
  let _ = _(),
    _ = new _(_).GetAccountID(),
    _ = new _(_).GetAccountID();
  return _({
    mutationFn: async (_) => {
      let _ = await _.Actions.HubBanUser(
        _,
        _,
        _,
        _,
        _,
        _,
        _.strReason,
        _.rtime32BanEnds,
      );
      if (!_) throw Error(`Failed to hub ban user (Request failed).`);
      if (_.success !== 1 && _.success !== 29)
        throw Error(`Failed to hub ban user (EResult ` + _ + `)`);
      return null;
    },
    onSuccess: async () => {
      _.invalidateQueries({
        queryKey: _(_),
      }),
        _.invalidateQueries({
          queryKey: _(_, _),
        });
    },
  });
}
function _(_) {
  return _(
    [`GetHubBanStatus`, _],
    () =>
      new _.default(
        async (_) => {
          let _ = await _.Actions.GetHubBanStatus(_, _),
            _ = new Map();
          if (_ && _.success === 1)
            for (let _ of _.bans) _.set(_.accountid_ban, _);
          return _.map((_) => _.get(_) ?? null);
        },
        {
          maxBatchSize: 100,
          cache: !1,
        },
      ),
  );
}
function _(_, _) {
  let _ = new _(_).GetAccountID(),
    _ = new _(_).GetAccountID(),
    _ = _(_);
  return {
    queryKey: _(_, _),
    queryFn: async () => {
      let _ = await _.load(_);
      return _ === null
        ? null
        : {
            steamid: _.InitFromAccountID(
              _.accountid_ban,
              _.EUNIVERSE,
            ).ConvertTo64BitString(),
            bannedBySteamid: _.InitFromAccountID(
              _.accountid_ban_actor,
              _.EUNIVERSE,
            ).ConvertTo64BitString(),
            rtBannedUntil: _.time_ban_end,
          };
    },
  };
}
function _(_, _) {
  return _(_(_, _));
}
function _(_, _, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = await _.PostCommentToThread(_, {
        steamid: _,
        comment_thread_type: _,
        gidfeature: _,
        gidfeature2: _,
        text: _.strMessage,
      });
      if (_.GetEResult() !== 1)
        throw Error(
          `Failed to post comment to thread: EResult ` + _.GetEResult(),
        );
      return _.Body().toObject();
    },
    onSuccess: async (_, _) => {
      _.invalidateQueries({
        queryKey: _(_, _, _, _),
      });
    },
  });
}
function _(_) {
  let { clanSteamId: _, gidForum: _, gidTopic: _ } = _,
    _ = _(_, _, _);
  if (!_.isSuccess) return null;
  _(_.data && _.data.topics && _.data.topics[0], `Missing topic data on query`),
    _(
      _.data && _.data.forum_details && _.data.forum_details.gidfeature,
      `Missing gidfeature`,
    ),
    _.data.forum_details.gidfeature,
    `${_}`,
    _.data.forum_details.appid && `${_.data.forum_details.appid}`;
  let _ = new _(_).GetAccountID(),
    _ = `${_.COMMUNITY_BASE_URL}actions/redirecttoforumtopic?accountIDOwner=${_}&gidForum=${_}&gidTopic=${_}`;
  return (
    _.gidComment && (_ += `#c` + _.gidComment),
    (0, _.jsx)(`a`, {
      href: _,
      children: _.children,
    })
  );
}
function _(_, _, _, _) {
  return _({
    mutationFn: async (_) => {
      let _ = await _.Actions.ClearContentCheckResult(_, _, _, _, _);
      if (_.eResult !== 1)
        throw Error(`ClearContentCheckResult EResult: ` + _.eResult);
    },
  });
}
function _(_, _) {
  return {
    queryKey: [`get_clan_metadata`, _],
    queryFn: async () => {
      let _ = _.Init(_);
      _.Body().set_steamid(_);
      let _ = await _.GetClanMetadata(_, _);
      if (!_.BSuccess())
        throw Error(`Failed to get clan metadata, eresult: ${_.GetEResult()}`);
      return _.Body().toObject();
    },
  };
}
function _(_) {
  return _(_(_(), _));
}
function _(_) {
  let _ = ``,
    _ = ``;
  if (!_.additional_subject_data) return null;
  for (let _ of _.additional_subject_data?.data ?? [])
    _.key === `clanSteamId`
      ? (_ = _.value)
      : _.key === `forumId`
        ? (_ = _.value)
        : console.error(`Unknown additional data key ${_.key} in forum post.`);
  return _ == ``
    ? (console.error(`Missing clanSteamId in additional data.`), null)
    : _ == ``
      ? (console.error(`Missing forumId in additional data.`), null)
      : {
          clanSteamId: _,
          forumId: _,
        };
}
var _ = `_98ZFK1MKUZE-`,
  _ = `BAXovb3PE78-`,
  _ = `atjhU8wyIbU-`,
  _ = `_2bX38Mll-jM-`,
  _ = `GhLGKQMBTZ8-`,
  _ = `D6C58ph-uec-`,
  _ = `GJz0i21pUJU-`,
  _ = _(_(), 1);
function _(_) {
  let _ = _(_.clanSteamId, _.commentThreadType, _.gidFeature, _.gidFeature2);
  if (!_.isSuccess || !_.data) return null;
  let [_, _, _] = _(_.data.comments);
  _(_.data.comments, `Missing comments on comment thread`),
    _(_.data.deleted_comments, `Missing deletedcomments on comment thread`);
  let _ = [...(_.data.comments ?? [])];
  _.push(...(_.data.deleted_comments ?? [])),
    _.sort((_, _) => _.timestamp - _.timestamp);
  let _ = (0, _.useMemo)(
    () => (_) =>
      (0, _.jsx)(_, {
        ..._,
        comment: _.item,
        subject: _.mapCommentGidToSubjects.get(_.item.gidcomment),
        bSelected: _.selected,
        idx: _.idx,
        visible: _.visible,
        setFilter: _,
        getPublicURL: _.getPublicURL,
      }),
    [
      _.clanSteamId,
      _.commentThreadType,
      _.gidFeature,
      _.gidFeature2,
      _.mapCommentGidToSubjects,
      _.setSelected,
    ],
  );
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        setFilter: _,
        filter: _,
        setSelected: _.setSelected,
        clanSteamId: _.clanSteamId,
      }),
      (0, _.jsx)(_, {
        items: _,
        component: _,
        fnKey: (_) => _.gidcomment,
        selected: _.selected,
        setSelected: _.setSelected,
        fnIsVisible: _,
      }),
    ],
  });
}
function _(_) {
  return _.filter === null
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _.filter.kind === `quotes` &&
            (0, _.jsxs)(`div`, {
              children: [
                `Showing only children of `,
                (0, _.jsx)(`a`, {
                  style: {
                    cursor: `pointer`,
                  },
                  onClick: () => {
                    _.filter &&
                      _.filter.kind === `quotes` &&
                      _.setSelected(_.filter.gidcomment);
                  },
                  children: `this comment`,
                }),
              ],
            }),
          _.filter.kind === `user` &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(`div`, {
                  children: `Showing only comments by`,
                }),
                (0, _.jsx)(_, {
                  clanSteamId: _.clanSteamId,
                  steamid: _.filter.steamid,
                }),
              ],
            }),
          _.filter !== null &&
            (0, _.jsx)(`div`, {
              children: (0, _.jsx)(_, {
                onClick: () => {
                  _.setFilter(null);
                },
                children: `Clear filter`,
              }),
            }),
        ],
      });
}
function _(_, _, _) {
  let _ = _.get(_);
  if (_) for (let _ of _) _.add(_), _(_, _, _);
}
function _(_) {
  let [_, _] = (0, _.useState)(null),
    _ = (0, _.useMemo)(() => {
      let _ = new Map();
      for (let _ of _) {
        let _ = 0;
        for (;;) {
          let _ = _.text.indexOf(`[quote=`, _);
          if (_ === -1) break;
          let _ = _.text.indexOf(`;`, _);
          if (_ === -1) break;
          let _ = _.text.indexOf(`]`, _);
          if (_ === -1) break;
          if (_ > _) {
            let _ = _.text.slice(_ + 1, _);
            if (!_.has(_)) _.set(_, [_.gidcomment]);
            else {
              let _ = _.get(_);
              _(
                Array.isArray(_),
                `Got ${_} for key of ${_}, expected string[]`,
              ),
                _.push(_.gidcomment);
            }
          }
          _ = _;
        }
      }
      return _;
    }, [_]),
    _ = (0, _.useMemo)(() => {
      let _ = new Set();
      return (
        _ !== null &&
          _.kind === `quotes` &&
          (_.add(_.gidcomment), _(_, _, _.gidcomment)),
        _
      );
    }, [_, _]);
  return [
    _,
    _,
    (0, _.useCallback)(
      (_) => {
        if (_ === null) return !0;
        if (_.kind === `quotes`) return _.has(_.gidcomment);
        if (_.kind === `user`) return _.steamid === _.steamid;
        throw Error(`Unreachable`);
      },
      [_, _],
    ),
  ];
}
function _(_) {
  switch (_) {
    case 3:
      return `by moderator`;
    case 4:
    case 6:
    case 5:
      return `by Valve`;
    case 1:
      return `by author`;
    case 2:
      return `by comment thread owner`;
    case 0:
      return `by unknown`;
    default:
      return;
  }
}
function _(_) {
  let _ = !1,
    _ = !1;
  _.subject &&
    ((_ =
      _.subject.unresolved_report_count > 0 ||
      _.subject.unresolved_dispute_count > 0),
    (_ = !_ && _.subject.reports.length != 0));
  let _ = (0, _.useCallback)(
      (_) => {
        _.bSelected &&
          _ &&
          _.scrollIntoView({
            block: `center`,
          });
      },
      [_.bSelected],
    ),
    [_, _] = (0, _.useState)(!1),
    _ = _(_.comment.steamid),
    _ = _;
  _ ? (_ = _) : _ && (_ = _);
  let _ = _.comment.deleted,
    _ = _ ? _ : ``,
    _ = _(_.comment.delete_reason) ?? ``,
    _ = _(
      _.clanSteamId,
      _.commentThreadType,
      _.gidForumFeature,
      _.gidFeature2,
      _.getPublicURL(_.comment),
      _.comment.steamid,
      _.comment.gidcomment,
    ),
    _ = async () => await _.mutateAsync();
  if (!_.isSuccess) return null;
  _(_.data, `Missing data on personaQuery despite success.`);
  let _ = {
      kind: `single`,
      type: _.subjectGroupKey.type,
      group_id: _.subjectGroupKey.group_id,
      _: _.comment.gidcomment,
    },
    _ = () => {
      _.setFilter({
        kind: `user`,
        steamid: _.comment.steamid,
      });
    },
    _ = () => {
      _.setFilter({
        kind: `quotes`,
        gidcomment: _.comment.gidcomment,
      });
    };
  return (0, _.jsx)(_.Fragment, {
    children:
      _.visible &&
      (0, _.jsxs)(_.Fragment, {
        children: [
          _ &&
            (0, _.jsx)(_, {
              gidComment: _.comment.gidcomment,
              bSubjectDeleted: !!_.comment.deleted,
              ..._,
              onClose: () => _(!1),
              authorSteamId: _.comment.steamid,
              commentURL: _.getPublicURL(_.comment),
              fnMarkAsSuspicious: _,
            }),
          (0, _.jsxs)(`div`, {
            ref: _,
            className: (0, _.default)(`xvsOwOBGJDY-`, _, _),
            _: `${_.comment.gidcomment}`,
            children: [
              (0, _.jsxs)(`div`, {
                className: `j6up3u2-0SU-`,
                children: [
                  (0, _.jsxs)(`div`, {
                    children: [
                      (0, _.jsxs)(`div`, {
                        className: `Gx2g4Tz2eY0-`,
                        children: [
                          (0, _.jsx)(_, {
                            clanSteamId: _.clanSteamId,
                            steamid: _.comment.steamid,
                            fnFilterToThisUser: _,
                          }),
                          (0, _.jsx)(_, {
                            toolTipContent: (0, _.jsx)(`p`, {
                              children: `Filter thread to only posts quoting this one.`,
                            }),
                            children: (0, _.jsx)(`button`, {
                              className: `zs6dKi6UL4o-`,
                              onClick: _,
                              children: (0, _.jsx)(_, {}),
                            }),
                          }),
                          (0, _.jsx)(_, {
                            status: _.subject?.terrorism_status ?? 0,
                          }),
                          (0, _.jsx)(_, {
                            status: _.subject?.csam_status ?? 0,
                          }),
                          (0, _.jsx)(_, {
                            status:
                              _.subject?.credible_threat_of_violence_status ??
                              0,
                          }),
                          _ &&
                            (0, _.jsxs)(`div`, {
                              className: `K4U353xsSTI-`,
                              children: [(0, _.jsx)(_, {}), ` `, _],
                            }),
                        ],
                      }),
                      (0, _.jsxs)(`div`, {
                        className: `Gx2g4Tz2eY0-`,
                        children: [
                          _(_.comment.timestamp),
                          ` `,
                          _(_.comment.timestamp),
                        ],
                      }),
                      (0, _.jsx)(`div`, {
                        className: `IqxBpsiKtEI-`,
                        children: (0, _.jsx)(_, {
                          bbcode: _.comment.text,
                          bSimpleTagsOnly: _(_.commentThreadType),
                          fnOnQuoteClick: _.setSelected,
                        }),
                      }),
                    ],
                  }),
                  (0, _.jsxs)(`div`, {
                    className: `RoTQLwdb-f4-`,
                    children: [
                      (0, _.jsxs)(_, {
                        subjectKey: _,
                        hash: _.comment.gidcomment,
                        children: [`Item #`, _.idx + 1, ` `, (0, _.jsx)(_, {})],
                      }),
                      (0, _.jsxs)(`span`, {
                        children: [`Comment ID `, _.comment.gidcomment],
                      }),
                      (0, _.jsx)(`span`, {
                        children: (0, _.jsx)(`a`, {
                          href: _.getPublicURL(_.comment),
                          target: `_blank`,
                          rel: `noreferrer`,
                          children: `See on public`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)(`div`, {
                className: `IPr6RAXWQcc-`,
                children: (0, _.jsx)(_, {
                  subject: _.subject,
                  fnAcquit: _.subject
                    ? () =>
                        _.fnAcquit(
                          _.comment.gidcomment,
                          !!_.comment.deleted,
                          _.subject,
                        )
                    : void 0,
                  fnSanction: () => _(!0),
                }),
              }),
            ],
          }),
        ],
      }),
  });
}
function _(_, _, _, _, _, _, _) {
  let _ = _(_, _, _, _);
  if (!_.isSuccess || !_.data) return [];
  let _ = _();
  _(_.data.comments, `Missing comments on comment thread`),
    _(_.data.deleted_comments, `Missing deletedcomments on comment thread`);
  let _ = [...(_.data.comments ?? [])];
  _.push(...(_.data.deleted_comments ?? [])),
    _.sort((_, _) => _.timestamp - _.timestamp);
  let _ = [];
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    if (!_.has(_.gidcomment)) continue;
    let _ = _.get(_.gidcomment);
    (_?.unresolved_report_count === 0 && _.unresolved_dispute_count === 0) ||
      (_?.required_moderator_level && _.required_moderator_level > _) ||
      _.push({
        children: _.text,
        _: _.gidcomment,
        idx: _ + 1,
        cUnresolvedReports: _
          ? _.unresolved_report_count + _.unresolved_dispute_count
          : 0,
        onClick: () => {
          _(_.gidcomment);
        },
        claimed: _?.assigned_moderator_steamid === _,
      });
  }
  return _;
}
function _(_) {
  let [_, _, _] = (0, _.useMemo)(() => {
      let _ = -1,
        _ = 0,
        _ = !1,
        _ = [],
        _ = new Map();
      for (let _ = 0; _ < _.items.length; _++) {
        let _ = _.items[_],
          _ = !_.fnIsVisible || _.fnIsVisible(_),
          _ = _.fnKey(_);
        _ && _ == -1 && _ && (_ = _),
          _.selected && _ === _.selected && ((_ = !0), _ && (_ = _)),
          _ && (_.push(_.items[_]), _.set(_, _), _++);
      }
      return _ > _.length && (_ = 0), [_, _, _];
    }, [_.fnIsVisible, _.items, _.selected, _.fnKey]),
    _ = Math.floor((_ === -1 ? 0 : _) / 30),
    _ = _ * 30,
    _ = (_ + 1) * 30,
    _ = Math.ceil(_.length / 30),
    _ = (_) => _.fnKey(_[_ * 30]),
    _ = (0, _.useMemo)(() => {
      let _ = [
        ...new Set([0, 1, 2, _ - 1, _, _ + 1, _ - 3, _ - 2, _ - 1]),
      ].filter((_) => _ >= 0 && _ < _);
      return (
        _.sort((_, _) => _ - _),
        _.length > 6 &&
          _._(-4) !== _._(-3) - 1 &&
          _.splice(_.length - 3, 0, `...`),
        _.length > 4 && _._(3) !== _._(2) + 1 && _.splice(3, 0, `...`),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            _ > 0 &&
              (0, _.jsx)(`a`, {
                onClick: () => _.setSelected(_(_ - 1)),
                children: `«`,
              }),
            _.map((_, _) =>
              _ === `...`
                ? (0, _.jsx)(
                    `span`,
                    {
                      children: `...`,
                    },
                    _,
                  )
                : _ === _
                  ? (0, _.jsxs)(
                      `span`,
                      {
                        className: _,
                        children: [`›`, _ + 1, `‹`],
                      },
                      _,
                    )
                  : (0, _.jsx)(
                      `a`,
                      {
                        onClick: () => _.setSelected(_(_)),
                        children: _ + 1,
                      },
                      _,
                    ),
            ),
            _ < _ - 1 &&
              (0, _.jsx)(`a`, {
                onClick: () => _.setSelected(_(_ + 1)),
                children: `»`,
              }),
          ],
        })
      );
    }, [_, _]);
  return (0, _.jsxs)(`div`, {
    children: [
      _ > 1 && _,
      (0, _.jsx)(`div`, {
        children: _.slice(_, _).map((_, _) =>
          (0, _.jsx)(
            _,
            {
              anchor: `#` + _.fnKey(_),
              item: _,
              component: _.component,
              visible: !_.fnIsVisible || _.fnIsVisible(_),
              selected: _.fnKey(_) === _.selected,
              idx: _.get(_.fnKey(_)),
            },
            _.fnKey(_),
          ),
        ),
      }),
      _ > 1 && _,
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    _: _.anchor,
    children: (0, _.jsx)(_.component, {
      item: _.item,
      visible: _.visible,
      selected: _.selected,
      idx: _.idx,
    }),
  });
}
function _(_) {
  let [_, _] = (0, _.useState)(null);
  return (
    (0, _.useEffect)(() => {
      let _ = window.location.hash.replace(`#`, ``);
      _ === `` ? _ === `` && _ !== null && _ === null && _(_) : _(_);
    }, []),
    [_, _]
  );
}
function _(_) {
  let {
      clanSteamId: _,
      strForumType: _,
      gidForumFeature: _,
      gidFeature2: _,
      authorSteamId: _,
      bSubjectDeleted: _,
      gidComment: _,
    } = _,
    _ = (0, _.useContext)(_),
    [_, _] = (0, _.useState)(`main`),
    [_, _] = (0, _.useState)({
      eReason: null,
      bDelete: !1,
      bWarning: !1,
      eWarnReason: -1,
      daysToBanFromHub: 0,
      daysToBanFromCommunity: 0,
      nDaysBackToDeleteComments: -1,
      strMessage: ``,
      bPermanentTradeBan: !1,
      bMarkAsSuspicious: !1,
    }),
    _ = _(_, _),
    _ = _.isSuccess && _.data !== null,
    [_, _] = (0, _.useState)(void 0),
    _ = _(_, _, _, _, _ === `0` ? _ : _, _),
    _ = _(),
    _ = _(_, _, _, _, _ === `0` ? _ : _, _),
    _ = _(),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_, 9),
    _ = _(_.subjectGroupKey.type, _.subjectGroupKey.group_id, _.gidComment),
    _ = _(_),
    _ = _(_(_.eReason), _.data);
  (0, _.useEffect)(() => {
    let _ = {
      ..._,
    };
    (_.strMessage =
      _.data?.quicktext?.content?.content ??
      _.data?.english_reference?.content ??
      ``),
      _(_);
  }, [_.data]);
  let [_, _] = (0, _.useMemo)(() => {
      let _ = !1,
        _ = !1;
      if (_.isSuccess && _.data !== null)
        for (let _ of _.data.support_messages)
          _.is_active &&
            (_.support_message_type === 2 || _.support_message_type === 32) &&
            (_ = !0),
            _.is_active && _.support_message_type === 1 && (_ = !0);
      return [_, _];
    }, [_.data, _.isSuccess]),
    _ =
      _.eReason !== null &&
      (_.bDelete ||
        _.bWarning ||
        (_.eWarnReason ?? 0) >= 0 ||
        _.bMarkAsSuspicious ||
        _.bPermanentTradeBan ||
        _.daysToBanFromCommunity > 0 ||
        _.daysToBanFromHub > 0 ||
        _.nDaysBackToDeleteComments >= 0),
    _ = _;
  return (0, _.jsxs)(_, {
    onClose: (_) => _ !== `backdropclick` && _.onClose(),
    strTitle:
      _ === `select_reason` ? `Select moderation reason` : `Moderate subject`,
    children: [
      _ === `select_reason` &&
        (0, _.jsx)(_, {
          reasons: _,
          onSelect: (_) => {
            if (_ !== null) {
              let _ = {
                ..._,
              };
              (_.eReason = _), _(_);
            }
            _(`main`);
          },
        }),
      _ === `main` &&
        (0, _.jsxs)(`div`, {
          className: `qcMRE-7sgs0-`,
          children: [
            _ &&
              (0, _.jsxs)(`div`, {
                className: _(`OJkRbQGJnUA-`, `pSzwfaj9L7M-`),
                children: [
                  (0, _.jsx)(_, {}),
                  (0, _.jsx)(`span`, {
                    children: _,
                  }),
                ],
              }),
            (0, _.jsx)(`label`, {
              children: `Reason:`,
            }),
            (0, _.jsx)(`button`, {
              className: `SG7ITS8nG98-`,
              onClick: () => _(`select_reason`),
              children:
                _.eReason === null ? `Click to select...` : _(_.eReason),
            }),
            (0, _.jsxs)(`label`, {
              className: `OJkRbQGJnUA-`,
              children: [
                (0, _.jsx)(`input`, {
                  type: `checkbox`,
                  disabled: _.bMarkAsSuspicious,
                  checked: _.bDelete,
                  onChange: (_) => {
                    let _ = {
                      ..._,
                    };
                    (_.bDelete = _.bMarkAsSuspicious ? !0 : _.target.checked),
                      _(_);
                  },
                }),
                ` Delete`,
              ],
            }),
            (0, _.jsxs)(`label`, {
              className: `OJkRbQGJnUA-`,
              children: [
                (0, _.jsx)(`input`, {
                  type: `checkbox`,
                  checked: _.bWarning,
                  onChange: (_) => {
                    let _ = {
                      ..._,
                    };
                    (_.bWarning = _.target.checked), _(_);
                  },
                }),
                `Issue Warning`,
              ],
            }),
            (0, _.jsx)(`label`, {
              children: `Ban from hub:`,
            }),
            !_ &&
              (0, _.jsxs)(`select`, {
                onChange: (_) => {
                  let _ = parseInt(_.target.value),
                    _ = {
                      ..._,
                    };
                  (_.daysToBanFromHub = _), _(_);
                },
                value: _.daysToBanFromHub,
                children: [
                  (0, _.jsx)(`option`, {
                    value: `0`,
                    children: `Do not ban`,
                  }),
                  (0, _.jsx)(`option`, {
                    value: `1`,
                    children: `1 day`,
                  }),
                  (0, _.jsx)(`option`, {
                    value: `3`,
                    children: `3 days`,
                  }),
                  (0, _.jsx)(`option`, {
                    value: `7`,
                    children: `7 days`,
                  }),
                  (0, _.jsx)(`option`, {
                    value: `14`,
                    children: `14 days`,
                  }),
                  (0, _.jsx)(`option`, {
                    value: `30`,
                    children: `30 days`,
                  }),
                  (0, _.jsx)(`option`, {
                    value: `90`,
                    children: `3 months`,
                  }),
                  (0, _.jsx)(`option`, {
                    value: `365`,
                    children: `1 year`,
                  }),
                  (0, _.jsx)(`option`, {
                    value: `-1`,
                    children: `Permanent`,
                  }),
                ],
              }),
            _ &&
              (0, _.jsx)(`div`, {
                children: `Already banned from hub`,
              }),
            (0, _.jsx)(`label`, {
              children: `Ban from community:`,
            }),
            !_ &&
              (0, _.jsxs)(`select`, {
                onChange: (_) => {
                  let _ = parseInt(_.target.value),
                    _ = {
                      ..._,
                    };
                  (_.daysToBanFromCommunity = _.bMarkAsSuspicious ? -1 : _),
                    _(_);
                },
                value: _.daysToBanFromCommunity,
                children: [
                  (0, _.jsx)(`option`, {
                    value: `0`,
                    children: `Do not ban`,
                  }),
                  (0, _.jsx)(`option`, {
                    value: `1`,
                    children: `1 day`,
                  }),
                  (0, _.jsx)(`option`, {
                    value: `3`,
                    children: `3 days`,
                  }),
                  (0, _.jsx)(`option`, {
                    value: `7`,
                    children: `7 days`,
                  }),
                  (0, _.jsx)(`option`, {
                    value: `14`,
                    children: `14 days`,
                  }),
                  (0, _.jsx)(`option`, {
                    value: `30`,
                    children: `30 days`,
                  }),
                  (0, _.jsx)(`option`, {
                    value: `90`,
                    children: `3 months`,
                  }),
                  (0, _.jsx)(`option`, {
                    value: `365`,
                    children: `1 year`,
                  }),
                  (0, _.jsx)(`option`, {
                    value: `-1`,
                    children: `Permanent`,
                  }),
                ],
              }),
            _ &&
              (0, _.jsx)(`div`, {
                children: `Already community banned.`,
              }),
            (0, _.jsx)(`label`, {
              children: `Delete comments since:`,
            }),
            (0, _.jsxs)(`select`, {
              disabled: _.bMarkAsSuspicious,
              onChange: (_) => {
                let _ = parseInt(_.target.value),
                  _ = {
                    ..._,
                  };
                (_.nDaysBackToDeleteComments = _.bMarkAsSuspicious ? 0 : _),
                  _(_);
              },
              value: _.nDaysBackToDeleteComments,
              children: [
                (0, _.jsx)(`option`, {
                  value: `-1`,
                  children: `Do not delete`,
                }),
                (0, _.jsx)(`option`, {
                  value: `1`,
                  children: `1 day`,
                }),
                (0, _.jsx)(`option`, {
                  value: `7`,
                  children: `7 days`,
                }),
                (0, _.jsx)(`option`, {
                  value: `14`,
                  children: `14 days`,
                }),
                (0, _.jsx)(`option`, {
                  value: `30`,
                  children: `30 days`,
                }),
                (0, _.jsx)(`option`, {
                  value: `0`,
                  children: `All comments`,
                }),
              ],
            }),
            !_ &&
              (0, _.jsxs)(`span`, {
                className: `OJkRbQGJnUA-`,
                children: [
                  (0, _.jsx)(`input`, {
                    type: `checkbox`,
                    checked: _.bPermanentTradeBan,
                    onChange: (_) => {
                      let _ = {
                        ..._,
                      };
                      (_.bPermanentTradeBan = _.target.checked), _(_);
                    },
                  }),
                  `\xA0Permanent trade ban`,
                ],
              }),
            _ &&
              (0, _.jsx)(`div`, {
                children: `Already trade banned.`,
              }),
            (0, _.jsxs)(`span`, {
              className: `OJkRbQGJnUA-`,
              children: [
                (0, _.jsx)(`input`, {
                  type: `checkbox`,
                  checked: _.bMarkAsSuspicious,
                  onChange: (_) => {
                    let _ = {
                      ..._,
                    };
                    (_.bMarkAsSuspicious = _.target.checked),
                      _.target.checked
                        ? ((_.bDelete = !0), (_.nDaysBackToDeleteComments = 7))
                        : ((_.bDelete = !1),
                          (_.nDaysBackToDeleteComments = -1)),
                      _(_);
                  },
                }),
                `\xA0Mark as suspicious`,
              ],
            }),
            (0, _.jsx)(`textarea`, {
              className: _(`OJkRbQGJnUA-`, `-ZGnT-Wj2cQ-`),
              placeholder: `Message to send`,
              value: _.strMessage,
              onChange: (_) => {
                let _ = {
                  ..._,
                };
                (_.strMessage = _.target.value), _(_);
              },
            }),
            (0, _.jsxs)(`div`, {
              className: `H8ED4xKNAg0-`,
              children: [
                (0, _.jsx)(_, {
                  onClick: _.onClose,
                  children: `Cancel`,
                }),
                (0, _.jsx)(_, {
                  onClick: async () => {
                    let _ = [];
                    if (_.eReason !== null) {
                      try {
                        if (
                          (_.subject ||
                            (await _.fnReport(
                              _,
                              _.eReason,
                              ``,
                              _.authorSteamId,
                            )),
                          _.bWarning &&
                            _.push({
                              sanction: 8,
                            }),
                          _.eWarnReason !== -1 &&
                            (await _.mutateAsync({
                              strCustomText: _.strMessage,
                              eMessageType: 2,
                              eWarningReason: _.eWarnReason,
                            }),
                            await _.mutateAsync({
                              eAction: 12,
                              additionalData: {
                                message: _.strMessage,
                                reason: _.eWarnReason,
                              },
                            }),
                            _.push({
                              sanction: 8,
                            })),
                          _.daysToBanFromHub !== 0)
                        ) {
                          _.push({
                            sanction: 3,
                            days: _.daysToBanFromHub,
                          });
                          let _ = 0;
                          _.daysToBanFromHub > 0 &&
                            (_ = Date.now() / 1e3 + _.daysToBanFromHub * 86400),
                            await _.mutateAsync({
                              rtime32BanEnds: _,
                              strReason: _.strMessage,
                            });
                        }
                        _.daysToBanFromCommunity !== 0 &&
                          (_.push({
                            sanction: 2,
                            days: _.daysToBanFromCommunity,
                          }),
                          await _.mutateAsync({
                            nDays: _.daysToBanFromCommunity,
                            strNote: _.strMessage,
                          })),
                          _.bPermanentTradeBan &&
                            (_.push({
                              sanction: 4,
                              days: 0,
                            }),
                            await _.mutateAsync({
                              rtBannedUntil: _,
                              rtProbationUntil: _,
                              strNote: _.strMessage,
                            })),
                          _.bMarkAsSuspicious &&
                            (_.push({
                              sanction: 7,
                            }),
                            await _.fnMarkAsSuspicious()),
                          _.nDaysBackToDeleteComments >= 0 &&
                            (_.push({
                              sanction: 5,
                              days: _.nDaysBackToDeleteComments,
                            }),
                            await _.mutateAsync({
                              nDaysToDelete: _.nDaysBackToDeleteComments,
                            })),
                          _.bDelete &&
                            (_.push({
                              sanction: 1,
                            }),
                            _.subject ||
                              (await _.fnReport(
                                _.gidComment,
                                _.eReason,
                                ``,
                                _.authorSteamId,
                              )),
                            _ ||
                              (await _.fnDelete(
                                _.eReason,
                                14,
                                _,
                                _.bSubjectDeleted,
                                _.subject,
                              ))),
                          await _.mutateAsync({
                            eSubjectType: _.subjectGroupKey.type,
                            subjectGroupId: _.subjectGroupKey.group_id,
                            subjectId: _.gidComment,
                            eReason: _.eReason,
                            eResolution: 14,
                            note: _.strMessage,
                            rgSanctions: _,
                          }),
                          (_.indexOf(_.eReason) !== -1 ||
                            _.indexOf(_.eReason) !== -1 ||
                            _.eReason === 63) &&
                            _.eModeratorLevel !== 10 &&
                            (await _.mutateAsync({
                              subjectType: _.subjectGroupKey.type,
                              subjectGroupId: _.subjectGroupKey.group_id,
                              subjectId: _.gidComment,
                              eNewLevel: 10,
                              eReason: _.eReason,
                            }),
                            await _.fnReport(
                              _.gidComment,
                              _.eReason,
                              `Escalated to Valve by moderation for CSAM.`,
                              _.authorSteamId,
                            ),
                            _.indexOf(_.eReason) === -1
                              ? _.indexOf(_.eReason) !== -1 &&
                                (await _.mutateAsync({
                                  eAction: 19,
                                }))
                              : await _.mutateAsync({
                                  eAction: 18,
                                }));
                      } catch (_) {
                        typeof _ == `string`
                          ? _(_)
                          : _ instanceof Error && _(_.message);
                        return;
                      }
                      _.onClose();
                    }
                  },
                  disabled: !_,
                  children: `Sanction`,
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
var _ = `Mu0RQZoN5z8-`,
  _ = `sYrvcEPDLSw-`,
  _ = `qg47AJzxKU8-`,
  _ = `drEx-mnfbRw-`,
  _ = `TRtBkjLVxyk-`,
  _ = `H-fR3KFonOM-`,
  _ = `vGuNUCnWWGA-`,
  _ = `WzOU7-dMdXM-`,
  _ = `flZsnrtedy0-`,
  _ = `MsBIsH3D-sA-`,
  _ = `-I0-InYUCzc-`,
  _ = `mCo-7aE-APc-`,
  _ = `vSeaF59r988-`,
  _ = `OOiCBGptC2M-`,
  _ = `nIRXFEH4Jq4-`,
  _ = `ZXuLQr8jGdo-`,
  _ = `Xwh88v1ZkJc-`,
  _ = `_9tYd-oKdufo-`;
function _(_) {
  let { subjectKey: _ } = _,
    _ = _(_.type, _.group_id);
  return _.isSuccess
    ? (0, _.jsx)(_, {
        subjectKey: _,
        subjects: _.data.subjects,
      })
    : null;
}
function _(_) {
  let { subjectKey: _, subjects: _ } = _,
    [_, _] = _(_.kind === `single` ? _._ : null),
    _ = _(_[0]);
  _(_, `Missing additionalData`),
    _(_?.clanSteamId, `Missing clanSteamId for forum post`),
    _(_?.forumId, `Missing forum id for forum post`);
  let _ = _.clanSteamId,
    _ = _.forumId,
    _ = _.group_id,
    _ = _(_, _, _),
    _ = _(_, _, _),
    _ = _.data?.forum_details,
    _ = _.data?.topics?.length ? _.data.topics[0] : void 0,
    _ = new Map();
  for (let _ of _) _.set(_.subject_id, _);
  let _ = (0, _.useMemo)(
      () => ({
        kind: `single`,
        type: _.type,
        group_id: _.group_id,
        _: `0`,
      }),
      [_],
    ),
    _ = _.get(_._);
  if (!_.isSuccess || !_.isSuccess || !_ || !_) return null;
  _(_.data.forum_details, `Missing forum_details`),
    _(_.data.topics && _.data.topics[0], `Missing topic details`);
  let _ = [];
  _.push(..._(_, _, _)),
    _.push(..._(_, 7, _, _, _, _, _.useLoaderData().maxModeratorLevel));
  let _ = _.useLoaderData().maxModeratorLevel;
  return (0, _.jsx)(_, {
    value: {
      clanSteamId: _,
      rgForum: _,
      rgTopic: _,
      eModeratorLevel: _,
    },
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              clanSteamId: _,
              gidForum: _,
              gidTopic: _,
            }),
            (0, _.jsx)(_, {
              subjectKey: _,
              topicSubject: _,
              clanSteamId: _,
              forumId: _,
              topicId: _,
              bSelected: _ === `0`,
            }),
            (0, _.jsx)(_, {
              clanSteamId: _,
              forumId: _,
              topicId: _,
              selected: _,
              setSelected: _,
              subjects: _,
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            rgLinks: _,
            subjectGroupKey: {
              kind: `group`,
              type: _.subjectKey.type,
              group_id: _.subjectKey.group_id,
            },
          }),
        }),
      ],
    }),
  });
}
function _(_, _, _) {
  if (!(_ && (_.unresolved_dispute_count > 0 || _.unresolved_report_count > 0)))
    return [];
  let _ = _();
  return [
    {
      children: _.title,
      idx: 0,
      _: `0`,
      onClick: () => _(`0`),
      cUnresolvedReports:
        _.unresolved_report_count + _.unresolved_dispute_count,
      claimed: _.assigned_moderator_steamid === _,
    },
  ];
}
function _(_) {
  let {
      bSelected: _,
      topicSubject: _,
      clanSteamId: _,
      forumId: _,
      topicId: _,
      subjectKey: _,
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(null),
    _ = _(_, _, _),
    _ = _(_, _, _),
    _ = _(),
    _ = _(_, _, _),
    _ = _(_, _, _),
    _ = _.data?.forum_details,
    _ = _.data?.topics?.length ? _.data.topics[0] : void 0,
    _ = _.data,
    _ = _.InitFromAccountID(_?.originalpost_accountid, _.EUNIVERSE),
    _ =
      _(
        _.COMMUNITY_BASE_URL,
        _.InitFromClanID(_?.clanidowner, _.EUNIVERSE).ConvertTo64BitString(),
        _?.forumtype,
        _?.gidfeature,
        _?.appid,
      ) +
      _ +
      `/`,
    _ = _(
      _,
      _,
      _,
      _?.title,
      _,
      _.comment_thread_type,
      _.ConvertTo64BitString(),
    );
  if (!_.isSuccess || !_.isSuccess || !_ || !_) return null;
  _(_.data.forum_details, `Missing forum_details`),
    _(_.data.topics && _.data.topics[0], `Missing topic details`);
  let _ =
      _ && (_.unresolved_dispute_count > 0 || _.unresolved_report_count > 0),
    _ =
      _ &&
      _.unresolved_dispute_count == 0 &&
      _.unresolved_report_count == 0 &&
      _.reports.length != 0,
    _ = _;
  _ ? (_ = _) : _ && (_ = _);
  let _ = _?.deleted ? _ : ``;
  (0, _.useEffect)(() => {
    _.current &&
      setTimeout(() => {
        _.current &&
          _.current.scrollIntoView({
            block: `center`,
          });
      }, 0);
  }, [_]);
  let _ = async () => {
      _ && (await _.mutateAsync(`0`));
    },
    _ = async () => {
      await _.mutateAsync();
    },
    _ = async (_, _, _, _, _) => {
      await _.mutateAsync({
        eReason: _,
        eResolution: _,
      });
    },
    _ = _.InitFromAccountID(
      _.originalpost_accountid,
      _.EUNIVERSE,
    ).ConvertTo64BitString(),
    _ = async (_, _, _) => {
      await _.mutateAsync({
        subjectType: 1,
        subjectGroupId: _,
        subjectId: `0`,
        additionalSubjectData: new Map([
          [`clanSteamId`, _],
          [`forumId`, _],
        ]),
        eReason: _,
        strReportText: _,
        ownerSteamID: _,
      });
    },
    _ = {
      kind: `group`,
      type: _.type,
      group_id: _.group_id,
    },
    _ = `${_(_.COMMUNITY_BASE_URL, _.clanSteamId, _.forumtype, _.gidfeature, _.appid)}${_.topicId}`;
  return (0, _.jsxs)(`div`, {
    ref: _ ? _ : void 0,
    _: `0`,
    className: (0, _.default)(_, _, _),
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsx)(`h2`, {
                        className: _,
                        children: _.title,
                      }),
                      _.deleted &&
                        (0, _.jsxs)(`div`, {
                          className: `-W3dqZTz8Bk-`,
                          children: [
                            (0, _.jsx)(_, {}),
                            ` `,
                            _(_.delete_reason),
                          ],
                        }),
                      _.locked && (0, _.jsx)(_, {}),
                    ],
                  }),
                  (0, _.jsx)(`div`, {
                    children: (0, _.jsx)(_, {
                      clanSteamId: _.clanSteamId,
                      gidforum: _.gidforum,
                      gidtopic: _.gidforumtopic,
                    }),
                  }),
                ],
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsxs)(`span`, {
                  children: [
                    `Posted `,
                    _(_.originalpost_date),
                    ` `,
                    _(_.originalpost_date),
                  ],
                }),
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {
                  clanSteamId: _,
                  steamid: _.ConvertTo64BitString(),
                }),
              }),
              (0, _.jsxs)(`div`, {
                className: _(_, _),
                children: [
                  _.forumtype === `Trading` &&
                    (0, _.jsxs)(`div`, {
                      className: `KVckz7JvtIY-`,
                      children: [
                        (0, _.jsx)(_, {}),
                        ` `,
                        _.Localize(`#has_trade_offer`),
                      ],
                    }),
                  (0, _.jsx)(_, {
                    bbcode: _.full_text,
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(_, {
                subjectKey: _,
                children: [`Item #0 `, (0, _.jsx)(_, {})],
              }),
              (0, _.jsxs)(`span`, {
                children: [`Topic ID `, _.gidforumtopic],
              }),
              (0, _.jsx)(`span`, {
                children: (0, _.jsx)(`a`, {
                  href: _,
                  target: `_blank`,
                  rel: `noreferrer`,
                  children: `See on public`,
                }),
              }),
            ],
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ &&
            (0, _.jsx)(_, {
              onClose: () => _(!1),
              authorSteamId: _.InitFromAccountID(
                _.originalpost_accountid,
                _.EUNIVERSE,
              ).ConvertTo64BitString(),
              gidComment: `0`,
              bSubjectDeleted: !!_.deleted,
              fnMarkAsSuspicious: _,
              fnReport: _,
              fnDelete: _,
              clanSteamId: _,
              strForumType: _.forumtype,
              commentThreadType: _.comment_thread_type,
              gidForumFeature: _.gidfeature,
              gidFeature: _,
              gidFeature2: _,
              subjectGroupKey: _,
              fnAcquit: _,
              commentURL: _,
            }),
          (0, _.jsx)(_, {
            subject: _,
            fnAcquit: _,
            fnSanction: () => _(!0),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let _ = _(_.clanSteamId, _.gidforum, _.gidtopic),
    _ = _(_.clanSteamId, _.gidforum, _.gidtopic),
    _ = _(_.clanSteamId, 7, _.gidforum, _.gidtopic),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(``),
    _ = !!(_.data?.topics?.length ? _.data.topics[0] : void 0)?.locked;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ === `message` &&
        (0, _.jsx)(_, {
          strTitle: `Lock thread`,
          strOKLabel: `Post and lock`,
          strCancelLabel: `Cancel`,
          onClose: () => _(null),
          onOK: async () => {
            _(`busy`),
              await _.mutateAsync({
                strMessage: _,
              }),
              await _.mutateAsync({
                bLocked: !0,
                strAuditNote: _,
              }),
              _(null);
          },
          children: (0, _.jsxs)(`div`, {
            className: `SpkrhCvXaPk-`,
            children: [
              (0, _.jsx)(`div`, {
                children: `Lock message:`,
              }),
              (0, _.jsx)(`div`, {
                children: (0, _.jsx)(`textarea`, {
                  value: _,
                  onChange: (_) => _(_.target.value),
                }),
              }),
            ],
          }),
        }),
      _ === `busy` &&
        (0, _.jsx)(_, {
          onClose: () => {},
          children: (0, _.jsxs)(`div`, {
            style: {
              padding: `12px`,
            },
            children: [
              `Locking thread...`,
              ` `,
              (0, _.jsx)(`span`, {
                children: (0, _.jsx)(_, {
                  size: `small`,
                }),
              }),
            ],
          }),
        }),
      (0, _.jsx)(`button`, {
        className: _,
        onClick: async () => {
          _
            ? await _.mutateAsync({
                bLocked: !1,
              })
            : _(`message`);
        },
        children: _ ? `Unlock thread` : `Lock thread`,
      }),
    ],
  });
}
function _(_) {
  let _ = _(_.clanSteamId, _.forumId, _.topicId),
    _ = _(),
    _ = _(_.clanSteamId, _.forumId, _.topicId),
    _ = _(_.clanSteamId, _.forumId, _.topicId),
    _ = _(_.clanSteamId, _.forumId, _.topicId),
    _ = _(_.clanSteamId, _(7), _.forumId, _.topicId),
    _ = _.data?.forum_details,
    _ = _.data?.topics?.length ? _.data.topics[0] : void 0;
  if (!_.isSuccess || !_.isSuccess || !_ || !_) return null;
  _(_.data.forum_details, `Missing forum_details`),
    _(_.data.topics && _.data.topics[0], `Missing topic details`);
  let _ = new Map();
  for (let _ of _.subjects) _.set(_.subject_id, _);
  return (0, _.jsx)(_, {
    clanSteamId: _.clanSteamId,
    commentThreadType: 7,
    gidForumFeature: _.gidfeature,
    gidFeature: _.forumId,
    gidFeature2: _.topicId,
    selected: _.selected,
    setSelected: _.setSelected,
    mapCommentGidToSubjects: _,
    fnAcquit: async (_, _, _) => {
      await _.mutateAsync(_), await _.mutateAsync(_);
    },
    fnDelete: async (_, _, _, _, _) => {
      await _.mutateAsync({
        gidComment: _,
        eReason: _,
        eResolution: 2,
      });
    },
    strForumType: _.forumtype,
    subjectGroupKey: {
      kind: `group`,
      type: 1,
      group_id: _.topicId,
    },
    fnReport: async (_, _, _, _) => {
      await _.mutateAsync({
        subjectType: 1,
        subjectGroupId: _.topicId,
        subjectId: _,
        additionalSubjectData: new Map([
          [`clanSteamId`, _.clanSteamId],
          [`forumId`, _.forumId],
        ]),
        eReason: _,
        strReportText: _,
        ownerSteamID: _,
      });
    },
    getPublicURL: (_) =>
      `${_(_.COMMUNITY_BASE_URL, _.clanSteamId, _.forumtype, _.gidfeature, _.appid)}${_.topicId}#c${_.gidcomment}`,
  });
}
var _ = (0, _.createContext)(void 0);
function _(_) {
  let _ = _(_.clanSteamId),
    _ = _(_.clanSteamId, _.gidForum, _.gidTopic);
  if (!_.isSuccess || !_.isSuccess) return null;
  let _ = _.data.forum_details.name;
  _ === `#Discussions_ForumName_General`
    ? (_ = _.Localize(`#Discussions_ForumName_General`))
    : _ === `#Discussions_ForumName_ReportedPosts`
      ? (_ = _.Localize(`#Discussions_ForumName_ReportedPosts`))
      : _ === `#Discussions_ForumName_Workshop`
        ? (_ = _.Localize(`#Discussions_ForumName_Workshop`))
        : _ === `#Discussions_ForumName_Trading`
          ? (_ = _.Localize(`#Discussions_ForumName_Trading`))
          : _ === `#Discussions_ForumName_Events` &&
            (_ = _.Localize(`#Discussions_ForumName_Events`));
  let _ = _.data.forum_details.appid,
    _ = ``;
  _ = _
    ? `${_.COMMUNITY_BASE_URL}app/${_}`
    : `${_.COMMUNITY_BASE_URL}gid/${_.clanSteamId}`;
  let _ = _.data.forum_details,
    _ = _(
      _.COMMUNITY_BASE_URL,
      _.clanSteamId,
      _.forumtype,
      _.gidfeature,
      _.appid,
    );
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        children: [
          _(1),
          ` in `,
          _.data.name ?? _.data.summary,
          ` `,
          _.data.official &&
            (0, _.jsx)(_.Fragment, {
              children: `(OGG)`,
            }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(`a`, {
            href: _,
            children: _.data.name,
          }),
          ` » `,
          (0, _.jsx)(`a`, {
            href: _,
            children: _,
          }),
          ` »`,
          ` `,
          (0, _.jsx)(`a`, {
            href: `${_}/${_.gidTopic}/`,
            children: _.data.topics[0].title,
          }),
        ],
      }),
    ],
  });
}
var _ = `tfnDbSb60A8-`,
  _ = `_8GKbgJXsBaU-`,
  _ = `XQ5t2XVGKbA-`,
  _ = `Kjo7zcXsMLE-`,
  _ = `_7tJhElGv2tA-`,
  _ = `vyBlwmlDSa8-`,
  _ = `fZSwY-0wqqc-`,
  _ = `NEJ8xjPhwHo-`,
  _ = `_3w5nrIbo-m0-`,
  _ = `TQ1m-utc1o8-`,
  _ = `VjkSpfK149U-`,
  _ = `_8elMk6342g4-`,
  _ = `BgtRpvlzfDI-`,
  _ = `LAWWJTpZXP4-`,
  _ = `D7BTLD3mhlE-`,
  _ = `_7FdhnIDBscM-`,
  _ = `_1ZWHJ1DFfJ4-`,
  _ = `tJ8jl3Bv1QY-`,
  _ = `atvKlrjG3OA-`,
  _ = `scj-8d-BRkA-`,
  _ = `w54CFn-vsEs-`,
  _ = `SU7Puo-4wjo-`,
  _ = `_9LM-lN8dN3w-`,
  _ = `N9UyRk1Pud8-`,
  _ = `wgHDdQoRzjQ-`,
  _ = `yFkYvjXZZh4-`,
  _ = `If9-Zuzc-9I-`,
  _ = `FM0DB3-KN-M-`,
  _ = `y-T1iuhVWlg-`,
  _ = `gw4m92srck0-`,
  _ = `LR-3TcvISxU-`,
  _ = (0, _.createContext)({
    eModeratorLevel: 0,
    eMaxModeratorLevel: 0,
    bBlurImages: !0,
    setModeratorLevel: (_) => {},
    setBlurImages: (_) => {},
  });
function _(_) {
  let { subject: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _(_.subject?.assigned_moderator_steamid),
    _ = 0;
  _ &&
    (_(
      _.unresolved_dispute_count !== void 0,
      `Missing unresolved_dispute_count`,
    ),
    _(_.unresolved_report_count !== void 0, `Missing unresolved_report_count`),
    (_ =
      _.reports.length -
      _.unresolved_dispute_count -
      _.unresolved_report_count));
  let _ = new Map();
  if (_?.reports)
    for (let _ of _.reports) {
      let _ = _.report_reason;
      if (_.has(_)) {
        let _ = _.get(_);
        _.set(_, _ + 1);
      } else _.set(_, 1);
    }
  let _ = [..._.entries()];
  _.sort((_, _) => _[1] - _[1]);
  let _ = _.map(([_, _]) => `${_(_)}: ${_}`).join(`, `),
    _ = _?.reports?.length ?? 0,
    _ = _.steamid,
    _ = _ && _.assigned_moderator_steamid !== `0`,
    _ = _ && _.assigned_moderator_steamid === _,
    _ = _ && (_.unresolved_dispute_count > 0 || _.unresolved_report_count > 0),
    _ = _ && _.unresolved_dispute_count > 0,
    _ = _ && _.resolved === 1,
    _ = _ && _.resolved === 14 && _.owner_dispute_time === 0;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _ &&
        (0, _.jsx)(_, {
          strTitle: `Reports`,
          onClose: () => _(!1),
          children: (0, _.jsx)(_, {
            subject: _,
          }),
        }),
      _ &&
        (0, _.jsxs)(`div`, {
          className: `K3XbeLpR7aA-`,
          children: [
            _ &&
              (0, _.jsx)(`div`, {
                className: `fuR3XztJCNk-`,
                children: `Claimed by you.`,
              }),
            _ &&
              !_ &&
              (0, _.jsxs)(`div`, {
                className: `fuR3XztJCNk-`,
                children: [
                  `Claimed by `,
                  (0, _.jsx)(`a`, {
                    href: _.data?.public_data?.profile_url,
                    children: _.data?.public_data?.persona_name,
                  }),
                ],
              }),
            _ > 0 &&
              (0, _.jsxs)(`div`, {
                className: `fuR3XztJCNk-`,
                children: [
                  `Reports `,
                  _ &&
                    (0, _.jsx)(_, {
                      eRequiredLevel: _.required_moderator_level,
                    }),
                  `:`,
                ],
              }),
            _ > 0 &&
              (0, _.jsxs)(`div`, {
                className: `arXU0CaQ8eA-`,
                children: [
                  _ && (0, _.jsx)(_, {}),
                  ` `,
                  _?.unresolved_report_count ?? 0,
                  ` unresolved / `,
                  _?.unresolved_dispute_count ?? 0,
                  ` disputed /`,
                  ` `,
                  _,
                  ` resolved`,
                ],
              }),
            _ > 0 &&
              (0, _.jsx)(`div`, {
                className: `arXU0CaQ8eA-`,
                children: _,
              }),
            _ &&
              (0, _.jsx)(`div`, {
                className: `arXU0CaQ8eA-`,
                children: _.Localize(
                  _
                    ? `#originalresolution_acquitted`
                    : `#originalresolution_sanctioned`,
                ),
              }),
            (0, _.jsxs)(`div`, {
              className: `B38KZMDJkRA-`,
              children: [
                _ > 0 &&
                  (0, _.jsx)(`div`, {
                    className: `gw4m92srck0-`,
                    onClick: (_) => (_(!0), _.stopPropagation(), !1),
                    children: `Show reports`,
                  }),
                (0, _.jsx)(_, {
                  subject: _,
                }),
              ],
            }),
          ],
        }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _.fnSanction &&
            (0, _.jsx)(`div`, {
              className: `gw4m92srck0-`,
              onClick: _.fnSanction,
              children: `Sanction`,
            }),
          _.fnAcquit &&
            _ &&
            (0, _.jsx)(_, {
              fnAcquit: _.fnAcquit,
              subject: _,
            }),
          _ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                _ &&
                  (0, _.jsx)(_, {
                    subject: _,
                    label: `Release`,
                  }),
                _ &&
                  (0, _.jsx)(_, {
                    subject: _,
                  }),
                _ &&
                  (0, _.jsx)(_, {
                    subject: _,
                  }),
              ],
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { subject: _ } = _,
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(``),
    _ = _(
      _.owner_steam_id,
      _.subject_type,
      _.subject_group_id,
      _.subject_id,
      _,
    );
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          onClose: () => _(!1),
          strTitle: `Open dispute on behalf of owner`,
          strOKLabel: `Dispute`,
          onOK: async () => {
            _(!1), await _.mutateAsync();
          },
          children: (0, _.jsxs)(`label`, {
            children: [
              `Ticket code: `,
              (0, _.jsx)(_, {
                value: _,
                onChange: (_) => _(_.target.value.trim()),
              }),
            ],
          }),
        }),
      (0, _.jsx)(`div`, {
        className: _,
        onClick: () => _(!0),
        children: `Dispute for owner`,
      }),
    ],
  });
}
function _(_) {
  let [_, _] = (0, _.useState)(!1);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          strTitle: `Subject acquitted`,
          onClose: () => _(!1),
          children: (0, _.jsx)(`div`, {
            className: `optnGqUJHTQ-`,
            children: (0, _.jsx)(`p`, {
              children: `Any deletions, bans, or other sanctions must be reversed manually.`,
            }),
          }),
        }),
      (0, _.jsx)(`div`, {
        className: _,
        onClick: () => {
          _.subject.resolved !== 0 && _(!0), _.fnAcquit();
        },
        children: `Acquit`,
      }),
    ],
  });
}
function _(_) {
  let [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(_.subject.required_moderator_level),
    [_, _] = (0, _.useState)(!0),
    _ = _(),
    _ = _([_.subject]);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsxs)(_, {
          strTitle: `Escalate to`,
          strOKLabel: `Escalate`,
          strCancelLabel: `Cancel`,
          onClose: () => _(!1),
          onOK: async () => {
            await _.mutateAsync({
              subjectType: _.subject.subject_type,
              subjectGroupId: _.subject.subject_group_id,
              subjectId: _.subject.subject_id,
              eNewLevel: _,
              eReason: 2,
            }),
              _ && (await _.mutateAsync()),
              _(!1);
          },
          children: [
            (0, _.jsx)(`select`, {
              value: _,
              onChange: (_) => _(parseInt(_.target.value)),
              children: [0, 1, 10].map((_) =>
                (0, _.jsx)(
                  `option`,
                  {
                    value: _,
                    children: _(_),
                  },
                  _,
                ),
              ),
            }),
            (0, _.jsxs)(`label`, {
              children: [
                (0, _.jsx)(`input`, {
                  type: `checkbox`,
                  checked: _,
                  onChange: (_) => _(_.target.checked),
                }),
                ` Release subject after escalating`,
              ],
            }),
          ],
        }),
      (0, _.jsx)(`div`, {
        className: _,
        onClick: () => _(!0),
        children: `Escalate`,
      }),
    ],
  });
}
function _(_) {
  let _ = _([_.subject]);
  return (0, _.jsx)(`div`, {
    className: _,
    onClick: () => _.mutate(),
    children: `Release`,
  });
}
function _(_) {
  let { subject: _, size: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _ &&
        _.reports?.map((_) =>
          (0, _.jsx)(
            _,
            {
              report: _,
              size: _,
            },
            _.report_id,
          ),
        ),
      (!_ || !_.reports || _.reports.length === 0) &&
        (0, _.jsx)(`div`, {
          className: _(`fZSwY-0wqqc-`),
          children: `(No reports)`,
        }),
    ],
  });
}
function _(_) {
  let { subject: _ } = _,
    _ = _(_.subject_type, _.subject_group_id, _.subject_id);
  if (!_.isSuccess || !_.data) return null;
  let _ = _.data?.entries?.length ?? 0;
  return (0, _.jsx)(_, {
    strTitle: `Activity`,
    onClose: _.onClose,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _ === 0 &&
          (0, _.jsx)(`div`, {
            children: `(No activity)`,
          }),
        _ > 0 &&
          (0, _.jsxs)(`table`, {
            children: [
              (0, _.jsx)(`thead`, {
                children: (0, _.jsxs)(`tr`, {
                  children: [
                    (0, _.jsx)(`th`, {
                      children: `Date`,
                    }),
                    (0, _.jsx)(`th`, {
                      children: `Actor`,
                    }),
                    (0, _.jsx)(`th`, {
                      children: `Action`,
                    }),
                    (0, _.jsx)(`th`, {
                      children: `Details`,
                    }),
                  ],
                }),
              }),
              (0, _.jsx)(`tbody`, {
                children: _.data.entries?.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      subject: _,
                      entry: _,
                    },
                    _.timestamp,
                  ),
                ),
              }),
            ],
          }),
      ],
    }),
  });
}
function _(_) {
  let { subject: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _(_.subject_type, _.subject_group_id, _.subject_id);
  return !_.isSuccess || !_.data
    ? null
    : (0, _.jsxs)(_.Fragment, {
        children: [
          _ &&
            (0, _.jsx)(_, {
              subject: _,
              onClose: () => _(!1),
            }),
          (0, _.jsx)(`div`, {
            className: _,
            onClick: (_) => {
              _.stopPropagation(), _.preventDefault(), _(!0);
            },
            children: `Show history`,
          }),
        ],
      });
}
function _(_) {
  switch (_) {
    case 0:
      return _.Localize(`#moderation_moderatorlevel_any`);
    case 1:
      return _.Localize(`#moderation_moderatorlevel_supervisor`);
    case 10:
      return _.Localize(`#moderation_moderatorlevel_valveadmin`);
    default:
      return `Unknown`;
  }
}
function _(_) {
  let { subject: _, entry: _ } = _,
    _ = _(_.actor_steamid);
  return !_.isSuccess || !_.data
    ? null
    : (0, _.jsxs)(`tr`, {
        children: [
          (0, _.jsx)(`td`, {
            children: _(_.timestamp, !1, ``),
          }),
          (0, _.jsxs)(`td`, {
            children: [
              (0, _.jsx)(`a`, {
                href: `${_.COMMUNITY_BASE_URL}profiles/${_.actor_steamid}`,
                children: (0, _.jsx)(`span`, {
                  children: _.data?.public_data?.persona_name,
                }),
              }),
              ` `,
              `(`,
              (0, _.jsx)(`a`, {
                href: `/moderation/activity/${_.actor_steamid}`,
                children: `activity`,
              }),
              `)`,
            ],
          }),
          (0, _.jsxs)(`td`, {
            children: [
              _(_.action),
              _.automated_action &&
                (0, _.jsx)(_.Fragment, {
                  children: `\xA0(Automated)`,
                }),
            ],
          }),
          (0, _.jsx)(`td`, {
            children: (0, _.jsx)(_, {
              eAction: _.action,
              jsonData: _.additional_json_data,
            }),
          }),
        ],
      });
}
function _(_) {
  let { eAction: _, jsonData: _ } = _,
    _ = {};
  switch ((_ && (_ = JSON.parse(_)), _)) {
    case 1:
      return (0, _.jsxs)(_.Fragment, {
        children: [`Report ID: `, _.report_id],
      });
    case 2:
      return (0, _.jsxs)(_.Fragment, {
        children: [
          `Reason: `,
          _(_.reason),
          _.resolution !== 1 &&
            _.resolution !== 14 &&
            (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsx)(`br`, {}), `Resolution: `, _(_.resolution)],
            }),
          _.sanctions &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(`br`, {}),
                `Sanctions: `,
                _.sanctions.map(_).join(`, `),
              ],
            }),
        ],
      });
    case 4:
      return (0, _.jsxs)(_.Fragment, {
        children: [`Report ID: `, _.report_id],
      });
    case 5:
      return (0, _.jsxs)(_.Fragment, {
        children: [
          `is_csam` in _ &&
            (0, _.jsxs)(_.Fragment, {
              children: [`Set CSAM to `, _.is_csam],
            }),
          `is_terrorism` in _ &&
            (0, _.jsxs)(_.Fragment, {
              children: [`Set terrorist content to `, _.is_terrorism],
            }),
        ],
      });
    case 6:
      return (0, _.jsxs)(_.Fragment, {
        children: [`New level: `, _(_.level)],
      });
    case 7:
      return (0, _.jsxs)(_.Fragment, {
        children: [`Report ID: `, _.report_id],
      });
  }
}
function _(_) {
  let [_, _] = (0, _.useState)(10),
    [_, _] = (0, _.useState)(null),
    _ = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !_ &&
        (0, _.jsx)(_, {
          title: _.Localize(`#moderation_escalation_reason_select`),
          reasons: _,
          onSelect: (_) => {
            if (_ == null) {
              _.onClose();
              return;
            }
            _(_);
          },
        }),
      !!_ &&
        (0, _.jsxs)(_, {
          className: `rnFppAkBA6E-`,
          onClose: _.onClose,
          strOKLabel: _.Localize(`#moderation_escalation_escalate`),
          strTitle: _.LocalizePlural(
            `#moderation_escalation_title`,
            _.rgSubjectKeys.length,
          ),
          onOK: async () => {
            let _ = [];
            for (let _ of _.rgSubjectKeys)
              _.push(
                _.mutateAsync({
                  subjectType: _.type,
                  subjectGroupId: _.group_id,
                  subjectId: _._,
                  eNewLevel: _,
                  eReason: _,
                }),
              );
            await Promise.all(_), _.onClose();
          },
          strCancelLabel: _.Localize(`#moderation_cancel`),
          children: [
            (0, _.jsxs)(`div`, {
              children: [
                (0, _.jsx)(`span`, {
                  children: _.Localize(`#moderation_escalation_reason_label`),
                }),
                ` `,
                (0, _.jsx)(`span`, {
                  children: _(_),
                }),
              ],
            }),
            (0, _.jsxs)(`select`, {
              className: `GSUH8AaRclw-`,
              value: _,
              onChange: (_) => _(parseInt(_.target.value)),
              children: [
                (0, _.jsx)(`option`, {
                  value: 0,
                  children: _.Localize(`#moderation_escalationlevel_any`),
                }),
                (0, _.jsx)(`option`, {
                  value: 1,
                  children: _.Localize(
                    `#moderation_escalationlevel_supervisor`,
                  ),
                }),
                (0, _.jsx)(`option`, {
                  value: 10,
                  children: _.Localize(`#moderation_escalationlevel_valve`),
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let { report: _, size: _ } = _,
    _ = _(_.reporter_steamid);
  if (
    !_.isSuccess ||
    (_(_.data, `Missing data on personaQuery despite success.`),
    _(_.data?.public_data, `Missing public data for user`),
    !_.data?.public_data)
  )
    return null;
  let _ = !!_.time_disputed && _.dispute_resolved === 0,
    _ = _.resolved !== 0 && (!_.time_disputed || _.dispute_resolved !== 0),
    _ = _.time_dispute_resolved !== 0,
    _ = _.resolved === 1;
  return (0, _.jsxs)(`div`, {
    className: _(_, _ && `CaWvyfSg68E-`, _ === `compact` && `drzGPif0FKk-`),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`span`, {
          children: _(_.time_reported, !1, ``),
        }),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          children: [
            (0, _.jsx)(_, {
              openInNewWindow: !0,
              _: `${_.COMMUNITY_BASE_URL}profiles/${_.reporter_steamid}`,
              children: (0, _.jsx)(_, {
                playerLinkDetails: _.data,
                size: `X-Small`,
                alt: `Reporter`,
              }),
            }),
            `\xA0`,
            (0, _.jsx)(_, {
              openInNewWindow: !0,
              _: `${_.COMMUNITY_BASE_URL}profiles/${_.reporter_steamid}`,
              children: (0, _.jsx)(`span`, {
                children: _.data.public_data?.persona_name,
              }),
            }),
          ],
        }),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children:
          _.report_reason !== 2 &&
          (0, _.jsx)(`span`, {
            className: `-v-7t6w5Jog-`,
            children: _(_.report_reason),
          }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ &&
            !_ &&
            !_ &&
            (0, _.jsxs)(`span`, {
              className: _(`tfnDbSb60A8-`, `xYsBZPmp018-`),
              children: [`Acquitted `, _(_.time_resolved, !1, ``)],
            }),
          _ &&
            !_ &&
            !_ &&
            !_ &&
            (0, _.jsxs)(`span`, {
              className: _(`tfnDbSb60A8-`, `WCPkT7UwU5E-`),
              children: [`Resolved `, _(_.time_resolved, !1, ``)],
            }),
          _ &&
            !_ &&
            (0, _.jsxs)(`span`, {
              className: _(`tfnDbSb60A8-`, `kCrtFhfU9xo-`),
              children: [`Disputed `, _(_.time_disputed, !1, ``)],
            }),
          _ &&
            (0, _.jsxs)(`span`, {
              className: _(`tfnDbSb60A8-`, `-Yo2ky9HoLQ-`),
              children: [
                `Dispute Resolved `,
                _(_.time_dispute_resolved, !1, ``),
              ],
            }),
          !_ &&
            (0, _.jsx)(`span`, {
              children: _.report_text,
            }),
          _ &&
            (0, _.jsxs)(`span`, {
              children: [
                (0, _.jsx)(`br`, {}),
                `Original: `,
                _.report_text,
                (0, _.jsx)(`br`, {}),
                `Dispute: `,
                _.dispute_details,
              ],
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`span`, {
    className: _(_, _.className),
    children: _.children,
  });
}
function _(_) {
  return _.status === 3 || _.status === 0
    ? null
    : (0, _.jsxs)(`span`, {
        className: _(_, _),
        children: [`Terrorism`, _.status === 1 && `?`],
      });
}
function _(_) {
  return _.status === 3 || _.status === 0
    ? null
    : (0, _.jsxs)(`span`, {
        className: _(_, _),
        children: [`CSAM`, _.status === 1 && `?`],
      });
}
function _(_) {
  return _.status === 3 || _.status === 0
    ? null
    : (0, _.jsxs)(`span`, {
        className: _(_, _),
        children: [`Violent threat`, _.status === 1 && `?`],
      });
}
function _(_) {
  let { eRequiredLevel: _, eReason: _ } = _;
  return _ === 1
    ? (0, _.jsxs)(`span`, {
        className: _(_, _),
        children: [
          _.Localize(`#moderation_escalationlevel_supervisor_desc`),
          ` `,
          !!_ &&
            (0, _.jsxs)(`span`, {
              children: [`(`, _(_), `)`],
            }),
        ],
      })
    : _ === 10
      ? (0, _.jsxs)(`span`, {
          className: _(_, _),
          children: [
            _.Localize(`#moderation_escalationlevel_valve_desc`),
            ` `,
            !!_ &&
              (0, _.jsxs)(`span`, {
                children: [`(`, _(_), `)`],
              }),
          ],
        })
      : null;
}
function _(_) {
  let _ = _();
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`h2`, {
            children: [_.rgLinks.length, ` Unresolved`],
          }),
          _.subjectGroupKey &&
            (0, _.jsx)(`a`, {
              className: `x0poUrP1UJk-`,
              onClick: async () => {
                await _.mutateAsync();
              },
              children: `Release all`,
            }),
        ],
      }),
      _.rgLinks.map((_) =>
        (0, _.jsx)(
          _,
          {
            ..._,
            children: _.children,
          },
          _.idx,
        ),
      ),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: _(_, _.claimed ? _ : ``),
    onClick: _.onClick,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.children,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [`Item #`, _.idx, `, `, _.cUnresolvedReports, ` reports`],
      }),
    ],
  });
}
function _(_) {
  let _ = _(_.steamid),
    _ = _(_.steamid);
  if (!_.isSuccess || !_.data || !_.isSuccess || !_.data) return null;
  let _ = 0,
    _ = 0,
    _ = 0,
    _ = [];
  for (let _ of _.data?.count_by_type ?? [])
    _.type === 5 ||
      _.type === 6 ||
      _.type === 4 ||
      (_.type === 2 && (_ += 1),
      _.type === 3 && (_ += 1),
      (_ += _.count),
      _.length > 0 && _.push((0, _.jsx)(`br`, {})),
      _.type === 1
        ? _.push(_.Localize(`#moderatormessage_count_note`, _.count))
        : _.type === 2
          ? _.push(_.Localize(`#moderatormessage_count_warning`, _.count))
          : _.type === 3 &&
            _.push(_.Localize(`#moderatormessage_count_bannotice`, _.count)));
  return _ === 0
    ? null
    : (0, _.jsx)(_, {
        toolTipContent: (0, _.jsx)(_.Fragment, {
          children: [..._],
        }),
        nDelayShowMS: 0,
        children: (0, _.jsxs)(`a`, {
          className: _(_, _ === 0 ? `` : _, _ === 0 ? `` : _),
          target: `_blank`,
          href: `${_.COMMUNITY_BASE_URL}/profiles/${_.steamid}/moderatormessages`,
          rel: `noreferrer`,
          children: [
            _,
            `\xA0`,
            (0, _.jsx)(`img`, {
              src: `${_.COMMUNITY_CDN_URL}public/shared/images/header/inbox_moderator_message.png`,
            }),
          ],
        }),
      });
}
function _(_) {
  let _ = _(_.steamid),
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(null);
  return !_.isSuccess || !_.data
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            ref: _,
            onMouseEnter: () => _(!0),
            onMouseLeave: () => _(!1),
            children: [
              (0, _.jsx)(`span`, {
                children: (0, _.jsx)(_, {
                  playerLinkDetails: _.data,
                  size: `Small`,
                  alt: `Comment owner`,
                }),
              }),
              (0, _.jsx)(`span`, {
                children: _.data.public_data?.persona_name,
              }),
              _ &&
                _.current &&
                (0, _.jsx)(_, {
                  target: _.current,
                  direction: `bottom`,
                  bEnablePointerEvents: !0,
                  nBodyDistance: 0,
                  nBodyAlignment: 0,
                  children: (0, _.jsxs)(`div`, {
                    className: `YemoAJrP9PI-`,
                    children: [
                      (0, _.jsx)(`div`, {
                        children: (0, _.jsx)(`a`, {
                          href: `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}`,
                          target: `_blank`,
                          rel: `noreferrer`,
                          children: `Profile`,
                        }),
                      }),
                      (0, _.jsx)(`div`, {
                        children: (0, _.jsx)(`a`, {
                          href: `${_.SUPPORT_BASE_URL}account/community/${_.steamid}`,
                          target: `_blank`,
                          rel: `noreferrer`,
                          children: `Support site`,
                        }),
                      }),
                      (0, _.jsx)(`div`, {
                        children: (0, _.jsx)(`a`, {
                          href: `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/posthistory`,
                          target: `_blank`,
                          rel: `noreferrer`,
                          children: `Post history`,
                        }),
                      }),
                      (0, _.jsx)(`div`, {
                        children: (0, _.jsx)(`a`, {
                          href: `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/commenthistory`,
                          target: `_blank`,
                          rel: `noreferrer`,
                          children: `Comment history`,
                        }),
                      }),
                      (0, _.jsx)(`div`, {
                        children: (0, _.jsx)(`a`, {
                          href: `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/moderatormessages`,
                          target: `_blank`,
                          rel: `noreferrer`,
                          children: `Community messages`,
                        }),
                      }),
                      _.fnFilterToThisUser &&
                        (0, _.jsx)(`div`, {
                          children: (0, _.jsx)(`a`, {
                            style: {
                              cursor: `pointer`,
                            },
                            onClick: () =>
                              _.fnFilterToThisUser && _.fnFilterToThisUser(),
                            children: `Filter to this user's content`,
                          }),
                        }),
                    ],
                  }),
                }),
            ],
          }),
          _.clanSteamId &&
            (0, _.jsx)(_, {
              clanSteamId: _.clanSteamId,
              steamid: _.steamid,
            }),
          (0, _.jsx)(_, {
            steamid: _.steamid,
          }),
          _.clanSteamId &&
            (0, _.jsx)(_, {
              clanSteamId: _.clanSteamId,
              steamid: _.steamid,
            }),
        ],
      });
}
function _(_) {
  let _ = (0, _.useContext)(_),
    _ = _(_.clanSteamId, _.steamid),
    _ = _(_.steamid),
    _ = _(_.steamid),
    _ = _(_.steamid, _?.rgForum?.appid),
    _ = !!(_.data?.issupervisor || _.data?.isadmin),
    _ = _.data?.rank;
  if (_)
    return (0, _.jsx)(`img`, {
      src: `${_.COMMUNITY_CDN_URL}public/images/skin_1/valve_comment.png`,
      className: _,
    });
  let _ = _.data?.isappeditor ?? !1,
    _ = !!_.data?.app_rights?.edit_info;
  if ((_ && _) || _ === 1)
    return (0, _.jsx)(`span`, {
      className: _,
      children: `Developer`,
    });
  if ((_ && !_) || _ === 2)
    return (0, _.jsx)(`img`, {
      className: _,
      src: `${_.COMMUNITY_CDN_URL}public/images/skin_1/comment_modindicator_officer.png`,
    });
  let _ = _.data?.isglobalmod ?? !1,
    _ = _.data?.issupport ?? !1,
    _ = _.data?.realms?.indexOf(_.EREALM) !== -1,
    _ = _.data?.permissions?.indexOf(19) !== -1;
  return _ || (_ && _ && _) || _ === 4
    ? (0, _.jsx)(`img`, {
        className: _,
        src: `${_.COMMUNITY_CDN_URL}public/images/skin_1/comment_modindicator_moderator.png`,
      })
    : null;
}
function _(_) {
  let _ = _(_.clanSteamId, _.steamid),
    _ = _(_.steamid),
    [_, _] = (0, _.useMemo)(() => {
      if (!_.data || !_.data.support_messages) return [!1, !1];
      let _ = !1,
        _ = !1;
      for (let _ of _.data.support_messages)
        _.is_active &&
        (_.support_message_type === 2 || _.support_message_type === 32)
          ? (_ = !0)
          : _.is_active && _.support_message_type === 1 && (_ = !0);
      return [_, _];
    }, [_.data]);
  if (!_.isSuccess || !_.isSuccess) return null;
  let _ = _.data !== null,
    _ = [];
  return (
    _ && _.push(`Community banned`),
    _ && _.push(`Hub banned`),
    _ && _.push(`Trade banned`),
    (0, _.jsx)(_.Fragment, {
      children: _.map((_) =>
        (0, _.jsx)(
          `div`,
          {
            className: _,
            children: _,
          },
          _,
        ),
      ),
    })
  );
}
function _(_) {
  let [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(null);
  return (0, _.jsxs)(`button`, {
    onClick: (_) => {
      _(!0), _.stopPropagation();
      let _ = `${_.COMMUNITY_BASE_URL}moderation/subject/${_.subjectKey.type}-${_.subjectKey.group_id}`;
      return (
        _.subjectKey.kind === `single` && (_ += `-${_.subjectKey._}`),
        _.hash && (_ += `#${_.hash}`),
        navigator.clipboard.writeText(_),
        setTimeout(() => _(!1), 1e3),
        !1
      );
    },
    className: _,
    ref: _,
    children: [
      _ &&
        _.current &&
        (0, _.jsx)(_, {
          target: _.current,
          direction: `bottom`,
          children: (0, _.jsx)(`div`, {
            className: `_39Upy4ScppI-`,
            children: `Copied.`,
          }),
        }),
      _.children,
    ],
  });
}
function _(_) {
  switch (_) {
    case 11:
      return _;
    case 12:
    case 13:
      return _;
    default:
      return;
  }
}
function _(_) {
  switch (_.eSanction) {
    case 11: {
      let _ = _.data;
      return (0, _.jsxs)(`ul`, {
        children: [
          (0, _.jsxs)(`li`, {
            children: [`Warning reason: `, _(_.eWarningReason)],
          }),
          (0, _.jsxs)(`li`, {
            children: [`Custom text: `, _.strCustomText],
          }),
        ],
      });
    }
    case 12:
    case 13: {
      let _ = _.data;
      return (0, _.jsxs)(`ul`, {
        children: [
          _.eSanction === 12 &&
            (0, _.jsxs)(`li`, {
              children: [`Ban reason: `, _.strReason],
            }),
          _.rtime32BanEnds === 0 &&
            (0, _.jsx)(`li`, {
              children: `Ban permanently.`,
            }),
          _.rtime32BanEnds !== 0 &&
            (0, _.jsxs)(`li`, {
              children: [
                `Ban until `,
                _(_.rtime32BanEnds) + ` ` + _(_.rtime32BanEnds),
              ],
            }),
        ],
      });
    }
    default:
      return null;
  }
}
function _(_) {
  let { setData: _, data: _, eResolution: _ } = _,
    _ = (_) => _(_),
    _ = 7,
    _ = Date.now() / 1e3;
  return (
    _?.rtime32BanEnds &&
      _.rtime32BanEnds > _ &&
      (_ = Math.ceil((_.rtime32BanEnds - _) / 86400)),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _ == 12 &&
          (0, _.jsxs)(`div`, {
            children: [
              `Ban reason: `,
              (0, _.jsx)(`input`, {
                type: `text`,
                value: _?.strReason ?? ``,
                onChange: (_) => {
                  let _ = _.target.value;
                  _({
                    strReason: _,
                    rtime32BanEnds:
                      _?.rtime32BanEnds ??
                      Math.floor(Date.now() / 1e3) + 7 * 86400,
                  });
                },
              }),
            ],
          }),
        (0, _.jsx)(`div`, {
          children: (0, _.jsxs)(`label`, {
            children: [
              (0, _.jsx)(`input`, {
                type: `checkbox`,
                checked: _?.rtime32BanEnds === 0,
                onChange: (_) => {
                  let _ = _.target.checked;
                  _({
                    strReason: _?.strReason ?? ``,
                    rtime32BanEnds: _
                      ? 0
                      : Math.floor(Date.now() / 1e3) + 7 * 86400,
                  });
                },
              }),
              ` Ban permanently`,
            ],
          }),
        }),
        (0, _.jsxs)(`div`, {
          children: [
            `Ban for: `,
            (0, _.jsx)(`input`, {
              disabled: _?.rtime32BanEnds === 0,
              type: `number`,
              value: _,
              onChange: (_) => {
                let _ = parseInt(_.target.value) ?? 1;
                _ = Math.max(1, _);
                let _ = Math.floor(Date.now() / 1e3) + _ * 86400;
                _({
                  strReason: _?.strReason ?? ``,
                  rtime32BanEnds: _,
                });
              },
            }),
            ` days.`,
          ],
        }),
      ],
    })
  );
}
function _(_) {
  let { setData: _, data: _ } = _,
    _ = (_) => _(_),
    _ = (_) => {
      let _ = parseInt(_.target.value);
      if (_ === -1) {
        _(void 0);
        return;
      }
      _({
        eWarningReason: _,
        strCustomText: _?.strCustomText ?? ``,
      });
    },
    _ = (_) => {
      let _ = _.target.value;
      _(
        _ === void 0
          ? void 0
          : {
              strCustomText: _,
              eWarningReason: _?.eWarningReason ?? 0,
            },
      );
    },
    _ = (0, _.useMemo)(() => {
      let _ = [];
      for (let _ = 0; _ < 8; _++)
        _.push({
          value: _,
          text: _(_),
        });
      return _.sort((_, _) => _.text.localeCompare(_.text)), _;
    }, []);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        children: (0, _.jsx)(`input`, {
          type: `text`,
          value: _?.strCustomText ?? ``,
          onChange: _,
        }),
      }),
      (0, _.jsx)(`div`, {
        children: (0, _.jsxs)(`select`, {
          onChange: _,
          children: [
            (0, _.jsx)(`option`, {
              value: `-1`,
              children: `Choose reason for warning...`,
            }),
            _.map((_) =>
              (0, _.jsx)(
                `option`,
                {
                  value: _.value,
                  children: _.text,
                },
                _.value,
              ),
            ),
          ],
        }),
      }),
    ],
  });
}
function _(_) {
  let { rgSupportedSanctions: _, onClose: _, eDefaultReason: _ } = _,
    [_, _] = (0, _.useState)(
      _.bSelectSanction ? `choose_sanction` : `choose_category`,
    ),
    [_, _] = (0, _.useState)(0),
    [_, _] = (0, _.useState)(0),
    [_, _] = (0, _.useState)([]),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(void 0),
    _ = (0, _.useMemo)(() => _(_), [_]),
    _ = _(_) || _(_),
    _ = _;
  if (_) {
    let _ = _(_);
    _ !== null && (_ = _);
  }
  if (_) {
    let _ = _(_);
    _ !== null && (_ = _);
  }
  let _ = (_) => {
      _(_),
        _ === 4
          ? (_(!0), _(16), _(_ ? `additional_data` : `confirm`))
          : _(`choose_category`);
    },
    _ = (0, _.useMemo)(() => {
      let _ = new Map();
      for (let _ of _)
        _(_) &&
          _.set(
            _.strLocToken,
            _.children.filter(_).map((_) => _.value),
          );
      return _.set(`#ContentReportReasonCategory_CivicDiscourse`, [61]), _;
    }, []),
    _ = (_) => {
      let _ = _(_) !== null,
        _ = _(_) !== null;
      _(!0),
        _(_),
        _(_ || _ ? `extended_reason` : _ ? `additional_data` : `confirm`);
    },
    _ = [];
  _ &&
    _ > 2 &&
    _.push({
      key: `${_}_Default`,
      text: `User Selected: ${_(_)}`,
      action: () => _(_),
      isDefault: !0,
    });
  for (let _ of _.keys()) {
    let _ = _.get(_);
    if (!_) continue;
    let _ = _.filter((_) => !_.excludedReasons || !_.excludedReasons.has(_));
    if (_.length !== 0)
      if (_.length === 1) {
        let _ = _(_[0]);
        if (!_) continue;
        _.push({
          key: _[0],
          text: _,
          action: () => _(_[0]),
        });
      } else
        _.push({
          key: _,
          text: _(_),
          action: () => {
            _(!1), _(_), _(`choose_reason`);
          },
        });
  }
  let _ = _.map((_) => {
      let _ = _(_) !== null,
        _ = _(_) !== null;
      return {
        key: _,
        text: _(_),
        action: () => {
          _(_),
            _ || _
              ? _(`extended_reason`)
              : _.bSkipConfirmPane
                ? _.onClose(void 0, _)
                : _(_ ? `additional_data` : `confirm`);
        },
      };
    }),
    _ = `choose_reason`;
  return (
    _ && (_ = `choose_category`),
    _ && (_ = `extended_reason`),
    (0, _.jsx)(_, {
      onClose: () => _(),
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ === `choose_sanction` &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  strTitle: `Choose sanction`,
                  onClose: _,
                }),
                (0, _.jsx)(_, {
                  className: `OnzbCfQ7INA-`,
                  children: [..._].map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        className: `yZrXwQq8DY0-`,
                        onActivate: () => _(_),
                        children: _(_),
                      },
                      _,
                    ),
                  ),
                }),
              ],
            }),
          _ === `choose_category` &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  strTitle: `Choose category`,
                  onClose: _,
                }),
                (0, _.jsx)(`div`, {
                  className: `OnzbCfQ7INA-`,
                  children: _.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        onActivate: _.action,
                        className: (0, _.default)(
                          `yZrXwQq8DY0-`,
                          _.isDefault && `sx-y1YI0bRo-`,
                        ),
                        children: _.text,
                      },
                      _.key,
                    ),
                  ),
                }),
                (0, _.jsx)(`div`, {
                  className: `gIMusMuSq2k-`,
                  children:
                    _.bSelectSanction &&
                    (0, _.jsx)(_, {
                      onClick: () => _(`choose_sanction`),
                      children: _.Localize(`#ReportContent_Back`),
                    }),
                }),
              ],
            }),
          _ === `choose_reason` &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  strTitle: `Choose reason`,
                  onClose: _,
                }),
                (0, _.jsx)(`div`, {
                  className: `OnzbCfQ7INA-`,
                  children: _.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        onActivate: _.action,
                        className: `yZrXwQq8DY0-`,
                        children: _.text,
                      },
                      _.key,
                    ),
                  ),
                }),
                (0, _.jsx)(`div`, {
                  className: `gIMusMuSq2k-`,
                  children: (0, _.jsx)(_, {
                    onClick: () => _(_ ? `choose_sanction` : `choose_category`),
                    children: _.Localize(`#ReportContent_Back`),
                  }),
                }),
              ],
            }),
          _ === `extended_reason` &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  strTitle: `Reason variants`,
                  onClose: _,
                }),
                _(_) !== null &&
                  (0, _.jsx)(_.Fragment, {
                    children: (0, _.jsxs)(_, {
                      children: [
                        (0, _.jsx)(`input`, {
                          type: `checkbox`,
                          onChange: (_) => _(_.target.checked),
                          checked: _,
                          _: `gendered`,
                        }),
                        (0, _.jsx)(`label`, {
                          htmlFor: `gendered`,
                          children: `Gendered`,
                        }),
                      ],
                    }),
                  }),
                _(_) !== null &&
                  (0, _.jsx)(_.Fragment, {
                    children: (0, _.jsxs)(_, {
                      children: [
                        (0, _.jsx)(`input`, {
                          type: `checkbox`,
                          onChange: (_) => _(_.target.checked),
                          checked: _,
                          _: `deepfaked`,
                        }),
                        (0, _.jsx)(`label`, {
                          htmlFor: `deepfaked`,
                          children: `Deepfaked`,
                        }),
                      ],
                    }),
                  }),
                (0, _.jsxs)(`div`, {
                  className: `gIMusMuSq2k-`,
                  children: [
                    (0, _.jsx)(_, {
                      onClick: () => _(`choose_reason`),
                      children: _.Localize(`#ReportContent_Back`),
                    }),
                    !_.bSkipConfirmPane &&
                      (0, _.jsx)(_, {
                        onClick: () => _(_ ? `additional_data` : `confirm`),
                        children: _.Localize(
                          `#moderation_moderatoractions_next`,
                        ),
                      }),
                    _.bSkipConfirmPane &&
                      (0, _.jsx)(_, {
                        onClick: () => _(_, _),
                        children: _.Localize(`#moderation_moderatoractions_ok`),
                      }),
                  ],
                }),
              ],
            }),
          _ === `additional_data` &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  strTitle: `Additional information`,
                  onClose: _,
                }),
                (0, _.jsx)(_, {
                  children:
                    _ &&
                    (0, _.jsx)(_, {
                      setData: _,
                      data: _,
                      eResolution: _,
                    }),
                }),
                (0, _.jsxs)(`div`, {
                  className: `gIMusMuSq2k-`,
                  children: [
                    (0, _.jsx)(_, {
                      onClick: () => _(_),
                      children: _.Localize(`#ReportContent_Back`),
                    }),
                    (0, _.jsx)(_, {
                      onClick: () => _(`confirm`),
                      disabled: _ === void 0,
                      children: _.Localize(`#moderation_moderatoractions_next`),
                    }),
                  ],
                }),
              ],
            }),
          _ === `confirm` &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  strTitle: `Confirm`,
                  onClose: _,
                }),
                (0, _.jsxs)(`div`, {
                  children: [
                    (0, _.jsxs)(`ul`, {
                      children: [
                        (0, _.jsxs)(`li`, {
                          children: [`Action: `, _(_)],
                        }),
                        (0, _.jsxs)(`li`, {
                          children: [`Reason: `, _(_)],
                        }),
                      ],
                    }),
                    _ &&
                      (0, _.jsx)(_, {
                        eSanction: _,
                        data: _,
                      }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  className: `gIMusMuSq2k-`,
                  children: [
                    (0, _.jsx)(_, {
                      onClick: () => _(_ ? `additional_data` : _),
                      children: _.Localize(`#ReportContent_Back`),
                    }),
                    (0, _.jsx)(_, {
                      onClick: () => _(_, _, _),
                      children: _.Localize(
                        `#moderation_moderatoractions_moderate`,
                      ),
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
    })
  );
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`h2`, {
        children: _.strTitle,
      }),
      (0, _.jsx)(`div`, {
        children: (0, _.jsx)(`button`, {
          className: _,
          onClick: _.onClose,
          children: (0, _.jsx)(_, {}),
        }),
      }),
    ],
  });
}
function _(_) {
  switch (_) {
    case 2:
      return _.Localize(`#moderation_resolutionaction_removed`);
    case 3:
      return _.Localize(`#moderation_resolutionaction_relabelled`);
    case 4:
      return _.Localize(`#moderation_resolutionaction_suspicious`);
    case 5:
      return _.Localize(`#moderation_resolutionaction_harassmentstrike`);
    case 11:
      return _.Localize(`#moderation_resolutionaction_removeandwarn`);
    case 12:
      return _.Localize(`#moderation_resolutionaction_removeandban`);
    case 13:
      return _.Localize(`#moderation_resolutionaction_removeandkick`);
    default:
      return _.Localize(`#moderation_resolutionaction_unknownvalue`, _);
  }
}
function _(_) {
  let [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)([]),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = _.reasons;
  for (let _ of _) _ = _[_].children;
  let _ = _ === null ? null : _(_),
    _ = _ === null ? null : _(_),
    _ = () => {
      if (_ !== null) _(null);
      else if (_.length === 0) _.onSelect(null);
      else {
        let _ = _.slice(0, -1);
        _(_);
      }
    };
  return (0, _.jsxs)(`div`, {
    children: [
      _ === null &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`div`, {
              className: `OnzbCfQ7INA-`,
              children: _.map((_, _) =>
                _(_)
                  ? (0, _.jsx)(
                      _,
                      {
                        className: `yZrXwQq8DY0-`,
                        href: _.url,
                        children: _.Localize(_.strLocToken),
                      },
                      _.strLocToken,
                    )
                  : (0, _.jsxs)(
                      _,
                      {
                        onActivate: () => {
                          if (_(_)) {
                            let _ = [..._];
                            _.push(_), _(_);
                          } else if (_(_))
                            _(_.value) || _(_.value)
                              ? _(_.value)
                              : _.onSelect(_.value);
                          else throw Error(`This should be unreachable.`);
                        },
                        className: `yZrXwQq8DY0-`,
                        children: [
                          (0, _.jsx)(`span`, {
                            children: _(_)
                              ? _.Localize(_.strLocToken)
                              : _(_.value),
                          }),
                          _(_) &&
                            (0, _.jsx)(`span`, {
                              children: `▶`,
                            }),
                        ],
                      },
                      _,
                    ),
              ),
            }),
            _.length != 0 &&
              (0, _.jsx)(_, {
                onClick: _,
                children: _.Localize(`#ReportContent_Back`),
              }),
          ],
        }),
      _ !== null &&
        (0, _.jsxs)(`div`, {
          className: `OnzbCfQ7INA-`,
          children: [
            (0, _.jsx)(_, {
              onActivate: () => _.onSelect(_),
              className: `yZrXwQq8DY0-`,
              children: _(_),
            }),
            _ !== null &&
              (0, _.jsx)(_.Fragment, {
                children: (0, _.jsxs)(`label`, {
                  children: [
                    (0, _.jsx)(`input`, {
                      type: `checkbox`,
                      checked: _,
                      onChange: (_) => _(_.target.checked),
                    }),
                    ` `,
                    _.Localize(`#ContentReportReason_Gendered`),
                  ],
                }),
              }),
            _ !== null &&
              (0, _.jsx)(_.Fragment, {
                children: (0, _.jsxs)(`label`, {
                  children: [
                    (0, _.jsx)(`input`, {
                      type: `checkbox`,
                      checked: _,
                      onChange: (_) => _(_.target.checked),
                    }),
                    ` `,
                    _.Localize(`#ContentReportReason_Deepfake`),
                  ],
                }),
              }),
            (0, _.jsxs)(`div`, {
              className: `gIMusMuSq2k-`,
              children: [
                (0, _.jsx)(_, {
                  onClick: _,
                  children: _.Localize(`#ReportContent_Back`),
                }),
                (0, _.jsx)(_, {
                  onClick: () => {
                    let _ = _;
                    _ !== null &&
                      (_ && _(_) !== null && (_ = _(_)),
                      _ && _(_) !== null && (_ = _(_)),
                      _.onSelect(_));
                  },
                  children: _.Localize(`#Button_Continue`),
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let { title: _, reasons: _, onSelect: _ } = _;
  return (0, _.jsx)(_, {
    strTitle: _,
    onClose: () => _(null),
    children: (0, _.jsx)(_, {
      reasons: _,
      onSelect: _,
    }),
  });
}
var _ = `gWfxn3LN9pg-`,
  _ = `-spDtYwxhc4-`,
  _ = `S5qxoZawB9o-`,
  _ = `Kf1d7CGUIcI-`,
  _ = `_8YSXK6ygWvM-`,
  _ = `Cs5H6GW7CHE-`,
  _ = _.createContext({
    mapSelectedSubjects: new Map(),
    fnToggleSelection: () => {},
    fnRegisterActions: () => {},
    fnUnregisterActions: () => {},
  });
function _(_) {
  let [_, _] = (0, _.useState)(new Map()),
    _ = (0, _.useRef)(new Map()),
    _ = (0, _.useCallback)(
      (_) => {
        let _ = _(_),
          _ = _.current.get(_);
        _ &&
          _((_) => {
            let _ = new Map(_);
            return _.delete(_) || _.set(_, _), _;
          });
      },
      [_],
    ),
    _ = (0, _.useCallback)((_, _) => {
      _.current.set(_, _);
    }, []),
    _ = (0, _.useCallback)((_) => {
      _.current.delete(_);
    }, []);
  return (0, _.jsx)(_.Provider, {
    value: {
      mapSelectedSubjects: _,
      fnToggleSelection: _,
      fnRegisterActions: _,
      fnUnregisterActions: _,
    },
    children: _.children,
  });
}
function _(_) {
  let { subjectKey: _, actions: _, children: _ } = _,
    {
      mapSelectedSubjects: _,
      fnToggleSelection: _,
      fnRegisterActions: _,
      fnUnregisterActions: _,
    } = (0, _.useContext)(_);
  if (
    (_.useEffect(() => {
      let _ = _(_ ?? null);
      return _(_, _), () => _(_);
    }, [_, _, _, _]),
    !_)
  )
    return null;
  let _ = _(_),
    _ = _.has(_),
    _ = _.bUnresolved || _.bDisputed;
  return (0, _.jsxs)(`label`, {
    className: (0, _.default)(_, _ && `_4QV3K-Q63ZA-`),
    "data-selectable-id": _ ? _ : void 0,
    _: `reported-subject-quicklink-target` + _._,
    children: [
      (0, _.jsx)(`input`, {
        className: _,
        type: `checkbox`,
        checked: _,
        onChange: () => _(_),
      }),
      _,
    ],
  });
}
function _(_) {
  let { refSelectableRoot: _, nextSubject: _ } = _,
    { mapSelectedSubjects: _, fnToggleSelection: _ } = (0, _.useContext)(_),
    [_, _] = (0, _.useState)(),
    _ = () => {
      if (!_.current) return;
      let _ = Array.from(_.current.querySelectorAll(`[data-selectable-id]`));
      for (let _ of _) {
        let _ = _.getAttribute(`data-selectable-id`);
        _ && !_.has(_) && _(_(_));
      }
    },
    _ = () => {
      for (let _ of _.keys()) _(_(_));
    };
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`button`, {
                onClick: _,
                children: _.Localize(`#moderation_select_all_unresolved`),
              }),
              (0, _.jsx)(`button`, {
                onClick: _,
                children: _.Localize(`#moderation_select_none`),
              }),
            ],
          }),
          (0, _.jsx)(`span`, {
            className: _,
            children: _.Localize(`#moderation_num_selected`, _.size),
          }),
          (0, _.jsx)(_, {
            mapSelectedSubjects: _,
            onResolution: (_) => {
              if (_) {
                _(_);
                return;
              }
              _ && (_(), _(_(_)));
            },
          }),
        ],
      }),
      !!_ &&
        (0, _.jsx)(`div`, {
          className: `v0jmRFM2dzQ-`,
          children: _,
        }),
    ],
  });
}
function _(_) {
  let { mapSelectedSubjects: _, onResolution: _ } = _,
    [_, _] = (0, _.useState)(null),
    _ = async (_, _, _) => {
      if ((_(null), _ === void 0 || _ === void 0)) return;
      let _ = [];
      if (_ && _)
        for (let _ of _.values()) {
          let _ = _.mapResolutionFuncs.get(_);
          _ && _.push(_(_, _));
        }
      try {
        await Promise.all(_), _();
      } catch (_) {
        _(_.toString());
      }
    },
    _ = async (_) => {
      _(null);
      let _ = [];
      for (let _ of _.values()) {
        let _ = _.mapAdditionalActions?.get(_);
        _ && _.push(_());
      }
      try {
        await Promise.all(_), _();
      } catch (_) {
        _(_.toString());
      }
    },
    _ = _(),
    _ = async () => {
      let _ = [];
      for (let [_, _] of _) {
        let _ = _(_);
        _ &&
          _.bDisputed &&
          _.push(
            _.mutateAsync({
              eSubjectType: _.type,
              ulSubjectGroupID: _.group_id,
              ulSubjectID: _._,
            }),
          );
      }
      try {
        await Promise.all(_);
      } catch (_) {
        _(_.toString());
      }
    },
    _ = 0,
    _ = 0,
    _ = 0,
    _ = _.values().next().value?.eReason,
    _ = [],
    _ = new Set(),
    _ = new Map();
  for (let [_, _] of _) {
    let _ = _(_);
    if (!_) continue;
    _ !== _.eReason && (_ = void 0), _.push(_), _.bDisputed && _++;
    for (let _ of _.mapAdditionalActions?.keys() ?? [])
      _.set(_, (_.get(_) ?? 0) + 1);
    let _ = !1;
    for (let _ of _.mapResolutionFuncs.keys())
      _ == 1 ? _++ : (_.add(_), (_ = !0));
    _ && _++;
  }
  let _ =
      _ && _ != _.size
        ? _.Localize(`#moderation_actions_acquit_multiple`, _)
        : _.Localize(`#moderation_actions_acquit`),
    _ =
      _ && _ != _.size
        ? _.Localize(`#moderation_actions_sanction_multiple`, _)
        : _.Localize(`#moderation_actions_sanction`),
    _ =
      _ && _ != _.size
        ? _.Localize(`#moderation_actions_confirmsanction_multiple`, _)
        : _.Localize(`#moderation_actions_confirmsanction`),
    _ = [];
  for (let [_, _] of _)
    _.push(
      (0, _.jsx)(
        _,
        {
          onClick: () => _(_),
          children: _(_, _ == _.size ? void 0 : _),
        },
        _,
      ),
    );
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ === `moderate` &&
        (0, _.jsx)(_, {
          rgSupportedSanctions: _,
          onClose: _,
          bSelectSanction: !0,
          eDefaultReason: _,
        }),
      _ === `escalate` &&
        (0, _.jsx)(_, {
          rgSubjectKeys: _,
          onClose: () => _(null),
        }),
      (0, _.jsx)(_, {
        disabled: !_,
        onClick: () => _(1, 1),
        children: _,
      }),
      (0, _.jsx)(_, {
        disabled: !_,
        onClick: () => _(`moderate`),
        children: _,
      }),
      (0, _.jsx)(_, {
        disabled: !_.size,
        onClick: () => _(`escalate`),
        children: _.Localize(`#moderation_actions_escalate`),
      }),
      _,
      _ > 0 &&
        (0, _.jsx)(`button`, {
          onClick: _,
          children: _,
        }),
    ],
  });
}
function _(_, _) {
  switch (_) {
    case _.k_EContentModerationAction_Sustain:
      return _
        ? _.Localize(`#moderation_actions_sustain_multiple`, _)
        : _.Localize(`#moderation_actions_sustain`);
    case _.k_EContentModerationAction_MarkSuspicious:
      return _
        ? _.Localize(`#moderation_actions_suspicious_multiple`, _)
        : _.Localize(`#moderation_actions_suspicious`);
    default:
      return _.Localize(`#moderation_actions_unknown`);
  }
}
var _ = /https?:\/\/[^/]*(?:steam)[^/]*\/ugc\/[^\s]+/i;
function _(_) {
  let { subjectKey: _, eAccountTrustScore: _ } = _,
    _ = (0, _.useContext)(_),
    _ = _(_.type, _.group_id);
  if (!_.isSuccess) return null;
  let _ = _.data.subjects?.length ?? 0,
    _ = 0;
  (_.data.subjects ?? []).forEach((_) => {
    (_.unresolved_dispute_count || _.unresolved_report_count) && _++;
  });
  let _ = _(_.data.subjects ?? [], _.eModeratorLevel);
  return _.type === 6
    ? (0, _.jsx)(_, {
        subjectKey: _,
        subjects: _,
      })
    : (0, _.jsx)(_, {
        subjectKey: _,
        subjects: _,
        eAccountTrustScore: _,
        cTotalSubjects: _,
        cUnresolved: _,
      });
}
function _(_) {
  let { subjectKey: _, subjects: _ } = _,
    _ = (0, _.useRef)(new _()),
    _ = _.group_id,
    _ = _(_),
    _ = _(_.data?.accountid_owner),
    _ = _.data ? _(_.data) : null,
    _ = _.InitFromClanID(
      _.data?.clanid ?? 0,
      _.EUNIVERSE,
    ).ConvertTo64BitString(),
    _ = _(_),
    _,
    _ = ``;
  return (
    _.data?.appid
      ? (_ = _.Localize(`#moderation_chatgroup_type_app`, _.data.appid))
      : _.data?.clanid
        ? ((_ = `${_.COMMUNITY_BASE_URL}gid/${_}`),
          _.data?.official
            ? (_ = _.Localize(
                `#moderation_chatgroup_type_clanapp`,
                _.data.clanid,
              ))
            : _.data?.invite_only
              ? (_ = _.Localize(
                  `#moderation_chatgroup_type_clanprivate`,
                  _.data.name ?? `-`,
                  _.data.clanid,
                ))
              : _.data &&
                (_ = _.Localize(
                  `#moderation_chatgroup_type_clanpublic`,
                  _.data.name ?? `-`,
                  _.data.clanid,
                )))
        : (_ = _.Localize(`#moderation_chatgroup_type_privateadhoc`, _)),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`h2`, {
          className: _,
          children: _.Localize(
            `#moderation_chatgroup_reports`,
            _?.data?.chat_group_name ?? ``,
          ),
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _.Localize(`#moderation_chatgroup_type`),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _
                ? (0, _.jsx)(_, {
                    openInNewWindow: !0,
                    _: _,
                    children: _,
                  })
                : _,
            }),
            !!_ &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(`div`, {
                    className: `vtk1Xwb8-ys-`,
                    children: _.Localize(`#moderation_chatgroup_owner`),
                  }),
                  (0, _.jsx)(`div`, {
                    className: `_8w-7Cg2b2YA-`,
                    children: (0, _.jsx)(_, {
                      openInNewWindow: !0,
                      _: _,
                      children: _.data?.public_data?.persona_name,
                    }),
                  }),
                ],
              }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _.Localize(`#moderation_chatgroup_membercount`),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _.data?.active_member_count,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _.Localize(`#moderation_chatgroup_chatrooms`),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _.data?.chat_rooms
                ?.map((_) =>
                  _.chat_name?.length ? `'${_.chat_name}'` : `'Default'`,
                )
                .join(`, `),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _.Localize(`#moderation_chatgroup_tagline`),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _.data?.chat_group_tagline?.length
                ? _.data.chat_group_tagline
                : _.Localize(`#moderation_select_none`),
            }),
            _.data?.disabled &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(`div`, {
                    className: `vtk1Xwb8-ys-`,
                    children: _.Localize(`#moderation_chatgroup_disabled`),
                  }),
                  (0, _.jsx)(`div`, {
                    className: `_8w-7Cg2b2YA-`,
                  }),
                ],
              }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _.map((_) =>
            (0, _.jsx)(
              _,
              {
                subject: _,
                bbCodeParser: _.current,
              },
              _.subject_id,
            ),
          ),
        }),
      ],
    })
  );
}
function _(_) {
  let { subjectKey: _, subjects: _, eAccountTrustScore: _ } = _,
    _ = _.InitFromAccountID(Number(_.group_id), _.EUNIVERSE),
    _ = _(_.ConvertTo64BitString()),
    _ = _.data ? _(_.data) : ``,
    _ = (0, _.useRef)(new _()),
    _ =
      _.data &&
      (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            openInNewWindow: !0,
            _: _,
            children: (0, _.jsx)(_, {
              playerLinkDetails: _.data,
              size: `X-Small`,
              alt: `Reported Account`,
            }),
          }),
          (0, _.jsx)(_, {
            openInNewWindow: !0,
            _: _,
            children: _.data.public_data?.persona_name,
          }),
        ],
      });
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        children: [
          _.cUnresolved,
          ` unresolved subjects of `,
          _.cTotalSubjects,
          ` reported`,
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`h2`, {
            className: _,
            children: _.LocalizeReact(
              _.type === 5
                ? `#moderation_chatgroup_reportedmessagesfrom`
                : `#moderation_chat_reportedmessagesfrom`,
              _,
            ),
          }),
          (0, _.jsx)(_, {
            steamID: _.ConvertTo64BitString(),
            subjectKey: _,
            eAccountTrustScore: _,
          }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              subject: _,
              bbCodeParser: _.current,
            },
            _.subject_id,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { steamID: _, subjectKey: _, eAccountTrustScore: _ } = _,
    _ = (0, _.useContext)(_),
    _ = _(_);
  if (!_.data) return;
  let _ = `unknown`,
    _;
  switch (_) {
    case 1:
      _ = `Learning`;
      break;
    case 2:
      _ = `Trusted`;
      break;
    case 3:
      (_ = `Untrusted`), (_ = _);
      break;
    case 4:
      (_ = `Banned`), (_ = _);
      break;
    case 5:
      _ = `Very Trusted`;
      break;
  }
  let _ = _.eMaxModeratorLevel >= 1;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: `Account Name:`,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.data.accountname ?? `unknown`,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: `AccountID:`,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            children: (0, _.jsx)(_, {
              _: `${_.SUPPORT_BASE_URL}account/activity/${_}`,
              openInNewWindow: !0,
              children: _.data.accountid ?? `unknown`,
            }),
          }),
          _.data.islimiteduser &&
            (0, _.jsx)(`div`, {
              className: `_8-kSaouhc0Q-`,
              children: `Limited`,
            }),
          _.data.islockdown &&
            (0, _.jsx)(`div`, {
              className: `uoOFrDoxJp0-`,
              children: `Locked`,
            }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: `Created:`,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.data.timeaccountcreated
          ? _(_.data.timeaccountcreated)
          : `unknown`,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: `Trust Bucket:`,
      }),
      (0, _.jsx)(`div`, {
        className: (0, _.default)(_, _),
        children: _,
      }),
      _ &&
        (0, _.jsx)(`div`, {
          className: (0, _.default)(`_8w-7Cg2b2YA-`, `HfWISO5-CNQ-`),
          children: (0, _.jsx)(_, {
            _: `${_.SUPPORT_BASE_URL}account/chatsessions/${_}?refID=moderation_${_.type}-${_.group_id}`,
            openInNewWindow: !0,
            children: `View full chat logs (in extreme cases)`,
          }),
        }),
    ],
  });
}
function _(_) {
  let { subject: _, bbCodeParser: _ } = _,
    _ = (0, _.useMemo)(
      () => ({
        kind: `single`,
        type: _.subject_type,
        group_id: _.subject_group_id,
        _: _.subject_id,
      }),
      [_],
    );
  return _.subject_type == 5 || _.subject_type == 6
    ? (0, _.jsx)(_, {
        subject: _,
        subjectKey: _,
        bbCodeParser: _,
      })
    : (0, _.jsx)(_, {
        subject: _,
        subjectKey: _,
        bbCodeParser: _,
      });
}
function _(_) {
  let { subject: _, subjectKey: _, bbCodeParser: _ } = _,
    _ = _.owner_steam_id ?? ``;
  (_.length < 1 || _ === `0`) &&
    (_ = _.InitFromAccountID(
      Number(_.group_id),
      _.EUNIVERSE,
    ).ConvertTo64BitString());
  let _ = _(_.group_id, _._, _.Actions.GetFriendChatReportMetadata),
    _ = !!_.data?.reported_msg?.msg?.match(_)?.length,
    _ = _.reports?.length ? _.reports[0] : void 0;
  return (0, _.jsx)(_, {
    subjectKey: _,
    actions: _(_, _?.reporter_steamid, _, _),
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              rgChatHistory: _.data?.chat_history ?? [],
              reportedChatMsg: _.data?.reported_msg,
              bbCodeParser: _,
            }),
            !!_.data?.future_log_collect_time &&
              (0, _.jsx)(_, {
                rtCollectionTime: _.data?.future_log_collect_time,
              }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              eRequiredLevel: _.required_moderator_level,
              eReason: _.content_moderated_reason,
            }),
            (0, _.jsx)(_, {
              status: _.terrorism_status,
            }),
            (0, _.jsx)(_, {
              status: _.csam_status,
            }),
            (0, _.jsx)(_, {
              status: _.credible_threat_of_violence_status,
            }),
            _.data
              ? (0, _.jsx)(_, {
                  metadata: _.data,
                  report: _,
                })
              : (0, _.jsx)(_, {
                  error: _.error,
                }),
            (0, _.jsx)(_, {
              subject: _,
              size: `compact`,
            }),
            (0, _.jsx)(_, {
              subject: _,
            }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  let { rtCollectionTime: _ } = _,
    _ = _ - new Date().getTime() / 1e3;
  return _ < 0
    ? null
    : (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(
          `#moderation_chatmetadata_futurelogcollection`,
          _(_),
        ),
      });
}
function _(_) {
  let { subject: _, subjectKey: _, bbCodeParser: _ } = _,
    _ = _(_.group_id, _._, _.Actions.GetChatGroupReportMetadata),
    _ = _(_(_)?.strChatGroupID ?? ``),
    _ = _(_, _),
    _ = _.reports?.length ? _.reports[0] : void 0,
    _ = _.unresolved_report_count ?? 0,
    _ = _.unresolved_dispute_count ?? 0;
  return (0, _.jsx)(_, {
    subjectKey: _,
    actions: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (_ > 0 || _ > 0) &&
              (0, _.jsxs)(`div`, {
                children: [
                  (0, _.jsx)(`img`, {
                    className: void 0,
                    src: `${_.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                  }),
                  ` `,
                  _,
                  ` unresolved/`,
                  _,
                  ` disputed`,
                ],
              }),
            (0, _.jsx)(_, {
              rgChatHistory: _.data?.chat_history ?? [],
              reportedChatMsg: _.data?.reported_msg,
              bbCodeParser: _,
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            `(SubjectID `,
            _.subjectKey._,
            `) `,
            (0, _.jsx)(_, {
              eRequiredLevel: _.required_moderator_level,
              eReason: _.content_moderated_reason,
            }),
            (0, _.jsx)(_, {
              status: _.terrorism_status,
            }),
            (0, _.jsx)(_, {
              status: _.csam_status,
            }),
            (0, _.jsx)(_, {
              status: _.credible_threat_of_violence_status,
            }),
            _.data
              ? (0, _.jsx)(_, {
                  metadata: _.data,
                  report: _,
                  chatGroupInfo: _,
                })
              : (0, _.jsx)(_, {
                  error: _.error,
                }),
            (0, _.jsx)(_, {
              subject: _,
              size: `compact`,
            }),
            (0, _.jsx)(_, {
              subject: _,
            }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  let { rgChatHistory: _, reportedChatMsg: _, bbCodeParser: _ } = _,
    _ = _?.timestamp ?? 2 ** 53 - 1,
    _ = _?.sender_accountid ?? 0,
    _ = !1,
    _ = [];
  return (
    _.forEach((_, _) => {
      !_ &&
        _.timestamp > _ &&
        (_.push(
          (0, _.jsx)(
            _,
            {
              reported: !0,
              fromReportedAcct: !0,
              chatMessage: _,
              bbCodeParser: _,
            },
            `reported`,
          ),
        ),
        (_ = !0)),
        _.push(
          (0, _.jsx)(
            _,
            {
              fromReportedAcct: _?.sender_accountid === _,
              chatMessage: _,
              bbCodeParser: _,
            },
            `${_.timestamp}_${_}`,
          ),
        );
    }),
    !_ &&
      _ &&
      _.msg &&
      _.push(
        (0, _.jsx)(
          _,
          {
            reported: !0,
            fromReportedAcct: !0,
            chatMessage: _,
            bbCodeParser: _,
          },
          `reported`,
        ),
      ),
    _.length === 0
      ? (0, _.jsx)(`div`, {
          className: _,
          children: _.Localize(`#moderation_chatmetadata_deleted`),
        })
      : (0, _.jsx)(`div`, {
          className: _,
          children: _,
        })
  );
}
function _(_) {
  let { chatMessage: _, bbCodeParser: _, reported: _, fromReportedAcct: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = new Date(_.timestamp * 1e3),
    _ =
      _(_.timestamp, {
        year: void 0,
      }) +
      ` ` +
      _.toLocaleTimeString(_(), {
        hourCycle: `h23`,
      }),
    _ = (0, _.useContext)(_),
    _ = _.msg ?? ``,
    _ = (0, _.useMemo)(
      () =>
        _.ParseBBCode(_, {
          chatMsg: _,
          bBlurImages: _.bBlurImages,
        }),
      [_, _, _.bBlurImages],
    ),
    _ = _ && typeof _ != `string`;
  if (_ && (0, _.isValidElement)(_) && _.type === _.Fragment) {
    let _ = _(_) ? _.Children.toArray(_.props.children) : [];
    _ = _.length > 0 && !_.every((_) => typeof _ == `string`);
  }
  let _ = _(_.sender_accountid),
    _ = _.data ? _(_.data) : ``,
    _ =
      _.data?.public_data?.persona_name ??
      _.Localize(`#moderation_actions_unknown`);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsxs)(`div`, {
            className: (0, _.default)(
              _,
              _ && `MDwg6-BSPn8-`,
              _ && `FwFHPS57DzQ-`,
            ),
            title: _ ? _.Localize(`#moderation_reported_message`) : void 0,
            children: [
              _,
              ` (`,
              (0, _.jsx)(_, {
                _: _,
                openInNewWindow: !0,
                children: _,
              }),
              `)`,
            ],
          }),
          _ &&
            (0, _.jsx)(`button`, {
              className: `VDhrRtIYMUg-`,
              onClick: () => _(!_),
              children: _.Localize(`#moderation_toggle_bbcode`),
            }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: (0, _.default)(_, _ && `MDwg6-BSPn8-`),
        children: _ ? _ : _,
      }),
    ],
  });
}
function _(_) {
  let { metadata: _, report: _ } = _,
    _ = new Date((_?.time_reported ?? 0) * 1e3),
    _ =
      _(_.getTime() / 1e3, {
        year: void 0,
      }) +
      ` ` +
      _.toLocaleTimeString(_(), {
        hourCycle: `h23`,
      }),
    _;
  _.friend_age_seconds !== void 0 &&
    (_ = _.friend_age_seconds
      ? _.Localize(`#moderation_friendsforduration`, _(_.friend_age_seconds))
      : _.Localize(`#moderation_no`));
  let _ = _.asn_age_seconds
    ? _.Localize(`#moderation_network_firstused_time`, _(_.asn_age_seconds))
    : void 0;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      !!_ &&
        (0, _.jsxs)(`div`, {
          className: `bGoWH9ocxp8-`,
          children: [
            (0, _.jsx)(`div`, {
              className: `uuOcLg2Cdck-`,
              children: _.Localize(`#moderation_friends_label`),
            }),
            (0, _.jsx)(`div`, {
              children: _,
            }),
          ],
        }),
      !!_.first_chatted_time &&
        (0, _.jsxs)(`div`, {
          className: `bGoWH9ocxp8-`,
          children: [
            (0, _.jsx)(`div`, {
              className: `uuOcLg2Cdck-`,
              children: _.Localize(`#moderation_firstchatted_label`),
            }),
            (0, _.jsx)(`div`, {
              children: _(_.first_chatted_time),
            }),
          ],
        }),
      _.session_age_seconds !== void 0 &&
        (0, _.jsxs)(`div`, {
          className: `bGoWH9ocxp8-`,
          children: [
            (0, _.jsx)(`div`, {
              className: `uuOcLg2Cdck-`,
              children: _.Localize(`#moderation_chatduration_label`),
            }),
            (0, _.jsx)(`div`, {
              children: _(_.session_age_seconds ?? 0),
            }),
          ],
        }),
      _.recent_chat_partner_count !== void 0 &&
        (0, _.jsxs)(`div`, {
          className: `bGoWH9ocxp8-`,
          children: [
            (0, _.jsx)(`div`, {
              className: `uuOcLg2Cdck-`,
              children: _.Localize(`#moderation_recentchatpartners_label`),
            }),
            (0, _.jsx)(`div`, {
              children: _.recent_chat_partner_count,
            }),
          ],
        }),
      !!_.sender_ip &&
        (0, _.jsxs)(`div`, {
          className: `bGoWH9ocxp8-`,
          children: [
            (0, _.jsx)(`div`, {
              className: `uuOcLg2Cdck-`,
              children: _.Localize(`#moderation_senderip_label`),
            }),
            (0, _.jsxs)(`div`, {
              children: [
                _(_.sender_ip) ?? _(2),
                !!_ &&
                  (0, _.jsxs)(`span`, {
                    children: [`\xA0(`, _, `)`],
                  }),
              ],
            }),
          ],
        }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#moderation_reported_time_label`),
          }),
          (0, _.jsx)(`div`, {
            children: _,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { chatGroupInfo: _, metadata: _, report: _ } = _,
    _ = new Date((_?.time_reported ?? 0) * 1e3),
    _ =
      _(_.getTime() / 1e3, {
        year: void 0,
      }) +
      ` ` +
      _.toLocaleTimeString(_(), {
        hourCycle: `h23`,
      });
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.bIsPublicGroup
          ? (0, _.jsx)(_, {
              className: _,
              children: `PUBLIC GROUP`,
            })
          : (0, _.jsx)(_, {
              className: _,
              children: `PRIVATE GROUP`,
            }),
      }),
      (0, _.jsxs)(`div`, {
        className: (0, _.default)(_, _),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#moderation_chatgroup_type`),
          }),
          (0, _.jsx)(`div`, {
            children: _.strClanLink
              ? (0, _.jsx)(_, {
                  openInNewWindow: !0,
                  _: _.strClanLink,
                  children: _.strLocalizedGroupType,
                })
              : _.strLocalizedGroupType,
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: (0, _.default)(_, _),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#moderation_groupname_label`),
          }),
          (0, _.jsx)(`div`, {
            children: _.group_name ?? _.Localize(`#moderation_actions_unknown`),
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: (0, _.default)(_, _),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#moderation_roomname_label`),
          }),
          (0, _.jsx)(`div`, {
            children: _.room_name?.length
              ? _.room_name
              : _.Localize(`#moderation_chatgroup_defaultroom`),
          }),
        ],
      }),
      _.recent_chat_rooms !== void 0 &&
        (0, _.jsxs)(`div`, {
          className: `bGoWH9ocxp8-`,
          children: [
            (0, _.jsx)(`div`, {
              className: `uuOcLg2Cdck-`,
              children: _.Localize(`#moderation_recentchatrooms_label`),
            }),
            (0, _.jsx)(`div`, {
              children: _.recent_chat_rooms,
            }),
          ],
        }),
      !!_.sender_ip &&
        (0, _.jsxs)(`div`, {
          className: `bGoWH9ocxp8-`,
          children: [
            (0, _.jsx)(`div`, {
              className: `uuOcLg2Cdck-`,
              children: _.Localize(`#moderation_senderip_label`),
            }),
            (0, _.jsx)(`div`, {
              children: _(_.sender_ip) ?? _(2),
            }),
          ],
        }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#moderation_reported_time_label`),
          }),
          (0, _.jsx)(`div`, {
            children: _,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(_, _),
    children: _.Localize(
      `#moderation_chatmetadataerror`,
      _.error?.name ?? `unknown`,
    ),
  });
}
var _ = `boFn38nWkPs-`,
  _ = `mhP5tpFFLEc-`,
  _ = `nQe-Q0MAJqE-`,
  _ = `-gDeIhGX0GM-`,
  _ = `J3X90Xts7cw-`,
  _ = `VPYXqY9DG-M-`,
  _ = `PPNrnBIr90Q-`,
  _ = `isJH-BGrUOg-`,
  _ = `_9yH920JnjQU-`,
  _ = `-V8waslDxqo-`,
  _ = `_6n-ZE7RHF-U-`,
  _ = `PrMqWvgxtbk-`,
  _ = `_8E9v9PEBKx4-`,
  _ = `FMmEeK9duk4-`,
  _ = `_0KvUyyaLxfo-`,
  _ = `_1rjriRMCKi8-`,
  _ = `IJLNmp9Px6Y-`;
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
  });
}
function _(_) {
  let _ = (0, _.useContext)(_);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(`div`, {
      children: [`Moderating as: `, _(_.eModeratorLevel)],
    }),
  });
}
function _(_) {
  let _ = _(),
    _ = _(),
    [_, _] = (0, _.useState)(_.data?.enabled_subject_types ?? []),
    _ = new Map();
  for (let _ of _.data?.buckets ?? []) _.set(_.subject_type, _);
  let _ = [];
  for (let _ of _)
    (_.data && _.data.enabled_subject_types?.indexOf(_) === -1) ||
      (_.has(_)
        ? _.push({
            subjectType: _,
            bucket: _.get(_),
          })
        : _.push({
            subjectType: _,
          }));
  return _.isSuccess
    ? (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`h2`, {
                children: `Steam Moderation Queues`,
              }),
              (0, _.jsxs)(`div`, {
                children: [
                  (0, _.jsx)(_, {
                    className: _,
                    _: `/moderation/statistics`,
                    children: _.Localize(`#moderation_statistics`),
                  }),
                  (0, _.jsx)(_, {}),
                ],
              }),
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children:
              _.length === 0 &&
              (0, _.jsx)(`div`, {
                children: `No moderation queues enabled. Enable queues in Preferences to proceed.`,
              }),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  subjectType: _.subjectType,
                  bucket: _.bucket,
                  typesToClaim: _,
                  setTypesToClaim: _,
                },
                _.subjectType,
              ),
            ),
          }),
        ],
      })
    : null;
}
function _(_) {
  return _ === 0 ? -1 : (Date.now() / 1e3 - _) / 86400;
}
function _(_) {
  let _ = _.bucket ? _.bucket.unresolved_count : 0,
    _ = _(_.bucket?.oldest_unresolved ?? 0),
    _ = _(_.bucket?.oldest_unresolved_for_any_moderator ?? 0),
    _ = _(_.bucket?.oldest_unresolved_for_supervisor ?? 0),
    _ = _(_.bucket?.oldest_unresolved_for_valve ?? 0),
    _ = (0, _.useContext)(_),
    _ = _(_.subjectType),
    [_, _] = (0, _.useState)(!1),
    _ = [
      [10, _.bucket?.pending_for_valve ?? 0],
      [1, _.bucket?.pending_for_supervisor ?? 0],
      [0, _.bucket?.pending_for_any_moderator ?? 0],
    ].filter(
      ([_, _]) => _ === _.eModeratorLevel || (_ < _.eModeratorLevel && _ > 0),
    ),
    _ = _[0][1] > 0,
    _ = _ || _.length > 1,
    _ = _.length > 1 ? _[1][0] : 0,
    _ = _.length > 1 ? _[1][1] : 0,
    _ = (0, _.jsx)(_.Fragment, {
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            children: `Not escalated`,
          }),
          !!_.bucket?.pending_for_any_moderator &&
            (0, _.jsxs)(`div`, {
              children: [
                Intl.NumberFormat(_.GetPreferredLocales(), {
                  unit: `day`,
                  style: `unit`,
                  maximumFractionDigits: 1,
                }).format(_),
                `\xA0(`,
                _.bucket?.pending_for_any_moderator ?? 0,
                `)`,
              ],
            }),
          !_.bucket?.pending_for_any_moderator &&
            (0, _.jsx)(`div`, {
              children: `None`,
            }),
          (0, _.jsx)(`div`, {
            children: `Needs supervisor`,
          }),
          !!_.bucket?.pending_for_supervisor &&
            (0, _.jsxs)(`div`, {
              children: [
                Intl.NumberFormat(_.GetPreferredLocales(), {
                  unit: `day`,
                  style: `unit`,
                  maximumFractionDigits: 1,
                }).format(_),
                `\xA0(`,
                _.bucket?.pending_for_supervisor ?? 0,
                `)`,
              ],
            }),
          !_.bucket?.pending_for_supervisor &&
            (0, _.jsx)(`div`, {
              children: `None`,
            }),
          (0, _.jsx)(`div`, {
            children: `Needs Valve`,
          }),
          !!_.bucket?.pending_for_valve &&
            (0, _.jsxs)(`div`, {
              children: [
                Intl.NumberFormat(_.GetPreferredLocales(), {
                  unit: `day`,
                  style: `unit`,
                  maximumFractionDigits: 1,
                }).format(_),
                `\xA0(`,
                _.bucket?.pending_for_valve ?? 0,
                `)`,
              ],
            }),
          !_.bucket?.pending_for_valve &&
            (0, _.jsx)(`div`, {
              children: `None`,
            }),
        ],
      }),
    }),
    _ = async () => {
      _ ? await _.mutateAsync(_.eModeratorLevel) : _(!0);
    },
    _ = async () => {
      _(!1), await _.mutateAsync(_[1][0]);
    },
    _ = _.subjectType === 2;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _ &&
        (0, _.jsx)(_, {
          strTitle: `Claim from lower level?`,
          strOKLabel: `Claim`,
          strCancelLabel: `Cancel`,
          onOK: _,
          onClose: () => _(!1),
          children: (0, _.jsxs)(`div`, {
            children: [
              `There are no subjects requiring level `,
              _(_.eModeratorLevel),
              `. Would you like to claim subjects requiring level`,
              ` `,
              _(_),
              ` (`,
              _,
              ` available)?`,
            ],
          }),
        }),
      (0, _.jsxs)(_, {
        toolTipContent: _,
        direction: `top`,
        nBodyAlignment: 0,
        children: [
          (0, _.jsx)(`div`, {
            children: _(_.subjectType),
          }),
          _ > 0 &&
            (0, _.jsxs)(`div`, {
              children: [
                Intl.NumberFormat(_.GetPreferredLocales(), {
                  unit: `day`,
                  style: `unit`,
                  maximumFractionDigits: 1,
                }).format(_),
                `\xA0(`,
                _,
                `)`,
              ],
            }),
          !_ &&
            (0, _.jsx)(`div`, {
              children: `Queue empty`,
            }),
        ],
      }),
      !_ &&
        (0, _.jsx)(_, {
          onClick: _,
          disabled: !_,
          loading: _.isPending,
          children: `Claim subjects`,
        }),
      _ &&
        (0, _.jsx)(_, {
          href: `/moderation/comments`,
          target: `_blank`,
          children: `Go to tool…`,
        }),
    ],
  });
}
function _(_) {
  let _ = _(),
    _ = _();
  return _.isSuccess
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(`h2`, {
                children: [
                  `My claimed subject groups (`,
                  _.data.length,
                  `) `,
                  _.isFetching &&
                    (0, _.jsx)(`span`, {
                      children: `(Fetching...)`,
                    }),
                ],
              }),
              (0, _.jsx)(_, {
                onClick: async () => {
                  await _.mutateAsync();
                },
                children: `Release all`,
              }),
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _.data.map((_) =>
              (0, _.jsx)(
                _,
                {
                  group: _,
                },
                _.key,
              ),
            ),
          }),
        ],
      })
    : null;
}
function _(_) {
  let _ = _(_.group.kind === `single` ? [_.group.subject] : _.group.subjects),
    _ = async () => {
      await _.mutateAsync();
    },
    _ = _.group.type,
    _ =
      _.group.kind === `group`
        ? _.group.group_id
        : _.group.subject.subject_group_id,
    _ = _(_, _),
    _ = _(),
    _ = async () => {
      await _.mutateAsync({
        eSubjectType: _.group.type,
        subjectGroupId: _,
        eResolution: 16,
        eReason: 2,
      });
    },
    [_, _, _] = (0, _.useMemo)(() => {
      if (!_.isSuccess) return [0, 0];
      let _ = 0,
        _ = 0,
        _;
      for (let _ of _.data.subjects ?? [])
        _.unresolved_dispute_count + _.unresolved_report_count > 0 &&
          ((_ += _.unresolved_report_count + _.unresolved_dispute_count),
          _++,
          _.oldest_unresolved_dispute_time &&
            (!_ || _.oldest_unresolved_dispute_time < _) &&
            (_ = _.oldest_unresolved_dispute_time),
          _.oldest_unresolved_report_time &&
            (!_ || _.oldest_unresolved_report_time < _) &&
            (_ = _.oldest_unresolved_report_time));
      return [_, _, _];
    }, [_.data]);
  if (!_.data) return null;
  let _ = ``;
  return (
    (_ =
      _.group.kind === `single`
        ? `(Notify Valve of ${_.group.subject.reported_content_id})`
        : `(Notify Valve of ${_.group.subjects.map((_) => _.reported_content_id).join(`, `)})`),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        !_.broken &&
          (0, _.jsxs)(_, {
            _: _.href,
            className: `O8QZvXjZ1aY-`,
            openInNewWindow: !0,
            children: [
              (0, _.jsx)(`div`, {
                children: _.summary,
              }),
              _.group.kind === `group` &&
                (0, _.jsxs)(`div`, {
                  children: [
                    _,
                    ` reports on `,
                    _,
                    ` subjects `,
                    _ !== void 0 &&
                      (0, _.jsxs)(`span`, {
                        children: [`, oldest from `, _(_, !1, ``)],
                      }),
                  ],
                }),
            ],
          }),
        _.broken &&
          (0, _.jsxs)(`div`, {
            children: [
              _(_.group.type),
              `: Broken `,
              (0, _.jsx)(`button`, {
                className: `vdU-JbAF24k-`,
                onClick: _,
                children: (0, _.jsx)(_, {}),
              }),
              ` `,
              _,
            ],
          }),
        _.rgExtraButtons?.map((_) =>
          (0, _.jsx)(_, {
            onClick: _.fnOnClick,
            children: _.strLabel,
          }),
        ),
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            onClick: _,
            children: `Release`,
          }),
        }),
      ],
    })
  );
}
function _(_) {
  switch (_.group.kind) {
    case `group`:
      return (0, _.jsx)(_, {
        group: _.group,
      });
    case `single`:
      return (0, _.jsx)(_, {
        subject: _.group,
      });
  }
}
function _(_) {
  let _ = _(_.group.type, _.group.group_id);
  if (!_.isSuccess) return null;
  let _ = _.data.subjects;
  switch (_.group.type) {
    case 1:
      return (0, _.jsx)(_, {
        group: _.group,
        subjects: _,
      });
    case 5:
    case 4:
      return (0, _.jsx)(_, {
        group: _.group,
        subjects: _,
      });
    case 6:
      return (0, _.jsx)(_, {
        group: _.group,
        subjects: _,
      });
  }
}
function _(_) {
  return null;
}
function _(_) {
  let { group: _, subjects: _ } = _,
    _ = _(_[0]);
  if (!_) return null;
  let _ = _(_.clanSteamId, _.forumId, _[0].subject_group_id);
  if (!_.isSuccess) return null;
  let _ = _.data.topics?.length == 0,
    _ = `Forum posts on topic '${_.data.topics?.length == 0 ? `` : _.data.topics[0].title}'`,
    _ = new _(_.clanSteamId).GetAccountID();
  return (0, _.jsx)(_, {
    group: _,
    broken: _,
    summary: _,
    href: `${_.COMMUNITY_BASE_URL}actions/redirecttoforumtopic/?accountIDOwner=${_}&gidForum=${_.forumId}&gidTopic=${_.group_id}`,
  });
}
function _(_) {
  let _ = _(Number(_.group.group_id)),
    _ = _.isError,
    _ = `Chat messages from '${_.data?.public_data?.persona_name ?? _.group.group_id}'`,
    _ = _(_.group);
  return (0, _.jsx)(_, {
    group: _.group,
    broken: _,
    summary: _,
    href: _,
  });
}
function _(_) {
  let _ = _(_.group.group_id),
    _ = _.isError,
    _ = `Messages in chat group '${_.data?.chat_group_name ?? _.group.group_id}'`,
    _ = _(_.group);
  return (0, _.jsx)(_, {
    group: _.group,
    broken: _,
    summary: _,
    href: _,
  });
}
function _(_) {
  let [_, _] = (0, _.useState)(!1),
    _ = _(),
    _ = _(),
    _ = (0, _.useContext)(_),
    _ = _.eMaxModeratorLevel,
    [_, _] = (0, _.useState)(_.eModeratorLevel),
    [_, _] = (0, _.useState)(new Set(_.data?.enabled_subject_types ?? [])),
    [_, _] = (0, _.useState)(_.bBlurImages),
    _ = async () => {
      console.log(`fnSave called!`),
        _.setBlurImages(_),
        _.setModeratorLevel(_),
        await _.mutateAsync({
          ePreferredLevel: _,
          rgEnabledSubjectTypes: Array.from(_),
        }),
        _(!1);
    },
    _ = (_) => async (_) => {
      let _ = _.target.checked,
        _ = new Set(_);
      _ ? _.add(_) : _.delete(_), _(_);
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          strTitle: `Moderator preferences`,
          strOKLabel: `Save`,
          strCancelLabel: `Cancel`,
          onOK: _,
          onClose: () => _(!1),
          children: (0, _.jsxs)(`div`, {
            className: `BLNQdhpp1yo-`,
            children: [
              (0, _.jsxs)(`label`, {
                children: [
                  `Moderate as:`,
                  (0, _.jsxs)(`select`, {
                    value: _,
                    onChange: (_) => _(parseInt(_.target.value)),
                    children: [
                      (0, _.jsx)(`option`, {
                        value: 0,
                        children: `Moderator`,
                      }),
                      _ >= 1 &&
                        (0, _.jsx)(`option`, {
                          value: 1,
                          children: `Supervisor`,
                        }),
                      _ >= 10 &&
                        (0, _.jsx)(`option`, {
                          value: 10,
                          children: `Valve`,
                        }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)(`div`, {
                children: `Enabled queues:`,
              }),
              _.map((_) =>
                (0, _.jsxs)(
                  `label`,
                  {
                    children: [
                      (0, _.jsx)(`input`, {
                        type: `checkbox`,
                        checked: _.has(_),
                        onChange: _(_),
                      }),
                      ` `,
                      _(_),
                    ],
                  },
                  _,
                ),
              ),
              (0, _.jsx)(`div`, {
                children: (0, _.jsxs)(`label`, {
                  children: [
                    `Blur Images?`,
                    (0, _.jsxs)(`select`, {
                      value: _ ? `1` : `0`,
                      onChange: (_) => _(_.target.value === `1`),
                      children: [
                        (0, _.jsx)(`option`, {
                          value: `1`,
                          children: `Yes`,
                        }),
                        (0, _.jsx)(`option`, {
                          value: `0`,
                          children: `No`,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      (0, _.jsx)(`button`, {
        className: _,
        onClick: () => _(!0),
        children: `Preferences`,
      }),
    ],
  });
}
var _ = (_) => [`get_published_file_details`, _],
  _ = (_) => [`set_shared_file_visibility`, _],
  _ = (_) => [`ban_published_file`, _],
  _ = (_) => [`update_file_content_descriptors`, _],
  _ = (_) => [`mark_as_supicious`, _],
  _ = (_) => [`ban_upvoters`, _],
  _ = (_) => [`update_restricted_countries`, _];
function _(_) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = await _.Actions.GetPublishedFileDetails(_);
      if (_ === null) throw Error(``);
      return _;
    },
  };
}
function _(_) {
  return _(_(_));
}
function _(_) {
  let _ = _();
  return _({
    mutationKey: _(_),
    mutationFn: async (_) => {
      let _ = new FormData();
      return (
        _.append(`sessionid`, _()),
        _.append(`id`, _),
        _.append(`visibility`, _.visibility.toString()),
        await fetch(`${_.COMMUNITY_BASE_URL}sharedfiles/itemsetvisibility`, {
          method: `POST`,
          body: _,
        })
      );
    },
    onSuccess: () => {
      _.invalidateQueries({
        queryKey: _(_),
      });
    },
  });
}
function _(_) {
  let _ = _();
  return _({
    mutationKey: _(_),
    mutationFn: async (_) => {
      let _ = new FormData();
      _.set(`sessionid`, _()),
        _.set(`id`, _),
        _.set(`suspicious`, _.suspicious ? `1` : `0`),
        await fetch(`${_.COMMUNITY_BASE_URL}sharedfiles/markassuspicious`, {
          method: `POST`,
          body: _,
        });
    },
    onSuccess: () => {
      _.invalidateQueries({
        queryKey: _(_),
      });
    },
  });
}
function _(_) {
  let _ = _();
  return _({
    mutationKey: _(_),
    mutationFn: async () => {
      let _ = new FormData();
      _.set(`sessionid`, _()),
        _.set(`id`, _),
        await fetch(`${_.COMMUNITY_BASE_URL}sharedfiles/banupvoters`, {
          method: `POST`,
          body: _,
        });
    },
    onSuccess: () => {
      _.invalidateQueries({
        queryKey: _(_),
      });
    },
  });
}
function _(_) {
  let _ = _();
  return _({
    mutationKey: _(_),
    mutationFn: async (_) => {
      let _ = Object.keys(_.restrictedCountries).filter(
          (_) => _.restrictedCountries[_],
        ),
        _ = new FormData();
      _.set(`sessionid`, _()), _.set(`id`, _);
      for (let _ of _) _.append(`countries[]`, _);
      await fetch(
        `${_.COMMUNITY_BASE_URL}sharedfiles/updaterestrictedcountries`,
        {
          method: `POST`,
          body: _,
        },
      );
    },
    onSuccess: () => {
      _.invalidateQueries({
        queryKey: _(_),
      });
    },
  });
}
function _(_, _) {
  let _ = _();
  return _({
    mutationKey: _(_),
    mutationFn: async (_) => {
      let _ = new FormData();
      _.set(`sessionid`, _()),
        _.set(`id`, _),
        _.set(`appid`, _.toString()),
        _.set(`IsBanned`, _.banned ? `1` : `0`),
        await fetch(`${_.COMMUNITY_BASE_URL}sharedfiles/ban`, {
          method: `POST`,
          body: _,
        });
    },
    onSuccess: () => {
      _.invalidateQueries({
        queryKey: _(_),
      });
    },
  });
}
function _(_) {
  let _ = _(),
    _ = _();
  return _({
    mutationKey: _(_),
    mutationFn: async (_) =>
      await _.UpdateContentDescriptors(_, {
        publishedfileid: _,
        descriptors_to_add: _.rgDescriptorsToAdd,
        descriptors_to_remove: _.rgDescriptorsToRemove,
      }),
    onSuccess: () => {
      _.invalidateQueries({
        queryKey: _(_),
      });
    },
  });
}
var _ = `jSm06D4z3Bg-`,
  _ = `_80NNPFZpY5M-`,
  _ = `GXfSb2N-ypE-`,
  _ = `ZAVMfhecW84-`,
  _ = `VsQV-m8kn38-`,
  _ = `_-692TbjWkP0-`,
  _ = `BpMndO9Iuzo-`,
  _ = `YDpLpczcXKY-`,
  _ = `Rn54idbkCMA-`,
  _ = `vn55fiV7ZXY-`,
  _ = `-t95fQN4mXY-`,
  _ = `BJR36dCmVNc-`,
  _ = `W87OAORKaiQ-`,
  _ = `_8936CyqAE4Q-`;
function _(_) {
  let {
      subjectKey: { group_id: _ },
    } = _,
    _ = _(3, _),
    _ = _(_),
    [_, _] = _(null);
  if (!_.isSuccess || !_.isSuccess) return (0, _.jsx)(_, {});
  let _ = new Map(),
    _ = new Map(),
    _;
  if (_.data.subjects)
    for (let _ of _.data.subjects)
      _.subject_id === `0`
        ? ((_ = _), _.set(`0`, _.data.title))
        : _.set(_.subject_id, _);
  let _ = [];
  return (
    _ &&
      _.push({
        _: _.data.publishedfileid,
        idx: 0,
        onClick: () => _(`0`),
        children: `File`,
        cUnresolvedReports:
          _.unresolved_report_count + _.unresolved_dispute_count,
      }),
    _.push(
      ..._(_.data.creator, 5, _, _, _, _, _.useLoaderData().maxModeratorLevel),
    ),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            publishedFileId: _,
            subject: _,
          }),
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            rgLinks: _,
          }),
        }),
      ],
    })
  );
}
function _(_) {
  switch (_) {
    case 1:
      return `Friends only`;
    case 2:
      return `Private`;
    case 0:
      return `Public`;
    case 3:
      return `Unlisted`;
    default:
      return `Unknown`;
  }
}
function _(_) {
  let { publishedFileId: _, subject: _ } = _,
    _ = _(_).data;
  return (0, _.jsxs)(`div`, {
    className: _(_, _ ? _ : ``, _.banned ? _ : ``),
    _: `reported-subject-quicklink-target-0`,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`img`, {
          src: _.file_url,
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            publishedFileId: _,
            appid: _.creator_appid,
          }),
          (0, _.jsx)(_, {
            publishedFileId: _,
            appId: _.creator_appid,
            subject: _,
          }),
          (0, _.jsx)(_, {
            subject: _,
          }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          subject: _,
        }),
      }),
    ],
  });
}
function _(_) {
  switch (_) {
    case 3:
      return `Artwork`;
    case 5:
      return `Screenshot`;
    default:
      return `(Unknown)`;
  }
}
function _(_) {
  let _ = _(_.publishedFileId),
    { data: _ } = _({
      appid: _.appid,
    });
  if (!_.isSuccess || !_.data) return null;
  let _ = _.data,
    _ = [...Object.keys(_(_))];
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsxs)(`h2`, {
        children: [_.banned && `(Deleted)`, ` `, _.title],
      }),
      (0, _.jsxs)(`p`, {
        children: [
          (0, _.jsx)(_, {
            steamid: _.creator,
          }),
          ` `,
          `(`,
          (0, _.jsx)(`a`, {
            target: `other_content_${_.creator}`,
            href: `${_.COMMUNITY_BASE_URL}apps/reportedcontent/?steamid=${_.creator}`,
            children: `Other content`,
          }),
          `)`,
        ],
      }),
      (0, _.jsxs)(`p`, {
        children: [_(_.file_type), ` visible to`, ` `, _(_.visibility)],
      }),
      _.length > 0 &&
        (0, _.jsxs)(`p`, {
          children: [`Restricted in: `, _.join(`, `)],
        }),
    ],
  });
}
function _(_) {
  if (!_ || !_.kvtags) return {};
  let _ = {};
  for (let _ of _.kvtags)
    if (_.key === `restricted_country`) {
      let _ = _.value;
      _[_] = !0;
    }
  return _;
}
function _(_) {
  let _ = _(_.publishedFileId),
    _ = _(_.publishedFileId),
    _ = _(_.publishedFileId, _.appId),
    _ = _(_.publishedFileId),
    _ = _(),
    _ = _(_.publishedFileId),
    _ = _(_.publishedFileId),
    _ = _(_.publishedFileId);
  if (!_.isSuccess || !_.data) return null;
  let [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(void 0),
    [_, _] = (0, _.useState)(void 0),
    [_, _] = (0, _.useState)([void 0, void 0, void 0, void 0, void 0]),
    [_, _] = (0, _.useState)(void 0),
    [_, _] = (0, _.useState)(void 0),
    [_, _] = (0, _.useState)(void 0),
    [_, _] = (0, _.useState)(_(_.data)),
    _ =
      _ !== 1 &&
      _ !== 2 &&
      (_ !== void 0 || _ !== void 0 || _ !== void 0 || _ !== void 0);
  _.subject && _.subject.unresolved_dispute_count;
  let _ = async (_, _) => {
      _ && _(_), _(!1);
    },
    _ = async (_) => {
      let _ = 0;
      _(!0);
      let _ = [];
      if (_.some((_) => _ !== void 0)) {
        let _ = [],
          _ = [];
        for (let _ = 1; _ < 6; _++) {
          let _ = _;
          _[_] !== void 0 && (_[_] === !0 ? _.push(_) : _.push(_));
        }
        (_.length > 0 || _.length > 0) &&
          (_.push(
            _.mutateAsync({
              rgDescriptorsToAdd: _,
              rgDescriptorsToRemove: _,
            }),
          ),
          (_ = 3));
      }
      if (
        (_ !== void 0 &&
          (_.push(
            _.mutateAsync({
              visibility: _,
            }),
          ),
          (_ = 9)),
        Object.keys(_).length > 0 &&
          (_.push(
            _.mutateAsync({
              restrictedCountries: _,
            }),
          ),
          (_ = 9)),
        _ !== void 0 &&
          (_.push(
            _.mutateAsync({
              banned: _,
            }),
          ),
          (_ = 2)),
        _ !== void 0 &&
          (_.push(
            _.mutateAsync({
              suspicious: !0,
            }),
          ),
          (_ = 2)),
        _ !== void 0 && (_.push(_.mutateAsync()), (_ = 2)),
        await Promise.all(_),
        _.subject)
      ) {
        let _ = {
          eSubjectType: 3,
          subjectGroupId: _.publishedFileId,
          subjectId: `0`,
          eReason: _,
          eResolution: _,
        };
        await _.mutateAsync(_);
      }
      _(void 0),
        _(void 0),
        _([void 0, void 0, void 0, void 0, void 0]),
        _(void 0),
        _(void 0),
        _(void 0),
        _(!1),
        _(1);
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          rgSupportedSanctions: new Set(),
          bSelectSanction: !1,
          onClose: _,
          bSkipConfirmPane: !0,
        }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`h2`, {
            children: `Moderate`,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              `Reason: `,
              (0, _.jsx)(`button`, {
                onClick: () => _(!0),
                children: _(_),
              }),
            ],
          }),
          (0, _.jsx)(_, {
            publishedFileId: _.publishedFileId,
            eVisibility: _,
            setVisibility: _,
          }),
          (0, _.jsx)(_, {
            publishedFileId: _.publishedFileId,
            bToBeBanned: _,
            setToBeBanned: _,
          }),
          (0, _.jsx)(_, {
            publishedFileId: _.publishedFileId,
            rgContentDescriptors: _,
            setContentDescriptors: _,
          }),
          (0, _.jsx)(_, {
            bHideAsIncompatible: _,
            setHideAsIncompatible: _,
          }),
          (0, _.jsx)(_, {
            bMarkAsSuspicious: _,
            setMarkAsSuspicious: _,
          }),
          (0, _.jsx)(_, {
            bBanUpvoters: _,
            setBanUpvoters: _,
          }),
          (0, _.jsx)(_, {
            publishedFileId: _.publishedFileId,
            rgRestrictedCountries: _,
            setRestrictedCountries: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              !_ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(`button`, {
                      disabled: !_,
                      onClick: () => _(!1),
                      children: `Resolve`,
                    }),
                    (0, _.jsx)(`button`, {
                      onClick: () => _(!0),
                      children: `Acquit`,
                    }),
                  ],
                }),
              _ && (0, _.jsx)(_, {}),
            ],
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let _ = _(_.publishedFileId);
  return !_.isSuccess || !_.data
    ? null
    : (0, _.jsxs)(`div`, {
        className: _(_.eVisibility === void 0 ? `` : _, _),
        children: [
          `Visibility:`,
          (0, _.jsxs)(`select`, {
            defaultValue: _.data.visibility,
            onChange: (_) => {
              let _ = parseInt(_.target.value);
              _.setVisibility(_);
            },
            children: [
              (0, _.jsx)(`option`, {
                value: 0,
                children: `Public`,
              }),
              (0, _.jsx)(`option`, {
                value: 1,
                children: `Friends only`,
              }),
              (0, _.jsx)(`option`, {
                value: 2,
                children: `Private`,
              }),
              (0, _.jsx)(`option`, {
                value: 3,
                children: `Unlisted`,
              }),
            ],
          }),
          _.eVisibility !== void 0 &&
            (0, _.jsx)(`button`, {
              onClick: () => _.setVisibility(void 0),
              children: `X`,
            }),
        ],
      });
}
function _(_) {
  let _ = _(_.publishedFileId);
  if (!_.isSuccess || !_.data) return null;
  let _ = _.bToBeBanned === !0 || (_.bToBeBanned === void 0 && !_.data.banned);
  return (0, _.jsxs)(`div`, {
    className: _(_.bToBeBanned === void 0 ? `` : _, _),
    children: [
      _ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            `Item is not banned. `,
            (0, _.jsx)(`button`, {
              onClick: () => _.setToBeBanned(!0),
              children: `Ban`,
            }),
          ],
        }),
      !_ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            `Item is banned. `,
            (0, _.jsx)(`button`, {
              onClick: () => _.setToBeBanned(!1),
              children: `Unban`,
            }),
          ],
        }),
      _.bToBeBanned !== void 0 &&
        (0, _.jsx)(`button`, {
          onClick: () => _.setToBeBanned(void 0),
          children: `X`,
        }),
    ],
  });
}
function _(_) {
  let _ = _(_.publishedFileId);
  if (!_.isSuccess || !_.data) return null;
  let [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(_.rgContentDescriptors),
    _ = _.some((_) => _ !== void 0),
    _ = (_) => (_) => {
      let _ = [_];
      _ ? _.push(..._(_)) : _.push(..._(_));
      let _ = [..._];
      for (let _ of _)
        _ === _ in _.data.content_descriptorids ? (_[_] = void 0) : (_[_] = _);
      _(_);
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          onClose: () => _(!1),
          strOKLabel: `OK`,
          strCancelLabel: `Cancel`,
          onOK: () => {
            _(!1), _.setContentDescriptors(_);
          },
          strTitle: _(`#ContentDescriptor`),
          children: [5, 2, 1, 4, 3].map((_) =>
            (0, _.jsx)(
              _,
              {
                eContentDescriptor: _,
                bContentDescriptorEnabled:
                  _[_] === void 0 ? _ in _.data.content_descriptorids : _[_],
                setContentDescriptorEnabled: _(_),
              },
              _,
            ),
          ),
        }),
      (0, _.jsxs)(`div`, {
        className: _(_ ? _ : ``, _),
        children: [
          (0, _.jsx)(`button`, {
            onClick: () => _(!0),
            children: `Update content descriptors`,
          }),
          _ &&
            (0, _.jsx)(`button`, {
              onClick: () => {
                _([void 0, void 0, void 0, void 0, void 0]),
                  _.setContentDescriptors([
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                  ]);
              },
              children: `X`,
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    children: (0, _.jsxs)(`label`, {
      children: [
        (0, _.jsx)(`input`, {
          type: `checkbox`,
          checked: _.bContentDescriptorEnabled,
          onChange: (_) => _.setContentDescriptorEnabled(_.target.checked),
        }),
        _(_.eContentDescriptor),
      ],
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: _(_.bHideAsIncompatible === void 0 ? `` : _, _),
    children: [
      (0, _.jsx)(`button`, {
        onClick: () => _.setHideAsIncompatible(!0),
        children: `Hide as incompatible`,
      }),
      _.bHideAsIncompatible !== void 0 &&
        (0, _.jsx)(`button`, {
          onClick: () => _.setHideAsIncompatible(void 0),
          children: `X`,
        }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: _(_.bMarkAsSuspicious === void 0 ? `` : _, _),
    children: [
      (0, _.jsx)(`button`, {
        onClick: () => _.setMarkAsSuspicious(!0),
        children: `Mark as suspicious`,
      }),
      _.bMarkAsSuspicious !== void 0 &&
        (0, _.jsx)(`button`, {
          onClick: () => _.setMarkAsSuspicious(void 0),
          children: `X`,
        }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: _(_.bBanUpvoters === void 0 ? `` : _, _),
    children: [
      (0, _.jsx)(`button`, {
        onClick: () => _.setBanUpvoters(!0),
        children: `Ban upvoters`,
      }),
      _.bBanUpvoters !== void 0 &&
        (0, _.jsx)(`button`, {
          onClick: () => _.setBanUpvoters(void 0),
          children: `X`,
        }),
    ],
  });
}
function _(_) {
  let _ = _(_.publishedFileId);
  if (!_.isSuccess || !_.data) return null;
  let [_, _] = (0, _.useState)(_.rgRestrictedCountries),
    _ = _(_.data),
    _ = (0, _.useMemo)(() => {
      let _ = !1;
      for (let _ of Object.keys(_))
        if (_.rgRestrictedCountries[_] !== _[_]) {
          _ = !0;
          break;
        }
      if (!_) {
        for (let _ of Object.keys(_.rgRestrictedCountries))
          if (_.rgRestrictedCountries[_] !== _[_]) {
            _ = !0;
            break;
          }
      }
      return _;
    }, [_.data, _.rgRestrictedCountries]),
    [_, _] = (0, _.useState)(!1),
    _ = () => {
      _.setRestrictedCountries(_), _(!1);
    },
    _ = () => {
      _.setRestrictedCountries({});
    },
    _ = (_) => (_) => {
      let _ = _.target.checked,
        _ = {
          ..._,
        };
      _[_] === _ ? delete _[_] : (_[_] = _), _(_);
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          onClose: () => _(!1),
          strOKLabel: `OK`,
          strCancelLabel: `Cancel`,
          onOK: _,
          strTitle: `Countries to restrict in`,
          children: (0, _.jsx)(`div`, {
            className: `Ny7bSIdEJtg-`,
            children: Object.entries(_.countries).map(([_, _]) =>
              (0, _.jsx)(
                `div`,
                {
                  children: (0, _.jsxs)(`label`, {
                    children: [
                      (0, _.jsx)(`input`, {
                        type: `checkbox`,
                        value: _,
                        onChange: _(_),
                        checked: _[_] ?? !1,
                      }),
                      ` `,
                      _,
                    ],
                  }),
                },
                _,
              ),
            ),
          }),
        }),
      (0, _.jsxs)(`div`, {
        className: _(_ ? _ : ``, _),
        children: [
          (0, _.jsx)(`button`, {
            onClick: () => _(!0),
            children: `Update country restriction`,
          }),
          _ &&
            (0, _.jsx)(`button`, {
              onClick: _,
              children: `X`,
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { steamid: _ } = _,
    _ = _(_),
    _ = _.data ? _(_.data) : ``;
  return !_.isSuccess || !_.data
    ? (0, _.jsx)(_, {})
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            _: _,
            children: (0, _.jsx)(_, {
              playerLinkDetails: _.data,
              size: `X-Small`,
              alt: `Reported Account`,
            }),
          }),
          (0, _.jsx)(_, {
            _: _,
            children: _.data.public_data?.persona_name,
          }),
        ],
      });
}
var _ = _({
    Component: _,
    Actions: {
      GetChatGroupSummary: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `GetChatGroupSummary`,
      ),
      GetPublishedFileDetails: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `GetPublishedFileDetails`,
      ),
      GetClanInfo: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `GetClanInfo`,
      ),
      SetForumCommentHidden: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `SetForumCommentHidden`,
      ),
      SendCommunityMessage: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `SendCommunityMessage`,
      ),
      HubBanUser: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `HubBanUser`,
      ),
      HubUnbanUser: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `HubUnbanUser`,
      ),
      GetHubBanStatus: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `GetHubBanStatus`,
      ),
      CommunityBanUser: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `CommunityBanUser`,
      ),
      SendSupportMessage: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `SendSupportMessage`,
      ),
      MarkForContentCheckTraining: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `MarkForContentCheckTraining`,
      ),
      GetSupportMessages: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `GetSupportMessages`,
      ),
      TradeBanUser: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `TradeBanUser`,
      ),
      DeleteCommentsForUser: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `DeleteCommentsForUser`,
      ),
      MarkForumTopicAsSuspicious: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `MarkForumTopicAsSuspicious`,
      ),
      GetClanRanks: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `GetClanRanks`,
      ),
      GetSupportPermissions: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `GetSupportPermissions`,
      ),
      GetAppRights: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `GetAppRights`,
      ),
      GetAccountData: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `GetAccountData`,
      ),
      ClearContentCheckResult: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `ClearContentCheckResult`,
      ),
      GetLanguageForUser: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `GetLanguageForUser`,
      ),
      GetQuickText: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `GetQuickText`,
      ),
      GetFriendChatReportMetadata: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `GetFriendChatReportMetadata`,
      ),
      GetChatGroupReportMetadata: _(
        `-pSGEpw3p8dPIafFDVxNLQ-lKnjpyFM_Diug6aRb-rw`,
        `GetChatGroupReportMetadata`,
      ),
    },
  }),
  _ = `moderation_blur_images`;
function _() {
  let { maxModeratorLevel: _, subjectKey: _ } = _.useLoaderData(),
    [_, _] = (0, _.useState)(_().data?.preferred_level ?? 0),
    [_, _] = (0, _.useState)(() => {
      let _ = window.localStorage?.getItem(_);
      return !_ || _.toLowerCase() === `true`;
    }),
    _ = (_) => {
      window.localStorage.setItem(_, _.toString()), _(_);
    };
  return _
    ? (0, _.jsxs)(_, {
        value: {
          eMaxModeratorLevel: _,
          eModeratorLevel: _,
          bBlurImages: _,
          setModeratorLevel: _,
          setBlurImages: _,
        },
        children: [
          (0, _.jsx)(_, {}),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                subjectKey: _,
              }),
            }),
          }),
        ],
      })
    : (0, _.jsx)(_, {
        value: {
          eMaxModeratorLevel: _,
          eModeratorLevel: _,
          bBlurImages: _,
          setModeratorLevel: _,
          setBlurImages: _,
        },
        children: (0, _.jsx)(_, {}),
      });
}
function _(_) {
  let _ = _(),
    { subjectKey: _, idxCurrentSubject: _ } = _.useLoaderData(),
    { eModeratorLevel: _ } = (0, _.useContext)(_);
  if (!_.data) return null;
  let _ =
      _.data.findIndex((_) =>
        _.kind !== _?.kind || _.type !== _?.type
          ? !1
          : _.kind === `group`
            ? _.group_id === _.group_id
            : _.kind === `single` && _.subject.subject_id === _._,
      ) != -1,
    _ = _ > 0 ? _.data[_ - 1] : null,
    _ = null;
  return (
    (_ = _
      ? _ < _.data.length - 1
        ? _.data[_ + 1]
        : null
      : _ < _.data.length
        ? _.data[_]
        : null),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            _ &&
              (0, _.jsx)(_, {
                _: _(_),
                children: `« Previous`,
              }),
            (0, _.jsx)(_, {
              _: `/moderation/`,
              children: `Home`,
            }),
            _ &&
              (0, _.jsx)(_, {
                _: _(_),
                children: `Next »`,
              }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          children: [`Moderating as: `, _(_)],
        }),
      ],
    })
  );
}
function _(_) {
  let { subjectKey: _ } = _,
    _ = (0, _.useRef)(null),
    { idxCurrentSubject: _, eAccountTrustScore: _ } = _.useLoaderData(),
    [_, _] = (0, _.useState)(_ != -1),
    _ = _(),
    _ = !!_.data?.length,
    _ = _.data?._(_ + 1);
  !_ && _ > 0 && (_ = _.data?._(0));
  let _ = _.type === 6 || _.type === 4 || _.type === 5;
  switch (_.type) {
    case 1:
      return (0, _.jsx)(_, {
        subjectKey: _,
      });
    default:
      return (0, _.jsxs)(
        _,
        {
          children: [
            _ &&
              !_ &&
              (0, _.jsx)(_, {
                eSubjectType: _.type,
                onClose: () => _(!1),
              }),
            (0, _.jsx)(_, {
              refSelectableRoot: _,
              nextSubject: _,
            }),
            (0, _.jsxs)(`div`, {
              ref: _,
              children: [
                _ &&
                  (0, _.jsx)(_, {
                    subjectKey: _,
                    eAccountTrustScore: _,
                  }),
                _.type === 3 &&
                  (0, _.jsx)(_, {
                    subjectKey: _,
                  }),
              ],
            }),
          ],
        },
        `${_.type}_${_.group_id}`,
      );
  }
}
function _(_) {
  let { eSubjectType: _, onClose: _ } = _,
    _ = (0, _.useContext)(_),
    _ = _(_);
  return (0, _.jsx)(_, {
    strTitle: _.Localize(`#moderation_claim_more`),
    strDescription: _.Localize(`#moderation_claim_more_desc`),
    strOKLabel: _.Localize(`#moderation_claim_subjects`),
    strCancelLabel: _.Localize(`#Button_Close`),
    onOK: async () => {
      let _ = await _.mutateAsync(_.eModeratorLevel),
        _ = _?.subjects?._(0);
      !_ &&
        _.eMaxModeratorLevel != 0 &&
        ((_ = await _.mutateAsync(0)), (_ = _?.subjects?._(0))),
        _ && _(_(_)),
        _();
    },
    onClose: _,
  });
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };

// <script>
"use strict";

var g_bHalt = false;
var g_IncludeGameStats = false;

window.CServerInterface = function( builder )
{
	// Get token

	this.m_strSteamID = false;

	this.m_nLastTick = false
	this.m_bRequestUpdates = false;
	this.m_protobufMessageBuilder = builder;
	this.m_protobuf_GetGameDataResponse = builder.build( "CTowerAttack_GetGameData_Response" );
	this.m_protobuf_GetPlayerNamesResponse = builder.build( "CTowerAttack_GetPlayerNames_Response" );
	this.m_protobuf_GetPlayerDataResponse = builder.build( "CTowerAttack_GetPlayerData_Response" );
	this.m_protobuf_UseAbilitiesResponse = builder.build( "CTowerAttack_UseAbilities_Response" );
	this.m_protobuf_ChooseUpgradeResponse = builder.build( "CTowerAttack_ChooseUpgrade_Response" );
	this.m_protobuf_UseBadgePointsResponse = builder.build( "CTowerAttack_UseBadgePoints_Response" );

	var instance = this;

	this.m_WebAPI = false;//new CWebAPI( rgResult.webapi_host, rgResult.webapi_host_secure, rgResult.token );


}

CServerInterface.prototype.Connect = function( callback )
{
	var instance = this;

	$J.ajax({
		url: 'http://steamcommunity.com/minigame/gettoken',
		dataType: "json"
	}).success(function(rgResult){
		if( rgResult.success == 1)
		{
			instance.m_strSteamID = rgResult.steamid;
			instance.m_strWebAPIHost = rgResult.webapi_host;
			instance.m_WebAPI = new CWebAPI( rgResult.webapi_host, rgResult.webapi_host_secure, rgResult.token );
			callback(rgResult);
		}
	});
}


CServerInterface.prototype.GetGameTuningData = function( callback )
{
	var rgParams = {
		game_type: 1,
		gameid: this.m_nGameID
	};

	var instance = this;

	this.m_WebAPI.ExecJSONP( 'ITowerAttackMiniGameService', 'GetTuningData',  rgParams, true, null, 15 )
		.done( callback )
		.fail( function(err)
		{
			console.log("FAILED");
			console.log(err);
			g_bHalt = true;
		});

}

CServerInterface.prototype.GetGameData = function( callback, error, bIncludeStats )
{
	var rgParams = {
		gameid: this.m_nGameID,
		include_stats: ( bIncludeStats || g_IncludeGameStats ) ? 1 : 0,
		format: 'protobuf_raw'
	};

	var instance = this;

	$J.ajax({
		url: this.m_WebAPI.BuildURL( 'ITowerAttackMiniGameService', 'GetGameData', false ),
		data: rgParams,
		xhrFields : {
			responseType : 'arraybuffer'
		},
		dataType : 'native'
	}).success(function(rgResult){
		var message = instance.m_protobuf_GetGameDataResponse.decode(rgResult);
		var result = { 'response': message.toRaw( true, true ) };
		callback( result );
	} )
	.fail( error );
}

CServerInterface.prototype.GetPlayerNames = function( callback, error, rgAccountIDs )
{
	var rgParams = {
		gameid: this.m_nGameID,
		accountids: rgAccountIDs && rgAccountIDs.length < 100 ? rgAccountIDs : null,
	};

	var instance = this;

	var rgRequest = {
		'input_json': V_ToJSON( rgParams ),
		'format': "protobuf_raw",
	};

	$J.ajax({
		url: this.m_WebAPI.BuildURL( 'ITowerAttackMiniGameService', 'GetPlayerNames', false ),
		data: rgRequest,
		xhrFields : {
			responseType : 'arraybuffer'
		},
		dataType : 'native'
	}).success(function(rgResult){
		var message = instance.m_protobuf_GetPlayerNamesResponse.decode(rgResult);
		var result = { 'response': message.toRaw( true, true ) };
		callback( result );
	} )
	.fail( error );
}

CServerInterface.prototype.GetPlayerData = function( callback, error, bIncludeTechTree )
{
	var rgParams = {
		gameid: this.m_nGameID,
		steamid: g_steamID,
		include_tech_tree: (bIncludeTechTree) ? 1 : 0,
		format: 'protobuf_raw'
	};

	var instance = this;

	$J.ajax({
		url: this.m_WebAPI.BuildURL( 'ITowerAttackMiniGameService', 'GetPlayerData', false ),
		data: rgParams,
		xhrFields : {
			responseType : 'arraybuffer'
		},
		dataType : 'native'
	}).success(function(rgResult){
		var message = instance.m_protobuf_GetPlayerDataResponse.decode(rgResult);
		var result = { 'response': message.toRaw( true, true ) };
		callback( result );
	} )
	.fail( error );
}

CServerInterface.prototype.UseAbilities = function( callback, failed, rgParams )
{
	rgParams["gameid"] = this.m_nGameID;

	var instance = this;

	var rgRequest = {
		'input_json': V_ToJSON( rgParams ),
		'access_token': instance.m_WebAPI.m_strOAuth2Token,
		'format': "protobuf_raw",
	};

	$J.ajax({
		url: this.m_WebAPI.BuildURL( 'ITowerAttackMiniGameService', 'UseAbilities', true ),
		method: 'POST',
		data: rgRequest,
		xhrFields : {
			responseType : 'arraybuffer'
		},
		dataType : 'native'
	}).success(function(rgResult){
		var message = instance.m_protobuf_UseAbilitiesResponse.decode(rgResult);
		var result = { 'response': message.toRaw( true, true ) };
		if ( result.response.player_data )
		{
			result.response.player_data.active_abilities_bitfield = result.response.player_data.active_abilities_bitfield ? parseInt( result.response.player_data.active_abilities_bitfield ) : 0;
		}
		if ( result.response.tech_tree )
		{
			result.response.tech_tree.unlocked_abilities_bitfield = result.response.tech_tree.unlocked_abilities_bitfield ? parseInt( result.response.tech_tree.unlocked_abilities_bitfield ) : 0;
		}
		callback( result );
	} )
	.fail( failed );
}

CServerInterface.prototype.ChooseUpgrades = function( callback, upgrades )
{
	var rgParams = {
		'gameid': this.m_nGameID,
		'upgrades': upgrades
	};

	var instance = this;

	var rgRequest = {
		'input_json': V_ToJSON( rgParams ),
		'access_token': instance.m_WebAPI.m_strOAuth2Token,
		'format': "protobuf_raw"
	};

	$J.ajax({
		url: this.m_WebAPI.BuildURL( 'ITowerAttackMiniGameService', 'ChooseUpgrade', true ),
		method: 'POST',
		data: rgRequest,
		xhrFields : {
			responseType : 'arraybuffer'
		},
		dataType : 'native'
	}).success(function(rgResult){
		var message = instance.m_protobuf_ChooseUpgradeResponse.decode(rgResult);
		var result = { 'response': message.toRaw( true, true ) };
		if ( result.response.tech_tree )
		{
			result.response.tech_tree.unlocked_abilities_bitfield = result.response.tech_tree.unlocked_abilities_bitfield ? parseInt( result.response.tech_tree.unlocked_abilities_bitfield ) : 0;
		}
		callback( result );
	} )
	.fail( function(err)
	{
		console.log("FAILED");
		console.log(err);
	});
}

CServerInterface.prototype.UseBadgePoints = function( callback, abilityItems )
{
	var rgParams = {
		'gameid': this.m_nGameID,
		'ability_items': abilityItems
	};

	var instance = this;

	var rgRequest = {
		'input_json': V_ToJSON( rgParams ),
		'access_token': instance.m_WebAPI.m_strOAuth2Token,
		'format': "protobuf_raw"
	};

	$J.ajax({
		url: this.m_WebAPI.BuildURL( 'ITowerAttackMiniGameService', 'UseBadgePoints', true ),
		method: 'POST',
		data: rgRequest,
		xhrFields : {
			responseType : 'arraybuffer'
		},
		dataType : 'native'
	}).success(function(rgResult){
		var message = instance.m_protobuf_UseBadgePointsResponse.decode(rgResult);
		var result = { 'response': message.toRaw( true, true ) };
		if ( result.response.tech_tree )
		{
			result.response.tech_tree.unlocked_abilities_bitfield = result.response.tech_tree.unlocked_abilities_bitfield ? parseInt( result.response.tech_tree.unlocked_abilities_bitfield ) : 0;
		}
		callback( result );
	} )
	.fail( function(err)
	{
		console.log("FAILED");
		console.log(err);
	});
}

CServerInterface.prototype.QuitGame = function( callback )
{
	var rgParams = {
		'gameid': this.m_nGameID,
	};


	var instance = this;

	var rgRequest = {
		'input_json': V_ToJSON( rgParams )
	};

	this.m_WebAPI.ExecJSONP( 'IMiniGameService', 'LeaveGame',  rgRequest, true, null )
		.done( callback )
		.fail( function(err)
		{
			console.log("FAILED");
			console.log(err);
		});

}

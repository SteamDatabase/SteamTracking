
/***************************
 *
 * Typedefs
 *
 **************************/

/**
 * @typedef {id:string, title:string, text:string, type:string, multi_select:boolean, select_min:number, select_max:number, preselect:false, sort:string, choices:Array.<LabelValue>} SurveyQuestion
 */

/**
 * @typedef {name:string, value:string} NameValue
 */

/**
 * @typedef {label:string, value:string} LabelValue
 */

/**
 * @typedef {name:string, label:string, value:string} NameLabelValue
 */

/**
 * @typedef {name:string, label:string, value:string, count:number} NameLabelValueCount
 */

/**
 * @typedef {tagid:number, name:string, count:number} Tag
 */

/**
 * @typedef {tagid:number, name:string, count:number, norm_count:number} ScoredTag
 */

/**
 * @typedef {object:Object, title:string, url:string} HistoryBit
 */

/**
 * @typedef {id:string,html:string,count:number,label:string} HTMLBit
 */

/**
 * @typedef {tagid:number,name:string,is_reported:bool,report_type:int,approved:bool,weight:int} UserTag
 */

/**
 * @typedef {tagid:int,name:string,count:int} AppTag
 */

/**
 * @callback VoidCallback
 */

/**
 * @callback DataCallback
 * @param {Object} data
 */

/********************************
 *
 * Global variables
 *
 *******************************/

/**
 * The questions in the survey
 * @type {Array.<SurveyQuestion>}
 */
var questions = null;

/**
 * The current question id, starting at 0.
 * @type {number}
 */
var currentQuestion = -1;

/**
 * For every question, a list of responses for it. The response
 * `name` is the tag's name, the response `value` is the tag's tagid.
 * @type Array.<Array.<NameValue>>
 */
var rgResponses = [];

/**
 * An array of tags derived from the user's answers to questions.
 * @type Array.<Tag>
 */
var tagProfile = [];

/**
 * An array of tagids that is a reduced but semantically equivalent form of the
 * tags listed in  the `tagProfile`. This is achieved by removing redundant tags
 * like "RPG" and "Strategy" if a term like "Strategy RPG" that implies them is
 * present, and combining simple terms like "First-Person" and "Shooter" into an
 * equivalent complex term like "FPS".
 * @type {Array.<number>}
 */
var simpleTagProfile = [];

/**
 * A sorted list of tags that are statistically associated with the current tag
 * selections. `count` is the raw association score (higher is better) and
 * `norm_count` is the normalized version of that score ranging from 1.0-0.0
 * @type {Array.<ScoredTag>}
 */
var tagAssociations = [];

/**
 * A list of tagids which represents an expanded(hydrated) set of tags derived
 * from the user's current choices. IE, if you pick "Strategy RPG", the expanded
 * list will include "Strategy" and "RPG" as well.
 * @type {Array.<number>}
 */
var expandedTags = [];

/**
 * A list of GET parameters supplied with the URL
 * @type {Array.<string>}
 */
var params = [];

/**
 * If true, skip directly to the summary page with a bunch of prefilled results
 * @type {boolean}
 */
var doTest = false;

/**
 * The appid of the app you want to pretend that you're tagging. If supplied,
 * the survey will fetch its details, display its title, and scan its store
 * description for tags
 * @type {number}
 */
var appid = 0;

/**
 * A list of all the tags mentioned in the app's store
 * description
 * @type Array.<Tag>
 */
var tagsInDesc = [];

/**
 * A list of all the tags derived from the store's genre checkboxes
 * @type Array.<number>
 */
var tagsFromMetaGenres = [];

/**
 * A list of all the tags derived from the store category checkboxes (multiplayer stuff)
 * @type Array.<number>
 */
var tagsFromStoreCategories = [];

/**
 * A map of tagids to arrays of category strings
 */
var categoriesByTag = {};

/**
 * A map of category names to weight values
 */
var categoryWeights = {};

/**
 * A map of category names to (a map of tagids to weight values)
 */ 
var categorySubWeights = {};

/**
 * A map of tagids to localized tag names
 */
var tagNames = {};

/**
 * Watches the end page for changes
 * @type MutationObserver
 */
var endPageObserver = null;

/**
 * Watches the drag and drop list for changes
 * @type MutationObserver
 */
var sortObserver = null;

/**
 * A list of all the tags the user (dev) has applied themselves (before opening
 * this taxonomy survey)
 * @type Array.<UserTag>
 */
var devTags = null;

/**
 * A list of all the tags everyone has applied to the game before
 * @type Array.<AppTag>
 */
var communityTags = null;

/**
 * If true, it means that the only tags that have been applied are developer tags
 */
var hasDevTagsOnly = false;

/**
 * Number of tags that are indexed in search
 */
var maxTags = 15;

/**
 * Can we count on query expansion being available?
 */
var queryExpansionExists = false;

/**
 * List of tagids in the priority that reflects the devs' preferences
 * @type Array.<number>
 */
var rgManualTagidRanking = [];

var manageBansLink;

var rgRankedTagProfile = [];

var bDiagnostics = false;

var numChoicesPreselected = -1;

var nScroll = 0;

/**
 * Load parameters from the URL (if there are any) and then start the survey
 * When this is moved to the partner site we will draw this information from the
 * backend itself; GET parameters are a quick way to prototype this functionality
 * for now
 * @param {number} nAppid
 * @param {data} TaxonomyInitData
 */
function initSurvey(data)
{
	appid = data.appid;
	tagsInDesc = data.tagsFromText;
	categoriesByTag = data.categoriesByTag;
	categoryWeights = data.categoryWeights;
	categorySubWeights = data.categorySubWeights;
	tagNames = data.tagNames;
	devTags = data.devTags;
	communityTags = data.communityTags;
	manageBansLink = data.manageBansLink;
	
	tagsFromMetaGenres = data.tagsFromMetaGenres;
	tagsFromStoreCategories = data.tagsFromStoreCategories;
	
	window.onbeforeunload = checkDirtyWarning;
	
	startSurvey();
}

function checkDirtyWarning()
{
	var hasChanges = !checkRevertDisabled();
	if(hasChanges)
	{
		return 'You have unsaved changes in the Tag Wizard. Do you want to leave the Tag Wizard and discard your changes or stay on this page?';
	}
}

/**
 * Load the specified app's details, store them, and then call the callback
 * @param {VoidCallback} callback the function to call when the app has been loaded
 */

function loadAppThen(callback)
{
	//TODO:
	//The variables fetched here need to be moved to the appmgmt php backend so 
	//that they're already available by the time this JS loads
	
	/*
	getTaxonomySurveyBasics(appid, function(data)
	{
		if(data != null)
		{
			genreHierarchy = data.genreHierarchy;
			callback();
		}
	});
	*/
	
	//TODO: Need to handle the case where these calls fail
}

/**
 * Load & display the survey questions 
 */
function startSurvey()
{
	checkTest();
	
	//Load the survey questions from the included file:
	questions = survey_json.questions;
	var numInitialResponses = getInitialResponses();
	
	var profile = getTagProfile();
	var deltas = getDevVsCommunityTagDeltas();
	
	if(deltas.length <= 0)
	{
		hasDevTagsOnly = true;
	}
	
	/*
	if(doTest || numInitialResponses > 0)
	{
		setCurrentQuestion(questions.length-1);
		displayEndPage();
		return;
	}
	*/
	setCurrentQuestion(-1);
	displayStartPage();
	
	//nextQuestion();
}

function checkTest()
{
	params = getParams();
	bDiagnostics = params["diagnostics"] != null ? parseInt(params["diagnostics"][0]) > 0 : false;
	if(bDiagnostics)
	{
		console.log("DIAGNOSTICS ENABLED!")
	}
}

function getDevVsCommunityTagDeltas()
{
	var deltaTags = [];
	for(var i = 0; i < devTags.length; i++)
	{
		var userTag = devTags[i];
		var delta = userTag.weight;
		for(var j = 0; j < communityTags.length; j++)
		{
			var appTag = communityTags[j];
			if(userTag.tagid == appTag.tagid)
			{
				delta -= appTag.count;
				break;
			}
		}
		if(delta > 0)
		{
			deltaTags.push({
				tagid:userTag.tagid,
				name:userTag.name,
				count:delta
			});
		}
	}
	return deltaTags;
}

function getInitialResponses()
{
	numFound = 0;
	alreadyAdded = [];
	for(var i = 0; i < questions.length; i++)
	{
		rgResponses[i] = [];
		var question = questions[i];
		var choices = getQuestionChoices(question);
		for(var j = 0; j < choices.length; j++)
		{
			var choice = choices[j];
			var choiceFound = false;
			for(var k = 0; k < devTags.length; k++)
			{
				var userTag = devTags[k];
				if(choice.value == userTag.tagid)
				{
					choiceFound = true;
					break;
				}
			}
			if(!choiceFound)
			{
				for(var k = 0; k < communityTags.length; k++)
				{
					var appTag = communityTags[k];
					if(choice.value == appTag.tagid)
					{
						choiceFound = true;
						break;
					}
				}
			}
			if(!choiceFound)
			{
				for(var k = 0; k < tagsFromMetaGenres.length; k++)
				{
					var tagid = tagsFromMetaGenres[k];
					if(choice.value == tagid)
					{
						choiceFound = true;
						break;
					}
				}
			}
			if(!choiceFound)
			{
				for(var k = 0; k < tagsFromStoreCategories.length; k++)
				{
					var tagid = tagsFromStoreCategories[k];
					if(choice.value == tagid)
					{
						choiceFound = true;
						break;
					}
				}
			}
			if(choiceFound)
			{
				if(!valueIsInArray(choice.value, alreadyAdded))
				{
					storeResponse(i, choice.label, choice.value);
					alreadyAdded.push(choice.value);
					numFound++;
				}
			}
		}
	}
	return numFound;
}

/*************************************
 *
 * Question/Choice/Response functions
 *
 *************************************/
 
function onScroll()
{
	var choices = document.getElementById("choices");
	if(choices != null)
	{
		nScroll = choices.scrollTop;
	}
	else
	{
		nScroll = 0;
	}
}
 
/**
 * Save responses whenever the user clicks
 */
function onChange()
{
	saveResponse(function(){
		hilightAssociations();
	});
	var choices = document.getElementById("choices");
	if(choices != null)
	{
		choices.scrollTop = nScroll;
	}
}
 
/**
 * Called when a user clicks a choice, drives checkbox behavior
 * @param {number} i the desired choice
 */
function onClickChoice(i, isRadio)
{
	var choices = document.getElementsByClassName("input_choice");
	for(var j = 0; j < choices.length; j++)
	{
		if(isRadio && choices[j].id != "input_choice_"+i)
		{
			choices[j].checked = false;
		}
		else
		{
			if(!isRadio && choices[j].id == "input_choice_"+i && choices[j].checked == false)
			{
				var tagid = choices[j].value;
				removeResponse(tagid);
			}
		}
	}
	hilightAssociations();
}

function removeResponse(tagid)
{
	for(var i = 0; i < questions.length; i++)
	{
		var question = questions[i];
		var r = rgResponses[i];
		var toKill = -1;
		for(var j = 0; j < r.length; j++)
		{
			var response = r[j];
			if(response.value == tagid)
			{
				toKill = j;
				break;
			}
		}
		if(toKill != -1)
		{
			var removed = r.splice(toKill, 1);
		}
	}
}

/**
 * @param {string} id the string id of the question
 * @return {number} the array index of the question
 */
function getQuestionIndex(id)
{
	for(var i = 0; i < questions.length; i++)
	{
		var question = questions[i];
		if(question.id == id)
		{
			return i;
		}
	}
	return -1;
}

/**
 * @param {string} question_id
 * @return {NameValue}
 */
function getResponse(question_id)
{
	var i = getQuestionIndex(question_id);
	if(i != -1)
	{
		return rgResponses[i];
	}
	return null;
}

/*************************************
 *
 * Survey Functions
 *
 ************************************/

function onClickPrevious()
{
	onClickSomething(-1);
}

function onClickNext()
{
	onClickSomething(1);
}

function onClickFinish()
{
	onClickSomething(0);
}

function checkRevertDisabled()
{
	var els = document.getElementsByClassName("nav_button_revert");
	if(els != null && els.length > 0 && els[0] != null)
	{
		var el = els[0];
		if(el.getAttribute("class").indexOf("disabled") != -1)
		{
			return true;
		}
		return false;
	}
	return false;
}

function onClickCancelSurvey()
{
	var hasChanges = !checkRevertDisabled();
	var url = 'https://partner.steamgames.com' + "/apps/landing/"+appid;
	if(!hasChanges)
	{
		window.location.href = url;
		return;
	}
	
	var strTitle = 'Leave the Survey?';
	var strBody  = 'You have unapplied changes which will be lost if you leave now.';
	var strYes   = 'Leave Survey';
	var strNo    = 'Don\'t Leave';
	
	ShowConfirmDialog(strTitle,strBody,strYes,strNo).done( function( strButton ) {
		if(strButton == "OK")
		{
			window.location.href = url;
		}
	} );
}

function onClickSection(qid)
{
	if(qid == "q_other")
	{
		qid = "q_tags_from_desc";
	}
	if(qid == "q_summary")
	{
		setCurrentQuestion(questions.length-1);
		displayEndPage();
		return;
	}
	setCurrentQuestion(getQuestionIndex(qid));
	displayCurrentQuestion();
}

function setCurrentQuestion(id)
{
	if(currentQuestion != id)
	{
		numChoicesPreselected = -1;
	}
	currentQuestion = id;
}

function recordManualTagRankingFromProfile(profile)
{
	var rgTagids = [];
	for(var i = 0; i < profile.length; i++)
	{
		rgTagids.push(profile[i].tagid);
	}
	rgManualTagidRanking = rgTagids;
}

function recordManualTagRanking()
{
	var tags = getManuallySortedTagListFromHTML();
	var tagids = [];
	for(var i = 0; i < tags.length; i++)
	{
		tagids.push(tags[i].tagid);
	}
	rgManualTagidRanking = tagids;
}

function getManuallySortedTagListFromHTML()
{
	var els = document.getElementsByClassName("summary_item");
	var tags = [];
	for(var i = 0; i < els.length; i++)
	{
		var el = els[i];
		var tagid = el.getAttribute("value");
		if(tagid == null) continue;
		var tag = {
			"name":getTagName(tagid),
			"tagid":tagid,
			"count":1 //just a placeholder
		};
		tags.push(tag);
	}
	return tags;
}

function onClickRevertTags()
{
	rgManualTagidRanking = tagsToTagids(getNaturalTagProfile())
	displayEndPage(false);
}

function onClickOptimizeTags()
{
	rgManualTagidRanking = [];
	displayEndPage(true);
}

function updateSortButtons()
{
	var tagProfile = getManuallySortedTagListFromHTML();
	
	var optDiv = document.getElementsByClassName("nav_button_optimize")[0];
	var optBtn = optDiv.childNodes[0];
	var revDiv = document.getElementsByClassName("nav_button_revert")[0];
	var revBtn = revDiv.childNodes[0];
	var pubDiv = document.getElementsByClassName("nav_button_publish")[0];
	var pubBtn = pubDiv.childNodes[0];
	var canDiv = document.getElementsByClassName("nav_button_cancel")[0];
	var canBtn = canDiv.childNodes[0];
	
	removeClass(pubDiv,"disabled");
	pubBtn.setAttribute("onclick",'onClickConfirmApplyTags()');
	
	if(areTagProfilesEqual(tagProfile, getOptimizedTagProfile()))
	{
		//Tags are already in optimized order, so disable optimize:
		addClass(optDiv,"disabled");
		optBtn.setAttribute("onclick",'');
	}
	else
	{
		//Tags aren't in optimized order, so enable optimize:
		removeClass(optDiv,"disabled");
		optBtn.setAttribute("onclick",'onClickOptimizeTags()');
	}
	
	if(areTagProfilesEqual(tagProfile, getNaturalTagProfile()))
	{
		//Tags are already in their natural order, so disable revert:
		addClass(revDiv,"disabled");
		revBtn.setAttribute("onclick",'');
	}
	else
	{
		//Tags aren't in their natural order, so enable revert:
		removeClass(revDiv,"disabled");
		revBtn.setAttribute("onclick",'onClickRevertTags()');
	}
}

function onClickConfirmApplyTags()
{
	var strTitle = 'Publish these tags?';
	var strBody  = 'Your title\'s tag profile will look like this:';
	var strYes   = 'Publish';
	var strNo    = 'Cancel';
	
	//Get all the elements in the drag and drop list
	var tags = getManuallySortedTagListFromHTML();
	var tagStr = "<ol>";
	for(var i = 0; i < tags.length; i++)
	{
		if(i == maxTags) break;
		tagStr += "<li>"+tags[i].name+"</li>";
	}
	tagStr += "</ol>";
	strBody += "<br><br>"+tagStr;
	strBody += 'If this is what you want, click \'Publish.\'';
	
	ShowConfirmDialog(strTitle,strBody,strYes,strNo).done( function( strButton ) {
		if(strButton == "OK")
		{
			ApplyTags();
		}
	} );
}

/**
 * Gets all the tags from the drag and drop list, assigns weights, and applies
 * them to the game
 */

function ApplyTags()
{
	//Get all the elements in the drag and drop list
	var tags = getManuallySortedTagListFromHTML();
	
	//Apply a nice gradient of weights to the list
	tags = finalizeTagProfileCounts(tags);
	
	//Split the list into tagids and corresponding weights
	var rgRankedTagids = [];
	for(var i = 0; i < tags.length; i++)
	{
		var tag = tags[i];
		rgRankedTagids.push(tag.tagid);
	}
	
	//Formulate the tag application POST request
	var rgParams = {
		appid: appid,
		sessionid: g_sessionID,
		rankedtagids: rgRankedTagids,
	};
	
	if(bDiagnostics)
	{
		rgParams.bDiagnostics = true;
	}
	
	var strTitle = 'Applying Tags';
	var strBody = 'Please wait. We\'re applying tags, flushing app information, and updating the search index. This might take a minute...';
	var Modal = ShowBlockingWaitDialog(strTitle, strBody);
	
	//Send the request
	$J.post( 'https://partner.steamgames.com/tagdata/forcetagranking', rgParams ).done(function ( response )
		{
			Modal.Dismiss();
			if(bDiagnostics)
			{
				console.log("****************");
				console.log("DIAGNOSTICS: ");
				console.log(JSON.stringify(response));
				console.log("****************");
			}
			if ( response.success == 1 )
			{
				if(response.finalTags != null)
				{
					communityTags = response.finalTags;
				}
				updateSortButtons();
				ShowAlertDialog( 'Success!', 'Your changes have been successfully published to Steam. It may take a few minutes before your Store Page has been updated.' );
			}
		}
	).fail( function( response ) {
		Modal.Dismiss();
		var responseText = "";
		if(response != null)
		{
			responseText = JSON.parse(response.responseText);
		}
		if ( responseText == "deltas_all_zero")
		{
			//Count this "failure" as a success because there was nothing to be done and so the dev's intent is still achieved
			ShowAlertDialog( 'Success!', 'Your changes have been successfully published to Steam. It may take a few minutes before your Store Page has been updated.' );
		}
		else
		{
			ShowAlertDialog( 'Error Publishing Changes', 'There was a problem trying to publish the changes. Please try again.' );
			if(bDiagnostics)
			{
				console.log("****************");
				console.log("DIAGNOSTICS: ");
				console.log(JSON.stringify(response));
				console.log("****************");
			}
		}
	});
}

/**
 * Return to the survey from the summary page
 */
function backToSurvey()
{
	setCurrentQuestion(0);;
	gotoQuestion(0);
}

/**
 * Display the requested question in the given direction
 * @param {number} direction -1 for "back", 1 for "forward", 0 for "stay here"
 */
function onClickSomething(direction)
{
	var question = questions[currentQuestion];
	var e = [];
	if(direction == 1)
	{
		e = validate(question);
	}
	if(e.length > 0)
	{
		displayErrors(e);
	}
	else
	{
		hideClasses(["question_title","question_text","choices"]);
		saveResponse(function(){
			nextQuestion(direction);
		});
	}
}

function hideClasses(arr)
{
	for(var i = 0; i < arr.length; i++)
	{
		var strClass = arr[i];
		var els = document.getElementsByClassName(strClass);
		if(els != null && els.length > 0)
		{
			var el = els[0];
			addClass(el, "hide-fancy");
		}
	}
}

/**
 * @param {number} direction -1 for "back", 1 for "forward", 0 for "go to end"
 */
function nextQuestion(direction)
{
	if(currentQuestion < 0)
	{
		setCurrentQuestion(0);
	}
	else
	{
		currentQuestion += direction;
	}
	
	if(direction != 0)
	{
		if(needToSkipNextQuestion(direction))
		{
			currentQuestion += direction;
			if(currentQuestion >= questions.length)
			{
				displayEndPage();
			}
			else
			{
				gotoQuestion(direction);
			}
			return;
		}
		gotoQuestion(direction);
	}
	else
	{
		displayEndPage();
	}
}

function needToSkipNextQuestion()
{
	if(currentQuestion >= questions.length) return false;
	var question = questions[currentQuestion];
	var numChoices = countQuestionChoices(question);
	if(numChoices <= 0)
	{
		return true;
	}
	return false;
}

/**
 * Attempt to display the current question, and if it fails, keep going in the 
 * given direction
 * @param {number} direction -1 for "back", 1 for "forward", 0 for "stay here"
 */
function gotoQuestion(direction)
{
	var success = displayCurrentQuestion();
	if(!success)
	{
		var nextQuestionNum = currentQuestion+direction;
		if(nextQuestionNum >= 0 && nextQuestionNum < questions.length)
		{
			nextQuestion(direction);
		}
	}
}

function storeResponse(index,name,value)
{
	if(rgResponses[index] == null)
	{
		rgResponses[index] = [];
	}
	var theResponses = rgResponses[index];
	var found = false;
	for(var i = 0; i < theResponses.length; i++)
	{
		var theResponse = theResponses[i];
		if(theResponse.value == value)
		{
			found = true;
			break;
		}
	}
	if(!found)
	{
		theResponses.push({name:name,value:value});
	}
}

/**
 * Gather info from all the choice inputs and save them to the responses, then 
 * call the callback
 * @param {VoidCallback} callback
 */
function saveResponse(callback)
{
	var currResponses = [];
	var choices = document.getElementsByClassName("choice");
	for(var i = 0; i < choices.length; i++)
	{
		var choice = choices[i];
		var id = choice.id;
		var childNodes = choice.children;
		var choiceInput = childNodes[0];
		var labelInput = childNodes[1];
		if(choiceInput.checked)
		{
			currResponses.push({name:labelInput.innerText,value:choiceInput.value});
		}
	}
	rgResponses[currentQuestion] = currResponses;
	displayCurrentQuestionSummary();
	
	//Update tag associations based on current tag choices
	getTagAssociations(callback);
}

/**
 * For the given choices, return all that are marked in our saved responses
 * @param Array.<NameValue> inputValues
 */
function getMarkedInputs(inputValues)
{
	var matches = [];
	for(var j = 0; j < questions.length; j++)
	{
		var q = questions[j];
		var response = getResponse(q.id);
		if(response != null && response.length > 0)
		{
			for(var i = 0; i < response.length; i++)
			{
				var r = response[i];
				var name = r.name;
				var value = r.value;
				for(var k = 0; k < inputValues.length; k++)
				{
					if(inputValues[k] == value)
					{
						matches.push(value);
					}
				}
			}
		}
	}
	return matches;
}

/**
 * Enforce validation rules for the given survey question
 * @param {SurveyQuestion} q
 * @return Array.<string> validation error messages, if any ([] indicates none)
 */
function validate(q)
{
	var e = [];
	if(q.multi_select)
	{
		var softMax = q.select_max != -1 ? Math.max(q.select_max, numChoicesPreselected) : -1;
		e = validateMultiSelect(q.select_min, softMax, e);
	}
	else
	{
		e = validateMultiSelect(1, 1, e);
	}
	return e;
}

/**
 * Validate that the user's choices are within the legal min and max
 * @param {min} number
 * @param {max} number
 * @param {Array.<string>} array to stash error messages in
 */
function validateMultiSelect(min, max, e)
{
	if(min === null || min === undefined) min = 0;
	if(max === null || max === undefined) max = -1;
	
	if(min == 0 && max == -1) return e;
	
	var choices = document.getElementsByClassName("input_choice");
	var numSelected = 0;
	for(var i = 0; i < choices.length; i++)
	{
		var choice = choices[i];
		if(choice.checked)
		{
			numSelected++;
		}
	}
	
	if(numSelected < min) e.push("Select at least " + min);
	if(numSelected > max) e.push("Select no more than " + max);
	
	return e;
}

/**
 * Turn a fill keyword into a list of choice objects
 * @param {string} fill keyword for what to fill with
 * @return Array.<LabelValue>
 */
function resolveFillChoices(fill)
{
	arr = fill.split("|");
	var fillThing = arr[1];
	var fillCriteria = arr[2];
	switch(fillThing)
	{
		case "from_users":
			if(communityTags != null)
			{
				var results = [];
				var rgNormal = getTagIdList(["supergenre","genre","subgenre","visuals","feature","theme","mood"]);
				for(var i = 0; i < communityTags.length; i++)
				{
					var communityTag = communityTags[i];
					if(false == valueIsInArray(communityTag.tagid, rgNormal))
					{
						var entry = {
							label:communityTag.name,
							value:communityTag.tagid
						}
						results.push(entry);
					}
				}
				return results;
			}
			return [];
			break;
		case "from_desc":
			//get tags from the store description
			if(tagsInDesc != null)
			{
				var results = [];
				for(var i = 0; i < tagsInDesc.length; i++)
				{
					var entry = {
						label:tagsInDesc[i].name,
						value:tagsInDesc[i].tagid
					};
					results.push(entry);
				}
				return results;
			}
			return [];
			break;
		case "theme_mood":
			//get theme and mood tags
			var themes = getCategory("theme");
			var moods = getCategory("mood");
			var themeMood = [];
			for(var i = 0; i < themes.length; i++){
				var value = themes[i].value;
				themeMood.push({label:themes[i].label,value:themes[i].value});
			}
			for(var i = 0; i < moods.length; i++){
				var value = moods[i].value;
				var skip = false;
				for(var j = 0; j < themes.length; j++){
					if(themes[j].value == value){
						skip = true;
					}
				}
				if(!skip){
					themeMood.push({label:moods[i].label,value:moods[i].value});
				}
			}
			return themeMood;
			break;
		default:
			//get a different category of tags
			return getCategory(fillThing);
			break;
	}
	
	return [{label:"ERROR",value:"error"}];
}

/**
 * Replace variables in the survey question text
 * @param {string} the raw text, including variable flags
 */
function replaceVariables(text)
{
	var s = text;
	var flags = [];
	var values = [];
	for(var i = 0; i < questions.length; i++)
	{
		var response = rgResponses[i];
		var question = questions[i];
		flags.push("$ANSWER{"+question.id+"}");
		if(response != null)
		{
			var names = [];
			for(var j = 0; j < response.length; j++)
			{
				names.push(response[j].name);
			}
			values.push(names.join(", "));
		}
		else
		{
			values.push("");
		}
	}
	for(var i = 0; i < flags.length; i++)
	{
		s = s.replace(flags[i], values[i]);
	}
	return s;
}

/**
 * Get localized text for "Step X of Y"
 * @param {int} step
 * @param {int} max
 * @return {string} The localized text
 */
function getStepText(step,max)
{
	var str = 'Step %1$s of %2$s';
	str = str.replace("%1$s",step.toString());
	str = str.replace("%2$s",max.toString());
	return str;
}

/**
 * Get localized body text for a given question
 * @param {string} id the question id
 * @return {string} The localized text
 */
function getQText(id)
{
	switch(id){
		case "start_text":
			return 'The tags associated with your title help users discover it on Steam.<br><br>In this wizard, you will select Steam tags to associate with your title. Then you will prioritize this list. The top fifteen tags will help Steam determine where to surface your game to customers across browse veiws, search results, and recommendations.<br><br>Let\'s begin!<br><br>' + getBanTagsText();
			break;
		case "end_text":
			return 'As a last step, please prioritize your tags using Drag & Drop.<BR><BR>\nThe top 15 tags are used to determine where your title is displayed throughout Steam. Tags at the top of your list are weighted most heavily when displaying or recommending your title. <BR><BR>\nWe suggest prioritization which places sub-genres and other tags which are both meaningful and specific near the top. <BR><BR>\nWhen you\'re happy with your work, click Publish. Please note that any unfinished changes will be lost.' 
			break;
		case "end_text_devtags":
			return 
			break;
		case "q_software_genre":    return 'Looks like this is a software application. Choose one or two software genres to categorize your title.';    break;
		case "q_super_genre":    return 'To begin, choose one or two top-level genres to categorize your title.';    break;
		case "q_genre":          return 'Select one or two genres to describe your title.<BR><BR>The <strong>brighter ones</strong> in this list are common among titles with top-level genres similar to yours, and may be more relevant than others.';         break;
		case "q_sub_genre":      return 'Select up to three sub-genres to describe your title.<BR><BR>The <strong>brighter ones</strong> in this list are common among titles with genres similar to yours, and may be more relevant than others.';      break;
		case "q_visuals":        return 'Select any relevant visuals and viewpoint tags to describe your title.<br><br>The <strong>brighter ones</strong> in this list are common among titles with tags similar to yours, and may be more relevant than others.';       break;
		case "q_theme_mood":     return 'Select any relevant theme and/or mood tags to describe your title.<br><br>The <strong>brighter ones</strong> in this list are common among titles with tags similar to yours, and may be more relevant than others.';     break;
		case "q_features":       return 'Select any relevant feature tags to describe your title.<BR><BR>The <strong>brighter ones</strong> in this list are common among titles with tags similar to yours, and may be more relevant than others.';      break;
		case "q_players":        return 'Select any relevant player tags to describe your title.<BR><BR>The <strong>brighter ones</strong> in this list are common among titles with tags similar to yours, and may be more relevant than others.';       break;
		case "q_other":          return 'Any other tags.';         break;
		case "q_tags_from_desc": return 'The tags in this list were found in your title\'s store description.<br><br>Select the ones you feel are additive in describing your title to customers, or simply skip to the next step.';  break;
		case "q_tags_from_users":
			return 'These additional tags have been applied to your title by the Steam community of users.<br><br>We suggest keeping these in place unless any are explicitly inaccurate.<br><br>' + getBanTagsText();
		break;
		case "q_summary":        return '#App_Taxonomy_Survey_QSummaryText';
		case "none_defined"    : return 'None defined';       
		case "top_tags"        : return 'Top 15 Tags, by weight—Drag & Drop to reorder';
		break;
	}
	return "";
}

function getBanTagsText()
{
	return '<span class="manage_bans">'+
				manageBansLink+
			'</span>'
}

/**
 * Get localized title text for a given question
 * @param {string} id the question id
 * @return {string} The localized text
 */
function getQTitle(id)
{
	switch(id){
		case "start_title":      return 'Your Tags';
		case "end_title":        return 'Your Tags';           break;
		case "q_software_genre": return 'Software Genres';    break;
		case "q_super_genre":    return 'Top-Level Genres';    break;
		case "q_genre":          return 'Genres';         break;
		case "q_sub_genre":      return 'Sub-Genres';      break;
		case "q_visuals":        return 'Visuals & Viewpoint';       break;
		case "q_theme_mood":     return 'Themes & Moods';     break;
		case "q_features":       return 'Features';      break;
		case "q_players":        return 'Players';       break;
		case "q_other":          return 'Other';         break;
		case "q_summary":        return 'Review';
		         break;
		case "q_tags_from_desc": return 'What Else?';  break;
		case "q_tags_from_users":return 'User Tags'; break;
	}
	return "";
}

/*******************************************
 *
 * Tag functions
 *
 ******************************************/


/**
 * @param {string} cat the category of tags you want
 * @return {Array.<LabelValue>} all the tags that match that category
 */
function getCategory(cat)
{
	var keys = Object.keys(categoriesByTag);
	var matches = [];
	for(var i = 0; i < keys.length; i++)
	{
		var key = keys[i];
		var cats = getCategories(key);
		for(var j = 0; j < cats.length; j++)
		{
			var tagCat = cats[j];
			if(tagCat == cat)
			{
				matches.push(key);
			}
		}
	}
	var results = [];
	for(var i = 0; i < matches.length; i++)
	{
		var key = matches[i];
		var tagName = tagNames[key];
		results.push({label:tagName,value:key});
	}
	return results;
}

/**
 * @param {int} the tagid you want categories for
 * @return {array<string>} the categories associated with that tag
 */
function getCategories(tagid)
{
	var cats = categoriesByTag[tagid];
	if(cats == null) return [];
	return cats;
}

/**
 * Return whether the tag matches any of the categoriesByTag
 * @param {number} tagids
 * @param {array.<string>} rgCategories
 * @return {boolean}
 */
function tagMatchesAnyCategory(tagid, rgCategories)
{
	for(var i = 0; i < rgCategories.length; i++)
	{
		var cat = rgCategories[i];
		if(tagMatchesCategory(tagid, cat)) return true;
	}
	return false;
}

/**
 * Return whether the given tag belongs to the given category
 * @param {number} tagid
 * @param {string} category
 * @return {boolean}
 */
function tagMatchesCategory(tagid, category)
{
	var tagCats = getCategories(tagid);
	if(Array.isArray(category))
	{
		for(var i = 0; i < category.length; i++)
		{
			var cat = category[i];
			for(var j = 0; j < tagCats.length; j++)
			{
				if(cat == tagCats[j])
				{
					return true;
				}
			}
		}
	}
	else
	{
		for(var j = 0; j < tagCats.length; j++)
		{
			if(category == tagCats[j])
			{
				return true;
			}
		}
	}
	return false;
}

/**
 * @param {Array.<number>} ids list of tagids
 * @return {Array.<string>} list of tag names corresponding to the tagids
 */
function getTagNames(ids)
{
	var names = [];
	for(var i = 0; i < ids.length; i++)
	{
		names.push(getTagName(ids[i]));
	}
	return names;
}

/**
 * Returns a list of tagids from the ones you've selected so far and filters the
 * genres for the most specific information. If you have genres it will suppress
 * supergenres, and if you have subgenres it will suppress genres and 
 * supergenres. This is particularly useful if you want good information out of
 * tag association.
 * @return {Array.<number>} list of tagids
 */
function getRelevantTagIdList()
{
	var tagids = getTagIdList();
	var hasSuperGenre = false;
	var hasGenre = false;
	var hasSubGenre = false;
	for(var i = 0; i < tagids.length; i++)
	{
		var tag = tagids[i];
		if(tagMatchesCategory(tag, ["supergenre"]))
		{
			hasSuperGenre = true;
		}
		if(tagMatchesCategory(tag, ["genre"]))
		{
			hasGenre = true;
		}
		if(tagMatchesCategory(tag, ["subgenre"]))
		{
			hasSubGenre = true;
		}
	}
	if(hasSuperGenre)
	{
		if(hasGenre || hasSubGenre)
		{
			tagids = getTagIdList(null,["supergenre"]);
			if(hasSubGenre)
			{
				tagids = getTagIdList(null,["supergenre","genre"]);
			}
		}
	}
	return tagids;
}

function getTopAndBottomTagIdNames(includeCategories=null, excludeCategories=null)
{
	var topTags = getTagIdListRanked(includeCategories, excludeCategories, true);
	var bottomTags = getTagIdListRanked(includeCategories, excludeCategories, false);
	var topNames = getTagNames(topTags);
	var bottomNames = getTagNames(bottomTags);
	
	if((topNames == null || topNames.length == 0) && (bottomNames == null || bottomNames.length == 0))
	{
		return "";
	}
	
	var topNameStr = topNames.join(", ");
	var bottomNameStr = bottomNames.join(", ");
	if(topNameStr != "")
	{
		if(bottomNameStr != "")
		{
			topNameStr += ", ";
		}
	}
	
	var result = 
		"<span class='top_tags_sidebar'>"+topNameStr+"</span>" +
		"<span class='bottom_tags_sidebar'>"+bottomNameStr+"</span>";
		
	return result;
	
}


/**
 * Returns a list of tagids from the ones you've selected so far (with optional filter)
 * @param {Array.<string>} categories list of tag categories to filter by
 * @return {Array.<number>} list of tagids
 */
function getTagIdListRanked(includeCategories=null, excludeCategories=null, bTopTags=true)
{
	var tagids = getTagIdList(includeCategories, excludeCategories);
	if(rgRankedTagProfile != null)
	{
		//If we have a ranked tag profile we compare against it
		var rgTopTags = [];
		var rgBottomTags = [];
		for(var i = 0; i < rgRankedTagProfile.length; i++)
		{
			if(i < maxTags)
			{
				var entry = rgRankedTagProfile[i];
				if(valueIsInArray(entry.tagid, tagids))
				{
					rgTopTags.push(entry.tagid);
				}
			}
		}
		if(bTopTags)
		{
			//return top 15 tags matching ranked profile
			return rgTopTags;
		}
		else
		{
			//return everything that's not the top 15 tags
			for(var i = 0; i < tagids.length; i++)
			{
				if(!valueIsInArray(tagids[i], rgTopTags))
				{
					rgBottomTags.push(tagids[i]);
				}
			}
			return rgBottomTags;
		}
	}
	if(bTopTags)
	{
		//no ranked profile but you want top tags? Empty set.
		return [];
	}
	//no ranked profile but you want bottom tags? Everything.
	return tagids;
}

/**
 * Returns a list of tagids from the ones you've selected so far (with optional filter)
 * @param {Array.<string>} categories list of tag categories to filter by
 * @return {Array.<number>} list of tagids
 */
function getTagIdList(includeCategories=null,excludeCategories=null)
{
	var profile = getTagProfile();
	var list = [];
	for(var i = 0; i < profile.length; i++)
	{
		var entry = profile[i];
		var name = getTagName(entry.tagid);
		var passIncludes = true;
		var passExcludes = true;
		if(includeCategories != null && includeCategories.length > 0)
		{
			passIncludes = false;
			if(tagMatchesCategory(entry.tagid, includeCategories))
			{
				passIncludes = true;
			}
		}
		if(excludeCategories != null && excludeCategories.length > 0)
		{
			passExcludes = true;
			if(tagMatchesCategory(entry.tagid, excludeCategories))
			{
				passExcludes = false;
			}
		}
		if(passIncludes && passExcludes)
		{
			list.push(entry.tagid);
		}
	}
	return list;
}

function getCombinedTagProfile()
{
	var normalTags = getResponseTags();
	
	var simpleTags = simpleTagProfile;
	var combinedTags = [];
	
	if(queryExpansionExists)
	{
		combinedTags = simpleTags.slice();
	}
	else
	{
		combinedTags = normalTags.slice();
	}
	for(var i = 0; i < normalTags.length; i++)
	{
		var normalTag = normalTags[i];
		if(!valueIsInArray(normalTag, combinedTags))
		{
			combinedTags.push(normalTag);
		}
	}
	
	if(combinedTags.length > maxTags)
	{
		var otherTags = getUniqueResponseTagsFromQuestion("q_tags_from_desc", ["q_tags_from_users"]);
		var devTags  = getUniqueResponseTagsFromQuestion("q_tags_from_users",["q_tags_from_desc"]);
	}
	
	return combinedTags;
}

/**
 * Get a condensed list of scored tags for the summary page
 * @return Array.<ScoredTag>
 */
function getOptimizedTagProfile()
{
	return scoreTagProfile(getCombinedTagProfile());
}

function areTagProfilesEqual(a,b)
{
	if(a.length != b.length) return false;
	for(var i = 0; i < a.length; i++)
	{
		var aTag = a[i];
		var bTag = b[i];
		if(aTag.tagid != bTag.tagid)
		{
			return false;
		}
	}
	return true;
}

function getManuallyRankedTagProfile()
{
	return manualScoreTagProfile(getCombinedTagProfile());
}

/**
 * Get a condensed list of scored tags for the summary page that obeys 
 * @return Array.<ScoredTag>
 */
function getNaturalTagProfile()
{
	return communityScoreTagProfile(getCombinedTagProfile());
}


/**
 * Get a condensed list of scored tags for the summary page
 * @return Array.<ScoredTag>
 */
function getFinalTagProfile()
{
	return scoreTagProfile(simpleTagProfile);
}

/**
 * Get a list of all the tags you've selected
 * @return Array.<ScoredTag>
 */
function getTagProfile()
{
	return scoreTagProfile(getResponseTags());
}

/**
 * Get a list of all the tagids you've selected in your responses
 * @return Array.<string>
 */
function getResponseTags()
{
	var allTags = [];
	for(var i = 0; i < questions.length; i++)
	{
		var question = questions[i];
		var response = getResponse(question.id);
		if(response != null)
		{
			for(var j = 0; j < response.length; j++)
			{
				var tag = response[j].value;
				if(allTags.indexOf(tag) == -1)
				{
					allTags.push(tag);
				}
			}
		}
	}
	return allTags;
}

function getUniqueResponseTagsFromQuestion(question_id, rgIgnoreQuestionIds)
{
	var rgTagids = getResponseTagsFromQuestion(question_id);
	var rgUniqueTagids = [];
	var rgAllOtherTagids = [];
	for(var i = 0; i < questions.length; i++)
	{
		var question = questions[i];
		if(question.id != question_id || valueIsInArray(question.id, rgIgnoreQuestionIds))
		{
			var rgOtherTagids = getResponseTagsFromQuestion(question.id);
			for(var j = 0; j < rgOtherTagids.length; j++)
			{
				var otherTagid = rgOtherTagids[j];
				if(false == valueIsInArray(otherTagid, rgAllOtherTagids))
				{
					rgAllOtherTagids.push(otherTagid);
				}
			}
		}
	}
	
	for(var i = 0; i < rgTagids.length; i++)
	{
		var tagid = rgTagids[i];
		if(false == valueIsInArray(tagid, rgAllOtherTagids))
		{
			rgUniqueTagids.push(tagid);
		}
	}
	
	return rgUniqueTagids;
}

function getResponseTagsFromQuestion(question_id)
{
	var rgTagids = [];
	var response = getResponse(question_id);
	if(response != null)
	{
		for(var j = 0; j < response.length; j++)
		{
			var tag = response[j].value;
			if(valueIsInArray(tag, rgTagids) == false)
			{
				rgTagids.push(tag);
			}
		}
	}
	return rgTagids;
}

/**
 * Given an array of tags, apply a sensible weight gradient that properly
 * differentiates #1 from #'s 2-5, the top 5 from the "peloton", and a 
 * difference between each descending tag of at least 1 so it presevers order.
 * @param {Array.<Tag>} tagProfile
 * @return Array.<Tag> weighted version of your tag profile
 */
function finalizeTagProfileCounts(tagProfile)
{
	//Start with a minimum weight score of 25
	var score = 25;
	
	for(var i = 0; i < tagProfile.length; i++)
	{
		//Go in reverse order, starting with the LAST tag
		var j = tagProfile.length - i - 1;
		var entry = tagProfile[j];
		
		//This loop will apply the score as the weight and slowly count up
		
		if(j > 24)
		{
			//If you have more than 25 tags we're not even really counting them
			entry.count = 1;
			continue;
		}
		
		if(j == 4)
		{
			//We're crossing into the top 5, we want a 5 point gap between the
			//top 5 and all tags below
			score += 5;
		}
		else if(j == 0)
		{
			//Entering #1 spot, we want a 5 point gap between #1 and #2
			score += 5;
		}
		else if(j < 4)
		{
			//Between each top 5 tag we want a gap of 2 points
			score += 2;
		}
		else
		{
			//In the peloton, we want a gap of 1 point between each tag
			score++;
		}
		
		entry.count = score;
	}
	return tagProfile;
}

function manualScoreTagProfile(allTags)
{
	if(allTags == null)
	{
		allTags = [];
	}
	var results = [];
	for(var i = 0; i < allTags.length; i++)
	{
		var tagid = allTags[i];
		var manualRankIndex = indexOfInArray(tagid,rgManualTagidRanking);
		var manualRankScore = 0;
		if(manualRankIndex >= 0)
		{
			manualRankScore = rgManualTagidRanking.length - manualRankIndex;
		}
		var resultTag = {
			tagid:tagid,
			name:getTagName(tagid),
			count:manualRankScore
		};
		results.push(resultTag);
	}
	results.sort(sortCount);
	return results;
	
}

function communityScoreTagProfile(allTags)
{
	if(allTags == null)
	{
		allTags = [];
	}
	var results = [];
	for(var i = 0; i < allTags.length; i++)
	{
		var tagid = allTags[i];
		var resultTag = {
			tagid:tagid,
			name:getTagName(tagid),
			count:1
		};
		for(var j = 0; j < communityTags.length; j++)
		{
			var appTag = communityTags[j];
			if(tagid == appTag.tagid)
			{
				resultTag.count = appTag.count;
				break;
			}
		}
		results.push(resultTag);
	}
	results.sort(sortCount);
	return results;
	
}


/**
 * Take a list of tags and output a sensible automatic ranking based on which 
 * tags carry the most valuable information
 * @param {Array.<string>} allTags list of tagids
 */
function scoreTagProfile(allTags)
{
	if(allTags == null)
	{
		allTags = [];
	}
	var profile = [];
	var weightMult = 10;
	for(var i = 0; i < allTags.length; i++)
	{
		var isWeak = false;
		var tag = allTags[i];
		var cats = getCategories(tag);
		var name = tagNames[tag];
		var weights = [];
		var subWeights = [];
		
		//We look up all the categories each tag belongs to and collect weights
		for(var j = 0; j < cats.length; j++)
		{
			var cat = cats[j];
			var weight = categoryWeights[cat];
			var subWeight = 0.0;
			
			if (categorySubWeights[cat] != null)
			{
				var strTagid = ""+tag;
				subWeight = categorySubWeights[cat][strTagid];
			}
			switch(cat)
			{
				//subgenre is the most important signal
				case "subgenre":   weights.push(weight); subWeights.push(subWeight); break;
				
				//(regular) genre is an okay signal
				case "genre":      weights.push(weight); subWeights.push(subWeight);  break;
				
				//sports are kindof like a genre and are an okay signal
				case "sport":      weights.push(weight); subWeights.push(subWeight);  break;
				
				//supergenre is a consistently weak differentiating signal
				//like half the steam catalog is "action", "adventure", etc
				case "supergenre": weights.push(weight); subWeights.push(subWeight);  break;
				
				case "software_genre": weights.push(weight); subWeights.push(subWeight); break;
				
				//turn-based vs real-time (just those two tags)
				case "basic_timeflow": weights.push(weight); subWeights.push(subWeight);  break;
				
				//simgredient can be a decent signal or a low-value one
				//depending on whether you've got a simulation game
				case "simgredient":
				   if(allTags.indexOf("599") != -1)
				   {
					  //599 = "Simulation"
					  //count simgredients for more if this
					  //is a simulation game
					  weights.push(weight); subWeights.push(subWeight); 
				   }
				   else
				   {
					  weights.push(1.0);
					  subWeights.push(0.5);
				   }
				   break;
				
				//2D vs 3D, this is pretty important to know
				case "xd":         weights.push(weight); subWeights.push(subWeight); break;
				
				//first-person vs. third-person, etc, good differentiator
				case "viewpoint":  weights.push(weight); subWeights.push(subWeight); break;
				
				//anything relating to challenge/difficulty, good differentiator
				case "challenge":    weights.push(weight); subWeights.push(subWeight);  break;
				
				//visual style, mood, theme - about the same
				case "visuals":    weights.push(weight); subWeights.push(subWeight);  break;
				case "mood":       weights.push(weight); subWeights.push(subWeight);  break;
				case "theme":      weights.push(weight); subWeights.push(subWeight);  break;
				
				//some mechanical stuff -- decent signals
				case "feature":      weights.push(weight); subWeights.push(subWeight);  break;
				case "level_design": weights.push(weight); subWeights.push(subWeight);  break;
				case "combat":       weights.push(weight); subWeights.push(subWeight);  break;
				case "story":        weights.push(weight); subWeights.push(subWeight);  break;
				case "character":    weights.push(weight); subWeights.push(subWeight);  break;
				
				//callouts for especially weak tags ("indie")
				case "weak_not_genre":   isWeak = true; break;
				case "weak_genre":       
				      if(queryExpansionExists)
				      {
				          //only demote weak genres if we
				          //can count on query expansion
				          isWeak = true;
				      }
				      break;
				
				//none of these -- low value
				default:           weights.push(0.5); subWeights.push(0.0);  break;
			}
		}
		
		//We sort the list, get the best weight the tag has to offer, 
		//and multiply by 10
		weights.sort();
		subWeights.sort();
		var count = weights[weights.length-1] * 10;
		
		//Add the sub weight. This is a tiny weight that differentiates 
		//tags WITHIN the same category if you have a lot of the same kind,
		//and bubbles up the ones we think carry slightly more information
		var subCount = subWeights[subWeights.length-1];
		count += subCount;
		
		//If the tag is flagged as "weak" we punish it
		if(isWeak)
		{
			count /= 4;
		}
		
		if(queryExpansionExists)
		{
			//ONLY perform this block if query expansion exists!
			
			//We've created a condensed version of the user's selected tags called
			//the "simpleTagProfile" -- this "boils down" the tag profile using tag
			//hydration to include as few redundant tags as possible (so it will
			//throw away "2D" and "Platformer" in favor or "2D Platformer")
			
			//We check to see if this tag is in the "simpleTagProfile" -- if it
			//isn't, that means it's redundant to a more high value tag, and should
			//appear lower in our list by default
			
			var inSimpleArray = valueIsInArray(tag, simpleTagProfile);
			if(!inSimpleArray)
			{
				count /= 100;
				//count /= 4;
			}
		}
		profile.push({tagid:tag,name:name,count:count});
	}
	
	//Sort what we've got of the profile right now
	profile.sort(sortCount);
	
	//If we don't have Query expansion yet, we have to avoid nixing genre tags
	if(!queryExpansionExists && profile.length > maxTags)
	{
		//Keep genre tags above the minimum threshold:
		profile = keepTagsAboveMinimum(profile,["genre","subgenre","supergenre"]);
	}
	
	if(profile.length > maxTags)
	{
		//Slice out the top tags and re-score them as if they were the whole profile:
		var subProfile = tagsToTagids(profile.slice(0, maxTags));
		subProfile = scoreTagProfile(subProfile);
		
		//Reorder the top tags
		var lastCount = 0;
		for(var i = 0; i < subProfile.length; i++)
		{
			profile[i] = subProfile[i];
			lastCount = profile[i].count;
		}
		//For the below-water tags, make sure they will never pop into the top tags
		for(var i = subProfile.length; i < profile.length; i++)
		{
			profile[i].count -= lastCount * 1000;
		}
	}
	
	//Sort the profile according to the new weights
	profile.sort(sortCount);
	
	return profile;
}

function keepTagsAboveMinimum(profile,rgCategories)
{
	var matchingTags = [];
	var notMatchingTags = [];
	var tagsBelowWater = [];
	var tagids = tagsToTagids(profile);
	
	for(var i = 0; i < tagids.length; i++)
	{
		var tagid = tagids[i];
		if(tagMatchesAnyCategory(tagid, rgCategories))
		{
			//Find all the tags that match our categories
			matchingTags.push(tagid);
			if(i >= maxTags)
			{
				//Find matching tags below the threshold
				tagsBelowWater.push(tagid);
			}
		}
		else
		{
			//Find all the tags that DON'T match our categories
			notMatchingTags.push(tagid);
		}
	}
	
	var failsafe = 0;
	while(tagsBelowWater.length > 0 && notMatchingTags.length > 0 && failsafe < 99)
	{
		var belowWaterTag = tagsBelowWater[0];
		var notMatchingTag = notMatchingTags[0];
		
		var notMatchingIndex = indexOfInArray(tagids, notMatchingTag);
		var belowWaterIndex = indexOfInArray(tagids, belowWaterTag);
		
		//swap a below water tag with a not matching tag
		tagids[notMatchingIndex] = belowWaterTag;
		tagids[belowWaterIndex] = notMatchingTag;
		
		//shorten both lists
		tagsBelowWater.splice(0,1);
		notMatchingTags.splice(0,1);
		
		failsafe++;
	}
	
	var newProfile = [];
	for(var i = 0; i < profile.length; i++)
	{
		newProfile.push({});
	}
	for(var i = 0; i < profile.length; i++)
	{
		var index = indexOfInArray(profile[i].tagid, tagids);
		if(index != -1)
		{
			newProfile[index] = profile[i];
		}
	}
	for(var i = 0; i < profile.length; i++)
	{
		newProfile[i].count = profile[i].count;
	}
	return newProfile;
}

/**
 * Finds out how statistically likely a given tag is given all your other choices
 * @param {number} candidateTagid
 * @return number
 */
function calculateTagLikelihoodGivenCurrentResponses(candidateTagid)
{
	var totalScore = 0;
	var tagids = getTagIdList();
	if(tagids.length == 0) return 0;
	for(var i = 0; i < tagAssociations.length; i++)
	{
		var association = tagAssociations[i];
		if(tagAssociations[i].nTagid == candidateTagid)
		{
			score = parseInt(association.nScore);
			totalScore += score;
			break;
		}
	}
	return totalScore;
}

/********************************************
 *
 * Sorting functions
 *
 *******************************************/

/**
 * Sorts a list of tags in descending order by count
 * @param {Tag} a
 * @param {Tag} b
 * @return {number}
 */
function sortCount(a,b)
{
	if(a.count < b.count) return 1;
	if(a.count > b.count) return -1;
	return 0;
}

/**
 * Sorts a list of LabelValues in alphabetic order by label
 * @param {LabelValue} a
 * @param {LabelValue} b
 * @return {number}
 */
function sortLabel(a, b)
{
	if(a.label.toLowerCase() < b.label.toLowerCase()) return -1;
	if(a.label.toLowerCase() > b.label.toLowerCase()) return  1;
	return 0;
}

/**
 * @param {Array.<HTMLBit>} bits
 * @param {Array.<string>} marked
 * @return {Array.<HTMLBit>}
 */
function sortMarked(bits, marked)
{
	for (var i = 0; i < bits.length; i++)
	{
		var bit = bits[i];
		bit.count = bits.length-i-1;
		if(valueIsInArray(bit.id, marked))
		{
			bit.count += bits.length;
		}
	}
	bits.sort(sortCount);
	return bits;
}


function hilightAssociations(bits, response)
{
	var els = document.getElementsByClassName("choice");
	
	var bits = [];
	var allZero = true;
	for(var i = 0; i < els.length; i++)
	{
		var el = els[i];
		if(el != null)
		{
			var tagid = el.getAttribute("value");
			var id = el.getAttribute("id");
			var score = calculateTagLikelihoodGivenCurrentResponses(tagid);
			bits.push({id:id,count:score});
			if(score != 0)
			{
				allZero = false;
			}
		}
	}
	
	bits.sort(sortCount);
	
	var numHilights = allZero ? 0 : Math.floor(els.length*0.25);
	for(var i = 0; i < els.length; i++)
	{
		var bit = bits[i];
		var id = bit.id;
		var el = document.getElementById(id);
		if(el != null)
		{
			if(i < numHilights)
			{
				if(hasClass(el,"lowlighted"))
				{
					removeClass(el, "lowlighted");
				}
				addClass(el, "hilighted");
			}
			else if(hasClass(el, "hilighted"))
			{
				removeClass(el, "hilighted");
				addClass(el, "lowlighted");
			}
		}
	}
}

/**
 * @param {Array.<HTMLBit>} bits
 * @param {NameValue} response
 * @return {Array.<HTMLBit>}
 */
function sortHtmlBits(bits, response)
{
	var maxScore = 0;
	for(var i = 0; i < bits.length; i++)
	{
		var tagid = bits[i].id;
		var score = calculateTagLikelihoodGivenCurrentResponses(tagid);
		if(score > maxScore)
		{
			maxScore = score;
		}
		
		if(response != null)
		{
			for(var j = 0; j < response.length; j++)
			{
				var entry = response[j];
				if(entry.value == tagid)
				{
					score = -1;
				}
			}
		}
		if(expandedTags != null)
		{
			for(var j = 0; j < expandedTags.length; j++)
			{
				var expandedTag = expandedTags[j];
				if(expandedTag == tagid)
				{
					score = -2;
				}
			}
		}
		bits[i].score = score;
		bits[i].count = score;
	}
	for(var i = 0; i < bits.length; i++)
	{
		if(bits[i].score < 0)
		{
			bits[i].score *= -1;
			bits[i].score *= maxScore;
			bits[i].count = bits[i].score;
		}
	}
	bits.sort(sortCount);
	return bits;
}

/*******************************************
 *
 * General utility functions
 *
 ******************************************/

/**
 * Return if a value is in an array without having to worry about JS equality 
 * shenanigans that make indexOf() not work reliably
 * @param value
 * @return {Array}
 */
function valueIsInArray(value, array)
{
	if(array == null) return false;
	for(var i = 0; i < array.length; i++)
	{
		var other = array[i];
		if(other == value) return true;
	}
	return false;
}

function indexOfInArray(value, array)
{
	if(array == null) return false;
	for(var i = 0; i < array.length; i++)
	{
		var other = array[i];
		if(other == value) return i;
	}
	return -1;
}


/**
 * Get the tag name for the given tagid
 * @param {number} tagid
 * @return {string}
 */
function getTagName(tagid)
{
	return tagNames[tagid];
}

/**
 * Removes a class from an HTML element
 * @param {HTMLElement} el the element you want to remove a class from
 * @param {string} str the class name
 */
function removeClass(el, str)
{
	if(el == null) return;
	var classStr = el.getAttribute("class");
	if(classStr != null)
	{
		classArr = classStr.split(" ");
		var index = classArr.indexOf(str);
		if(index != -1)
		{
			classArr.splice(index, 1);
			classStr = classArr.join(" ");
			el.setAttribute("class",classStr);
		}
	}
}

function hasClass(el, str)
{
	if(el == null) return false;
	var classStr = el.getAttribute("class");
	if(classStr != null)
	{
		classArr = classStr.split(" ");
		return classArr.includes(str);
	}
	return false;
}

/**
 * Adds a class to an HTML element
 * @param {HTMLElement} el the element you want to add a class to
 * @param {string} str the class name
 */
function addClass(el, str)
{
	if(el == null) return;
	var classStr = el.getAttribute("class");
	if(classStr != null)
	{
		classArr = classStr.split(" ");
		if(!classArr.includes(str))
		{
			classArr.push(str);
			classStr = classArr.join(" ");
			el.setAttribute("class",classStr);
		}
	}
}

/****************************
 *
 * Display functions
 *
 ***************************/

/**
 * Replace a class of the form "somename_x" where "x" is a number
 * @param {HTMLElement} element the element you want to modify
 * @param {string} stub the class prefix ex: "somename_"
 * @param {number} index the numerical value you want to add here
 * @param {number} min the minimum value that could be here
 */

function removeEnumeratedClass(element, stub, index, min, max)
{
	for(var j = min; j < max; j++)
	{
		var suffix = j;
		removeClass(element, stub + suffix);
	}
}

/**
 * Show the start page with the tag summary but no drag and drop interface
 */
function displayStartPage()
{
	//Calculate the simplified tag profile
	getSimpleTagProfile(function(data){
		simpleTagProfile = data != null && data.rgTagids != null ? data.rgTagids : [];
		
		var content = document.getElementById("survey_content_section");
		
		//Draw the actual end page
		var html = renderStartPage();
		content.innerHTML = html;
		
	});
}

/**
 * Show the end page with the tag summary & drag and drop interface
 */
function displayEndPage(bForceOptimized)
{
	//Set up the sort observer to watch the drag & drop list
	if(sortObserver != null)
	{
		sortObserver.disconnect();
		sortObserver = null;
	}
	sortObserver = new MutationObserver(function(){
		//when the sort list has been created, start watching it
		var summaryItems = document.getElementsByClassName("summary_item");
		var j = 0;
		for(var i = 0; i < summaryItems.length; i++)
		{
			//when elements are moved around, update their class names in real
			//time so that they use the right styles for their position in the
			//list
			removeEnumeratedClass(summaryItems[i], "summary_item_", i, 0, summaryItems.length+1);
			removeClass(summaryItems[i], "summary_item_disabled");
			
			var classInfo = summaryItems[i].getAttribute("class");
			if(classInfo.indexOf("ui-sortable-helper") == -1)
			{
				j++;
			}
			
			suffix = j;
			if(suffix > maxTags)
			{
				suffix = "disabled";
			}
			var className = "summary_item_"+suffix;
			addClass(summaryItems[i], className);
			updateSortButtons();
			
			recordManualTagRanking();
		}
	});
	
	//Calculate the simplified tag profile
	getSimpleTagProfile(function(data){
		simpleTagProfile = data != null && data.rgTagids != null ? data.rgTagids : [];
		//Once we have that, set up the end page observer and make it watch
		//for when we draw the drag and drop list
		var content = document.getElementById("survey_content_section");
		endPageObserver = new MutationObserver(function(){
			
			//When the drag and drop list has been drawn, invoke the jquery
			//to make it drag and droppable
			$J("#sortable").sortable({axis:'y'});
			endPageObserver.disconnect();
			
			//Start observing the sortable element:
			var sortable = document.getElementsByClassName("ui-sortable")[0];
			if(sortObserver != null)
			{
				sortObserver.disconnect();
			}
			updateSortButtons();
			
			sortObserver.observe(sortable, { attributes: false, childList: true, subtree: true });
		});
		endPageObserver.observe(content, { attributes: true, childList: true, subtree: true });
		
		//Draw the actual end page with the drag and drop list
		var html = renderEndpage(bForceOptimized);
		content.innerHTML = html;
		
	});
}

/**
 * Render and display the current question
 */
function displayCurrentQuestionSummary()
{
	//Get the current question and render it to the DOM
	var question = questions[currentQuestion];
	var html = renderSummary(question);
	var content = document.getElementById("summary");
	content.innerHTML = html;
}

/**
 * Render and display the current question
 */
function displayCurrentQuestion()
{
	nScroll = 0;
	
	//Get the current question and render it to the DOM
	var question = questions[currentQuestion];
	var html = renderQuestion(question);
	var content = document.getElementById("survey_content_section");
	content.innerHTML = html;
	
	//Try to update checked status for any choices
	var inputs = document.getElementsByClassName("input_choice");
	var choices = document.getElementsByClassName("choice");
	
	var updateNumChoicesPreselected = false;
	if(numChoicesPreselected == -1)
	{
		updateNumChoicesPreselected = true;
		numChoicesPreselected = 0;
	}
	for(var j = 0; j < questions.length; j++)
	{
		var q = questions[j];
		var response = getResponse(q.id);
		if(response != null && response.length > 0)
		{
			for(var i = 0; i < response.length; i++)
			{
				var r = response[i];
				var name = r.name;
				var value = r.value;
				for(var k = 0; k < inputs.length; k++)
				{
					if(inputs[k].value == value && inputs[k].checked == false)
					{
						inputs[k].checked = true;
						if(updateNumChoicesPreselected)
						{
							numChoicesPreselected++;
						}
						var choice = choices[k];
						addClass(choice, "selected");
					}
				}
			}
		}
	}
	
	var preselect = (question.preselect == true);
	if(preselect)
	{
		for(var i = 0; i < inputs.length; i++)
		{
			inputs[i].checked = true;
		}
	}
	
	hilightAssociations();
	
	if(inputs.length == 0)
	{
		return false;
	}
	return true;
}

/**
 * Displays validation errors to the user, such as when they try to pick too
 * many options
 * @param {string} e the error text
 */
function displayErrors(e)
{
	var error = document.getElementById("error");
	var text = "";
	if(e.length == 0)
	{
		text = "";
	}
	else{
		text = e.join("\n");
	}
	error.innerHTML = text;
}

function applyExclusionsToTagIdList(rgTagids,rgTagidsToExclude)
{
	var rgResults = [];
	for(var i = 0; i < rgTagids.length; i++)
	{
		var tagid = rgTagids[i];
		if(!valueIsInArray(tagid, rgTagidsToExclude))
		{
			rgResults.push(tagid);
		}
	}
	return rgResults;
}

function tagsToTagids(rgTags)
{
	var rgResults = [];
	for(var i = 0; i < rgTags.length; i++)
	{
		rgResults.push(rgTags[i].tagid);
	}
	return rgResults;
}

/**
 * Renders the summary sidebar
 * @return {string} html for the summary sidebar
 */
function renderSummary()
{
	var superGenreStuff = getTopAndBottomTagIdNames(["supergenre"]);
	var genreStuff = getTopAndBottomTagIdNames(["genre"]);
	var subGenreStuff = getTopAndBottomTagIdNames(["subgenre"]);
	var visualStuff = getTopAndBottomTagIdNames(["visuals"]);
	var featureStuff = getTopAndBottomTagIdNames(["feature"]);
	var themeMoodStuff = getTopAndBottomTagIdNames(["theme","mood"]);
	var playerStuff = getTopAndBottomTagIdNames(["players"]);
	var otherStuff = getTopAndBottomTagIdNames([],["supergenre","genre","subgenre","visuals","feature","theme","mood","players"]);
	
	var otherTagids = getTagIdList([],["supergenre","genre","subgenre","visuals","feature","theme","mood","players"]);
	var other = getTagNames(otherTagids);
	
	tagProfile = getFinalTagProfile();
	
	var profileHTML = "";
	for(var i = 0; i < tagProfile.length; i++)
	{
		var entry = tagProfile[i];
		var name = entry.name;
		profileHTML += '\
		'+'<strong>'+(i+1)+".</strong> "+name+'<br>';
		if(i == 4)
		{
			profileHTML += '<hr>';
		}
	}
	
	var sectionLine = function(qid, stuff)
	{
		return "<span class='section_header' onclick='onClickSection(\""+qid+"\")'>" + getQTitle(qid) + "</span><br>"+stuff+"<br><br>";
	};
	
	var stuff = [
		{id:"q_super_genre", html:superGenreStuff},
		{id:"q_genre"      , html:genreStuff},
		{id:"q_sub_genre"  , html:subGenreStuff},
		{id:"q_visuals"    , html:visualStuff},
		{id:"q_theme_mood" , html:themeMoodStuff},
		{id:"q_features"   , html:featureStuff},
		{id:"q_players"    , html:playerStuff}
	];
	if(other.length != 0)
	{
		stuff.push({id:"q_other"      , html:otherStuff});
	}
	stuff.push({id:"q_summary"    , html:""});
	
	var html = "";
	for(var i = 0; i < stuff.length; i++)
	{
		var thing = stuff[i];
		if(thing.html != "" || thing.id == "q_summary")
		{
			html += sectionLine(thing.id, thing.html);
		}
		else
		{
			html += sectionLine(thing.id, "<span class='none_defined'>"+getQText("none_defined")+"</span>");
		}
	}
	return html;
}

function cullTagProfile(rgTags, num)
{
	var opTags = getOptimizedTagProfile();
	var opTagIds = tagsToTagids(opTags);
	var j = opTagIds.length-1;
	while(rgTags.length > num && j >= 0)
	{
		var worstOpTagid = opTagIds[j];
		for(var i = 0; i < rgTags.length; i++)
		{
			var tag = rgTags[i];
			if(tag.tagid == worstOpTagid)
			{
				rgTags.splice(i,1);
				j--;
				break;
			}
		}
	}
	return rgTags;
}

/**
 * Renders the HTML for the final summary page with drag and drop choices
 */
function renderEndpage(bForceOptimized=false)
{
	var strFinish =   'Publish';
	var strCancel =   'Cancel';
	var strOptimize = 'Suggest Prioritization';
	var strRevert =   'Revert Prioritization';
	var strPrevious = 'Previous';
	
	var onClickPrevious = 'onclick="onClickPrevious()"';
	var onClickOptimize = 'onclick="onClickOptimizeTags()"';
	var onClickRevert   = 'onclick="onClickRevertTags()"';
	var onClickFinish   = 'onclick="onClickConfirmApplyTags()"';
	var onClickCancel   = 'onclick="onClickCancelSurvey()"';
	
	var stepMax = questions.length+1;
	var step = stepMax;
	var endStrText = "end_text";
	var text = getQText(endStrText);
	var title = getQTitle("end_title");
	var topTagsText = getQText("top_tags");
	
	var opTagProfile = null;
	
	if(rgManualTagidRanking.length > 0)
	{
		opTagProfile = getManuallyRankedTagProfile();
	}
	else
	{
		if(bForceOptimized)
		{
			opTagProfile = getOptimizedTagProfile();
			recordManualTagRankingFromProfile(opTagProfile);
		}
		else
		{
			opTagProfile = getNaturalTagProfile();
		}
	}
	
	rgRankedTagProfile = opTagProfile;
	
	var disabledOptimize = "";
	var disabledRevert = "";
	
	if(areTagProfilesEqual(rgRankedTagProfile, getOptimizedTagProfile()))
	{
		disabledOptimize = "disabled";
	}
	
	if(areTagProfilesEqual(rgRankedTagProfile, getNaturalTagProfile()))
	{
		disabledRevert = "disabled";
	}
	
	var choiceHTML = renderSummaryItems(rgRankedTagProfile);
	var summaryHTML = renderSummary();
	
	rgRankedTagProfile = finalizeTagProfileCounts(rgRankedTagProfile);
	
	var stepText = "";
	
	var disabledBegin = "";
	var disabledFinish = "";
	var disabledCancel = "";
	
	var buttons = '<div id="buttons" class="nav_buttons">';
	buttons += '<div class="nav_button nav_button_optimize '+disabledOptimize+'"><button '+onClickOptimize+'>'+strOptimize+'</button></div>';
	buttons += '<div class="nav_button nav_button_revert '+disabledRevert+'"><button '+onClickRevert+'>'+strRevert+'</button></div>';
	buttons += '<div class="nav_button nav_button_previous"><button onclick="onClickPrevious()">'+strPrevious+'</button></div>';
	buttons += '<div class="nav_button nav_button_publish '+disabledFinish+'"><button '+onClickFinish+'>'+strFinish+'</button></div>';
	buttons += '<div class="nav_button nav_button_cancel '+disabledCancel+'"><button '+onClickCancel+'>'+strCancel+'</button></div>';
	buttons += '<div id="error" class="error"></div>';
	buttons += '</div>';
	
	return '\
	<div id="bookend_page" class="bookend_page">\
		<div id="steps" class="steps">'+stepText+'</div>\
		<h3 id="question_title" class="question_title">'+title+'</h3>\
		<div>\
			<p id="question_text" class="question_text">'+text+'</p>\
			<div class="top_tags">'+topTagsText+'</div>\
			<div id="choices" class="choices" onscroll="onScroll();">\
				<ul id="sortable">'+
				choiceHTML+
				'</ul>'+
			'</div>'+
			'<div id="summary" class="summary">'+
			summaryHTML+
			'</div>\
		</div>\
		<br>\
	</div>'+buttons;
}


/**
 * Renders the HTML for the initial summary page
 */
function renderStartPage()
{
	var strBegin =    'Begin';
	var strCancel =   'Cancel';
	
	var onClickBegin = 'onclick="backToSurvey()"';
	var onClickCancel   = 'onclick="onClickCancelSurvey()"';
	
	var text = getQText("start_text");
	var title = getQTitle("start_title");
	
	var opTagProfile = getNaturalTagProfile();
	rgRankedTagProfile = opTagProfile;
	
	var choiceHTML = renderSummaryItems(rgRankedTagProfile);
	var summaryHTML = renderSummary();
	
	rgRankedTagProfile = finalizeTagProfileCounts(rgRankedTagProfile);
	
	var buttons = '<div id="buttons" class="nav_buttons">';
	buttons += '<div class="nav_button nav_button_begin"><button '+onClickBegin+'>'+strBegin+'</button></div>';
	buttons += '<div class="nav_button nav_button_cancel"><button '+onClickCancel+'>'+strCancel+'</button></div>';
	buttons += '</div>';
	
	return '\
	<div id="bookend_page" class="bookend_page">\
		<h3 id="question_title" class="question_title">'+title+'</h3>\
		<div>\
			<p id="question_text" class="question_text">'+text+'</p>\
			<div id="choices" class="choices">'+
			'</div>'+
			'<div id="summary" class="summary">'+
			summaryHTML+
			'</div>\
		</div>\
		<br>\
	</div>'+buttons;
	
	
				
}

/**
 * Render the HTML for a given question
 * @param {SurveyQuestion} q
 * @return {string}
 */
function renderQuestion(q)
{
	var strNext     = 'Next';
	var strPrevious = 'Previous';
	var strCancel   = 'Cancel';
	
	var buttons = '<div id="buttons" class="nav_buttons">';
	if(currentQuestion > 0)
	{
		buttons += '<div class="nav_button nav_button_previous"><button onclick="onClickPrevious()">'+strPrevious+'</button></div>';
	}
	
	buttons += '<div class="nav_button nav_button_cancel"><button onclick="onClickCancel()">'+strCancel+'</button></div>';
	
	if(currentQuestion < questions.length-1)
	{
		buttons += '<div class="nav_button nav_button_next"><button onclick="onClickNext()">'+strNext+'</button></div>';
	}
	else
	{
		buttons += '<div class="nav_button nav_button_next"><button onclick="onClickFinish()">'+strNext+'</button></div>';
	}
	buttons += '<div id="error" class="error"></div>';
	buttons += '</div>';
	
	var step = currentQuestion+1;
	var stepMax = questions.length;
	
	var stepText = getStepText(step,stepMax);
	
	var qText = getQText(q.id);
	var qTitle = getQTitle(q.id);
	
	var title = replaceVariables(qTitle);
	var text = replaceVariables(qText);
	
	var choiceHTML = renderChoices(q);
	var summaryHTML = renderSummary();
	
	return '\
	<div id="'+q.id+'" class="question">\
		<div id="steps" class="steps">'+stepText+'</div>\
		<h3 id="question_title" class="question_title">'+title+'</h3>\
		<div>\
			<p id="question_text" class="question_text">'+text+'</p>\
			<div id="choices" class="choices" onscroll="onScroll();">'+
			choiceHTML+
			'</div>'+
			'<div id="summary" class="summary">'+
			summaryHTML+
			'</div>\
		</div>\
		<br>\
	</div>'+buttons;
}

function countQuestionChoices(q)
{
	return getQuestionChoices(q).length;
}

function getQuestionChoices(q)
{
	var count = q.choices.length;
	var j = 0;
	var ids = [];
	var allChoices = [];
	for(var i = 0; i < count; i++)
	{
		var choice = q.choices[i];
		if(choice.value.indexOf("fill") == 0)
		{
			var choices = resolveFillChoices(choice.value);
			for(var k = 0; k < choices.length; k++)
			{
				var subChoice = choices[k];
				if(ids.indexOf(subChoice.value) == -1)
				{
					ids.push(subChoice.value);
					allChoices.push(subChoice);
				}
			}
		}
		else
		{
			if(ids.indexOf(choice.value) == -1)
			{
				ids.push(choice.value);
				allChoices.push(choice);
				j++;
			}
		}
	}
	return allChoices;
}

/**
 * Render the HTML for the choices associated with the given question
 * @param {SurveyQuestion} q
 * @return {string}
 */
function renderChoices(q)
{
	var html = "";
	var type = "radio";
	if(q.type == "multiple_choice")
	{
		if(q.multi_select == true)
		{
			type = "checkbox";
		}
	}
	var count = q.choices.length;
	var j = 0;
	var htmlBits = [];
	var ids = [];
	var sort = q.sort;
	for(var i = 0; i < count; i++)
	{
		var choice = q.choices[i];
		if(choice.value.indexOf("fill") == 0)
		{
			choices = resolveFillChoices(choice.value);
			for(var k = 0; k < choices.length; k++)
			{
				var subChoice = choices[k];
				if(ids.indexOf(subChoice.value) == -1)
				{
					var count = subChoice.count;
					if(count == null)
					{
						count = 0;
					}
					var bit = renderChoice(k,type,subChoice.label,subChoice.value);
					htmlBits.push({id:subChoice.value,html:bit,count:count,label:subChoice.label});
					ids.push(subChoice.value);
					j++;
				}
			}
		}
		else
		{
			if(ids.indexOf(choice.value) == -1)
			{
				var bit = renderChoice(j,type,choice.label,choice.value);
				htmlBits.push({id:choice.value,html:bit,count:0,label:choice.label});
				ids.push(choice.value);
				j++;
			}
		}
	}
	
	markedIds = getMarkedInputs(ids);
	
	switch(sort)
	{
		case "association":
			htmlBits = sortHtmlBits(htmlBits, getResponse(q.id));
			break;
		default:
			//alphabetical
			htmlBits.sort(sortLabel);
			break;
	}
	
	htmlBits = sortMarked(htmlBits, markedIds);
	
	for(var i = 0; i < htmlBits.length; i++)
	{
		html += htmlBits[i].html;
	}
	return html;
}

/**
 * Render the HTML for the choices as summary items (drag and droppable)
 * @param {ScoredTag} choices
 */
function renderSummaryItems(choices)
{
	var html = "";
	var type = "checkbox";
	var count = choices.length;
	var htmlBits = [];
	var ids = [];
	var j = 0;
	for(var i = 0; i < count; i++)
	{
		var choice = choices[i];
		if(ids.indexOf(choice.tagid) == -1)
		{
			var bit = renderSummaryItem(j,type,choice.name,choice.tagid);
			htmlBits.push({id:choice.tagid,html:bit,count:0,label:choice.name});
			ids.push(choice.tagid);
			j++;
		}
	}
	
	for(var i = 0; i < htmlBits.length; i++)
	{
		var theHtml = htmlBits[i].html;
		var suffix = i;
		if(i >= maxTags) suffix = "disabled";
		var className = "summary_item_"+suffix;
		theHtml = theHtml.replace("insert_class", className);
		html += theHtml;
	}
	return html;
}

/**
 * Render the HTML for the given choice
 * @param {number} i
 * @param {string} type
 * @param {string} label
 * @param {string} value
 * @return {string}
 */
function renderChoice(i,type,label,value)
{
	var onClick = "";
	var onChange = "onChange()";
	if(type == "radio")
	{
		onClick = "onClickChoice("+i+",true)";
	}
	else
	{
		onClick = "onClickChoice("+i+",false)";
	}
	var divClass = "choice";
	var tags = getTagIdList();
	if(valueIsInArray(value,expandedTags) && !(valueIsInArray(value,tags)))
	{
		divClass += " suggested";
	}
	return '\
	<div id="choice_'+i+'" class="'+divClass+'" name=_choice_'+i+'" value="'+value+'">\
		<input onchange="'+onChange+'" onclick="'+onClick+'" type="'+type+'" class="input_choice" id="input_choice_'+i+'" name="input_choice_'+i+'" value="'+value+'">\
		<label for="input_choice_'+i+'"><span>'+label+'</span></label>\
	</div>';
}

/**
 * Render the HTML for the given summary item
 * @param {number} i
 * @param {string} type
 * @param {string} label
 * @param {string} value
 * @return {string}
 */
function renderSummaryItem(i,type,label,value)
{
	var onClick = "";
	var onChange = "";
	if(type == "radio")
	{
		onClick = "";
	}
	var divClass = "choice";
	var tags = getTagIdList();
	return '<li class="summary_item unselectable insert_class" id="summary_item_'+i+'" value="'+value+'">'+label+'</li>';
}

/*******************************************
 *
 * Get/send data functions
 *
 *******************************************/

/**
 * Read the GET parameters from the URL
 * @return {Object.<string,Array.<Array.<string>>>}
 */
function getParams()
{
	var getStuff = window.location.href.split("?");
	var valueMap = {};
	if(getStuff != null && getStuff.length > 1)
	{
		var varStuff = getStuff[1];
		var varList = varStuff.split("&");
		if(varList != null && varList.length > 0)
		{
			for(var i = 0; i < varList.length; i++)
			{
				var varStr = varList[i];
				if(varStr.indexOf("=") != -1)
				{
					var nameValue = varStr.split("=");
					if(nameValue != null && nameValue.length > 1)
					{
						if(nameValue[1].indexOf("-") != -1)
						{
							var nameValueArr = nameValue[1].split("-");
							valueMap[nameValue[0]] = nameValueArr;
						}
						else
						{
							valueMap[nameValue[0]] = [nameValue[1]];
						}
					}
				}
			}
		}
	}
	return valueMap;
}

/**
 * Get a simplified & compressed version of the current tag choices, that
 * contains all the same information but with minimal redundancy. Example: if
 * you have "2D" and "Platformer", this will compress them into "2D Platformer"
 * and discard the other two tags as redundant
 * @param {DataCallback} callback
 */
function getSimpleTagProfile(callback)
{
	var rgTagids = [];
	var profile = getTagProfile();
	for(var i = 0; i < profile.length; i++)
	{
		var tag = profile[i];
		rgTagids.push(tag.tagid);
	}
	
	//Formulate the tag application POST request
	var rgParams = {
		tagids: rgTagids.join(","),
		sessionid: g_sessionID
	};
	
	//Send the request
	$J.post( 'https://partner.steamgames.com/tagdata/simpletagprofile', rgParams ).done(function ( response )
		{
			if ( response.success == 1 )
			{
				callback(response);
			}
			else
			{
				callback(null);
			}
		}
	);
}

/**
 * Get tags that are statistically associated with the current tags
 * @param {DataCallback} callback
 */
function getTagAssociations(callback)
{
	//Get a list of our tags, but be smart about it -- limit our genres to the
	//most specific ones we have, or else the effect of super broad noisy tags
	//like "action" or "adventure" will severely degrade our results
	var tagids = getRelevantTagIdList();
	var t = getTagIdList();
	
	if(tagids == null)
	{
		tagAssociations = [];
		if(callback != null)
		{
			callback();
		}
		return;
	}
	
	//Formulate the tag application POST request
	var rgParams = {
		sessionid: g_sessionID,
		tagids: tagids.join(","),
		smart: true
	};
	//Send the request
	$J.post( 'https://partner.steamgames.com/tagdata/tagassociations', rgParams ).done(function ( response )
		{
			if ( response.success )
			{
				if(response.data != null)
				{
					if(response.data.rgTags != null)
					{
						expandedTags = response.data.rgTags;
					}
					if(response.data.rgScores != null)
					{
						tagAssociations = response.data.rgScores;
					}
				}
			}
			if(callback != null)
			{
				callback();
			}
		}
	);
}
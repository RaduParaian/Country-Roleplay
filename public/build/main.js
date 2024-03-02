"use strict";
// Storyline
var storyOutput = [
    // { name: "", lore: [], dialogue: [], question: "", options: [], read: [], id: [], lead: "" },
    { name: "startStory", lore: ["*Your walking down a path when you realise there is an adandoned bunker at the side of the road and you hear sound coming from inside.*"], question: "Do you enter:", options: ["Yes", "No"], read: ["yes", "no"], id: ["startYes", "startNo"], lead: "" },
    { name: "startYes", lore: ["*You find a pathway to a room emiting light.*", "*You decide to enter to see if there is anyone there.*", "*When you enter you find a secret meeting between Alliances.*"], question: "", options: [], read: [], id: [], lead: "startChoose" },
    { name: "startChoose", lore: ["Leader: What country do you represent?"], question: "Where are you from:", options: ["England", "America", "France", "Spain", "Germany", "Austria", "Italy", "Romania", "Russia", "China", "Japan", "Korea", "Slovenia"], read: ["england", "america", "france", "spain", "germany", "austria", "italy", "romania", "russia", "china", "japan", "korea", "slovenia"], id: ["chooseEngland", "chooseAmerica", "ChooseFrance", "chooseSpain", "chooseGermany", "chooseAustria", "chooseItaly", "chooseRomania", "chooseRussia", "chooseChina", "chooseJapan", "chooseKorea", "chooseSlovenia"], lead: "" },
    { name: "chooseEngland", lore: ["*You unknowingly reply with United Kingdom, hoping you won't get caught.*", "Leader: James, he's with you.", "Leader: Take him.", "James: Do you want to join my Alliance?"], question: "Would you like to join James:", options: ["Yes", "No"], read: ["yes", "no"], id: ["joinJamesYes", "joinJamesNo"], lead: "" },
    { name: "joinJamesYes", lore: ["*You accept James's offer.*", "James: Good choice, come sit by me.", "*You sit down next to James and wait for the meeting to end*"], question: "", options: [], read: [], id: [], lead: "startEngland" },
    { name: "startEngland", lore: ["*James takes you to England with him*", "James: Welcome to england!", "James: Would you like to join the military or help me?"], question: "Would to like to join the military or help James:", options: ["Military", "Help"], read: ["military", "help"], id: ["chooseEnglandMilitary", "chooseEnglandHelp"], lead: "" },
    { name: "chooseEnglandMilitary", lore: ["*You decide to join the military.*"], question: "", options: [], read: [], id: [], lead: "startEnglandMilitary" },
    { name: "startEnglandMilitary", lore: ["*You arrive at the military camp.*", "*Everyone is in bad condition from training.*", "*You start training but it is hard and you are close to dying.*", "*You consider giving up and leaving.*"], question: "Do you want to give up:", options: ["Yes", "No"], read: ["yes", "no"], id: ["stopEnglandMilitaryYes", "stopEnglandMilitaryNo"], lead: "" },
    { name: "stopEnglandMilitaryYes", lore: ["*You ask your instructor if you can quit and leave.*"], question: "", options: [], read: [], id: [], lead: "stopEnglandMilitaryKill" },
    { name: "stopEnglandMilitaryKill", lore: ["Oliver: No one leaves.", "Oliver: KNIFE HIM HARRY!", "Harry: YES SIR!", "*TCH, TCH, TCH,*", "Harry: KNIFED HIM SIR!"], question: "", options: [], read: [], id: [], lead: "missionEndEnglandKnife" },
    { name: "stopEnglandMilitaryNo", lore: ["*You continue to push yourself through the training and eventually you finish it.*", "*England leaves the alliance and declares war on everyone*", "*You can join the war or attemp to run away.*"], question: "What do you want to do:", options: ["Fight", "Run"], read: ["fight", "run"], id: ["fight", "run"], lead: "" },
    { name: "chooseEnglandHelp", lore: ["*You decide to stay and help James.*"], question: "", options: [], read: [], id: [], lead: "" },
    { name: "joinJamesNo", lore: ["*You kindly decline James's offer.*"], question: "", options: [], read: [], id: [], lead: "startChoose" },
    { name: "chooseAmerica", lore: ["*You unknowingly reply with United States, hoping you won't get caught.*", "Leader: John, he's with you.", "Leader: Take him.", "John: Do you want to join my Alliance?"], question: "Would you like to join John:", options: ["Yes", "No"], read: ["yes", "no"], id: ["joinJohnYes", "joinJohnNo"], lead: "" },
    { name: "joinJohnNo", lore: ["*You kindly decline John's offer.*"], question: "", options: [], read: [], id: [], lead: "startChoose" },
    { name: "chooseFrance", lore: ["*You unknowingly reply with France, hoping you won't get caught.*", "Leader: Claude, he's with you.", "Leader: Take him.", "Claude: Do you want to join my Alliance?"], question: "Would you like to join Claude:", options: ["Yes", "No"], read: ["yes", "no"], id: ["joinClaudeYes", "joinClaudeNo"], lead: "" },
    { name: "joinClaudeNo", lore: ["*You kindly decline Claude's offer.*"], question: "", options: [], read: [], id: [], lead: "startChoose" },
    { name: "chooseSpain", lore: ["*You unknowingly reply with Spain, hoping you won't get caught.*", "Leader: Carlos, he's with you.", "Leader: Take him.", "Carlos: Do you want to join my Alliance?"], question: "Would you like to join Carlos:", options: ["Yes", "No"], read: ["yes", "no"], id: ["joinCarlosYes", "joinCarlosNo"], lead: "" },
    { name: "joinCarlosNo", lore: ["*You kindly decline Carlos's offer.*"], question: "", options: [], read: [], id: [], lead: "startChoose" },
    { name: "chooseGermany", lore: ["*You unknowingly reply with Germany, hoping you won't get caught.*", "Leader: Heinrich, he's with you.", "Leader: Take him.", "Heinrich: Do you want to join my Alliance?"], question: "Would you like to join Heinrich:", options: ["Yes", "No"], read: ["yes", "no"], id: ["joinHeinrichYes", "joinHeinrichNo"], lead: "" },
    { name: "joinHeinrichNo", lore: ["*You kindly decline Heinrich's offer.*"], question: "", options: [], read: [], id: [], lead: "joinHeinrichKill" },
    { name: "joinHeinrichKill", lore: ["Heinrich: GAS HIM HANS!", "Hans: YES SIR!", "*SSS, SSS, SSS*", "Hans: GASSED HIM SIR!"], question: "", options: [], read: [], id: [], lead: "missionEndDead" },
    { name: "chooseAustria", lore: ["*You unknowingly reply with Austria, hoping you won't get caught.*", "Leader: Felix, he's with you.", "Leader: Take him.", "Felix: Do you want to join my Alliance?"], question: "Would you like to join Felix:", options: ["Yes", "No"], read: ["yes", "no"], id: ["joinFelixYes", "joinFelixNo"], lead: "" },
    { name: "joinFelixNo", lore: ["*You kindly decline Felix's offer.*"], question: "", options: [], read: [], id: [], lead: "startChoose" },
    { name: "chooseItaly", lore: ["*You unknowingly reply with Italy, hoping you won't get caught.*", "Leader: Antonio, he's with you.", "Leader: Take him.", "Antonio: Do you want to join my Alliance?"], question: "Would you like to join Antonio:", options: ["Yes", "No"], read: ["yes", "no"], id: ["joinAntonioYes", "joinAntonioNo"], lead: "" },
    { name: "joinAntonioNo", lore: ["*You kindly decline Antonio's offer.*"], question: "", options: [], read: [], id: [], lead: "startChoose" },
    { name: "chooseRomania", lore: ["*You unknowingly reply with Romania, hoping you won't get caught.*", "Leader: Bogdan, he's with you.", "Leader: Take him.", "Bogdan: Do you want to join my Alliance?"], question: "Would you like to join Bogdan:", options: ["Yes", "No"], read: ["yes", "no"], id: ["joinBogdanYes", "joinBogdanNo"], lead: "" },
    { name: "joinBogdanNo", lore: ["*You kindly decline Bogdan's offer.*"], question: "", options: [], read: [], id: [], lead: "startChoose" },
    { name: "chooseRussia", lore: ["*You unknowingly reply with Russia, hoping you won't get caught.*", "Leader: Dmitri, he's with you.", "Leader: Take him.", "Dmitri: Do you want to join my Alliance?"], question: "Would you like to join Dmitri:", options: ["Yes", "No"], read: ["yes", "no"], id: ["joinDmitriYes", "joinDmitriNo"], lead: "" },
    { name: "joinDmitriNo", lore: ["*You kindly decline Dmitri's offer.*"], question: "", options: [], read: [], id: [], lead: "joinDmitriKill" },
    { name: "joinDmitriKill", lore: ["Dmitri: SHOOT HIM VLADMYIR!", "Vladmyir: YES SIR!", "*BANG, BANG, BANG*", "Vladmyir: KILLED HIM SIR!"], question: "", options: [], read: [], id: [], lead: "missionEndRussiaBrutal" },
    { name: "chooseChina", lore: ["*You unknowingly reply with China, hoping you won't get caught.*", "Leader: Feng, he's with you.", "Leader: Take him.", "Feng: Do you want to join my Alliance?"], question: "Would you like to join Feng:", options: ["Yes", "No"], read: ["yes", "no"], id: ["joinFengYes", "joinFengNo"], lead: "" },
    { name: "joinFengNo", lore: ["*You kindly decline Feng's offer.*"], question: "", options: [], read: [], id: [], lead: "joinFengKill" },
    { name: "joinFengKill", lore: ["Feng: EAT HIM CHAO!", "Chao: YES SIR!", "*NOM, NOM, NOM*", "Chao: EATEN HIM SIR!"], question: "", options: [], read: [], id: [], lead: "missionEndDead" },
    { name: "chooseJapan", lore: ["*You unknowingly reply with Japan, hoping you won't get caught.*", "Leader: Haru, he's with you.", "Leader: Take him.", "Haru: Do you want to join my Alliance?"], question: "Would you like to join Haru:", options: ["Yes", "No"], read: ["yes", "no"], id: ["joinHaruYes", "joinHaruNo"], lead: "" },
    { name: "joinHaruNo", lore: ["*You kindly decline Haru's offer.*"], question: "", options: [], read: [], id: [], lead: "startChoose" },
    { name: "chooseKorea", lore: ["*You unknowingly reply with Korea, hoping you won't get caught.*", "Leader: Jeong, he's with you.", "Leader: Take him.", "Jeong: Do you want to join my Alliance?"], question: "Would you like to join Jeong:", options: ["Yes", "No"], read: ["yes", "no"], id: ["joinJeongYes", "joinJeongNo"], lead: "" },
    { name: "joinJeongNo", lore: ["*You kindly decline Jeong's offer.*"], question: "", options: [], read: [], id: [], lead: "startChoose" },
    { name: "chooseSlovenia", lore: ["*You unknowingly reply with Slovenia, hoping you won't get caught.*", "Leader: Ela, he's with you.", "Leader: Take him.", "Ela: Do you want to join my Alliance?"], question: "Would you like to join Ela:", options: ["Yes", "No"], read: ["yes", "no"], id: ["joinElaYes", "joinElaNo"], lead: "" },
    { name: "joinElaYes", lore: ["*You accept Ela's offer.*", "Ela: Well done.", "Ela: Now, do you want to become and UwU male or Fat male?"], question: "What type of male do you want to become:", options: ["UwU", "Fat"], read: ["uwu", "fat"], id: ["chooseUwuMale", "chooseFatMale"], lead: "" },
    { name: "chooseUwuMale", lore: ["*You are a cute fox and everyone loves you.*", "*You eventually rise to become king of Slovenia and spread the Pathowogen to the country.*"], question: "", options: [], read: [], id: [], lead: "missionCompleteSloveniaPathowogen" },
    { name: "chooseFatMale", lore: ["*You are a fat and ugly failure wasting his life.*"], question: "", options: [], read: [], id: [], lead: "missionEndSloveniaUgly" },
    { name: "joinElaNo", lore: ["*You kindly decline Ela's offer.*"], question: "", options: [], read: [], id: [], lead: "startChoose" },
    { name: "startNo", lore: ["*You keep walking and forget about what happpend.*"], question: "", options: [], read: [], id: [], lead: "missionEndFail" },
    { name: "missionEndFail", lore: ["--- --- --- --- --- MISSION ENDED : You failed. --- --- --- --- ---"], question: "", options: [], read: [], id: [], lead: "" },
    { name: "missionEndSloveniaUgly", lore: ["--- --- --- --- --- MISSION ENDED : You were too ugly. --- --- --- --- ---"], question: "", options: [], read: [], id: [], lead: "" },
    { name: "missionEndEnglandKnife", lore: ["--- --- --- --- --- MISSION ENDED: You were knifed to death by Harry. --- --- --- --- ---"], question: "", options: [], read: [], id: [], lead: "" },
    { name: "missionEndRussiaBrutal", lore: ["--- --- --- --- --- MISSION ENDED: You were brutally murderded by Russian Forces leader Vladmyir. --- --- --- --- ---"], question: "", options: [], read: [], id: [], lead: "" },
    { name: "missionEndDead", lore: ["--- --- --- --- --- MISSION ENDED: You died. --- --- --- --- ---"], question: "", options: [], read: [], id: [], lead: "" },
    { name: "missionCompleteWin", lore: ["--- --- --- --- --- MISSION COMPLETED: You won. --- --- --- --- ---"], question: "", options: [], read: [], id: [], lead: "" },
    { name: "missionCompleteSloveniaPathowogen", lore: ["--- --- --- --- --- MISSION COMPLETED: You have successfully spread the Pathowogen. --- --- --- --- ---"], question: "", options: [], read: [], id: [], lead: "" },
];
var storyOutputIndex = 0;
window.onload = function () {
    var outputArea = document.getElementById('output-area');
    var inputArea = document.getElementById('input-area');
    var submitButton = document.getElementById("submit-button");
    var clearButton = document.getElementById("clear-button");
    // we just entered the page or a page refresh happened
    if (storyOutputIndex == 0) {
        // we have something in the local store, so this is a page refresh, we need to continue where we left off
        if (localStorage.getItem('output')) {
            outputArea.value = localStorage.getItem('output') || '';
            storyOutputIndex = parseInt(localStorage.getItem('index') || '0');
        }
        // we don't have anything in the local store, so this is the first time we enter the page
        else {
            storyOutputIndex = 0;
            outputArea.value = '--- --- --- --- --- Welcome to Country Roleplay --- --- --- --- ---';
            outputArea.value = buildOutput(outputArea.value);
        }
    }
    submitButton.addEventListener('click', function handleClick(event) {
        var input = inputArea.value.toLowerCase();
        // find the index of user input in the read array
        var optionIndex = storyOutput[storyOutputIndex].read.indexOf(input);
        // input found in options read
        if (optionIndex > -1) {
            // add input to output area
            outputArea.value += '\n' + '\n' + "You: " + input;
            // find the index of the option in the id array
            var storyOutputName_1 = storyOutput[storyOutputIndex].id[optionIndex];
            // find the index of the option in the storyOutput array corresponding to the story output id selected by the user
            storyOutputIndex = storyOutput.findIndex(function (s) { return s.name === storyOutputName_1; });
            outputArea.value += '\n';
            // add the next story output to the output area
            outputArea.value = buildOutput(outputArea.value);
            while (storyOutput[storyOutputIndex].lead) {
                storyOutputIndex = storyOutput.findIndex(function (s) { return s.name === storyOutput[storyOutputIndex].lead; });
                outputArea.value = buildOutput(outputArea.value, false);
            }
        }
        // input not found in options read
        else {
            outputArea.value += '\n' + 'Invalid Answer. Please try again.';
        }
        inputArea.value = '';
        localStorage.setItem('output', outputArea.value);
        localStorage.setItem('index', storyOutputIndex.toString());
    });
    clearButton.addEventListener('click', function handleClick(event) {
        outputArea.value = '';
        localStorage.clear();
        storyOutputIndex = 0;
        outputArea.value = '--- --- --- --- --- Welcome to Country Roleplay --- --- --- --- ---';
        outputArea.value = buildOutput(outputArea.value);
    });
};
function buildOutput(value, addQuestionMark) {
    if (addQuestionMark === void 0) { addQuestionMark = true; }
    var output = value;
    if (storyOutput[storyOutputIndex].lore && storyOutput[storyOutputIndex].lore.length > 0) {
        for (var _i = 0, _a = storyOutput[storyOutputIndex].lore; _i < _a.length; _i++) {
            var lore = _a[_i];
            output += '\n' + lore;
        }
    }
    if (storyOutput[storyOutputIndex].question && storyOutput[storyOutputIndex].question.length > 0) {
        output += '\n' + '- ' + storyOutput[storyOutputIndex].question;
    }
    if (storyOutput[storyOutputIndex].options && storyOutput[storyOutputIndex].options.length > 0) {
        output += '\n' + '- ' + storyOutput[storyOutputIndex].options.join(', ');
        if (addQuestionMark) {
            output += '?';
        }
    }
    return output;
}

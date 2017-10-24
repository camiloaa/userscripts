// ==UserScript==
// @name        Duolingo Course Progress Stats
// @namespace   local
// @include     https://www.duolingo.com/*
// @author      Camilo
// @version     1.0.0
// @grant	none
// ==/UserScript==

let duoState = JSON.parse(localStorage['duo.state'])

let skills = Object.values(duoState.skills).filter(skill => 
    skill.learningLanguage === duoState.user.learningLanguage && 
    skill.fromLanguage === duoState.user.fromLanguage)

let completedSkills = skills.filter(x => x.lessons === x.finishedLessons)

let totalLessons = skills.map(x => x.lessons).reduce((a, b) => a + b, 0)
let completedLessons = skills.map(x => x.finishedLessons).reduce((a, b) => a + b, 0)
let weakSkills = skills.filter(x => x.finishedLessons == x.lessons && x.strength != 1).length

console.debug("Stats Skills: " + completedSkills.length + "/" + skills.length)
console.debug("Stats Lessons: " + completedLessons + "/" + totalLessons)
console.debug("Stats Weak Skills: " + weakSkills)


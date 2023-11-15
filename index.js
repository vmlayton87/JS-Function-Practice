// Your Code Here
function start(){
    let firstAnswer  = window.prompt('Do you head left, or right?')
    if(firstAnswer === 'left'){
       goLeft()
    } else if(firstAnswer === 'right') {
        goRight()
    }
}

/***********************************************
* 
*               GO LEFT INSTRUCTIONS  
*
**************************************************/
function goLeft(){
    let secondAnswer = window.prompt(`You come across a stray cat. 
    It scampers off down a small hole, just large enough for you to crawl through. 
    Do you follow it, or continue on your path? Do you choose follow, continue, or back?`)
    if(secondAnswer === 'back'){
        start()
    } else if (secondAnswer === 'follow') {
        followCat()
    } else if (secondAnswer === 'continue') {
        continuePath()
    }
}

/*********************************************
*               Follow the Cat
*********************************************/
function followCat () {
    let thirdAnswer = window.prompt('You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven. Do you choose stay, spread the word, or back?')
    if(thirdAnswer === 'back'){
        goLeft()
    } else if (thirdAnswer === 'stay') {
        stayCat()
    } else if (thirdAnswer === 'spread the word') {
        spreadTheWord()
    }
}
function stayCat () {
    window.alert('You live happily amongst the cats for the rest of your days')
}

function spreadTheWord () {
    window.alert('After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless.')
}

/****************************************************
*              Continue Path
***************************************************/
function continuePath () {
    let thirdAnswer = window.prompt('You come across a chamber that extends upward to a shining light above. There is a long, winding staircase and a much quicker, but rickety-looking, ladder that lead up towards the light. Which do you take? Do you choose ladder or staircase, or back?')
    if(thirdAnswer === 'back'){
        goLeft()
    } else if (thirdAnswer === 'ladder') {
        ladder()
    } else if (thirdAnswer === 'staircase') {
        staircase()
    }
}

function ladder () {
    window.alert('After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home.')
}

function staircase () {
    window.alert('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.')
}

/************************************************
  
                GO RIGHT INSTRUCTIONS
 
 ***************************************************/
function goRight(){
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
    On the other side of him, you see a shiny chest of treasure. Another path would 
    lead you away from the dragon all together. Which do you take? Choose past the dragon, away from the dragon, or back.`)
    if(secondAnswer === 'back'){
        start()
    } else if (secondAnswer === 'past the dragon') {
        pastDragon()
    } else if (secondAnswer === 'away from the dragon') {
        awayDragon()
    }
}

/*********************************************
*               Past The Dragon
*********************************************/
function pastDragon () {
    let thirdAnswer = window.prompt('The dragon awakes and sits upright. You only have a moment to respond, to stay or to run:')
    if(thirdAnswer === 'back'){
        goLeft()
    } else if (thirdAnswer === 'stay') {
        stayDragon()
    } else if (thirdAnswer === 'run') {
        runDragon()
    }
}
function stayDragon () {
    window.alert('You and the dragon have an uplifting conversation about local politics and become lifelong friends.')
}

function runDragon () {
    window.alert('Quickly, you run back to the cave\'s entrance. Sheepish, you return home')
}

/****************************************************
*              Away From Dragon
***************************************************/
function awayDragon () {
    let thirdAnswer = window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do? ')
    if(thirdAnswer === 'back'){
        goLeft()
    } else if (thirdAnswer === 'draw it') {
        drawIt()
    } else if (thirdAnswer === 'pick it') {
        pickIt()
    }
}

function drawIt () {
    window.alert('You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time discover joy in sharing the drawing with your friends and family, recounting the story of your days as a sorcerer with the aide of the sketch.')
}

function pickIt () {
    window.alert('You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.')
}

start()

// code your solution here
function saturdayFun(str = "roller-skate") {
    return `This Saturday, I want to ${str}!`
}

function mondayWork(str = 'go to the office'){
  return `This Monday, I will ${str}.`
}

function wrapAdjective(smbl = '') {
  return function(str = "special"){
    return `You are ${smbl}${str}${smbl}!`
  }
}
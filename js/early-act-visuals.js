/* Visual-only overlay: original Acts 1–3 source arrays remain byte-for-byte intact.
   Applied once after the engine's local arrays exist, before initial rendering. */
window.applyEarlyActVisuals = ({days,epilogue,ending}) => {
  applyEarlyExpressionReview(days);
  // Day 11 explicitly takes place at evening shift change, not sunny afternoon.
  days[10].scenes.forEach(s=>{s.atmosphere='early-evening';});
  epilogue.forEach(s=>{s.atmosphere='early-evening';});
  // Day 20 morning remains dry. Only the final first-raindrop beat changes weather.
  ending.slice(3).forEach(s=>{s.atmosphere='early-rain';});
};

// Audited Acts 1–3 only. Zero-based days and scene indices.
// Apply after day data assembly. Deliberately changes presentation metadata only.
function applyEarlyExpressionReview(days) {
  const map = {
    0: {scenes:{5:'neutral',12:'sad',14:'sad',16:'sad',20:'sad',22:'sad',23:'sad',24:'sad',26:'sad',28:'neutral'},'choices.0.post':{3:'sad'},'choices.1.post':{2:'neutral'}},
    2: {scenes:{4:'sad',5:'sad',7:'sad',9:'sad',10:'sad'},'choices.1.post':{2:'neutral'}},
    3: {scenes:{4:'neutral',5:'neutral'}},
    4: {scenes:{1:'angry',3:'angry',6:'sad',9:'sad'},'choices.0.post':{0:'neutral'}},
    5: {scenes:{3:'sad',4:'neutral'}},
    6: {scenes:{2:'sad',3:'neutral',6:'sad',7:'neutral',8:'sad'},'choices.0.post':{1:'sad'},'choices.2.post':{1:'neutral'}},
    7: {scenes:{0:'sad',4:'sad',5:'sad',6:'sad'},'choices.0.post':{2:'sad'}},
    9: {scenes:{3:'sad',5:'sad',7:'neutral'}},
    10:{scenes:{1:'sad',3:'sad'}},
    11:{scenes:{0:'sad',2:'sad',4:'sad',5:'sad',8:'sad',9:'sad'},'choices.0.post':{0:'neutral',2:'sad'}},
    13:{scenes:{0:'sad',1:'neutral',2:'sad',4:'sad',5:'neutral',6:'neutral',11:'neutral',12:'sad'}},
    14:{scenes:{9:'neutral'},'choices.0.post':{0:'neutral',1:'sad',2:'sad'}},
    15:{scenes:{8:'sad',12:'neutral'},'choices.2.post':{0:'neutral'}},
    16:{scenes:{42:'neutral'}},
    17:{scenes:{23:'sad'}},
    19:{scenes:{1:'sad'}}
  };
  for (const [day,groups] of Object.entries(map)) {
    for (const [group,entries] of Object.entries(groups)) {
      const scenes=group.split('.').reduce((value,key)=>value[key],days[day]);
      for (const [index,emotion] of Object.entries(entries)) scenes[index].emotion=emotion;
    }
  }
}
// Invoke from final resolve wrapper AFTER dynamic text/speaker resolution.
function reviewEarlyResolvedExpression(scene,dayIndex) {
  if (dayIndex===15 && scene.dynamic==='roomUse') {
    return {...scene,emotion:scene.npc==='한명숙' && /어디서 지내|어디로 가면/.test(scene.text)?'sad':'neutral'};
  }
  return scene;
}

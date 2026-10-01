/* Act 5 visual direction only: narration stays narration, no extra plot events.
   The final group portrait is a closing illustration, not a new in-story photo shoot. */
(() => {
  const scenes = window.ACT5_DAYS[0].scenes;
  const cast = (indices, names) => indices.forEach(i => { scenes[i].visualCast = names; });
  const cutin = (indices, key) => indices.forEach(i => { scenes[i].cutin = key; });
  cast([51,52,53,54,57,58], ['오지혜','정서연']);
  cast([66,69,70,73], ['임성호','강태식']);
  cast([82,87,90], ['박선우','윤정희']);
  cutin([91,98,101], 'finale-umbrellas');
  cast([94,102,103], ['이준호','한명숙']);
  cast([105,106,107,109,110,112,113,116,122,123,124,128], ['도윤']);
  cutin([108,111,121], 'story-management-log');
  cast([114], ['한명숙','이준호']);
  cast([115], ['임성호','강태식']);
  cutin([125], 'finale-umbrellas');
  cast([126,130,135], ['도윤','이준호']);
  cutin([136,137], 'finale-new-leaf');
  // Match conditional memory images to the actual branch rather than its index.
  const decorate = (key, direction) => {
    const render = window.ACT5_DYNAMIC[key];
    window.ACT5_DYNAMIC[key] = state => { const scene = render(state); return {...scene, ...direction(scene)}; };
  };
  decorate('memory1', () => ({cutin:'story-management-log'}));
  decorate('memory2', scene => scene.text.includes('우산')
    ? {cutin:'finale-umbrellas'} : {visualCast:['이준호','한명숙']});
  decorate('memory3', scene => ({visualCast:scene.text.includes('준호')
    ? ['이준호','한명숙'] : ['임성호','강태식']}));
  decorate('memory4', () => ({visualCast:['박선우','윤정희']}));
})();

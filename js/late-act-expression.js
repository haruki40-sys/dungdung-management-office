/* Display direction only. Audited against the four existing sprite poses:
 * sad is a restrained worried/thoughtful pose, happy is conspicuous celebration.
 * Ordinary reports and quiet relief therefore use neutral, not automatic keywords.
 * Fixed scene indices, story text, choices and state are untouched. */
(() => {
  const walk = value => {
    if (!value || typeof value !== 'object') return;
    if (typeof value.text === 'string') value.emotion = 'neutral';
    Object.values(value).forEach(walk);
  };
  walk(window.ACT4_DAYS); walk(window.ACT5_DAYS);
  const [d21,d22,d23] = window.ACT4_DAYS;
  const pose = (list, indices, emotion) => indices.forEach(i => { list[i].emotion = emotion; });
  // Confusion over access and the missing resident: concern, never a smile.
  pose(d21.choices[1].post,[1],'sad');
  pose(d21.after,[8],'sad');
  pose(d22.scenes,[1,4,5,6],'sad');
  pose(d22.choices[1].post,[1,2,4],'sad');
  pose(d22.choices[2].post,[1],'sad');
  pose(d22.after,[2,9,22],'sad');
  // Long-night uncertainty and worried families; calm confirmations stay neutral.
  pose(d23.scenes,[3,26],'sad');
  pose(d23.choices[1].post,[1,4],'sad');
  pose(d23.choices[2].post,[1,4],'sad');
  // Day 24 is quiet relief, not repeated cheering. Warm banter has two smiles.
  const d24 = window.ACT5_DAYS[0];
  pose(d24.scenes,[32],'sad');
  pose(d24.scenes,[44,97],'happy');
})();

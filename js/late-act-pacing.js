/* Semantic cutin/tableau cues for Act 4 and the early Act 5 handoff.
   No counters or automatic every-third insertion: each cue names a story object.
   Display fields survive conditional text patches and do not change save indices. */
(() => {
  const [d21,d22,d23]=window.ACT4_DAYS, d24=window.ACT5_DAYS[0];
  const cut=(a,i,key)=>{a[i].cutin=key;};
  const cast=(a,i,names,emotion='neutral')=>{a[i].visualCast=names;a[i].visualEmotion=emotion;};
  // Completion records and the exact user-reported printed notice/umbrella beat.
  cast(d21.scenes,9,['도윤']);
  cut(d21.after,0,'story-management-log');
  cut(d21.after,1,'detail-printed-notice');
  cut(d21.after,3,'detail-untagged-umbrellas');
  cut(d21.after,7,'detail-printed-notice');
  cut(d21.after,10,'story-handover-plan');
  // Plans, phone reports and the separately scoped next-day support.
  cut(d22.scenes,10,'story-handover-plan');
  cut(d22.scenes,12,'detail-duty-phone');
  cut(d22.after,14,'detail-duty-phone');
  cut(d22.after,27,'story-management-log');
  cut(d22.after,29,'detail-duty-phone');
  // Unknown night-duty staff remain unpictured; never replace them with Taesik.
  cast(d23.scenes,0,['도윤'],'sad');
  cut(d23.scenes,19,'detail-printed-notice');
  cast(d23.scenes,22,['강태식']);
  cut(d23.after,1,'detail-duty-phone');
  cut(d23.after,8,'story-management-log');
  // Morning handoff: anonymous staff, practical supplies, returning known faces.
  cast(d24.scenes,8,['도윤']);
  cut(d24.scenes,10,'detail-duty-phone');
  cut(d24.scenes,13,'detail-printed-notice');
  cut(d24.scenes,15,'story-management-log');
  cut(d24.scenes,17,'detail-dry-supplies');
  cut(d24.scenes,19,'detail-duty-phone');
  cast(d24.scenes,21,['도윤']);
  cast(d24.scenes,27,['도윤']);
  cast(d24.scenes,29,['도윤']);
  cast(d24.scenes,31,['이준호','한명숙']);
  cast(d24.scenes,46,['이준호','한명숙']);
})();

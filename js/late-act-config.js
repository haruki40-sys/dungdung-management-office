// Local review configuration. Costs and outcome labels await final user review.
// Published Acts 1–3 are deliberately not changed by these values.
window.LATE_ACT_CONFIG = Object.freeze({
  releaseCandidate: true,
  version: 'v1.6.0-rc1',
  emergencyOptions: [
    {id:'inspection',label:'전문업체 추가 점검·복구 판단',cost:80,description:'기존 계약 밖의 젖은 물품·구역 확인과 24일차 초기 복구 점검 일정을 확보합니다. 기존의 물리적 대비 수준은 바뀌지 않습니다.'},
    {id:'venue',label:'생활 안내·추가 휴게 지원 연장',cost:40,description:'생활 안내 창구와 추가 휴게 구역·비필수 편의물품을 24일차 오전까지 지원합니다. 안전한 체류와 필수품은 기본 대응에 포함됩니다.'},
    {id:'contact',label:'추가 연락·접수 지원',cost:20,description:'연락 확인과 안내 접수 지원을 보강합니다. 기본 연락은 선택과 관계없이 계속합니다.'},
    {id:'hold',label:'추가 비용 없이 기본 대응 유지',cost:0,description:'출입 통제·주민 안내·전문업체 연락은 계속합니다. 추가 유료 지원은 요청하지 않습니다.'}
  ],
  // Explicit review-scenario facts, confirmed in the day22 handoff and shown again
  // at selection. Save fixtures may set covered/unavailable states for regression.
  confirmedReviewServices: {
    inspection:{needed:true,alreadyCovered:false,available:true,nonOverlapping:true,scope:'기존 운전·교체·보강 계약 밖의 젖은 물품과 구역 확인, 24일차 초기 점검 일정'},
    venue:{needed:true,alreadyCovered:false,available:true,nonOverlapping:true,scope:'24일차 오전까지 추가 휴게 구역·생활 안내 창구·비필수 편의물품'},
    contact:{needed:true,alreadyCovered:false,available:true,nonOverlapping:true,scope:'확인된 추가 담당자가 안전한 지상 수령 지점과 문의 대응을 나누는 업무'}
  },
  damageByCoverage: {both:'small',one:'partial',neither:'broad'},
  damageLabels: {small:'국소 피해',partial:'일부 구역 피해',broad:'여러 구역 피해'}
});

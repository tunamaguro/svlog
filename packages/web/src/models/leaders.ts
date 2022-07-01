export const LeadersArray = [
  'forestcraft',
  'swordcraft',
  'runecraft',
  'dragoncraft',
  'shadowcraft',
  'bloodcraft',
  'havencraft',
  'portalcraft',
] as const

export type Leaders = typeof LeadersArray[number]

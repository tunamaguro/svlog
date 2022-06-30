import type { dataType } from './types'

export const calcRatio = (data: dataType[]) => {
  let win = 0
  let lose = 0
  data.forEach((ele) => {
    switch (ele.name) {
      case 'win':
        win += ele.value
        break
      case 'lose':
        lose += ele.value
        break
      default:
        // exhaustivenessCheck
        break
    }
  })
  if (win <= 0) return (0).toFixed(1)
  if (lose <= 0) return (100).toString()
  const ratio = (win / (win + lose)) * 100
  return ratio.toFixed(1)
}

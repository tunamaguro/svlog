import { describe, expect, test } from 'vitest'

import { calcRatio } from './calcRatio'
import type { dataType } from './types'

describe('components/Charts/WinRatio/calcRatio', () => {
  test('勝利数敗北数が正の数の場合、正しく計算する', () => {
    const testData: dataType[] = [
      { name: 'win', value: 10 },
      { name: 'lose', value: 15 },
    ]
    expect(calcRatio(testData)).toBe('40.0')
  })
  test('勝利数が0以下の場合、0.0を返す', () => {
    const testData: dataType[] = [
      { name: 'win', value: -3 },
      { name: 'lose', value: 10 },
    ]
    expect(calcRatio(testData)).toBe('0.0')
  })
  test('敗北数が0以下の場合、100を返す', () => {
    const testData: dataType[] = [
      { name: 'win', value: 23 },
      { name: 'lose', value: -4 },
    ]
    expect(calcRatio(testData)).toBe('100')
  })
})

import { graphql } from 'msw'

import {
  GetResultsDocument,
  GetResultsQuery,
  GetResultsQueryVariables,
} from '@/generated/graphql'

const results: GetResultsQuery['battle_results'] = [
  {
    is_win: true,
    user_leader: 'forestcraft',
    opponent_leader: 'swordcraft',
    result_id: '1',
    __typename: 'battle_results',
  },
  {
    is_win: false,
    user_leader: 'havencraft',
    opponent_leader: 'portalcraft',
    result_id: '2',
    __typename: 'battle_results',
  },
  {
    is_win: true,
    user_leader: 'shadowcraft',
    opponent_leader: 'bloodcraft',
    result_id: '3',
    __typename: 'battle_results',
  },
]

const success = graphql.query<GetResultsQuery, GetResultsQueryVariables>(
  GetResultsDocument,
  (req, res, ctx) =>
    res(ctx.delay(1000), ctx.data({ battle_results: results })),
)

export const resultHandler = {
  success,
}

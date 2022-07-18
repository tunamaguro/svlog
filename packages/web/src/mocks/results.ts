import { graphql } from 'msw'

import {
  GetResultsDocument,
  GetResultsQuery,
  GetResultsQueryVariables,
} from '@/generated/graphql'

const results: GetResultsQuery = {
  battle_results: [
    {
      opponent_leader: 'runecraft',
      result_id: 'c91a6ef5-b591-4d92-b65f-40e74197f360',
      user_leader: 'portalcraft',
      is_win: true,
      __typename: 'battle_results',
    },
    {
      opponent_leader: 'bloodcraft',
      result_id: '6bbbd48d-0fe1-49cb-b2e1-fafdc0f9e105',
      user_leader: 'shadowcraft',
      is_win: false,
      __typename: 'battle_results',
    },
    {
      opponent_leader: 'swordcraft',
      result_id: '77ea60e2-e624-40b4-b43b-a038c56c384b',
      user_leader: 'forestcraft',
      is_win: true,
      __typename: 'battle_results',
    },
  ],
  battle_results_aggregate: {
    aggregate: {
      count: 3,
    },
  },
}

const success = graphql.query<GetResultsQuery, GetResultsQueryVariables>(
  GetResultsDocument,
  (req, res, ctx) => res(ctx.delay(1000), ctx.data(results)),
)

export const resultHandler = {
  success,
}

import { graphql } from 'msw'

import {
  AggregateResultDocument,
  AggregateResultQuery,
  AggregateResultQueryVariables,
} from '@/generated/graphql'

const results: AggregateResultQuery = {
  win_aggregate: {
    aggregate: {
      count: 2,
    },
  },
  lose_aggregate: {
    aggregate: {
      count: 1,
    },
  },
  leaders: [
    {
      leader_en: 'forestcraft',
      win: {
        aggregate: {
          count: 1,
        },
      },
      lose: {
        aggregate: {
          count: 0,
        },
      },
    },
    {
      leader_en: 'swordcraft',
      win: {
        aggregate: {
          count: 0,
        },
      },
      lose: {
        aggregate: {
          count: 0,
        },
      },
    },
    {
      leader_en: 'runecraft',
      win: {
        aggregate: {
          count: 0,
        },
      },
      lose: {
        aggregate: {
          count: 0,
        },
      },
    },
    {
      leader_en: 'dragoncraft',
      win: {
        aggregate: {
          count: 0,
        },
      },
      lose: {
        aggregate: {
          count: 0,
        },
      },
    },
    {
      leader_en: 'shadowcraft',
      win: {
        aggregate: {
          count: 0,
        },
      },
      lose: {
        aggregate: {
          count: 1,
        },
      },
    },
    {
      leader_en: 'bloodcraft',
      win: {
        aggregate: {
          count: 0,
        },
      },
      lose: {
        aggregate: {
          count: 0,
        },
      },
    },
    {
      leader_en: 'havencraft',
      win: {
        aggregate: {
          count: 0,
        },
      },
      lose: {
        aggregate: {
          count: 0,
        },
      },
    },
    {
      leader_en: 'portalcraft',
      win: {
        aggregate: {
          count: 1,
        },
      },
      lose: {
        aggregate: {
          count: 0,
        },
      },
    },
  ],
  result_aggregation_by_day: [
    {
      created_at: '2022-07-13T00:00:00+00:00',
      lose: 1,
      win: 2,
      total: 3,
    },
  ],
}

const success = graphql.query<
  AggregateResultQuery,
  AggregateResultQueryVariables
>(AggregateResultDocument, (req, res, ctx) =>
  res(ctx.delay(1000), ctx.data(results)),
)

export const chartsHandler = {
  success,
}

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { LeadersArray } from '@/models/leaders'

const MessageJa = '必須項目です'

const LeaderSchema = z.enum(LeadersArray, { required_error: MessageJa })

const formSchema = z.object({
  userLeader: LeaderSchema,
  opponentLeader: LeaderSchema,
  isFirst: z.enum(['first', 'second'], { invalid_type_error: MessageJa }),
  format: z
    .string()
    .min(1, { message: MessageJa })
    .or(z.enum(['Rotation', 'zUnlimited'])),
  endTurn: z
    .number()
    .nonnegative()
    .or(z.nan())
    .transform((val) => (Number.isNaN(val) ? undefined : val)),
})

export type formType = z.infer<typeof formSchema>

export const useNewRecordForm = () =>
  //   defaultValue: Partial<z.infer<typeof formSchema>>,
  {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
    })

    return form
  }

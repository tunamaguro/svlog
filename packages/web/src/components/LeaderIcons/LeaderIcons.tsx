import { Circle, SquareProps } from '@chakra-ui/react'

import { Leaders } from '@/models/leaders'

const IconBase = (props: SquareProps) => <Circle size="40px" {...props} />

export const ForestcarftIcon = (props: SquareProps) => (
  <IconBase bg="leaders.forestcraft" {...props} />
)

export const SwordcraftIcon = (props: SquareProps) => (
  <IconBase bg="leaders.swordcraft" {...props} />
)

export const RunecrafttIcon = (props: SquareProps) => (
  <IconBase bg="leaders.runecraft" {...props} />
)

export const DragoncraftIcon = (props: SquareProps) => (
  <IconBase bg="leaders.dragoncraft" {...props} />
)

export const ShadowcraftIcon = (props: SquareProps) => (
  <IconBase bg="leaders.shadowcraft" {...props} />
)

export const BloodcraftIcon = (props: SquareProps) => (
  <IconBase bg="leaders.bloodcraft" {...props} />
)

export const HavencraftIcon = (props: SquareProps) => (
  <IconBase bg="leaders.havencraft" {...props} />
)

export const PortalcraftIcon = (props: SquareProps) => (
  <IconBase bg="leaders.portalcraft" {...props} />
)

type LeaderIconsProps = SquareProps & { leader: Leaders }

export const LeaderIcon = ({ leader, ...rest }: LeaderIconsProps) => {
  switch (leader) {
    case 'forestcraft':
      return <ForestcarftIcon {...rest} />
    case 'swordcraft':
      return <SwordcraftIcon {...rest} />
    case 'runecraft':
      return <RunecrafttIcon {...rest} />
    case 'dragoncraft':
      return <DragoncraftIcon {...rest} />
    case 'shadowcraft':
      return <ShadowcraftIcon {...rest} />
    case 'bloodcraft':
      return <BloodcraftIcon {...rest} />
    case 'havencraft':
      return <HavencraftIcon {...rest} />
    case 'portalcraft':
      return <PortalcraftIcon {...rest} />
    default:
      return null
  }
}

---
name: 'component'
root: 'src/components'
output: '**/*'
ignore: []
questions:
  name: 'Please enter component name'
---

# Variables

- filename: `{{ inputs.name | pascal }}`

# `{{ filename }}/{{ filename }}.tsx`

```typescript
type {{ filename }}Props = {}
export const {{ filename }} = ({}: {{ filename }}Props) => (<div>{{ filename }}</div>)
```

# `{{ filename }}/{{ filename }}.stories.tsx`

```typescript
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { {{ filename }} } from './{{ filename }}'

const meta: ComponentMeta<typeof {{ filename }}> = {
  component: {{ filename }},
}

export default meta

type Story = ComponentStoryObj<typeof {{ filename }}>

export const Default: Story = {}

```

# `{{ filename }}/index.tsx`

```typescript
export * from './{{ filename }}'
```

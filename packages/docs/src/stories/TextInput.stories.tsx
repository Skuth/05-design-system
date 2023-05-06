import type { Meta, StoryObj } from '@storybook/react'
import { Box, TextInput, TextInputProps, Text } from '@skuth-ignite-ui/react'

type StoryObjType = StoryObj<TextInputProps>

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    placeholder: 'Type your name',
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Default: StoryObjType = {}

export const WithPrefix: StoryObjType = {
  args: {
    prefix: 'call.com/',
    placeholder: 'your-username',
  },
}

export const Disabled: StoryObjType = {
  args: {
    disabled: true,
  },
}

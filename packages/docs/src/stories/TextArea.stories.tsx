import type { Meta, StoryObj } from "@storybook/react"
import { Box, TextArea, TextAreaProps, Text } from "@skuth-ignite-ui/react"

type StoryObjType = StoryObj<TextAreaProps>

export default {
  title: "Form/Text Area",
  component: TextArea,
  args: {
    placeholder: "Type your name"
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean"
      },
      defaultValue: false
    }
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: "flex", flexDirection: "column", gap: "$2" }}>
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextAreaProps>

export const Default: StoryObjType = {}

export const Disabled: StoryObjType = {
  args: {
    disabled: true
  }
}
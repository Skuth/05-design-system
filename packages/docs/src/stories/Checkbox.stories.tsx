import type { Meta, StoryObj } from "@storybook/react"
import { Box, Checkbox, CheckboxProps, Text } from "@skuth-ignite-ui/react"

type StoryObjType = StoryObj<CheckboxProps>

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {
    placeholder: "Type your name"
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: "flex", flexDirection: "row", gap: "$2" }}>
          {Story()}
          <Text size="sm" css={{ userSelect: "none" }}>Accept terms of use</Text>
        </Box>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Default: StoryObjType = {}
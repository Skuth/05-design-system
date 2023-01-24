import type { Meta, StoryObj } from "@storybook/react"
import { Box, MultiStep, MultiStepProps } from "@skuth-ignite-ui/react"

type StoryObjType = StoryObj<MultiStepProps>

export default {
  title: "Form/Multi Step",
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: "flex", flexDirection: "column", gap: "$2" }}>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<MultiStepProps>

export const Default: StoryObjType = {}

export const Full: StoryObjType = {
  args: {
    currentStep: 4
  }
}
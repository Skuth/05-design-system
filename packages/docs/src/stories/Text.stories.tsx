import type { Meta, StoryObj } from "@storybook/react"
import { Text, TextProps } from "@skuth-ignite-ui/react"
import { fontSizes } from "@skuth-ignite-ui/tokens"

type StoryObjType = StoryObj<TextProps>

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aliquid nam accusamus error rerum aut dolore quia architecto nulla a aspernatur odit, nostrum commodi vel, ratione, consequatur facere eius magni!"
  },
  argTypes: {
    size: {
      options: Object.keys(fontSizes),
      control: {
        type: "inline-radio"
      },
      defaultValue: "md"
    }
  }
} as Meta<TextProps>

export const Default: StoryObjType = {}

export const CustomTag: StoryObjType = {
  args: {
    children: "Strong Text",
    as: "strong"
  }
}
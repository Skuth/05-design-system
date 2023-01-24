import type { Meta, StoryObj } from "@storybook/react"
import { Heading, HeadingProps } from "@skuth-ignite-ui/react"

type StoryObjType = StoryObj<HeadingProps>

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Custom Title"
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: "inline-radio"
      },
      defaultValue: "md"
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObjType = {}

export const CustomTag: StoryObjType = {
  args: {
    children: "H1 Text",
    as: "h1"
  },
  parameters: {
    docs: {
      description: {
        story: "Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`"
      }
    }
  }
}
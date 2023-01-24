import type { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarProps } from "@skuth-ignite-ui/react"

type StoryObjType = StoryObj<AvatarProps>

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/skuth.png",
    alt: "The Skuth"
  },
  argTypes: {
    src: {
      control: {
        type: "text"
      }
    }
  }
} as Meta<AvatarProps>

export const Default: StoryObjType = {}

export const WithFallback: StoryObjType = {
  args: {
    src: undefined
  }
}
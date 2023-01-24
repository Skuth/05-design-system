import type { StoryObj, Meta } from "@storybook/react"
import { Button, ButtonProps } from "@skuth-ignite-ui/react"
import { ArrowRight } from "phosphor-react"

type StoryObjType = StoryObj<ButtonProps>

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Send",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio"
      },
      defaultValue: "primary"
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio"
      },
      defaultValue: "md"
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false
    },
    onClick: {
      action: "click"
    }
  }
} as Meta<ButtonProps>

export const Primary: StoryObjType = {}

export const Secondary: StoryObjType = {
  args: {
    variant: "secondary",
    children: "Create new"
  }
}

export const Tertiary: StoryObjType = {
  args: {
    variant: "tertiary",
    children: "Cancel"
  }
}

export const Small: StoryObjType = {
  args: {
    size: "sm"
  }
}

export const WithIcon: StoryObjType = {
  args: {
    children: (
      <>
        Next Step
        <ArrowRight weight="bold" />
      </>
    )
  }
}


export const Disabled: StoryObjType = {
  args: {
    disabled: true
  }
}
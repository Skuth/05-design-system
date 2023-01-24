import { ComponentProps, ElementType } from "react";
import { getVariantFontSize } from "@skuth-ignite-ui/tokens"

import { styled } from "../../styles";

export const Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",

  variants: {
    size: getVariantFontSize()
  },

  defaultVariants: {
    size: "md"
  }
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = "Text"
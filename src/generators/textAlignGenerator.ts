import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class TextAlignGenerator extends Generator {
  cssData = [
    new CssClassData("tex-ali", ["text-align"],
      ["underline", "overline", "none", "start", "end", "left", "right", "center",
        "justify", "justify-all", "match-parent", "inherit", "initial", "revert", "unset"]
    )
  ]
}
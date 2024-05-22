import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class WhiteSpaceGenerator extends Generator {
  cssData = [
    new CssClassData("whi-spa", ["white-space"],
      ["nowrap", "pre", "pre-wrap", "pre-line", "break-spaces", "normal"])
  ]
}
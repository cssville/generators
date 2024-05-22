import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class TextWrapGenerator extends Generator {
  cssData = [
    new CssClassData("tex-wra", ["text-wrap"],
      ["wrap", "nowrap", "balance", "inherit", "initial", "revert", "unset"])
  ]
}
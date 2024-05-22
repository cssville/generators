import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class WordBreakGenerator extends Generator {
  cssData = [
    new CssClassData("wor-bre", ["word-break"],
      ["break-all", "keep-all", "break-word", "normal"])
  ]
}
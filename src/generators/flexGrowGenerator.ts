import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class FlexGrowGenerator extends Generator {
  cssData = [
    new CssClassData("fle-gro", ["-o-flex-grow", "-webkit-flex-grow", "flex-grow"],
      ["0", "1", "2", "3", "inherit", "initial", "revert", "unset"])
  ]
}
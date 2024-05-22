import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class TopGenerator extends Generator {
  cssData = [
    new CssClassData("top", ["top"],
      ["0", "auto", "inherit", "initial"]),
  ]
}
import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class BoxSizingGenerator extends Generator {
  cssData = [
    new CssClassData("box-siz", ["box-sizing"],
      ["content-box", "border-box"]),
  ]
}
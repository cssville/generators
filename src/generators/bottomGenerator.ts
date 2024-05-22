import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class BottomGenerator extends Generator {
  cssData = [
    new CssClassData("bot", ["bottom"],
      ["0", "auto", "inherit", "initial"]),
  ]
}
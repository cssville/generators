import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class BorderWidthGenerator extends Generator {
  list = ["0px", "1px", "2px", "3px", "thin", "medium", "thick"]
  cssData = [
    new CssClassData("bor-wid", ["border-width"], this.list),
    new CssClassData("bor-bot-wid", ["border-bottom-width"], this.list),
    new CssClassData("bor-lef-wid", ["border-left-width"], this.list),
    new CssClassData("bor-rig-wid", ["border-right-width"], this.list),
    new CssClassData("bor-top-wid", ["border-top-width"], this.list),
  ]
}
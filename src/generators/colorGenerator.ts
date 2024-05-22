import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"
import CssvilleColors from "../vars/colors"

export class ColorGenerator extends Generator {
  cssData = [
    new CssClassData("col", ["color"],
      ["black", "white", "transparent", "inherit", "initial", "revert", "unset"],
      new Map([
        ...CssvilleColors.colorsPalettePostfixValues,
      ])
    )
  ]
}
import { IGenerator } from "./IGenerator";
import { PaddingGenerator } from "./generators/paddingGenerator";
import { MarginGenerator } from "./generators/marginGenerator";
import { DisplayGenerator } from "./generators/displayGenerator";
import { FlexDirectionGenerator } from "./generators/flexDirectionGenerator";
import { FlexGrowGenerator } from "./generators/flexGrowGenerator";
import { FlexWrapGenerator } from "./generators/flexWrapGenerator";
import { FlexShrinkGenerator } from "./generators/flexShrinkGenerator";
import { FloatGenerator } from "./generators/floatGenerator";
import { FontWeightGenerator } from "./generators/fontWeightGenerator";
import { FontFamilyGenerator } from "./generators/fontFamilyGenerator";
import { WidthGenerator } from "./generators/widthGenerator";
import { FontSizeGenerator } from "./generators/fontSizeGenerator";
import { PositionGenerator } from "./generators/positionGenerator";
import { AlignContentGenerator } from "./generators/alignContentGenerator";
import { AlignItemsGenerator } from "./generators/alignItemsGenerator";
import { JustifyContentGenerator } from "./generators/justifyContentGenerator";
import { TextDecorationGenerator } from "./generators/textDecorationGenerator";
import { HeightGenerator } from "./generators/heightGenerator";
import { ColorGenerator } from "./generators/colorGenerator";
import { BorderRadiusGenerator } from "./generators/borderRadiusGenerator";
import { CursorGenerator } from "./generators/cursorGenerator";
import { BackgroundColorGenerator } from "./generators/backgroundColorGenerator";
import { TextAlignGenerator } from "./generators/textAlignGenerator";
import { WordBreakGenerator } from "./generators/wordBreakGenerator";
import { WhiteSpaceGenerator } from "./generators/whiteSpaceGenerator";
import { ObjectFitGenerator } from "./generators/objectFitGenerator";
import { OpacityGenerator } from "./generators/opacityGenerator";
import { OverflowGenerator } from "./generators/overflowGenerator";
import { BorderGenerator } from "./generators/borderGenerator";
import CssvilleBreakpoints from "./vars/breakpoints";
import CssvilleColors from "./vars/colors";
import ThemeColors from "./vars/themeColors";
import { IVar } from "./IVar";
import { BoxShadowGenerator } from "./generators/boxShadowGenerator";
import CssvilleShadow from "./vars/shadow";
import CssvilleFontFamily from "./vars/fontFamily";
import { ZIndexGenerator } from "./generators/zIndexGenerator";
import { LineHeightGenerator } from "./generators/lineHeightGenerator";
import { BorderColorGenerator } from "./generators/borderColorGenerator";
import { BorderStyleGenerator } from "./generators/borderStyleGenerator";
import { BorderWidthGenerator } from "./generators/borderWidthGenerator";
import { TextWrapGenerator } from "./generators/textWrapGenerator";
import { GapGenerator } from "./generators/gapGenerator";
import { TopGenerator } from "./generators/topGenerator";
import { RightGenerator } from "./generators/rightGenerator";
import { LeftGenerator } from "./generators/leftGenerator";
import { BottomGenerator } from "./generators/bottomGenerator";
import { BoxSizingGenerator } from "./generators/boxSizing";
import { BorderCollapseGenerator } from "./generators/borderCollapseGenerator";

export class Cssville {

  public static generators: IGenerator[] =
    [
      new AlignContentGenerator("align-content"),
      new AlignItemsGenerator("align-items"),
      new BorderGenerator("border"),
      new BorderCollapseGenerator("border-collapse"),
      new BorderColorGenerator("border-color", false),
      new BorderStyleGenerator("border-style"),
      new BorderWidthGenerator("border-width"),
      new BorderRadiusGenerator("border-radius"),
      new BoxShadowGenerator("box-shadow"),
      new BoxSizingGenerator("box-sizing"),
      new BottomGenerator("bottom"),
      new BackgroundColorGenerator("background-color", false),
      new ColorGenerator("color", false),
      new CursorGenerator("cursor"),
      new DisplayGenerator("display"),
      new FlexDirectionGenerator("flex-direction"),
      new FlexGrowGenerator("flex-grow"),
      new FlexShrinkGenerator("flex-shrink"),
      new FlexWrapGenerator("flex-wrap"),
      new FloatGenerator("float"),
      new FontFamilyGenerator("font-family"),
      new FontSizeGenerator("font-size"),
      new FontWeightGenerator("font-weight"),
      new GapGenerator("gap"),
      new HeightGenerator("height"),
      new JustifyContentGenerator("justify-content"),
      new LeftGenerator("left"),
      new LineHeightGenerator("line-height"),
      new MarginGenerator("margin"),
      new ObjectFitGenerator("object-fit"),
      new OpacityGenerator("opacity"),
      new OverflowGenerator("overflow"),
      new PaddingGenerator("padding"),
      new PositionGenerator("position"),
      new RightGenerator("right"),
      new TextAlignGenerator("text-align"),
      new TextDecorationGenerator("text-decoration"),
      new TextWrapGenerator("text-wrap"),
      new TopGenerator("top"),
      new WidthGenerator("width"),
      new WhiteSpaceGenerator("white-space"),
      new WordBreakGenerator("word-break"),
      new ZIndexGenerator("z-index"),
    ];

  public static breakpoints: IVar[] = CssvilleBreakpoints.breakpoints;

  public static variables: IVar[][] =
    [
      this.breakpoints,
      CssvilleFontFamily.vars,
      CssvilleColors.colorsPalette,
      CssvilleShadow.vars,
    ];

  public static rootValues: Map<string, IVar> = new Map([
    ["font-family", CssvilleFontFamily.primary],
    ["color", ThemeColors.text],
  ]);

  static getCss(classes: string[] = []): string {
    let css = "";
    let allVarsCss = "";
    for (let varsCollection of this.variables) {
      let collectionCss = "";
      for (let v of varsCollection) {
        collectionCss += ` ${v.css}`;
      }
      allVarsCss += ` ${collectionCss}`;
    }
    for (const [key, value] of this.rootValues) {
      allVarsCss += ` ${key}: ${value.var};`;
    }
    css += `:root {${allVarsCss}} `;
    for (let i = 0; i < this.generators.length; i++) {
      const g = this.generators[i];
      const cssPart = g.generate("", classes);
      css += cssPart;
    }
    for (const breakpoint of this.breakpoints) {
      let innerCss = "";
      for (let j = 0; j < this.generators.length; j++) {
        const generator = this.generators[j];
        if (generator.generateCssForBreakpoints) {
          const cssPartForPrefix = generator.generate(breakpoint.name, classes);
          innerCss += cssPartForPrefix;
        }
      }
      css += `@media screen and (max-width: ${breakpoint.value}) { ${innerCss}} `;
    }
    return css;
  }
}
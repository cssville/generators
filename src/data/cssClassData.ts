export class CssClassData {
  public constructor(className: string, cssProperties: string[], postfixArray: string[], postfixValuesMap: Map<string, string[]> = new Map()) {
    this.className = className;
    this.cssProperties = cssProperties;
    this.postfixValuesMap = postfixValuesMap;

    this.cssParts = new Map<string, string>();
    if (postfixArray !== undefined) {
      postfixArray.forEach(element => {
        this.postfixValuesMap.set(element, [element]);
      });
    }
    this.postfixValuesMap.forEach((value: string[], key: string) => {
      let postfix = key;
      let innerProperties = "";
      this.cssProperties.forEach(cssProperty => {
        value.forEach(v => {
          innerProperties += `${cssProperty}: ${v}; `;
        });
      });
      this.cssParts.set(`${this.className}-${postfix}`.replace(/\//g, "\\/"), innerProperties);
    });
  }

  public className: string;
  public cssProperties: string[];
  public postfixValuesMap: Map<string, string[]>;

  private cssParts: Map<string, string>;

  getCss(prefix: string = "", classes: string[]): string {
    let css = "";
    const hoverPostfix = "hover";
    this.cssParts.forEach((value: string, key: string) => {
      const className = `${prefix === "" ? "" : `${prefix}-`}${key}`;
      const classNameWithHoverPostfix = `${prefix === "" ? "" : `${prefix}-`}${key}-${hoverPostfix}`;
      if (classes.length === 0) {
        css += `.${className} {${value}} `;
        css += `.${classNameWithHoverPostfix}:hover {${value}} `;
      }
      if (classes.length > 0 && classes.indexOf(className) >= 0) {
        css += `.${className} {${value}} `;
        css += `.${classNameWithHoverPostfix}:hover {${value}} `;
      }
    });
    return css;
  }
}
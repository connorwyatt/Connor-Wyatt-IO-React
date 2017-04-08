export class ClassHelper {
  public static parse(classes: Array<string|Dictionary<boolean>>|string|Dictionary<boolean>): string {
    let classesArray: Array<string|Dictionary<boolean>> = classes instanceof Array ? classes : [classes];

    return classesArray.map(classItem => {
      if (typeof classItem === 'string') {
        return classItem;
      }

      return this.parseObject(classItem);
    }).join(' ');
  };

  private static parseObject(classes: Dictionary<boolean>) {
    return Object.keys(classes).reduce((accumulatedClasses: Array<string>, currentClass: string) => {
      if (!classes[currentClass]) {
        return accumulatedClasses;
      }

      return [...accumulatedClasses, currentClass];
    }, []).join(' ');
  }
}

export class CwIconRegistryService {
  private static instance = new CwIconRegistryService();

  public static getInstance(): CwIconRegistryService {
    return CwIconRegistryService.instance;
  }

  private iconRegistry = new Map<string, string>();

  private constructor() {
  }

  public getIcon(name: string): string {
    if (!this.iconRegistry.has(name)) {
      throw new Error(`Error: No icon defined for "${name}".`);
    }

    return this.iconRegistry.get(name) as string;
  }

  public setIcon(name: string, icon: string): void {
    this.iconRegistry.set(name, icon);
  }
}

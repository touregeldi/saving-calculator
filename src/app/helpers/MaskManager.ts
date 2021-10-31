export class MaskManager {
  static stringMaskToNormal(input: string): string {
    return input.split(',').join('');
  }
}

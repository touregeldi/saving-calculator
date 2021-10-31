export class DateManager {

  static monthDifferenceCalculater(first: Date, second: Date): number {
    let months;
    months = (second.getFullYear() - first.getFullYear()) * 12;
    months -= first.getMonth();
    months += second.getMonth();
    return months <= 0 ? 0 : months;
  }

  static currentMonthChecker(date: Date): boolean {
    const now = new Date();
    return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
  }
}

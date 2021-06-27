export type DayOfWeek =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export type Employment = 'full-time' | 'part-time' | 'project' | 'internship';

export const mapEmploymentToText: Record<Employment, string> = {
  project: 'Проектная работа',
  internship: 'Стажировка',
  "full-time": 'Полная занятость',
  "part-time": 'Частичная занятость'
}

export type WeekDay = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export type Day = {
  weekDay: WeekDay;
  start: string;
  end: string;
}

export type ScheduleProps = {
  days: Day[];
  setDays: (d: Day[]) => void;
  readonly?: boolean;
};

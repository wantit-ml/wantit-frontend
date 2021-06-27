import React  from "react";

import NumberFormat from "react-number-format";

import {VStack, HStack, Select, Input, Button} from "@chakra-ui/react";

import { ScheduleProps, WeekDay, Day } from "./Schedule.interface";
import { DeleteIcon } from "@chakra-ui/icons";

const allWeekDays: WeekDay[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const mapDayToText: Record<WeekDay, string> = {
  monday: 'Понедельник',
  tuesday: 'Вторник',
  wednesday: 'Среда',
  thursday: 'Четверг',
  friday: 'Пятница',
  saturday: 'Суббота',
  sunday: 'Воскресенье',
}

export const Schedule = ({ readonly, days, setDays }: ScheduleProps): JSX.Element => {
  const unusedDays = allWeekDays.filter(day => (days.find(d => d.weekDay === day) === undefined))

  const canAddDay = !readonly && days.length < allWeekDays.length;
  const canDeleteDay = days.length > 1;

  const handleDayChange = (idx: number): React.ChangeEventHandler<HTMLSelectElement> => (e) => {
    if (readonly) {
      return;
    }

    setDays(days.map((day, index) => {
      if (index === idx) {
        return {...day, weekDay: e.target.value as WeekDay};
      }

      return day;
    }))
  }

  const deleteDay = (idx: number) => () => {
    setDays(days.filter((_, i) => i != idx));
  }

  const addDay = () => {
    setDays(days.concat([{ weekDay: unusedDays[0], start: '12:00', end: '18:00' }]));
  }

  return <VStack alignItems='flex-start'>
    {days.map((day, index) => (
      <HStack key={day.weekDay}>
        <Select flex='4' id='schedule' value={day.weekDay} onChange={handleDayChange(index)} disabled={readonly}>
          {
            unusedDays.concat([day.weekDay]).map(selectDay => (
              <option id={`schedule-${selectDay}`} value={selectDay} key={selectDay}>{mapDayToText[selectDay]}</option>
            ))
          }
        </Select>

        <NumberFormat
          flex='1'
          value={day.start}
          format="##:##"
          mask="_"
          customInput={(props) => {
            return (
              <Input
                id={`${day.weekDay}-from`}
                placeholder="12:00"
                {...props}
              />
            );
          }}
        />

        <NumberFormat
          flex='1'
          value={day.end}
          format="##:##"
          mask="_"
          customInput={(props) => {
            return (
              <Input
                id={`${day.weekDay}-to`}
                placeholder="18:00"
                {...props}
              />
            );
          }}
        />

        {
          canDeleteDay && !readonly && (
            <DeleteIcon
              onClick={deleteDay(index)}
              _hover={{ cursor: 'pointer' }}
            />
          )
        }
      </HStack>
    ))}

  {
    !readonly && canAddDay && (
    <Button
    variant="link"
    color="black"
    textDecoration="none"
    fontWeight="medium"
    _hover={{ textDecoration: 'none' }}
    _active={{ focus: 'none' }}
    onClick={addDay}
    >
    Добавить день
    </Button>
    )
  }
  </VStack>
};

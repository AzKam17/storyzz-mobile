import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { XStack, YStack, Text, styled, View } from "tamagui";
import { Pressable } from "react-native";
import moment, { Moment } from "moment";
import "moment/locale/fr";

interface Props {
    onChange?: (date: Moment) => void;
}

const DayText = styled(Text, {
  color: "rgb(107, 114, 128)",
  fontFamily: "RedHatDisplay_500Medium",
});

const MonthDayText = styled(Text, {
  color: "black",
  fontFamily: "RedHatDisplay_500Medium",
  textAlign: "center",
  width: 30,
  height: 30,
  lineHeight: 30,
});

const AnotherMonthDayText = styled(Text, {
  color: "rgb(209, 213, 219)",
  fontFamily: "RedHatDisplay_500Medium",
  textAlign: "center",
  width: 30,
  height: 30,
  lineHeight: 30,
});

const SelectedDay = styled(Text, {
  color: "white",
  fontFamily: "RedHatDisplay_700Bold",
  backgroundColor: "red",
  textAlign: "center",
  width: 30,
  height: 30,
  lineHeight: 30,
  borderRadius: 15,
});

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const CalendarDisplayView = React.memo(function ({ onChange }: Props) {
  moment.locale("fr");
  const [month, setMonth] = React.useState(moment().month());
  const [year, setYear] = React.useState(moment().year());
  const [selectedDate, setSelectedDate] = React.useState<Moment | null>(
    moment()
  );

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handleDayPress = (date: Moment) => {
    setSelectedDate(date);
    if (onChange) {
      onChange(date);
    }
  };

  const generateCalendarDays = () => {
    const firstDayOfMonth = moment().year(year).month(month).startOf("month");
    const lastDayOfMonth = moment().year(year).month(month).endOf("month");

    const firstDayOfWeek =
      firstDayOfMonth.day() === 0 ? 6 : firstDayOfMonth.day() - 1;

    const daysFromPrevMonth = firstDayOfWeek;

    const daysInMonth = lastDayOfMonth.date();

    const totalDaysToShow =
      Math.ceil((daysFromPrevMonth + daysInMonth) / 7) * 7;
    const daysFromNextMonth = totalDaysToShow - daysFromPrevMonth - daysInMonth;

    const calendarDays = [];

    // Add days from previous month
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevMonthYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = moment()
      .year(prevMonthYear)
      .month(prevMonth)
      .endOf("month")
      .date();

    for (
      let i = daysInPrevMonth - daysFromPrevMonth + 1;
      i <= daysInPrevMonth;
      i++
    ) {
      calendarDays.push({
        day: i,
        currentMonth: false,
        date: moment().year(prevMonthYear).month(prevMonth).date(i),
      });
    }

    // Add days from current month
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push({
        day: i,
        currentMonth: true,
        date: moment().year(year).month(month).date(i),
      });
    }

    // Add days from next month
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextMonthYear = month === 11 ? year + 1 : year;

    for (let i = 1; i <= daysFromNextMonth; i++) {
      calendarDays.push({
        day: i,
        currentMonth: false,
        date: moment().year(nextMonthYear).month(nextMonth).date(i),
      });
    }

    return calendarDays;
  };

  const isDateSelected = (date: Moment) => {
    if (!selectedDate || !date) return false;
    return date.format("YYYY-MM-DD") === selectedDate.format("YYYY-MM-DD");
  };

  const renderCalendarGrid = () => {
    const days = generateCalendarDays();
    const rows = [];

    for (let i = 0; i < days.length; i += 7) {
      const week = days.slice(i, i + 7);
      rows.push(
        <XStack
          key={`week-${i}`}
          justifyContent="space-between"
          alignItems="center"
          marginTop={10}
        >
          {week.map((day, index) => (
            <Pressable
              key={`day-${index}`}
              onPress={() => handleDayPress(day.date)}
            >
              {isDateSelected(day.date) ? (
                <SelectedDay>{day.day}</SelectedDay>
              ) : day.currentMonth ? (
                <MonthDayText>{day.day}</MonthDayText>
              ) : (
                <AnotherMonthDayText>{day.day}</AnotherMonthDayText>
              )}
            </Pressable>
          ))}
        </XStack>
      );
    }

    return rows;
  };

  const formattedMonth = React.useMemo(
    function () {
      return capitalizeFirstLetter(
        moment().year(year).month(month).format("MMMM YYYY")
      );
    },
    [year, month]
  );

  return (
    <YStack gap={15} backgroundColor={"white"} padding={16} borderRadius={10}>
      <XStack justifyContent="space-between" alignItems="center">
        <View padding={5} onPress={handlePrevMonth}>
          <AntDesign name="left" size={18} color="rgb(156, 163, 175)" />
        </View>
        <Text fontSize={18} fontFamily={"RedHatDisplay_700Bold"}>
          {formattedMonth}
        </Text>
        <View padding={5} onPress={handleNextMonth}>
          <AntDesign name="right" size={18} color="rgb(156, 163, 175)" />
        </View>
      </XStack>
      <YStack paddingHorizontal={5}>
        <XStack justifyContent="space-between" alignItems="center">
          <DayText>Lun</DayText>
          <DayText>Mar</DayText>
          <DayText>Mer</DayText>
          <DayText>Jeu</DayText>
          <DayText>Ven</DayText>
          <DayText>Sam</DayText>
          <DayText>Dim</DayText>
        </XStack>

        {renderCalendarGrid()}
      </YStack>
    </YStack>
  );
});

"use strict";

const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

const today = new Date();

for (let i = 0; i < week.length; i++) {
  if (i === 5 || i === 6) {
    console.log("<i>" + week[i] + "</i>");
  } else {
    if (i === today.getDay() - 1) {
      console.log("<b>" + week[i] + "</b>");
    } else {
      console.log(week[i]);
    }
  }
  console.log("<br>");
}

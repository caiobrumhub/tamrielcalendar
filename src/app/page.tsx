"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { formatMonthDropdown } from "react-day-picker";
import { tamrielMonths, holidays } from "@/data/calendarData";
import sidebar from  "@/components/sidebar.tsx"

export default function Page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  
  return (
  <div className="flex">
      <Sidebar
        moonPhases={moonPhasesData}
        zodiacSigns={zodiacSignsData}
        holidays={holidays}
      />
    <main className="flex flex-col min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Calendar 
        mode="single" 
        selected={date} 
        onSelect={setDate} 
        className="rounded-md border shadow-sm"
        captionLayout="dropdown"
        formatters={{
          formatMonthCaption: (d) => tamrielMonths[d.getMonth()],
          formatMonthDropdown: (d) => tamrielMonths[d.getMonth()],
        }}
        modifiers={{
          holidays: (d) => {
            const day = String(d.getDate()).padStart(2, "0");
            const month = String(d.getMonth() + 1).padStart(2, "0");
            return holidays.some((h) => h.date === `${day}/${month}`);
          }
        }}
        modifiersClassNames={{
          holidays:
            "relative after:content-[''] after:absolute after:bottom-1 after:right-1 after:w-2 after:h-2 after:bg-blue-500 after:rounded-full",
        }}
      />
      <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
        Selected date:{" "}
        {date
          ? date.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
          : "no day"}
      </p>
    </main>
  </div>
  );
}

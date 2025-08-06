"use client";

import * as React from "react";
import Sidebar from "@/components/Sidebar";
import { Calendar } from "@/components/ui/calendar";

// dados do calendário
import { tamrielMonths, holidays } from "@/data/calendarData";
// dados do sidebar
import { moonPhasesData, zodiacSignsData } from "@/data/sidebarData";

export default function Page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Menu lateral */}
      <Sidebar
        moonPhases={moonPhasesData}
        zodiacSigns={zodiacSignsData}
        holidays={holidays}
      />

      {/* Área principal */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow-sm"
          captionLayout="dropdown"
          formatters={{
            formatMonthCaption: (d) => tamrielMonths[d.getMonth()],
            formatMonthDropdownCaption: (d) => tamrielMonths[d.getMonth()],
          }}
          modifiers={{
            holidays: (d) => {
              const day = String(d.getDate()).padStart(2, "0");
              const month = String(d.getMonth() + 1).padStart(2, "0");
              return holidays.some((h) => h.date === `${day}/${month}`);
            },
          }}
          modifiersClassNames={{
            holidays:
              "relative after:content-[''] after:absolute after:bottom-1 after:right-1 after:inline-block after:w-2 after:h-2 after:bg-blue-500 after:rounded-full",
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

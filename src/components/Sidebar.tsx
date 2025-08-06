"use client";

import * as React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Item {
  title: string;
  description: string;
}

interface SidebarProps {
  moonPhases: Item[];
  zodiacSigns: Item[];
  holidays: Item[];
}

export default function Sidebar({ moonPhases, zodiacSigns, holidays }: SidebarProps) {
  return (
    <aside className="w-64 bg-white dark:bg-neutral-950 p-4 border-r border-gray-200 dark:border-gray-800">
      <ScrollArea className="h-full">
        <nav className="space-y-4">
          <Section title="Moon Phases" items={moonPhases} />
          <Section title="Zodiac Signs" items={zodiacSigns} />
          <Section title="Holidays" items={holidays} />
        </nav>
      </ScrollArea>
    </aside>
  );
}

function Section({ title, items }: { title: string; items: Item[] }) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="w-full text-left font-medium">
        {title}
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-4 space-y-2 mt-2">
        {items.map((item) => (
          <div key={item.title} className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-medium">{item.title}:</span> {item.description}
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
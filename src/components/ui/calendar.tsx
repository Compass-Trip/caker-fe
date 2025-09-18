import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/**이건 추후에 바꿀 예정입니다. */
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  //   buttonVariant = "default",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)]",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatCaption: (month) =>
          `${month.getFullYear()}.${month.getMonth() + 1}`,

        formatWeekdayName: (d) =>
          ["일", "월", "화", "수", "목", "금", "토"][d.getDay()],
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn("flex gap-4 flex-col relative", defaultClassNames.months),

        month: cn(
          "flex flex-col w-full gap-2 pt-(--cell-size)",
          defaultClassNames.month
        ),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full text-base font-semibold",
          defaultClassNames.month_caption
        ),

        weekdays: cn(
          "flex [&>li:first-child]:text-destructive [&>li:last-child]:text-muted-foreground",
          defaultClassNames.weekdays
        ),
        weekday: cn(
          "rounded-md flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday
        ),

        week: cn("flex w-full mt-2", defaultClassNames.week),

        day: cn(
          "relative w-full h-full p-0 text-center group/day aspect-square select-none",
          defaultClassNames.day
        ),

        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),

        today: cn("data-[selected=true]:rounded-none", defaultClassNames.today),

        hidden: cn("invisible", defaultClassNames.hidden),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        table: "w-full border-collapse",

        button_previous: cn(
          //   buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50 rounded-md",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          //   buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50 rounded-md",
          defaultClassNames.button_next
        ),

        // 나머지는 그대로 유지
        ...classNames,
      }}
      components={{
        // 기존 커스텀들 유지
        Root: ({ className, rootRef, ...props }) => (
          <div
            data-slot="calendar"
            ref={rootRef}
            className={cn(className)}
            {...props}
          />
        ),
        Chevron: ({ className, orientation, ...props }) =>
          orientation === "left" ? (
            <ChevronLeftIcon className={cn("size-4", className)} {...props} />
          ) : orientation === "right" ? (
            <ChevronRightIcon className={cn("size-4", className)} {...props} />
          ) : (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          ),

        DayButton: CalendarDayButton,

        WeekNumber: ({ children, ...props }) => (
          <td {...props}>
            <div className="flex size-(--cell-size) items-center justify-center text-center">
              {children}
            </div>
          </td>
        ),

        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  children, // ✅ children 받아서 직접 렌더
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  const date = day.date;
  const isToday = new Date().toDateString() === date.toDateString();
  const weekday = date.getDay();
  const isSunday = weekday === 0;

  return (
    <button
      ref={ref}
      data-day={date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "flex aspect-square size-auto w-full min-w-(--cell-size) flex-col items-center justify-center gap-0 leading-none font-normal",

        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[selected-single=true]:rounded-md",

        "data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-middle=true]:rounded-none",
        "data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-start=true]:rounded-l-md",
        "data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-end=true]:rounded-r-md",

        "group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px]",

        !modifiers.selected &&
          !modifiers.outside &&
          !modifiers.disabled &&
          isSunday &&
          "text-red-500",

        defaultClassNames.day,
        className
      )}
      {...props}
    >
      <span className="text-sm">{children}</span>

      {isToday && !modifiers.selected && (
        <span className="mt-0.5 text-[10px] text-primary font-medium">
          오늘
        </span>
      )}
    </button>
  );
}

export { Calendar, CalendarDayButton };

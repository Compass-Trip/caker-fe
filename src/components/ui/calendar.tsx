import * as React from 'react';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react';
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

/**이건 추후에 바꿀 예정입니다. */
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant'];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'bg-background group/calendar p-3',

        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatCaption: (month) =>
          `${month.getFullYear()}.${month.getMonth() + 1}`,

        formatWeekdayName: (d) =>
          ['일', '월', '화', '수', '목', '금', '토'][d.getDay()],
        ...formatters,
      }}
      classNames={{
        root: cn('w-full', defaultClassNames.root),
        months: cn('flex gap-4 flex-col', defaultClassNames.months),

        month: cn('flex flex-col w-full gap-0.5', defaultClassNames.month),
        nav: cn(
          'flex items-center w-full justify-between relative  ',
          defaultClassNames.nav
        ),
        month_caption: cn(
          'flex items-center justify-center pb-3 text-[32px] font-medium absolute left-1/2 -translate-x-1/2 -translate-y-[100%] z-20 pointer-events-none',
          defaultClassNames.month_caption
        ),

        weekdays: cn(
          'flex [&>li:first-child]:text-[#2FA5EE] [&>li:last-child]:text-[#2D2A32]',
          defaultClassNames.weekdays
        ),
        weekday: cn(
          'rounded-md flex-1 font-medium text-[20px] select-none',
          defaultClassNames.weekday
        ),

        week: cn('flex w-full  gap-3', defaultClassNames.week),

        day: cn(
          'flex items-center justify-center relative  w-full h-full p-0 text-center group/day select-none',
          defaultClassNames.day
        ),

        outside: cn(
          'text-muted-foreground aria-selected:text-muted-foreground',
          defaultClassNames.outside
        ),

        today: cn('data-[selected=true]:rounded-none', defaultClassNames.today),

        hidden: cn('invisible', defaultClassNames.hidden),
        disabled: cn(
          'text-muted-foreground opacity-50',
          defaultClassNames.disabled
        ),
        table: 'w-full border-collapse',

        button_previous: cn(
          //   buttonVariants({ variant: buttonVariant }),
          'w-10  p-2.5 select-none aria-disabled:opacity-50 rounded-lg bg-none relative z-20',
          defaultClassNames.button_previous
        ),
        button_next: cn(
          //   buttonVariants({ variant: buttonVariant }),
          'w-10 h-10 p-2.5 select-none aria-disabled:opacity-50 rounded-lg bg-none relative z-20',
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
          orientation === 'left' ? (
            <ChevronLeftIcon className={cn('size-5', className)} {...props} />
          ) : orientation === 'right' ? (
            <ChevronRightIcon className={cn('size-5', className)} {...props} />
          ) : (
            <ChevronDownIcon className={cn('size-5', className)} {...props} />
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
        'flex size-auto w-9 h-[42px] flex-col items-center justify-center gap-0 leading-none font-normal rounded-full',

        'data-[selected-single=true]:bg-[#FF3A4E] data-[selected-single=true]:text-white',

        'data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-middle=true]:rounded-none',
        'data-[range-start=true]:bg-[#FF3A4E] data-[range-start=true]:text-white',
        'data-[range-end=true]:bg-[#FF3A4E] data-[range-end=true]:text-white',

        'group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px]',

        !modifiers.selected &&
          !modifiers.outside &&
          !modifiers.disabled &&
          isSunday &&
          'text-[#2FA5EE]',

        !modifiers.selected &&
          !modifiers.outside &&
          !modifiers.disabled &&
          !isSunday &&
          'text-[#2D2A32]',

        defaultClassNames.day,
        className
      )}
      {...props}
    >
      <span className="text-base font-normal">{children}</span>

      {isToday && !modifiers.selected && (
        <span className="mt-0.5 text-[10px] text-[#FF3A4E] font-medium">
          오늘
        </span>
      )}
    </button>
  );
}

export { Calendar, CalendarDayButton };

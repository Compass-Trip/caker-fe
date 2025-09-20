import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  type BasicTabsProps,
} from "../ui/tabs";
import { cn } from "@/lib/utils";

export interface TabsItemsProps {
  label: React.ReactNode;
  value: string;
  content?: React.ReactNode;
}

export interface IndicatorTabsProps extends BasicTabsProps {
  tabsItems: Array<TabsItemsProps>;
  classNames?: {
    tabs?: string;
    list?: string;
    trigger?: string;
    content?: string;
  };
}

const IndicatorTabs: React.FC<IndicatorTabsProps> = ({
  tabsItems = [],
  classNames,
  ...props
}) => {
  const indicatorTabListStyled =
    "inline-flex h-10 items-center justify-start space-x-1 relative";
  const indicatorTabTriggerStyled =
    "h-full inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium text-muted-foreground transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:text-foreground relative after:absolute after:bg-muted-foreground after:transition-transform after:duration-300 data-[state=active]:text-primary data-[state=active]:font-semibold data-[state=active]:after:scale-x-0 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none";
  return (
    <Tabs
      defaultValue={tabsItems.length > 0 ? tabsItems[0].value : ""}
      className={cn(classNames?.tabs)}
      orientation="horizontal"
      {...props}
    >
      <TabsList
        className={cn(
          indicatorTabListStyled,
          "border-border border-b",
          classNames?.list
        )}
      >
        {tabsItems.map((tabItem) => (
          <TabsTrigger
            key={tabItem.value}
            value={tabItem.value}
            className={cn(
              indicatorTabTriggerStyled,
              "border-b-2 after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:scale-x-0 hover:after:scale-x-100",
              classNames?.trigger
            )}
          >
            {tabItem.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsItems.map((tabItem) => (
        <TabsContent
          key={tabItem.value}
          value={tabItem.value}
          className={cn("mt-2 focus-visible:outline-none", classNames?.content)}
        >
          {tabItem.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default IndicatorTabs;

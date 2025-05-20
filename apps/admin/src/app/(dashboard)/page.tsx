import { getRequiredUser } from "@/lib/auth-session";
import {
  Button,
  Input,
  InputIcon,
  InputRoot,
  InputWrapper,
  Shortcut,
} from "@feedy/shared";
import { RiCalendarLine, RiFilter3Fill, RiSearch2Line } from "@remixicon/react";
import { PageHeader } from "../components/layout/page-header";
import { DateSelector } from "../components/ui/date-selector";
import { DaySelection } from "../components/ui/day-selection";
export default async function Home() {
  const user = await getRequiredUser();
  const fullName = user.firstname + " " + user.lastname;
  return (
    <main className="w-full h-full flex flex-col">
      <PageHeader
        type="image"
        title={fullName}
        description="Quoi de neuf aujourd'hui ? 👋"
        image="https://avatar.iran.liara.run/public/1"
      />
      <section className="grid grid-cols-4 grid-row-5 gap-8 px-8 pb-8 flex-1">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl p-4 w-full h-full border border-stroke-soft-200 bg-bg-white-0"
          >
            <h2>Card {index + 1}</h2>
          </div>
        ))}
        <div className="rounded-xl w-full h-full border border-stroke-soft-200 bg-bg-white-0 row-span-4 flex flex-col">
          {/* Schedules */}
          <div className="flex p-4 gap-4 flex-col">
            {/* Head */}
            <div className="flex gap-2 items-center">
              <RiCalendarLine className="size-5.5 text-text-sub-600" />
              <p className="text-label-md text-text-strong-950 flex-1">
                Schedule
              </p>
              <Button variant="neutral" mode="stroke" size="xsmall">
                See all
              </Button>
            </div>

            {/* Date selector */}
            <DateSelector />

            {/* Day selection */}
            <DaySelection />

            {/* Input */}
            <InputRoot>
              <InputWrapper>
                <InputIcon as={RiSearch2Line} />
                <Input type="text" placeholder="Search..." />
                <Shortcut label="k" />
                <RiFilter3Fill className="size-5 text-text-sub-600" />
              </InputWrapper>
            </InputRoot>
          </div>
          {/* <div className="flex flex-col flex-1">
            <TabMenuHorizontalRoot defaultValue="overview">
              <TabMenuHorizontalList className="justify-center">
                <TabMenuHorizontalTrigger value="overview">
                  <TabMenuHorizontalIcon as={RiLayoutGridLine} />
                  Meetings
                </TabMenuHorizontalTrigger>
                <TabMenuHorizontalTrigger value="dashboard">
                  <TabMenuHorizontalIcon as={RiLayoutGridLine} />
                  Events
                </TabMenuHorizontalTrigger>
                <TabMenuHorizontalTrigger value="settings">
                  <TabMenuHorizontalIcon as={RiLayoutGridLine} />
                  Holiday
                </TabMenuHorizontalTrigger>
              </TabMenuHorizontalList>
            </TabMenuHorizontalRoot>
            <div className="p-4 flex flex-col gap-2 flex-1">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-xl p-4 flex flex-col gap-3.5 bg-bg-weak-50 flex-1"
                >
                  <h2>Card {index + 1}</h2>
                </div>
              ))}
            </div>
          </div> */}
        </div>
        {Array.from({ length: 13 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl p-4 w-full h-full border border-stroke-soft-200 bg-bg-white-0"
          >
            <h2>Card {index + 1}</h2>
          </div>
        ))}
      </section>
    </main>
  );
}

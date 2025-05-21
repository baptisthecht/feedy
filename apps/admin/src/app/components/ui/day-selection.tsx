import { cn, CompactButton } from "@feedy/shared";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

export const DaySelection = () => {
  return (
    <div className="flex gap-2 items-center ">
      <CompactButton variant="stroke" size="large">
        <RiArrowLeftSLine className="size-4.5 text-text-sub-600" />
      </CompactButton>
      <section className="flex gap-1 flex-1">
        <Day day="Fri" number={31} isToday={false} />
        <Day day="Sat" number={1} isToday={false} />
        <Day day="Sun" number={2} isToday={true} />
        <Day day="Mon" number={3} isToday={false} />
        <Day day="Tue" number={4} isToday={false} />
      </section>
      <CompactButton variant="stroke" size="large">
        <RiArrowRightSLine className="size-4.5 text-text-sub-600" />
      </CompactButton>
    </div>
  );
};

const Day = ({
  day,
  number,
  isToday,
}: {
  day: string;
  number: number;
  isToday: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col  items-center gap-1 rounded-lg py-2 px-1 flex-1",
        {
          "bg-primary-base": isToday,
        },
      )}
    >
      <p
        className={cn("text-paragraph-xs text-text-sub-600", {
          "text-static-white": isToday,
        })}
      >
        {day.padStart(2, "0")}
      </p>
      <p
        className={cn("text-label-md text-text-strong-950", {
          "text-static-white": isToday,
        })}
      >
        {number}
      </p>
    </div>
  );
};

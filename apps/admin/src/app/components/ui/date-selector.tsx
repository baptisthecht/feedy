import { CompactButton } from "@feedy/shared";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

export const DateSelector = () => {
  return <div className="bg-bg-weak-50 p-1.5 flex gap-1.5 justify-between items-center rounded-lg">
    <CompactButton variant="white" size="large">
      <RiArrowLeftSLine className="size-4.5 text-text-sub-600" />
    </CompactButton>
    <p className="text-label-sm text-text-sub-600">January 2025</p>
    <CompactButton variant="white" size="large">
      <RiArrowRightSLine className="size-4.5 text-text-sub-600" />
    </CompactButton>
  </div>;
};

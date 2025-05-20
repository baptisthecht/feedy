import { Button } from "@feedy/shared";
import {
  RiAddLine,
  RiCalendarCheckLine,
  RiNotification3Line,
  RiSearch2Line,
} from "@remixicon/react";
import Image from "next/image";
import { ComponentType, SVGProps } from "react";

interface PageHeaderProps {
  type: "basic" | "image" | "icon";
  title: string;
  description: string;
  image?: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
}

export const PageHeader = ({
  type,
  title,
  description,
  icon: Icon,
  image,
}: PageHeaderProps) => {
  return (
    <header className="w-full py-5 px-8 flex items-center gap-3 bg-bg-white-0">
      {/* Icon */}
      {type === "icon" && !!Icon && (
        <figure className="size-12 rounded-full bg-bg-white-0 border-stroke-soft-200 border p-3">
          {<Icon className="size-6 text-text-sub-600" />}
        </figure>
      )}

      {/* Image */}
      {type === "image" && !!image && (
        <figure className="size-12 rounded-full bg-bg-white-0">
          <Image src={image} alt={title} width={48} height={48} />
        </figure>
      )}

      {/* Texts */}
      <div className="flex-1">
        {/* Title */}
        <h1 className="text-label-lf text-text-strong-950">{title}</h1>
        {/* Description */}
        <p className="text-paragraph-sm text-text-sub-600">{description}</p>
      </div>

      {/* Search */}
      <button className="w-10 h-10 flex items-center justify-center">
        <RiSearch2Line className="size-5 text-text-sub-600" />
      </button>

      {/* Notifications */}
      <button className="w-10 h-10 flex items-center justify-center">
        <RiNotification3Line className="size-5 text-text-sub-600" />
      </button>

      {/* Schedule  */}
      <Button variant="neutral" mode="stroke" size="medium">
        <RiCalendarCheckLine className="size-4.5 text-text-sub-600" />
        <span>Schedule</span>
      </Button>

      {/* Request  */}
      <Button variant="primary" mode="filled" size="medium">
        <RiAddLine className="size-4.5 text-static-white" />
        <span>Create Request</span>
      </Button>
    </header>
  );
};

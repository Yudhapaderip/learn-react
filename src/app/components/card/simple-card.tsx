import clsxm from "@/app/libs/style";
import * as React from "react";

const CARD_SIZE = ["sm", "base"] as const;
type CardSize = (typeof CARD_SIZE)[number];

type SimpleCardProps = {
  size?: CardSize;
} & React.ComponentPropsWithoutRef<"div">;

export default function SimpleCard({
  className,
  size = "base",
  ...rest
}: SimpleCardProps) {
  return (
    <div
      className={clsxm(
        "bg-background shadow-sm",
        [
          size === "sm" && ["p-4", "rounded-lg"],
          size === "base" && ["p-5", "rounded-xl"],
        ],
        className,
      )}
      {...rest}
    />
  );
}

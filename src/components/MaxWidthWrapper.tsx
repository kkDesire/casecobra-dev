import { cn } from "@/lib/utils";
import { ReactNode } from "react";

/**
 * Renders a div element with a specified class name and displays its children.
 *
 * @param {string | undefined} className - The class name for the div element.
 * @param {ReactNode} children - The children elements to be displayed inside the div.
 * @return {JSX.Element} The div element with the specified class name and children.
 */
const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

/**
 * Renders a phone component with an overlayed image.
 *
 * @param {string} imgSrc - The source URL of the overlayed image.
 * @param {string} className - Additional CSS class names for the phone component.
 * @param {boolean} [dark=false] - Indicates whether the phone component should use the dark template.
 * @param {HTMLAttributes<HTMLDivElement>} props - Additional props for the phone component.
 * @returns {JSX.Element} The rendered phone component.
 */
const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className="pointer-events-none z-50 select-none"
        alt="Phone image"
      />
      <div className="absolute -z-10 inset-0">
        <img
          className="object-cover"
          src={imgSrc}
          alt="overlaying phone image"
        />
      </div>
    </div>
  );
};

export default Phone;

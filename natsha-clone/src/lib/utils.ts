import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to conditionally join classNames
 * with proper Tailwind override merging.
 *
 * Example:
 *   cn("p-2", condition && "text-red-500", "text-blue-500")
 *   => "p-2 text-blue-500"
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

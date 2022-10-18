import { twMerge } from "tailwind-merge";
import clsx from "clsx";

/** Merge classes with tailwind-merge with clsx full feature */
export function clsxm(...classes: any[]) {
  return twMerge(clsx(...classes))
}

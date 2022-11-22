import React from "react";
import Link from "next/link";
import classNames from "classnames";

export default function Button({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={classNames(
        "block border border-gray-500 px-4 py-2 rounded-full text-gray-50 bg-gray-900",
        "max-w-max",
        "hover:bg-gray-50 hover:text-gray-900 hover:border-gray-50 transition-colors duration-200",
        "font-medium text-center"
      )}
    >
      {children}
    </Link>
  );
}

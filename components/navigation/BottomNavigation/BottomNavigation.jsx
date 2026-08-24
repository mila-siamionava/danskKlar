"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./BottomNavigation.module.css";

export default function BottomNavigation({
  items = [],
  className = "",
}) {
  const pathname = usePathname();

  const classes = [
    styles.navigation,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav
      className={classes}
      aria-label="Primary navigation"
    >
      {items.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.id}
            href={item.href}
            className={[
              styles.item,
              isActive ? styles.active : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-current={
              isActive ? "page" : undefined
            }
          >
            {item.icon && (
              <span className={styles.icon}>
                {item.icon}
              </span>
            )}

            <span className={styles.label}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
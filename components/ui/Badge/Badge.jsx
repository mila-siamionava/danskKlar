import styles from "./Badge.module.css";

export default function Badge({
  children,
  variant = "neutral",
  size = "md",
  className = "",
}) {
  const classes = [
    styles.badge,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}
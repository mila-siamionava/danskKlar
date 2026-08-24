import styles from "./Card.module.css";

export default function Card({
  children,
  variant = "default",
  padding = "md",
  className = "",
}) {
  const classes = [
    styles.card,
    styles[variant],
    styles[padding],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./GapSelect.module.css";

export default function GapSelect({
  question,
  value = "",
  checked = false,
  onChange,
  className = "",
}) {
  const [isOpen, setIsOpen] =
    useState(false);

  const [activeIndex, setActiveIndex] =
    useState(0);

  const rootRef = useRef(null);
  const optionRefs = useRef([]);

  const isCorrect =
    checked &&
    value === question.correctOptionId;

  const isWrong =
    checked &&
    value &&
    value !== question.correctOptionId;

  const selectedOption =
    question.options.find(
      (option) => option.id === value,
    );

  const classes = [
    styles.trigger,
    isCorrect ? styles.correct : "",
    isWrong ? styles.wrong : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        rootRef.current &&
        !rootRef.current.contains(
          event.target,
        )
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener(
      "pointerdown",
      handleOutsideClick,
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick,
      );
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const selectedIndex =
      question.options.findIndex(
        (option) => option.id === value,
      );

    const nextIndex =
      selectedIndex >= 0
        ? selectedIndex
        : 0;

    setActiveIndex(nextIndex);

    requestAnimationFrame(() => {
      optionRefs.current[
        nextIndex
      ]?.focus();
    });
  }, [
    isOpen,
    question.options,
    value,
  ]);

  function openDropdown() {
    setIsOpen(true);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  function selectOption(option) {
    onChange?.(
      question.id,
      option.id,
    );

    closeDropdown();
  }

  function handleTriggerKeyDown(event) {
    if (
      event.key === "Enter" ||
      event.key === " " ||
      event.key === "ArrowDown" ||
      event.key === "ArrowUp"
    ) {
      event.preventDefault();
      openDropdown();
    }
  }

  function focusOption(index) {
    const count =
      question.options.length;

    if (!count) {
      return;
    }

    const nextIndex =
      (index + count) % count;

    setActiveIndex(nextIndex);

    optionRefs.current[
      nextIndex
    ]?.focus();
  }

  function handleOptionKeyDown(
    event,
    option,
    index,
  ) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        focusOption(index + 1);
        break;

      case "ArrowUp":
        event.preventDefault();
        focusOption(index - 1);
        break;

      case "Home":
        event.preventDefault();
        focusOption(0);
        break;

      case "End":
        event.preventDefault();
        focusOption(
          question.options.length - 1,
        );
        break;

      case "Enter":
      case " ":
        event.preventDefault();
        selectOption(option);
        break;

      case "Escape":
        event.preventDefault();
        closeDropdown();
        rootRef.current
          ?.querySelector(
            `.${styles.trigger}`,
          )
          ?.focus();
        break;

      default:
        break;
    }
  }

  return (
    <div
      ref={rootRef}
      className={styles.root}
    >
      <button
        type="button"
        className={classes}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`gap-options-${question.id}`}
        onClick={() =>
          setIsOpen(
            (current) => !current,
          )
        }
        onKeyDown={
          handleTriggerKeyDown
        }
      >
        <span
          className={
            selectedOption
              ? styles.value
              : styles.placeholder
          }
        >
          {selectedOption
            ? selectedOption.text
            : `(${question.id}) Choose answer`}
        </span>

        <span
          className={`${styles.chevron} ${
            isOpen
              ? styles.chevronOpen
              : ""
          }`}
          aria-hidden="true"
        >
          ↓
        </span>
      </button>

      {isOpen && (
        <div
          id={`gap-options-${question.id}`}
          className={styles.dropdown}
          role="listbox"
          aria-label={`Question ${question.id} answers`}
        >
          {question.options.map(
            (option, index) => {
              const isSelected =
                option.id === value;

              return (
                <button
                  key={option.id}
                  ref={(element) => {
                    optionRefs.current[
                      index
                    ] = element;
                  }}
                  type="button"
                  role="option"
                  aria-selected={
                    isSelected
                  }
                  tabIndex={
                    index === activeIndex
                      ? 0
                      : -1
                  }
                  className={`${styles.option} ${
                    isSelected
                      ? styles.selectedOption
                      : ""
                  }`}
                  onClick={() =>
                    selectOption(option)
                  }
                  onKeyDown={(event) =>
                    handleOptionKeyDown(
                      event,
                      option,
                      index,
                    )
                  }
                  onMouseEnter={() =>
                    setActiveIndex(index)
                  }
                >
                  {option.text}
                </button>
              );
            },
          )}
        </div>
      )}
    </div>
  );
}
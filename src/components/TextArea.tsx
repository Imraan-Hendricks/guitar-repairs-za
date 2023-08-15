'use client';

import { ChangeEvent, FocusEvent, useState } from 'react';
import { clsx } from 'clsx';

type OnBlur = (e: FocusEvent<HTMLTextAreaElement, Element>) => void;
type OnChange = (e: ChangeEvent<HTMLTextAreaElement>) => void;
type OnFocus = (e: FocusEvent<HTMLTextAreaElement, Element>) => void;

interface TextAreaProps {
  autoComplete?: 'on' | 'off';
  className?: string;
  disabled?: boolean;
  helperText?: string;
  helperTextProps?: { className?: string };
  hidden?: boolean;
  id?: string;
  inputProps?: { className?: string };
  isError?: boolean;
  label?: string;
  labelProps?: { className?: string };
  light?: boolean;
  name: string;
  onBlur?: OnBlur;
  onChange?: OnChange;
  onFocus?: OnFocus;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  type?: 'email' | 'number' | 'password' | 'text';
  value?: string | number;
}

export const TextArea = function ({
  className,
  disabled,
  helperText,
  helperTextProps,
  hidden,
  id,
  isError,
  inputProps,
  label,
  labelProps,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  required,
  rows,
  value,
}: TextAreaProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnBlur: OnBlur = e => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const handleOnChange: OnChange = e => {
    if (onChange) onChange(e);
  };

  const handleOnFocus: OnFocus = e => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  return (
    <div
      className={clsx(
        'grid h-max grid-cols-1 gap-4',
        hidden && 'hidden',
        disabled && 'opacity-70',
        className,
      )}>
      <label
        className={clsx(
          'cursor-pointer text-sm tracking-wider transition-colors sm:text-base',
          !label && 'hidden',
          disabled && 'cursor-default',
          isError && [
            isFocused && 'text-yellow-300',
            !isFocused && 'text-red-500',
          ],
          !isError && [
            isFocused && 'text-yellow-300',
            !isFocused && 'text-white',
          ],
          labelProps?.className,
        )}
        htmlFor={id}>
        <strong>
          {label} {required && <span className='text-red-500'>*</span>}
        </strong>
      </label>
      <textarea
        className={clsx(
          'w-full appearance-none rounded-md border-2 px-4 py-1.5 text-sm tracking-wider transition-colors sm:text-base',
          'bg-black text-white accent-yellow-300/90 focus:border-yellow-300/90 focus:bg-black focus:outline-none focus:ring-yellow-300/90 placeholder:text-white/40',
          [isError && 'border-red-500', !isError && 'border-white/10'],
          inputProps?.className,
        )}
        disabled={disabled}
        id={id}
        name={name}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        placeholder={placeholder}
        rows={rows}
        value={value}
      />
      <p
        className={clsx(
          'text-xs font-medium transition-colors sm:text-sm',
          !helperText && 'hidden',
          isError && [
            isFocused && 'text-yellow-300',
            !isFocused && 'italic text-red-500',
          ],
          !isError && [
            isFocused && 'text-yellow-300',
            !isFocused && 'text-gray-500',
          ],
          helperTextProps?.className,
        )}>
        {helperText}
      </p>
    </div>
  );
};

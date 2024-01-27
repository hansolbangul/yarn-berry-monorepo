import cn from 'classnames';
import colors from '../theme/colors';
import React, { ReactNode, forwardRef, Ref } from 'react';

const typography = [
  't1',
  't2',
  't3',
  't4',
  't5',
  't6',
  'b1',
  'b2',
  'b3'
] as const;
const fontWeight = ['regular', 'medium', 'semibold', 'bold'] as const;

type colors = keyof typeof colors;

export interface BaseProps {
  children?: ReactNode;
  className?: string;
  typography?: (typeof typography)[number];
  fontWeight?: (typeof fontWeight)[number];
  color?: string;
}
type TextProps<Element extends keyof JSX.IntrinsicElements = 'span'> =
  BaseProps & {
    as?: Element;
  } & Omit<React.ComponentProps<Element>, 'as'>;

const Text = <Element extends keyof JSX.IntrinsicElements = 'span'>(
  props: TextProps<Element>,
  ref: Ref<HTMLElement>
) => {
  const {
    as: Component = 'span',
    className,
    children,
    typography,
    fontWeight,
    color = colors.black,
    style,
    role,
    ...rest
  } = props as TextProps;

  return (
    <Component
      ref={ref}
      role={role ?? (Component === 'span' ? 'text' : undefined)}
      {...rest}
      className={cn(
        'text',
        {
          [`typography-${typography}`]: typography,
          [`text--font-weight-${fontWeight}`]: fontWeight
        },
        className
      )}
      style={{
        color,
        ...style
      }}>
      {children}
    </Component>
  );
};

export default forwardRef(Text);

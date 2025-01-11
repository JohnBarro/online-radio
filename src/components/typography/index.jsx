/* eslint-disable react/prop-types */
export function TypographyH1({ children, classNames }) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight  ${classNames}`}
    >
      {children}
    </h1>
  );
}
export function TypographyH2({ children, classNames }) {
  return (
    <h2
      className={`scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 ${classNames}`}
    >
      {children}
    </h2>
  );
}
export function TypographyH3({ children, classNames }) {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${classNames}`}
    >
      {children}
    </h3>
  );
}
export function TypographyH4({ children, classNames }) {
  return (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${classNames}`}
    >
      {children}
    </h4>
  );
}
export function TypographyP({ children, classNames = "" }) {
  return <p className={`leading-7 ${classNames}`}>{children}</p>;
}

export function TypographyBlockquote({ children, classNames }) {
  return (
    <blockquote className={`mt-6 border-l-2 pl-6 italic ${classNames}`}>
      {children}
    </blockquote>
  );
}
export function TypographyList({ children, classNames }) {
  return (
    <ul className={`ml-6 list-disc [&>li]:mt-2 ${classNames}`}>{children}</ul>
  );
}
export function TypographyInlineCode({ children, classNames }) {
  return (
    <code
      className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${classNames}`}
    >
      {children}
    </code>
  );
}
export function TypographyLarge({ children, classNames }) {
  return (
    <div className={`text-lg font-semibold ${classNames}`}>{children}</div>
  );
}

export function TypographySmall({ children, classNames }) {
  return (
    <small className={`text-sm font-medium leading-none ${classNames}`}>
      {children}
    </small>
  );
}
export function TypographyMuted({ children, classNames }) {
  return (
    <p className={`text-sm text-muted-foreground ${classNames}`}>{children}</p>
  );
}

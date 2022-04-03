import { FC } from "react";

interface IPropRestrictionProps {
  value: number;
  isPositive?: boolean;
  isNegative?: boolean;
  isZero?: boolean;
}

type IsPositiveType = IPropRestrictionProps & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type IsNegativeType = IPropRestrictionProps & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};

type IsZeroType = IPropRestrictionProps & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RestrictedPropType = IsPositiveType | IsNegativeType | IsZeroType;

export const PropRestriction: FC<RestrictedPropType> = ({
  value,
  isNegative,
  isPositive,
  isZero,
}: RestrictedPropType) => {
  return (
    <div>
      <h2>Prop Restriction</h2>
      <p>
        {value}: {isNegative && "Negative"}
        {isPositive && "Posotive"}
        {isZero && "Zero"}
      </p>
    </div>
  );
};

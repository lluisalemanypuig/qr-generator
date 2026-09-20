export const ECC_VALUES = ['Low', 'Medium', 'High'] as const;

export type ECC = (typeof ECC_VALUES)[number];

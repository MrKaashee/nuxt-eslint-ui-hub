export const tw = (strings, ...values) =>
  String.raw({ raw: strings }, ...values)

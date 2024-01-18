export type Size = 2 | 4 | 8 | 16 | 24 | 32 | 40 | 48;

type Falsy = undefined | null | false;

export type SpacerProps = {
  /**
   * `size` for the spacer
   */
  size: Size;

  /**
   * `horizontal` sets the horizontal spacing
   */
  horizontal?: boolean;

  /**
   * `vertical` default type, sets the vertical spacing
   */
  vertical?: true | boolean;

  /**
   * `children` no child needed
   */
  children?: Falsy;
};

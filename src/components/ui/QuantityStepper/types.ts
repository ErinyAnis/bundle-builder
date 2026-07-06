export interface QuantityStepperProps {
  value: number;

  onIncrement: () => void;

  onDecrement: () => void;

  disabled?: boolean;
}
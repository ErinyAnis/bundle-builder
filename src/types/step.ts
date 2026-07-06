export interface Step {
  id: string;
  title: string;
  icon: "camera" | "shield" | "sensor" | "home";
  stepNumber: number;
}
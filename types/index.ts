export interface SliderProps {
  type: string;
  min: number;
  max: number;
  step: number;
  label: string;
  value: number;
  setValue: number;
}
export interface RadioProps {
  value: number;
  selected: number;
  text: string;
  onChange: () => void;
}
export interface ResultProps {
  monthlyPayment: number;
}
export interface InputContainerProps {
  termOfLoan: number;
  principal: number;
  annualInterestRate: number;
  setPrincipal: (value: number) => void;
  setAnnualInterestRate: (value: number) => void;
  setTermOfLoan: (value: number) => void;
}

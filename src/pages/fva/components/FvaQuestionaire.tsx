import { NumberFormatValues, NumericFormat } from "react-number-format";

type FvaQuestionaireProps = {
  deposit?: number;
  handleChangeDeposit: (e: NumberFormatValues) => void;
  interest?: number;
  handleChangeInterest: (e: NumberFormatValues) => void;
  termYear?: number;
  handleChangeTermYear: (e: NumberFormatValues) => void;
  termMonth?: number;
  handleChangeTermMonth: (e: NumberFormatValues) => void;
};

export default function FvaQuestionaire(props: FvaQuestionaireProps) {
  return (
    <>
      {/* DISINI QUESTIONAIRE */}
      <div>
        <div className="pt-12">
          <div className="text-primary font-bold">
            Uang yang yang di investasikan setiap bulan
          </div>
          <NumericFormat
            className="w-[12rem]"
            value={props.deposit}
            thousandSeparator={"."}
            decimalSeparator={","}
            prefix="Rp."
            onValueChange={props.handleChangeDeposit}
          />
        </div>
        <div className="pt-8">
          <div className="text-primary font-bold">Estimasi bunga investasi:</div>
          <div className="flex flex-row items-end gap-0">
            <NumericFormat
              className="w-[4rem]"
              value={props.interest}
              thousandSeparator={"."}
              decimalSeparator={","}
              prefix=""
              onValueChange={props.handleChangeInterest}
            />
            <span className="text-primary font-bold leading-6">%</span>
          </div>
        </div>
        <div className="pt-8">
          <div className="text-primary font-bold">Jangka waktu investasi:</div>
          <div className="flex flex-row items-end gap-0">
            <NumericFormat
            className="w-[4rem]"
              value={props.termYear}
              thousandSeparator={"."}
              decimalSeparator={","}
              decimalScale={0}
              prefix=""
              onValueChange={props.handleChangeTermYear}
            />
            <div className="text-primary leading-6">tahun</div>
            {/* <NumericFormat
              value={props.termMonth}
              thousandSeparator={"."}
              decimalSeparator={","}
              decimalScale={0}
              prefix=""
              onValueChange={props.handleChangeTermMonth}
            />
            <div>bulan</div> */}
          </div>
        </div>
      </div>
    </>
  );
}

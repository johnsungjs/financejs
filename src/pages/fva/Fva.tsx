import { useState } from "react";
import FvaQuestionaire from "./components/FvaQuestionaire";
import FvaResult from "./components/FvaResult";
import FvaInfo from "./components/FvaInfo";
import { NumberFormatValues } from "react-number-format";
import { stringToRupiah } from "../../utils/universalFunction";
import FvaTitle from "./components/FvaTitle";

function countFva(
  deposit: number = 0,
  interest: number = 0,
  month: number = 0,
  year: number = 0
) {
  if (deposit === 0 || interest === 0 || year === 0) {
    return null;
  }

  const adjustedInterest = interest / 12 / 100;
  const countTotalMonth = year * 12 + month;

  const floatResult =
    deposit *
    (((1 + adjustedInterest) ** countTotalMonth - 1) / adjustedInterest);

  return stringToRupiah(floatResult.toString());
}

export function Fva() {
  const [deposit, setDeposit] = useState<number | undefined>();
  const [interest, setInterest] = useState<number | undefined>(5);
  const [termMonth, setTermMonth] = useState<number | undefined>();
  const [termYear, setTermYear] = useState<number | undefined>();

  const handleChangeDeposit = (e: NumberFormatValues) => {
    setDeposit(e.floatValue);
  };

  const handleChangeInterest = (e: NumberFormatValues) => {
    setInterest(e.floatValue);
  };

  const handleChangeTermMonth = (e: NumberFormatValues) => {
    setTermMonth(e.floatValue);
  };
  const handleChangeTermYear = (e: NumberFormatValues) => {
    setTermYear(e.floatValue);
  };

  const result = countFva(deposit, interest, termMonth, termYear);

  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full pt-6 sm:pt-0 pl-6 sm:pl-6 sm:bg-slate-200">
          <FvaTitle />
        </div>
        <div className="w-full p-6">
          <FvaQuestionaire
            deposit={deposit}
            handleChangeDeposit={handleChangeDeposit}
            handleChangeInterest={handleChangeInterest}
            handleChangeTermMonth={handleChangeTermMonth}
            handleChangeTermYear={handleChangeTermYear}
            interest={interest}
            termYear={termYear}
            termMonth={termMonth}
          />
          <FvaResult
            termMonth={termMonth}
            termYear={termYear}
            result={result}
          />
          <FvaInfo />
        </div>
      </div>
    </>
  );
}

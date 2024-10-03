type FvaResultProps = {
  termMonth?: number;
  termYear?: number;
  result: string | null;
};

export default function FvaResult(props: FvaResultProps) {
  return (
    <>
      {/* DISINI HASIL ANALISIS */}
      {props.result && (
        <div className="pt-8">
          <span>Dalam </span>
          <span className="text-primary font-bold text-xl">
            {props.termYear}{" "}
          </span>
          <span className="text-primary font-bold text-xl">tahun </span>
          <span>kedepan </span>
          <span>{props.termMonth} </span>
          <span>investasi anda akan bernilai: </span>
          <div className="text-primary font-bold text-xl">
            Rp.{props.result}
          </div>
        </div>
      )}
    </>
  );
}

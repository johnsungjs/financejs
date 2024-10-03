
export default function FvaInfo() {
  return (
    <>
      <div className="pt-16 text-sm">
        <div>Dalam Perhitungan diatas, rumus yang digunakan adalah sebagai berikut: </div>
        <div className="pt-2" >
          <img className="border-2 border-black border-dashed" src="/fva-formula.png" />
          <div className="pt-4">Keterangan: </div>
          <div>P: Uang yang diinvestasikan per bulan</div>
          <div>r: Estimasi bunga yang didapatkan</div>
          <div>n: Lama investasi {"(dalam bulan)"}</div>
          <div>sumber: <a className="text-blue-500 underline" href="https://www.geeksforgeeks.org/annuity-formula/" target="blank">geeksforgeeks</a></div>
        </div>
      </div>
    </>
  );
}

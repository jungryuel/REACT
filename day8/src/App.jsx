import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const teams = [
  {
    rank: 1,
    name: "담원 기아",
    win: 12,
    lose: 6,
    winLoseDiff: 15,
    rate: 0.0,
    kda: 0.0,
    kill: 607,
    death: 508,
    assist: 1386,
  },
  {
    rank: 2,
    name: "농심",
    win: 12,
    lose: 6,
    winLoseDiff: 8,
    rate: 0.0,
    kda: 0.0,
    kill: 589,
    death: 513,
    assist: 1285,
  },
  {
    rank: 2,
    name: "젠지",
    win: 12,
    lose: 6,
    winLoseDiff: 8,
    rate: 0.0,
    kda: 0.0,
    kill: 605,
    death: 489,
    assist: 1367,
  },
  {
    rank: 4,
    name: "T1",
    win: 11,
    lose: 7,
    winLoseDiff: 6,
    rate: 0.0,
    kda: 0.0,
    kill: 504,
    death: 447,
    assist: 1190,
  },
  {
    rank: 5,
    name: "피어엑스",
    win: 11,
    lose: 7,
    winLoseDiff: 5,
    rate: 0.0,
    kda: 0.0,
    kill: 514,
    death: 568,
    assist: 1223,
  },
  {
    rank: 6,
    name: "아프리카",
    win: 11,
    lose: 7,
    winLoseDiff: 4,
    rate: 0.0,
    kda: 0.0,
    kill: 530,
    death: 489,
    assist: 1324,
  },
  {
    rank: 7,
    name: "KT",
    win: 7,
    lose: 11,
    winLoseDiff: -4,
    rate: 0.0,
    kda: 0.0,
    kill: 495,
    death: 559,
    assist: 1281,
  },
  {
    rank: 8,
    name: "한화 생명",
    win: 7,
    lose: 11,
    winLoseDiff: -9,
    rate: 0.0,
    kda: 2.89,
    kill: 495,
    death: 559,
    assist: 1122,
  },
  {
    rank: 9,
    name: "OK저축은행",
    win: 5,
    lose: 13,
    winLoseDiff: -8,
    rate: 0.0,
    kda: 0.0,
    kill: 483,
    death: 514,
    assist: 1184,
  },
  {
    rank: 10,
    name: "DRX",
    win: 2,
    lose: 16,
    winLoseDiff: -25,
    rate: 0.0,
    kda: 0.0,
    kill: 377,
    death: 630,
    assist: 858,
  },
];

function App() {
  const keys = [...Object.keys(teams[0])];
  const [search, setSearch] = useState(""); //변하는 값에는 useState사용
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const [searchKey, setSearchKey] = useState("rank");
  const [tmp, setTmp] = useState([...teams]);

  const onClickSearch = () => {
    const te = teams //원본은 항상 지켜줘야 한다.
      .filter((data) => data[searchKey].toString().includes(search))
      .sort((a, b) =>
        searchKey === "rank" ? a.rank - b.rank : b[searchKey] - a[searchKey]
      );
    setTmp(te);
  };

  return (
    <div>
      <select onChange={(e) => setSearchKey(e.target.value)}>
        {keys.map((data) => (
          <option value={data}>{data}</option>
        ))}
      </select>

      <input onChange={onChange} placeholder=" name을 입력해주세요" />
      <button onClick={onClickSearch}>search</button>
      <table>
        <thead>
          <th>rank</th>
          <th>name</th>
          <th>win</th>
          <th>lose</th>
          <th>winLoseDiff</th>
          <th>rate</th>
          <th>kda</th>
          <th>kill</th>
          <th>death</th>
          <th>assist</th>
        </thead>
        <tbody>
          {tmp.map(
            (
              data,
              index
              //리스트를 한번씩 순회하면서 돌리기
            ) => (
              <tr key={index}>
                <td>{data.rank}</td>
                <td>{data.name}</td>
                <td>{data.win}</td>
                <td>{data.lose}</td>
                <td>{data.winLoseDiff}</td>
                <td>
                  {parseInt(
                    (data.win / (data.win + data.lose)) * 100 || 0
                  ).toFixed(2)}
                </td>
                <td>
                  {parseInt(
                    (data.kill + data.assist) / data.death || 0
                  ).toFixed(2)}
                </td>
                <td>{data.kill}</td>
                <td>{data.death}</td>
                <td>{data.assist}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;

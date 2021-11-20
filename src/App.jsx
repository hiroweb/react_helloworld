import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColofulMessage";
import "bulma/css/bulma.css";

const App = () => {
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //この変数の変化だけを監視したいときに使う
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <section className="section">
        <main className="container">
          <div className="columns">
            <div className="column">
              <div className="content">
                <h1 className="title is-3">Hello World</h1>
                <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
                <ColorfulMessage color="pink">元気です!</ColorfulMessage>
                <button className="button is-primary" onClick={onClickCountUp}>
                  カウントアップ
                </button>
                <button
                  className="button is-link"
                  onClick={onClickSwitchShowFlag}
                >
                  on/off
                </button>
                <br />
                <p>{num}</p>
                {faceShowFlag && <p>(^^♪</p>}
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColofulMessage";
import "bulma/css/bulma.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

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
                <ColorfulMessage color="blue">testですか？</ColorfulMessage>
                <ColorfulMessage color="pink">testです!</ColorfulMessage>
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

                <table className="table is-striped">
                  <tbody>
                    <tr>
                      <td>
                        <div className="field">
                          <label className="label">Name</label>
                          <div className="control">
                            <input
                              className="input"
                              type="text"
                              placeholder="Text input"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="field">
                          <label className="label">Username</label>
                          <div className="control has-icons-left has-icons-right">
                            <input
                              className="input is-success"
                              type="text"
                              placeholder="Text input"
                              value="bulma"
                            />
                            <span className="icon is-small is-left">
                              <i className="fas fa-user"></i>
                            </span>
                            <span className="icon is-small is-right">
                              <i className="fas fa-check"></i>
                            </span>
                          </div>
                          <p className="help is-success">
                            This username is available
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default App;

import React from "react";
import { useEffect, useState } from "react";
import "./StateIndividuel.scss";

const Test = () => {
  const tab = [
    "Natsu",
    "Rakcham",
    "Louxia",
    "Akela",
    "Natsu",
    "Rakcham",
    "Louxia",
    "Akela",
  ];

  function useTestM() {
    const [currentTab, setcurrentTab] = useState([]);

    const modify = () => {
      setcurrentTab((p) => {
        const newState = [...p];
        newState.pop();
        return newState;
      });
    };

    useEffect(() => {
      try {
        setcurrentTab(tab);
      } catch (e) {
        console.log(e);
      }
    }, []);

    return [currentTab, modify];
  }

  const [currentTab, modify] = useTestM();

  const modifLeTableau = () => {
    modify();
  };

  console.log(currentTab);

  return (
    <>
      <div className="container">
        <div className="title">State individuel</div>
        <div className="liste">
          {currentTab.map((fistname, index) => (
            <div key={index}>{fistname}</div>
          ))}
        </div>
        <button onClick={modifLeTableau}>
          Supprime dernier élément du tableau
        </button>
      </div>
    </>
  );
};

export default Test;

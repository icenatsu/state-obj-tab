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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      try {
        setcurrentTab(tab);
        setLoading(true);
      } catch (e) {
        setcurrentTab(null);
        setLoading(false);
      }
    }, []);

    return [currentTab, loading, setcurrentTab];
  }

  const [currentTab, loading, setcurrentTab] = useTestM();

  const modifLeTableau = () => {
    setcurrentTab((p) => {
      // console.log(p);
      const newState = p;
      newState.pop();
      return newState;
    });
  };

  // console.log(currentTab);

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

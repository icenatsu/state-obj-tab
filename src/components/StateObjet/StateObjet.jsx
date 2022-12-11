import React from "react";
import { useEffect, useState } from "react";

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
    const [state, setState] = useState({
      items: [],
      loading: true,
    });

    useEffect(() => {
      try {
        setState({
          items: tab,
          loading: false,
        });
      } catch (e) {
        setState((s) => ({ ...s, loading: false }));
      }
    }, []);

    return [state.items, setState];
  }

  const [items, setState] = useTestM();

  const modifLeTableau = () => {
    setState((p) => {
      const newState = { ...p };
      newState.items.pop();
      return newState;
    });
  };

  console.log(items);
  return (
    <>
      <div className="container">
        <div className="title">State objet</div>
        <div className="liste">
          {items.map((fistname, index) => (
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

import React, { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([

  ]);

  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [date,setDate] = useState('');

const TotalIncomePrice = incomes.reduce(((acc,current) =>  {
    return acc + parseInt(current.price);
}),0)


let filteredIncomes = incomes.filter((c, i) => {
    return incomes.map(cart => cart.id).indexOf(c.id) == i;
  });
  



console.log(TotalIncomePrice);

useEffect(() => {
    const getIncomes = JSON.parse(localStorage.getItem('incomes'));
    if(getIncomes) {
        setIncomes(getIncomes);
    }
    else {
        console.log('didn/nt working');
    }
},[])


useEffect(() => {
    localStorage.setItem('incomes' , JSON.stringify(incomes));
},[filteredIncomes])


  return (
    <GlobalContext.Provider
      value={{ Income__overall: [incomes, setIncomes], Income__desc: [desc,setDesc] , Income__price:[price,setPrice] , Income__date:[date,setDate] , total:{TotalIncomePrice} }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";

const ProjectContainer = () => {
  const [incomeTotal, setIncomeTotal] = useState(0); 
  const [expenseTotal, setExpenseTotal] = useState(0); 

  const totalBalance = incomeTotal - expenseTotal;
  return (
    <div className="flex f--wrap f--column">
      <Header total={totalBalance}/>
      <Main setIncomeTotal={setIncomeTotal} setExpenseTotal={setExpenseTotal} />
    </div>
  );
};

export default ProjectContainer;

import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userInput, setUserInput] = useState({
        amount: '',
        description: '',
        type: "",
    })

    const getLocalStorage = () => {
        let records = localStorage.getItem("records");
        if(records){
            return JSON.parse(localStorage.getItem("records"))
        }else{
            return []
        }
    }

    const [records, setRecords] = useState(getLocalStorage());

    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0); 

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInput({ ...userInput, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
            if (userInput.amount && userInput.description && userInput.type) {
                const newRecord = { ...userInput, id: new Date().getTime().toString() } 
                setRecords([newRecord, ...records]);
                setUserInput({ amount: '', description: '', type: '' });
                closeModal();
            }
    }

    const calculateBalance = () => {
        let exp = 0;
        let inc = 0;

        records.map((record) => {
            record.type === "EXPENSE" ? (exp = exp + parseFloat(record.amount)) : (inc = inc + parseFloat(record.amount));
        });

        setExpense(exp);
        setIncome(inc);
    }

    useEffect(()=> calculateBalance(), [records])

//    const filterIncome = () => {
//      return records.filter(record => record.type==="INCOME");
//    }


useEffect(()=>{
    localStorage.setItem("records", JSON.stringify(records))
},[records])


    function openModal() {
        setIsModalOpen(true)
    }
    function closeModal() {
        setIsModalOpen(false)
    }


    return (
        <AppContext.Provider value={
            { openModal, closeModal, userInput, setUserInput, handleInput, isModalOpen, setRecords, records, handleSubmit, income, expense }
        }>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContextProvider }

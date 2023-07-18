import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)
    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch({type: "ADD_CUSTOMER", payload: customer})
    }

    const removeCustomer = (customer) => {
        dispatch({type: "DEL_CUSTOMER", payload: customer.id})
    }

    return (
        <div className={'app'}>
            <div>{cash}</div>
            <div style={{display: "flex"}}>
                <button onClick={() => addCash(Number(prompt()))}>Положить деньги</button>
                <button onClick={() => getCash(Number(prompt()))}>Снять деньги</button>
                <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
            </div>
            <div>
                {customers.length > 0 ?
                    <div>
                        {customers.map(customer =>
                            <div onClick={() => removeCustomer(customer)}>
                                {customer.name}
                            </div>
                        )}
                    </div>
                    :
                    <div>
                        Клиенты отсутствуют
                    </div>
                }
            </div>
        </div>
    );
}

export default App;

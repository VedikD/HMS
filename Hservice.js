import axios from "axios";

const CUSTOMER_API_BASE_URL = "http://localhost:9000/add";

class Hservice{
   

    createCustomer(customer){
            return axios.post(CUSTOMER_API_BASE_URL,customer);
        }
        }

 
export default new Hservice() 
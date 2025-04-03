import { CurrencyInputInterface } from "./CurrencyInput.interface";
import  "./CurrencyInput.scss";

   
   const CurrencyInput = (props: CurrencyInputInterface) => {
       const {input, setInput }=props;
     return (
            <div className="cu-amount">
						<h3>Amount</h3>
						<input
							type="number"
							min={0}
							placeholder="Enter the amount"
							value={input}
							onChange={(e: any) => setInput(e.target.value)}
						/>
					</div>
     )
   }
   
   export default CurrencyInput
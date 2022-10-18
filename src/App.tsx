
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/store';
import { changer,htmlChanger } from './store/slice';
import Content from "./component/Content"
function App() {
  const qtyVal = useSelector((state: RootState) => state.qty.value)
  const htmlVal=useSelector((state:RootState)=>state.html.html)
  const dispatch = useDispatch()
const qtyChanger = (e:any) => {
  if(e.target.value>3){
dispatch(changer(e.target.value))

  }
}
const htmlAsk = (e:any) => {
  dispatch(htmlChanger(e.target.value))  
    {console.log(htmlVal+"-"+qtyVal)}

}

  return (
    <div style={{maxWidth:"950px",margin:"auto",textAlign:"center"}}>
    <h1>Sample Text Generator</h1>
    <div>
    <div>Paragraph</div>
    <input type="number" value={qtyVal} onChange={qtyChanger}/>
    </div>
    <div>
    <div>Include HTML</div>
    <label>
    <select value={htmlVal} onChange={htmlAsk} >
      <option value="No">No</option>
      <option value="Yes">Yes</option>
    </select>
    </label>
    </div>
    <div>Content</div>
<Content qty={qtyVal} format={htmlVal}/>

    </div>
  );
}

export default App;

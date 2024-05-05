
import Textfield from "./Textfield";
import TextArea from "./TextArea";


function FormWrapper({inputs, onChange, onSubmit}) {


    

        return  <form id="myForm" onSubmit={onSubmit}>

            <input type="hidden" value="check" name="secure" />

        {inputs.map((data, index) => {

          if(data.type === 'text' || data.type === 'password') {
            return <Textfield key={index} {...data} index={index} onChange={onChange} />
          }

          if(data.type === 'textarea') {
            return <TextArea onChange={onChange} key={index} {...data} index={index} />
          }


          if(data.type === 'textarea') {
            return <TextArea onChange={onChange} key={index} {...data} index={index} />
          }

          return <Textfield onChange={onChange} key={index} {...data} index={index}/>
        })}
       

        <button>Submit</button>
        <button type="reset">Clear</button>
      </form>
}


export default FormWrapper;

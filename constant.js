

export const DynamicForm = [{
    type:"text",
    name: 'fName',
    id:'fName',
    disabled:false,
    error:'',
    value:'',
    placeholder:"Enter your name",
    validator: function(value) {
        if(value.length < 3) {
             return "Should be larger than 3"
          } else {
            return "";
          }
    }
},
{
    type:"text",
    name: 'age',
    id:'age',
    disabled:false,
    error:'',
    value:'',
    placeholder:"Enter your age",
    validator: function(value) {
        if(Number(value) < 18) {
             return "Invalid age"
          } else {
            return "Valid age";
          }
    }
},
{
    type:"text",
    name: 'lanem',
    id:'lanem',
    disabled:false,
    error:'',
    value:'',
    placeholder:"Enter your lanem"
},
{
    type:"textarea",
    name: 'address',
    id:'address',
    disabled:false,
    error:'',
    value:'',
    rows:4,
},
{
    type:"password",
    name: 'password',
    id:'password',
    disabled:false,
    error:'',
    value:'',
    placeholder:"Enter your password"
}];

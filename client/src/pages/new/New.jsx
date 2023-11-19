import "./new.css";

export const New = ({inputs, name:formName}) => {
    let file=undefined;
  return (
    <div className='new'>
        <div className="top">
            <h1>New {formName} Form</h1>
        </div>
        <div className="bottom">
        <form>

            {inputs?.map((input) => (
            <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
            </div>
            ))}
            <button className="newButton">Send</button>
        </form>
        </div>
    </div>
  )
}

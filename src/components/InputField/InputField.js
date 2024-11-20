import "./InputField.css";

export default function InputField({ placeholderText, type, id }) {
  return (
    <>
      <input placeholder={placeholderText} type={type} className="inputStyle" id={id} />
    </>
  )
}
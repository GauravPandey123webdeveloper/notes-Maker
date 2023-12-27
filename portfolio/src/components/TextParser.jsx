import React, { useState } from "react";
import "./nav.css";
export default function FormData() {
  let [text, setText] = useState("");
  let [copy, setCopy] = useState(text);
  const [form, setForm] = useState({ data: '' });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/testpost", {
        method: "POST",
        body: JSON.stringify({ data: text }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.text();
      console.log('Response data:', data);
      alert("submitted successfully");
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  let handleOnChange = (event) => {
    setText(event.target.value);
    setCopy(event.target.value);
  };
  let upper = () => {
    setCopy(text.toUpperCase());
  };
  let lower = () => {
    setCopy(text.toLowerCase());
  };
  let numOfWords = () => {
    if (text.length > 0) {
      setCopy(text.split(" ").length);
    } else {
      setCopy(0);
    }
  };
  let numOfCharacters = () => {
    setCopy(text.length);
  };
  let timeRead = () => {
    if (text.length > 0) {
      setCopy(text.split(" ").length * 0.0042 * 60 + "  seconds");
    } else {
      setCopy(0);
    }
  };
  let copyText= ()=>{
    const data= document.getElementById("exampleFormControlTextarea1");
    data.select();
    navigator.clipboard.writeText(data.value);
  }
  let color = (event) => {
    document.getElementById("exampleFormControlTextarea1").style.color =
      event.target.value;
  };
  let Backgroundcolor = (event) => {
    document.getElementById(
      "exampleFormControlTextarea1"
    ).style.backgroundColor = event.target.value;
  };
  return (
    <div className="container">
      <div className="mb-3 my-5 formating">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>Enter your text to analyse</h1>
        </label>
        <textarea
        name="data"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
          value={copy}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary mx-1 my-3" onClick={upper}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-3" onClick={lower}>
          LowerCase
        </button>
        <button className="btn btn-primary mx-1 my-3" onClick={numOfWords}>
          Word Count
        </button>
        <button className="btn btn-primary mx-1 my-3" onClick={numOfCharacters}>
          Character count
        </button>
        <button className="btn btn-primary mx-1 my-3" onClick={timeRead}>
          Reading Time
        </button>
        <button className="btn btn-primary mx-1 my-3" onClick={copyText}>
        Copy
        </button>
        <button type="submit" className="btn btn-primary mx-1 my-3" onClick={handleSubmit}>Submit your notes</button>
        <select
          className="form-select my-4"
          aria-label="Default select example"
          onChange={color}
        >
          <option selected>Change color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="white">White</option>
        </select>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={Backgroundcolor}
        >
          <option selected>Change Background color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="white">White</option>
        </select>
      </div>
    </div>
  );
}

import { useState } from "react";

import {Routes, Route, useNavigate} from 'react-router-dom';

import Confirmation from "../../pages/Confirmation";





function Tempform() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const validate = () => {
    return fname.length & lname.length;
  };

  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/confirmation');
  };

  
  
  return (
    <>
    <form>
      <input
        type="text"
        placeholder="fname"
        value={fname}
        onChange={(e) => setFName(e.target.value)}
      />
      <input
        type="text"
        placeholder="lname"
        value={lname}
        onChange={(e) => setLName(e.target.value)}
      />
      <button type="button"  disabled={!validate()}>
        Save
      </button>
    </form>
    <div>
    <div>
     
      <hr />
      <button onClick={navigateToContacts}>Confirmation</button>

      <Routes>
        <Route path="/confirmation" element={<Confirmation />} />
        
      </Routes>
    </div>
  </div>

  </>
  );
}
export default Tempform;
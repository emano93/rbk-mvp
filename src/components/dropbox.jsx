var Libraries = ({libraries}) => (
    <select>
  <option value="libraries">Libraries In Amman</option>
  <option value="1">Abdul Hameed Shoman Foundation / adress:Second circle</option>
  <option value="2">Department of National Library / adress:Arjan</option>
  <option value="3">Basman Public Library / adress:AlHashmi AlShmali</option>
  <option value="4">German University Library / adress:Naoor</option>
  <option value="5">Al Hasan Public Library / adress:Al Quesmeh</option>
  <option value="6">Al Ferdous Children Library / adress:Al Jabal Al Akhdar</option>



</select>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Libraries = Libraries;
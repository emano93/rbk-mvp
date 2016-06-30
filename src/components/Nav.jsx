var Nav = ({search,libraries}) => (
  <nav id="bar">
    <div id="naving">
      <Search search={search}/>
     <Libraries libraries={libraries}/>
    </div>
  </nav>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Nav = Nav;

import React from "react";
function Searchbar()
{
    return <>
      
      <div className='row bg_dv'>

<div className='mx-auto text-center banen '><h1 className="fw-bold stri">Discover stories and experiences to share with India.</h1></div>
<div className="col-md-4 mx-auto">
<form className="mt-3 mb-3">
    <div className="form_dv">

<button type="button" className="btn btn-outline-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
</svg>
                  <span className="visually-hidden">Button</span>
                </button><input className='form-control  mx-auto search_boc' type='text' placeholder="Search for netflix title and news"/>
</div>
</form>

</div>
        
    </div>
    </>
}
export default Searchbar;
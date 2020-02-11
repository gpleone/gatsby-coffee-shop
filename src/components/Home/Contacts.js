import React from 'react'
import Title from '../Globals/Title'

const Contacts = () => {
  return (
    <div>
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" name="name" id="name"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" name="email" id="email"/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea type="text" className="form-control" rows="5" name="description" id="description"></textarea>
            </div>
            <button type="submit" className="btn">Submit</button>
          </form>
        </div> 
      </div>
    </div>
  )
}

export default Contacts
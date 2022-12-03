import React from 'react'
import PersonProps from '../types/Interface';
import "../pages/Home.scss";

const Summary = (props: {formData: PersonProps}) => {
  return (
    <React.Fragment>
      <div className='container main-page'>
      <h1 className='main-tittle'>Summary</h1>
        <table className="table caption-top">
          <thead>
            <tr>
              <th scope="col">Diagnosed</th>
              <th scope="col">Physical Trauma</th>
              <th scope="col">Mental Trauma</th>
              <th scope="col">Often Experience</th>
              <th scope="col">Experience the problem</th>
              <th scope='col'>Problem Averaga</th>
              <th scope='col'>Discription</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.formData.diagnosed}</td>
              <td>{props.formData.physical_trauma}</td>
              <td>{props.formData.mental_trauma}</td>
              <td>{props.formData.often_experience}</td>
              <td>{props.formData.experience.map((item: any,index: any)=>(<div key={index}>{item},</div>))}</td>
              <td>{props.formData.onAverage}</td>
              <td>{props.formData.textarea}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}

export default Summary;
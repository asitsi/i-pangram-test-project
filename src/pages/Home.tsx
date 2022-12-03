import React, { useState } from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Summary from '../components/Summary';
import "./Home.scss"

const Home = () => {
  const [page, setPage] = useState(true);
  const [element, setElement] = useState<any>([0]);
  const [formData, updateFormData] = useState({
    textarea: "",
    diagnosed: "",
    often_experience: "",
    experience: [] as any,
    onAverage: "",
    physical_trauma: "",
    mental_trauma: ""
  });

  const handleAddProblem = () => {
    const addElements = [...element, {}]
    setElement(addElements);
  }

  const handleFormData = (e: any) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleCheckBoxdata = (e: any) => {
    if (!e.target.checked) {
      const result = formData.experience.filter((dep: any) => {
        return dep !== e.target.value
      });
      formData.experience = [...result]
      updateFormData({ ...formData })
    } else {
      formData.experience.push(e.target.value)
      updateFormData({ ...formData })
    }
  }

  return (
    <React.Fragment>
      <div className='main'>
        {page ? <div className='container main-page'>
          <h1 className='main-tittle'>Pain & Functional Discription</h1>
          <p className='main-discription'>The description of the current situation gives your Optimum<br /> Trainer a picture of and clues to the underlying causes of your<br /> problems</p>
          <form>
            <p>If you have Problems with pain/aches,stiffness or functional problems,describe this/these below.(List the symtoms indescending order with the most troublesome first)</p>
            <textarea className='main-form-textarea' name='textarea' value={formData.textarea} onChange={(e) => handleFormData(e)}></textarea>
            {element.map((item: Object, index: React.Key) => {
              return (
                <div key={index}>
                  <div onChange={(e) => handleFormData(e)} className='main-form-content'>
                    <p>Have you been diagnosed with this problems?</p>
                    <div className='main-form-content-radio-button'>
                      <input type="radio" name='diagnosed' value="Not relevant" defaultChecked={formData.diagnosed === "Not relevant"} /> <label>Not relevant</label>
                      <input type="radio" name='diagnosed' value="Yes" defaultChecked={formData.diagnosed === "Yes"} /> <label>yes</label>
                      <input type="radio" name='diagnosed' value="No" defaultChecked={formData.diagnosed === "No"} /> <label>no</label>
                    </div>
                  </div>
                  <div onChange={(e) => handleFormData(e)} className='main-form-content'>
                    <p>Did the problem start after a physical trauma?</p>
                    <div className='main-form-content-radio-button'>
                      <input type="radio" name='physical_trauma' value="Not relevant" defaultChecked={formData.physical_trauma === "Not relevant"} /> <label>Not relevant</label>
                      <input type="radio" name='physical_trauma' value="Yes" defaultChecked={formData.physical_trauma === "Yes"} /> <label>yes</label>
                      <input type="radio" name='physical_trauma' value="No" defaultChecked={formData.physical_trauma === "No"} /> <label>no</label>
                    </div>
                  </div>
                  <div onChange={(e) => handleFormData(e)} className='main-form-content'>
                    <p>Did the problem start after a mental trauma?</p>
                    <div className='main-form-content-radio-button'>
                      <input type="radio" name='mental_trauma' value="Not relevant" defaultChecked={formData.mental_trauma === "Not relevant"} /> <label>Not relevant</label>
                      <input type="radio" name='mental_trauma' value="Yes" defaultChecked={formData.mental_trauma === "Yes"} /> <label>yes</label>
                      <input type="radio" name='mental_trauma' value="No" defaultChecked={formData.mental_trauma === "No"} /> <label>no</label>
                    </div>
                  </div>
                  <div onChange={(e) => handleFormData(e)}>
                    <p>How often do you experience the problems?</p>
                    <div className='main-form-content-radio-button'>
                      <input type="radio" name="often_experience" id="Not relevant" value="Not relevant" defaultChecked={formData.often_experience === "Not relevant"} /><label>Not relevant</label>
                      <input type="radio" name="often_experience" id="daily" value="daily" defaultChecked={formData.often_experience === "daily"} /><label>Daily</label>
                      <input type="radio" name="often_experience" id="several times/week" value="several times/week" defaultChecked={formData.often_experience === "several times/week"} /><label>Several times/week</label>
                      <input type="radio" name="often_experience" id="A few times/month" value="A few times/month" defaultChecked={formData.often_experience === "A few times/month"} /><label>A few times/month</label>
                      <input type="radio" name="often_experience" id="A few times/year" value="A few times/year" defaultChecked={formData.often_experience === "A few times/year"} /><label>A few times/year</label>
                    </div>
                  </div><br />
                  <div onChange={(e) => handleCheckBoxdata(e)}>
                    <p>When do you experience the problems?</p>
                    <div className='main-form-content-checkbox'>
                      <input type="checkbox" name="experience" id="Not relevant" value="Not relevant" defaultChecked={(formData.experience.includes('Not relevant')) ? true : false} /><label>Not relevant</label><br />
                      <input type="checkbox" name="experience" id="daily" value="When lying down" defaultChecked={(formData.experience.includes('When lying down')) ? true : false} /><label>When lying down</label><br />
                      <input type="checkbox" name="experience" id="several times/week" value="When sitting" defaultChecked={(formData.experience.includes('When sitting')) ? true : false} /><label>When sitting</label><br />
                      <input type="checkbox" name="experience" id="A few times/month" value="Under standing" defaultChecked={(formData.experience.includes('Under standing')) ? true : false} /><label>Under standing</label><br />
                      <input type="checkbox" name="experience" id="A few times/year" value="In walking" defaultChecked={(formData.experience.includes('In walking')) ? true : false} /><label>In walking</label><br />
                    </div>
                  </div>
                  <div key={index} onChange={(e) => handleFormData(e)}>
                    <p>How intense is the experience of the problem on average on 0-10 scale?</p>
                    <div className='main-form-content'>
                      <div><label>1</label><br /><input type="radio" name="onAverage" id="track" value="1" defaultChecked={formData.onAverage === "1"}/></div>
                      <div><label>2</label><br /><input type="radio" name="onAverage" id="track" value="2"  defaultChecked={formData.onAverage === "2"}/></div>
                      <div><label>3</label><br /><input type="radio" name="onAverage" id="track" value="3"  defaultChecked={formData.onAverage === "3"}/></div>
                      <div><label>4</label><br /><input type="radio" name="onAverage" id="track" value="4"  defaultChecked={formData.onAverage === "4"}/></div>
                      <div><label>5</label><br /><input type="radio" name="onAverage" id="track" value="5"  defaultChecked={formData.onAverage === "5"}/></div>
                      <div><label>6</label><br /><input type="radio" name="onAverage" id="track" value="6"  defaultChecked={formData.onAverage === "6"}/></div>
                      <div><label>7</label><br /><input type="radio" name="onAverage" id="track" value="7"  defaultChecked={formData.onAverage === "7"}/></div>
                      <div><label>8</label><br /><input type="radio" name="onAverage" id="track" value="8"  defaultChecked={formData.onAverage === "8"}/></div>
                      <div><label>9</label><br /><input type="radio" name="onAverage" id="track" value="9"  defaultChecked={formData.onAverage === "9"}/></div>
                      <div><label>10</label><br /><input type="radio" name="onAverage" id="track" value="10" defaultChecked={formData.onAverage === "10"} /></div>
                    </div>
                  </div>
                </div>
              )
            })}
            <button type="button" className='main-form-addIcon' onClick={() => handleAddProblem()}><BsFillPlusCircleFill className='icon' /></button><br />
          </form>
        </div> : <Summary formData={formData} />}
        <div className='main-button'>
          <button type="button" disabled={page == true} onClick={() => setPage(true)}><AiOutlineArrowLeft /> Back</button>
          <button type="button" disabled={page == false} onClick={() => setPage(false)}>Next <AiOutlineArrowRight /></button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home;
export default function MeasurementForm(){

  const registerMeasurement = async event => {
    event.preventDefault();

    const res = await fetch('/api/add-measurement',{
      body: JSON.stringify({
        patientName: event.target.patientName.value,
        patientMail: event.target.patientMail.value,
        heartrate: Number(event.target.heartRate.value),
        systolicPressure: Number(event.target.systolicPressure.value),
        diastolicPressure: Number(event.target.diastolicPressure.value)
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
  }


  return (
    <div onSubmit={registerMeasurement} className="grid">
      <form>
        <div className="card">
          <label>
            Patient Name: 
            <input type="text" id="patientName" />
          </label>
        </div>
        <div className="card">
          <label>
            E-mail:
            <input type="email" id="patientMail" />
          </label>
        </div>
        <div className="card">
          <label>Heartrate: 
            <input type="number" id="heartRate"/>
          </label>
        </div>
        <div className="card">
          <label>
            Systolic Pressure: 
            <input type="number" id="systolicPressure"/>
          </label>
        </div>
        <div className="card">
          <label>
            Diastolic Pressure: 
            <input type="number" id="diastolicPressure"/>
          </label>
        </div>
        <div className="card">
          <button type='submit'>Doorsturen</button>
        </div>
      </form>
    </div>
  )
}
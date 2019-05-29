import React from 'react'
import { withRouter } from 'react-router-dom'
import Select from 'react-select'



const Form = ({ handleChange, handleSubmit, data, errors, options}) => {
  return (
    <section className="section">
      <div className="container is-fluid">
        <div className="formBox">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Exhbition Name</label>
              <div className="control">
                <input
                  className="input"
                  name="exhibition"
                  placeholder="eg: Pierre Bonnard: The Colour of Memory"
                  onChange={handleChange}
                  value={data.exhibition || ''}
                />
              </div>
              {errors.exhibition && <div className="help is-danger">{errors.exhibition}</div>}
            </div>
            <div className="field">
              <label className="label">Start Date</label>
              <div className="control">
                <input
                  className="input"
                  name="startDate"
                  placeholder="eg: 05/03/19"
                  onChange={handleChange}
                  value={data.startDate || ''}
                />
              </div>
              {errors.startDate && <div className="help is-danger">{errors.startDate}</div>}
            </div>
            <div className="field">
              <label className="label">End Date</label>
              <div className="control">
                <input
                  className="input"
                  name="endDate"
                  placeholder="eg: 05/05/19"
                  onChange={handleChange}
                  value={data.endDate || ''}
                />
              </div>
              {errors.endDate && <div className="help is-danger">{errors.endDate}</div>}
            </div>
            <div className="field">
              <label className="label">Venue</label>
              <div className="control">
                <input
                  className="input"
                  name="venue"
                  placeholder="eg: Tate Modern"
                  onChange={handleChange}
                  value={data.venue || ''}
                />
              </div>
              {errors.venue && <div className="help is-danger">{errors.venue}</div>}
            </div>
            <div className="field">
              <label className="label">Area</label>
              <div className="control">
                <input
                  className="input"
                  name="area"
                  placeholder="eg: Central"
                  onChange={handleChange}
                  value={data.area || ''}
                />
              </div>
              {errors.area && <div className="help is-danger">{errors.area}</div>}
            </div>
            <div className="field">
              <label className="label">Entry Fee</label>
              <div className="control">
                <input
                  className="input"
                  name="entryFee"
                  placeholder="eg: 15"
                  onChange={handleChange}
                  value={data.entryFee || ''}
                />
              </div>
              {errors.entryFee && <div className="help is-danger">{errors.entryFee}</div>}
            </div>
            <div className="field">
              <label className="label">Image (optional)</label>
              <div className="control">
                <input
                  className="input"
                  name="image"
                  placeholder="eg: https://www.tate.org.uk/sites/default/files/styles/width-420/public/le_jardin_v.2_1.jpg"
                  onChange={handleChange}
                  value={data.image || ''}
                />
              </div>
              {errors.image && <div className="help is-danger">{errors.image}</div>}
            </div>
            <div className="field">
              <label className="label">Artist(s)</label>
              <div className="control">
                <input
                  className="input"
                  name="artists"
                  placeholder="eg: https://www.tate.org.uk/sites/default/files/styles/width-420/public/le_jardin_v.2_1.jpg"
                  onChange={handleChange}
                  value={data.artists || ''}
                />
              </div>
              {errors.artists && <div className="help is-danger">{errors.artists}</div>}
            </div>
            <div className="field">
              <label className="label">Keywords</label>
              <div className="control">
                <input
                  className="input"
                  name="keywords"
                  placeholder="eg: https://www.tate.org.uk/sites/default/files/styles/width-420/public/le_jardin_v.2_1.jpg"
                  onChange={handleChange}
                  value={data.keywords || ''}
                />
                <Select
                  options={options}//.map(keyword => keyword.name)}
                  isMulti


                />
              </div>
              {errors.keywords && <div className="help is-danger">{errors.keywords}</div>}
            </div>
            {/* ADD DROPDOWN KEYWORDS */}
          </form>
        </div>

      </div>
    </section>



  )
}


export default withRouter(Form)

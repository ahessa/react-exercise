        import './App.css';
        import React, { useState } from 'react';
        
        function UserForm() {
          const cantons = [
            { label: 'Basel', value: 'Basel' },
            { label: 'Zurich', value: 'Zurich' },
            { label: 'Geneve', value: 'Geneve'}
          ];
          const [values, setValues] = useState({
            firstName: '',
            lastName: '',
            canton: 'Basel' 
            
          });
        
          const handleChange = e => {
            setValues(oldValues => ({
              ...oldValues,
              [e.target.name]: e.target.value
            }));
          }

          function handleSubmit(event) {
            event.preventDefault();
            //alert('{"firstName": ' + values.firstName + '"lastName" : ' + values.lastName, JSON.stringify(values.canton));
            alert(JSON.stringify(values.firstName) +'  '+ JSON.stringify(values.lastName) +'  '+ JSON.stringify(values.canton));
          }
        
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName">First Name: </label>
                <input
                  id="firstName"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name: </label>
                <input
                  id="lastName"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                />
              </div>
              <div>
                  <label>
                    Canton: 
                  <select 
                  id="canton"
                  name="canton"
                  value={values.canton}
                  onChange={handleChange}
                  >
                  {cantons.map((canton) => (
                      <option value={canton.value}>{canton.label}</option>
                    ))}
                  </select>
                  </label>
              </div>
              

              <button type="submit">Submit</button>
            </form>
          );
        }
        
        
        
        export default UserForm;
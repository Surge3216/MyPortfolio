import axios from 'axios';
import React from 'react';
import { useForm } from '../../util/hooks';

export default function Form() {

    const { onChange, onSubmit, values } = useForm(postProjectCallback, {
        title: '',
        image: '',
        description: '',
        gitLink: '',
        deployedLink: ''
      });

      function postProject(){
          const projectData ={
              title: values.title,
              image: values.image,
              description: values.description,
              gitLink: values.gitLink,
              deployedLink: values.deployedLink

          }
          axios.post('/api/projects', projectData)
          .then(function(response){
              console.log(response)
              window.location.reload(false);
          }).catch(err=>{
              console.log(err)
          })
      }

      function postProjectCallback(){
          postProject()
      }

    return (
        <div>
            <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input
          className="validate"
          name="title"
          type="text"
          value={values.title}
          onChange={onChange}
          />
          <label for="first_name">Title</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input 
      label="Image"
      name="image"
      type="text"
      value={values.image}
      onChange={onChange}
          />
          <label for="image">Image source</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
        <textarea id="textarea1" className="materialize-textarea"
        label="Description"
        name="description"
        type="text"
        value={values.description}
        onChange={onChange}
        ></textarea>
          <label for="password">description</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
          label="Gitlink"
          name="gitLink"
          type="text"
          value={values.gitLink}
          onChange={onChange}
          />
          <label for="email">Github Link</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input 
          label="deployedLink"
          name="deployedLink"
          type="text"
          value={values.deployedLink}
          onChange={onChange}
          />
          <label for="email">Deployed Link</label>
        </div>
      </div>
      <button onClick={onSubmit} className="waves-effect waves-light btn">Submit</button>
    </form>
  </div>
        </div>
    )
}

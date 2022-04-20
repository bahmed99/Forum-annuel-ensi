import React, { useState, useRef } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import { Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Alert } from 'react-bootstrap';
import axios from "axios";
import logo16 from '../Assets/images/logo16.png'
import swal from 'sweetalert2'
import ReactLoading from "react-loading";
import "../Assets/css/InscriptionFormulaire.css";

function InscriptionFormulaire() {
  const baseURL = "https://backforum.ensi-junior-entreprise.net/inscription";
  const [loading, setLoading] = useState(false);
  const [ShowFail, setShowFail] = useState(false);
  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const [Nom, setNom] = useState('');
  const [Prenom, setPrenom] = useState('');
  const [Email, setEmail] = useState('');
  const [Birthday, setBirthday] = useState(new Date());

  const [Status, setStatus] = useState('');
  const [Universite, setUniversite] = useState('');
  const [Classe, setClasse] = useState('');
  const [Vaccine, setVaccine] = useState(false);
  const [Partage, setPartage] = useState(false);

  const [CV, setCV] = useState('');

  const [ResponseMessage, setResponseMessage] = useState({})

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };
  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };
  const handleUniversiteChange = (event) => {
    setUniversite(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    setClasse('')
    setUniversite('')
  };
  const handleClasseChange = (event) => {
    setClasse(event.target.value);
  };

  const handleCVChange = (event) => {
    setCV(event.target.files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('CV', CV[0]);
    data.append('Nom', Nom)
    data.append('Prenom', Prenom)
    data.append('Email', Email)
    data.append('Birthday', Birthday)
    data.append('Status', Status)
    data.append('Universite', Universite)
    data.append('Classe', Classe)
    data.append('Vaccine', Vaccine)
    data.append('Partage', Partage)
    setLoading(true)
    axios
      .post(baseURL, data, {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((response) => {
        setLoading(false)
        setResponseMessage(response.data)
        //console.log(ResponseMessage)

        // eslint-disable-next-line no-lone-blocks
        {
          swal.fire({
            text: "Vous êtes inscrit avec succès au 16ème édition du forum annuel de l'ENSI",
            icon: 'success',
            confirmButtonColor: '#2ea3dd',

          })
        }

      }).catch(() => {
        setLoading(false)

        setShowFail(true)
        executeScroll()
        setTimeout(() => setShowFail(false), 2000)

      });

  };

  return (
    <div ref={myRef} className="Inscr_form">
      <h3 className="text-center inscri-title" >Inscrivez vous</h3> 
      <MDBContainer >
        <MDBRow >
          <MDBCol md="12">
            <form onSubmit={handleSubmit}>
               
              <Alert show={ShowFail} variant='danger'>Vous êtes déjà inscrit</Alert>
              <div className="grey-text">
                <MDBInput
                  required
                  label="Nom"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value={Nom}
                  onChange={handleNomChange}

                />
                <MDBInput
                  required
                  label="Prénom"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  iconRegular
                  value={Prenom}
                  onChange={handlePrenomChange}
                />
                <MDBInput
                  required
                  label="e-mail"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  value={Email}
                  onChange={handleEmailChange}
                />
                <MDBInput
                  required
                  label="Date de naissance"
                  icon="calendar-alt"
                  group
                  type="date"
                  validate
                  error="wrong"
                  success="right"
                  hint="Placeholder"
                  value={Birthday}
                  onChange={handleBirthdayChange}
                  onBlur={handleBirthdayChange}
                />

                <FormControl fullWidth >
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Status}
                    label="Status"
                    onChange={handleStatusChange}
                  >
                    <MenuItem value={"Etudiant"}>Etudiant</MenuItem>
                    <MenuItem value={"Diplomé"}>Jeune Diplomé</MenuItem>
                    <MenuItem value={"Employé"}>Employé</MenuItem>
                  </Select>
                </FormControl>
                {Status == "Etudiant" ? (
                  <MDBInput
                    required
                    label="Université"
                    icon="university"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={Universite}
                    onChange={handleUniversiteChange}
                  />
                ) : null}

                {Status == "Etudiant" ? (
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label2">
                      Classe
                    </InputLabel>
                    <Select
                      required
                      labelId="demo-simple-select-label2"
                      id="demo-simple-select2"
                      value={Classe}
                      label="Classe"
                      onChange={handleClasseChange}
                    >
                      <MenuItem value={1}>1ère année</MenuItem>
                      <MenuItem value={2}>2ème année</MenuItem>
                      <MenuItem value={3}>3ème année</MenuItem>
                    </Select>
                  </FormControl>
                ) : null}
              </div>

              <MDBInput
                label="Déposez votre CV"
                icon="file-alt"
                group
                type="file"
                validate
                error="wrong"
                success="right"
                hint="Placeholder"
                onChange={handleCVChange}
              />

              <div class="custom-control custom-checkbox">
                <input
                  required
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultUnchecked"
                  onChange={() => setVaccine(!Vaccine)}
                ></input>
                <label class="custom-control-label" for="defaultUnchecked">
                  Je suis vacciné(e)
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  required
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultUnchecked2"
                  onChange={() => setPartage(!Partage)}
                ></input>
                <label class="custom-control-label" for="defaultUnchecked2">
              J'accepte de partager mes informations avec les entreprises présentes au forum annuel de l'ENSI
                </label>
              </div>

              <div className="text-center buttonIns">
                <Button
                

                  type="submit"
                  disabled={!(!Vaccine || true || loading)}
                  variant="contained"
                  sx={{
                    backgroundColor: "#2ea3dd",
                    "&:focus": {
                      backgroundColor: "#2ea3dd"
                    },
                  }}
                >

                  {loading ? (
                    <ReactLoading
                      height={"20px"}
                      width={"24px"}
                      className="loading1"
                      type="spin"
                    />
                  ) : (
                    "S'inscrire"
                  )}

                </Button>
              </div>
            </form>
          </MDBCol>
          {/* <img src={logo16} className="logo-img" alt=""></img> */}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default InscriptionFormulaire;

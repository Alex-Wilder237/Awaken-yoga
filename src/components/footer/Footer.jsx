import React, { useState } from 'react';
import axios from 'axios';

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envoyer les données du formulaire à Formspree
      await axios.post('https://fomspree.io/f/meojjqzz', formData);

      // Afficher le message de remerciement
      setShowThankYou(true);

      // Log success or redirect the user
      console.log('Form submitted successfully!');
      // Vous pouvez rediriger l'utilisateur ou afficher un message de succès comme nécessaire

    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire :', error);
      // Gérer l'erreur, afficher un message d'erreur ou rediriger l'utilisateur
    }

    // Réinitialiser le formulaire après la soumission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });

    // Masquer le message de remerciement après quelques secondes
    setTimeout(() => setShowThankYou(false), 5000);
  };



  return (
    <div className='h-[auto] md:h-screen bg-violet-300 rounded-t-3xl py-[100px] md:px-[50px] px-8'>
      <div className='md:grid grid-cols-2 md:space-x-3 '>
<div className="col-span-1 flex flex-col gap-10 mb-8">
  <div>
<h1 className="lg:text-6xl lg:leading-[4.5rem] text-4xl font-bold max-md:mb-8 text-center md:text-left ">Contact Us</h1>
  </div>
  <div>
  <p className="text-lg lg:text-2xl text-center md:text-justify  lg:leading-[2.5rem] md:w-[80%]">
              Our offerings include among others. Each class designed to meet your
              needs. Whether you’re a beginner or an experienced yoga
            </p>
  </div>
  
 <div className='flex flex-row'>
  <a className='' href="/">
    <img className='flex p-4 bg-white rounded-full object-cover w-[100px] lg:w-[5vw]' src="./assets/facebook.png" alt="facebook"/>
  </a>
  <a className='' href="/">
    <img className='flex p-4 bg-white rounded-full object-cover w-[100px] lg:w-[5vw]' src="./assets/whatsapp.png" alt="facebook"/>
  </a>
  <p className='text-lg flex lg:text-2xl font-bold justify-center items-center px-8 py-4 bg-white rounded-full'>
 656567124
  </p>
 </div>

</div>

<div className="col-span-1">
            <form className='flex flex-col ' onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-wrap  lg:flex-nowrap gap-2 w-full">
                <div className='w-full'>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    placeholder='Noms'
                    onChange={handleChange}
                    required
                    className="p-8 border w-full rounded-full"
                  />
                </div>

                <div className='w-full'>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder='Prenoms'
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="p-8 border w-full rounded-full"
                  />
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-8 border w-full rounded-full"
                />
              </div>

              <div className="mb-4">
                <textarea
                  placeholder='Envoyez-nous votre question ou votre message'
                  cols="50"
                  rows="3"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="p-8 border w-full rounded-3xl"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-purple-700 w-full md:w-fit text-white font-bold py-5 px-20 rounded-full hover:bg-blue-600"
              >
                Envoyer
              </button>



            </form>
          </div>
          {showThankYou && (
          <div className="fixed p-4 top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img className='w-[13%] mb-2 ' src="./assets/aerial.png" alt="logo"/>
              <h2 className="text-2xl font-bold mb-4">Merci de nous avoir contactés !</h2>
              <p>Nous vous répondrons dès que possible.</p>
              <button
                className="mt-4 bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={() => setShowThankYou(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Footer
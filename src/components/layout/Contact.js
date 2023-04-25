import emailjs from 'emailjs-com'
import { useState, useEffect } from 'react';
import Lottie from 'react-lottie'
import messagesLottie from '../../lotties/messages'

const Contact = () => {

  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: messagesLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true)

    emailjs.sendForm('service_wwgusaf', 'template_k68clku', e.target, '_809OHyuvaGibTyK9')
      .then((result) => {
        setSent(true)
        setLoading(false)
      }, (error) => {
          console.log(error.text);
          setLoading(false)
      });
  }

  if (sent) {
    return (
      <div className='w-full h-40 bg-white dark:bg-primary mt-14 flex flex-col justify-center items-center'>
        <p className='w-2/3 text-center text-lg'>Thanks for contacting me!</p>
        <p className='w-2/3 text-center text-sm'>I will try to respond to your message as soon as possible!</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className='h-40 bg-transparent mt-14 flex flex-col justify-center items-center'>
        <Lottie 
          options={defaultOptions}
          height={200}
          width={200}
        />
      </div>
    )
    
  }

  return (
    <section id="contact" className='md:mt-14 pt-10 md:pt-2 flex flex-col md:flex-row w-full mx-auto items-center p-2 bg-white md:h-52 dark:bg-primary relative'>
      <div className='w-full md:w-1/3 mb-4 md:mb-0 text-lg md:text-3xl font-semibold flex flex-col gap-2 pl-4'>
        <span>Love to hear from you,</span>
        <span>Get in touch !</span>
      </div>
      <form className="w-full md:w-2/3 relative text-primary text-sm font-semibold flex flex-col items-end justify-between" onSubmit={sendEmail}>
        <div className='flex flex-col md:flex-row w-full gap-4 justify-between'>
          <input type="hidden" name="contact_number"/>
          <div className='flex md:flex-col mt-2 md:mt-0 start gap-4 w-full md:w-1/2 justify-between'>
            <span className='w-full'>
              <input className='text-secondary bg-gray-100 h-10 w-full pl-4' type="text" name="from_name" required placeholder='Your name'/>
            </span>
            <span className='w-full'>
              <input className='text-secondary bg-gray-100 h-10 w-full pl-4' type="email" name="user_email" required placeholder='Your email'/>
            </span>
          </div>
          <span className='w-full md:w-1/2'>
            <textarea className='text-secondary bg-gray-100 h-32 md:h-full w-full p-2' name="message" required placeholder='Your message'/>
          </span>
        </div>
        <input className='bg-secondary md:bg-secondary hover:bg-highlight md:absolute mt-2 md:mt-0 -bottom-12 right-0 text-white w-1/4 px-8 py-2 cursor-pointer' type="submit" value="Send"/>
      </form>
    </section>
  );
};


export default Contact;
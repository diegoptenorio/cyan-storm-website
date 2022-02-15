import Header from '../../components/Header';
import Article from '../../components/Article';
import Footer from '../../components/Footer';

import PrivacyImage from '../../assets/img/articles/privacy.jpg'

import 'tailwindcss/tailwind.css';

const Privacy = () => (
  <>
    <div className="h-[12px] bg-light-blue w-full -mb-[12px]"></div>
    <div className="h-[200vh] w-[100vw] -z-10 fixed -translate-y-[100vh] bg-gradient-radial from-gradient-light-blue via-gradient-dark-blue to-gradient-dark-blue"></div>
    <div className="max-w-screen-lg top-0 z-10 left-0 right-0	mx-auto">
      <Header />
    </div>
    <div className="max-w-screen-lg z-10 left-0 right-0	mx-auto">
        <Article
            image={PrivacyImage}
            title='Privacy Policy'
        >
            <div>
                <p> Your privacy is important to us. It is <strong>Tonguemeleon's</strong> policy to respect your privacy regarding any information we may collect from you across our application, Tonguemeleon.</p><br />
                <p> We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p><br />
                <p> We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p><br />
                <p> We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p><br />
                <p> Our application may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p><br />
                <p> You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p><br />
                <p>Your continued use of our application will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p><br />
                <p> This policy is effective as of <strong>February</strong> <strong>2022</strong>.</p>
            </div>   
        </Article>
    </div>
    <div className="z-10 w-full">
      <Footer />
    </div>
  </>
);

export default Privacy;
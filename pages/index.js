import InteractiveForm from '../components/InteractiveForm';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>LinkedIn Magic</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/128/8381/8381998.png" />
      </Head>
      <div>
        <h1>Ideas into LinkedIn 🖊️</h1>
        <h2>Let our expert AI generate a captivating and engaging LinkedIn post for you!</h2>
        <div className="icon-container">
          <a href="https://ai-tweet-generator-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="twitter-icon">
            <RiTwitterXLine />
          </a>
          <a href="https://github.com/arindal1/AI-LinkedIn-Generator" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <InteractiveForm />
      </div>
    </>
  );
}

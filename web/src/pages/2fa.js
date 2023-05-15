import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import speakeasy from "speakeasy";
import emailjs from 'emailjs-com';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [token, setToken] = useState(null);
  const [userToken, setUserToken] = useState("");
  const [message, setMessage] = useState("");
  const [isLoginActive, setIsLoginActive] = useState(false);
  const email = "snp43@cornell.edu"; // replace with the actual email

  const generateToken = () => {
    const newToken = speakeasy.generateSecret().base32;
    setToken(newToken);

    emailjs.send("service_adphn8k", "template_bcnrzfa", {
      username: email,
      token: newToken,
    }, "kHQONyhpLT-m20lgu")
    .then(() => setMessage("Token sent! Check your email."))
    .catch(() => setMessage("Error sending token."));
  };

  const checkToken = () => {
    if (userToken === token) {
      setIsLoginActive(true);
      setMessage("Token confirmed. You can now log in.");
    } else {
      setMessage("Incorrect token. Please try again.");
    }
};
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Head>
          <title>Career Curve</title>
        </Head>

        <header className="bg-gradient-to-r from-green-400 to-blue-500 p-6 flex justify-between items-center">
          <div>
            <Link href="./">
              <h1 className="text-4xl font-bold text-white">Career Curve</h1>
            </Link>
            <p className="text-white">
              Find your perfect tech job, tailored to your aspirations
            </p>
          </div>
        </header>

        <main className="container mx-auto p-6 max-w-none">
          <section
            className="bg-cover bg-center p-6 min-h-screen flex items-center justify-center mb-6"
            style={{
              backgroundImage: `url('/blue-green.png')`,
              minHeight: "40vh",
            }}
          >
            {/* <img src="/blue-green.png" className="w-full h-64" /> */}
            <div className="text-center">
              {/* <span className="material-icons text-blue-500 text-6xl">
                    edit
                </span> */}
              <span class="bi bi-box text-blue-700 text-9xl"></span>
              <p className="text-blue-600 text-9xl font-semibold py-2 px-4 rounded-md shadow-lg mb-6">
                CareerCurve
              </p>
              <p className="text-blue-500 text-3xl font-semibold py-2 px-4">
                {/* Your Fast Track to Exponential Success */}
                {/* Where Dreams Take Shape on the Path of Exponential Growth! */}
                {/* CareerCurve: The Only Curve That Propels Your Career to New Heights */}
                {/* Discover the Power of CareerCurve: Your Fast Track to Exponential Success */}
              </p>
            </div>
          </section>
          <div className="text-center">
        {token === null && (
          <button onClick={generateToken}>Generate Token</button>
        )}
        {token !== null && (
          <>
            <input
              type="text"
              placeholder="Enter your token"
              onChange={(e) => setUserToken(e.target.value)}
            />
            <button onClick={checkToken}>Verify Token</button>
            {isLoginActive && (
              <Link href="/index_applicant">
                <button>Login</button>
              </Link>
            )}
          </>
        )}
        {message && <p>{message}</p>}
      </div>
        </main>

        <footer className="bg-gray-200 p-6">
          <p className="text-center mt-4">
            &copy; 2023 Career Curve. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
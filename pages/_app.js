import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';



function MyApp({ Component, pageProps }) {
  return (
    <>
    
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
      <Component {...pageProps} />
      
    </>
  );
}

export default MyApp;

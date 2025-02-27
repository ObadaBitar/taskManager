import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header>
          <nav>
            <div style={{display:'flex'}}>
              <a href='\contact-us'><h2>Task manger</h2></a>
              <button className="burger">☰</button>
            </div>
            <menu>
              <li><a href='\contact-us'>Contact us</a></li>
              <li><a href='\about-us'>About us</a></li>
              <li><a href='\log-in'>Log in</a></li>
              <li><a href='\'>Sign up</a></li>
            </menu>
          </nav>
        </header>
        {children}
        <footer>
          <p>Task manger &copy; {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}
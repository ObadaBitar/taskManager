export default function Home() {

  return (
    <main>
      <div>

        <h1>
          Register page
        </h1>

        <form>
          <div className="input">
            <label htmlFor="usernName">User Name</label>
            <input type="text" id="usernName"></input>
          </div>

          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="text" id="email"></input>
          </div>

          <div className="input">
            <label htmlFor="password">Password</label>
            <input type="text" id="password"></input>
          </div>

          <div className="input">
            <label htmlFor="rePassowrd">Re-Passowrd</label>
            <input type="text" id="rePassowrd"></input>
          </div>

          <div className="input" style={{flexDirection:'row', gap:'0.5em'}}>
            <input type="checkbox" id="showPassword"></input>
            <label htmlFor="showPassword">Show password</label>
          </div>
        </form>


      </div>
    </main>
  );
}

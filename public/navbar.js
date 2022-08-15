function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-info text-#fff">
      <a className="navbar-brand" href="#">BankApp</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse text-#fff" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
            <a className="nav-link" href="#/CreateAccount/" data-toggle="tooltip" data-placement="top" title="Create account to join the bank">Create Account</a>
          </li>
          <li className="nav-item" data-toggle="tooltip" data-placement="top" title="Access your account here">
            <a className="nav-link" href="#/login/">Login</a>
          </li>
          <li className="nav-item" data-toggle="tooltip" data-placement="top" title="Deposite here">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item" data-toggle="tooltip" data-placement="top" title="Withdrawal tab">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item" data-toggle="tooltip" data-placement="top" title="Check your balance">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>
          <li className="nav-item" data-toggle="tooltip" data-placement="top" title="See all data">
            <a className="nav-link" href="#/alldata/">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}
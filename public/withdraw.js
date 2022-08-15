function Withdraw(){
  const [withdraw, setWithdraw] = React.useState(0);
  const [account, setAccount] = React.useState(0);
  const ctx = React.useContext(UserContext);

  const handleWithdraw = () => {
    if (isNaN(withdraw)) {
      alert('Enter a valid number');
      return false;
    }

    ctx.users[account].balance >= parseInt(withdraw)
      ? (ctx.users[account].balance -= parseInt(withdraw))
      : alert('Add funds');
    ctx.push({
      account: ctx.users[account],
      amount: withdraw,
      isDeposit: false,
    });
    document.getElementById('success').classList.remove('invisible');
    return setWithdraw(0);
  };
return(
  <Card
      bgcolor="info"
      txtcolor="black"
      header="Withdraw"
      body={
              <>
              Balance: ${ctx.users[account].balance} <br/>
              Withdraw Amount:<br/>
              <input type="input" min="0" className="form-control" id="amount" placeholder=" " value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} required /><br/>
              <br/>
              <button type="submit" className="btn btn-dark" onClick={handleWithdraw}>Withdraw</button>
              </>
            }
    />
)

};

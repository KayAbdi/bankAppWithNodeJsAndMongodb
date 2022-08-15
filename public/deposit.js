function Deposit(){
	const [deposit, setDeposit] = React.useState(0);
	const [account, setAccount] = React.useState(0);
  const ctx = React.useContext(UserContext);

  const handleDeposit = () => {
    if (isNaN(deposit)) {
			alert('Enter a valid number');
			return false;
		}
    if (parseInt(deposit) < 0) {
			alert('Enter a positive number');
			return false;
		}
    else {
      ctx.users[account].balance += parseInt(deposit);
      ctx.push({
        account: ctx.users[account],
        amount: deposit,
        isDeposit: true,
      });
    }
		return setDeposit(0);
	};


  return (
    <Card
      bgcolor="info"
      txtcolor="black"
      header="Deposit"
      body={
              <>
              Balance: ${ctx.users[account].balance} <br/>
              Deposit Amount:<br/>
              <input type="input" min="0" className="form-control" id="amount" placeholder=" " value={deposit} onChange={e => setDeposit(e.currentTarget.value)} required /><br/>
              <br/>
              <button type="submit" className="btn btn-dark" onClick={handleDeposit}>Deposit</button>
              </>
            }
    />
  )
}

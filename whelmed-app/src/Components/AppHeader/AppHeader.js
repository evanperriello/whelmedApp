import React from 'react';

const AppHeader = (props)=>{
return (
    <div>
        <header className="App-header">
            <img className="App-logo" src='./images/whelmedLogo.png' alt='Whelmed logo'/>
            {props.user ? <button onClick={props.logout}>Log Out</button> : <button onClick={props.login}>Log In with Google</button>}
        </header>
        <p className="App-intro">
        Big goals, small steps.
        </p>
    </div>
);
}

export default AppHeader;
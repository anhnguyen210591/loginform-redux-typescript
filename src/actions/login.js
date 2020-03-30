export const setLoginPending=(isLoginPending)=>{
    return {
        type:'LOGIN_PENDING',
        isLoginPending
    }
}

export const setLoginSuccess=(isLoginSuccess)=>{
    return {
        type:'LOGIN_SUCCESS',
        isLoginSuccess
    }
}

export const setLoginError=(isLoginError)=>{
    return {
        type:'LOGIN_ERROR',
        isLoginError
    }
}

export function logout(){
    return dispatch =>{
        dispatch(setLoginSuccess(false))
    }
}

export function login(email,password){
    return dispatch => {
        sendLoginRequest(email,password)
    .then(success => {
        dispatch(setLoginPending(false));
        dispatch(setLoginSuccess(true));
    })
    .catch(err=>{
    
        dispatch(setLoginPending(false));
        dispatch(setLoginError(err))
    })
    }
}

function sendLoginRequest(email,password){
    return new Promise((resolve,reject) => {
        fetch("http://localhost:9000/user/authen",{
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body : JSON.stringify({email,password})
        })
        .then(function(reponse){
            if (!reponse.ok) { throw reponse }
            return resolve(reponse.json());
        })    
        .catch(async function(err) {
            const error = await err.json();
            console.log(error)
            return reject(error.Message);
        })
    });
}


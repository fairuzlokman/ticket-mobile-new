import { post } from "."


// export const LoginUser= async (data) => {
//     const res = await post('https://ticker-heroku.herokuapp.com/api/auth/login', data);
//     return res
// }


export const LoginUser = async (data) => {
    const res = await post(
        'https://ticketing-fairuz-lokman.herokuapp.com/api/user-login', data
    )
    return res;
}
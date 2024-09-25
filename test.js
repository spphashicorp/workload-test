import {
  getIDToken
} from '@actions/core'

// console.log(
//   'hello, world!',
//   process.env.ACTIONS_ID_TOKEN_REQUEST_URL,
//   process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN,
// )
const main = async () => {
  const token = await getIDToken()
}

main()
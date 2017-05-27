import * as functions from "firebase-functions"

export let helloWorld = functions.https.onRequest((req, res) => {
  let world = `from ES6 in Cloud Functions!`
  res.status(200).send(`Hello ${world}`)
})

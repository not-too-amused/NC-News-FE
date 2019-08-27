export const RandomArticle = () => {
  const randNum = Math.ceil(Math.random() * 36)
  console.log("/articles/all/" + randNum)
  return "/articles/all/" + randNum
}
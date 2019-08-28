export const RandomArticle = () => {
  const randNum = Math.ceil(Math.random() * 36)
  return "/articles/all/" + randNum
}
import React from "react";

export const RandomArticle = () => {
  const randNum = Math.floor(Math.random() * 36)
  console.log("/articles/all/" + randNum)
  return "/articles/all/" + randNum
}

// export default RandomArticle
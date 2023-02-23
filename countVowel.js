const str =
  'Beware of bugs in the aboce code; I have only proved it correct, not tried it.'

const countVowel = str => {
  const vowels = str.match(/[aeiou]/g).reduce((acc, char) => {
    acc[char] = (acc[char] ?? 0) + 1
    return acc
  }, {})

  return Object.entries(vowels)
    .map(vowel => {
      return {
        vowel: vowel[0],
        count: vowel[1],
      }
    })
    .sort((a, b) => b.count - a.count)
  // .slice(0, 1)
}

console.log(countVowel(str))

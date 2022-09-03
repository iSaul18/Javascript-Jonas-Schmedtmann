const capitalize = (string) => {
  const cortar = string.split("");
  cortar[0] = cortar[0].toUpperCase();

  return cortar.join("");
};

console.log(capitalize("saul"));

export const Auth = {
  login({ name, email, password }) {
    return new Promise((resolve, reject) => {
      if(email === "pazbascunan@tecnochile.com" && password === "prueba"){
        resolve({ name: name || "Paz Bascuñan", email });
      } else {
        reject(new Error("Credenciales inválidas"));
      }
    });
  }
}

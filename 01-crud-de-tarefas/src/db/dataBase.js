import fs from 'fs/promises';

const caminhoDoBancoDeDados = new URL('../bancoDeDados.json', import.meta.url);

export class BancoDeDados {

  #bancoDeDados ={}

  // Método para carregar o banco de dados => construtor
  constructor() {
    fs.readFile(caminhoDoBancoDeDados, 'utf8').then(dados => {
      this.#bancoDeDados = JSON.parse(dados);
    })
    .catch((error) => {
      this.#persistirDados();
    })
  }

  // Método para persistir os dados no banco de dados
  #persistirDados = () => {
    fs.writeFile(caminhoDoBancoDeDados, JSON.stringify(this.#bancoDeDados));
  }

  seleclt(table, data){
    if(Array.isArray)
  }

  insert(){}

  update(){}

  delete(){}

}
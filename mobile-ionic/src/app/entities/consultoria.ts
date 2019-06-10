import { Endereco } from './endereco';

export class Consultoria{
    id:string = '';
    cnpj:string = '';
    nomeFantasia:string = '';
    razaoSocial:string = '';
    email:string = '';
    nomeContato:string = '';
    telefone:string = '';
    endereco:Endereco;
    areaFoco:string = '';

    /**transforma o json em consultoria */
    static fromJSON(json: ConsultoriaJSON|string): Consultoria{
        //se 
        if(typeof json === 'string'){
            return JSON.parse(json, Consultoria.reviver);
        }else{
            //cria uma instancia de consultoria
            let consultoria = Object.create(Consultoria.prototype);
            
            consultoria.id = json.id;
            consultoria.cnpj = json.cnpj;
            consultoria.nomeFantasia = json.nomeFantasia;
            consultoria.razaoSocial = json.razaoSocial;
            consultoria.email = json.email;
            consultoria.nomeContato = json.nomeContato;
            consultoria.telefone = json.telefone;
            consultoria.areaFoco = json.areaFoco;
            // consultoria.endereco = json.endereco;
            return consultoria;
        }
    }
    static reviver(key: string, value: any):any {
        return key === '' ? Consultoria.fromJSON(value) : value;
    }

}

interface ConsultoriaJSON {
    id:string;
    cnpj:string;
    nomeFantasia:string;
    razaoSocial:string;
    email:string;
    nomeContato:string;
    telefone:string;
    endereco:Endereco;
    areaFoco:string;
}

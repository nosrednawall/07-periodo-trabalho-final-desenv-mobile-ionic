/**imports angular e ionic */
import { Component, NgZone, OnInit } from '@angular/core';
import { LoadingController, ActionSheetController, AlertController } from '@ionic/angular';

// import { ApiService } from '../api.service';
// import { Consultoria } from '../entities/consultoria';

/**declaracoes desse componente */
@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
/** classe desse componente */
export class ListaPage implements OnInit{

  /**objeto array que ficara com a colecao de consultorias */
  public consultorias: any[] = []; //objetos fakes utilizados na aprendizagem do ionic
  // public dataSource: Consultoria[]; //objetos pegos do servidor

  /**meu json que possui uma colecao de consultorias */
  jsonString:string = '[{"id":1,"cnpj":"37.939.007/0001-83","nomeFantasia":"Gato Ajato Consultoria Ltda","razaoSocial":"Marcela e Antonella Ferragens ME","email":"diretoria@marcelaeantonellaferragensme.com.br","nomeContato":"Marcela","telefone":"(41) 2531-4950","endereco":{"id":1,"cep":"83221-332","nomeRua":"Acesso Diva Nunes dos Santos","municipio":"Paranaguá","estado":"PR","pais":"Brasil"},"areaFoco":"Ferragens"},{"id":2,"cnpj":"58.412.090/0001-08","nomeFantasia":"Sabrina e Roberto Financeira ME","razaoSocial":"Sabrina e Roberto Financeira ME","email":"seguranca@sabrinaerobertofinanceirame.com.br","nomeContato":"Sabrina","telefone":"(43) 3658-2837","endereco":{"id":2,"cep":"86073-480","nomeRua":"Rua Sidrak Silva Filho","municipio":"Londrina","estado":"PR","pais":"Brasil"},"areaFoco":"Segurança"},{"id":3,"cnpj":"29.475.037/0001-58","nomeFantasia":"Martin e Isabella Pães e Doces ME","razaoSocial":"Martin e Isabella Pães e Doces ME","email":"contato@martineisabellapaesedocesme.com.br","nomeContato":"Martin","telefone":"(41) 2638-4314","endereco":{"id":3,"cep":"80240-001","nomeRua":"Avenida Sete de Setembro","municipio":"Curitiba","estado":"PR","pais":"Brasil"},"areaFoco":"Doces"}]';
  
  private excluirConsultoria:boolean = false;
  isLoadingResults = false;
  /**método construtor  */
  constructor(public loadingController: LoadingController, 
    public actionSheetController: ActionSheetController, 
    public alertController: AlertController,
   ) { 
    this.consultorias = JSON.parse(this.jsonString); 
   }

  ngOnInit(){ 
    // this._api.getConsultorias()
    // .subscribe(res => {
    //   this.consultorias = res;
    //   console.log('recebendo as consultorias '+this.consultorias);
    //   this.isLoadingResults = false;
    // }, err => {
    //   console.log(err);
    //   this.isLoadingResults = false;
    // });
    //adiciona o array em json ao objeto de consultorias
  }

  /**Método mostra tela de opções para cada card */
  async opcoesCardConsultoria(consultoria: any) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Ações',
      buttons: [{
        text: 'Deletar ',
        role: 'calcel',
        icon: 'trash',
        handler: async() => {
          
          const alert = await this.alertController.create({
            header: 'Confirmação!',
            message: 'Tem certeza que deseja excluir a consultoria <strong>'+ consultoria.nomeFantasia +'</strong>!!!',
            buttons: [
              {
                text: 'Cancelar',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                  console.log('Cancelado');
                  this.excluirConsultoria = false;
                  
                }
              }, {
                text: 'Confirmar',
                handler: async() => {
                  console.log('Confirmado');
                  var index = this.consultorias.map(function(d) { return d['cnpj']; }).indexOf(consultoria.cnpj);    
                  this.consultorias.splice(index, 1);
                  this.excluirConsultoria = false;
                  return true;
                }
              }
            ]        
          });
          const variavel = await alert.present();
          console.log('Deletar clicked');
        }
      }, {
        text: 'Editar',
        icon: 'create',
        handler: () => {
          console.log('Editar clicked');
        }
      }, {
        text: 'Fechar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    return await actionSheet.present();
  }

    /**metodo instancia o loading na tela */
    async presentLoading() {
      const loading = await this.loadingController.create({
        message: 'Carregando',
        duration: 2000
      });
     return await loading.present();
    }
  
}
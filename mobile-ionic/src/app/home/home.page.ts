/**imports */
import { Component } from '@angular/core';

import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

/**imports */
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

/**classe propriamente dita */
export class HomePage {

  /**variavel que salva o endereco do servidor no shared preferences */
  private enderecoServidor:string = '';

  /**serve para salvar informações no storage */
  private storage:Storage;

  /** splashscreen */
  private splashScreen: SplashScreen;

  /**construtor da classe */
  constructor(private storageB: Storage, public toastController: ToastController, private splashScreenB: SplashScreen) {
    //instancia o storage da classe
    this.storage = storageB;

    this.splashScreen = splashScreenB;
    //busco o valor do endereço salvo no storage   
    storageB.get('servidor').then((val) => {
      console.log('o endereco do servidor é: ', val);
      this.enderecoServidor = val;
    });
  }

  //mostra o toast
  async presentToast(mensagem:string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }
  //salva o valor do input do endereco do servidor
  onKey(value: string){
    this.enderecoServidor = value;
  }
  //salva o endereco no storage
  salvarEndereco(endereco:string) {
    this.storage.set('servidor', endereco);
    this.presentToast('O endereço '+endereco+' foi salvo com sucesso!');
  }
}

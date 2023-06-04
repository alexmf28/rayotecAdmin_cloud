declare let iziToast:any;

export class MessageBox {

    static error(message: string) {
        iziToast.show({
          title: 'ERROR',
          titleColor: '#FF0000',
          color: '#FFF',
          class: 'text-danger',
          position: 'topRight',
          message: message
        });
    }

    static errors(error: any) {
      const errors = Object.keys(error.error.errors);
      
      errors.map((e:string ) => {
        const colum = error.error.errors[e];
        colum.forEach((e:any) => {
          MessageBox.error(e);
        });
      });
      
    }

    static success(message: string) {
        iziToast.show({
          title: 'Éxito',
          titleColor: '#1DC74C',
          color: '#FFF',
          class: 'text-success',
          position: 'topRight',
          message: message
        });
    }

    static messageWelcome(message: string) {
      iziToast.show({
        title: '',
        titleColor: '#1DC74C',
        color: '#FFF',
        class: 'text-success',
        position: 'topRight',
        message: message
      });
  }
}
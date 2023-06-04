declare let $:any;

export class JQuery {
    
    static closeModal(modal:string) {
        $(`#${modal}`).modal('hide');
    }

    static removeClassById(id:string, clase:string) {
        $(`#${id}`).removeClass(`${clase}`);
    }
}
